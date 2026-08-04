(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function ng(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Bu={exports:{}},as={},Hu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function Mw(){if(kp)return re;kp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),v=Symbol.iterator;function I(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function q(S,R,Y){this.props=S,this.context=R,this.refs=$,this.updater=Y||F}q.prototype.isReactComponent={},q.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},q.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function pe(){}pe.prototype=q.prototype;function Oe(S,R,Y){this.props=S,this.context=R,this.refs=$,this.updater=Y||F}var xe=Oe.prototype=new pe;xe.constructor=Oe,j(xe,q.prototype),xe.isPureReactComponent=!0;var Ne=Array.isArray,_t=Object.prototype.hasOwnProperty,Be={current:null},Ge={key:!0,ref:!0,__self:!0,__source:!0};function ot(S,R,Y){var ee,te={},ne=null,ce=null;if(R!=null)for(ee in R.ref!==void 0&&(ce=R.ref),R.key!==void 0&&(ne=""+R.key),R)_t.call(R,ee)&&!Ge.hasOwnProperty(ee)&&(te[ee]=R[ee]);var de=arguments.length-2;if(de===1)te.children=Y;else if(1<de){for(var Ee=Array(de),yt=0;yt<de;yt++)Ee[yt]=arguments[yt+2];te.children=Ee}if(S&&S.defaultProps)for(ee in de=S.defaultProps,de)te[ee]===void 0&&(te[ee]=de[ee]);return{$$typeof:i,type:S,key:ne,ref:ce,props:te,_owner:Be.current}}function Kt(S,R){return{$$typeof:i,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Dt(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function on(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return R[Y]})}var Ct=/\/+/g;function qe(S,R){return typeof S=="object"&&S!==null&&S.key!=null?on(""+S.key):R.toString(36)}function lt(S,R,Y,ee,te){var ne=typeof S;(ne==="undefined"||ne==="boolean")&&(S=null);var ce=!1;if(S===null)ce=!0;else switch(ne){case"string":case"number":ce=!0;break;case"object":switch(S.$$typeof){case i:case e:ce=!0}}if(ce)return ce=S,te=te(ce),S=ee===""?"."+qe(ce,0):ee,Ne(te)?(Y="",S!=null&&(Y=S.replace(Ct,"$&/")+"/"),lt(te,R,Y,"",function(yt){return yt})):te!=null&&(Dt(te)&&(te=Kt(te,Y+(!te.key||ce&&ce.key===te.key?"":(""+te.key).replace(Ct,"$&/")+"/")+S)),R.push(te)),1;if(ce=0,ee=ee===""?".":ee+":",Ne(S))for(var de=0;de<S.length;de++){ne=S[de];var Ee=ee+qe(ne,de);ce+=lt(ne,R,Y,Ee,te)}else if(Ee=I(S),typeof Ee=="function")for(S=Ee.call(S),de=0;!(ne=S.next()).done;)ne=ne.value,Ee=ee+qe(ne,de++),ce+=lt(ne,R,Y,Ee,te);else if(ne==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ce}function Tt(S,R,Y){if(S==null)return S;var ee=[],te=0;return lt(S,ee,"","",function(ne){return R.call(Y,ne,te++)}),ee}function O(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var U={current:null},N={transition:null},L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:N,ReactCurrentOwner:Be};function b(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Tt,forEach:function(S,R,Y){Tt(S,function(){R.apply(this,arguments)},Y)},count:function(S){var R=0;return Tt(S,function(){R++}),R},toArray:function(S){return Tt(S,function(R){return R})||[]},only:function(S){if(!Dt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=q,re.Fragment=n,re.Profiler=l,re.PureComponent=Oe,re.StrictMode=s,re.Suspense=m,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,re.act=b,re.cloneElement=function(S,R,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=j({},S.props),te=S.key,ne=S.ref,ce=S._owner;if(R!=null){if(R.ref!==void 0&&(ne=R.ref,ce=Be.current),R.key!==void 0&&(te=""+R.key),S.type&&S.type.defaultProps)var de=S.type.defaultProps;for(Ee in R)_t.call(R,Ee)&&!Ge.hasOwnProperty(Ee)&&(ee[Ee]=R[Ee]===void 0&&de!==void 0?de[Ee]:R[Ee])}var Ee=arguments.length-2;if(Ee===1)ee.children=Y;else if(1<Ee){de=Array(Ee);for(var yt=0;yt<Ee;yt++)de[yt]=arguments[yt+2];ee.children=de}return{$$typeof:i,type:S.type,key:te,ref:ne,props:ee,_owner:ce}},re.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},re.createElement=ot,re.createFactory=function(S){var R=ot.bind(null,S);return R.type=S,R},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:f,render:S}},re.isValidElement=Dt,re.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:O}},re.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},re.startTransition=function(S){var R=N.transition;N.transition={};try{S()}finally{N.transition=R}},re.unstable_act=b,re.useCallback=function(S,R){return U.current.useCallback(S,R)},re.useContext=function(S){return U.current.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S){return U.current.useDeferredValue(S)},re.useEffect=function(S,R){return U.current.useEffect(S,R)},re.useId=function(){return U.current.useId()},re.useImperativeHandle=function(S,R,Y){return U.current.useImperativeHandle(S,R,Y)},re.useInsertionEffect=function(S,R){return U.current.useInsertionEffect(S,R)},re.useLayoutEffect=function(S,R){return U.current.useLayoutEffect(S,R)},re.useMemo=function(S,R){return U.current.useMemo(S,R)},re.useReducer=function(S,R,Y){return U.current.useReducer(S,R,Y)},re.useRef=function(S){return U.current.useRef(S)},re.useState=function(S){return U.current.useState(S)},re.useSyncExternalStore=function(S,R,Y){return U.current.useSyncExternalStore(S,R,Y)},re.useTransition=function(){return U.current.useTransition()},re.version="18.3.1",re}var Np;function Oc(){return Np||(Np=1,Hu.exports=Mw()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function bw(){if(Rp)return as;Rp=1;var i=Oc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var w,v={},I=null,F=null;g!==void 0&&(I=""+g),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(F=m.ref);for(w in m)s.call(m,w)&&!u.hasOwnProperty(w)&&(v[w]=m[w]);if(f&&f.defaultProps)for(w in m=f.defaultProps,m)v[w]===void 0&&(v[w]=m[w]);return{$$typeof:e,type:f,key:I,ref:F,props:v,_owner:l.current}}return as.Fragment=n,as.jsx=d,as.jsxs=d,as}var Pp;function Fw(){return Pp||(Pp=1,Bu.exports=bw()),Bu.exports}var P=Fw(),Xe=Oc();const Uw=ng(Xe);var Jo={},$u={exports:{}},ft={},Gu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function zw(){return xp||(xp=1,(function(i){function e(N,L){var b=N.length;N.push(L);e:for(;0<b;){var S=b-1>>>1,R=N[S];if(0<l(R,L))N[S]=L,N[b]=R,b=S;else break e}}function n(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var L=N[0],b=N.pop();if(b!==L){N[0]=b;e:for(var S=0,R=N.length,Y=R>>>1;S<Y;){var ee=2*(S+1)-1,te=N[ee],ne=ee+1,ce=N[ne];if(0>l(te,b))ne<R&&0>l(ce,te)?(N[S]=ce,N[ne]=b,S=ne):(N[S]=te,N[ee]=b,S=ee);else if(ne<R&&0>l(ce,b))N[S]=ce,N[ne]=b,S=ne;else break e}}return L}function l(N,L){var b=N.sortIndex-L.sortIndex;return b!==0?b:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],w=1,v=null,I=3,F=!1,j=!1,$=!1,q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function xe(N){for(var L=n(g);L!==null;){if(L.callback===null)s(g);else if(L.startTime<=N)s(g),L.sortIndex=L.expirationTime,e(m,L);else break;L=n(g)}}function Ne(N){if($=!1,xe(N),!j)if(n(m)!==null)j=!0,O(_t);else{var L=n(g);L!==null&&U(Ne,L.startTime-N)}}function _t(N,L){j=!1,$&&($=!1,pe(ot),ot=-1),F=!0;var b=I;try{for(xe(L),v=n(m);v!==null&&(!(v.expirationTime>L)||N&&!on());){var S=v.callback;if(typeof S=="function"){v.callback=null,I=v.priorityLevel;var R=S(v.expirationTime<=L);L=i.unstable_now(),typeof R=="function"?v.callback=R:v===n(m)&&s(m),xe(L)}else s(m);v=n(m)}if(v!==null)var Y=!0;else{var ee=n(g);ee!==null&&U(Ne,ee.startTime-L),Y=!1}return Y}finally{v=null,I=b,F=!1}}var Be=!1,Ge=null,ot=-1,Kt=5,Dt=-1;function on(){return!(i.unstable_now()-Dt<Kt)}function Ct(){if(Ge!==null){var N=i.unstable_now();Dt=N;var L=!0;try{L=Ge(!0,N)}finally{L?qe():(Be=!1,Ge=null)}}else Be=!1}var qe;if(typeof Oe=="function")qe=function(){Oe(Ct)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,Tt=lt.port2;lt.port1.onmessage=Ct,qe=function(){Tt.postMessage(null)}}else qe=function(){q(Ct,0)};function O(N){Ge=N,Be||(Be=!0,qe())}function U(N,L){ot=q(function(){N(i.unstable_now())},L)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_continueExecution=function(){j||F||(j=!0,O(_t))},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kt=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(N){switch(I){case 1:case 2:case 3:var L=3;break;default:L=I}var b=I;I=L;try{return N()}finally{I=b}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=I;I=N;try{return L()}finally{I=b}},i.unstable_scheduleCallback=function(N,L,b){var S=i.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?S+b:S):b=S,N){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=b+R,N={id:w++,callback:L,priorityLevel:N,startTime:b,expirationTime:R,sortIndex:-1},b>S?(N.sortIndex=b,e(g,N),n(m)===null&&N===n(g)&&($?(pe(ot),ot=-1):$=!0,U(Ne,b-S))):(N.sortIndex=R,e(m,N),j||F||(j=!0,O(_t))),N},i.unstable_shouldYield=on,i.unstable_wrapCallback=function(N){var L=I;return function(){var b=I;I=L;try{return N.apply(this,arguments)}finally{I=b}}}})(qu)),qu}var Ap;function jw(){return Ap||(Ap=1,Gu.exports=zw()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Vw(){if(Op)return ft;Op=1;var i=Oc(),e=jw();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},v={};function I(t){return m.call(v,t)?!0:m.call(w,t)?!1:g.test(t)?v[t]=!0:(w[t]=!0,!1)}function F(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,r,o,a){if(r===null||typeof r>"u"||F(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function $(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){q[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];q[r]=new $(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){q[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){q[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){q[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){q[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){q[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){q[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){q[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function Oe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(pe,Oe);q[r]=new $(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(pe,Oe);q[r]=new $(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(pe,Oe);q[r]=new $(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){q[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),q.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){q[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function xe(t,r,o,a){var c=q.hasOwnProperty(r)?q[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(j(r,o,c,a)&&(o=null),a||c===null?I(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ne=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_t=Symbol.for("react.element"),Be=Symbol.for("react.portal"),Ge=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),Kt=Symbol.for("react.profiler"),Dt=Symbol.for("react.provider"),on=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),Tt=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),N=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var b=Object.assign,S;function R(t){if(S===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+t}var Y=!1;function ee(t,r){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(k){var a=k}Reflect.construct(t,[],r)}else{try{r.call()}catch(k){a=k}t.call(r.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var y=`
`+c[p].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=p&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function te(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ge:return"Fragment";case Be:return"Portal";case Kt:return"Profiler";case ot:return"StrictMode";case qe:return"Suspense";case lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case on:return(t.displayName||"Context")+".Consumer";case Dt:return(t._context.displayName||"Context")+".Provider";case Ct:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tt:return r=t.displayName||null,r!==null?r:ne(t.type)||"Memo";case O:r=t._payload,t=t._init;try{return ne(t(r))}catch{}}return null}function ce(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===ot?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ee(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function yt(t){var r=Ee(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function js(t){t._valueTracker||(t._valueTracker=yt(t))}function Ad(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=Ee(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yl(t,r){var o=r.checked;return b({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Od(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=de(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Dd(t,r){r=r.checked,r!=null&&xe(t,"checked",r,!1)}function Jl(t,r){Dd(t,r);var o=de(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Xl(t,r.type,o):r.hasOwnProperty("defaultValue")&&Xl(t,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ld(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Xl(t,r,o){(r!=="number"||Vs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ii=Array.isArray;function Or(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+de(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Zl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return b({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Md(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Ii(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:de(o)}}function bd(t,r){var o=de(r.value),a=de(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Fd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ud(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ud(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,zd=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ci(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){zy.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ti[r]=Ti[t]})});function jd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+r).trim():r+"px"}function Vd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=jd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var jy=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(t,r){if(r){if(jy[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function na(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function ia(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sa=null,Dr=null,Lr=null;function Wd(t){if(t=qi(t)){if(typeof sa!="function")throw Error(n(280));var r=t.stateNode;r&&(r=ho(r),sa(t.stateNode,t.type,r))}}function Bd(t){Dr?Lr?Lr.push(t):Lr=[t]:Dr=t}function Hd(){if(Dr){var t=Dr,r=Lr;if(Lr=Dr=null,Wd(t),r)for(t=0;t<r.length;t++)Wd(r[t])}}function $d(t,r){return t(r)}function Gd(){}var oa=!1;function qd(t,r,o){if(oa)return t(r,o);oa=!0;try{return $d(t,r,o)}finally{oa=!1,(Dr!==null||Lr!==null)&&(Gd(),Hd())}}function ki(t,r){var o=t.stateNode;if(o===null)return null;var a=ho(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var la=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){la=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{la=!1}function Vy(t,r,o,a,c,h,p,_,y){var k=Array.prototype.slice.call(arguments,3);try{r.apply(o,k)}catch(A){this.onError(A)}}var Ri=!1,Bs=null,Hs=!1,aa=null,Wy={onError:function(t){Ri=!0,Bs=t}};function By(t,r,o,a,c,h,p,_,y){Ri=!1,Bs=null,Vy.apply(Wy,arguments)}function Hy(t,r,o,a,c,h,p,_,y){if(By.apply(this,arguments),Ri){if(Ri){var k=Bs;Ri=!1,Bs=null}else throw Error(n(198));Hs||(Hs=!0,aa=k)}}function sr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Kd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Qd(t){if(sr(t)!==t)throw Error(n(188))}function $y(t){var r=t.alternate;if(!r){if(r=sr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Qd(c),t;if(h===a)return Qd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Yd(t){return t=$y(t),t!==null?Jd(t):null}function Jd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Jd(t);if(r!==null)return r;t=t.sibling}return null}var Xd=e.unstable_scheduleCallback,Zd=e.unstable_cancelCallback,Gy=e.unstable_shouldYield,qy=e.unstable_requestPaint,Re=e.unstable_now,Ky=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,eh=e.unstable_UserBlockingPriority,$s=e.unstable_NormalPriority,Qy=e.unstable_LowPriority,th=e.unstable_IdlePriority,Gs=null,Qt=null;function Yy(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Zy,Jy=Math.log,Xy=Math.LN2;function Zy(t){return t>>>=0,t===0?32:31-(Jy(t)/Xy|0)|0}var qs=64,Ks=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Pi(_):(h&=p,h!==0&&(a=Pi(h)))}else p=o&~c,p!==0?a=Pi(p):h!==0&&(a=Pi(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&c)===0&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Lt(r),c=1<<o,a|=t[o],r&=~c;return a}function ev(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-Lt(h),_=1<<p,y=c[p];y===-1?((_&o)===0||(_&a)!==0)&&(c[p]=ev(_,r)):y<=r&&(t.expiredLanes|=_),h&=~_}}function ca(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nh(){var t=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),t}function da(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function xi(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Lt(r),t[r]=o}function nv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Lt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ha(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Lt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var he=0;function rh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ih,fa,sh,oh,lh,pa=!1,Ys=[],kn=null,Nn=null,Rn=null,Ai=new Map,Oi=new Map,Pn=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,r){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ai.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(r.pointerId)}}function Di(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=qi(r),r!==null&&fa(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function iv(t,r,o,a,c){switch(r){case"focusin":return kn=Di(kn,t,r,o,a,c),!0;case"dragenter":return Nn=Di(Nn,t,r,o,a,c),!0;case"mouseover":return Rn=Di(Rn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ai.set(h,Di(Ai.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Oi.set(h,Di(Oi.get(h)||null,t,r,o,a,c)),!0}return!1}function uh(t){var r=or(t.target);if(r!==null){var o=sr(r);if(o!==null){if(r=o.tag,r===13){if(r=Kd(o),r!==null){t.blockedOn=r,lh(t.priority,function(){sh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Js(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ga(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ra=a,o.target.dispatchEvent(a),ra=null}else return r=qi(o),r!==null&&fa(r),t.blockedOn=o,!1;r.shift()}return!0}function ch(t,r,o){Js(t)&&o.delete(r)}function sv(){pa=!1,kn!==null&&Js(kn)&&(kn=null),Nn!==null&&Js(Nn)&&(Nn=null),Rn!==null&&Js(Rn)&&(Rn=null),Ai.forEach(ch),Oi.forEach(ch)}function Li(t,r){t.blockedOn===r&&(t.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function Mi(t){function r(c){return Li(c,t)}if(0<Ys.length){Li(Ys[0],t);for(var o=1;o<Ys.length;o++){var a=Ys[o];a.blockedOn===t&&(a.blockedOn=null)}}for(kn!==null&&Li(kn,t),Nn!==null&&Li(Nn,t),Rn!==null&&Li(Rn,t),Ai.forEach(r),Oi.forEach(r),o=0;o<Pn.length;o++)a=Pn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&Pn.shift()}var Mr=Ne.ReactCurrentBatchConfig,Xs=!0;function ov(t,r,o,a){var c=he,h=Mr.transition;Mr.transition=null;try{he=1,ma(t,r,o,a)}finally{he=c,Mr.transition=h}}function lv(t,r,o,a){var c=he,h=Mr.transition;Mr.transition=null;try{he=4,ma(t,r,o,a)}finally{he=c,Mr.transition=h}}function ma(t,r,o,a){if(Xs){var c=ga(t,r,o,a);if(c===null)Da(t,r,a,Zs,o),ah(t,a);else if(iv(c,t,r,o,a))a.stopPropagation();else if(ah(t,a),r&4&&-1<rv.indexOf(t)){for(;c!==null;){var h=qi(c);if(h!==null&&ih(h),h=ga(t,r,o,a),h===null&&Da(t,r,a,Zs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Da(t,r,a,null,o)}}var Zs=null;function ga(t,r,o,a){if(Zs=null,t=ia(a),t=or(t),t!==null)if(r=sr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Kd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Zs=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case ua:return 1;case eh:return 4;case $s:case Qy:return 16;case th:return 536870912;default:return 16}default:return 16}}var xn=null,_a=null,eo=null;function hh(){if(eo)return eo;var t,r=_a,o=r.length,a,c="value"in xn?xn.value:xn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return eo=c.slice(t,1<a?1-a:void 0)}function to(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function fh(){return!1}function vt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?no:fh,this.isPropagationStopped=fh,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),r}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=vt(br),bi=b({},br,{view:0,detail:0}),av=vt(bi),va,wa,Fi,ro=b({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fi&&(Fi&&t.type==="mousemove"?(va=t.screenX-Fi.screenX,wa=t.screenY-Fi.screenY):wa=va=0,Fi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:wa}}),ph=vt(ro),uv=b({},ro,{dataTransfer:0}),cv=vt(uv),dv=b({},bi,{relatedTarget:0}),Ea=vt(dv),hv=b({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=vt(hv),pv=b({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mv=vt(pv),gv=b({},br,{data:0}),mh=vt(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=vv[t])?!!r[t]:!1}function Sa(){return wv}var Ev=b({},bi,{key:function(t){if(t.key){var r=_v[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sv=vt(Ev),Iv=b({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=vt(Iv),Cv=b({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Tv=vt(Cv),kv=b({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=vt(kv),Rv=b({},ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=vt(Rv),xv=[9,13,27,32],Ia=f&&"CompositionEvent"in window,Ui=null;f&&"documentMode"in document&&(Ui=document.documentMode);var Av=f&&"TextEvent"in window&&!Ui,_h=f&&(!Ia||Ui&&8<Ui&&11>=Ui),yh=" ",vh=!1;function wh(t,r){switch(t){case"keyup":return xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Ov(t,r){switch(t){case"compositionend":return Eh(r);case"keypress":return r.which!==32?null:(vh=!0,yh);case"textInput":return t=r.data,t===yh&&vh?null:t;default:return null}}function Dv(t,r){if(Fr)return t==="compositionend"||!Ia&&wh(t,r)?(t=hh(),eo=_a=xn=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _h&&r.locale!=="ko"?null:r.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Lv[t.type]:r==="textarea"}function Ih(t,r,o,a){Bd(a),r=ao(r,"onChange"),0<r.length&&(o=new ya("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var zi=null,ji=null;function Mv(t){Vh(t,0)}function io(t){var r=Wr(t);if(Ad(r))return t}function bv(t,r){if(t==="change")return r}var Ch=!1;if(f){var Ca;if(f){var Ta="oninput"in document;if(!Ta){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Ta=typeof Th.oninput=="function"}Ca=Ta}else Ca=!1;Ch=Ca&&(!document.documentMode||9<document.documentMode)}function kh(){zi&&(zi.detachEvent("onpropertychange",Nh),ji=zi=null)}function Nh(t){if(t.propertyName==="value"&&io(ji)){var r=[];Ih(r,ji,t,ia(t)),qd(Mv,r)}}function Fv(t,r,o){t==="focusin"?(kh(),zi=r,ji=o,zi.attachEvent("onpropertychange",Nh)):t==="focusout"&&kh()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return io(ji)}function zv(t,r){if(t==="click")return io(r)}function jv(t,r){if(t==="input"||t==="change")return io(r)}function Vv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Mt=typeof Object.is=="function"?Object.is:Vv;function Vi(t,r){if(Mt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!Mt(t[c],r[c]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ph(t,r){var o=Rh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function xh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?xh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Ah(){for(var t=window,r=Vs();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Vs(t.document)}return r}function ka(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Wv(t){var r=Ah(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&xh(o.ownerDocument.documentElement,o)){if(a!==null&&ka(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Ph(o,h);var p=Ph(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=f&&"documentMode"in document&&11>=document.documentMode,Ur=null,Na=null,Wi=null,Ra=!1;function Oh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ra||Ur==null||Ur!==Vs(a)||(a=Ur,"selectionStart"in a&&ka(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wi&&Vi(Wi,a)||(Wi=a,a=ao(Na,"onSelect"),0<a.length&&(r=new ya("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Ur)))}function so(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var zr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Pa={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function oo(t){if(Pa[t])return Pa[t];if(!zr[t])return t;var r=zr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in Dh)return Pa[t]=r[o];return t}var Lh=oo("animationend"),Mh=oo("animationiteration"),bh=oo("animationstart"),Fh=oo("transitionend"),Uh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,r){Uh.set(t,r),u(r,[t])}for(var xa=0;xa<zh.length;xa++){var Aa=zh[xa],Hv=Aa.toLowerCase(),$v=Aa[0].toUpperCase()+Aa.slice(1);An(Hv,"on"+$v)}An(Lh,"onAnimationEnd"),An(Mh,"onAnimationIteration"),An(bh,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(Fh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function jh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,Hy(a,r,void 0,t),t.currentTarget=null}function Vh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],y=_.instance,k=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;jh(c,_,k),h=y}else for(p=0;p<a.length;p++){if(_=a[p],y=_.instance,k=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;jh(c,_,k),h=y}}}if(Hs)throw t=aa,Hs=!1,aa=null,t}function ye(t,r){var o=r[za];o===void 0&&(o=r[za]=new Set);var a=t+"__bubble";o.has(a)||(Wh(r,t,2,!1),o.add(a))}function Oa(t,r,o){var a=0;r&&(a|=4),Wh(o,t,a,r)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[lo]){t[lo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Gv.has(o)||Oa(o,!1,t),Oa(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[lo]||(r[lo]=!0,Oa("selectionchange",!1,r))}}function Wh(t,r,o,a){switch(dh(r)){case 1:var c=ov;break;case 4:c=lv;break;default:c=ma}o=c.bind(null,r,o,t),c=void 0,!la||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function Da(t,r,o,a,c){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;p=p.return}for(;_!==null;){if(p=or(_),p===null)return;if(y=p.tag,y===5||y===6){a=h=p;continue e}_=_.parentNode}}a=a.return}qd(function(){var k=h,A=ia(o),D=[];e:{var x=Uh.get(t);if(x!==void 0){var V=ya,B=t;switch(t){case"keypress":if(to(o)===0)break e;case"keydown":case"keyup":V=Sv;break;case"focusin":B="focus",V=Ea;break;case"focusout":B="blur",V=Ea;break;case"beforeblur":case"afterblur":V=Ea;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Tv;break;case Lh:case Mh:case bh:V=fv;break;case Fh:V=Nv;break;case"scroll":V=av;break;case"wheel":V=Pv;break;case"copy":case"cut":case"paste":V=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=gh}var H=(r&4)!==0,Pe=!H&&t==="scroll",C=H?x!==null?x+"Capture":null:x;H=[];for(var E=k,T;E!==null;){T=E;var M=T.stateNode;if(T.tag===5&&M!==null&&(T=M,C!==null&&(M=ki(E,C),M!=null&&H.push($i(E,M,T)))),Pe)break;E=E.return}0<H.length&&(x=new V(x,B,null,o,A),D.push({event:x,listeners:H}))}}if((r&7)===0){e:{if(x=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",x&&o!==ra&&(B=o.relatedTarget||o.fromElement)&&(or(B)||B[ln]))break e;if((V||x)&&(x=A.window===A?A:(x=A.ownerDocument)?x.defaultView||x.parentWindow:window,V?(B=o.relatedTarget||o.toElement,V=k,B=B?or(B):null,B!==null&&(Pe=sr(B),B!==Pe||B.tag!==5&&B.tag!==6)&&(B=null)):(V=null,B=k),V!==B)){if(H=ph,M="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(H=gh,M="onPointerLeave",C="onPointerEnter",E="pointer"),Pe=V==null?x:Wr(V),T=B==null?x:Wr(B),x=new H(M,E+"leave",V,o,A),x.target=Pe,x.relatedTarget=T,M=null,or(A)===k&&(H=new H(C,E+"enter",B,o,A),H.target=T,H.relatedTarget=Pe,M=H),Pe=M,V&&B)t:{for(H=V,C=B,E=0,T=H;T;T=jr(T))E++;for(T=0,M=C;M;M=jr(M))T++;for(;0<E-T;)H=jr(H),E--;for(;0<T-E;)C=jr(C),T--;for(;E--;){if(H===C||C!==null&&H===C.alternate)break t;H=jr(H),C=jr(C)}H=null}else H=null;V!==null&&Bh(D,x,V,H,!1),B!==null&&Pe!==null&&Bh(D,Pe,B,H,!0)}}e:{if(x=k?Wr(k):window,V=x.nodeName&&x.nodeName.toLowerCase(),V==="select"||V==="input"&&x.type==="file")var G=bv;else if(Sh(x))if(Ch)G=jv;else{G=Uv;var K=Fv}else(V=x.nodeName)&&V.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(G=zv);if(G&&(G=G(t,k))){Ih(D,G,o,A);break e}K&&K(t,x,k),t==="focusout"&&(K=x._wrapperState)&&K.controlled&&x.type==="number"&&Xl(x,"number",x.value)}switch(K=k?Wr(k):window,t){case"focusin":(Sh(K)||K.contentEditable==="true")&&(Ur=K,Na=k,Wi=null);break;case"focusout":Wi=Na=Ur=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Oh(D,o,A);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Oh(D,o,A)}var Q;if(Ia)e:{switch(t){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fr?wh(t,o)&&(X="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(X="onCompositionStart");X&&(_h&&o.locale!=="ko"&&(Fr||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fr&&(Q=hh()):(xn=A,_a="value"in xn?xn.value:xn.textContent,Fr=!0)),K=ao(k,X),0<K.length&&(X=new mh(X,t,null,o,A),D.push({event:X,listeners:K}),Q?X.data=Q:(Q=Eh(o),Q!==null&&(X.data=Q)))),(Q=Av?Ov(t,o):Dv(t,o))&&(k=ao(k,"onBeforeInput"),0<k.length&&(A=new mh("onBeforeInput","beforeinput",null,o,A),D.push({event:A,listeners:k}),A.data=Q))}Vh(D,r)})}function $i(t,r,o){return{instance:t,listener:r,currentTarget:o}}function ao(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,c)),h=ki(t,r),h!=null&&a.push($i(t,h,c))),t=t.return}return a}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,y=_.alternate,k=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&k!==null&&(_=k,c?(y=ki(o,h),y!=null&&p.unshift($i(o,y,_))):c||(y=ki(o,h),y!=null&&p.push($i(o,y,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var qv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(qv,`
`).replace(Kv,"")}function uo(t,r,o){if(r=Hh(r),Hh(t)!==r&&o)throw Error(n(425))}function co(){}var La=null,Ma=null;function ba(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(Jv)}:Fa;function Jv(t){setTimeout(function(){throw t})}function Ua(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Mi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Mi(r)}function On(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Vr,Gi="__reactProps$"+Vr,ln="__reactContainer$"+Vr,za="__reactEvents$"+Vr,Xv="__reactListeners$"+Vr,Zv="__reactHandles$"+Vr;function or(t){var r=t[Yt];if(r)return r;for(var o=t.parentNode;o;){if(r=o[ln]||o[Yt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Gh(t);t!==null;){if(o=t[Yt])return o;t=Gh(t)}return r}t=o,o=t.parentNode}return null}function qi(t){return t=t[Yt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ho(t){return t[Gi]||null}var ja=[],Br=-1;function Dn(t){return{current:t}}function ve(t){0>Br||(t.current=ja[Br],ja[Br]=null,Br--)}function ge(t,r){Br++,ja[Br]=t.current,t.current=r}var Ln={},Ke=Dn(Ln),at=Dn(!1),lr=Ln;function Hr(t,r){var o=t.type.contextTypes;if(!o)return Ln;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function ut(t){return t=t.childContextTypes,t!=null}function fo(){ve(at),ve(Ke)}function qh(t,r,o){if(Ke.current!==Ln)throw Error(n(168));ge(Ke,r),ge(at,o)}function Kh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,ce(t)||"Unknown",c));return b({},o,a)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,lr=Ke.current,ge(Ke,t),ge(at,at.current),!0}function Qh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Kh(t,r,lr),a.__reactInternalMemoizedMergedChildContext=t,ve(at),ve(Ke),ge(Ke,t)):ve(at),ge(at,o)}var an=null,mo=!1,Va=!1;function Yh(t){an===null?an=[t]:an.push(t)}function ew(t){mo=!0,Yh(t)}function Mn(){if(!Va&&an!==null){Va=!0;var t=0,r=he;try{var o=an;for(he=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}an=null,mo=!1}catch(c){throw an!==null&&(an=an.slice(t+1)),Xd(ua,Mn),c}finally{he=r,Va=!1}}return null}var $r=[],Gr=0,go=null,_o=0,kt=[],Nt=0,ar=null,un=1,cn="";function ur(t,r){$r[Gr++]=_o,$r[Gr++]=go,go=t,_o=r}function Jh(t,r,o){kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,ar=t;var a=un;t=cn;var c=32-Lt(a)-1;a&=~(1<<c),o+=1;var h=32-Lt(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,un=1<<32-Lt(r)+c|o<<c|a,cn=h+t}else un=1<<h|o<<c|a,cn=t}function Wa(t){t.return!==null&&(ur(t,1),Jh(t,1,0))}function Ba(t){for(;t===go;)go=$r[--Gr],$r[Gr]=null,_o=$r[--Gr],$r[Gr]=null;for(;t===ar;)ar=kt[--Nt],kt[Nt]=null,cn=kt[--Nt],kt[Nt]=null,un=kt[--Nt],kt[Nt]=null}var wt=null,Et=null,Se=!1,bt=null;function Xh(t,r){var o=At(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Zh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,wt=t,Et=On(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,wt=t,Et=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=At(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,wt=t,Et=null,!0):!1;default:return!1}}function Ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $a(t){if(Se){var r=Et;if(r){var o=r;if(!Zh(t,r)){if(Ha(t))throw Error(n(418));r=On(o.nextSibling);var a=wt;r&&Zh(t,r)?Xh(a,o):(t.flags=t.flags&-4097|2,Se=!1,wt=t)}}else{if(Ha(t))throw Error(n(418));t.flags=t.flags&-4097|2,Se=!1,wt=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function yo(t){if(t!==wt)return!1;if(!Se)return ef(t),Se=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ba(t.type,t.memoizedProps)),r&&(r=Et)){if(Ha(t))throw tf(),Error(n(418));for(;r;)Xh(t,r),r=On(r.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){Et=On(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}Et=null}}else Et=wt?On(t.stateNode.nextSibling):null;return!0}function tf(){for(var t=Et;t;)t=On(t.nextSibling)}function qr(){Et=wt=null,Se=!1}function Ga(t){bt===null?bt=[t]:bt.push(t)}var tw=Ne.ReactCurrentBatchConfig;function Ki(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function vo(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function nf(t){var r=t._init;return r(t._payload)}function rf(t){function r(C,E){if(t){var T=C.deletions;T===null?(C.deletions=[E],C.flags|=16):T.push(E)}}function o(C,E){if(!t)return null;for(;E!==null;)r(C,E),E=E.sibling;return null}function a(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function c(C,E){return C=Bn(C,E),C.index=0,C.sibling=null,C}function h(C,E,T){return C.index=T,t?(T=C.alternate,T!==null?(T=T.index,T<E?(C.flags|=2,E):T):(C.flags|=2,E)):(C.flags|=1048576,E)}function p(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,E,T,M){return E===null||E.tag!==6?(E=Fu(T,C.mode,M),E.return=C,E):(E=c(E,T),E.return=C,E)}function y(C,E,T,M){var G=T.type;return G===Ge?A(C,E,T.props.children,M,T.key):E!==null&&(E.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===O&&nf(G)===E.type)?(M=c(E,T.props),M.ref=Ki(C,E,T),M.return=C,M):(M=Bo(T.type,T.key,T.props,null,C.mode,M),M.ref=Ki(C,E,T),M.return=C,M)}function k(C,E,T,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Uu(T,C.mode,M),E.return=C,E):(E=c(E,T.children||[]),E.return=C,E)}function A(C,E,T,M,G){return E===null||E.tag!==7?(E=_r(T,C.mode,M,G),E.return=C,E):(E=c(E,T),E.return=C,E)}function D(C,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Fu(""+E,C.mode,T),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _t:return T=Bo(E.type,E.key,E.props,null,C.mode,T),T.ref=Ki(C,null,E),T.return=C,T;case Be:return E=Uu(E,C.mode,T),E.return=C,E;case O:var M=E._init;return D(C,M(E._payload),T)}if(Ii(E)||L(E))return E=_r(E,C.mode,T,null),E.return=C,E;vo(C,E)}return null}function x(C,E,T,M){var G=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return G!==null?null:_(C,E,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _t:return T.key===G?y(C,E,T,M):null;case Be:return T.key===G?k(C,E,T,M):null;case O:return G=T._init,x(C,E,G(T._payload),M)}if(Ii(T)||L(T))return G!==null?null:A(C,E,T,M,null);vo(C,T)}return null}function V(C,E,T,M,G){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(T)||null,_(E,C,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _t:return C=C.get(M.key===null?T:M.key)||null,y(E,C,M,G);case Be:return C=C.get(M.key===null?T:M.key)||null,k(E,C,M,G);case O:var K=M._init;return V(C,E,T,K(M._payload),G)}if(Ii(M)||L(M))return C=C.get(T)||null,A(E,C,M,G,null);vo(E,M)}return null}function B(C,E,T,M){for(var G=null,K=null,Q=E,X=E=0,ze=null;Q!==null&&X<T.length;X++){Q.index>X?(ze=Q,Q=null):ze=Q.sibling;var ae=x(C,Q,T[X],M);if(ae===null){Q===null&&(Q=ze);break}t&&Q&&ae.alternate===null&&r(C,Q),E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae,Q=ze}if(X===T.length)return o(C,Q),Se&&ur(C,X),G;if(Q===null){for(;X<T.length;X++)Q=D(C,T[X],M),Q!==null&&(E=h(Q,E,X),K===null?G=Q:K.sibling=Q,K=Q);return Se&&ur(C,X),G}for(Q=a(C,Q);X<T.length;X++)ze=V(Q,C,X,T[X],M),ze!==null&&(t&&ze.alternate!==null&&Q.delete(ze.key===null?X:ze.key),E=h(ze,E,X),K===null?G=ze:K.sibling=ze,K=ze);return t&&Q.forEach(function(Hn){return r(C,Hn)}),Se&&ur(C,X),G}function H(C,E,T,M){var G=L(T);if(typeof G!="function")throw Error(n(150));if(T=G.call(T),T==null)throw Error(n(151));for(var K=G=null,Q=E,X=E=0,ze=null,ae=T.next();Q!==null&&!ae.done;X++,ae=T.next()){Q.index>X?(ze=Q,Q=null):ze=Q.sibling;var Hn=x(C,Q,ae.value,M);if(Hn===null){Q===null&&(Q=ze);break}t&&Q&&Hn.alternate===null&&r(C,Q),E=h(Hn,E,X),K===null?G=Hn:K.sibling=Hn,K=Hn,Q=ze}if(ae.done)return o(C,Q),Se&&ur(C,X),G;if(Q===null){for(;!ae.done;X++,ae=T.next())ae=D(C,ae.value,M),ae!==null&&(E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae);return Se&&ur(C,X),G}for(Q=a(C,Q);!ae.done;X++,ae=T.next())ae=V(Q,C,X,ae.value,M),ae!==null&&(t&&ae.alternate!==null&&Q.delete(ae.key===null?X:ae.key),E=h(ae,E,X),K===null?G=ae:K.sibling=ae,K=ae);return t&&Q.forEach(function(Lw){return r(C,Lw)}),Se&&ur(C,X),G}function Pe(C,E,T,M){if(typeof T=="object"&&T!==null&&T.type===Ge&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case _t:e:{for(var G=T.key,K=E;K!==null;){if(K.key===G){if(G=T.type,G===Ge){if(K.tag===7){o(C,K.sibling),E=c(K,T.props.children),E.return=C,C=E;break e}}else if(K.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===O&&nf(G)===K.type){o(C,K.sibling),E=c(K,T.props),E.ref=Ki(C,K,T),E.return=C,C=E;break e}o(C,K);break}else r(C,K);K=K.sibling}T.type===Ge?(E=_r(T.props.children,C.mode,M,T.key),E.return=C,C=E):(M=Bo(T.type,T.key,T.props,null,C.mode,M),M.ref=Ki(C,E,T),M.return=C,C=M)}return p(C);case Be:e:{for(K=T.key;E!==null;){if(E.key===K)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){o(C,E.sibling),E=c(E,T.children||[]),E.return=C,C=E;break e}else{o(C,E);break}else r(C,E);E=E.sibling}E=Uu(T,C.mode,M),E.return=C,C=E}return p(C);case O:return K=T._init,Pe(C,E,K(T._payload),M)}if(Ii(T))return B(C,E,T,M);if(L(T))return H(C,E,T,M);vo(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(o(C,E.sibling),E=c(E,T),E.return=C,C=E):(o(C,E),E=Fu(T,C.mode,M),E.return=C,C=E),p(C)):o(C,E)}return Pe}var Kr=rf(!0),sf=rf(!1),wo=Dn(null),Eo=null,Qr=null,qa=null;function Ka(){qa=Qr=Eo=null}function Qa(t){var r=wo.current;ve(wo),t._currentValue=r}function Ya(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Yr(t,r){Eo=t,qa=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(ct=!0),t.firstContext=null)}function Rt(t){var r=t._currentValue;if(qa!==t)if(t={context:t,memoizedValue:r,next:null},Qr===null){if(Eo===null)throw Error(n(308));Qr=t,Eo.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return r}var cr=null;function Ja(t){cr===null?cr=[t]:cr.push(t)}function of(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Ja(r)):(o.next=c.next,c.next=o),r.interleaved=o,dn(t,a)}function dn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function Xa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Fn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(le&2)!==0){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,dn(t,o)}return c=a.interleaved,c===null?(r.next=r,Ja(a)):(r.next=c.next,c.next=r),a.interleaved=r,dn(t,o)}function So(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ha(t,o)}}function af(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Io(t,r,o,a){var c=t.updateQueue;bn=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,k=y.next;y.next=null,p===null?h=k:p.next=k,p=y;var A=t.alternate;A!==null&&(A=A.updateQueue,_=A.lastBaseUpdate,_!==p&&(_===null?A.firstBaseUpdate=k:_.next=k,A.lastBaseUpdate=y))}if(h!==null){var D=c.baseState;p=0,A=k=y=null,_=h;do{var x=_.lane,V=_.eventTime;if((a&x)===x){A!==null&&(A=A.next={eventTime:V,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var B=t,H=_;switch(x=r,V=o,H.tag){case 1:if(B=H.payload,typeof B=="function"){D=B.call(V,D,x);break e}D=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=H.payload,x=typeof B=="function"?B.call(V,D,x):B,x==null)break e;D=b({},D,x);break e;case 2:bn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,x=c.effects,x===null?c.effects=[_]:x.push(_))}else V={eventTime:V,lane:x,tag:_.tag,payload:_.payload,callback:_.callback,next:null},A===null?(k=A=V,y=D):A=A.next=V,p|=x;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;x=_,_=x.next,x.next=null,c.lastBaseUpdate=x,c.shared.pending=null}}while(!0);if(A===null&&(y=D),c.baseState=y,c.firstBaseUpdate=k,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);fr|=p,t.lanes=p,t.memoizedState=D}}function uf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Qi={},Jt=Dn(Qi),Yi=Dn(Qi),Ji=Dn(Qi);function dr(t){if(t===Qi)throw Error(n(174));return t}function Za(t,r){switch(ge(Ji,r),ge(Yi,t),ge(Jt,Qi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ea(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ea(r,t)}ve(Jt),ge(Jt,r)}function Jr(){ve(Jt),ve(Yi),ve(Ji)}function cf(t){dr(Ji.current);var r=dr(Jt.current),o=ea(r,t.type);r!==o&&(ge(Yi,t),ge(Jt,o))}function eu(t){Yi.current===t&&(ve(Jt),ve(Yi))}var Ie=Dn(0);function Co(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var tu=[];function nu(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var To=Ne.ReactCurrentDispatcher,ru=Ne.ReactCurrentBatchConfig,hr=0,Ce=null,De=null,Fe=null,ko=!1,Xi=!1,Zi=0,nw=0;function Qe(){throw Error(n(321))}function iu(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Mt(t[o],r[o]))return!1;return!0}function su(t,r,o,a,c,h){if(hr=h,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,To.current=t===null||t.memoizedState===null?ow:lw,t=o(a,c),Xi){h=0;do{if(Xi=!1,Zi=0,25<=h)throw Error(n(301));h+=1,Fe=De=null,r.updateQueue=null,To.current=aw,t=o(a,c)}while(Xi)}if(To.current=Po,r=De!==null&&De.next!==null,hr=0,Fe=De=Ce=null,ko=!1,r)throw Error(n(300));return t}function ou(){var t=Zi!==0;return Zi=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ce.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Pt(){if(De===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var r=Fe===null?Ce.memoizedState:Fe.next;if(r!==null)Fe=r,De=t;else{if(t===null)throw Error(n(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Ce.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function es(t,r){return typeof r=="function"?r(t):r}function lu(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=De,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,y=null,k=h;do{var A=k.lane;if((hr&A)===A)y!==null&&(y=y.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var D={lane:A,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};y===null?(_=y=D,p=a):y=y.next=D,Ce.lanes|=A,fr|=A}k=k.next}while(k!==null&&k!==h);y===null?p=a:y.next=_,Mt(a,r.memoizedState)||(ct=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ce.lanes|=h,fr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function au(t){var r=Pt(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);Mt(h,r.memoizedState)||(ct=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function df(){}function hf(t,r){var o=Ce,a=Pt(),c=r(),h=!Mt(a.memoizedState,c);if(h&&(a.memoizedState=c,ct=!0),a=a.queue,uu(mf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,ts(9,pf.bind(null,o,a,c,r),void 0,null),Ue===null)throw Error(n(349));(hr&30)!==0||ff(o,r,c)}return c}function ff(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ce.updateQueue,r===null?(r={lastEffect:null,stores:null},Ce.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function pf(t,r,o,a){r.value=o,r.getSnapshot=a,gf(r)&&_f(t)}function mf(t,r,o){return o(function(){gf(r)&&_f(t)})}function gf(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Mt(t,o)}catch{return!0}}function _f(t){var r=dn(t,1);r!==null&&jt(r,t,1,-1)}function yf(t){var r=Xt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},r.queue=t,t=t.dispatch=sw.bind(null,Ce,t),[r.memoizedState,t]}function ts(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ce.updateQueue,r===null?(r={lastEffect:null,stores:null},Ce.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function vf(){return Pt().memoizedState}function No(t,r,o,a){var c=Xt();Ce.flags|=t,c.memoizedState=ts(1|r,o,void 0,a===void 0?null:a)}function Ro(t,r,o,a){var c=Pt();a=a===void 0?null:a;var h=void 0;if(De!==null){var p=De.memoizedState;if(h=p.destroy,a!==null&&iu(a,p.deps)){c.memoizedState=ts(r,o,h,a);return}}Ce.flags|=t,c.memoizedState=ts(1|r,o,h,a)}function wf(t,r){return No(8390656,8,t,r)}function uu(t,r){return Ro(2048,8,t,r)}function Ef(t,r){return Ro(4,2,t,r)}function Sf(t,r){return Ro(4,4,t,r)}function If(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Cf(t,r,o){return o=o!=null?o.concat([t]):null,Ro(4,4,If.bind(null,r,t),o)}function cu(){}function Tf(t,r){var o=Pt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&iu(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function kf(t,r){var o=Pt();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&iu(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function Nf(t,r,o){return(hr&21)===0?(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=o):(Mt(o,r)||(o=nh(),Ce.lanes|=o,fr|=o,t.baseState=!0),r)}function rw(t,r){var o=he;he=o!==0&&4>o?o:4,t(!0);var a=ru.transition;ru.transition={};try{t(!1),r()}finally{he=o,ru.transition=a}}function Rf(){return Pt().memoizedState}function iw(t,r,o){var a=Vn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Pf(t))xf(r,o);else if(o=of(t,r,o,a),o!==null){var c=tt();jt(o,t,a,c),Af(o,r,a)}}function sw(t,r,o){var a=Vn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Pf(t))xf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,Mt(_,p)){var y=r.interleaved;y===null?(c.next=c,Ja(r)):(c.next=y.next,y.next=c),r.interleaved=c;return}}catch{}finally{}o=of(t,r,c,a),o!==null&&(c=tt(),jt(o,t,a,c),Af(o,r,a))}}function Pf(t){var r=t.alternate;return t===Ce||r!==null&&r===Ce}function xf(t,r){Xi=ko=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Af(t,r,o){if((o&4194240)!==0){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ha(t,o)}}var Po={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},ow={readContext:Rt,useCallback:function(t,r){return Xt().memoizedState=[t,r===void 0?null:r],t},useContext:Rt,useEffect:wf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,No(4194308,4,If.bind(null,r,t),o)},useLayoutEffect:function(t,r){return No(4194308,4,t,r)},useInsertionEffect:function(t,r){return No(4,2,t,r)},useMemo:function(t,r){var o=Xt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Xt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=iw.bind(null,Ce,t),[a.memoizedState,t]},useRef:function(t){var r=Xt();return t={current:t},r.memoizedState=t},useState:yf,useDebugValue:cu,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=yf(!1),r=t[0];return t=rw.bind(null,t[1]),Xt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ce,c=Xt();if(Se){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Ue===null)throw Error(n(349));(hr&30)!==0||ff(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,wf(mf.bind(null,a,h,t),[t]),a.flags|=2048,ts(9,pf.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Xt(),r=Ue.identifierPrefix;if(Se){var o=cn,a=un;o=(a&~(1<<32-Lt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=Zi++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=nw++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},lw={readContext:Rt,useCallback:Tf,useContext:Rt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:lu,useRef:vf,useState:function(){return lu(es)},useDebugValue:cu,useDeferredValue:function(t){var r=Pt();return Nf(r,De.memoizedState,t)},useTransition:function(){var t=lu(es)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1},aw={readContext:Rt,useCallback:Tf,useContext:Rt,useEffect:uu,useImperativeHandle:Cf,useInsertionEffect:Ef,useLayoutEffect:Sf,useMemo:kf,useReducer:au,useRef:vf,useState:function(){return au(es)},useDebugValue:cu,useDeferredValue:function(t){var r=Pt();return De===null?r.memoizedState=t:Nf(r,De.memoizedState,t)},useTransition:function(){var t=au(es)[0],r=Pt().memoizedState;return[t,r]},useMutableSource:df,useSyncExternalStore:hf,useId:Rf,unstable_isNewReconciler:!1};function Ft(t,r){if(t&&t.defaultProps){r=b({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function du(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:b({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var xo={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=tt(),c=Vn(t),h=hn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(jt(r,t,c,a),So(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=tt(),c=Vn(t),h=hn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Fn(t,h,c),r!==null&&(jt(r,t,c,a),So(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=tt(),a=Vn(t),c=hn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Fn(t,c,a),r!==null&&(jt(r,t,a,o),So(r,t,a))}};function Of(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!Vi(o,a)||!Vi(c,h):!0}function Df(t,r,o){var a=!1,c=Ln,h=r.contextType;return typeof h=="object"&&h!==null?h=Rt(h):(c=ut(r)?lr:Ke.current,a=r.contextTypes,h=(a=a!=null)?Hr(t,c):Ln),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xo,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Lf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&xo.enqueueReplaceState(r,r.state,null)}function hu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Xa(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Rt(h):(h=ut(r)?lr:Ke.current,c.context=Hr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(du(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&xo.enqueueReplaceState(c,c.state,null),Io(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,r){try{var o="",a=r;do o+=te(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function fu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function pu(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function Mf(t,r,o){o=hn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Fo||(Fo=!0,Pu=a),pu(t,r)},o}function bf(t,r,o){o=hn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){pu(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){pu(t,r),typeof a!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function Ff(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new uw;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Iw.bind(null,t,r,o),r.then(t,t))}function Uf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function zf(t,r,o,a,c){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=hn(-1,1),r.tag=2,Fn(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var cw=Ne.ReactCurrentOwner,ct=!1;function et(t,r,o,a){r.child=t===null?sf(r,null,o,a):Kr(r,t.child,o,a)}function jf(t,r,o,a,c){o=o.render;var h=r.ref;return Yr(r,c),a=su(t,r,o,a,h,c),o=ou(),t!==null&&!ct?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,fn(t,r,c)):(Se&&o&&Wa(r),r.flags|=1,et(t,r,a,c),r.child)}function Vf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!bu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Wf(t,r,h,a,c)):(t=Bo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Vi,o(p,a)&&t.ref===r.ref)return fn(t,r,c)}return r.flags|=1,t=Bn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Wf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Vi(h,a)&&t.ref===r.ref)if(ct=!1,r.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(ct=!0);else return r.lanes=t.lanes,fn(t,r,c)}return mu(t,r,o,a,c)}function Bf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ei,St),St|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ge(ei,St),St|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ge(ei,St),St|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,ge(ei,St),St|=a;return et(t,r,c,o),r.child}function Hf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function mu(t,r,o,a,c){var h=ut(o)?lr:Ke.current;return h=Hr(r,h),Yr(r,c),o=su(t,r,o,a,h,c),a=ou(),t!==null&&!ct?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,fn(t,r,c)):(Se&&a&&Wa(r),r.flags|=1,et(t,r,o,c),r.child)}function $f(t,r,o,a,c){if(ut(o)){var h=!0;po(r)}else h=!1;if(Yr(r,c),r.stateNode===null)Oo(t,r),Df(r,o,a),hu(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var y=p.context,k=o.contextType;typeof k=="object"&&k!==null?k=Rt(k):(k=ut(o)?lr:Ke.current,k=Hr(r,k));var A=o.getDerivedStateFromProps,D=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function";D||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||y!==k)&&Lf(r,p,a,k),bn=!1;var x=r.memoizedState;p.state=x,Io(r,a,p,c),y=r.memoizedState,_!==a||x!==y||at.current||bn?(typeof A=="function"&&(du(r,o,A,a),y=r.memoizedState),(_=bn||Of(r,o,_,a,x,y,k))?(D||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=y),p.props=a,p.state=y,p.context=k,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,lf(t,r),_=r.memoizedProps,k=r.type===r.elementType?_:Ft(r.type,_),p.props=k,D=r.pendingProps,x=p.context,y=o.contextType,typeof y=="object"&&y!==null?y=Rt(y):(y=ut(o)?lr:Ke.current,y=Hr(r,y));var V=o.getDerivedStateFromProps;(A=typeof V=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==D||x!==y)&&Lf(r,p,a,y),bn=!1,x=r.memoizedState,p.state=x,Io(r,a,p,c);var B=r.memoizedState;_!==D||x!==B||at.current||bn?(typeof V=="function"&&(du(r,o,V,a),B=r.memoizedState),(k=bn||Of(r,o,k,a,x,B,y)||!1)?(A||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,B,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,B,y)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=B),p.props=a,p.state=B,p.context=y,a=k):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&x===t.memoizedState||(r.flags|=1024),a=!1)}return gu(t,r,o,a,h,c)}function gu(t,r,o,a,c,h){Hf(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&Qh(r,o,!1),fn(t,r,h);a=r.stateNode,cw.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=Kr(r,t.child,null,h),r.child=Kr(r,null,_,h)):et(t,r,_,h),r.memoizedState=a.state,c&&Qh(r,o,!0),r.child}function Gf(t){var r=t.stateNode;r.pendingContext?qh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&qh(t,r.context,!1),Za(t,r.containerInfo)}function qf(t,r,o,a,c){return qr(),Ga(c),r.flags|=256,et(t,r,o,a),r.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kf(t,r,o){var a=r.pendingProps,c=Ie.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ge(Ie,c&1),t===null)return $a(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Ho(p,a,0,null),t=_r(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=yu(o),r.memoizedState=_u,t):vu(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return dw(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=y,r.deletions=null):(a=Bn(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Bn(_,h):(h=_r(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?yu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=_u,a}return h=t.child,t=h.sibling,a=Bn(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function vu(t,r){return r=Ho({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ao(t,r,o,a){return a!==null&&Ga(a),Kr(r,t.child,null,o),t=vu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function dw(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=fu(Error(n(422))),Ao(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Ho({mode:"visible",children:a.children},c,0,null),h=_r(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&Kr(r,t.child,null,p),r.child.memoizedState=yu(p),r.memoizedState=_u,h);if((r.mode&1)===0)return Ao(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=fu(h,a,void 0),Ao(t,r,p,a)}if(_=(p&t.childLanes)!==0,ct||_){if(a=Ue,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,dn(t,c),jt(a,t,c,-1))}return Mu(),a=fu(Error(n(421))),Ao(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Cw.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,Et=On(c.nextSibling),wt=r,Se=!0,bt=null,t!==null&&(kt[Nt++]=un,kt[Nt++]=cn,kt[Nt++]=ar,un=t.id,cn=t.overflow,ar=r),r=vu(r,a.children),r.flags|=4096,r)}function Qf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ya(t.return,r,o)}function wu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Yf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(et(t,r,a.children,o),a=Ie.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,o,r);else if(t.tag===19)Qf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ge(Ie,a),(r.mode&1)===0)r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&Co(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),wu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&Co(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}wu(r,!0,o,null,h);break;case"together":wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Oo(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function fn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),fr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Bn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Bn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function hw(t,r,o){switch(r.tag){case 3:Gf(r),qr();break;case 5:cf(r);break;case 1:ut(r.type)&&po(r);break;case 4:Za(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;ge(wo,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(ge(Ie,Ie.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Kf(t,r,o):(ge(Ie,Ie.current&1),t=fn(t,r,o),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(t.flags&128)!==0){if(a)return Yf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(Ie,Ie.current),a)break;return null;case 22:case 23:return r.lanes=0,Bf(t,r,o)}return fn(t,r,o)}var Jf,Eu,Xf,Zf;Jf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Eu=function(){},Xf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,dr(Jt.current);var h=null;switch(o){case"input":c=Yl(t,c),a=Yl(t,a),h=[];break;case"select":c=b({},c,{value:void 0}),a=b({},a,{value:void 0}),h=[];break;case"textarea":c=Zl(t,c),a=Zl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=co)}ta(o,a);var p;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var y=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&y!==_&&(y!=null||_!=null))if(k==="style")if(_){for(p in _)!_.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in y)y.hasOwnProperty(p)&&_[p]!==y[p]&&(o||(o={}),o[p]=y[p])}else o||(h||(h=[]),h.push(k,o)),o=y;else k==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(k,y)):k==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(k,""+y):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(y!=null&&k==="onScroll"&&ye("scroll",t),h||_===y||(h=[])):(h=h||[]).push(k,y))}o&&(h=h||[]).push("style",o);var k=h;(r.updateQueue=k)&&(r.flags|=4)}},Zf=function(t,r,o,a){o!==a&&(r.flags|=4)};function ns(t,r){if(!Se)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ye(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function fw(t,r,o){var a=r.pendingProps;switch(Ba(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return ut(r.type)&&fo(),Ye(r),null;case 3:return a=r.stateNode,Jr(),ve(at),ve(Ke),nu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,bt!==null&&(Ou(bt),bt=null))),Eu(t,r),Ye(r),null;case 5:eu(r);var c=dr(Ji.current);if(o=r.type,t!==null&&r.stateNode!=null)Xf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return Ye(r),null}if(t=dr(Jt.current),yo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Yt]=r,a[Gi]=h,t=(r.mode&1)!==0,o){case"dialog":ye("cancel",a),ye("close",a);break;case"iframe":case"object":case"embed":ye("load",a);break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],a);break;case"source":ye("error",a);break;case"img":case"image":case"link":ye("error",a),ye("load",a);break;case"details":ye("toggle",a);break;case"input":Od(a,h),ye("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ye("invalid",a);break;case"textarea":Md(a,h),ye("invalid",a)}ta(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&uo(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&ye("scroll",a)}switch(o){case"input":js(a),Ld(a,h,!0);break;case"textarea":js(a),Fd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=co)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ud(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Yt]=r,t[Gi]=a,Jf(t,r,!1,!1),r.stateNode=t;e:{switch(p=na(o,a),o){case"dialog":ye("cancel",t),ye("close",t),c=a;break;case"iframe":case"object":case"embed":ye("load",t),c=a;break;case"video":case"audio":for(c=0;c<Bi.length;c++)ye(Bi[c],t);c=a;break;case"source":ye("error",t),c=a;break;case"img":case"image":case"link":ye("error",t),ye("load",t),c=a;break;case"details":ye("toggle",t),c=a;break;case"input":Od(t,a),c=Yl(t,a),ye("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=b({},a,{value:void 0}),ye("invalid",t);break;case"textarea":Md(t,a),c=Zl(t,a),ye("invalid",t);break;default:c=a}ta(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?Vd(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&zd(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&Ci(t,y):typeof y=="number"&&Ci(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&ye("scroll",t):y!=null&&xe(t,h,y,p))}switch(o){case"input":js(t),Ld(t,a,!1);break;case"textarea":js(t),Fd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+de(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Or(t,!!a.multiple,h,!1):a.defaultValue!=null&&Or(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=co)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ye(r),null;case 6:if(t&&r.stateNode!=null)Zf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=dr(Ji.current),dr(Jt.current),yo(r)){if(a=r.stateNode,o=r.memoizedProps,a[Yt]=r,(h=a.nodeValue!==o)&&(t=wt,t!==null))switch(t.tag){case 3:uo(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Yt]=r,r.stateNode=a}return Ye(r),null;case 13:if(ve(Ie),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Et!==null&&(r.mode&1)!==0&&(r.flags&128)===0)tf(),qr(),r.flags|=98560,h=!1;else if(h=yo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Yt]=r}else qr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),h=!1}else bt!==null&&(Ou(bt),bt=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ie.current&1)!==0?Le===0&&(Le=3):Mu())),r.updateQueue!==null&&(r.flags|=4),Ye(r),null);case 4:return Jr(),Eu(t,r),t===null&&Hi(r.stateNode.containerInfo),Ye(r),null;case 10:return Qa(r.type._context),Ye(r),null;case 17:return ut(r.type)&&fo(),Ye(r),null;case 19:if(ve(Ie),h=r.memoizedState,h===null)return Ye(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)ns(h,!1);else{if(Le!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=Co(t),p!==null){for(r.flags|=128,ns(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ge(Ie,Ie.current&1|2),r.child}t=t.sibling}h.tail!==null&&Re()>ti&&(r.flags|=128,a=!0,ns(h,!1),r.lanes=4194304)}else{if(!a)if(t=Co(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ns(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!Se)return Ye(r),null}else 2*Re()-h.renderingStartTime>ti&&o!==1073741824&&(r.flags|=128,a=!0,ns(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Re(),r.sibling=null,o=Ie.current,ge(Ie,a?o&1|2:o&1),r):(Ye(r),null);case 22:case 23:return Lu(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(St&1073741824)!==0&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function pw(t,r){switch(Ba(r),r.tag){case 1:return ut(r.type)&&fo(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Jr(),ve(at),ve(Ke),nu(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return eu(r),null;case 13:if(ve(Ie),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));qr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ve(Ie),null;case 4:return Jr(),null;case 10:return Qa(r.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var Do=!1,Je=!1,mw=typeof WeakSet=="function"?WeakSet:Set,W=null;function Zr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Te(t,r,a)}else o.current=null}function Su(t,r,o){try{o()}catch(a){Te(t,r,a)}}var ep=!1;function gw(t,r){if(La=Xs,t=Ah(),ka(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,y=-1,k=0,A=0,D=t,x=null;t:for(;;){for(var V;D!==o||c!==0&&D.nodeType!==3||(_=p+c),D!==h||a!==0&&D.nodeType!==3||(y=p+a),D.nodeType===3&&(p+=D.nodeValue.length),(V=D.firstChild)!==null;)x=D,D=V;for(;;){if(D===t)break t;if(x===o&&++k===c&&(_=p),x===h&&++A===a&&(y=p),(V=D.nextSibling)!==null)break;D=x,x=D.parentNode}D=V}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ma={focusedElem:t,selectionRange:o},Xs=!1,W=r;W!==null;)if(r=W,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,W=t;else for(;W!==null;){r=W;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var H=B.memoizedProps,Pe=B.memoizedState,C=r.stateNode,E=C.getSnapshotBeforeUpdate(r.elementType===r.type?H:Ft(r.type,H),Pe);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(M){Te(r,r.return,M)}if(t=r.sibling,t!==null){t.return=r.return,W=t;break}W=r.return}return B=ep,ep=!1,B}function rs(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Su(r,o,h)}c=c.next}while(c!==a)}}function Lo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Iu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function tp(t){var r=t.alternate;r!==null&&(t.alternate=null,tp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Yt],delete r[Gi],delete r[za],delete r[Xv],delete r[Zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=co));else if(a!==4&&(t=t.child,t!==null))for(Cu(t,r,o),t=t.sibling;t!==null;)Cu(t,r,o),t=t.sibling}function Tu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Tu(t,r,o),t=t.sibling;t!==null;)Tu(t,r,o),t=t.sibling}var He=null,Ut=!1;function Un(t,r,o){for(o=o.child;o!==null;)ip(t,r,o),o=o.sibling}function ip(t,r,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Gs,o)}catch{}switch(o.tag){case 5:Je||Zr(o,r);case 6:var a=He,c=Ut;He=null,Un(t,r,o),He=a,Ut=c,He!==null&&(Ut?(t=He,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):He.removeChild(o.stateNode));break;case 18:He!==null&&(Ut?(t=He,o=o.stateNode,t.nodeType===8?Ua(t.parentNode,o):t.nodeType===1&&Ua(t,o),Mi(t)):Ua(He,o.stateNode));break;case 4:a=He,c=Ut,He=o.stateNode.containerInfo,Ut=!0,Un(t,r,o),He=a,Ut=c;break;case 0:case 11:case 14:case 15:if(!Je&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&Su(o,r,p),c=c.next}while(c!==a)}Un(t,r,o);break;case 1:if(!Je&&(Zr(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Te(o,r,_)}Un(t,r,o);break;case 21:Un(t,r,o);break;case 22:o.mode&1?(Je=(a=Je)||o.memoizedState!==null,Un(t,r,o),Je=a):Un(t,r,o);break;default:Un(t,r,o)}}function sp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new mw),r.forEach(function(a){var c=Tw.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function zt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:He=_.stateNode,Ut=!1;break e;case 3:He=_.stateNode.containerInfo,Ut=!0;break e;case 4:He=_.stateNode.containerInfo,Ut=!0;break e}_=_.return}if(He===null)throw Error(n(160));ip(h,p,c),He=null,Ut=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(k){Te(c,r,k)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)op(r,t),r=r.sibling}function op(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(r,t),Zt(t),a&4){try{rs(3,t,t.return),Lo(3,t)}catch(H){Te(t,t.return,H)}try{rs(5,t,t.return)}catch(H){Te(t,t.return,H)}}break;case 1:zt(r,t),Zt(t),a&512&&o!==null&&Zr(o,o.return);break;case 5:if(zt(r,t),Zt(t),a&512&&o!==null&&Zr(o,o.return),t.flags&32){var c=t.stateNode;try{Ci(c,"")}catch(H){Te(t,t.return,H)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&Dd(c,h),na(_,p);var k=na(_,h);for(p=0;p<y.length;p+=2){var A=y[p],D=y[p+1];A==="style"?Vd(c,D):A==="dangerouslySetInnerHTML"?zd(c,D):A==="children"?Ci(c,D):xe(c,A,D,k)}switch(_){case"input":Jl(c,h);break;case"textarea":bd(c,h);break;case"select":var x=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Or(c,!!h.multiple,V,!1):x!==!!h.multiple&&(h.defaultValue!=null?Or(c,!!h.multiple,h.defaultValue,!0):Or(c,!!h.multiple,h.multiple?[]:"",!1))}c[Gi]=h}catch(H){Te(t,t.return,H)}}break;case 6:if(zt(r,t),Zt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(H){Te(t,t.return,H)}}break;case 3:if(zt(r,t),Zt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Mi(r.containerInfo)}catch(H){Te(t,t.return,H)}break;case 4:zt(r,t),Zt(t);break;case 13:zt(r,t),Zt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ru=Re())),a&4&&sp(t);break;case 22:if(A=o!==null&&o.memoizedState!==null,t.mode&1?(Je=(k=Je)||A,zt(r,t),Je=k):zt(r,t),Zt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!A&&(t.mode&1)!==0)for(W=t,A=t.child;A!==null;){for(D=W=A;W!==null;){switch(x=W,V=x.child,x.tag){case 0:case 11:case 14:case 15:rs(4,x,x.return);break;case 1:Zr(x,x.return);var B=x.stateNode;if(typeof B.componentWillUnmount=="function"){a=x,o=x.return;try{r=a,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(H){Te(a,o,H)}}break;case 5:Zr(x,x.return);break;case 22:if(x.memoizedState!==null){up(D);continue}}V!==null?(V.return=x,W=V):up(D)}A=A.sibling}e:for(A=null,D=t;;){if(D.tag===5){if(A===null){A=D;try{c=D.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=D.stateNode,y=D.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=jd("display",p))}catch(H){Te(t,t.return,H)}}}else if(D.tag===6){if(A===null)try{D.stateNode.nodeValue=k?"":D.memoizedProps}catch(H){Te(t,t.return,H)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;A===D&&(A=null),D=D.return}A===D&&(A=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:zt(r,t),Zt(t),a&4&&sp(t);break;case 21:break;default:zt(r,t),Zt(t)}}function Zt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ci(c,""),a.flags&=-33);var h=rp(t);Tu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=rp(t);Cu(t,_,p);break;default:throw Error(n(161))}}catch(y){Te(t,t.return,y)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function _w(t,r,o){W=t,lp(t)}function lp(t,r,o){for(var a=(t.mode&1)!==0;W!==null;){var c=W,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||Do;if(!p){var _=c.alternate,y=_!==null&&_.memoizedState!==null||Je;_=Do;var k=Je;if(Do=p,(Je=y)&&!k)for(W=c;W!==null;)p=W,y=p.child,p.tag===22&&p.memoizedState!==null?cp(c):y!==null?(y.return=p,W=y):cp(c);for(;h!==null;)W=h,lp(h),h=h.sibling;W=c,Do=_,Je=k}ap(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,W=h):ap(t)}}function ap(t){for(;W!==null;){var r=W;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||Lo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Je)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Ft(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&uf(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}uf(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var y=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var k=r.alternate;if(k!==null){var A=k.memoizedState;if(A!==null){var D=A.dehydrated;D!==null&&Mi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Je||r.flags&512&&Iu(r)}catch(x){Te(r,r.return,x)}}if(r===t){W=null;break}if(o=r.sibling,o!==null){o.return=r.return,W=o;break}W=r.return}}function up(t){for(;W!==null;){var r=W;if(r===t){W=null;break}var o=r.sibling;if(o!==null){o.return=r.return,W=o;break}W=r.return}}function cp(t){for(;W!==null;){var r=W;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Lo(4,r)}catch(y){Te(r,o,y)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(y){Te(r,c,y)}}var h=r.return;try{Iu(r)}catch(y){Te(r,h,y)}break;case 5:var p=r.return;try{Iu(r)}catch(y){Te(r,p,y)}}}catch(y){Te(r,r.return,y)}if(r===t){W=null;break}var _=r.sibling;if(_!==null){_.return=r.return,W=_;break}W=r.return}}var yw=Math.ceil,Mo=Ne.ReactCurrentDispatcher,ku=Ne.ReactCurrentOwner,xt=Ne.ReactCurrentBatchConfig,le=0,Ue=null,Ae=null,$e=0,St=0,ei=Dn(0),Le=0,is=null,fr=0,bo=0,Nu=0,ss=null,dt=null,Ru=0,ti=1/0,pn=null,Fo=!1,Pu=null,zn=null,Uo=!1,jn=null,zo=0,os=0,xu=null,jo=-1,Vo=0;function tt(){return(le&6)!==0?Re():jo!==-1?jo:jo=Re()}function Vn(t){return(t.mode&1)===0?1:(le&2)!==0&&$e!==0?$e&-$e:tw.transition!==null?(Vo===0&&(Vo=nh()),Vo):(t=he,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t)}function jt(t,r,o,a){if(50<os)throw os=0,xu=null,Error(n(185));xi(t,o,a),((le&2)===0||t!==Ue)&&(t===Ue&&((le&2)===0&&(bo|=o),Le===4&&Wn(t,$e)),ht(t,a),o===1&&le===0&&(r.mode&1)===0&&(ti=Re()+500,mo&&Mn()))}function ht(t,r){var o=t.callbackNode;tv(t,r);var a=Qs(t,t===Ue?$e:0);if(a===0)o!==null&&Zd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Zd(o),r===1)t.tag===0?ew(hp.bind(null,t)):Yh(hp.bind(null,t)),Yv(function(){(le&6)===0&&Mn()}),o=null;else{switch(rh(a)){case 1:o=ua;break;case 4:o=eh;break;case 16:o=$s;break;case 536870912:o=th;break;default:o=$s}o=wp(o,dp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function dp(t,r){if(jo=-1,Vo=0,(le&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ni()&&t.callbackNode!==o)return null;var a=Qs(t,t===Ue?$e:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||r)r=Wo(t,a);else{r=a;var c=le;le|=2;var h=pp();(Ue!==t||$e!==r)&&(pn=null,ti=Re()+500,mr(t,r));do try{Ew();break}catch(_){fp(t,_)}while(!0);Ka(),Mo.current=h,le=c,Ae!==null?r=0:(Ue=null,$e=0,r=Le)}if(r!==0){if(r===2&&(c=ca(t),c!==0&&(a=c,r=Au(t,c))),r===1)throw o=is,mr(t,0),Wn(t,a),ht(t,Re()),o;if(r===6)Wn(t,a);else{if(c=t.current.alternate,(a&30)===0&&!vw(c)&&(r=Wo(t,a),r===2&&(h=ca(t),h!==0&&(a=h,r=Au(t,h))),r===1))throw o=is,mr(t,0),Wn(t,a),ht(t,Re()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:gr(t,dt,pn);break;case 3:if(Wn(t,a),(a&130023424)===a&&(r=Ru+500-Re(),10<r)){if(Qs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){tt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Fa(gr.bind(null,t,dt,pn),r);break}gr(t,dt,pn);break;case 4:if(Wn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-Lt(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Re()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*yw(a/1960))-a,10<a){t.timeoutHandle=Fa(gr.bind(null,t,dt,pn),a);break}gr(t,dt,pn);break;case 5:gr(t,dt,pn);break;default:throw Error(n(329))}}}return ht(t,Re()),t.callbackNode===o?dp.bind(null,t):null}function Au(t,r){var o=ss;return t.current.memoizedState.isDehydrated&&(mr(t,r).flags|=256),t=Wo(t,r),t!==2&&(r=dt,dt=o,r!==null&&Ou(r)),t}function Ou(t){dt===null?dt=t:dt.push.apply(dt,t)}function vw(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Mt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Wn(t,r){for(r&=~Nu,r&=~bo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Lt(r),a=1<<o;t[o]=-1,r&=~a}}function hp(t){if((le&6)!==0)throw Error(n(327));ni();var r=Qs(t,0);if((r&1)===0)return ht(t,Re()),null;var o=Wo(t,r);if(t.tag!==0&&o===2){var a=ca(t);a!==0&&(r=a,o=Au(t,a))}if(o===1)throw o=is,mr(t,0),Wn(t,r),ht(t,Re()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,gr(t,dt,pn),ht(t,Re()),null}function Du(t,r){var o=le;le|=1;try{return t(r)}finally{le=o,le===0&&(ti=Re()+500,mo&&Mn())}}function pr(t){jn!==null&&jn.tag===0&&(le&6)===0&&ni();var r=le;le|=1;var o=xt.transition,a=he;try{if(xt.transition=null,he=1,t)return t()}finally{he=a,xt.transition=o,le=r,(le&6)===0&&Mn()}}function Lu(){St=ei.current,ve(ei)}function mr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qv(o)),Ae!==null)for(o=Ae.return;o!==null;){var a=o;switch(Ba(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&fo();break;case 3:Jr(),ve(at),ve(Ke),nu();break;case 5:eu(a);break;case 4:Jr();break;case 13:ve(Ie);break;case 19:ve(Ie);break;case 10:Qa(a.type._context);break;case 22:case 23:Lu()}o=o.return}if(Ue=t,Ae=t=Bn(t.current,null),$e=St=r,Le=0,is=null,Nu=bo=fr=0,dt=ss=null,cr!==null){for(r=0;r<cr.length;r++)if(o=cr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}cr=null}return t}function fp(t,r){do{var o=Ae;try{if(Ka(),To.current=Po,ko){for(var a=Ce.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}ko=!1}if(hr=0,Fe=De=Ce=null,Xi=!1,Zi=0,ku.current=null,o===null||o.return===null){Le=1,is=r,Ae=null;break}e:{var h=t,p=o.return,_=o,y=r;if(r=$e,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var k=y,A=_,D=A.tag;if((A.mode&1)===0&&(D===0||D===11||D===15)){var x=A.alternate;x?(A.updateQueue=x.updateQueue,A.memoizedState=x.memoizedState,A.lanes=x.lanes):(A.updateQueue=null,A.memoizedState=null)}var V=Uf(p);if(V!==null){V.flags&=-257,zf(V,p,_,h,r),V.mode&1&&Ff(h,k,r),r=V,y=k;var B=r.updateQueue;if(B===null){var H=new Set;H.add(y),r.updateQueue=H}else B.add(y);break e}else{if((r&1)===0){Ff(h,k,r),Mu();break e}y=Error(n(426))}}else if(Se&&_.mode&1){var Pe=Uf(p);if(Pe!==null){(Pe.flags&65536)===0&&(Pe.flags|=256),zf(Pe,p,_,h,r),Ga(Xr(y,_));break e}}h=y=Xr(y,_),Le!==4&&(Le=2),ss===null?ss=[h]:ss.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var C=Mf(h,y,r);af(h,C);break e;case 1:_=y;var E=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(zn===null||!zn.has(T)))){h.flags|=65536,r&=-r,h.lanes|=r;var M=bf(h,_,r);af(h,M);break e}}h=h.return}while(h!==null)}gp(o)}catch(G){r=G,Ae===o&&o!==null&&(Ae=o=o.return);continue}break}while(!0)}function pp(){var t=Mo.current;return Mo.current=Po,t===null?Po:t}function Mu(){(Le===0||Le===3||Le===2)&&(Le=4),Ue===null||(fr&268435455)===0&&(bo&268435455)===0||Wn(Ue,$e)}function Wo(t,r){var o=le;le|=2;var a=pp();(Ue!==t||$e!==r)&&(pn=null,mr(t,r));do try{ww();break}catch(c){fp(t,c)}while(!0);if(Ka(),le=o,Mo.current=a,Ae!==null)throw Error(n(261));return Ue=null,$e=0,Le}function ww(){for(;Ae!==null;)mp(Ae)}function Ew(){for(;Ae!==null&&!Gy();)mp(Ae)}function mp(t){var r=vp(t.alternate,t,St);t.memoizedProps=t.pendingProps,r===null?gp(t):Ae=r,ku.current=null}function gp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=fw(o,r,St),o!==null){Ae=o;return}}else{if(o=pw(o,r),o!==null){o.flags&=32767,Ae=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ae=null;return}}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=t}while(r!==null);Le===0&&(Le=5)}function gr(t,r,o){var a=he,c=xt.transition;try{xt.transition=null,he=1,Sw(t,r,o,a)}finally{xt.transition=c,he=a}return null}function Sw(t,r,o,a){do ni();while(jn!==null);if((le&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(nv(t,h),t===Ue&&(Ae=Ue=null,$e=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Uo||(Uo=!0,wp($s,function(){return ni(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=xt.transition,xt.transition=null;var p=he;he=1;var _=le;le|=4,ku.current=null,gw(t,o),op(o,t),Wv(Ma),Xs=!!La,Ma=La=null,t.current=o,_w(o),qy(),le=_,he=p,xt.transition=h}else t.current=o;if(Uo&&(Uo=!1,jn=t,zo=c),h=t.pendingLanes,h===0&&(zn=null),Yy(o.stateNode),ht(t,Re()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Fo)throw Fo=!1,t=Pu,Pu=null,t;return(zo&1)!==0&&t.tag!==0&&ni(),h=t.pendingLanes,(h&1)!==0?t===xu?os++:(os=0,xu=t):os=0,Mn(),null}function ni(){if(jn!==null){var t=rh(zo),r=xt.transition,o=he;try{if(xt.transition=null,he=16>t?16:t,jn===null)var a=!1;else{if(t=jn,jn=null,zo=0,(le&6)!==0)throw Error(n(331));var c=le;for(le|=4,W=t.current;W!==null;){var h=W,p=h.child;if((W.flags&16)!==0){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var k=_[y];for(W=k;W!==null;){var A=W;switch(A.tag){case 0:case 11:case 15:rs(8,A,h)}var D=A.child;if(D!==null)D.return=A,W=D;else for(;W!==null;){A=W;var x=A.sibling,V=A.return;if(tp(A),A===k){W=null;break}if(x!==null){x.return=V,W=x;break}W=V}}}var B=h.alternate;if(B!==null){var H=B.child;if(H!==null){B.child=null;do{var Pe=H.sibling;H.sibling=null,H=Pe}while(H!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,W=p;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:rs(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,W=C;break e}W=h.return}}var E=t.current;for(W=E;W!==null;){p=W;var T=p.child;if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,W=T;else e:for(p=E;W!==null;){if(_=W,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:Lo(9,_)}}catch(G){Te(_,_.return,G)}if(_===p){W=null;break e}var M=_.sibling;if(M!==null){M.return=_.return,W=M;break e}W=_.return}}if(le=c,Mn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Gs,t)}catch{}a=!0}return a}finally{he=o,xt.transition=r}}return!1}function _p(t,r,o){r=Xr(o,r),r=Mf(t,r,1),t=Fn(t,r,1),r=tt(),t!==null&&(xi(t,1,r),ht(t,r))}function Te(t,r,o){if(t.tag===3)_p(t,t,o);else for(;r!==null;){if(r.tag===3){_p(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){t=Xr(o,t),t=bf(r,t,1),r=Fn(r,t,1),t=tt(),r!==null&&(xi(r,1,t),ht(r,t));break}}r=r.return}}function Iw(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=tt(),t.pingedLanes|=t.suspendedLanes&o,Ue===t&&($e&o)===o&&(Le===4||Le===3&&($e&130023424)===$e&&500>Re()-Ru?mr(t,0):Nu|=o),ht(t,r)}function yp(t,r){r===0&&((t.mode&1)===0?r=1:(r=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var o=tt();t=dn(t,r),t!==null&&(xi(t,r,o),ht(t,o))}function Cw(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),yp(t,o)}function Tw(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),yp(t,o)}var vp;vp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||at.current)ct=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return ct=!1,hw(t,r,o);ct=(t.flags&131072)!==0}else ct=!1,Se&&(r.flags&1048576)!==0&&Jh(r,_o,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Oo(t,r),t=r.pendingProps;var c=Hr(r,Ke.current);Yr(r,o),c=su(null,r,a,t,c,o);var h=ou();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ut(a)?(h=!0,po(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Xa(r),c.updater=xo,r.stateNode=c,c._reactInternals=r,hu(r,a,t,o),r=gu(null,r,a,!0,h,o)):(r.tag=0,Se&&h&&Wa(r),et(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Oo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Nw(a),t=Ft(a,t),c){case 0:r=mu(null,r,a,t,o);break e;case 1:r=$f(null,r,a,t,o);break e;case 11:r=jf(null,r,a,t,o);break e;case 14:r=Vf(null,r,a,Ft(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ft(a,c),mu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ft(a,c),$f(t,r,a,c,o);case 3:e:{if(Gf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,lf(t,r),Io(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Xr(Error(n(423)),r),r=qf(t,r,a,o,c);break e}else if(a!==c){c=Xr(Error(n(424)),r),r=qf(t,r,a,o,c);break e}else for(Et=On(r.stateNode.containerInfo.firstChild),wt=r,Se=!0,bt=null,o=sf(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),a===c){r=fn(t,r,o);break e}et(t,r,a,o)}r=r.child}return r;case 5:return cf(r),t===null&&$a(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,ba(a,c)?p=null:h!==null&&ba(a,h)&&(r.flags|=32),Hf(t,r),et(t,r,p,o),r.child;case 6:return t===null&&$a(r),null;case 13:return Kf(t,r,o);case 4:return Za(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Kr(r,null,a,o):et(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ft(a,c),jf(t,r,a,c,o);case 7:return et(t,r,r.pendingProps,o),r.child;case 8:return et(t,r,r.pendingProps.children,o),r.child;case 12:return et(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,ge(wo,a._currentValue),a._currentValue=p,h!==null)if(Mt(h.value,p)){if(h.children===c.children&&!at.current){r=fn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=hn(-1,o&-o),y.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var A=k.pending;A===null?y.next=y:(y.next=A.next,A.next=y),k.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),Ya(h.return,o,r),_.lanes|=o;break}y=y.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Ya(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}et(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Yr(r,o),c=Rt(c),a=a(c),r.flags|=1,et(t,r,a,o),r.child;case 14:return a=r.type,c=Ft(a,r.pendingProps),c=Ft(a.type,c),Vf(t,r,a,c,o);case 15:return Wf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ft(a,c),Oo(t,r),r.tag=1,ut(a)?(t=!0,po(r)):t=!1,Yr(r,o),Df(r,a,c),hu(r,a,c,o),gu(null,r,a,!0,t,o);case 19:return Yf(t,r,o);case 22:return Bf(t,r,o)}throw Error(n(156,r.tag))};function wp(t,r){return Xd(t,r)}function kw(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,r,o,a){return new kw(t,r,o,a)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nw(t){if(typeof t=="function")return bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ct)return 11;if(t===Tt)return 14}return 2}function Bn(t,r){var o=t.alternate;return o===null?(o=At(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Bo(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")bu(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Ge:return _r(o.children,c,h,r);case ot:p=8,c|=8;break;case Kt:return t=At(12,o,r,c|2),t.elementType=Kt,t.lanes=h,t;case qe:return t=At(13,o,r,c),t.elementType=qe,t.lanes=h,t;case lt:return t=At(19,o,r,c),t.elementType=lt,t.lanes=h,t;case U:return Ho(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dt:p=10;break e;case on:p=9;break e;case Ct:p=11;break e;case Tt:p=14;break e;case O:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=At(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function _r(t,r,o,a){return t=At(7,t,a,r),t.lanes=o,t}function Ho(t,r,o,a){return t=At(22,t,a,r),t.elementType=U,t.lanes=o,t.stateNode={isHidden:!1},t}function Fu(t,r,o){return t=At(6,t,null,r),t.lanes=o,t}function Uu(t,r,o){return r=At(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Rw(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function zu(t,r,o,a,c,h,p,_,y){return t=new Rw(t,r,o,_,y),r===1?(r=1,h===!0&&(r|=8)):r=0,h=At(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(h),t}function Pw(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Be,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function Ep(t){if(!t)return Ln;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ut(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ut(o))return Kh(t,o,r)}return r}function Sp(t,r,o,a,c,h,p,_,y){return t=zu(o,a,!0,t,c,h,p,_,y),t.context=Ep(null),o=t.current,a=tt(),c=Vn(o),h=hn(a,c),h.callback=r??null,Fn(o,h,c),t.current.lanes=c,xi(t,c,a),ht(t,a),t}function $o(t,r,o,a){var c=r.current,h=tt(),p=Vn(c);return o=Ep(o),r.context===null?r.context=o:r.pendingContext=o,r=hn(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Fn(c,r,p),t!==null&&(jt(t,c,p,h),So(t,c,p)),p}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function ju(t,r){Ip(t,r),(t=t.alternate)&&Ip(t,r)}function xw(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}qo.prototype.render=Vu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));$o(t,r,null,null)},qo.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;pr(function(){$o(null,t,null,null)}),r[ln]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=oh();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Pn.length&&r!==0&&r<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&uh(t)}};function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Aw(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=Go(p);h.call(k)}}var p=Sp(r,a,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=p,t[ln]=p.current,Hi(t.nodeType===8?t.parentNode:t),pr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=Go(y);_.call(k)}}var y=zu(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=y,t[ln]=y.current,Hi(t.nodeType===8?t.parentNode:t),pr(function(){$o(r,y,o,a)}),y}function Qo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var y=Go(p);_.call(y)}}$o(r,p,t,c)}else p=Aw(o,r,t,c,a);return Go(p)}ih=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Pi(r.pendingLanes);o!==0&&(ha(r,o|1),ht(r,Re()),(le&6)===0&&(ti=Re()+500,Mn()))}break;case 13:pr(function(){var a=dn(t,1);if(a!==null){var c=tt();jt(a,t,1,c)}}),ju(t,1)}},fa=function(t){if(t.tag===13){var r=dn(t,134217728);if(r!==null){var o=tt();jt(r,t,134217728,o)}ju(t,134217728)}},sh=function(t){if(t.tag===13){var r=Vn(t),o=dn(t,r);if(o!==null){var a=tt();jt(o,t,r,a)}ju(t,r)}},oh=function(){return he},lh=function(t,r){var o=he;try{return he=t,r()}finally{he=o}},sa=function(t,r,o){switch(r){case"input":if(Jl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=ho(a);if(!c)throw Error(n(90));Ad(a),Jl(a,c)}}}break;case"textarea":bd(t,o);break;case"select":r=o.value,r!=null&&Or(t,!!o.multiple,r,!1)}},$d=Du,Gd=pr;var Ow={usingClientEntryPoint:!1,Events:[qi,Wr,ho,Bd,Hd,Du]},ls={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dw={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yd(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Gs=Yo.inject(Dw),Qt=Yo}catch{}}return ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow,ft.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(r))throw Error(n(200));return Pw(t,r,null,o)},ft.createRoot=function(t,r){if(!Wu(t))throw Error(n(299));var o=!1,a="",c=Cp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=zu(t,1,!1,null,null,o,!1,a,c),t[ln]=r.current,Hi(t.nodeType===8?t.parentNode:t),new Vu(r)},ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yd(r),t=t===null?null:t.stateNode,t},ft.flushSync=function(t){return pr(t)},ft.hydrate=function(t,r,o){if(!Ko(r))throw Error(n(200));return Qo(null,t,r,!0,o)},ft.hydrateRoot=function(t,r,o){if(!Wu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=Cp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=Sp(r,null,t,1,o??null,c,!1,h,p),t[ln]=r.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new qo(r)},ft.render=function(t,r,o){if(!Ko(r))throw Error(n(200));return Qo(null,t,r,!1,o)},ft.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(n(40));return t._reactRootContainer?(pr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1},ft.unstable_batchedUpdates=Du,ft.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Ko(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,r,o,!1,a)},ft.version="18.3.1-next-f1338f8080-20240426",ft}var Dp;function Ww(){if(Dp)return $u.exports;Dp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$u.exports=Vw(),$u.exports}var Lp;function Bw(){if(Lp)return Jo;Lp=1;var i=Ww();return Jo.createRoot=i.createRoot,Jo.hydrateRoot=i.hydrateRoot,Jo}var Hw=Bw();const $w=ng(Hw);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rg=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Xe.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},m)=>Xe.createElement("svg",{ref:m,...qw,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:rg("lucide",l),...f},[...d.map(([g,w])=>Xe.createElement(g,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=(i,e)=>{const n=Xe.forwardRef(({className:s,...l},u)=>Xe.createElement(Kw,{ref:u,iconNode:e,className:rg(`lucide-${Gw(i)}`,s),...l}));return n.displayName=`${i}`,n};/**
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
 */const z=function(i,e){if(!i)throw gi(e)},gi=function(i){return new Error("Firebase Database ("+ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const sg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},t0=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,w=u>>2,v=(u&3)<<4|f>>4;let I=(f&15)<<2|g>>6,F=g&63;m||(F=64,d||(I=64)),s.push(n[w],n[v],n[I],n[F])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(sg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):t0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new n0;const I=u<<2|f>>4;if(s.push(I),g!==64){const F=f<<4&240|g>>2;if(s.push(F),v!==64){const j=g<<6&192|v;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class n0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const og=function(i){const e=sg(i);return Dc.encodeByteArray(e,!0)},ll=function(i){return og(i).replace(/\./g,"")},al=function(i){try{return Dc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function r0(i){return lg(void 0,i)}function lg(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i0(n)||(i[n]=lg(i[n],e[n]));return i}function i0(i){return i!=="__proto__"}/**
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
 */const o0=()=>s0().__FIREBASE_DEFAULTS__,l0=()=>{if(typeof process>"u"||typeof Fp>"u")return;const i=Fp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},a0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&al(i[1]);return e&&JSON.parse(e)},Lc=()=>{try{return e0()||o0()||l0()||a0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ag=i=>{var e,n;return(n=(e=Lc())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},u0=i=>{const e=ag(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ug=()=>{var i;return(i=Lc())==null?void 0:i.config},cg=i=>{var e;return(e=Lc())==null?void 0:e[`_${i}`]};/**
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
 */function c0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ll(JSON.stringify(n)),ll(JSON.stringify(d)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function d0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bc(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h0(){const i=it();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function f0(){return ig.NODE_ADMIN===!0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function hg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const p0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=p0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?m0(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new sn(l,f,s)}}function m0(i,e){try{let n=0,s="";for(;n<i.length;){const l=i.indexOf("{$",n);if(l===-1){s+=i.substring(n);break}const u=i.indexOf("}",l+2);if(u===-1){s+=i.substring(n);break}const d=i.substring(l+2,u),f=e[d];s+=i.substring(n,l)+(f!=null?String(f):`<${d}?>`),n=u+1}return s}catch{return i}}/**
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
 */function vs(i){return JSON.parse(i)}function Me(i){return JSON.stringify(i)}/**
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
 */const fg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=vs(al(u[0])||""),n=vs(al(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},g0=function(i){const e=fg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_0=function(i){const e=fg(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function hi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function hc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ul(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function er(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Up(u)&&Up(d)){if(!er(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Up(i){return i!==null&&typeof i=="object"}/**
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
 */function _i(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class y0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const I=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,w;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),w=1518500249):(g=u^d^f,w=1859775393):v<60?(g=u&d|f&(u|d),w=2400959708):(g=u^d^f,w=3395469782);const I=(l<<5|l>>>27)+g+m+w+s[v]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function v0(i,e){const n=new w0(i,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Qu),l.error===void 0&&(l.error=Qu),l.complete===void 0&&(l.complete=Qu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Qu(){}function zc(i,e){return`${i} failed: ${e} argument `}/**
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
 */const S0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,z(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Dl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const I0=1e3,C0=2,T0=14400*1e3,k0=.5;function zp(i,e=I0,n=C0){const s=e*Math.pow(n,i),l=Math.round(k0*s*(Math.random()-.5)*2);return Math.min(T0,s+l)}/**
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
 */function st(i){return i&&i._delegate?i._delegate:i}/**
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
 */function xs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pg(i){return(await fetch(i,{credentials:"include"})).ok}class qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class N0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ol;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P0(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(i){return i===yr?void 0:i}function P0(i){return i.instantiationMode==="EAGER"}/**
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
 */var fe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(fe||(fe={}));const A0={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},O0=fe.INFO,D0={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},L0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=D0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=O0,this._logHandler=L0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const M0=(i,e)=>e.some(n=>i instanceof n);let jp,Vp;function b0(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F0(){return Vp||(Vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mg=new WeakMap,fc=new WeakMap,gg=new WeakMap,Yu=new WeakMap,jc=new WeakMap;function U0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Yn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&mg.set(n,i)}).catch(()=>{}),jc.set(e,i),e}function z0(i){if(fc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});fc.set(i,e)}let pc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return fc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function j0(i){pc=i(pc)}function V0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Ju(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),Yn(s)}:F0().includes(i)?function(...e){return i.apply(Ju(this),e),Yn(mg.get(this))}:function(...e){return Yn(i.apply(Ju(this),e))}}function W0(i){return typeof i=="function"?V0(i):(i instanceof IDBTransaction&&z0(i),M0(i,b0())?new Proxy(i,pc):i)}function Yn(i){if(i instanceof IDBRequest)return U0(i);if(Yu.has(i))return Yu.get(i);const e=W0(i);return e!==i&&(Yu.set(i,e),jc.set(e,i)),e}const Ju=i=>jc.get(i);function _g(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Yn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Yn(d.result),m.oldVersion,m.newVersion,Yn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const B0=["get","getKey","getAll","getAllKeys","count"],H0=["put","add","delete","clear"],Xu=new Map;function Wp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=H0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||B0.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Xu.set(e,u),u}j0(i=>({...i,get:(e,n,s)=>Wp(e,n)||i.get(e,n,s),has:(e,n)=>!!Wp(e,n)||i.has(e,n)}));/**
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
 */class $0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function G0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",Bp="0.16.0";/**
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
 */const cl=new Map,EE=new Map,_c=new Map;function Hp(i,e){try{i.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function nn(i){const e=i.name;if(_c.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,i);for(const n of cl.values())Hp(n,i);for(const n of EE.values())Hp(n,i);return!0}function xr(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Vt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const yi=vE;function yg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:gc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw mn.create("bad-app-name",{appName:String(l)});if(n||(n=ug()),!n)throw mn.create("no-options");const u=cl.get(l);if(u)if(er(n,u.options)){if(er(s,u.config))return u;throw mn.create("duplicate-app",{appName:l,mismatchedParam:"config",oldValue:JSON.stringify(u.config),newValue:JSON.stringify(s)})}else throw mn.create("duplicate-app",{appName:l,mismatchedParam:"options",oldValue:JSON.stringify(u.options),newValue:JSON.stringify(n)});const d=new x0(l);for(const m of _c.values())d.addComponent(m);const f=new IE(n,s,d);return cl.set(l,f),f}function Vc(i=gc){const e=cl.get(i);if(!e&&i===gc&&ug())return yg();if(!e)throw mn.create("no-app",{appName:i});return e}function Ot(i,e,n){let s=wE[i]??i;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(d.join(" "));return}nn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const CE="firebase-heartbeat-database",TE=1,ws="firebase-heartbeat-store";let Zu=null;function vg(){return Zu||(Zu=_g(CE,TE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ws)}catch(n){console.warn(n)}}}}).catch(i=>{throw mn.create("idb-open",{originalErrorMessage:i.message})})),Zu}async function kE(i){try{const n=(await vg()).transaction(ws),s=await n.objectStore(ws).get(wg(i));return await n.done,s}catch(e){if(e instanceof sn)wn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function $p(i,e){try{const s=(await vg()).transaction(ws,"readwrite");await s.objectStore(ws).put(e,wg(i)),await s.done}catch(n){if(n instanceof sn)wn.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(s.message)}}}function wg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const NE=1024,RE=30;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Gp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>RE){const d=OE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gp(),{heartbeatsToSend:s,unsentEntries:l}=xE(this._heartbeatsCache.heartbeats),u=ll(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return wn.warn(n),""}}}function Gp(){return new Date().toISOString().substring(0,10)}function xE(i,e=NE){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),qp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),qp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $p(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qp(i){return ll(JSON.stringify({version:2,heartbeats:i})).length}function OE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function DE(i){nn(new qt("platform-logger",e=>new $0(e),"PRIVATE")),nn(new qt("heartbeat",e=>new PE(e),"PRIVATE")),Ot(mc,Bp,i),Ot(mc,Bp,"esm2020"),Ot("fire-js","")}/**
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
 */let Eg="";function LE(i){Eg=i}/**
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
 */const Sg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ME(e)}}catch{}return new bE},wr=Sg("localStorage"),FE=Sg("sessionStorage");/**
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
 */const oi=new Ll("@firebase/database"),UE=(function(){let i=1;return function(){return i++}})(),Ig=function(i){const e=S0(i),n=new y0;n.update(e);const s=n.digest();return Dc.encodeByteArray(s)},As=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=As.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let fs=null,Jp=!0;const zE=function(i,e){z(!0,"Can't turn on custom loggers persistently."),oi.logLevel=fe.VERBOSE,fs=oi.log.bind(oi)},Ze=function(...i){if(Jp===!0&&(Jp=!1,fs===null&&FE.get("logging_enabled")===!0&&zE()),fs){const e=As.apply(null,i);fs(e)}},Os=function(i){return function(...e){Ze(i,...e)}},yc=function(...i){const e="FIREBASE INTERNAL ERROR: "+As(...i);oi.error(e)},En=function(...i){const e=`FIREBASE FATAL ERROR: ${As(...i)}`;throw oi.error(e),new Error(e)},mt=function(...i){const e="FIREBASE WARNING: "+As(...i);oi.warn(e)},jE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cg=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},VE=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Ir="[MAX_NAME]",vi=function(i,e){if(i===e)return 0;if(i===fi||e===Ir)return-1;if(e===fi||i===Ir)return 1;{const n=Xp(i),s=Xp(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},WE=function(i,e){return i===e?0:i<e?-1:1},us=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Me(e))},Wc=function(i){if(typeof i!="object"||i===null)return Me(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Wc(i[e[s]]);return n+="}",n},Tg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function gt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const kg=function(i){z(!Cg(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const w=g.join("");let v="";for(m=0;m<64;m+=8){let I=parseInt(w.substr(m,8),2).toString(16);I.length===1&&(I="0"+I),v=v+I}return v.toLowerCase()},BE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $E(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const GE=new RegExp("^-?(0*)\\d{1,10}$"),qE=-2147483648,KE=2147483647,Xp=function(i){if(GE.test(i)){const e=Number(i);if(e>=qE&&e<=KE)return e}return null},wi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},QE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ps=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bg{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XE(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Fg(i,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===Lg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Mg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XE(i)&&(n.ns=i.namespace);const l=[];return gt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */const ec={},tc={};function Hc(i){const e=i.toString();return ec[e]||(ec[e]=new ZE),ec[e]}function eS(i,e){const n=i.toString();return tc[n]||(tc[n]=e()),tc[n]}/**
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
 */const om=32,lm=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new me("")}function oe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function tr(i){return i.pieces_.length-i.pieceNum_}function _e(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new me(i.pieces_,e)}function $g(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function IS(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Gg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function qg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new me(e,0)}function be(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new me(n,0)}function se(i){return i.pieceNum_>=i.pieces_.length}function nt(i,e){const n=oe(i),s=oe(e);if(n===null)return e;if(n===s)return nt(_e(i),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Kg(i,e){if(tr(i)!==tr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Bt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(tr(i)>tr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class CS{constructor(e,n){this.errorPrefix_=n,this.parts_=Gg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Dl(this.parts_[s]);Qg(this)}}function TS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Dl(e),Qg(i)}function kS(i){const e=i.parts_.pop();i.byteLength_-=Dl(e),i.parts_.length>0&&(i.byteLength_-=1)}function Qg(i){if(i.byteLength_>lm)throw new Error(i.errorPrefix_+"has a key path longer than "+lm+" bytes ("+i.byteLength_+").");if(i.parts_.length>om)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+om+") or object contains a cycle "+vr(i))}function vr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */function OS(i,e){return vi(i.name,e.name)}function qc(i,e){return vi(i,e)}/**
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
 */let wc;function DS(i){wc=i}const Jg=function(i){return typeof i=="number"?"number:"+kg(i):"string:"+i},Xg=function(i){if(i.isLeafNode()){const e=i.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else z(i===wc||i.isEmpty(),"priority of unexpected type.");z(i===wc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Zg,e_;function LS(i){Zg=i}function MS(i){e_=i}class bS extends Ml{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?vi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ir,new je("[PRIORITY-POST]",e_))}makePost(e,n){const s=Zg(e);return new ie(n,new je("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new bS;/**
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
 */const FS=Math.log(2);class US{constructor(e){const n=u=>parseInt(Math.log(u)/FS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(i,e,n,s){i.sort(e);const l=function(m,g){const w=g-m;let v,I;if(w===0)return null;if(w===1)return v=i[m],I=n?n(v):v,new Ve(I,v.node,Ve.BLACK,null,null);{const F=parseInt(w/2,10)+m,j=l(m,F),$=l(F+1,g);return v=i[F],I=n?n(v):v,new Ve(I,v.node,Ve.BLACK,j,$)}},u=function(m){let g=null,w=null,v=i.length;const I=function(j,$){const q=v-j,pe=v;v-=j;const Oe=l(q+1,pe),xe=i[q],Ne=n?n(xe):xe;F(new Ve(Ne,xe.node,$,null,Oe))},F=function(j){g?(g.left=j,g=j):(w=j,g=j)};for(let j=0;j<m.count;++j){const $=m.nextBitIsOne(),q=Math.pow(2,m.count-(j+1));$?I(q,Ve.BLACK):(I(q,Ve.BLACK),I(q,Ve.RED))}return w},d=new US(i.length),f=u(d);return new pt(s||e,f)};/**
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
 */const jS=!0;function We(i,e=null){if(i===null)return J.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new je(n,We(e))}if(!(i instanceof Array)&&jS){const n=[];let s=!1;if(gt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=We(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ie(d,m)))}}),n.length===0)return J.EMPTY_NODE;const u=fl(n,OS,d=>d.name,qc);if(s){const d=fl(n,ke.getCompare());return new J(u,We(e),new gn({".priority":d},{".priority":ke}))}else return new J(u,We(e),gn.Default)}else{let n=J.EMPTY_NODE;return gt(i,(s,l)=>{if(Cn(i,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}LS(We);/**
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
 */function t_(i){return{type:"value",snapshotNode:i}}function pi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Ss(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function Is(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function HS(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Qc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ir}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Qc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GS(i){return i.loadsAllData()?new Kc(i.getIndex()):i.hasLimit()?new $S(i):new Cs(i)}function dm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===ke?n="$priority":i.index_===BS?n="$value":i.index_===li?n="$key":(z(i.index_ instanceof VS,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Me(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Me(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Me(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Me(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Me(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function hm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==ke&&(e.i=i.index_.toString()),e}/**
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
 */function ml(){return{value:null,children:new Map}}function n_(i,e,n){if(se(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=oe(e);i.children.has(s)||i.children.set(s,ml());const l=i.children.get(s);e=_e(e),n_(l,e,n)}}function Ec(i,e,n){i.value!==null?n(e,i.value):KS(i,(s,l)=>{const u=new me(e.toString()+"/"+s);Ec(l,u,n)})}function KS(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */var Ht;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jc(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class ZS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eI(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(HS(d.childName,d.snapshotNode))}),hs(i,l,"child_removed",e,s,n),hs(i,l,"child_added",e,s,n),hs(i,l,"child_moved",u,s,n),hs(i,l,"child_changed",e,s,n),hs(i,l,"value",e,s,n),l}function hs(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>nI(i,f,m)),d.forEach(f=>{const m=tI(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function tI(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function nI(i,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),l=new ie(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function bl(i,e){return{eventCache:i,serverCache:e}}function ms(i,e,n,s){return bl(new nr(e,n,s),i.serverCache)}function i_(i,e,n,s){return bl(i.eventCache,new nr(e,n,s))}function _l(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Tr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new we(null))}}function gs(i,e,n){if(se(e))return new Gt(new we(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=nt(l,e);return u=u.updateChild(d,n),new Gt(i.writeTree_.set(l,u))}else{const l=new we(n),u=i.writeTree_.setTree(e,l);return new Gt(u)}}}function pm(i,e,n){let s=i;return gt(n,(l,u)=>{s=gs(s,be(e,l),u)}),s}function mm(i,e){if(se(e))return Gt.empty();{const n=i.writeTree_.setTree(e,new we(null));return new Gt(n)}}function Sc(i,e){return Ar(i,e)!=null}function Ar(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function gm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,l)=>{e.push(new ie(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ie(s,l.value))}),e}function Jn(i,e){if(se(e))return i;{const n=Ar(i,e);return n!=null?new Gt(new we(n)):new Gt(i.writeTree_.subtree(e))}}function Ic(i){return i.writeTree_.isEmpty()}function mi(i,e){return s_(ue(),i.writeTree_,e)}function s_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(z(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=s_(be(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(be(i,".priority"),s)),n}}/**
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
 */function Fl(i,e){return u_(e,i)}function iI(i,e,n,s,l){z(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=gs(i.visibleWrites,e,n)),i.lastWriteId=s}function sI(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function oI(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&lI(f,s.path)?l=!1:Bt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return aI(i),!0;if(s.snap)i.visibleWrites=mm(i.visibleWrites,s.path);else{const f=s.children;gt(f,m=>{i.visibleWrites=mm(i.visibleWrites,be(s.path,m))})}return!0}else return!1}function lI(i,e){if(i.snap)return Bt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Bt(be(i.path,n),e))return!0;return!1}function aI(i){i.visibleWrites=o_(i.allWrites,uI,ue()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function uI(i){return i.visible}function o_(i,e,n){let s=Gt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Bt(n,d)?(f=nt(n,d),s=gs(s,f,u.snap)):Bt(d,n)&&(f=nt(d,n),s=gs(s,ue(),u.snap.getChild(f)));else if(u.children){if(Bt(n,d))f=nt(n,d),s=pm(s,f,u.children);else if(Bt(d,n))if(f=nt(d,n),se(f))s=pm(s,ue(),u.children);else{const m=hi(u.children,oe(f));if(m){const g=m.getChild(_e(f));s=gs(s,ue(),g)}}}else throw gi("WriteRecord should have .snap or .children")}}return s}function l_(i,e,n,s,l){if(!s&&!l){const u=Ar(i.visibleWrites,e);if(u!=null)return u;{const d=Jn(i.visibleWrites,e);if(Ic(d))return n;if(n==null&&!Sc(d,ue()))return null;{const f=n||J.EMPTY_NODE;return mi(d,f)}}}else{const u=Jn(i.visibleWrites,e);if(!l&&Ic(u))return n;if(!l&&n==null&&!Sc(u,ue()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Bt(g.path,e)||Bt(e,g.path))},f=o_(i.allWrites,d,e),m=n||J.EMPTY_NODE;return mi(f,m)}}}function cI(i,e,n){let s=J.EMPTY_NODE;const l=Ar(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(ke,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Jn(i.visibleWrites,e);return n.forEachChild(ke,(d,f)=>{const m=mi(Jn(u,new me(d)),f);s=s.updateImmediateChild(d,m)}),gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Jn(i.visibleWrites,e);return gm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function dI(i,e,n,s,l){z(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=be(e,n);if(Sc(i.visibleWrites,u))return null;{const d=Jn(i.visibleWrites,u);return Ic(d)?l.getChild(n):mi(d,l.getChild(n))}}function hI(i,e,n,s){const l=be(e,n),u=Ar(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Jn(i.visibleWrites,l);return mi(d,s.getNode().getImmediateChild(n))}else return null}function fI(i,e){return Ar(i.visibleWrites,e)}function pI(i,e,n,s,l,u,d){let f;const m=Jn(i.visibleWrites,e),g=Ar(m,ue());if(g!=null)f=g;else if(n!=null)f=mi(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const w=[],v=d.getCompare(),I=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let F=I.getNext();for(;F&&w.length<l;)v(F,s)!==0&&w.push(F),F=I.getNext();return w}else return[]}function mI(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function yl(i,e,n,s){return l_(i.writeTree,i.treePath,e,n,s)}function Xc(i,e){return cI(i.writeTree,i.treePath,e)}function _m(i,e,n,s){return dI(i.writeTree,i.treePath,e,n,s)}function vl(i,e){return fI(i.writeTree,be(i.treePath,e))}function gI(i,e,n,s,l,u){return pI(i.writeTree,i.treePath,e,n,s,l,u)}function Zc(i,e,n){return hI(i.writeTree,i.treePath,e,n)}function a_(i,e){return u_(be(i.treePath,e),i.writeTree)}function u_(i,e){return{treePath:i,writeTree:e}}/**
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
 */function vI(i){return{filter:i}}function wI(i,e){z(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function EI(i,e,n,s,l){const u=new _I;let d,f;if(n.type===Ht.OVERWRITE){const g=n;g.source.fromUser?d=Cc(i,e,g.path,g.snap,s,l,u):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!se(g.path),d=wl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ht.MERGE){const g=n;g.source.fromUser?d=II(i,e,g.path,g.children,s,l,u):(z(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=Tc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Ht.ACK_USER_WRITE){const g=n;g.revert?d=kI(i,e,g.path,s,l,u):d=CI(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ht.LISTEN_COMPLETE)d=TI(i,e,n.path,s,u);else throw gi("Unknown operation type: "+n.type);const m=u.getChanges();return SI(e,d,m),{viewCache:d,changes:m}}function SI(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=_l(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(t_(_l(e)))}}function d_(i,e,n,s,l,u){const d=e.eventCache;if(vl(s,n)!=null)return e;{let f,m;if(se(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Tr(e),w=g instanceof J?g:J.EMPTY_NODE,v=Xc(s,w);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=yl(s,Tr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=oe(n);if(g===".priority"){z(tr(n)===1,"Can't have a priority with additional path components");const w=d.getNode();m=e.serverCache.getNode();const v=_m(s,n,w,m);v!=null?f=i.filter.updatePriority(w,v):f=d.getNode()}else{const w=_e(n);let v;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const I=_m(s,n,d.getNode(),m);I!=null?v=d.getNode().getImmediateChild(g).updateChild(w,I):v=d.getNode().getImmediateChild(g)}else v=Zc(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,w,l,u):f=d.getNode()}}return ms(e,f,d.isFullyInitialized()||se(n),i.filter.filtersNodes())}}function wl(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const w=d?i.filter:i.filter.getIndexedFilter();if(se(n))g=w.updateFullNode(m.getNode(),s,null);else if(w.filtersNodes()&&!m.isFiltered()){const F=m.getNode().updateChild(n,s);g=w.updateFullNode(m.getNode(),F,null)}else{const F=oe(n);if(!m.isCompleteForPath(n)&&tr(n)>1)return e;const j=_e(n),q=m.getNode().getImmediateChild(F).updateChild(j,s);F===".priority"?g=w.updatePriority(m.getNode(),q):g=w.updateChild(m.getNode(),F,q,j,c_,null)}const v=i_(e,g,m.isFullyInitialized()||se(n),w.filtersNodes()),I=new ed(l,v,u);return d_(i,v,n,l,I,f)}function Cc(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const w=new ed(l,e,u);if(se(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=ms(e,g,!0,i.filter.filtersNodes());else{const v=oe(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=ms(e,g,f.isFullyInitialized(),f.isFiltered());else{const I=_e(n),F=f.getNode().getImmediateChild(v);let j;if(se(I))j=s;else{const $=w.getCompleteChild(v);$!=null?$g(I)===".priority"&&$.getChild(qg(I)).isEmpty()?j=$:j=$.updateChild(I,s):j=J.EMPTY_NODE}if(F.equals(j))m=e;else{const $=i.filter.updateChild(f.getNode(),v,j,I,w,d);m=ms(e,$,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function ym(i,e){return i.eventCache.isCompleteForChild(e)}function II(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const w=be(n,m);ym(e,oe(w))&&(f=Cc(i,f,w,g,l,u,d))}),s.foreach((m,g)=>{const w=be(n,m);ym(e,oe(w))||(f=Cc(i,f,w,g,l,u,d))}),f}function vm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Tc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;se(n)?g=s:g=new we(null).setTree(n,s);const w=e.serverCache.getNode();return g.children.inorderTraversal((v,I)=>{if(w.hasChild(v)){const F=e.serverCache.getNode().getImmediateChild(v),j=vm(i,F,I);m=wl(i,m,new me(v),j,l,u,d,f)}}),g.children.inorderTraversal((v,I)=>{const F=!e.serverCache.isCompleteForChild(v)&&I.value===null;if(!w.hasChild(v)&&!F){const j=e.serverCache.getNode().getImmediateChild(v),$=vm(i,j,I);m=wl(i,m,new me(v),$,l,u,d,f)}}),m}function CI(i,e,n,s,l,u,d){if(vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(se(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return wl(i,e,n,m.getNode().getChild(n),l,u,f,d);if(se(n)){let g=new we(null);return m.getNode().forEachChild(li,(w,v)=>{g=g.set(new me(w),v)}),Tc(i,e,n,g,l,u,f,d)}else return e}else{let g=new we(null);return s.foreach((w,v)=>{const I=be(n,w);m.isCompleteForPath(I)&&(g=g.set(w,m.getNode().getChild(I)))}),Tc(i,e,n,g,l,u,f,d)}}function TI(i,e,n,s,l){const u=e.serverCache,d=i_(e,u.getNode(),u.isFullyInitialized()||se(n),u.isFiltered());return d_(i,d,n,s,c_,l)}function kI(i,e,n,s,l,u){let d;if(vl(s,n)!=null)return e;{const f=new ed(s,e,l),m=e.eventCache.getNode();let g;if(se(n)||oe(n)===".priority"){let w;if(e.serverCache.isFullyInitialized())w=yl(s,Tr(e));else{const v=e.serverCache.getNode();z(v instanceof J,"serverChildren would be complete if leaf node"),w=Xc(s,v)}w=w,g=i.filter.updateFullNode(m,w,u)}else{const w=oe(n);let v=Zc(s,w,e.serverCache);v==null&&e.serverCache.isCompleteForChild(w)&&(v=m.getImmediateChild(w)),v!=null?g=i.filter.updateChild(m,w,v,_e(n),f,u):e.eventCache.getNode().hasChild(w)?g=i.filter.updateChild(m,w,J.EMPTY_NODE,_e(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=yl(s,Tr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||vl(s,ue())!=null,ms(e,g,d,i.filter.filtersNodes())}}/**
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
 */class NI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Kc(s.getIndex()),u=GS(s);this.processor_=vI(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(J.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(J.EMPTY_NODE,f.getNode(),null),w=new nr(m,d.isFullyInitialized(),l.filtersNodes()),v=new nr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=bl(v,w),this.eventGenerator_=new ZS(this.query_)}get query(){return this.query_}}function RI(i){return i.viewCache_.serverCache.getNode()}function PI(i){return _l(i.viewCache_)}function xI(i,e){const n=Tr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function wm(i){return i.eventRegistrations_.length===0}function AI(i,e){i.eventRegistrations_.push(e)}function Em(i,e,n){const s=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Sm(i,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(z(Tr(i.viewCache_),"We should always have a full cache before handling merges"),z(_l(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=EI(i.processor_,l,e,n,s);return wI(i.processor_,u.viewCache),z(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,h_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function OI(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(u,d)=>{s.push(pi(u,d))}),n.isFullyInitialized()&&s.push(t_(n.getNode())),h_(i,s,n.getNode(),e)}function h_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return eI(i.eventGenerator_,e,n,l)}/**
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
 */let El;class f_{constructor(){this.views=new Map}}function DI(i){z(!El,"__referenceConstructor has already been defined"),El=i}function LI(){return z(El,"Reference.ts has not been loaded"),El}function MI(i){return i.views.size===0}function td(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return z(u!=null,"SyncTree gave us an op for an invalid query."),Sm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Sm(d,e,n,s));return u}}function p_(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=yl(n,l?s:null),m=!1;f?m=!0:s instanceof J?(f=Xc(n,s),m=!1):(f=J.EMPTY_NODE,m=!1);const g=bl(new nr(f,m,!1),new nr(s,l,!1));return new NI(e,g)}return d}function bI(i,e,n,s,l,u){const d=p_(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),AI(d,n),OI(d,n)}function FI(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=rr(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(Em(g,n,s)),wm(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(Em(m,n,s)),wm(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!rr(i)&&u.push(new(LI())(e._repo,e._path)),{removed:u,events:d}}function m_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(i,e){let n=null;for(const s of i.views.values())n=n||xI(s,e);return n}function g_(i,e){if(e._queryParams.loadsAllData())return Ul(i);{const s=e._queryIdentifier;return i.views.get(s)}}function __(i,e){return g_(i,e)!=null}function rr(i){return Ul(i)!=null}function Ul(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Sl;function UI(i){z(!Sl,"__referenceConstructor has already been defined"),Sl=i}function zI(){return z(Sl,"Reference.ts has not been loaded"),Sl}let jI=1;class Im{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=mI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(i,e,n,s,l){return iI(i.pendingWriteTree_,e,n,s,l),l?Ms(i,new Cr(r_(),e,n)):[]}function Er(i,e,n=!1){const s=sI(i.pendingWriteTree_,e);if(oI(i.pendingWriteTree_,e)){let u=new we(null);return s.snap!=null?u=u.set(ue(),!0):gt(s.children,d=>{u=u.set(new me(d),!0)}),Ms(i,new gl(s.path,u,n))}else return[]}function Ls(i,e,n){return Ms(i,new Cr(Yc(),e,n))}function VI(i,e,n){const s=we.fromObject(n);return Ms(i,new ks(Yc(),e,s))}function WI(i,e){return Ms(i,new Ts(Yc(),e))}function BI(i,e,n){const s=rd(i,n);if(s){const l=id(s),u=l.path,d=l.queryId,f=nt(u,e),m=new Ts(Jc(d),f);return sd(i,u,m)}else return[]}function v_(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||__(d,e))){const m=FI(d,e,n,s);MI(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const w=g.findIndex(I=>I._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(u,(I,F)=>rr(F));if(w&&!v){const I=i.syncPointTree_.subtree(u);if(!I.isEmpty()){const F=qI(I);for(let j=0;j<F.length;++j){const $=F[j],q=$.query,pe=I_(i,$);i.listenProvider_.startListening(_s(q),Ns(i,q),pe.hashFn,pe.onComplete)}}}!v&&g.length>0&&!s&&(w?i.listenProvider_.stopListening(_s(e),null):g.forEach(I=>{const F=i.queryToTagMap.get(zl(I));i.listenProvider_.stopListening(_s(I),F)}))}KI(i,g)}return f}function w_(i,e,n,s){const l=rd(i,s);if(l!=null){const u=id(l),d=u.path,f=u.queryId,m=nt(d,e),g=new Cr(Jc(f),m,n);return sd(i,d,g)}else return[]}function HI(i,e,n,s){const l=rd(i,s);if(l){const u=id(l),d=u.path,f=u.queryId,m=nt(d,e),g=we.fromObject(n),w=new ks(Jc(f),m,g);return sd(i,d,w)}else return[]}function $I(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(I,F)=>{const j=nt(I,l);u=u||Xn(F,j),d=d||rr(F)});let f=i.syncPointTree_.get(l);f?(d=d||rr(f),u=u||Xn(f,ue())):(f=new f_,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=J.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((F,j)=>{const $=Xn(j,ue());$&&(u=u.updateImmediateChild(F,$))}));const g=__(f,e);if(!g&&!e._queryParams.loadsAllData()){const I=zl(e);z(!i.queryToTagMap.has(I),"View does not exist, but we have a tag");const F=QI();i.queryToTagMap.set(I,F),i.tagToQueryMap.set(F,I)}const w=Fl(i.pendingWriteTree_,l);let v=bI(f,e,n,w,u,m);if(!g&&!d&&!s){const I=g_(f,e);v=v.concat(YI(i,e,I))}return v}function nd(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=nt(d,e),g=Xn(f,m);if(g)return g});return l_(l,e,u,n,!0)}function GI(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(g,w)=>{const v=nt(g,n);s=s||Xn(w,v)});let l=i.syncPointTree_.get(n);l?s=s||Xn(l,ue()):(l=new f_,i.syncPointTree_=i.syncPointTree_.set(n,l));const u=s!=null,d=u?new nr(s,!0,!1):null,f=Fl(i.pendingWriteTree_,e._path),m=p_(l,e,f,u?d.getNode():J.EMPTY_NODE,u);return PI(m)}function Ms(i,e){return E_(e,i.syncPointTree_,null,Fl(i.pendingWriteTree_,ue()))}function E_(i,e,n,s){if(se(i.path))return S_(i,e,n,s);{const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];const d=oe(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,w=a_(s,d);u=u.concat(E_(f,m,g,w))}return l&&(u=u.concat(td(l,i,s,n))),u}}function S_(i,e,n,s){const l=e.get(ue());n==null&&l!=null&&(n=Xn(l,ue()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=a_(s,d),w=i.operationForChild(d);w&&(u=u.concat(S_(w,f,m,g)))}),l&&(u=u.concat(td(l,i,s,n))),u}function I_(i,e){const n=e.query,s=Ns(i,n);return{hashFn:()=>(RI(e)||J.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?BI(i,n._path,s):WI(i,n._path);{const u=$E(l,n);return v_(i,n,null,u)}}}}function Ns(i,e){const n=zl(e);return i.queryToTagMap.get(n)}function zl(i){return i._path.toString()+"$"+i._queryIdentifier}function rd(i,e){return i.tagToQueryMap.get(e)}function id(i){const e=i.indexOf("$");return z(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new me(i.substr(0,e))}}function sd(i,e,n){const s=i.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const l=Fl(i.pendingWriteTree_,e);return td(s,n,l,null)}function qI(i){return i.fold((e,n,s)=>{if(n&&rr(n))return[Ul(n)];{let l=[];return n&&(l=m_(n)),gt(s,(u,d)=>{l=l.concat(d)}),l}})}function _s(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(zI())(i._repo,i._path):i}function KI(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=zl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function QI(){return jI++}function YI(i,e,n){const s=e._path,l=Ns(i,e),u=I_(i,n),d=i.listenProvider_.startListening(_s(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)z(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,w,v)=>{if(!se(g)&&w&&rr(w))return[Ul(w).query];{let I=[];return w&&(I=I.concat(m_(w).map(F=>F.query))),gt(v,(F,j)=>{I=I.concat(j)}),I}});for(let g=0;g<m.length;++g){const w=m[g];i.listenProvider_.stopListening(_s(w),Ns(i,w))}}return d}/**
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
 */class od{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new od(n)}node(){return this.node_}}class ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new ld(this.syncTree_,n)}node(){return nd(this.syncTree_,this.path_)}}const JI=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Cm=function(i,e,n){if(!i||typeof i!="object")return i;if(z(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return XI(i[".sv"],e,n);if(typeof i[".sv"]=="object")return ZI(i[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},XI=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+i)}},ZI=function(i,e,n){i.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const l=e.node();if(z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},eC=function(i,e,n,s){return ad(e,new ld(n,i),s)},C_=function(i,e,n){return ad(i,new od(e),n)};function ad(i,e,n){const s=i.getPriority().val(),l=Cm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Cm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new je(f,We(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new je(l))),d.forEachChild(ke,(f,m)=>{const g=ad(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class ud{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function cd(i,e){let n=e instanceof me?e:new me(e),s=i,l=oe(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new ud(l,s,u),n=_e(n),l=oe(n)}return s}function Ei(i){return i.node.value}function T_(i,e){i.node.value=e,kc(i)}function k_(i){return i.node.childCount>0}function tC(i){return Ei(i)===void 0&&!k_(i)}function jl(i,e){gt(i.node.children,(n,s)=>{e(new ud(n,i,s))})}function N_(i,e,n,s){n&&e(i),jl(i,l=>{N_(l,e,!0)})}function nC(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bs(i){return new me(i.parent===null?i.name:bs(i.parent)+"/"+i.name)}function kc(i){i.parent!==null&&rC(i.parent,i.name,i)}function rC(i,e,n){const s=tC(n),l=Cn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,kc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,kc(i))}/**
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
 */const iC=/[\[\].#$\/\u0000-\u001F\u007F]/,sC=/[\[\].#$\u0000-\u001F\u007F]/,sc=10*1024*1024,R_=function(i){return typeof i=="string"&&i.length!==0&&!iC.test(i)},P_=function(i){return typeof i=="string"&&i.length!==0&&!sC.test(i)},oC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),P_(i)},lC=function(i,e,n,s){dd(zc(i,"value"),e,n)},dd=function(i,e,n){const s=n instanceof me?new CS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(i+"contains a function "+vr(s)+" with contents = "+e.toString());if(Cg(e))throw new Error(i+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>sc/3&&Dl(e)>sc)throw new Error(i+"contains a string greater than "+sc+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(gt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!R_(d)))throw new Error(i+" contains an invalid key ("+d+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TS(s,d),dd(i,f,s),kS(s)}),l&&u)throw new Error(i+' contains ".value" child '+vr(s)+" in addition to actual children.")}},x_=function(i,e,n,s){if(!P_(n))throw new Error(zc(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aC=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),x_(i,e,n)},uC=function(i,e){if(oe(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},cC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!oC(n))throw new Error(zc(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class dC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Kg(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function rn(i,e,n){A_(i,n),hC(i,s=>Bt(s,e)||Bt(e,s))}function hC(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(fC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function fC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();fs&&Ze("event: "+n.toString()),wi(s)}}}/**
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
 */const pC="repo_interrupt",mC=25;class gC{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new ud,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _C(i,e,n){if(i.stats_=Hc(i.repoInfo_),i.forceRestClient_||QE())i.server_=new pl(i.repoInfo_,(s,l,u,d)=>{Tm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>km(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new vn(i.repoInfo_,e,(s,l,u,d)=>{Tm(i,s,l,u,d)},s=>{km(i,s)},s=>{vC(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=eS(i.repoInfo_,()=>new XS(i.stats_,i.server_)),i.infoData_=new qS,i.infoSyncTree_=new Im({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=Ls(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),fd(i,"connected",!1),i.serverSyncTree_=new Im({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);rn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function yC(i){const n=i.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hd(i){return JI({timestamp:yC(i)})}function Tm(i,e,n,s,l){i.dataUpdateCount++;const u=new me(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=ul(n,g=>We(g));d=HI(i.serverSyncTree_,u,m,l)}else{const m=We(n);d=w_(i.serverSyncTree_,u,m,l)}else if(s){const m=ul(n,g=>We(g));d=VI(i.serverSyncTree_,u,m)}else{const m=We(n);d=Ls(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=Wl(i,u)),rn(i.eventQueue_,f,d)}function km(i,e){fd(i,"connected",e),e===!1&&SC(i)}function vC(i,e){gt(e,(n,s)=>{fd(i,n,s)})}function fd(i,e,n){const s=new me("/.info/"+e),l=We(n);i.infoData_.updateSnapshot(s,l);const u=Ls(i.infoSyncTree_,s,l);rn(i.eventQueue_,s,u)}function O_(i){return i.nextWriteId_++}function wC(i,e,n){const s=GI(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());$I(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=Ls(i.serverSyncTree_,e._path,u);else{const f=Ns(i.serverSyncTree_,e);d=w_(i.serverSyncTree_,e._path,u,f)}return rn(i.eventQueue_,e._path,d),v_(i.serverSyncTree_,e,n,null,!0),u},l=>(Vl(i,"get for query "+Me(e)+" failed: "+l),Promise.reject(new Error(l))))}function EC(i,e,n,s,l){Vl(i,"set",{path:e.toString(),value:n,priority:s});const u=hd(i),d=We(n,s),f=nd(i.serverSyncTree_,e),m=C_(d,f,u),g=O_(i),w=y_(i.serverSyncTree_,e,m,g,!0);A_(i.eventQueue_,w),i.server_.put(e.toString(),d.val(!0),(I,F)=>{const j=I==="ok";j||mt("set at "+e+" failed: "+I);const $=Er(i.serverSyncTree_,g,!j);rn(i.eventQueue_,e,$),CC(i,l,I,F)});const v=F_(i,e);Wl(i,v),rn(i.eventQueue_,v,[])}function SC(i){Vl(i,"onDisconnectEvents");const e=hd(i),n=ml();Ec(i.onDisconnect_,ue(),(l,u)=>{const d=eC(l,u,i.serverSyncTree_,e);n_(n,l,d)});let s=[];Ec(n,ue(),(l,u)=>{s=s.concat(Ls(i.serverSyncTree_,l,u));const d=F_(i,l);Wl(i,d)}),i.onDisconnect_=ml(),rn(i.eventQueue_,ue(),s)}function IC(i){i.persistentConnection_&&i.persistentConnection_.interrupt(pC)}function Vl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Ze(n,...e)}function CC(i,e,n,s){e&&wi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function D_(i,e,n){return nd(i.serverSyncTree_,e,n)||J.EMPTY_NODE}function pd(i,e=i.transactionQueueTree_){if(e||Bl(i,e),Ei(e)){const n=M_(i,e);z(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&TC(i,bs(e),n)}else k_(e)&&jl(e,n=>{pd(i,n)})}function TC(i,e,n){const s=n.map(g=>g.currentWriteId),l=D_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const w=n[g];z(w.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),w.status=1,w.retryCount++;const v=nt(e,w.path);u=u.updateChild(v,w.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{Vl(i,"transaction put response",{path:m.toString(),status:g});let w=[];if(g==="ok"){const v=[];for(let I=0;I<n.length;I++)n[I].status=2,w=w.concat(Er(i.serverSyncTree_,n[I].currentWriteId)),n[I].onComplete&&v.push(()=>n[I].onComplete(null,!0,n[I].currentOutputSnapshotResolved)),n[I].unwatcher();Bl(i,cd(i.transactionQueueTree_,e)),pd(i,i.transactionQueueTree_),rn(i.eventQueue_,e,w);for(let I=0;I<v.length;I++)wi(v[I])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{mt("transaction at "+m.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Wl(i,e)}},d)}function Wl(i,e){const n=L_(i,e),s=bs(n),l=M_(i,n);return kC(i,l,s),s}function kC(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=nt(n,m.path);let w=!1,v;if(z(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)w=!0,v=m.abortReason,l=l.concat(Er(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=mC)w=!0,v="maxretry",l=l.concat(Er(i.serverSyncTree_,m.currentWriteId,!0));else{const I=D_(i,m.path,d);m.currentInputSnapshot=I;const F=e[f].update(I.val());if(F!==void 0){dd("transaction failed: Data returned ",F,m.path);let j=We(F);typeof F=="object"&&F!=null&&Cn(F,".priority")||(j=j.updatePriority(I.getPriority()));const q=m.currentWriteId,pe=hd(i),Oe=C_(j,I,pe);m.currentOutputSnapshotRaw=j,m.currentOutputSnapshotResolved=Oe,m.currentWriteId=O_(i),d.splice(d.indexOf(q),1),l=l.concat(y_(i.serverSyncTree_,m.path,Oe,m.currentWriteId,m.applyLocally)),l=l.concat(Er(i.serverSyncTree_,q,!0))}else w=!0,v="nodata",l=l.concat(Er(i.serverSyncTree_,m.currentWriteId,!0))}rn(i.eventQueue_,n,l),l=[],w&&(e[f].status=2,(function(I){setTimeout(I,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Bl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)wi(s[f]);pd(i,i.transactionQueueTree_)}function L_(i,e){let n,s=i.transactionQueueTree_;for(n=oe(e);n!==null&&Ei(s)===void 0;)s=cd(s,n),e=_e(e),n=oe(e);return s}function M_(i,e){const n=[];return b_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function b_(i,e,n){const s=Ei(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);jl(e,l=>{b_(i,l,n)})}function Bl(i,e){const n=Ei(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,T_(e,n.length>0?n:void 0)}jl(e,s=>{Bl(i,s)})}function F_(i,e){const n=bs(L_(i,e)),s=cd(i.transactionQueueTree_,e);return nC(s,l=>{oc(i,l)}),oc(i,s),N_(s,l=>{oc(i,l)}),n}function oc(i,e){const n=Ei(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(z(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(z(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Er(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?T_(e,void 0):n.length=u+1,rn(i.eventQueue_,bs(e),l);for(let d=0;d<s.length;d++)wi(s[d])}}/**
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
 */function NC(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function RC(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Nm=function(i,e){const n=PC(i),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jE();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new me(n.pathString)}},PC=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let w=i.indexOf("/");w===-1&&(w=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(w,v)),w<v&&(l=NC(i.substring(w,v)));const I=RC(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const F=e.slice(0,g);if(F.toLowerCase()==="localhost")n="localhost";else if(F.split(".").length<=2)n=F;else{const j=e.indexOf(".");s=e.substring(0,j).toLowerCase(),n=e.substring(j+1),u=s}"ns"in I&&(u=I.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class md{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return se(this._path)?null:$g(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=hm(this._queryParams),n=Wc(e);return n==="{}"?"default":n}get _queryObject(){return hm(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof md))return!1;const n=this._repo===e._repo,s=Kg(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+IS(this._path)}}class Tn extends md{constructor(e,n){super(e,n,new Qc,!1)}get parent(){const e=qg(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=Nc(this.ref,e);return new Rs(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Rs(l,Nc(this.ref,s),ke)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rm(i,e){return i=st(i),i._checkNotDeleted("ref"),e!==void 0?Nc(i._root,e):i._root}function Nc(i,e){return i=st(i),oe(i._path)===null?aC("child","path",e):x_("child","path",e),new Tn(i._repo,be(i._path,e))}function DC(i,e){i=st(i),uC("set",i._path),lC("set",e,i._path);const n=new Ol;return EC(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function LC(i){i=st(i);const e=new OC(()=>{}),n=new gd(e);return wC(i._repo,i,n).then(s=>new Rs(s,new Tn(i._repo,i._path),i._queryParams.getIndex()))}class gd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xC("value",this,new Rs(e.snapshotNode,new Tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new AC(this,e,n):null}matches(e){return e instanceof gd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}DI(Tn);UI(Tn);/**
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
 */const MC="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let bC=!1;function FC(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=xs(u);i.repoInfo_=new bg(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function UC(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Nm(u,l),f=d.repoInfo,m;typeof process<"u"&&Kp&&(m=Kp[MC]),m?(u=`http://${m}?ns=${f.namespace}`,d=Nm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new JE(i.name,i.options,e);cC("Invalid Firebase Database URL",d),se(d.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const w=jC(f,i,g,new YE(i,n));return new VC(w,i)}function zC(i,e){const n=Rc[e];(!n||n[i.key]!==i)&&En(`Database ${e}(${i.repoInfo_}) has already been deleted.`),IC(i),delete n[i.key]}function jC(i,e,n,s){let l=Rc[e.name];l||(l={},Rc[e.name]=l);let u=l[i.toURLString()];return u&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new gC(i,bC,n,s),l[i.toURLString()]=u,u}class VC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_C(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function WC(i=Vc(),e){const n=xr(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=u0("database");s&&BC(n,...s)}return n}function BC(i,e,n,s={}){i=st(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&er(s,u.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new nl(nl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:c0(s.mockUserToken,i.app.options.projectId);d=new nl(f)}xs(e)&&pg(e),FC(u,l,s,d)}/**
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
 */function HC(i){LE(yi),nn(new qt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return UC(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Ot(Qp,Yp,i),Ot(Qp,Yp,"esm2020")}/**
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
 */vn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};vn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};HC();var $C="firebase",GC="12.17.0";/**
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
 */const JC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kr=new Pr(QC,YC,JC);function W_(i){return i instanceof sn&&i.code.includes("request-failed")}/**
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
 */function B_({projectId:i}){return`${qC}/projects/${i}/installations`}function H_(i){return{token:i.token,requestStatus:2,expiresIn:ZC(i.expiresIn),creationTime:Date.now()}}async function $_(i,e){const s=(await e.json()).error;return kr.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function G_({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function XC(i,{refreshToken:e}){const n=G_(i);return n.append("Authorization",eT(e)),n}async function q_(i){const e=await i();return e.status>=500&&e.status<600?i():e}function ZC(i){return Number(i.replace("s","000"))}function eT(i){return`${V_} ${i}`}/**
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
 */async function tT({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=B_(i),l=G_(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={fid:n,authVersion:V_,appId:i.appId,sdkVersion:j_},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:H_(g.authToken)}}else throw await $_("Create Installation",m)}/**
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
 */function K_(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function nT(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rT=/^[cdef][\w-]{21}$/,Pc="";function iT(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=sT(i);return rT.test(n)?n:Pc}catch{return Pc}}function sT(i){return nT(i).substr(0,22)}/**
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
 */function Hl(i){return`${i.appName}!${i.appId}`}/**
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
 */const Q_=new Map;function Y_(i,e){const n=Hl(i);J_(n,e),oT(n,e)}function J_(i,e){const n=Q_.get(i);if(n)for(const s of n)s(e)}function oT(i,e){const n=lT();n&&n.postMessage({key:i,fid:e}),aT()}let Sr=null;function lT(){return!Sr&&"BroadcastChannel"in self&&(Sr=new BroadcastChannel("[Firebase] FID Change"),Sr.onmessage=i=>{J_(i.data.key,i.data.fid)}),Sr}function aT(){Q_.size===0&&Sr&&(Sr.close(),Sr=null)}/**
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
 */const uT="firebase-installations-database",cT=1,Nr="firebase-installations-store";let lc=null;function yd(){return lc||(lc=_g(uT,cT,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Nr)}}})),lc}async function Il(i,e){const n=Hl(i),l=(await yd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n);return await u.put(e,n),await l.done,(!d||d.fid!==e.fid)&&Y_(i,e.fid),e}async function X_(i){const e=Hl(i),s=(await yd()).transaction(Nr,"readwrite");await s.objectStore(Nr).delete(e),await s.done}async function $l(i,e){const n=Hl(i),l=(await yd()).transaction(Nr,"readwrite"),u=l.objectStore(Nr),d=await u.get(n),f=e(d);return f===void 0?await u.delete(n):await u.put(f,n),await l.done,f&&(!d||d.fid!==f.fid)&&Y_(i,f.fid),f}/**
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
 */async function vd(i){let e;const n=await $l(i.appConfig,s=>{const l=dT(s),u=hT(i,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Pc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dT(i){const e=i||{fid:iT(),registrationStatus:0};return Z_(e)}function hT(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=fT(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pT(i)}:{installationEntry:e}}async function fT(i,e){try{const n=await tT(i,e);return Il(i.appConfig,n)}catch(n){throw W_(n)&&n.customData.serverCode===409?await X_(i.appConfig):await Il(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pT(i){let e=await Pm(i.appConfig);for(;e.registrationStatus===1;)await K_(100),e=await Pm(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await vd(i);return s||n}return e}function Pm(i){return $l(i,e=>{if(!e)throw kr.create("installation-not-found");return Z_(e)})}function Z_(i){return mT(i)?{fid:i.fid,registrationStatus:0}:i}function mT(i){return i.registrationStatus===1&&i.registrationTime+z_<Date.now()}/**
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
 */async function gT({appConfig:i,heartbeatServiceProvider:e},n){const s=_T(i,n),l=XC(i,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const d={installation:{sdkVersion:j_,appId:i.appId}},f={method:"POST",headers:l,body:JSON.stringify(d)},m=await q_(()=>fetch(s,f));if(m.ok){const g=await m.json();return H_(g)}else throw await $_("Generate Auth Token",m)}function _T(i,{fid:e}){return`${B_(i)}/${e}/authTokens:generate`}/**
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
 */async function wd(i,e=!1){let n;const s=await $l(i.appConfig,u=>{if(!ey(u))throw kr.create("not-registered");const d=u.authToken;if(!e&&wT(d))return u;if(d.requestStatus===1)return n=yT(i,e),u;{if(!navigator.onLine)throw kr.create("app-offline");const f=ST(u);return n=vT(i,f),f}});return n?await n:s.authToken}async function yT(i,e){let n=await xm(i.appConfig);for(;n.authToken.requestStatus===1;)await K_(100),n=await xm(i.appConfig);const s=n.authToken;return s.requestStatus===0?wd(i,e):s}function xm(i){return $l(i,e=>{if(!ey(e))throw kr.create("not-registered");const n=e.authToken;return IT(n)?{...e,authToken:{requestStatus:0}}:e})}async function vT(i,e){try{const n=await gT(i,e),s={...e,authToken:n};return await Il(i.appConfig,s),n}catch(n){if(W_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X_(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Il(i.appConfig,s)}throw n}}function ey(i){return i!==void 0&&i.registrationStatus===2}function wT(i){return i.requestStatus===2&&!ET(i)}function ET(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+KC}function ST(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function IT(i){return i.requestStatus===1&&i.requestTime+z_<Date.now()}/**
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
 */async function CT(i){const e=i,{installationEntry:n,registrationPromise:s}=await vd(e);return s?s.catch(console.error):wd(e).catch(console.error),n.fid}/**
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
 */async function TT(i,e=!1){const n=i;return await kT(n),(await wd(n,e)).token}async function kT(i){const{registrationPromise:e}=await vd(i);e&&await e}/**
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
 */function NT(i){if(!i||!i.options)throw ac("App Configuration");if(!i.name)throw ac("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw ac(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function ac(i){return kr.create("missing-app-config-values",{valueName:i})}/**
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
 */const ty="installations",RT="installations-internal",PT=i=>{const e=i.getProvider("app").getImmediate(),n=NT(e),s=xr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xT=i=>{const e=i.getProvider("app").getImmediate(),n=xr(e,ty).getImmediate();return{getId:()=>CT(n),getToken:l=>TT(n,l)}};function AT(){nn(new qt(ty,PT,"PUBLIC")),nn(new qt(RT,xT,"PRIVATE"))}/**
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
 */function FT(i){if(!i.startsWith(Ed)){const e=It.create("invalid-gtag-resource",{gtagURL:i});return rt.warn(e.message),""}return i}function ny(i){return Promise.all(i.map(e=>e.catch(n=>n)))}function UT(i,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,e)),n}function zT(i,e){const n=UT("firebase-js-sdk-policy",{createScriptURL:FT}),s=document.createElement("script"),l=`${Ed}?l=${i}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function jT(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function VT(i,e,n,s,l,u){const d=s[l];try{if(d)await e[d];else{const m=(await ny(n)).find(g=>g.measurementId===l);m&&await e[m.appId]}}catch(f){rt.error(f)}i("config",l,u)}async function WT(i,e,n,s,l){try{let u=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const f=await ny(n);for(const m of d){const g=f.find(v=>v.measurementId===m),w=g&&e[g.appId];if(w)u.push(w);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,l||{})}catch(u){rt.error(u)}}function BT(i,e,n,s){async function l(u,...d){try{if(u==="event"){const[f,m]=d;await WT(i,e,n,f,m)}else if(u==="config"){const[f,m]=d;await VT(i,e,n,s,f,m)}else if(u==="consent"){const[f,m]=d;i("consent",f,m)}else if(u==="get"){const[f,m,g]=d;i("get",f,m,g)}else if(u==="set"){const[f]=d;i("set",f)}else i(u,...d)}catch(f){rt.error(f)}}return l}function HT(i,e,n,s,l){let u=function(...d){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=BT(u,i,e,n),{gtagCore:u,wrappedGtag:window[l]}}function $T(i){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ed)&&n.src.includes(i))return n;return null}/**
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
 */const GT=30,qT=1e3;class KT{constructor(e={},n=qT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ry=new KT;function QT(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function YT(i){var d;const{appId:e,apiKey:n}=i,s={method:"GET",headers:QT(n)},l=MT.replace("{app-id}",e),u=await fetch(l,s);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();(d=m.error)!=null&&d.message&&(f=m.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function JT(i,e=ry,n){const{appId:s,apiKey:l,measurementId:u}=i.options;if(!s)throw It.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw It.create("no-api-key")}const d=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new ek;return setTimeout(async()=>{f.abort()},LT),iy({appId:s,apiKey:l,measurementId:u},d,f,e)}async function iy(i,{throttleEndTimeMillis:e,backoffCount:n},s,l=ry){var f;const{appId:u,measurementId:d}=i;try{await XT(s,e)}catch(m){if(d)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw m}try{const m=await YT(i);return l.deleteThrottleMetadata(u),m}catch(m){const g=m;if(!ZT(g)){if(l.deleteThrottleMetadata(u),d)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:d};throw m}const w=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?zp(n,l.intervalMillis,GT):zp(n,l.intervalMillis),v={throttleEndTimeMillis:Date.now()+w,backoffCount:n+1};return l.setThrottleMetadata(u,v),rt.debug(`Calling attemptFetch again in ${w} millis`),iy(i,v,s,l)}}function XT(i,e){return new Promise((n,s)=>{const l=Math.max(e-Date.now(),0),u=setTimeout(n,l);i.addEventListener(()=>{clearTimeout(u),s(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZT(i){if(!(i instanceof sn)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class ek{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tk(i,e,n,s,l){if(l&&l.global){i("event",n,s);return}else{const u=await e,d={...s,send_to:u};i("event",n,d)}}async function nk(i,e,n,s){if(s&&s.global){const l={};for(const u of Object.keys(n))l[`user_properties.${u}`]=n[u];return i("set",l),Promise.resolve()}else{const l=await e;i("config",l,{update:!0,user_properties:n})}}/**
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
 */async function rk(){if(Fc())try{await Uc()}catch(i){return rt.warn(It.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return rt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ik(i,e,n,s,l,u,d){const f=JT(i);f.then(I=>{n[I.measurementId]=I.appId,i.options.measurementId&&I.measurementId!==i.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>rt.error(I)),e.push(f);const m=rk().then(I=>{if(I)return s.getId()}),[g,w]=await Promise.all([f,m]);$T(u)||zT(u,g.measurementId),l("js",new Date);const v=(d==null?void 0:d.config)??{};return v[DT]="firebase",v.update=!0,w!=null&&(v[OT]=w),l("config",g.measurementId,v),g.measurementId}/**
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
 */class sk{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Am=[];const Om={};let uc="dataLayer",ok="gtag",Dm,Sd,Lm=!1;function lk(){const i=[];if(bc()&&i.push("This is a browser extension environment."),hg()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function ak(i,e,n){lk();const s=i.options.appId;if(!s)throw It.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(ai[s]!=null)throw It.create("already-exists",{id:s});if(!Lm){jT(uc);const{wrappedGtag:u,gtagCore:d}=HT(ai,Am,Om,uc,ok);Sd=u,Dm=d,Lm=!0}return ai[s]=ik(i,Am,Om,e,Dm,uc,n),new sk(i)}/**
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
 */function uk(i=Vc()){i=st(i);const e=xr(i,Cl);return e.isInitialized()?e.getImmediate():ck(i)}function ck(i,e={}){const n=xr(i,Cl);if(n.isInitialized()){const l=n.getImmediate();if(er(e,n.getOptions()))return l;throw It.create("already-initialized")}return n.initialize({options:e})}async function dk(){if(bc()||!hg()||!Fc())return!1;try{return await Uc()}catch{return!1}}function hk(i,e,n){i=st(i),nk(Sd,ai[i.app.options.appId],e,n).catch(s=>rt.error(s))}function fk(i,e,n,s){i=st(i),tk(Sd,ai[i.app.options.appId],e,n,s).catch(l=>rt.error(l))}const Mm="@firebase/analytics",bm="0.10.23";/**
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
 */function pk(){nn(new qt(Cl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return ak(s,l,n)},"PUBLIC")),nn(new qt("analytics-internal",i,"PRIVATE")),Ot(Mm,bm),Ot(Mm,bm,"esm2020");function i(e){try{const n=e.getProvider(Cl).getImmediate();return{logEvent:(s,l,u)=>fk(n,s,l,u),setUserProperties:(s,l)=>hk(n,s,l)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}pk();function sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=sy,oy=new Pr("auth","Firebase",sy());/**
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
 */const Tl=new Ll("@firebase/auth");function ly(i,...e){Tl.logLevel<=fe.WARN&&Tl.warn(`Auth (${yi}): ${i}`,...e)}function rl(i,...e){Tl.logLevel<=fe.ERROR&&Tl.error(`Auth (${yi}): ${i}`,...e)}/**
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
 */function Sn(i,...e){throw Id(i,...e)}function en(i,...e){return Id(i,...e)}function ay(i,e,n){const s={...mk(),[e]:n};return new Pr("auth","Firebase",s).create(e,{appName:i.name})}function Zn(i){return ay(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return oy.create(i,...e)}function Z(i,e,...n){if(!i)throw Id(e,...n)}function _n(i){const e="INTERNAL ASSERTION FAILED: "+i;throw rl(e),new Error(e)}function In(i,e){i||_n(e)}/**
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
 */function xc(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function gk(){return Fm()==="http:"||Fm()==="https:"}function Fm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gk()||bc()||"connection"in navigator)?navigator.onLine:!0}function yk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */function Cd(i,e){In(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ek=new Fs(3e4,6e4);function Gl(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Si(i,e,n,s,l={}){return cy(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=_i({...d,key:i.config.apiKey}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...u};return d0()||(g.referrerPolicy="strict-origin-when-cross-origin"),i.emulatorConfig&&xs(i.emulatorConfig.host)&&(g.credentials="include"),uy.fetch()(await hy(i,i.config.apiHost,n,f),g)})}async function cy(i,e,n){i._canInitEmulator=!1;const s={...vk,...e};try{const l=new Sk(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw el(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw el(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw el(i,"user-disabled",d);const w=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ay(i,w,g);Sn(i,w)}}catch(l){if(l instanceof sn)throw l;Sn(i,"network-request-failed",{message:String(l)})}}async function dy(i,e,n,s,l={}){const u=await Si(i,e,n,s,l);return"mfaPendingCredential"in u&&Sn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function hy(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Cd(i.config,l):`${i.config.apiScheme}://${l}`;return wk.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class Sk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),Ek.get())})}}function el(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=en(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function Ik(i,e){return Si(i,"POST","/v1/accounts:delete",e)}async function kl(i,e){return Si(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ys(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(i,e=!1){const n=st(i),s=await n.getIdToken(e),l=Td(s);Z(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ys(cc(l.auth_time)),issuedAtTime:ys(cc(l.iat)),expirationTime:ys(cc(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cc(i){return Number(i)*1e3}function Td(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const l=al(n);return l?JSON.parse(l):(rl("Failed to decode base64 JWT payload"),null)}catch(l){return rl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Um(i){const e=Td(i);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ps(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&Tk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Tk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */async function Nl(i){var v;const e=i.auth,n=await i.getIdToken(),s=await Ps(i,kl(e,{idToken:n}));Z(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];i._notifyReloadListener(l);const u=(v=l.providerUserInfo)!=null&&v.length?fy(l.providerUserInfo):[],d=Rk(i.providerData,u),f=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,w={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(i,w)}async function Nk(i){const e=st(i);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rk(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function fy(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Pk(i,e){const n=await cy(i,{},async()=>{const s=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await hy(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return i.emulatorConfig&&xs(i.emulatorConfig.host)&&(m.credentials="include"),uy.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xk(i,e){return Si(i,"POST","/v2/accounts:revokeToken",Gl(i,e))}/**
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
 */function $n(i,e){Z(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ac(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Ps(this,Ik(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,w=n.lastLoginAt??void 0,{uid:v,emailVerified:I,isAnonymous:F,providerData:j,stsTokenManager:$}=n;Z(v&&$,e,"internal-error");const q=ui.fromJSON(this.name,$);Z(typeof v=="string",e,"internal-error"),$n(s,e.name),$n(l,e.name),Z(typeof I=="boolean",e,"internal-error"),Z(typeof F=="boolean",e,"internal-error"),$n(u,e.name),$n(d,e.name),$n(f,e.name),$n(m,e.name),$n(g,e.name),$n(w,e.name);const pe=new $t({uid:v,auth:e,email:l,emailVerified:I,displayName:s,isAnonymous:F,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:q,createdAt:g,lastLoginAt:w});return j&&Array.isArray(j)&&(pe.providerData=j.map(Oe=>({...Oe}))),m&&(pe._redirectEventId=m),pe}static async _fromIdTokenResponse(e,n,s=!1){const l=new ui;l.updateFromServerResponse(n);const u=new $t({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Nl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Z(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?fy(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ui;f.updateFromIdToken(s);const m=new $t({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Ac(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const zm=new Map;function yn(i){In(i instanceof Function,"Expected a class definition");let e=zm.get(i);return e?(In(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,zm.set(i,e),e)}/**
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
 */function il(i,e,n){return`firebase:${i}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=il(this.userKey,l.apiKey,u),this.fullPersistenceKey=il("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kl(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(yn(jm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||yn(jm);const d=il(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const w=await g._get(d);if(w){let v;if(typeof w=="string"){const I=await kl(e,{idToken:w}).catch(()=>{});if(!I)break;v=await $t._fromGetAccountInfoResponse(e,I,w)}else v=$t._fromJSON(e,w);g!==u&&(f=v),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ci(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ci(u,e,s))}}/**
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
 */function Vm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(my(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wy(e))return"Blackberry";if(Ey(e))return"Webos";if(gy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function my(i=it()){return/firefox\//i.test(i)}function gy(i=it()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(i=it()){return/crios\//i.test(i)}function yy(i=it()){return/iemobile/i.test(i)}function vy(i=it()){return/android/i.test(i)}function wy(i=it()){return/blackberry/i.test(i)}function Ey(i=it()){return/webos/i.test(i)}function kd(i=it()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Ak(i=it()){var e;return kd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function Ok(){return h0()&&document.documentMode===10}function Sy(i=it()){return kd(i)||vy(i)||Ey(i)||wy(i)||/windows phone/i.test(i)||yy(i)}/**
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
 */function Iy(i,e=[]){let n;switch(i){case"Browser":n=Vm(it());break;case"Worker":n=`${Vm(it())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */async function Lk(i,e={}){return Si(i,"GET","/v2/passwordPolicy",Gl(i,e))}/**
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
 */class Fk{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new Dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kl(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Vt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Zn(this));const n=e?st(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lk(this),n=new bk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ly(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ql(i){return st(i)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uk(i){Nd=i}function zk(i){return Nd.loadJS(i)}function jk(){return Nd.gapiScript}function Vk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Wk(i,e){const n=xr(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(er(u,e??{}))return l;Sn(l,"already-initialized")}return n.initialize({options:e})}function Bk(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Hk(i,e,n){const s=ql(i);Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Cy(e),{host:d,port:f}=$k(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},w=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Z(er(g,s.config.emulator)&&er(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,xs(d)?pg(`${u}//${d}${m}`):Gk()}function Cy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function $k(i){const e=Cy(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Bm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Bm(d)}}}function Bm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Gk(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */async function di(i,e){return dy(i,"POST","/v1/accounts:signInWithIdp",Gl(i,e))}/**
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
 */async function Kk(i,e){return dy(i,"POST","/v1/accounts:signUp",Gl(i,e))}/**
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
 */class ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await $t._fromIdTokenResponse(e,s,l),d=Hm(s);return new ir({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Hm(s);return new ir({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Hm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function Qk(i){var l;if(Vt(i.app))return Promise.reject(Zn(i));const e=ql(i);if(await e._initializationPromise,(l=e.currentUser)!=null&&l.isAnonymous)return new ir({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Kk(e,{returnSecureToken:!0}),s=await ir._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Rl extends sn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Rl(e,n,s,l)}}function Ny(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(i,u,e,s):u})}async function Yk(i,e,n=!1){const s=await Ps(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return ir._forOperation(i,"link",s)}/**
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
 */async function Jk(i,e,n=!1){const{auth:s}=i;if(Vt(s.app))return Promise.reject(Zn(s));const l="reauthenticate";try{const u=await Ps(i,Ny(s,l,e,i),n);Z(u.idToken,s,"internal-error");const d=Td(u.idToken);Z(d,s,"internal-error");const{sub:f}=d;return Z(i.uid===f,s,"user-mismatch"),ir._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),u}}/**
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
 */async function Xk(i,e,n=!1){if(Vt(i.app))return Promise.reject(Zn(i));const s="signIn",l=await Ny(i,s,e),u=await ir._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function Zk(i,e,n,s){return st(i).onIdTokenChanged(e,n,s)}function eN(i,e,n){return st(i).beforeAuthStateChanged(e,n)}const Pl="__sak";/**
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
 */function iN(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */function Rd(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */function tn(){return window}function oN(i){tn().location.href=i}/**
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
 */function Oy(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function lN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function uN(){return Oy()?self:null}/**
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
 */const Dy="firebaseLocalStorageDb",cN=1,xl="firebaseLocalStorage",Ly="fbase_key";class zs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ql(i,e){return i.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function dN(){const i=indexedDB.deleteDatabase(Dy);return new zs(i).toPromise()}function My(){const i=indexedDB.open(Dy,cN);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(xl,{keyPath:Ly})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(xl)?e(s):(s.close(),await dN(),e(await My()))})})}async function $m(i,e,n){const s=Ql(i,!0).put({[Ly]:e,value:n});return new zs(s).toPromise()}async function hN(i,e){const n=Ql(i,!1).get(e),s=await new zs(n).toPromise();return s===void 0?null:s.value}function Gm(i,e){const n=Ql(i,!0).delete(e);return new zs(n).toPromise()}const fN=800,pN=3;class by{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.addEventListener=="function"&&document.addEventListener("visibilitychange",this.onVisibilityChange)}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow)),typeof document<"u"&&typeof document.removeEventListener=="function"&&document.removeEventListener("visibilitychange",this.onVisibilityChange)}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isHiding=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isHiding=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isHiding&&(this.isHiding=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this.onVisibilityChange=()=>{typeof document<"u"&&(document.visibilityState==="hidden"?this.onPageHide():document.visibilityState==="visible"&&this.onPageShow())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isHiding)throw new Error("Database is closing/hidden");return this.dbPromise?this.dbPromise:(this.dbPromise=My(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(this.isHiding||n++>pN)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(uN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await lN(),!this.activeServiceWorker)return;this.sender=new sN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await $m(e,Pl,"1"),await Gm(e,Pl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$m(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isHiding)return[];try{const e=await this._withRetries(l=>{const u=Ql(l,!1).getAll();return new zs(u).toPromise()});if(this.isHiding)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}catch(e){return this.isHiding||ly(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}by.type="LOCAL";const mN=by;new Fs(3e4,6e4);/**
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
 */function gN(i,e){return e?yn(e):(Z(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Pd extends Ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _N(i){return Xk(i.auth,new Pd(i),i.bypassAuthState)}function yN(i){const{auth:e,user:n}=i;return Z(n,e,"internal-error"),Jk(n,new Pd(i),i.bypassAuthState)}async function vN(i){const{auth:e,user:n}=i;return Z(n,e,"internal-error"),Yk(n,new Pd(i),i.bypassAuthState)}/**
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
 */const EN="pendingRedirect",sl=new Map;class SN extends Fy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const s=await IN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IN(i,e){const n=kN(e),s=TN(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function CN(i,e){sl.set(i._key(),e)}function TN(i){return yn(i._redirectPersistence)}function kN(i){return il(EN,i.config.apiKey,i.name)}async function NN(i,e,n=!1){if(Vt(i.app))return Promise.reject(Zn(i));const s=ql(i),l=gN(s,e),d=await new SN(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const RN=600*1e3;class PN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Uy(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RN&&this.cachedEventUids.clear(),this.cachedEventUids.has(qm(e))}saveEventToCache(e){this.cachedEventUids.add(qm(e)),this.lastProcessedEventTime=Date.now()}}function qm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Uy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uy(i);default:return!1}}/**
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
 */async function AN(i,e={}){return Si(i,"GET","/v1/projects",e)}/**
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
 */const ON=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DN=/^https?/;async function LN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await AN(i);for(const n of e)try{if(MN(n))return}catch{}Sn(i,"unauthorized-domain")}function MN(i){const e=xc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!DN.test(n))return!1;if(ON.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const bN=new Fs(3e4,6e4);function Km(){const i=tn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function FN(i){return new Promise((e,n)=>{var l,u,d;function s(){Km(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Km(),n(en(i,"network-request-failed"))},timeout:bN.get()})}if((u=(l=tn().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=tn().gapi)!=null&&d.load)s();else{const f=Vk("iframefcb");return tn()[f]=()=>{gapi.load?s():n(en(i,"network-request-failed"))},zk(`${jk()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw ol=null,e})}let ol=null;function UN(i){return ol=ol||FN(i),ol}/**
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
 */const zN=new Fs(5e3,15e3),jN="__/auth/iframe",VN="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(i){const e=i.config;Z(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Cd(e,VN):`https://${i.config.authDomain}/${jN}`,s={apiKey:e.apiKey,appName:i.name,v:yi},l=BN.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${_i(s).slice(1)}`}async function $N(i){const e=await UN(i),n=tn().gapi;return Z(n,i,"internal-error"),e.open({where:document.body,url:HN(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=en(i,"network-request-failed"),f=tn().setTimeout(()=>{u(d)},zN.get());function m(){tn().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
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
 */const GN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,KN=600,QN="_blank",YN="http://localhost";class Qm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JN(i,e,n,s=qN,l=KN){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...GN,width:s.toString(),height:l.toString(),top:u,left:d},g=it().toLowerCase();n&&(f=_y(g)?QN:n),my(g)&&(e=e||YN,m.scrollbars="yes");const w=Object.entries(m).reduce((I,[F,j])=>`${I}${F}=${j},`,"");if(Ak(g)&&f!=="_self")return XN(e||"",f),new Qm(null);const v=window.open(e||"",f,w);Z(v,i,"popup-blocked");try{v.focus()}catch{}return new Qm(v)}function XN(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ZN="__/auth/handler",e1="emulator/auth/handler",t1=encodeURIComponent("fac");async function Ym(i,e,n,s,l,u){Z(i.config.authDomain,i,"auth-domain-config-required"),Z(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:yi,eventId:l};if(e instanceof ky){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",hc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,v]of Object.entries({}))d[w]=v}if(e instanceof Us){const w=e.getScopes().filter(v=>v!=="");w.length>0&&(d.scopes=w.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const m=await i._getAppCheckToken(),g=m?`#${t1}=${encodeURIComponent(m)}`:"";return`${n1(i)}?${_i(f).slice(1)}${g}`}function n1({config:i}){return i.emulator?Cd(i,e1):`https://${i.authDomain}/${ZN}`}/**
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
 */function o1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l1(i){nn(new qt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Z(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(i)},g=new Fk(s,l,u,m);return Bk(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nn(new qt("auth-internal",e=>{const n=ql(e.getProvider("auth").getImmediate());return(s=>new s1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Jm,Xm,o1(i)),Ot(Jm,Xm,"esm2020")}/**
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
 */const a1=300,u1=cg("authIdTokenMaxAge")||a1;let Zm=null;const c1=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u1)return;const l=n==null?void 0:n.token;Zm!==l&&(Zm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function d1(i=Vc()){const e=xr(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Wk(i,{popupRedirectResolver:i1,persistence:[mN,rN,Ay]}),s=cg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=c1(u.toString());eN(n,d,()=>d(n.currentUser)),Zk(n,f=>d(f))}}const l=ag("auth");return l&&Hk(n,`http://${l}`),n}function h1(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}Uk({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=en("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",h1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l1("Browser");const f1={apiKey:"AIzaSyDMsa3BvIBTYDR0isLVvjAht1aTKPgz5JA",authDomain:"expense-splitter-54b84.firebaseapp.com",databaseURL:"https://expense-splitter-54b84-default-rtdb.europe-west1.firebasedatabase.app",projectId:"expense-splitter-54b84",storageBucket:"expense-splitter-54b84.firebasestorage.app",messagingSenderId:"355873212971",appId:"1:355873212971:web:28b15a101c7e4a79c7386e",measurementId:"G-EY0SF94DPK"},xd=yg(f1),eg=WC(xd),p1=d1(xd),tg=Qk(p1);dk().then(i=>{i&&uk(xd)});const tl={async get(i){await tg;const e=await LC(Rm(eg,i));return e.exists()?{value:e.val()}:null},async set(i,e){await tg,await DC(Rm(eg,i),e)}};function m1(){const[i,e]=Xe.useState([]),[n,s]=Xe.useState([]),[l,u]=Xe.useState("home"),[d,f]=Xe.useState(""),[m,g]=Xe.useState({}),[w,v]=Xe.useState(""),[I,F]=Xe.useState(""),[j,$]=Xe.useState([]),[q,pe]=Xe.useState({});Xe.useEffect(()=>{Oe()},[]);const Oe=async()=>{try{const O=await tl.get("families-v2"),U=await tl.get("expenses-v2");O!=null&&O.value&&e(JSON.parse(O.value)),U!=null&&U.value&&s(JSON.parse(U.value))}catch{console.log("Première utilisation")}},xe=async O=>{e(O);try{await tl.set("families-v2",JSON.stringify(O))}catch(U){console.error("Échec de la sauvegarde des familles",U)}},Ne=async O=>{s(O);try{await tl.set("expenses-v2",JSON.stringify(O))}catch(U){console.error("Échec de la sauvegarde des dépenses",U)}},_t=()=>{if(d.trim()){const O={id:Date.now(),name:d,members:[]},U=[...i,O];xe(U),f("")}},Be=O=>{const U=i.filter(N=>N.id!==O);xe(U)},Ge=O=>{var N;const U=m[O];if((N=U==null?void 0:U.name)!=null&&N.trim()){const L=i.map(b=>b.id===O?{...b,members:[...b.members,{id:Date.now(),name:U.name,shares:U.shares||1}]}:b);xe(L),g({...m,[O]:{name:"",shares:1}})}},ot=(O,U)=>{const N=i.map(L=>L.id===O?{...L,members:L.members.filter(b=>b.id!==U)}:L);xe(N)},Kt=O=>{if(j.includes(O)){$(j.filter(N=>N!==O));const U={...q};delete U[O],pe(U)}else $([...j,O]),pe({...q,[O]:[]})},Dt=(O,U)=>{const N=q[O]||[];N.includes(U)?pe({...q,[O]:N.filter(L=>L!==U)}):pe({...q,[O]:[...N,U]})},on=()=>{const O=Object.values(q).flat();if(w&&I&&j.length>0&&O.length>0){const U={id:Date.now(),amount:parseFloat(w),payer:I,families:j,presentPeople:q,date:new Date().toLocaleDateString("fr-FR")},N=[...n,U];Ne(N),v(""),F(""),$([]),pe({}),u("home")}},Ct=O=>{const U=n.filter(N=>N.id!==O);Ne(U)},qe=()=>{const O={};return i.forEach(U=>{U.members.forEach(N=>{O[N.id]={name:N.name,familyName:U.name,balance:0}})}),n.forEach(U=>{const N=U.payer;O[N]&&(O[N].balance+=U.amount);let L=0;const b=[];Object.entries(U.presentPeople).forEach(([R,Y])=>{Y.forEach(ee=>{const te=i.find(ce=>ce.id===parseInt(R)),ne=te==null?void 0:te.members.find(ce=>ce.id===ee);ne&&(L+=ne.shares,b.push({memberId:ee,shares:ne.shares}))})}),b.forEach(({memberId:R})=>{if(R!==N){const Y=b.find(ne=>ne.memberId===R),te=U.amount/L*Y.shares;O[R]&&(O[R].balance-=te)}});const S=b.find(R=>R.memberId===N);if(S){const Y=U.amount/L*S.shares;O[N].balance-=Y}}),O},lt=()=>{const O={...qe()},U=[];for(;;){const N=Object.entries(O).filter(([,te])=>te.balance<-.01),L=Object.entries(O).filter(([,te])=>te.balance>.01);if(N.length===0||L.length===0)break;const[b,S]=N[0],[R,Y]=L[0],ee=Math.min(-S.balance,Y.balance);U.push({from:S.name,fromFamily:S.familyName,to:Y.name,toFamily:Y.familyName,amount:ee.toFixed(2)}),O[b].balance+=ee,O[R].balance-=ee}return U},Tt=qe();if(l==="home")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsx("h1",{className:"text-3xl font-bold text-indigo-900 mb-6 text-center",children:"💰 Partage Vacances"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-xl font-bold text-indigo-900 mb-4",children:"👥 Mes Familles"}),i.length===0?P.jsx("p",{className:"text-indigo-600 text-center py-4 text-sm",children:"Créez une famille pour commencer"}):P.jsx("div",{className:"space-y-4 mb-6",children:i.map(O=>{var U,N;return P.jsxs("div",{className:"border-2 border-indigo-300 rounded-lg p-4 bg-indigo-50",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsx("h3",{className:"font-bold text-indigo-900 text-lg",children:O.name}),P.jsx("button",{onClick:()=>Be(O.id),className:"text-red-500 hover:bg-red-100 p-2 rounded",children:P.jsx(Ku,{size:18})})]}),O.members.length===0?P.jsx("p",{className:"text-indigo-600 text-sm italic mb-3",children:"Aucun membre pour l'instant"}):P.jsx("div",{className:"bg-white rounded p-2 mb-3 space-y-1",children:O.members.map(L=>P.jsxs("div",{className:"flex items-center justify-between text-sm",children:[P.jsxs("div",{children:[P.jsx("span",{className:"font-semibold text-indigo-900",children:L.name}),P.jsxs("span",{className:"text-indigo-600 ml-2",children:["(",L.shares," ",L.shares>1?"parts":"part",")"]})]}),P.jsx("button",{onClick:()=>ot(O.id,L.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]},L.id))}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-3",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900 mb-2",children:"Ajouter une personne :"}),P.jsxs("div",{className:"space-y-2",children:[P.jsx("input",{type:"text",placeholder:"Nom",value:((U=m[O.id])==null?void 0:U.name)||"",onChange:L=>{var b;return g({...m,[O.id]:{...m[O.id],name:L.target.value,shares:((b=m[O.id])==null?void 0:b.shares)||1}})},className:"w-full px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("div",{className:"flex gap-2",children:[P.jsx("select",{value:((N=m[O.id])==null?void 0:N.shares)||1,onChange:L=>{var b;return g({...m,[O.id]:{...m[O.id],shares:parseInt(L.target.value),name:((b=m[O.id])==null?void 0:b.name)||""}})},className:"flex-1 px-3 py-2 border border-indigo-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[1,2,3,4,5,6].map(L=>P.jsxs("option",{value:L,children:[L," ",L>1?"parts":"part"]},L))}),P.jsx("button",{onClick:()=>Ge(O.id),className:"bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700 flex items-center gap-1",children:P.jsx(bp,{size:18})})]})]})]})]},O.id)})}),P.jsxs("div",{className:"border-t-2 border-indigo-300 pt-4 space-y-2",children:[P.jsx("p",{className:"text-xs font-bold text-indigo-900",children:"Nouvelle famille/groupe :"}),P.jsx("input",{type:"text",placeholder:"Ex: Famille Dupont, Amis...",value:d,onChange:O=>f(O.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"}),P.jsxs("button",{onClick:_t,className:"w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 font-bold",children:[P.jsx(bp,{size:20})," Créer"]})]})]}),P.jsxs("div",{className:"space-y-3 mb-4",children:[P.jsxs("button",{onClick:()=>{v(""),F(""),$([]),pe({}),u("add-expense")},disabled:i.length===0||i.some(O=>O.members.length===0),className:"w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold text-lg",children:[P.jsx(Jw,{size:24})," Enregistrer une dépense"]}),P.jsx("button",{onClick:()=>u("summary"),disabled:n.length===0,className:"w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center gap-2 font-bold",children:"📊 Voir le récapitulatif"})]})]})});if(l==="add-expense"){const O=i.flatMap(N=>N.members),U=i.filter(N=>j.includes(N.id));return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Mp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"💳 Enregistrer une dépense"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 space-y-4",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Montant (€)"}),P.jsx("input",{type:"number",placeholder:"0.00",value:w,onChange:N=>v(N.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",step:"0.01"})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui a payé ?"}),P.jsxs("select",{value:I,onChange:N=>F(N.target.value),className:"w-full px-3 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[P.jsx("option",{value:"",children:"Sélectionner..."}),O.map(N=>{const L=i.find(b=>b.members.some(S=>S.id===N.id));return P.jsxs("option",{value:N.id,children:[N.name," (",L.name,")"]},N.id)})]})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Quelles familles étaient présentes ?"}),P.jsx("div",{className:"space-y-2",children:i.map(N=>P.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-indigo-50",children:[P.jsx("input",{type:"checkbox",checked:j.includes(N.id),onChange:()=>Kt(N.id),className:"w-5 h-5 rounded text-indigo-600"}),P.jsx("span",{className:"text-indigo-900 font-semibold",children:N.name})]},N.id))})]}),U.length>0&&P.jsxs("div",{children:[P.jsx("label",{className:"block text-sm font-bold text-indigo-900 mb-2",children:"Qui était à table ?"}),P.jsx("div",{className:"space-y-3",children:U.map(N=>P.jsxs("div",{className:"border-l-4 border-indigo-400 pl-3",children:[P.jsx("p",{className:"font-semibold text-indigo-900 mb-2 text-sm",children:N.name}),P.jsx("div",{className:"space-y-1 ml-2",children:N.members.map(L=>P.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[P.jsx("input",{type:"checkbox",checked:(q[N.id]||[]).includes(L.id),onChange:()=>Dt(N.id,L.id),className:"w-4 h-4 rounded text-indigo-600"}),P.jsxs("span",{className:"text-sm text-indigo-900",children:[L.name,P.jsxs("span",{className:"text-xs text-indigo-600 ml-1",children:["(",L.shares," ",L.shares>1?"parts":"part",")"]})]})]},L.id))})]},N.id))})]}),P.jsx("button",{onClick:on,disabled:!w||!I||j.length===0||Object.values(q).flat().length===0,className:"w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 font-bold text-lg mt-4",children:"✓ Enregistrer"})]})]})})}if(l==="summary")return P.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4",children:P.jsxs("div",{className:"max-w-md mx-auto",children:[P.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 text-indigo-900 font-bold mb-4 hover:text-indigo-700",children:[P.jsx(Mp,{size:24})," Retour"]}),P.jsx("h1",{className:"text-2xl font-bold text-indigo-900 mb-6",children:"📊 Récapitulatif"}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"Soldes"}),P.jsx("div",{className:"space-y-2",children:Object.entries(Tt).map(([O,U])=>P.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:U.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:U.familyName})]}),P.jsxs("span",{className:`text-lg font-bold ${U.balance>0?"text-green-600":U.balance<0?"text-red-600":"text-gray-600"}`,children:[U.balance>0?"+":"",U.balance.toFixed(2),"€"]})]},O))})]}),P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4 mb-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"💸 À faire"}),lt().length>0?P.jsx("div",{className:"space-y-2",children:lt().map((O,U)=>P.jsx("div",{className:"bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded",children:P.jsxs("p",{className:"text-indigo-900 text-sm",children:[P.jsx("span",{className:"font-bold",children:O.from})," (",O.fromFamily,")",P.jsx("br",{}),"paie ",P.jsxs("span",{className:"font-bold text-lg text-yellow-600",children:[O.amount,"€"]})," à",P.jsx("br",{}),P.jsx("span",{className:"font-bold",children:O.to})," (",O.toFamily,")"]})},U))}):P.jsx("p",{className:"text-green-600 font-semibold",children:"✓ Tout est réglé !"})]}),n.length>0&&P.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-4",children:[P.jsx("h2",{className:"text-lg font-bold text-indigo-900 mb-3",children:"📝 Toutes les dépenses"}),P.jsx("div",{className:"space-y-2",children:n.map(O=>{const U=i.flatMap(N=>N.members).find(N=>N.id===O.payer);return P.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded text-sm",children:[P.jsxs("div",{children:[P.jsx("p",{className:"font-semibold text-indigo-900",children:U==null?void 0:U.name}),P.jsx("p",{className:"text-xs text-indigo-600",children:O.date})]}),P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsxs("span",{className:"font-bold text-indigo-900",children:[O.amount.toFixed(2),"€"]}),P.jsx("button",{onClick:()=>Ct(O.id),className:"text-red-500 hover:bg-red-100 p-1 rounded",children:P.jsx(Ku,{size:16})})]})]},O.id)})})]})]})})}$w.createRoot(document.getElementById("root")).render(P.jsx(Uw.StrictMode,{children:P.jsx(m1,{})}));
