(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ds={exports:{}},Ro={},Ls={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),od=Symbol.for("react.portal"),id=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ud=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.memo"),pd=Symbol.for("react.lazy"),xa=Symbol.iterator;function md(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var Rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Os={};function In(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||Rs}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fs(){}Fs.prototype=In.prototype;function kl(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||Rs}var Sl=kl.prototype=new Fs;Sl.constructor=kl;Is(Sl,In.prototype);Sl.isPureReactComponent=!0;var wa=Array.isArray,As=Object.prototype.hasOwnProperty,jl={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function $s(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)As.call(t,r)&&!Us.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:zr,type:e,key:i,ref:l,props:o,_owner:jl.current}}function gd(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ka=/\/+/g;function Zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):t.toString(36)}function Jr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zr:case od:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Zo(l,0):r,wa(o)?(n="",e!=null&&(n=e.replace(ka,"$&/")+"/"),Jr(o,t,n,"",function(d){return d})):o!=null&&(bl(o)&&(o=gd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ka,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",wa(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Zo(i,s);l+=Jr(i,t,n,u,o)}else if(u=md(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Zo(i,s++),l+=Jr(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Lr(e,t,n){if(e==null)return e;var r=[],o=0;return Jr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},Zr={transition:null},vd={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:jl};function Bs(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Lr,forEach:function(e,t,n){Lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lr(e,function(){t++}),t},toArray:function(e){return Lr(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=In;B.Fragment=id;B.Profiler=ad;B.PureComponent=kl;B.StrictMode=ld;B.Suspense=dd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;B.act=Bs;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)As.call(t,u)&&!Us.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:zr,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};B.createElement=$s;B.createFactory=function(e){var t=$s.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:cd,render:e}};B.isValidElement=bl;B.lazy=function(e){return{$$typeof:pd,_payload:{_status:-1,_result:e},_init:yd}};B.memo=function(e,t){return{$$typeof:fd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};B.unstable_act=Bs;B.useCallback=function(e,t){return Ne.current.useCallback(e,t)};B.useContext=function(e){return Ne.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ne.current.useEffect(e,t)};B.useId=function(){return Ne.current.useId()};B.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ne.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};B.useRef=function(e){return Ne.current.useRef(e)};B.useState=function(e){return Ne.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ne.current.useTransition()};B.version="18.3.1";Ls.exports=B;var z=Ls.exports;const Vs=rd(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=z,wd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),Sd=Object.prototype.hasOwnProperty,jd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bd={key:!0,ref:!0,__self:!0,__source:!0};function Hs(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Sd.call(t,r)&&!bd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wd,type:e,key:i,ref:l,props:o,_owner:jd.current}}Ro.Fragment=kd;Ro.jsx=Hs;Ro.jsxs=Hs;Ds.exports=Ro;var a=Ds.exports,bi={},Ws={exports:{}},Ie={},Qs={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var O=T.length;T.push(I);e:for(;0<O;){var K=O-1>>>1,b=T[K];if(0<o(b,I))T[K]=I,T[O]=b,O=K;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],O=T.pop();if(O!==I){T[0]=O;e:for(var K=0,b=T.length,se=b>>>1;K<se;){var fe=2*(K+1)-1,Ae=T[fe],ie=fe+1,Ye=T[ie];if(0>o(Ae,O))ie<b&&0>o(Ye,Ae)?(T[K]=Ye,T[ie]=O,K=ie):(T[K]=Ae,T[fe]=O,K=fe);else if(ie<b&&0>o(Ye,O))T[K]=Ye,T[ie]=O,K=ie;else break e}}return I}function o(T,I){var O=T.sortIndex-I.sortIndex;return O!==0?O:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],y=1,m=null,p=3,h=!1,v=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=T)r(d),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(d)}}function k(T){if(x=!1,g(T),!v)if(n(u)!==null)v=!0,Fe(w);else{var I=n(d);I!==null&&xt(k,I.startTime-T)}}function w(T,I){v=!1,x&&(x=!1,f(N),N=-1),h=!0;var O=p;try{for(g(I),m=n(u);m!==null&&(!(m.expirationTime>I)||T&&!V());){var K=m.callback;if(typeof K=="function"){m.callback=null,p=m.priorityLevel;var b=K(m.expirationTime<=I);I=e.unstable_now(),typeof b=="function"?m.callback=b:m===n(u)&&r(u),g(I)}else r(u);m=n(u)}if(m!==null)var se=!0;else{var fe=n(d);fe!==null&&xt(k,fe.startTime-I),se=!1}return se}finally{m=null,p=O,h=!1}}var C=!1,_=null,N=-1,E=5,R=-1;function V(){return!(e.unstable_now()-R<E)}function ae(){if(_!==null){var T=e.unstable_now();R=T;var I=!0;try{I=_(!0,T)}finally{I?A():(C=!1,_=null)}}else C=!1}var A;if(typeof c=="function")A=function(){c(ae)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,re=D.port2;D.port1.onmessage=ae,A=function(){re.postMessage(null)}}else A=function(){M(ae,0)};function Fe(T){_=T,C||(C=!0,A())}function xt(T,I){N=M(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,Fe(w))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var O=p;p=I;try{return T()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=p;p=T;try{return I()}finally{p=O}},e.unstable_scheduleCallback=function(T,I,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,T){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=O+b,T={id:y++,callback:I,priorityLevel:T,startTime:O,expirationTime:b,sortIndex:-1},O>K?(T.sortIndex=O,t(d,T),n(u)===null&&T===n(d)&&(x?(f(N),N=-1):x=!0,xt(k,O-K))):(T.sortIndex=b,t(u,T),v||h||(v=!0,Fe(w))),T},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(T){var I=p;return function(){var O=p;p=I;try{return T.apply(this,arguments)}finally{p=O}}}})(Ys);Qs.exports=Ys;var Nd=Qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=z,Re=Nd;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xs=new Set,cr={};function on(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(cr[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sa={},ja={};function zd(e){return Ni.call(ja,e)?!0:Ni.call(Sa,e)?!1:Ed.test(e)?ja[e]=!0:(Sa[e]=!0,!1)}function _d(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,t,n,r){if(t===null||typeof t>"u"||_d(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,Cl);ye[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,Cl);ye[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,Cl);ye[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,n,o,r)&&(n=null),r||o===null?zd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),dn=Symbol.for("react.fragment"),zl=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),Ks=Symbol.for("react.provider"),Gs=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),zi=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Js=Symbol.for("react.offscreen"),ba=Symbol.iterator;function Vn(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,qo;function Jn(e){if(qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qo=t&&t[1]||""}return`
`+qo+e}var ei=!1;function ti(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function Pd(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function _i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case cn:return"Portal";case Ci:return"Profiler";case zl:return"StrictMode";case Ei:return"Suspense";case zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gs:return(e.displayName||"Context")+".Consumer";case Ks:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:_i(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return _i(e(t))}catch{}}return null}function Md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _i(t);case 8:return t===zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=Zs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=Dd(e))}function qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eu(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function Pi(e,t){eu(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mi(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mi(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Zn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function tu(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Or,ru=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ld=["Webkit","ms","Moz","O"];Object.keys(tr).forEach(function(e){Ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tr[t]=tr[e]})});function ou(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tr.hasOwnProperty(e)&&tr[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ou(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Rd=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,jn=null,bn=null;function _a(e){if(e=Pr(e)){if(typeof Fi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Uo(t),Fi(e.stateNode,e.type,t))}}function lu(e){jn?bn?bn.push(e):bn=[e]:jn=e}function au(){if(jn){var e=jn,t=bn;if(bn=jn=null,_a(e),t)for(e=0;e<t.length;e++)_a(t[e])}}function su(e,t){return e(t)}function uu(){}var ni=!1;function cu(e,t,n){if(ni)return e(t,n);ni=!0;try{return su(e,t,n)}finally{ni=!1,(jn!==null||bn!==null)&&(uu(),au())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ai=!1;if(mt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Ai=!1}function Id(e,t,n,r,o,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var nr=!1,fo=null,po=!1,Ui=null,Od={onError:function(e){nr=!0,fo=e}};function Fd(e,t,n,r,o,i,l,s,u){nr=!1,fo=null,Id.apply(Od,arguments)}function Ad(e,t,n,r,o,i,l,s,u){if(Fd.apply(this,arguments),nr){if(nr){var d=fo;nr=!1,fo=null}else throw Error(j(198));po||(po=!0,Ui=d)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(ln(e)!==e)throw Error(j(188))}function Ud(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ta(o),e;if(i===r)return Ta(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function fu(e){return e=Ud(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var mu=Re.unstable_scheduleCallback,Pa=Re.unstable_cancelCallback,$d=Re.unstable_shouldYield,Bd=Re.unstable_requestPaint,le=Re.unstable_now,Vd=Re.unstable_getCurrentPriorityLevel,Ml=Re.unstable_ImmediatePriority,gu=Re.unstable_UserBlockingPriority,mo=Re.unstable_NormalPriority,Hd=Re.unstable_LowPriority,hu=Re.unstable_IdlePriority,Io=null,at=null;function Wd(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Xd,Qd=Math.log,Yd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Qd(e)/Yd|0)|0}var Fr=64,Ar=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=qn(s):(i&=l,i!==0&&(r=qn(i)))}else l=n&~o,l!==0?r=qn(l):i!==0&&(r=qn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),s=1<<l,u=o[l];u===-1?(!(s&n)||s&r)&&(o[l]=Kd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function $i(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=Fr;return Fr<<=1,!(Fr&4194240)&&(Fr=64),e}function ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function vu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xu,Ll,wu,ku,Su,Bi=!1,Ur=[],Et=null,zt=null,_t=null,pr=new Map,mr=new Map,jt=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ma(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function Wn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Pr(t),t!==null&&Ll(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qd(e,t,n,r,o){switch(t){case"focusin":return Et=Wn(Et,e,t,n,r,o),!0;case"dragenter":return zt=Wn(zt,e,t,n,r,o),!0;case"mouseover":return _t=Wn(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return pr.set(i,Wn(pr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mr.set(i,Wn(mr.get(i)||null,e,t,n,r,o)),!0}return!1}function ju(e){var t=Qt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=du(n),t!==null){e.blockedOn=t,Su(e.priority,function(){wu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=Pr(n),t!==null&&Ll(t),e.blockedOn=n,!1;t.shift()}return!0}function Da(e,t,n){qr(e)&&n.delete(t)}function ef(){Bi=!1,Et!==null&&qr(Et)&&(Et=null),zt!==null&&qr(zt)&&(zt=null),_t!==null&&qr(_t)&&(_t=null),pr.forEach(Da),mr.forEach(Da)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bi||(Bi=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,ef)))}function gr(e){function t(o){return Qn(o,e)}if(0<Ur.length){Qn(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Qn(Et,e),zt!==null&&Qn(zt,e),_t!==null&&Qn(_t,e),pr.forEach(t),mr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&jt.shift()}var Nn=vt.ReactCurrentBatchConfig,ho=!0;function tf(e,t,n,r){var o=X,i=Nn.transition;Nn.transition=null;try{X=1,Rl(e,t,n,r)}finally{X=o,Nn.transition=i}}function nf(e,t,n,r){var o=X,i=Nn.transition;Nn.transition=null;try{X=4,Rl(e,t,n,r)}finally{X=o,Nn.transition=i}}function Rl(e,t,n,r){if(ho){var o=Vi(e,t,n,r);if(o===null)pi(e,t,r,yo,n),Ma(e,r);else if(qd(o,e,t,n,r))r.stopPropagation();else if(Ma(e,r),t&4&&-1<Zd.indexOf(e)){for(;o!==null;){var i=Pr(o);if(i!==null&&xu(i),i=Vi(e,t,n,r),i===null&&pi(e,t,r,yo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var yo=null;function Vi(e,t,n,r){if(yo=null,e=Pl(r),e=Qt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vd()){case Ml:return 1;case gu:return 4;case mo:case Hd:return 16;case hu:return 536870912;default:return 16}default:return 16}}var Nt=null,Il=null,eo=null;function Nu(){if(eo)return eo;var e,t=Il,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return eo=o.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function La(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$r:La,this.isPropagationStopped=La,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Oe(On),Tr=ne({},On,{view:0,detail:0}),rf=Oe(Tr),oi,ii,Yn,Oo=ne({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(oi=e.screenX-Yn.screenX,ii=e.screenY-Yn.screenY):ii=oi=0,Yn=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ii}}),Ra=Oe(Oo),of=ne({},Oo,{dataTransfer:0}),lf=Oe(of),af=ne({},Tr,{relatedTarget:0}),li=Oe(af),sf=ne({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Oe(sf),cf=ne({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Oe(cf),ff=ne({},On,{data:0}),Ia=Oe(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}function Fl(){return hf}var yf=ne({},Tr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Oe(yf),xf=ne({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oa=Oe(xf),wf=ne({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),kf=Oe(wf),Sf=ne({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Oe(Sf),bf=ne({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Oe(bf),Cf=[9,13,27,32],Al=mt&&"CompositionEvent"in window,rr=null;mt&&"documentMode"in document&&(rr=document.documentMode);var Ef=mt&&"TextEvent"in window&&!rr,Cu=mt&&(!Al||rr&&8<rr&&11>=rr),Fa=" ",Aa=!1;function Eu(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function zf(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Aa=!0,Fa);case"textInput":return e=t.data,e===Fa&&Aa?null:e;default:return null}}function _f(e,t){if(fn)return e==="compositionend"||!Al&&Eu(e,t)?(e=Nu(),eo=Il=Nt=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var Tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tf[e.type]:t==="textarea"}function _u(e,t,n,r){lu(r),t=vo(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,hr=null;function Pf(e){Uu(e,0)}function Fo(e){var t=gn(e);if(qs(t))return e}function Mf(e,t){if(e==="change")return t}var Tu=!1;if(mt){var ai;if(mt){var si="oninput"in document;if(!si){var $a=document.createElement("div");$a.setAttribute("oninput","return;"),si=typeof $a.oninput=="function"}ai=si}else ai=!1;Tu=ai&&(!document.documentMode||9<document.documentMode)}function Ba(){or&&(or.detachEvent("onpropertychange",Pu),hr=or=null)}function Pu(e){if(e.propertyName==="value"&&Fo(hr)){var t=[];_u(t,hr,e,Pl(e)),cu(Pf,t)}}function Df(e,t,n){e==="focusin"?(Ba(),or=t,hr=n,or.attachEvent("onpropertychange",Pu)):e==="focusout"&&Ba()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(hr)}function Rf(e,t){if(e==="click")return Fo(t)}function If(e,t){if(e==="input"||e==="change")return Fo(t)}function Of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Of;function yr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ni.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function Va(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ha(e,t){var n=Va(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Va(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Du(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=Du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ha(n,i);var l=Ha(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=mt&&"documentMode"in document&&11>=document.documentMode,pn=null,Hi=null,ir=null,Wi=!1;function Wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wi||pn==null||pn!==co(r)||(r=pn,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=vo(Hi,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},ui={},Lu={};mt&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ao(e){if(ui[e])return ui[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lu)return ui[e]=t[n];return e}var Ru=Ao("animationend"),Iu=Ao("animationiteration"),Ou=Ao("animationstart"),Fu=Ao("transitionend"),Au=new Map,Qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){Au.set(e,t),on(t,[e])}for(var ci=0;ci<Qa.length;ci++){var di=Qa[ci],Uf=di.toLowerCase(),$f=di[0].toUpperCase()+di.slice(1);Ot(Uf,"on"+$f)}Ot(Ru,"onAnimationEnd");Ot(Iu,"onAnimationIteration");Ot(Ou,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(Fu,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Ya(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ad(r,t,void 0,e),e.currentTarget=null}function Uu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Ya(o,s,d),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Ya(o,s,d),i=u}}}if(po)throw e=Ui,po=!1,Ui=null,e}function J(e,t){var n=t[Gi];n===void 0&&(n=t[Gi]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function fi(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Vr]){e[Vr]=!0,Xs.forEach(function(n){n!=="selectionchange"&&(Bf.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,fi("selectionchange",!1,t))}}function $u(e,t,n,r){switch(bu(t)){case 1:var o=tf;break;case 4:o=nf;break;default:o=Rl}n=o.bind(null,t,n,e),o=void 0,!Ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}cu(function(){var d=i,y=Pl(n),m=[];e:{var p=Au.get(e);if(p!==void 0){var h=Ol,v=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":h=vf;break;case"focusin":v="focus",h=li;break;case"focusout":v="blur",h=li;break;case"beforeblur":case"afterblur":h=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=kf;break;case Ru:case Iu:case Ou:h=uf;break;case Fu:h=jf;break;case"scroll":h=rf;break;case"wheel":h=Nf;break;case"copy":case"cut":case"paste":h=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Oa}var x=(t&4)!==0,M=!x&&e==="scroll",f=x?p!==null?p+"Capture":null:p;x=[];for(var c=d,g;c!==null;){g=c;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,f!==null&&(k=fr(c,f),k!=null&&x.push(xr(c,k,g)))),M)break;c=c.return}0<x.length&&(p=new h(p,v,null,n,y),m.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Oi&&(v=n.relatedTarget||n.fromElement)&&(Qt(v)||v[gt]))break e;if((h||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=d,v=v?Qt(v):null,v!==null&&(M=ln(v),v!==M||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=d),h!==v)){if(x=Ra,k="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=Oa,k="onPointerLeave",f="onPointerEnter",c="pointer"),M=h==null?p:gn(h),g=v==null?p:gn(v),p=new x(k,c+"leave",h,n,y),p.target=M,p.relatedTarget=g,k=null,Qt(y)===d&&(x=new x(f,c+"enter",v,n,y),x.target=g,x.relatedTarget=M,k=x),M=k,h&&v)t:{for(x=h,f=v,c=0,g=x;g;g=sn(g))c++;for(g=0,k=f;k;k=sn(k))g++;for(;0<c-g;)x=sn(x),c--;for(;0<g-c;)f=sn(f),g--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=sn(x),f=sn(f)}x=null}else x=null;h!==null&&Xa(m,p,h,x,!1),v!==null&&M!==null&&Xa(m,M,v,x,!0)}}e:{if(p=d?gn(d):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var w=Mf;else if(Ua(p))if(Tu)w=If;else{w=Lf;var C=Df}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Rf);if(w&&(w=w(e,d))){_u(m,w,n,y);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Mi(p,"number",p.value)}switch(C=d?gn(d):window,e){case"focusin":(Ua(C)||C.contentEditable==="true")&&(pn=C,Hi=d,ir=null);break;case"focusout":ir=Hi=pn=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Wa(m,n,y);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":Wa(m,n,y)}var _;if(Al)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else fn?Eu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Cu&&n.locale!=="ko"&&(fn||N!=="onCompositionStart"?N==="onCompositionEnd"&&fn&&(_=Nu()):(Nt=y,Il="value"in Nt?Nt.value:Nt.textContent,fn=!0)),C=vo(d,N),0<C.length&&(N=new Ia(N,e,null,n,y),m.push({event:N,listeners:C}),_?N.data=_:(_=zu(n),_!==null&&(N.data=_)))),(_=Ef?zf(e,n):_f(e,n))&&(d=vo(d,"onBeforeInput"),0<d.length&&(y=new Ia("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:d}),y.data=_))}Uu(m,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fr(e,n),i!=null&&r.unshift(xr(e,i,o)),i=fr(e,t),i!=null&&r.push(xr(e,i,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=fr(n,i),u!=null&&l.unshift(xr(n,u,s))):o||(u=fr(n,i),u!=null&&l.push(xr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vf=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(Vf,`
`).replace(Hf,"")}function Hr(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(j(425))}function xo(){}var Qi=null,Yi=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ki=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(Yf)}:Ki;function Yf(e){setTimeout(function(){throw e})}function mi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),it="__reactFiber$"+Fn,wr="__reactProps$"+Fn,gt="__reactContainer$"+Fn,Gi="__reactEvents$"+Fn,Xf="__reactListeners$"+Fn,Kf="__reactHandles$"+Fn;function Qt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ja(e);e!==null;){if(n=e[it])return n;e=Ja(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){return e=e[it]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Uo(e){return e[wr]||null}var Ji=[],hn=-1;function Ft(e){return{current:e}}function Z(e){0>hn||(e.current=Ji[hn],Ji[hn]=null,hn--)}function G(e,t){hn++,Ji[hn]=e.current,e.current=t}var It={},ke=Ft(It),_e=Ft(!1),qt=It;function _n(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Te(e){return e=e.childContextTypes,e!=null}function wo(){Z(_e),Z(ke)}function Za(e,t,n){if(ke.current!==It)throw Error(j(168));G(ke,t),G(_e,n)}function Bu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,Md(e)||"Unknown",o));return ne({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,qt=ke.current,G(ke,e),G(_e,_e.current),!0}function qa(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Bu(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,Z(_e),Z(ke),G(ke,e)):Z(_e),G(_e,n)}var ct=null,$o=!1,gi=!1;function Vu(e){ct===null?ct=[e]:ct.push(e)}function Gf(e){$o=!0,Vu(e)}function At(){if(!gi&&ct!==null){gi=!0;var e=0,t=X;try{var n=ct;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,$o=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),mu(Ml,At),o}finally{X=t,gi=!1}}return null}var yn=[],vn=0,So=null,jo=0,$e=[],Be=0,en=null,dt=1,ft="";function Ht(e,t){yn[vn++]=jo,yn[vn++]=So,So=e,jo=t}function Hu(e,t,n){$e[Be++]=dt,$e[Be++]=ft,$e[Be++]=en,en=e;var r=dt;e=ft;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,dt=1<<32-qe(t)+o|n<<o|r,ft=i+e}else dt=1<<i|n<<o|r,ft=e}function $l(e){e.return!==null&&(Ht(e,1),Hu(e,1,0))}function Bl(e){for(;e===So;)So=yn[--vn],yn[vn]=null,jo=yn[--vn],yn[vn]=null;for(;e===en;)en=$e[--Be],$e[Be]=null,ft=$e[--Be],$e[Be]=null,dt=$e[--Be],$e[Be]=null}var Le=null,De=null,q=!1,Je=null;function Wu(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,De=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,De=null,!0):!1;default:return!1}}function Zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qi(e){if(q){var t=De;if(t){var n=t;if(!es(e,t)){if(Zi(e))throw Error(j(418));t=Tt(n.nextSibling);var r=Le;t&&es(e,t)?Wu(r,n):(e.flags=e.flags&-4097|2,q=!1,Le=e)}}else{if(Zi(e))throw Error(j(418));e.flags=e.flags&-4097|2,q=!1,Le=e}}}function ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Wr(e){if(e!==Le)return!1;if(!q)return ts(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=De)){if(Zi(e))throw Qu(),Error(j(418));for(;t;)Wu(e,t),t=Tt(t.nextSibling)}if(ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Le?Tt(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=De;e;)e=Tt(e.nextSibling)}function Tn(){De=Le=null,q=!1}function Vl(e){Je===null?Je=[e]:Je.push(e)}var Jf=vt.ReactCurrentBatchConfig;function Xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Qr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function Yu(e){function t(f,c){if(e){var g=f.deletions;g===null?(f.deletions=[c],f.flags|=16):g.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Lt(f,c),f.index=0,f.sibling=null,f}function i(f,c,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags|=2,c):g):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,g,k){return c===null||c.tag!==6?(c=Si(g,f.mode,k),c.return=f,c):(c=o(c,g),c.return=f,c)}function u(f,c,g,k){var w=g.type;return w===dn?y(f,c,g.props.children,k,g.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===kt&&ns(w)===c.type)?(k=o(c,g.props),k.ref=Xn(f,c,g),k.return=f,k):(k=so(g.type,g.key,g.props,null,f.mode,k),k.ref=Xn(f,c,g),k.return=f,k)}function d(f,c,g,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=ji(g,f.mode,k),c.return=f,c):(c=o(c,g.children||[]),c.return=f,c)}function y(f,c,g,k,w){return c===null||c.tag!==7?(c=Gt(g,f.mode,k,w),c.return=f,c):(c=o(c,g),c.return=f,c)}function m(f,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Si(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Rr:return g=so(c.type,c.key,c.props,null,f.mode,g),g.ref=Xn(f,null,c),g.return=f,g;case cn:return c=ji(c,f.mode,g),c.return=f,c;case kt:var k=c._init;return m(f,k(c._payload),g)}if(Zn(c)||Vn(c))return c=Gt(c,f.mode,g,null),c.return=f,c;Qr(f,c)}return null}function p(f,c,g,k){var w=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:s(f,c,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Rr:return g.key===w?u(f,c,g,k):null;case cn:return g.key===w?d(f,c,g,k):null;case kt:return w=g._init,p(f,c,w(g._payload),k)}if(Zn(g)||Vn(g))return w!==null?null:y(f,c,g,k,null);Qr(f,g)}return null}function h(f,c,g,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(g)||null,s(c,f,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Rr:return f=f.get(k.key===null?g:k.key)||null,u(c,f,k,w);case cn:return f=f.get(k.key===null?g:k.key)||null,d(c,f,k,w);case kt:var C=k._init;return h(f,c,g,C(k._payload),w)}if(Zn(k)||Vn(k))return f=f.get(g)||null,y(c,f,k,w,null);Qr(c,k)}return null}function v(f,c,g,k){for(var w=null,C=null,_=c,N=c=0,E=null;_!==null&&N<g.length;N++){_.index>N?(E=_,_=null):E=_.sibling;var R=p(f,_,g[N],k);if(R===null){_===null&&(_=E);break}e&&_&&R.alternate===null&&t(f,_),c=i(R,c,N),C===null?w=R:C.sibling=R,C=R,_=E}if(N===g.length)return n(f,_),q&&Ht(f,N),w;if(_===null){for(;N<g.length;N++)_=m(f,g[N],k),_!==null&&(c=i(_,c,N),C===null?w=_:C.sibling=_,C=_);return q&&Ht(f,N),w}for(_=r(f,_);N<g.length;N++)E=h(_,f,N,g[N],k),E!==null&&(e&&E.alternate!==null&&_.delete(E.key===null?N:E.key),c=i(E,c,N),C===null?w=E:C.sibling=E,C=E);return e&&_.forEach(function(V){return t(f,V)}),q&&Ht(f,N),w}function x(f,c,g,k){var w=Vn(g);if(typeof w!="function")throw Error(j(150));if(g=w.call(g),g==null)throw Error(j(151));for(var C=w=null,_=c,N=c=0,E=null,R=g.next();_!==null&&!R.done;N++,R=g.next()){_.index>N?(E=_,_=null):E=_.sibling;var V=p(f,_,R.value,k);if(V===null){_===null&&(_=E);break}e&&_&&V.alternate===null&&t(f,_),c=i(V,c,N),C===null?w=V:C.sibling=V,C=V,_=E}if(R.done)return n(f,_),q&&Ht(f,N),w;if(_===null){for(;!R.done;N++,R=g.next())R=m(f,R.value,k),R!==null&&(c=i(R,c,N),C===null?w=R:C.sibling=R,C=R);return q&&Ht(f,N),w}for(_=r(f,_);!R.done;N++,R=g.next())R=h(_,f,N,R.value,k),R!==null&&(e&&R.alternate!==null&&_.delete(R.key===null?N:R.key),c=i(R,c,N),C===null?w=R:C.sibling=R,C=R);return e&&_.forEach(function(ae){return t(f,ae)}),q&&Ht(f,N),w}function M(f,c,g,k){if(typeof g=="object"&&g!==null&&g.type===dn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Rr:e:{for(var w=g.key,C=c;C!==null;){if(C.key===w){if(w=g.type,w===dn){if(C.tag===7){n(f,C.sibling),c=o(C,g.props.children),c.return=f,f=c;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===kt&&ns(w)===C.type){n(f,C.sibling),c=o(C,g.props),c.ref=Xn(f,C,g),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}g.type===dn?(c=Gt(g.props.children,f.mode,k,g.key),c.return=f,f=c):(k=so(g.type,g.key,g.props,null,f.mode,k),k.ref=Xn(f,c,g),k.return=f,f=k)}return l(f);case cn:e:{for(C=g.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(f,c.sibling),c=o(c,g.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ji(g,f.mode,k),c.return=f,f=c}return l(f);case kt:return C=g._init,M(f,c,C(g._payload),k)}if(Zn(g))return v(f,c,g,k);if(Vn(g))return x(f,c,g,k);Qr(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,g),c.return=f,f=c):(n(f,c),c=Si(g,f.mode,k),c.return=f,f=c),l(f)):n(f,c)}return M}var Pn=Yu(!0),Xu=Yu(!1),bo=Ft(null),No=null,xn=null,Hl=null;function Wl(){Hl=xn=No=null}function Ql(e){var t=bo.current;Z(bo),e._currentValue=t}function el(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){No=e,Hl=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Hl!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(No===null)throw Error(j(308));xn=e,No.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Yt=null;function Yl(e){Yt===null?Yt=[e]:Yt.push(e)}function Ku(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Yl(t)):(n.next=o.next,o.next=n),t.interleaved=n,ht(e,r)}function ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var St=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Yl(r)):(t.next=o.next,o.next=t),r.interleaved=t,ht(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}function rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Co(e,t,n,r){var o=e.updateQueue;St=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,y=d=u=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){y!==null&&(y=y.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(p=t,h=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(h,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(h,m,p):v,p==null)break e;m=ne({},m,p);break e;case 2:St=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=h,u=m):y=y.next=h,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(y===null&&(u=m),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=m}}function os(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Mr={},st=Ft(Mr),kr=Ft(Mr),Sr=Ft(Mr);function Xt(e){if(e===Mr)throw Error(j(174));return e}function Kl(e,t){switch(G(Sr,t),G(kr,e),G(st,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}Z(st),G(st,t)}function Mn(){Z(st),Z(kr),Z(Sr)}function Ju(e){Xt(Sr.current);var t=Xt(st.current),n=Li(t,e.type);t!==n&&(G(kr,e),G(st,n))}function Gl(e){kr.current===e&&(Z(st),Z(kr))}var ee=Ft(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function Jl(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var ro=vt.ReactCurrentDispatcher,yi=vt.ReactCurrentBatchConfig,tn=0,te=null,ce=null,pe=null,zo=!1,lr=!1,jr=0,Zf=0;function ve(){throw Error(j(321))}function Zl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function ql(e,t,n,r,o,i){if(tn=i,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?np:rp,e=n(r,o),lr){i=0;do{if(lr=!1,jr=0,25<=i)throw Error(j(301));i+=1,pe=ce=null,t.updateQueue=null,ro.current=op,e=n(r,o)}while(lr)}if(ro.current=_o,t=ce!==null&&ce.next!==null,tn=0,pe=ce=te=null,zo=!1,t)throw Error(j(300));return e}function ea(){var e=jr!==0;return jr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function Qe(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(j(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function br(e,t){return typeof t=="function"?t(e):t}function vi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ce,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,d=i;do{var y=d.lane;if((tn&y)===y)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,te.lanes|=y,nn|=y}d=d.next}while(d!==null&&d!==i);u===null?l=r:u.next=s,tt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,te.lanes|=i,nn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xi(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zu(){}function qu(e,t){var n=te,r=Qe(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,ze=!0),r=r.queue,ta(nc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Nr(9,tc.bind(null,n,r,o,t),void 0,null),me===null)throw Error(j(349));tn&30||ec(n,t,o)}return o}function ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tc(e,t,n,r){t.value=n,t.getSnapshot=r,rc(t)&&oc(e)}function nc(e,t,n){return n(function(){rc(t)&&oc(e)})}function rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function oc(e){var t=ht(e,1);t!==null&&et(t,e,1,-1)}function is(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,te,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ic(){return Qe().memoizedState}function oo(e,t,n,r){var o=ot();te.flags|=e,o.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var o=Qe();r=r===void 0?null:r;var i=void 0;if(ce!==null){var l=ce.memoizedState;if(i=l.destroy,r!==null&&Zl(r,l.deps)){o.memoizedState=Nr(t,n,i,r);return}}te.flags|=e,o.memoizedState=Nr(1|t,n,i,r)}function ls(e,t){return oo(8390656,8,e,t)}function ta(e,t){return Bo(2048,8,e,t)}function lc(e,t){return Bo(4,2,e,t)}function ac(e,t){return Bo(4,4,e,t)}function sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uc(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,sc.bind(null,t,e),n)}function na(){}function cc(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dc(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fc(e,t,n){return tn&21?(tt(n,t)||(n=yu(),te.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function qf(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=yi.transition;yi.transition={};try{e(!1),t()}finally{X=n,yi.transition=r}}function pc(){return Qe().memoizedState}function ep(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))gc(t,n);else if(n=Ku(e,t,n,r),n!==null){var o=be();et(n,e,r,o),hc(n,t,r)}}function tp(e,t,n){var r=Dt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))gc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,tt(s,l)){var u=t.interleaved;u===null?(o.next=o,Yl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ku(e,t,o,r),n!==null&&(o=be(),et(n,e,r,o),hc(n,t,r))}}function mc(e){var t=e.alternate;return e===te||t!==null&&t===te}function gc(e,t){lr=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}var _o={readContext:We,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},np={readContext:We,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oo(4194308,4,sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ep.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:is,useDebugValue:na,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=is(!1),t=e[0];return e=qf.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,o=ot();if(q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),me===null)throw Error(j(349));tn&30||ec(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ls(nc.bind(null,r,i,e),[e]),r.flags|=2048,Nr(9,tc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ot(),t=me.identifierPrefix;if(q){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:We,useCallback:cc,useContext:We,useEffect:ta,useImperativeHandle:uc,useInsertionEffect:lc,useLayoutEffect:ac,useMemo:dc,useReducer:vi,useRef:ic,useState:function(){return vi(br)},useDebugValue:na,useDeferredValue:function(e){var t=Qe();return fc(t,ce.memoizedState,e)},useTransition:function(){var e=vi(br)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:qu,useId:pc,unstable_isNewReconciler:!1},op={readContext:We,useCallback:cc,useContext:We,useEffect:ta,useImperativeHandle:uc,useInsertionEffect:lc,useLayoutEffect:ac,useMemo:dc,useReducer:xi,useRef:ic,useState:function(){return xi(br)},useDebugValue:na,useDeferredValue:function(e){var t=Qe();return ce===null?t.memoizedState=e:fc(t,ce.memoizedState,e)},useTransition:function(){var e=xi(br)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:qu,useId:pc,unstable_isNewReconciler:!1};function Ke(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vo={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),o=Dt(e),i=pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,o),t!==null&&(et(t,e,o,r),no(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),o=Dt(e),i=pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,o),t!==null&&(et(t,e,o,r),no(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Dt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Pt(e,o,r),t!==null&&(et(t,e,r,n),no(t,e,r))}};function as(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,i):!0}function yc(e,t,n){var r=!1,o=It,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Te(t)?qt:ke.current,r=t.contextTypes,i=(r=r!=null)?_n(e,o):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function nl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Xl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Te(t)?qt:ke.current,o.context=_n(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(tl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Vo.enqueueReplaceState(o,o.state,null),Co(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=Pd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function vc(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,pl=r),rl(e,t)},n}function xc(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rl(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function us(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ip;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=xp.bind(null,e,t,n),t.then(e,e))}function cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ds(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var lp=vt.ReactCurrentOwner,ze=!1;function je(e,t,n,r){t.child=e===null?Xu(t,null,n,r):Pn(t,e.child,n,r)}function fs(e,t,n,r,o){n=n.render;var i=t.ref;return Cn(t,o),r=ql(e,t,n,r,i,o),n=ea(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(q&&n&&$l(t),t.flags|=1,je(e,t,r,o),t.child)}function ps(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ca(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wc(e,t,i,r,o)):(e=so(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(l,r)&&e.ref===t.ref)return yt(e,t,o)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(yr(i,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,yt(e,t,o)}return ol(e,t,n,r,o)}function kc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(kn,Me),Me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(kn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(kn,Me),Me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(kn,Me),Me|=r;return je(e,t,o,n),t.child}function Sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ol(e,t,n,r,o){var i=Te(n)?qt:ke.current;return i=_n(t,i),Cn(t,o),n=ql(e,t,n,r,i,o),r=ea(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,yt(e,t,o)):(q&&r&&$l(t),t.flags|=1,je(e,t,n,o),t.child)}function ms(e,t,n,r,o){if(Te(n)){var i=!0;ko(t)}else i=!1;if(Cn(t,o),t.stateNode===null)io(e,t),yc(t,n,r),nl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=We(d):(d=Te(n)?qt:ke.current,d=_n(t,d));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&ss(t,l,r,d),St=!1;var p=t.memoizedState;l.state=p,Co(t,r,l,o),u=t.memoizedState,s!==r||p!==u||_e.current||St?(typeof y=="function"&&(tl(t,n,y,r),u=t.memoizedState),(s=St||as(t,n,s,r,p,u,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ke(t.type,s),l.props=d,m=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=We(u):(u=Te(n)?qt:ke.current,u=_n(t,u));var h=n.getDerivedStateFromProps;(y=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||p!==u)&&ss(t,l,r,u),St=!1,p=t.memoizedState,l.state=p,Co(t,r,l,o);var v=t.memoizedState;s!==m||p!==v||_e.current||St?(typeof h=="function"&&(tl(t,n,h,r),v=t.memoizedState),(d=St||as(t,n,d,r,p,v,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return il(e,t,n,r,i,o)}function il(e,t,n,r,o,i){Sc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&qa(t,n,!1),yt(e,t,i);r=t.stateNode,lp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,s,i)):je(e,t,s,i),t.memoizedState=r.state,o&&qa(t,n,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?Za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Za(e,t.context,!1),Kl(e,t.containerInfo)}function gs(e,t,n,r,o){return Tn(),Vl(o),t.flags|=256,je(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function bc(e,t,n){var r=t.pendingProps,o=ee.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(ee,o&1),e===null)return qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Qo(l,r,0,null),e=Gt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=al(n),t.memoizedState=ll,e):ra(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return ap(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Lt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Lt(s,i):(i=Gt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ra(e,t){return t=Qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yr(e,t,n,r){return r!==null&&Vl(r),Pn(t,e.child,null,n),e=ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ap(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=wi(Error(j(422))),Yr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Qo({mode:"visible",children:r.children},o,0,null),i=Gt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Pn(t,e.child,null,l),t.child.memoizedState=al(l),t.memoizedState=ll,i);if(!(t.mode&1))return Yr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=wi(i,r,void 0),Yr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ze||s){if(r=me,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ht(e,o),et(r,e,o,-1))}return ua(),r=wi(Error(j(421))),Yr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,De=Tt(o.nextSibling),Le=t,q=!0,Je=null,e!==null&&($e[Be++]=dt,$e[Be++]=ft,$e[Be++]=en,dt=e.id,ft=e.overflow,en=t),t=ra(t,r.children),t.flags|=4096,t)}function hs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),el(e.return,t,n)}function ki(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Nc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(je(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,n,t);else if(e.tag===19)hs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ee,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ki(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ki(t,!0,n,null,i);break;case"together":ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sp(e,t,n){switch(t.tag){case 3:jc(t),Tn();break;case 5:Ju(t);break;case 1:Te(t.type)&&ko(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?bc(e,t,n):(G(ee,ee.current&1),e=yt(e,t,n),e!==null?e.sibling:null);G(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,n)}return yt(e,t,n)}var Cc,sl,Ec,zc;Cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sl=function(){};Ec=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xt(st.current);var i=null;switch(n){case"input":o=Ti(e,o),r=Ti(e,r),i=[];break;case"select":o=ne({},o,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":o=Di(e,o),r=Di(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}Ri(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(cr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(cr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&J("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function up(e,t,n){var r=t.pendingProps;switch(Bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Te(t.type)&&wo(),xe(t),null;case 3:return r=t.stateNode,Mn(),Z(_e),Z(ke),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(hl(Je),Je=null))),sl(e,t),xe(t),null;case 5:Gl(t);var o=Xt(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ec(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return xe(t),null}if(e=Xt(st.current),Wr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[wr]=i,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<er.length;o++)J(er[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Na(r,i),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},J("invalid",r);break;case"textarea":Ea(r,i),J("invalid",r)}Ri(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),o=["children",""+s]):cr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":Ir(r),Ca(r,i,!0);break;case"textarea":Ir(r),za(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[wr]=r,Cc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ii(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<er.length;o++)J(er[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":Na(e,r),o=Ti(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ne({},r,{value:void 0}),J("invalid",e);break;case"textarea":Ea(e,r),o=Di(e,r),J("invalid",e);break;default:o=r}Ri(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?iu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ru(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&dr(e,u):typeof u=="number"&&dr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(cr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&J("scroll",e):u!=null&&El(e,i,u,l))}switch(n){case"input":Ir(e),Ca(e,r,!1);break;case"textarea":Ir(e),za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Xt(Sr.current),Xt(st.current),Wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return xe(t),null;case 13:if(Z(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&De!==null&&t.mode&1&&!(t.flags&128))Qu(),Tn(),t.flags|=98560,i=!1;else if(i=Wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[it]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),i=!1}else Je!==null&&(hl(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?de===0&&(de=3):ua())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Mn(),sl(e,t),e===null&&vr(t.stateNode.containerInfo),xe(t),null;case 10:return Ql(t.type._context),xe(t),null;case 17:return Te(t.type)&&wo(),xe(t),null;case 19:if(Z(ee),i=t.memoizedState,i===null)return xe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Kn(i,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Eo(e),l!==null){for(t.flags|=128,Kn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ee,ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&le()>Ln&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!q)return xe(t),null}else 2*le()-i.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,Kn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=ee.current,G(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return sa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function cp(e,t){switch(Bl(t),t.tag){case 1:return Te(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),Z(_e),Z(ke),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(Z(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ee),null;case 4:return Mn(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return sa(),null;case 24:return null;default:return null}}var Xr=!1,we=!1,dp=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function ul(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ys=!1;function fp(e,t){if(Qi=ho,e=Du(),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,y=0,m=e,p=null;t:for(;;){for(var h;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(h=m.firstChild)!==null;)p=m,m=h;for(;;){if(m===e)break t;if(p===n&&++d===o&&(s=l),p===i&&++y===r&&(u=l),(h=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=h}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yi={focusedElem:e,selectionRange:n},ho=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,M=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ke(t.type,x),M);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){oe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=ys,ys=!1,v}function ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ul(t,n,i)}o=o.next}while(o!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _c(e){var t=e.alternate;t!==null&&(e.alternate=null,_c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[wr],delete t[Gi],delete t[Xf],delete t[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function vs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}var ge=null,Ge=!1;function wt(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Io,n)}catch{}switch(n.tag){case 5:we||wn(n,t);case 6:var r=ge,o=Ge;ge=null,wt(e,t,n),ge=r,Ge=o,ge!==null&&(Ge?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(Ge?(e=ge,n=n.stateNode,e.nodeType===8?mi(e.parentNode,n):e.nodeType===1&&mi(e,n),gr(e)):mi(ge,n.stateNode));break;case 4:r=ge,o=Ge,ge=n.stateNode.containerInfo,Ge=!0,wt(e,t,n),ge=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ul(n,t,l),o=o.next}while(o!==r)}wt(e,t,n);break;case 1:if(!we&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,wt(e,t,n),we=r):wt(e,t,n);break;default:wt(e,t,n)}}function xs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dp),t.forEach(function(r){var o=kp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,Ge=!1;break e;case 3:ge=s.stateNode.containerInfo,Ge=!0;break e;case 4:ge=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ge===null)throw Error(j(160));Pc(i,l,o),ge=null,Ge=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){oe(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),rt(e),r&4){try{ar(3,e,e.return),Ho(3,e)}catch(x){oe(e,e.return,x)}try{ar(5,e,e.return)}catch(x){oe(e,e.return,x)}}break;case 1:Xe(t,e),rt(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(Xe(t,e),rt(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(x){oe(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&eu(o,i),Ii(s,l);var d=Ii(s,i);for(l=0;l<u.length;l+=2){var y=u[l],m=u[l+1];y==="style"?iu(o,m):y==="dangerouslySetInnerHTML"?ru(o,m):y==="children"?dr(o,m):El(o,y,m,d)}switch(s){case"input":Pi(o,i);break;case"textarea":tu(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Sn(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Sn(o,!!i.multiple,i.defaultValue,!0):Sn(o,!!i.multiple,i.multiple?[]:"",!1))}o[wr]=i}catch(x){oe(e,e.return,x)}}break;case 6:if(Xe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){oe(e,e.return,x)}}break;case 3:if(Xe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(x){oe(e,e.return,x)}break;case 4:Xe(t,e),rt(e);break;case 13:Xe(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(la=le())),r&4&&xs(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(we=(d=we)||y,Xe(t,e),we=d):Xe(t,e),rt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(P=e,y=e.child;y!==null;){for(m=P=y;P!==null;){switch(p=P,h=p.child,p.tag){case 0:case 11:case 14:case 15:ar(4,p,p.return);break;case 1:wn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){oe(r,n,x)}}break;case 5:wn(p,p.return);break;case 22:if(p.memoizedState!==null){ks(m);continue}}h!==null?(h.return=p,P=h):ks(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{o=m.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ou("display",l))}catch(x){oe(e,e.return,x)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){oe(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xe(t,e),rt(e),r&4&&xs(e);break;case 21:break;default:Xe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(dr(o,""),r.flags&=-33);var i=vs(e);fl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=vs(e);dl(e,s,l);break;default:throw Error(j(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,n){P=e,Dc(e)}function Dc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Xr;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||we;s=Xr;var d=we;if(Xr=l,(we=u)&&!d)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?Ss(o):u!==null?(u.return=l,P=u):Ss(o);for(;i!==null;)P=i,Dc(i),i=i.sibling;P=o,Xr=s,we=d}ws(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):ws(e)}}function ws(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&os(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}os(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&gr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}we||t.flags&512&&cl(t)}catch(p){oe(t,t.return,p)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ks(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ss(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){oe(t,o,u)}}var i=t.return;try{cl(t)}catch(u){oe(t,i,u)}break;case 5:var l=t.return;try{cl(t)}catch(u){oe(t,l,u)}}}catch(u){oe(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var mp=Math.ceil,To=vt.ReactCurrentDispatcher,oa=vt.ReactCurrentOwner,He=vt.ReactCurrentBatchConfig,W=0,me=null,ue=null,he=0,Me=0,kn=Ft(0),de=0,Cr=null,nn=0,Wo=0,ia=0,sr=null,Ee=null,la=0,Ln=1/0,ut=null,Po=!1,pl=null,Mt=null,Kr=!1,Ct=null,Mo=0,ur=0,ml=null,lo=-1,ao=0;function be(){return W&6?le():lo!==-1?lo:lo=le()}function Dt(e){return e.mode&1?W&2&&he!==0?he&-he:Jf.transition!==null?(ao===0&&(ao=yu()),ao):(e=X,e!==0||(e=window.event,e=e===void 0?16:bu(e.type)),e):1}function et(e,t,n,r){if(50<ur)throw ur=0,ml=null,Error(j(185));_r(e,n,r),(!(W&2)||e!==me)&&(e===me&&(!(W&2)&&(Wo|=n),de===4&&bt(e,he)),Pe(e,r),n===1&&W===0&&!(t.mode&1)&&(Ln=le()+500,$o&&At()))}function Pe(e,t){var n=e.callbackNode;Gd(e,t);var r=go(e,e===me?he:0);if(r===0)n!==null&&Pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pa(n),t===1)e.tag===0?Gf(js.bind(null,e)):Vu(js.bind(null,e)),Qf(function(){!(W&6)&&At()}),n=null;else{switch(vu(r)){case 1:n=Ml;break;case 4:n=gu;break;case 16:n=mo;break;case 536870912:n=hu;break;default:n=mo}n=$c(n,Lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lc(e,t){if(lo=-1,ao=0,W&6)throw Error(j(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=go(e,e===me?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var o=W;W|=2;var i=Ic();(me!==e||he!==t)&&(ut=null,Ln=le()+500,Kt(e,t));do try{yp();break}catch(s){Rc(e,s)}while(!0);Wl(),To.current=i,W=o,ue!==null?t=0:(me=null,he=0,t=de)}if(t!==0){if(t===2&&(o=$i(e),o!==0&&(r=o,t=gl(e,o))),t===1)throw n=Cr,Kt(e,0),bt(e,r),Pe(e,le()),n;if(t===6)bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!gp(o)&&(t=Do(e,r),t===2&&(i=$i(e),i!==0&&(r=i,t=gl(e,i))),t===1))throw n=Cr,Kt(e,0),bt(e,r),Pe(e,le()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Wt(e,Ee,ut);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=la+500-le(),10<t)){if(go(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ki(Wt.bind(null,e,Ee,ut),t);break}Wt(e,Ee,ut);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=Ki(Wt.bind(null,e,Ee,ut),r);break}Wt(e,Ee,ut);break;case 5:Wt(e,Ee,ut);break;default:throw Error(j(329))}}}return Pe(e,le()),e.callbackNode===n?Lc.bind(null,e):null}function gl(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&hl(t)),e}function hl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function gp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~ia,t&=~Wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function js(e){if(W&6)throw Error(j(327));En();var t=go(e,0);if(!(t&1))return Pe(e,le()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=$i(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=Cr,Kt(e,0),bt(e,t),Pe(e,le()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Ee,ut),Pe(e,le()),null}function aa(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Ln=le()+500,$o&&At())}}function rn(e){Ct!==null&&Ct.tag===0&&!(W&6)&&En();var t=W;W|=1;var n=He.transition,r=X;try{if(He.transition=null,X=1,e)return e()}finally{X=r,He.transition=n,W=t,!(W&6)&&At()}}function sa(){Me=kn.current,Z(kn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:Mn(),Z(_e),Z(ke),Jl();break;case 5:Gl(r);break;case 4:Mn();break;case 13:Z(ee);break;case 19:Z(ee);break;case 10:Ql(r.type._context);break;case 22:case 23:sa()}n=n.return}if(me=e,ue=e=Lt(e.current,null),he=Me=t,de=0,Cr=null,ia=Wo=nn=0,Ee=sr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function Rc(e,t){do{var n=ue;try{if(Wl(),ro.current=_o,zo){for(var r=te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zo=!1}if(tn=0,pe=ce=te=null,lr=!1,jr=0,oa.current=null,n===null||n.return===null){de=1,Cr=t,ue=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var p=y.alternate;p?(y.updateQueue=p.updateQueue,y.memoizedState=p.memoizedState,y.lanes=p.lanes):(y.updateQueue=null,y.memoizedState=null)}var h=cs(l);if(h!==null){h.flags&=-257,ds(h,l,s,i,t),h.mode&1&&us(i,d,t),t=h,u=d;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){us(i,d,t),ua();break e}u=Error(j(426))}}else if(q&&s.mode&1){var M=cs(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),ds(M,l,s,i,t),Vl(Dn(u,s));break e}}i=u=Dn(u,s),de!==4&&(de=2),sr===null?sr=[i]:sr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=vc(i,u,t);rs(i,f);break e;case 1:s=u;var c=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mt===null||!Mt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=xc(i,s,t);rs(i,k);break e}}i=i.return}while(i!==null)}Fc(n)}catch(w){t=w,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function Ic(){var e=To.current;return To.current=_o,e===null?_o:e}function ua(){(de===0||de===3||de===2)&&(de=4),me===null||!(nn&268435455)&&!(Wo&268435455)||bt(me,he)}function Do(e,t){var n=W;W|=2;var r=Ic();(me!==e||he!==t)&&(ut=null,Kt(e,t));do try{hp();break}catch(o){Rc(e,o)}while(!0);if(Wl(),W=n,To.current=r,ue!==null)throw Error(j(261));return me=null,he=0,de}function hp(){for(;ue!==null;)Oc(ue)}function yp(){for(;ue!==null&&!$d();)Oc(ue)}function Oc(e){var t=Uc(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Fc(e):ue=t,oa.current=null}function Fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cp(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ue=null;return}}else if(n=up(n,t,Me),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);de===0&&(de=5)}function Wt(e,t,n){var r=X,o=He.transition;try{He.transition=null,X=1,vp(e,t,n,r)}finally{He.transition=o,X=r}return null}function vp(e,t,n,r){do En();while(Ct!==null);if(W&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jd(e,i),e===me&&(ue=me=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kr||(Kr=!0,$c(mo,function(){return En(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=He.transition,He.transition=null;var l=X;X=1;var s=W;W|=4,oa.current=null,fp(e,n),Mc(n,e),Ff(Yi),ho=!!Qi,Yi=Qi=null,e.current=n,pp(n),Bd(),W=s,X=l,He.transition=i}else e.current=n;if(Kr&&(Kr=!1,Ct=e,Mo=o),i=e.pendingLanes,i===0&&(Mt=null),Wd(n.stateNode),Pe(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Po)throw Po=!1,e=pl,pl=null,e;return Mo&1&&e.tag!==0&&En(),i=e.pendingLanes,i&1?e===ml?ur++:(ur=0,ml=e):ur=0,At(),null}function En(){if(Ct!==null){var e=vu(Mo),t=He.transition,n=X;try{if(He.transition=null,X=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Mo=0,W&6)throw Error(j(331));var o=W;for(W|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(P=d;P!==null;){var y=P;switch(y.tag){case 0:case 11:case 15:ar(8,y,i)}var m=y.child;if(m!==null)m.return=y,P=m;else for(;P!==null;){y=P;var p=y.sibling,h=y.return;if(_c(y),y===d){P=null;break}if(p!==null){p.return=h,P=p;break}P=h}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ar(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,P=f;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,P=g;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ho(9,s)}}catch(w){oe(s,s.return,w)}if(s===l){P=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,P=k;break e}P=s.return}}if(W=o,At(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Io,e)}catch{}r=!0}return r}finally{X=n,He.transition=t}}return!1}function bs(e,t,n){t=Dn(n,t),t=vc(e,t,1),e=Pt(e,t,1),t=be(),e!==null&&(_r(e,1,t),Pe(e,t))}function oe(e,t,n){if(e.tag===3)bs(e,e,n);else for(;t!==null;){if(t.tag===3){bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Dn(n,e),e=xc(t,e,1),t=Pt(t,e,1),e=be(),t!==null&&(_r(t,1,e),Pe(t,e));break}}t=t.return}}function xp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(he&n)===n&&(de===4||de===3&&(he&130023424)===he&&500>le()-la?Kt(e,0):ia|=n),Pe(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):t=1);var n=be();e=ht(e,t),e!==null&&(_r(e,t,n),Pe(e,n))}function wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function kp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Ac(e,n)}var Uc;Uc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,sp(e,t,n);ze=!!(e.flags&131072)}else ze=!1,q&&t.flags&1048576&&Hu(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var o=_n(t,ke.current);Cn(t,n),o=ql(null,t,r,e,o,n);var i=ea();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(i=!0,ko(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xl(t),o.updater=Vo,t.stateNode=o,o._reactInternals=t,nl(t,r,e,n),t=il(null,t,r,!0,i,n)):(t.tag=0,q&&i&&$l(t),je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jp(r),e=Ke(r,e),o){case 0:t=ol(null,t,r,e,n);break e;case 1:t=ms(null,t,r,e,n);break e;case 11:t=fs(null,t,r,e,n);break e;case 14:t=ps(null,t,r,Ke(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),ol(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),ms(e,t,r,o,n);case 3:e:{if(jc(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gu(e,t),Co(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dn(Error(j(423)),t),t=gs(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(j(424)),t),t=gs(e,t,r,n,o);break e}else for(De=Tt(t.stateNode.containerInfo.firstChild),Le=t,q=!0,Je=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===o){t=yt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Ju(t),e===null&&qi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Xi(r,o)?l=null:i!==null&&Xi(r,i)&&(t.flags|=32),Sc(e,t),je(e,t,l,n),t.child;case 6:return e===null&&qi(t),null;case 13:return bc(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),fs(e,t,r,o,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,G(bo,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!_e.current){t=yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=pt(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?u.next=u:(u.next=y.next,y.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),el(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),el(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=We(o),r=r(o),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),ps(e,t,r,o,n);case 15:return wc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),io(e,t),t.tag=1,Te(r)?(e=!0,ko(t)):e=!1,Cn(t,n),yc(t,r,o),nl(t,r,o,n),il(null,t,r,!0,e,n);case 19:return Nc(e,t,n);case 22:return kc(e,t,n)}throw Error(j(156,t.tag))};function $c(e,t){return mu(e,t)}function Sp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new Sp(e,t,n,r)}function ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Tl)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ca(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case dn:return Gt(n.children,o,i,t);case zl:l=8,o|=8;break;case Ci:return e=Ve(12,n,t,o|2),e.elementType=Ci,e.lanes=i,e;case Ei:return e=Ve(13,n,t,o),e.elementType=Ei,e.lanes=i,e;case zi:return e=Ve(19,n,t,o),e.elementType=zi,e.lanes=i,e;case Js:return Qo(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ks:l=10;break e;case Gs:l=9;break e;case _l:l=11;break e;case Tl:l=14;break e;case kt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ve(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Gt(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function Qo(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Js,e.lanes=n,e.stateNode={isHidden:!1},e}function Si(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function ji(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function da(e,t,n,r,o,i,l,s,u){return e=new bp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ve(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(i),e}function Np(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bc(e){if(!e)return It;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Te(n))return Bu(e,n,t)}return t}function Vc(e,t,n,r,o,i,l,s,u){return e=da(n,r,!0,e,o,i,l,s,u),e.context=Bc(null),n=e.current,r=be(),o=Dt(n),i=pt(r,o),i.callback=t??null,Pt(n,i,o),e.current.lanes=o,_r(e,o,r),Pe(e,r),e}function Yo(e,t,n,r){var o=t.current,i=be(),l=Dt(o);return n=Bc(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(o,t,l),e!==null&&(et(e,o,l,i),no(e,o,l)),l}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ns(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fa(e,t){Ns(e,t),(e=e.alternate)&&Ns(e,t)}function Cp(){return null}var Hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function pa(e){this._internalRoot=e}Xo.prototype.render=pa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Yo(e,t,null,null)};Xo.prototype.unmount=pa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Yo(null,e,null,null)}),t[gt]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&ju(e)}};function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cs(){}function Ep(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Lo(l);i.call(d)}}var l=Vc(t,r,e,0,null,!1,!1,"",Cs);return e._reactRootContainer=l,e[gt]=l.current,vr(e.nodeType===8?e.parentNode:e),rn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Lo(u);s.call(d)}}var u=da(e,0,!1,null,null,!1,!1,"",Cs);return e._reactRootContainer=u,e[gt]=u.current,vr(e.nodeType===8?e.parentNode:e),rn(function(){Yo(t,u,n,r)}),u}function Go(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=Lo(l);s.call(u)}}Yo(t,l,e,o)}else l=Ep(n,t,e,o,r);return Lo(l)}xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Dl(t,n|1),Pe(t,le()),!(W&6)&&(Ln=le()+500,At()))}break;case 13:rn(function(){var r=ht(e,1);if(r!==null){var o=be();et(r,e,1,o)}}),fa(e,1)}};Ll=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var n=be();et(t,e,134217728,n)}fa(e,134217728)}};wu=function(e){if(e.tag===13){var t=Dt(e),n=ht(e,t);if(n!==null){var r=be();et(n,e,t,r)}fa(e,t)}};ku=function(){return X};Su=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Fi=function(e,t,n){switch(t){case"input":if(Pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Uo(r);if(!o)throw Error(j(90));qs(r),Pi(r,o)}}}break;case"textarea":tu(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};su=aa;uu=rn;var zp={usingClientEntryPoint:!1,Events:[Pr,gn,Uo,lu,au,aa]},Gn={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:Gn.bundleType,version:Gn.version,rendererPackageName:Gn.rendererPackageName,rendererConfig:Gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Gn.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Io=Gr.inject(_p),at=Gr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ma(t))throw Error(j(200));return Np(e,t,null,n)};Ie.createRoot=function(e,t){if(!ma(e))throw Error(j(299));var n=!1,r="",o=Hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=da(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,vr(e.nodeType===8?e.parentNode:e),new pa(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=fu(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return rn(e)};Ie.hydrate=function(e,t,n){if(!Ko(t))throw Error(j(200));return Go(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!ma(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Hc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Vc(t,null,e,1,n??null,o,!1,i,l),e[gt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xo(t)};Ie.render=function(e,t,n){if(!Ko(t))throw Error(j(200));return Go(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(j(40));return e._reactRootContainer?(rn(function(){Go(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Ie.unstable_batchedUpdates=aa;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ko(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Go(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Ws.exports=Ie;var Tp=Ws.exports,Es=Tp;bi.createRoot=Es.createRoot,bi.hydrateRoot=Es.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),F=(e,t)=>{const n=z.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:u,...d},y)=>z.createElement("svg",{ref:y,...Pp,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Mp(e)}`,s].join(" "),...d},[...t.map(([m,p])=>z.createElement(m,p)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=F("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=F("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=F("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=F("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=F("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=F("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=F("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=F("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=F("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=F("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=F("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=F("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=F("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=F("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=F("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=F("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=F("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=F("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=F("Keyboard",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2",key:"15u882"}],["path",{d:"M6 8h.001",key:"1ej0i3"}],["path",{d:"M10 8h.001",key:"1x2st2"}],["path",{d:"M14 8h.001",key:"1vkmyp"}],["path",{d:"M18 8h.001",key:"kfsenl"}],["path",{d:"M8 12h.001",key:"1sjpby"}],["path",{d:"M12 12h.001",key:"al75ts"}],["path",{d:"M16 12h.001",key:"931bgk"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=F("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=F("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=F("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=F("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=F("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=F("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=F("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=F("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=F("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=F("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=F("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=F("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=F("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=F("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=F("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=F("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=F("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=F("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=F("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=F("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),vl="https://jvokgylbrvlymtnlqolu.supabase.co",cm="https://jvokgylbrvlymtnlqolu.supabase.co/functions/v1/telegram-auth",un=`${vl}/functions/v1`,$t={auth:cm,getSubscriptions:`${un}/get-subscriptions`,saveSubscription:`${un}/save-subscription`,deleteSubscription:`${un}/delete-subscription`,getTemplates:`${un}/get-templates`,saveNotificationSettings:`${un}/save-notification-settings`,sendTestNotification:`${un}/send-test-notification`},dm=[{id:"t1",name:"Яндекс Плюс",price:299,color:"#FFCC00",category:"Развлечения",domain:"plus.yandex.ru"},{id:"t2",name:"СберПрайм",price:399,color:"#21A038",category:"Утилиты",domain:"sberbank.ru"},{id:"t3",name:"МТС Premium",price:299,color:"#E30611",category:"Утилиты",domain:"mts.ru"},{id:"t4",name:"Тинькофф Pro",price:399,color:"#FFDD2D",category:"Утилиты",domain:"tinkoff.ru"},{id:"t5",name:"Кинопоиск",price:269,color:"#FF6600",category:"Развлечения",domain:"kinopoisk.ru"},{id:"t6",name:"Okko",price:399,color:"#6B4EFF",category:"Развлечения",domain:"okko.tv"},{id:"t7",name:"ivi",price:399,color:"#EA003D",category:"Развлечения",domain:"ivi.ru"},{id:"t8",name:"Netflix",price:699,color:"#E50914",category:"Развлечения",domain:"netflix.com"},{id:"t9",name:"YouTube Premium",price:299,color:"#FF0000",category:"Развлечения",domain:"youtube.com"},{id:"t10",name:"Spotify",price:199,color:"#1DB954",category:"Развлечения",domain:"spotify.com"},{id:"t11",name:"Яндекс Музыка",price:249,color:"#FFCC00",category:"Развлечения",domain:"music.yandex.ru"},{id:"t12",name:"Apple Music",price:169,color:"#FA2D48",category:"Развлечения",domain:"apple.com"},{id:"t13",name:"VK Музыка",price:249,color:"#0077FF",category:"Развлечения",domain:"vk.com"},{id:"t14",name:"iCloud+",price:149,color:"#3693F3",category:"Утилиты",domain:"icloud.com"},{id:"t15",name:"Google One",price:139,color:"#4285F4",category:"Утилиты",domain:"one.google.com"},{id:"t16",name:"Telegram Premium",price:299,color:"#0088CC",category:"Утилиты",domain:"telegram.org"},{id:"t17",name:"ChatGPT Plus",price:1900,color:"#10A37F",category:"Работа",domain:"openai.com"},{id:"t18",name:"Notion",price:800,color:"#000000",category:"Работа",domain:"notion.so"}],fm=e=>({id:e.id,name:e.name,price:e.default_price,color:e.color,category:e.category,domain:e.domain||null,icon:e.icon||"📦",logo_url:e.logo_url||null,currency:e.default_currency||"RUB"}),Er=[{id:"entertainment",name:"Развлечения",color:"#EF4444"},{id:"productivity",name:"Продуктивность",color:"#22C55E"},{id:"lifestyle",name:"Лайфстайл",color:"#FBBF24"},{id:"utilities",name:"Утилиты",color:"#3B82F6"},{id:"finance",name:"Финансы",color:"#EAB308"},{id:"health",name:"Здоровье",color:"#F97316"},{id:"gaming",name:"Игры",color:"#EC4899"},{id:"other",name:"Другое",color:"#9CA3AF"}],Rn=[{value:"monthly",label:"Ежемесячно",multiplier:1,short:"мес",daysApprox:30},{value:"yearly",label:"Ежегодно",multiplier:.083,short:"год",daysApprox:365},{value:"trial",label:"Пробная",multiplier:0,short:"проба",daysApprox:0},{value:"one-time",label:"Одноразовая",multiplier:0,short:"раз",daysApprox:0}],lt=[{code:"RUB",symbol:"₽",rate:1},{code:"USD",symbol:"$",rate:96},{code:"EUR",symbol:"€",rate:104}],zs=[{value:0,label:"В день списания"},{value:1,label:"За 1 день"},{value:2,label:"За 2 дня"},{value:3,label:"За 3 дня"},{value:4,label:"За 4 дня"},{value:5,label:"За 5 дней"},{value:10,label:"За 10 дней"},{value:15,label:"За 15 дней"},{value:25,label:"За 25 дней"},{value:30,label:"За 30 дней"},{value:-1,label:"Никогда"}],uo=["#EF4444","#22C55E","#FBBF24","#3B82F6","#EAB308","#F97316","#EC4899","#9CA3AF","#F43F5E","#2563EB","#7C3AED","#06B6D4","#10B981","#84CC16","#F59E0B","#FB923C","#A78BFA","#67E8F9"],pm=["🎬","🎵","🎮","📱","🖥️","🎧","📚","☁️","💳","🛒","🏠","🚗","✈️","🍔","☕","🍕","💡","⭐","🎓","💊","🏀","🎸","📷","🎨","💼","🏋️","🔒","🔑","📦","🎯","🍿","📺","🎤","🎹","🕹️","📰","💎","🛡️","🔔","💰","🧘","🚀","🌍","❤️","🐾","🧠","🎁","📧","🏦","🛠️"],Zc=[{name:"credit-card",icon:Yc},{name:"sport",icon:Ap},{name:"bank",icon:Kp},{name:"shopping-cart",icon:om},{name:"bag",icon:rm},{name:"tv",icon:am},{name:"music",icon:Jp},{name:"gamepad",icon:Bp},{name:"cloud",icon:Up},{name:"phone",icon:Zp},{name:"wifi",icon:sm},{name:"lightning",icon:um},{name:"droplet",icon:$p},{name:"house",icon:Qp},{name:"car",icon:Op},{name:"plane",icon:em},{name:"heart",icon:Wp},{name:"pill",icon:qp},{name:"graduation",icon:Hp},{name:"briefcase",icon:Lp},{name:"lock",icon:Gp},{name:"key",icon:Yp},{name:"keyboard",icon:Xp},{name:"globe",icon:Vp},{name:"star",icon:im}],Jo=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const t=String(e).split("T")[0],[n,r,o]=t.split("-").map(Number);return!n||!r||!o?null:new Date(n,r-1,o)},qc=()=>{const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())},mm=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},ed=(e,t)=>{const n=Jo(e);if(!n)return null;const r=qc();if(t==="one-time"||t==="trial")return n>r?n:null;for(;n<=r;)switch(t){case"weekly":n.setDate(n.getDate()+7);break;case"biweekly":n.setDate(n.getDate()+14);break;case"monthly":n.setMonth(n.getMonth()+1);break;case"quarterly":n.setMonth(n.getMonth()+3);break;case"semiannual":n.setMonth(n.getMonth()+6);break;case"yearly":n.setFullYear(n.getFullYear()+1);break;default:n.setMonth(n.getMonth()+1)}return n},_s=(e,t,n,r)=>{const o=Jo(e);if(!o)return[];const i=new Date(n,r,1),l=new Date(n,r+1,0),s=[],u=(d,y)=>{switch(y){case"weekly":d.setDate(d.getDate()+7);break;case"biweekly":d.setDate(d.getDate()+14);break;case"monthly":d.setMonth(d.getMonth()+1);break;case"quarterly":d.setMonth(d.getMonth()+3);break;case"semiannual":d.setMonth(d.getMonth()+6);break;case"yearly":d.setFullYear(d.getFullYear()+1);break;case"one-time":case"trial":return;default:d.setMonth(d.getMonth()+1)}};for(;o<i;)u(o,t);for(;o<=l;)o>=i&&s.push(new Date(o)),u(o,t);return s},gm=e=>{const t=Jo(e);return t?t.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):"дата не указана"},xl=e=>{if(!e)return null;const t=Jo(e)||new Date(e),n=qc();return Math.round((t-n)/(1e3*60*60*24))},hm=e=>e===null?"дата не указана":e===0?"сегодня":e===1?"завтра":e<0?"просрочено":`через ${e} дн.`,Jt=()=>{var e;return(e=window.Telegram)==null?void 0:e.WebApp},wl=()=>{var e,t;(t=(e=Jt())==null?void 0:e.HapticFeedback)==null||t.impactOccurred("medium")},Ts=()=>{var e,t;(t=(e=Jt())==null?void 0:e.HapticFeedback)==null||t.notificationOccurred("success")},ym="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2tneWxicnZseW10bmxxb2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNjQwMzAsImV4cCI6MjA4NDg0MDAzMH0.R8mBhpBKf7LwmbOCCmfTThbfhtKNGORLzMrTR8bdf3Q",Bt={"Content-Type":"application/json",apikey:ym},Vt={async auth(e){const t=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",n=await fetch($t.auth,{method:"POST",headers:Bt,body:JSON.stringify({initData:e,timezone:t})});if(!n.ok)throw new Error("Auth failed");return n.json()},async getSubscriptions(e){const t=await fetch($t.getSubscriptions,{method:"POST",headers:Bt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to fetch");return t.json()},async saveSubscription(e,t){const n=await fetch($t.saveSubscription,{method:"POST",headers:Bt,body:JSON.stringify({userId:e,subscription:t})});if(!n.ok)throw new Error("Failed to save");return n.json()},async deleteSubscription(e,t){const n=await fetch($t.deleteSubscription,{method:"POST",headers:Bt,body:JSON.stringify({userId:e,subscriptionId:t})});if(!n.ok)throw new Error("Failed to delete");return n.json()},async getTemplates(){const e=await fetch($t.getTemplates,{method:"GET",headers:Bt});if(!e.ok)throw new Error("Failed to fetch templates");return e.json()},async saveNotificationSettings(e,t){const n=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",r=await fetch($t.saveNotificationSettings,{method:"POST",headers:Bt,body:JSON.stringify({userId:e,settings:t,timezone:n})});if(!r.ok)throw new Error("Failed to save notification settings");return r.json()},async sendTestNotification(e){const t=await fetch($t.sendTestNotification,{method:"POST",headers:Bt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to send test notification");return t.json()}},vm=({message:e,visible:t,type:n="success",onHide:r})=>{const[o,i]=z.useState(!1);return z.useEffect(()=>{if(t){i(!1);const l=setTimeout(()=>{i(!0),setTimeout(r,300)},2700);return()=>clearTimeout(l)}},[t,r]),t?a.jsxs("div",{className:`toast ${n} ${o?"leaving":""}`,children:[n==="error"?a.jsx(An,{size:18}):a.jsx(Fp,{size:18}),a.jsx("span",{children:e})]}):null},xm=({onComplete:e})=>{const[t,n]=z.useState(0),[r,o]=z.useState(0),[i,l]=z.useState(0),s=[{emoji:"👋",title:"Привет!",subtitle:"Это Subfy",description:"Сервис отслеживания подписок прямо в Telegram"},{emoji:"📊",title:"Все подписки",subtitle:"в одном месте",description:"Добавляй подписки из готовых шаблонов или создавай свои"},{emoji:"🔔",title:"Уведомления",subtitle:"о списаниях",description:"Получай напоминания за 3 дня и в день списания"}],u=m=>o(m.touches[0].clientX),d=m=>l(m.touches[0].clientX),y=()=>{if(!r||!i)return;const m=r-i;Math.abs(m)>50&&(m>0&&t<s.length-1?n(h=>h+1):m<0&&t>0&&n(h=>h-1)),o(0),l(0)};return a.jsxs("div",{className:"onboarding",children:[a.jsx("div",{className:"onboarding-slides",onTouchStart:u,onTouchMove:d,onTouchEnd:y,children:a.jsx("div",{className:"slides-track",style:{transform:`translateX(-${t*100}%)`},children:s.map((m,p)=>a.jsxs("div",{className:"slide",children:[a.jsx("div",{className:"slide-emoji",children:m.emoji}),a.jsx("h1",{className:"slide-title",children:m.title}),a.jsx("h2",{className:"slide-subtitle",children:m.subtitle}),a.jsx("p",{className:"slide-description",children:m.description})]},p))})}),a.jsxs("div",{className:"onboarding-footer",children:[a.jsx("div",{className:"dots",children:s.map((m,p)=>a.jsx("button",{className:`dot ${p===t?"active":""}`,onClick:()=>n(p)},p))}),t===s.length-1?a.jsx("button",{className:"start-btn",onClick:e,children:"Начать"}):a.jsxs("button",{className:"next-btn",onClick:()=>n(m=>m+1),children:["Далее ",a.jsx(Ze,{size:20})]})]})]})},wm=({message:e="Загрузка..."})=>a.jsx("div",{className:"loading-screen",children:a.jsxs("div",{className:"loading-content",children:[a.jsx("div",{className:"loading-logo",children:"Subfy"}),a.jsx(Xc,{className:"loading-spinner",size:32}),a.jsx("p",{className:"loading-message",children:e})]})}),Zt=({domain:e,emoji:t,color:n,size:r=32,logoUrl:o})=>{const[i,l]=z.useState(!1),[s,u]=z.useState(!1),d=o||(e?`https://logo.clearbit.com/${e}`:null);if(!d||i){if(t&&typeof t=="string"&&t.startsWith("symbol:")){const m=t.replace("symbol:",""),p=Zc.find(h=>h.name===m);if(p){const h=p.icon;return a.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,flexShrink:0},children:a.jsx(h,{size:r*.5,color:"white",strokeWidth:2})})}}return a.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n+"20",color:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,fontSize:r*.5,flexShrink:0},children:t||"📦"})}return a.jsxs("div",{className:"logo-container",style:{width:r,height:r,background:s?"white":n+"20",borderRadius:r>60?20:8,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:[a.jsx("img",{src:d,alt:"",style:{width:r,height:r,objectFit:"cover",opacity:s?1:0,transition:"opacity 0.2s"},onLoad:()=>u(!0),onError:()=>l(!0)}),!s&&!i&&a.jsx("div",{style:{fontSize:r*.5},children:t||"📦"})]})},td=({visible:e,title:t,message:n,onConfirm:r,onCancel:o})=>e?a.jsx("div",{className:"modal-overlay confirm-overlay",onClick:o,children:a.jsxs("div",{className:"confirm-modal",onClick:i=>i.stopPropagation(),children:[a.jsx("h3",{children:t}),a.jsx("p",{children:n}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"cancel-btn",onClick:o,children:"Отмена"}),a.jsx("button",{className:"delete-confirm-btn",onClick:r,children:"Удалить"})]})]})}):null,km=({subscription:e,onEdit:t,onDelete:n,currencies:r})=>{const[o,i]=z.useState(0),[l,s]=z.useState(0),[u,d]=z.useState(!1),[y,m]=z.useState(!1),p=r.find(N=>N.code===e.currency)||r[0],h=e.billing_cycle||e.billingCycle||"monthly",v=e.first_billing_date||e.next_billing_date||e.firstBillingDate,x=ed(v,h),M=xl(x),f=Rn.find(N=>N.value===h)||Rn[0],c=e.amount*((f==null?void 0:f.multiplier)||1),g=N=>{s(N.touches[0].clientX),d(!0)},k=N=>{if(!u)return;const E=l-N.touches[0].clientX;i(Math.max(0,Math.min(80,E)))},w=()=>{d(!1),o>40?i(80):i(0)},C=()=>{m(!0)},_=()=>{m(!1),i(0),n(e.id)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"sub-card-wrapper",children:[a.jsx("div",{className:"sub-card-swipe-bg",style:{opacity:o/80},children:a.jsxs("button",{className:"swipe-delete-btn",onClick:C,children:[a.jsx(Jc,{size:20}),a.jsx("span",{children:"Удалить"})]})}),a.jsxs("div",{className:"sub-card",style:{"--accent":e.color,transform:`translateX(-${o}px)`,transition:u?"none":"transform 0.2s ease"},onTouchStart:g,onTouchMove:k,onTouchEnd:w,children:[a.jsx("div",{className:"sub-card-accent"}),a.jsx("div",{className:"sub-card-content",children:a.jsxs("div",{className:"sub-card-header",children:[a.jsx(Zt,{domain:e.domain,emoji:e.icon,color:e.color,size:44,logoUrl:e.logo_url}),a.jsxs("div",{className:"sub-info",children:[a.jsx("h3",{className:"sub-name",children:e.name}),a.jsxs("div",{className:"sub-price-inline",children:[a.jsx("span",{className:"price-amount",children:Math.round(c).toLocaleString("ru-RU")}),a.jsx("span",{className:"price-currency",children:p.symbol}),a.jsx("span",{className:"price-cycle",children:"/ мес"})]})]}),a.jsx("button",{className:"sub-edit-btn",onClick:N=>{N.stopPropagation(),t(e)},children:a.jsx(Kc,{size:16})}),a.jsx("div",{className:`sub-next ${M!==null&&M<=0?"soon":M!==null&&M<=2?"warning":""}`,children:a.jsx("span",{children:hm(M)})})]})})]})]}),a.jsx(td,{visible:y,title:"Удалить подписку?",message:`Подписка «${e.name}» будет удалена безвозвратно.`,onConfirm:_,onCancel:()=>{m(!1),i(0)}})]})},Sm=({visible:e,amount:t,currency:n,currencies:r,onAmountChange:o,onCurrencyChange:i,onClose:l})=>{const[s,u]=z.useState(t?String(t):""),[d,y]=z.useState(!1),[m,p]=z.useState(!1),[h,v]=z.useState(0);if(z.useEffect(()=>{e&&(u(t?String(t):""),p(!1),y(!1))},[e,t]),!e)return null;const x=r.find(w=>w.code===n),M=w=>{var C,_,N;(N=(_=(C=window.Telegram)==null?void 0:C.WebApp)==null?void 0:_.HapticFeedback)==null||N.impactOccurred("light"),u(E=>E==="0"&&w!=="."?w:w==="."&&E.includes(".")||E.includes(".")&&E.split(".")[1].length>=2||E.replace(".","").length>=8?E:E+w),v(E=>E+1)},f=()=>{var w,C,_;(_=(C=(w=window.Telegram)==null?void 0:w.WebApp)==null?void 0:C.HapticFeedback)==null||_.impactOccurred("light"),u(N=>N.slice(0,-1)),v(N=>N+1)},c=()=>{p(!0),setTimeout(()=>l(),280)},g=()=>{const w=s||"0";o(parseFloat(w)>0?w:""),c()},k=s?`${(x==null?void 0:x.symbol)||""} ${s}`:`${(x==null?void 0:x.symbol)||""} 0`;return a.jsx("div",{className:"amount-modal-overlay",onClick:c,children:a.jsxs("div",{className:`amount-modal ${m?"closing":""}`,onClick:w=>w.stopPropagation(),children:[a.jsxs("div",{className:"amount-modal-topbar",children:[a.jsxs("div",{className:"currency-capsule-wrapper",children:[a.jsxs("button",{className:"currency-capsule",onClick:()=>y(!d),children:[n," (",x==null?void 0:x.symbol,")",a.jsx(Ze,{size:14,className:`capsule-chevron ${d?"open":""}`})]}),d&&a.jsx("div",{className:"currency-dropdown",children:r.map(w=>a.jsxs("button",{className:`currency-dropdown-item ${n===w.code?"active":""}`,onClick:()=>{i(w.code),y(!1)},children:[w.code," (",w.symbol,")"]},w.code))})]}),a.jsx("button",{className:"amount-modal-close",onClick:c,children:a.jsx(An,{size:20})})]}),a.jsxs("div",{className:"amount-display-section",children:[a.jsx("span",{className:"amount-display-label",children:"Сумма"}),a.jsx("span",{className:"amount-display-value",children:k},h)]}),a.jsx("div",{className:"numpad",children:["1","2","3","4","5","6","7","8","9",".","0","back"].map(w=>a.jsx("button",{className:`numpad-key ${w==="back"?"numpad-back":""}`,onClick:()=>w==="back"?f():M(w),children:w==="back"?a.jsx(ga,{size:24}):w},w))}),a.jsx("button",{className:"amount-done-btn",onClick:g,children:"Готово"})]})})},jm=({onClose:e,onSave:t,editData:n,templates:r,isLoading:o,defaultNotificationSettings:i,customCategories:l=[],onAddCategory:s,categories:u=Er})=>{var O,K;const[d,y]=z.useState(n?2:1),[m,p]=z.useState(""),[h,v]=z.useState("Все"),[x,M]=z.useState(!1),[f,c]=z.useState(!1),[g,k]=z.useState(!1),[w,C]=z.useState("emoji"),[_,N]=z.useState(!1),[E,R]=z.useState(!1);z.useEffect(()=>{var fe,Ae;const b=(fe=window.Telegram)==null?void 0:fe.WebApp;b&&b.expand();const se=()=>{var ie,Ye;(((ie=document.activeElement)==null?void 0:ie.tagName)==="INPUT"||((Ye=document.activeElement)==null?void 0:Ye.tagName)==="TEXTAREA")&&setTimeout(()=>{var an;(an=document.activeElement)==null||an.scrollIntoView({behavior:"smooth",block:"center"})},100)};return(Ae=window.visualViewport)==null||Ae.addEventListener("resize",se),()=>{var ie;return(ie=window.visualViewport)==null?void 0:ie.removeEventListener("resize",se)}},[]);const V=()=>{M(!0),setTimeout(()=>e(),280)},ae=u.find(b=>b.id==="other"),A=[...u.filter(b=>b.id!=="other"),...l,...ae?[ae]:[]],[D,re]=z.useState(n?{...n,firstBillingDate:(n.next_billing_date||n.first_billing_date||n.firstBillingDate||"").split("T")[0],billingCycle:n.billing_cycle||n.billingCycle||"monthly",category:n.category||"Другое",notifyEnabled:n.notify_enabled??!0}:{name:"",amount:"",currency:"RUB",billingCycle:"monthly",firstBillingDate:mm(),category:"Другое",color:"#6366f1",icon:"📦",domain:null,logo_url:null,isCustom:!0,notifyEnabled:!0}),Fe=["Все",...Er.map(b=>b.name)],xt=r.filter(b=>{const se=b.name.toLowerCase().includes(m.toLowerCase()),fe=h==="Все"||b.category===h;return se&&fe}),T=b=>{re({...D,name:b.name,color:b.color,icon:b.icon||"📦",domain:b.domain,logo_url:b.logo_url||null,category:b.category,isCustom:!1,templateId:b.id}),y(2)},I=()=>{!D.name||!D.amount||(wl(),t({...D,id:n==null?void 0:n.id,amount:parseFloat(D.amount),next_billing_date:D.firstBillingDate,first_billing_date:D.firstBillingDate,billing_cycle:D.billingCycle,notify_enabled:D.notifyEnabled}))};return a.jsxs("div",{className:"modal-overlay",onClick:V,children:[a.jsxs("div",{className:`modal subscription-modal ${x?"closing":""}`,onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("button",{className:"back-btn",onClick:()=>d===1||n?V():y(1),children:d===1||n?a.jsx(An,{size:20}):a.jsx(Qc,{size:20})}),a.jsx("h2",{children:n?"Редактировать":d===1?"Выберите сервис":"Новая подписка"}),a.jsx("div",{style:{width:32}})]}),d===1?a.jsxs("div",{className:"template-selector",children:[a.jsxs("div",{className:"template-selector-sticky",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(tm,{size:18}),a.jsx("input",{type:"text",placeholder:"Поиск сервиса...",value:m,onChange:b=>p(b.target.value)})]}),a.jsx("div",{className:"category-tabs",children:Fe.map(b=>a.jsx("button",{className:`cat-tab ${h===b?"active":""}`,onClick:()=>v(b),children:b},b))})]}),a.jsxs("div",{className:"template-selector-scroll",children:[a.jsxs("button",{className:"custom-sub-btn",onClick:()=>y(2),children:[a.jsx("div",{className:"custom-sub-icon",children:a.jsx(yl,{size:22,color:"white"})}),a.jsx("span",{children:"Своя подписка"}),a.jsx(Ze,{size:18,className:"custom-sub-chevron"})]}),a.jsx("div",{className:"template-divider",children:a.jsx("span",{children:"Или выберите из шаблонов"})}),a.jsx("div",{className:"template-grid",children:xt.map(b=>a.jsxs("button",{className:"template-item",onClick:()=>T(b),children:[a.jsx(Zt,{domain:b.domain,emoji:b.icon,color:b.color,size:48,logoUrl:b.logo_url}),a.jsx("span",{children:b.name})]},b.id))})]})]}):a.jsxs("div",{className:"subscription-form card-form",children:[a.jsxs("div",{className:`card-form-logo ${_?"scaled-up":""}`,onClick:()=>{N(!0),setTimeout(()=>c(!0),150)},children:[a.jsx(Zt,{domain:D.domain,emoji:D.icon,color:D.color,size:96,logoUrl:D.logo_url}),a.jsx("div",{className:"logo-edit-badge",children:a.jsx(Kc,{size:14})})]}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Название"}),a.jsx("input",{className:"settings-row-value-input",type:"text",value:D.name,onChange:b=>re({...D,name:b.target.value}),placeholder:"Название"})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Периодичность"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("select",{className:"native-select",value:D.billingCycle,onChange:b=>re({...D,billingCycle:b.target.value}),children:Rn.map(b=>a.jsx("option",{value:b.value,children:b.label},b.value))}),a.jsx(Ze,{size:16,className:"settings-row-chevron"})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Дата начала"}),a.jsx("input",{type:"date",className:"settings-date-input",value:D.firstBillingDate,onChange:b=>re({...D,firstBillingDate:b.target.value})})]})]}),a.jsx("div",{className:"settings-card",onClick:()=>R(!0),children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Сумма"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("span",{children:D.amount?`${(O=lt.find(b=>b.code===D.currency))==null?void 0:O.symbol} ${D.amount} (${D.currency})`:`${(K=lt.find(b=>b.code===D.currency))==null?void 0:K.symbol} 0.00 (${D.currency})`}),a.jsx(Ze,{size:16,className:"settings-row-chevron"})]})]})}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row",children:[a.jsxs("div",{className:"settings-row-left",children:[a.jsx("div",{className:"settings-row-icon",style:{background:"rgba(139, 92, 246, 0.15)",color:"#8B5CF6"},children:a.jsx(Gc,{size:16})}),a.jsx("span",{className:"settings-row-label",children:"Категория"})]}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("select",{className:"native-select",value:D.category,onChange:b=>re({...D,category:b.target.value}),children:A.map(b=>a.jsx("option",{value:b.name,children:b.name},b.id))}),a.jsx(Ze,{size:16,className:"settings-row-chevron"})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsxs("div",{className:"settings-row-left",children:[a.jsx("div",{className:"settings-row-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:a.jsx(Dp,{size:16})}),a.jsxs("div",{children:[a.jsx("span",{className:"settings-row-label",children:"Уведомления"}),a.jsx("p",{className:"settings-row-hint",children:"Настроить можно в настройках"})]})]}),a.jsxs("label",{className:"toggle",onClick:b=>b.stopPropagation(),children:[a.jsx("input",{type:"checkbox",checked:D.notifyEnabled,onChange:()=>re({...D,notifyEnabled:!D.notifyEnabled})}),a.jsx("span",{className:"toggle-slider"})]})]})]}),a.jsxs("button",{className:"save-btn",onClick:I,disabled:o||!D.name||!D.amount,children:[o?a.jsx(Xc,{className:"spin",size:20}):null,n?"Сохранить":"Добавить подписку"]})]})]}),a.jsx(Sm,{visible:E,amount:D.amount,currency:D.currency,currencies:lt,onAmountChange:b=>re({...D,amount:b}),onCurrencyChange:b=>re({...D,currency:b}),onClose:()=>R(!1)}),f&&(()=>{const b=()=>{k(!0),N(!1),setTimeout(()=>{c(!1),k(!1)},280)};let se=0,fe=0,Ae=!1;const ie=Q=>{se=Q.touches[0].clientY,fe=0;const nt=Q.currentTarget.querySelector(".logo-sheet-grid");Ae=!nt||nt.scrollTop<=0},Ye=Q=>{const nt=Q.touches[0].clientY-se;fe=nt,Ae&&nt>0&&(Q.currentTarget.style.transform=`translateY(${nt}px)`)},an=Q=>{Ae&&fe>80&&b(),Q.currentTarget.style.transform="",Q.currentTarget.style.transition="transform 0.2s ease",setTimeout(()=>{Q.currentTarget&&(Q.currentTarget.style.transition="")},200)};return a.jsx("div",{className:"logo-sheet-overlay",onClick:Q=>{Q.stopPropagation(),b()},children:a.jsxs("div",{className:`logo-sheet ${g?"closing":""}`,onClick:Q=>Q.stopPropagation(),onTouchStart:ie,onTouchMove:Ye,onTouchEnd:an,children:[a.jsx("div",{className:"logo-sheet-handle"}),a.jsx("div",{className:"logo-sheet-preview",children:a.jsx(Zt,{domain:null,emoji:D.icon,color:D.color,size:80,logoUrl:null})}),a.jsx("div",{className:"logo-sheet-colors",children:uo.slice(0,7).map(Q=>a.jsx("button",{className:`logo-color-btn ${D.color===Q?"active":""}`,style:{background:Q},onClick:()=>re({...D,color:Q,domain:null,logo_url:null})},Q))}),a.jsxs("div",{className:"logo-sheet-tabs",children:[a.jsx("button",{className:`logo-sheet-tab ${w==="photo"?"active":""}`,onClick:()=>C("photo"),children:"Фото"}),a.jsx("button",{className:`logo-sheet-tab ${w==="emoji"?"active":""}`,onClick:()=>C("emoji"),children:"Эмодзи"}),a.jsx("button",{className:`logo-sheet-tab ${w==="symbols"?"active":""}`,onClick:()=>C("symbols"),children:"Символы"})]}),a.jsx("div",{className:"logo-sheet-grid",children:w==="photo"?a.jsxs("div",{className:"logo-sheet-placeholder",children:[a.jsx(Ip,{size:32,color:"var(--text-secondary)"}),a.jsx("span",{children:"В разработке"}),a.jsx("p",{children:"Загрузка фото будет доступна в следующем обновлении"})]}):w==="emoji"?pm.map((Q,nt)=>a.jsx("button",{className:`logo-grid-item ${D.icon===Q?"active":""}`,onClick:()=>re({...D,icon:Q,domain:null,logo_url:null}),children:a.jsx("span",{className:"logo-grid-emoji",children:Q})},Q+nt)):Zc.map(Q=>a.jsx("button",{className:`logo-grid-item ${D.icon==="symbol:"+Q.name?"active":""}`,onClick:()=>re({...D,icon:"symbol:"+Q.name,domain:null,logo_url:null}),children:a.jsx(Q.icon,{size:24,color:"var(--text-primary)",strokeWidth:1.5})},Q.name))})]})})})()]})},bm=({subscriptions:e,currencies:t,onClose:n})=>{const[r,o]=z.useState(!1),[i,l]=z.useState("month"),s=()=>{o(!0),setTimeout(()=>n(),280)},u=z.useMemo(()=>{let h=0;const v={};return e.forEach(x=>{const M=Rn.find(w=>w.value===(x.billing_cycle||x.billingCycle)),f=lt.find(w=>w.code===x.currency),g=x.amount*((f==null?void 0:f.rate)||1)*((M==null?void 0:M.multiplier)||1);h+=g;const k=x.category||"Другое";v[k]=(v[k]||0)+g}),{monthly:Math.round(h),yearly:Math.round(h*12),count:e.length,categories:v}},[e]),d=z.useMemo(()=>e.map(h=>{const v=Rn.find(c=>c.value===(h.billing_cycle||h.billingCycle)),x=lt.find(c=>c.code===h.currency),f=h.amount*((x==null?void 0:x.rate)||1)*((v==null?void 0:v.multiplier)||1);return{...h,monthlyRub:f,yearlyRub:f*12}}).sort((h,v)=>v.yearlyRub-h.yearlyRub).slice(0,5),[e]),y=z.useMemo(()=>{if(i==="year"){const h=[];for(let v=0;v<12;v++){const x=new Date;x.setMonth(x.getMonth()-11+v),h.push({label:x.toLocaleDateString("ru-RU",{month:"short"}),value:u.monthly})}return h}else{const h=[];for(let v=0;v<30;v++){const x=new Date;x.setDate(x.getDate()-29+v),h.push({label:x.getDate().toString(),value:v%7===0?u.monthly/4:0})}return h}},[i,u.monthly]),m=Math.max(...y.map(h=>h.value),1),p=Object.entries(u.categories).map(([h,v])=>{var x;return{name:h,value:Math.round(v),color:((x=Er.find(M=>M.name===h))==null?void 0:x.color)||"#6B7280",percent:Math.round(v/u.monthly*100)||0}}).sort((h,v)=>v.value-h.value);return a.jsxs("div",{className:`analytics-screen screen-enter ${r?"screen-exit":""}`,children:[a.jsxs("div",{className:"analytics-header",children:[a.jsx("button",{className:"back-btn",onClick:s,children:a.jsx(ga,{size:20})}),a.jsx("h2",{children:"Аналитика подписок"}),a.jsx("div",{style:{width:32}})]}),a.jsxs("div",{className:"analytics-content",children:[a.jsxs("div",{className:"analytics-summary",children:[a.jsxs("div",{className:"summary-item",children:[a.jsxs("span",{className:"summary-value",children:[u.monthly.toLocaleString("ru-RU")," ₽"]}),a.jsx("span",{className:"summary-label",children:"в месяц"})]}),a.jsxs("div",{className:"summary-item",children:[a.jsxs("span",{className:"summary-value",children:[u.yearly.toLocaleString("ru-RU")," ₽"]}),a.jsx("span",{className:"summary-label",children:"в год"})]}),a.jsxs("div",{className:"summary-item",children:[a.jsx("span",{className:"summary-value",children:u.count}),a.jsx("span",{className:"summary-label",children:"подписок"})]})]}),a.jsxs("div",{className:"period-tabs",children:[a.jsx("button",{className:`period-tab ${i==="month"?"active":""}`,onClick:()=>l("month"),children:"Месяц"}),a.jsx("button",{className:`period-tab ${i==="year"?"active":""}`,onClick:()=>l("year"),children:"Год"})]}),a.jsxs("div",{className:"chart-section",children:[a.jsxs("h3",{children:[a.jsx(lm,{size:18})," Динамика расходов"]}),a.jsx("div",{className:"bar-chart",children:y.map((h,v)=>a.jsxs("div",{className:"bar-item",children:[a.jsx("div",{className:"bar",style:{height:`${h.value/m*100}%`}}),(i==="year"||v%5===0)&&a.jsx("span",{className:"bar-label",children:h.label})]},v))})]}),a.jsxs("div",{className:"categories-section",children:[a.jsxs("h3",{children:[a.jsx(Gc,{size:18})," Расходы по категориям"]}),a.jsxs("div",{className:"categories-chart",children:[a.jsx("div",{className:"pie-chart",children:p.map((h,v)=>a.jsx("div",{className:"pie-segment",style:{"--color":h.color,"--percent":h.percent,"--offset":p.slice(0,v).reduce((x,M)=>x+M.percent,0)}},h.name))}),a.jsx("div",{className:"categories-list",children:p.map(h=>a.jsxs("div",{className:"category-item",children:[a.jsx("div",{className:"category-dot",style:{background:h.color}}),a.jsx("span",{className:"category-name",children:h.name}),a.jsxs("span",{className:"category-value",children:[h.value.toLocaleString("ru-RU")," ₽"]}),a.jsxs("span",{className:"category-percent",children:[h.percent,"%"]})]},h.name))})]})]}),a.jsxs("div",{className:"top-section",children:[a.jsx("h3",{children:"💰 Самые дорогие подписки"}),a.jsx("div",{className:"top-list",children:d.map((h,v)=>a.jsxs("div",{className:"top-item",children:[a.jsx("span",{className:"top-rank",children:v+1}),a.jsx(Zt,{domain:h.domain,emoji:h.icon,color:h.color,size:36,logoUrl:h.logo_url}),a.jsxs("div",{className:"top-info",children:[a.jsx("span",{className:"top-name",children:h.name}),a.jsxs("span",{className:"top-monthly",children:[Math.round(h.monthlyRub).toLocaleString("ru-RU")," ₽/мес"]})]}),a.jsxs("span",{className:"top-yearly",children:[Math.round(h.yearlyRub).toLocaleString("ru-RU")," ₽/год"]})]},h.id))})]})]})]})},Nm=({visible:e,categories:t,customCategories:n,onAddCategory:r,onDeleteCategory:o,onClose:i})=>{const[l,s]=z.useState(""),[u,d]=z.useState(uo[0]),[y,m]=z.useState(!1),[p,h]=z.useState(!1),[v,x]=z.useState({}),[M,f]=z.useState(null);if(z.useEffect(()=>{e&&(h(!1),x({}))},[e]),!e)return null;const c=t,g=()=>{h(!0),setTimeout(()=>i(),280)},k=()=>{l.trim()&&(r(l.trim(),u),s(""),d(uo[0]))},w=(E,R)=>{x(V=>({...V,[E]:{...V[E],startX:R.touches[0].clientX,swiping:!0}}))},C=(E,R)=>{const V=v[E];if(!(V!=null&&V.swiping))return;const ae=V.startX-R.touches[0].clientX;x(A=>({...A,[E]:{...A[E],x:Math.max(0,Math.min(80,ae))}}))},_=E=>{const R=v[E];R&&x(V=>({...V,[E]:{...V[E],swiping:!1,x:R.x>40?80:0}}))},N=()=>{M&&(o(M.id),x(E=>{const R={...E};return delete R[M.id],R}),f(null))};return a.jsxs("div",{className:"categories-sheet-overlay",onClick:g,children:[a.jsxs("div",{className:`categories-sheet ${p?"closing":""}`,onClick:E=>E.stopPropagation(),children:[a.jsxs("div",{className:"categories-sheet-header",children:[a.jsx("h3",{children:"Категории"}),a.jsx("button",{className:"amount-modal-close",onClick:g,children:a.jsx(An,{size:20})})]}),a.jsxs("div",{className:"categories-list-wrapper",children:[a.jsx("div",{className:"settings-card",children:c.map((E,R)=>{const V=v[E.id]||{x:0,swiping:!1};return a.jsxs(Vs.Fragment,{children:[a.jsxs("div",{className:"cat-swipe-wrapper",children:[a.jsx("div",{className:"cat-swipe-bg",style:{opacity:V.x/80},children:a.jsxs("button",{className:"swipe-delete-btn",onClick:()=>f(E),children:[a.jsx(Jc,{size:18}),a.jsx("span",{children:"Удалить"})]})}),a.jsxs("div",{className:"category-list-item",style:{transform:`translateX(-${V.x}px)`,transition:V.swiping?"none":"transform 0.2s ease"},onTouchStart:ae=>w(E.id,ae),onTouchMove:ae=>C(E.id,ae),onTouchEnd:()=>_(E.id),children:[a.jsx("span",{className:"category-list-name",children:E.name}),a.jsx("div",{className:"category-color-dot",style:{background:E.color}})]})]}),R<c.length-1&&a.jsx("div",{className:"settings-row-divider"})]},E.id)})}),a.jsx("p",{className:"categories-hint",children:"Свайпните влево, чтобы удалить категорию. Подписки из удалённой категории перейдут в «Другое»."}),a.jsxs("div",{className:"new-category-row",children:[a.jsx("div",{className:"category-color-dot clickable",style:{background:u},onClick:()=>m(!y)}),a.jsx("input",{type:"text",className:"new-category-input",value:l,onChange:E=>s(E.target.value),placeholder:"Новая категория"}),a.jsx("button",{className:"new-category-add-btn",onClick:k,disabled:!l.trim(),children:"Добавить"})]})]}),y&&a.jsxs("div",{className:"color-picker-sheet",children:[a.jsx("div",{className:"color-picker-handle"}),a.jsx("h4",{children:"Выберите цвет"}),a.jsx("div",{className:"color-palette",children:uo.map(E=>a.jsx("button",{className:`color-palette-item ${u===E?"active":""}`,style:{background:E},onClick:()=>{d(E),m(!1)}},E))})]})]}),a.jsx(td,{visible:!!M,title:"Удалить категорию?",message:M?`Категория «${M.name}» будет удалена. Подписки с этой категорией станут «Другое».`:"",onConfirm:N,onCancel:()=>f(null)})]})},Cm=({user:e,appSettings:t,onUpdateSettings:n,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:l,theme:s,onToggleTheme:u,onClose:d,onSendTestNotification:y})=>{var ae;const m=Jt(),p=(ae=m==null?void 0:m.initDataUnsafe)==null?void 0:ae.user,[h,v]=z.useState(!1),[x,M]=z.useState(!1),f=()=>{v(!0),setTimeout(()=>d(),280)},[c,g]=z.useState(!1),k=(p==null?void 0:p.photo_url)||null,w=p!=null&&p.first_name?`${p.first_name}${p.last_name?" "+p.last_name:""}`:(e==null?void 0:e.first_name)||"Пользователь",C=(p==null?void 0:p.id)||(e==null?void 0:e.telegram_id)||(e==null?void 0:e.id)||"—",_=r,N=t.firstReminder||{days:1,time:"09:00"},E=t.secondReminder||{days:-1,time:"09:00"},R=(A,D)=>{n(re=>({...re,firstReminder:{...re.firstReminder||{days:1,time:"09:00"},[A]:D}}))},V=(A,D)=>{n(re=>({...re,secondReminder:{...re.secondReminder||{days:-1,time:"09:00"},[A]:D}}))};return a.jsxs("div",{className:`settings-screen screen-enter ${h?"screen-exit":""}`,children:[a.jsxs("div",{className:"settings-header",children:[a.jsx("button",{className:"back-btn",onClick:f,children:a.jsx(ga,{size:20})}),a.jsx("h2",{children:"Настройки"}),a.jsx("div",{style:{width:32}})]}),a.jsxs("div",{className:"settings-content",children:[a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"profile-avatar",children:k?a.jsx("img",{src:k,alt:"Avatar"}):a.jsx("div",{className:"avatar-placeholder",children:w.charAt(0).toUpperCase()})}),a.jsx("h3",{className:"profile-name",children:w}),a.jsxs("span",{className:"profile-id",children:["ID: ",C]})]}),a.jsx("div",{className:"settings-section-label",children:"КАТЕГОРИИ"}),a.jsx("div",{className:"settings-card",onClick:()=>g(!0),children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Категории"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("span",{children:_.length}),a.jsx(Ze,{size:16,className:"settings-row-chevron"})]})]})}),a.jsx("div",{className:"settings-section-label",children:"УВЕДОМЛЕНИЯ"}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row notification-row",children:[a.jsx("span",{className:"settings-row-label",children:"Первое уведомление"}),a.jsxs("div",{className:"notification-row-controls",children:[a.jsx("select",{className:"native-select",value:N.days,onChange:A=>R("days",parseInt(A.target.value)),children:zs.map(A=>a.jsx("option",{value:A.value,children:A.label},A.value))}),N.days!==-1&&a.jsx("input",{type:"time",className:"time-input-capsule",value:N.time,onChange:A=>R("time",A.target.value)})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row notification-row",children:[a.jsx("span",{className:"settings-row-label",children:"Второе уведомление"}),a.jsxs("div",{className:"notification-row-controls",children:[a.jsx("select",{className:"native-select",value:E.days,onChange:A=>V("days",parseInt(A.target.value)),children:zs.map(A=>a.jsx("option",{value:A.value,children:A.label},A.value))}),E.days!==-1&&a.jsx("input",{type:"time",className:"time-input-capsule",value:E.time,onChange:A=>V("time",A.target.value)})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsx("div",{className:"settings-row",children:a.jsx("button",{className:"test-notification-btn",onClick:()=>{y&&y()},children:"Тест уведомлений"})})]}),a.jsx("p",{className:"settings-hint",children:"Уведомления приходят через Telegram‑бот. Убедитесь, что бот не заблокирован и уведомления от него включены."}),a.jsx("div",{className:"settings-section-label",children:"ОФОРМЛЕНИЕ"}),a.jsx("div",{className:"settings-card",children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Тёмная тема"}),a.jsxs("label",{className:"toggle",children:[a.jsx("input",{type:"checkbox",checked:s==="dark",onChange:()=>u()}),a.jsx("span",{className:"toggle-slider"})]})]})}),a.jsxs("div",{className:"version-badge",onClick:()=>M(!0),children:[a.jsx("span",{className:"version-tag",children:"Beta 0.1.13"}),a.jsx(Ze,{size:14})]})]}),x&&a.jsx("div",{className:"modal-overlay confirm-overlay",onClick:()=>M(!1),children:a.jsxs("div",{className:"version-modal",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"version-modal-header",children:[a.jsx("h3",{children:"О приложении"}),a.jsx("button",{className:"close-btn",onClick:()=>M(!1),children:a.jsx(An,{size:18})})]}),a.jsxs("div",{className:"version-modal-body",children:[a.jsx("div",{className:"version-logo",children:"Subfy"}),a.jsx("span",{className:"version-number",children:"Beta 0.1.13"}),a.jsx("p",{className:"version-desc",children:"⚙️ Это бета‑версия приложения. Если вы заметили ошибку или баг — сообщите нам через Telegram‑бот"}),a.jsx("button",{className:"contact-btn",onClick:()=>{var D;const A=Jt();(D=A==null?void 0:A.openTelegramLink)==null||D.call(A,"https://t.me/subfy_support_bot")},children:"Написать в бот"})]})]})}),a.jsx(Nm,{visible:c,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:l,onClose:()=>g(!1)})]})},Em=({subscriptions:e,currencies:t})=>{const[n,r]=z.useState(new Date),[o,i]=z.useState(null),s=(m=>{const p=m.getFullYear(),h=m.getMonth(),v=new Date(p,h,1),x=new Date(p,h+1,0),M=[],f=v.getDay()||7;for(let c=1;c<f;c++)M.push({date:null,subscriptions:[]});for(let c=1;c<=x.getDate();c++){const g=new Date(p,h,c),k=e.filter(w=>{const C=w.first_billing_date||w.next_billing_date||w.firstBillingDate,_=w.billing_cycle||w.billingCycle||"monthly";return _s(C,_,p,h).some(E=>E.getDate()===c)});M.push({date:g,subscriptions:k})}return M})(n),u=n.toLocaleDateString("ru-RU",{month:"long",year:"numeric"}),d=z.useMemo(()=>{const m=n.getFullYear(),p=n.getMonth();return e.reduce((h,v)=>{const x=v.first_billing_date||v.next_billing_date||v.firstBillingDate,M=v.billing_cycle||v.billingCycle||"monthly",f=_s(x,M,m,p);if(f.length>0){const c=t.find(g=>g.code===v.currency)||t[0];return h+v.amount*c.rate*f.length}return h},0)},[e,n,t]),y=m=>{const p=new Date(n);p.setMonth(p.getMonth()+m),r(p),i(null)};return a.jsxs("div",{className:"calendar-view",children:[a.jsxs("div",{className:"calendar-header",children:[a.jsx("button",{onClick:()=>y(-1),children:a.jsx(Qc,{size:20})}),a.jsxs("div",{className:"calendar-title",children:[a.jsx("h3",{children:u}),a.jsxs("span",{className:"month-total",children:[Math.round(d).toLocaleString("ru-RU")," ₽"]})]}),a.jsx("button",{onClick:()=>y(1),children:a.jsx(Ze,{size:20})})]}),a.jsx("div",{className:"calendar-weekdays",children:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(m=>a.jsx("div",{className:"weekday",children:m},m))}),a.jsx("div",{className:"calendar-grid",children:s.map((m,p)=>{var v,x,M;const h=((v=o==null?void 0:o.date)==null?void 0:v.getTime())===((x=m.date)==null?void 0:x.getTime());return a.jsx("div",{className:`calendar-day ${m.date?"":"empty"} ${m.subscriptions.length>0?"has-subs":""} ${((M=m.date)==null?void 0:M.toDateString())===new Date().toDateString()?"today":""} ${h?"selected":""}`,onClick:()=>m.date&&m.subscriptions.length>0&&i(h?null:m),children:m.date&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"day-number",children:m.date.getDate()}),m.subscriptions.length>0&&a.jsx("div",{className:"day-subs",children:m.subscriptions.slice(0,3).map(f=>a.jsx("div",{className:"day-sub-dot",style:{background:f.color}},f.id))})]})},p)})}),o&&a.jsxs("div",{className:"day-details",children:[a.jsxs("div",{className:"day-details-header",children:[a.jsx("h4",{children:gm(o.date)}),a.jsx("button",{className:"close-details",onClick:()=>i(null),children:a.jsx(An,{size:18})})]}),a.jsx("div",{className:"day-details-list",children:o.subscriptions.map(m=>{const p=t.find(h=>h.code===m.currency)||t[0];return a.jsxs("div",{className:"day-detail-item",children:[a.jsx(Zt,{domain:m.domain,emoji:m.icon,color:m.color,size:36,logoUrl:m.logo_url}),a.jsxs("div",{className:"detail-info",children:[a.jsx("span",{className:"detail-name",children:m.name}),a.jsx("span",{className:"detail-category",children:m.category})]}),a.jsxs("span",{className:"detail-amount",children:[m.amount.toLocaleString("ru-RU")," ",p.symbol]})]},m.id)})})]})]})};function zm(){const[e,t]=z.useState("loading"),[n,r]=z.useState(null),[o,i]=z.useState(()=>{const S=localStorage.getItem("subfy_theme");if(S)return S;const L=Jt();return(L==null?void 0:L.colorScheme)||"dark"}),[l,s]=z.useState("home"),[u,d]=z.useState(!1),[y,m]=z.useState(null),[p,h]=z.useState([]),[v,x]=z.useState(!1),[M,f]=z.useState(null),[c,g]=z.useState(!1),[k,w]=z.useState(!1),[C,_]=z.useState(!1),[N,E]=z.useState({visible:!1,message:"",type:"success"}),[R,V]=z.useState([]),[ae,A]=z.useState({}),[D,re]=z.useState(()=>{const S=localStorage.getItem("subfy_settings"),L={notificationsEnabled:!0,firstReminder:{days:1,time:"09:00"},secondReminder:{days:-1,time:"09:00"},categoryOrder:null,hiddenCategories:[]};return S?{...L,...JSON.parse(S)}:L}),[Fe,xt]=z.useState(()=>{const S=localStorage.getItem("subfy_custom_categories");return S?JSON.parse(S):[]}),[T,I]=z.useState(()=>{const S=localStorage.getItem("subfy_deleted_default_categories");return S?JSON.parse(S):[]}),O=(S,L="#EF4444")=>{const U={id:`custom-${Date.now()}`,name:S,color:L,isCustom:!0};xt(H=>{const $=[...H,U];return localStorage.setItem("subfy_custom_categories",JSON.stringify($)),$})},K=S=>{const L=Fe.some($=>$.id===S),H=[...Er,...Fe].find($=>$.id===S);L?xt($=>{const Y=$.filter(Ue=>Ue.id!==S);return localStorage.setItem("subfy_custom_categories",JSON.stringify(Y)),Y}):I($=>{const Y=[...$,S];return localStorage.setItem("subfy_deleted_default_categories",JSON.stringify(Y)),Y}),H&&H.name!=="Другое"&&h($=>$.map(Y=>Y.category===H.name?{...Y,category:"Другое"}:Y))},b=z.useMemo(()=>R.length>0?R.map(fm):dm,[R]),se=z.useMemo(()=>[...Er.filter(S=>!T.includes(S.id)),...Fe],[Fe,T]),fe=z.useMemo(()=>{const S=D.categoryOrder||se.map($=>$.id),L=S.map($=>se.find(Y=>Y.id===$)).filter(Boolean);se.forEach($=>{S.includes($.id)||L.push($)});const U={};L.forEach($=>{const Y=p.filter(Ue=>Ue.category===$.name);Y.length>0&&(U[$.name]={...$,subscriptions:Y})});const H=p.filter($=>!se.some(Y=>Y.name===$.category));return H.length>0&&(U["Без категории"]={id:"uncategorized",name:"Без категории",color:"#6B7280",subscriptions:H}),U},[p,se,D]);z.useEffect(()=>{localStorage.setItem("subfy_settings",JSON.stringify(D)),n!=null&&n.id&&!c&&vl&&Vt.saveNotificationSettings(n.id,D).catch(()=>{})},[D]),z.useEffect(()=>{localStorage.setItem("subfy_theme",o)},[o]),z.useEffect(()=>{var L,U,H,$;const S=Jt();if(S){S.ready(),S.expand(),S.requestFullscreen&&S.requestFullscreen(),S.disableVerticalSwipes&&S.disableVerticalSwipes();const Y=()=>{var Un,$n,Bn,va;const Ue=((Un=S.safeAreaInset)==null?void 0:Un.top)||0,Ut=(($n=S.safeAreaInset)==null?void 0:$n.bottom)||0,Se=((Bn=S.contentSafeAreaInset)==null?void 0:Bn.top)||0,Dr=((va=S.contentSafeAreaInset)==null?void 0:va.bottom)||0;document.documentElement.style.setProperty("--tg-safe-area-top",`${Ue}px`),document.documentElement.style.setProperty("--tg-safe-area-bottom",`${Ut}px`),document.documentElement.style.setProperty("--tg-content-safe-area-top",`${Se}px`),document.documentElement.style.setProperty("--tg-content-safe-area-bottom",`${Dr}px`)};Y(),(L=S.onEvent)==null||L.call(S,"viewportChanged",Y),(U=S.onEvent)==null||U.call(S,"safeAreaChanged",Y),(H=S.onEvent)==null||H.call(S,"contentSafeAreaChanged",Y),($=S.onEvent)==null||$.call(S,"fullscreenChanged",Y)}Ae()},[]);const Ae=async()=>{try{const S=localStorage.getItem("subfy_templates");if(S)try{V(JSON.parse(S))}catch{}const L=Jt(),U=L==null?void 0:L.initData,H=localStorage.getItem("subfy_onboarding_complete");if(!U||!vl){g(!0);const Ut=localStorage.getItem("subfy_subscriptions");Ut&&h(JSON.parse(Ut)),r({id:"dev-user",first_name:"Developer"}),t(H?"main":"onboarding"),Vt.getTemplates().then(({templates:Se})=>{Se&&(V(Se),localStorage.setItem("subfy_templates",JSON.stringify(Se)))}).catch(()=>{});return}const[$,Y]=await Promise.all([Vt.auth(U),Vt.getTemplates().catch(()=>({templates:null}))]);Y.templates&&(V(Y.templates),localStorage.setItem("subfy_templates",JSON.stringify(Y.templates))),r($.user);const Ue=$.user;if(Ue){const Ut=Se=>Se?Se.substring(0,5):"09:00";re(Se=>{var Dr,Un,$n,Bn;return{...Se,notificationsEnabled:Ue.notifications_enabled??Se.notificationsEnabled,firstReminder:{days:Ue.first_reminder_days??((Dr=Se.firstReminder)==null?void 0:Dr.days)??1,time:Ut(Ue.first_reminder_time)||((Un=Se.firstReminder)==null?void 0:Un.time)||"09:00"},secondReminder:{days:Ue.second_reminder_days??(($n=Se.secondReminder)==null?void 0:$n.days)??-1,time:Ut(Ue.second_reminder_time)||((Bn=Se.secondReminder)==null?void 0:Bn.time)||"09:00"}}})}h($.subscriptions||[]),t(H?"main":"onboarding")}catch(S){console.error("Init error:",S),g(!0);const L=localStorage.getItem("subfy_subscriptions");L&&h(JSON.parse(L)),r({id:"dev-user",first_name:"User"});const U=localStorage.getItem("subfy_onboarding_complete");t(U?"main":"onboarding")}},ie=(S,L="success")=>{E({visible:!0,message:S,type:L})},Ye=async S=>{x(!0);try{if(!c&&(n!=null&&n.id)){const{subscription:L}=await Vt.saveSubscription(n.id,S);h(y?U=>U.map(H=>H.id===L.id?L:H):U=>[L,...U])}else{const L={...S,id:(y==null?void 0:y.id)||`local-${Date.now()}`};h(y?U=>{const H=U.map($=>$.id===L.id?L:$);return localStorage.setItem("subfy_subscriptions",JSON.stringify(H)),H}:U=>{const H=[L,...U];return localStorage.setItem("subfy_subscriptions",JSON.stringify(H)),H})}d(!1),ie(y?"Подписка сохранена":"Подписка добавлена"),Ts(),m(null)}catch(L){console.error("Save error:",L),ie("Ошибка сохранения","error")}finally{x(!1)}},an=async S=>{try{!c&&(n!=null&&n.id)&&await Vt.deleteSubscription(n.id,S),h(L=>{const U=L.filter(H=>H.id!==S);return localStorage.setItem("subfy_subscriptions",JSON.stringify(U)),U})}catch(L){console.error("Delete error:",L)}},Q=async()=>{if(!(n!=null&&n.id)||c){ie("Недоступно в режиме разработки","error");return}try{await Vt.sendTestNotification(n.id),Ts(),ie("Тестовое уведомление отправлено!")}catch(S){console.error("Test notification error:",S),ie("Не удалось отправить уведомление","error")}},nt=()=>{localStorage.setItem("subfy_onboarding_complete","true"),t("main")},ha=z.useMemo(()=>{let S=0;return p.forEach(L=>{const U=Rn.find(Y=>Y.value===(L.billing_cycle||L.billingCycle)),H=lt.find(Y=>Y.code===L.currency),$=L.amount*((H==null?void 0:H.rate)||1);S+=$*((U==null?void 0:U.multiplier)||1)}),{monthly:Math.round(S),yearly:Math.round(S*12)}},[p]),ya=z.useMemo(()=>p.map(S=>({...S,nextDate:ed(S.first_billing_date||S.next_billing_date||S.firstBillingDate,S.billing_cycle||S.billingCycle)})).filter(S=>{if(!S.nextDate)return!1;const L=xl(S.nextDate);return L!==null&&L>=0&&L<=3}).sort((S,L)=>S.nextDate-L.nextDate),[p]),nd={firstReminder:D.firstReminder||{days:1,time:"09:00"},secondReminder:D.secondReminder||{days:-1,time:"09:00"}};return e==="loading"?a.jsx(wm,{message:"Подключение..."}):e==="onboarding"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Ps}),a.jsx(xm,{onComplete:nt})]}):a.jsxs("div",{className:`app ${o}`,children:[a.jsx("style",{children:Ps}),k&&a.jsx("div",{className:"screen-overlay",children:a.jsx(bm,{subscriptions:p,currencies:lt,onClose:()=>w(!1)})}),C&&a.jsx("div",{className:"screen-overlay",children:a.jsx(Cm,{user:n,appSettings:D,onUpdateSettings:re,categories:se,customCategories:Fe,onAddCategory:O,onDeleteCategory:K,theme:o,onToggleTheme:()=>i(o==="dark"?"light":"dark"),onClose:()=>_(!1),onSendTestNotification:Q})}),a.jsxs("header",{className:"app-header",children:[a.jsx("span",{className:"logo",children:"Subfy"}),a.jsxs("div",{className:"header-actions",children:[a.jsx("button",{className:"icon-btn",onClick:()=>_(!0),children:a.jsx(nm,{size:20})}),a.jsx("button",{className:"icon-btn primary",onClick:()=>{wl(),m(null),d(!0)},children:a.jsx(yl,{size:20})})]})]}),a.jsxs("div",{className:"stats-card",onClick:()=>w(!0),children:[a.jsxs("div",{className:"stats-main",children:[a.jsx("span",{className:"stats-amount",children:ha.monthly.toLocaleString("ru-RU")}),a.jsx("span",{className:"stats-currency",children:"₽"}),a.jsx("p",{className:"stats-label",children:"в месяц"})]}),a.jsx("div",{className:"stats-yearly",children:a.jsxs("span",{children:[ha.yearly.toLocaleString("ru-RU")," ₽ в год"]})}),a.jsx("div",{className:"stats-arrow",children:a.jsx(Ze,{size:20})})]}),a.jsxs("div",{className:"view-tabs",children:[a.jsxs("button",{className:`view-tab ${l==="home"?"active":""}`,onClick:()=>s("home"),children:[a.jsx(Yc,{size:18}),"Подписки"]}),a.jsxs("button",{className:`view-tab ${l==="calendar"?"active":""}`,onClick:()=>s("calendar"),children:[a.jsx(Rp,{size:18}),"Календарь"]})]}),a.jsx("div",{className:"content",children:l==="home"?a.jsxs(a.Fragment,{children:[ya.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"section-header",children:a.jsx("h2",{className:"section-title",children:"Ближайшие списания"})}),a.jsx("div",{className:"upcoming-list",children:ya.map(S=>{const L=lt.find($=>$.code===S.currency),U=xl(S.nextDate),H=U===0?"Сегодня":U===1?"Завтра":`Через ${U} дн.`;return a.jsxs("div",{className:`upcoming-item ${U===0?"today":""}`,children:[a.jsx(Zt,{domain:S.domain,emoji:S.icon,color:S.color,size:36,logoUrl:S.logo_url}),a.jsxs("div",{className:"upcoming-info",children:[a.jsx("div",{className:"upcoming-name",children:S.name}),a.jsx("div",{className:"upcoming-date",children:H})]}),a.jsxs("div",{className:"upcoming-amount",children:[S.amount," ",L==null?void 0:L.symbol]})]},S.id)})})]}),a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{className:"section-title",children:"Все подписки"}),a.jsx("span",{className:"section-count",children:p.length})]}),p.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"📦"}),a.jsx("h3",{className:"empty-title",children:"Нет подписок"}),a.jsx("p",{className:"empty-text",children:"Добавьте первую подписку"}),a.jsxs("button",{className:"empty-btn",onClick:()=>{wl(),d(!0)},children:[a.jsx(yl,{size:20}),"Добавить"]})]}):Object.entries(fe).map(([S,L])=>a.jsxs("div",{className:"category-group",children:[a.jsxs("button",{className:"category-group-header",onClick:()=>A(U=>({...U,[S]:!U[S]})),children:[a.jsx("div",{className:"category-group-dot",style:{background:L.color}}),a.jsx("span",{className:"category-group-name",children:S}),a.jsx("span",{className:"category-group-count",children:L.subscriptions.length}),a.jsx(Ze,{size:16,className:`category-group-chevron ${ae[S]?"":"expanded"}`})]}),!ae[S]&&a.jsx("div",{className:"subscriptions-list",children:L.subscriptions.map(U=>a.jsx(km,{subscription:U,onEdit:H=>{m(H),d(!0)},onDelete:an,currencies:lt},U.id))})]},S))]}):a.jsx(Em,{subscriptions:p,currencies:lt})}),u&&a.jsx(jm,{onClose:()=>{d(!1),m(null)},onSave:Ye,editData:y,templates:b,isLoading:v,defaultNotificationSettings:nd,customCategories:Fe,onAddCategory:O,categories:se}),a.jsx(vm,{message:N.message,visible:N.visible,type:N.type,onHide:()=>E({...N,visible:!1})})]})}const Ps=`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    --tg-safe-area-top: 0px;
    --tg-safe-area-bottom: 0px;
    --tg-content-safe-area-top: 0px;
    --tg-content-safe-area-bottom: 0px;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg-primary);
    overscroll-behavior: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .app {
    --bg-primary: #0a0a0a;
    --bg-secondary: #141414;
    --bg-tertiary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --accent: #6366f1;
    --accent-secondary: #8b5cf6;
    --border: #222222;
    --danger: #ef4444;
    --success: #10b981;
    
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow: hidden;
  }

  .app.light {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --bg-tertiary: #eeeeee;
    --text-primary: #0a0a0a;
    --text-secondary: #666666;
    --border: #e0e0e0;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--success);
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 2000;
    animation: toastIn 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }

  .toast.error { background: var(--danger); }

  .toast.leaving {
    animation: toastOut 0.3s ease forwards;
  }

  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @keyframes toastOut {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(20px); }
  }

  /* Loading Screen */
  .loading-screen {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
  }

  .loading-content { text-align: center; }

  .loading-logo {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
  }

  .loading-spinner {
    animation: spin 1s linear infinite;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .loading-message { color: var(--text-secondary); font-size: 0.875rem; }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spin { animation: spin 1s linear infinite; }

  /* Onboarding */
  .onboarding {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  .onboarding-slides {
    flex: 1;
    overflow: hidden;
    padding-top: calc(var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
  }

  .slides-track {
    display: flex;
    height: 100%;
    transition: transform 0.3s ease;
  }

  .slide {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 32px;
    text-align: center;
  }

  .slide-emoji { font-size: 80px; margin-bottom: 32px; }
  .slide-title { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
  .slide-subtitle { font-size: 1.5rem; font-weight: 600; color: var(--accent); margin-bottom: 16px; }
  .slide-description { font-size: 1rem; color: var(--text-secondary); max-width: 280px; line-height: 1.5; }

  .onboarding-footer {
    padding: 24px 32px;
    padding-bottom: calc(24px + var(--tg-safe-area-bottom));
  }

  .dots { display: flex; justify-content: center; gap: 8px; margin-bottom: 24px; }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: var(--border);
    cursor: pointer;
    transition: all 0.2s;
  }

  .dot.active {
    width: 24px;
    border-radius: 4px;
    background: var(--accent);
  }

  .next-btn, .start-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  .next-btn { background: var(--bg-secondary); color: var(--text-primary); }
  .start-btn { background: var(--accent); color: white; }

  /* Header */
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: calc(12px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    background: var(--bg-primary);
    flex-shrink: 0;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header-actions { display: flex; gap: 8px; }

  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .icon-btn:active { transform: scale(0.95); }
  .icon-btn.primary { background: var(--accent); color: white; }
  .icon-btn.delete:active { background: var(--danger); color: white; }

  /* Stats Card */
  .stats-card {
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    border-radius: 20px;
    padding: 20px;
    margin: 0 16px 16px;
    color: white;
    flex-shrink: 0;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
  }

  .stats-card:active { transform: scale(0.98); }

  .stats-main { text-align: center; margin-bottom: 8px; }
  .stats-amount { font-size: 2.5rem; font-weight: 800; line-height: 1; }
  .stats-currency { font-size: 1.25rem; font-weight: 600; opacity: 0.8; margin-left: 4px; }
  .stats-label { font-size: 0.875rem; opacity: 0.8; margin-top: 4px; }

  .stats-yearly {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .stats-arrow {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
  }

  /* Tabs */
  .view-tabs {
    display: flex;
    gap: 8px;
    margin: 0 16px 16px;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .view-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .view-tab.active { background: var(--accent); color: white; }

  /* Content */
  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 16px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    -webkit-overflow-scrolling: touch;
  }

  /* Sections */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .section-title { font-size: 1rem; font-weight: 700; }

  .section-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    padding: 4px 10px;
    border-radius: 20px;
  }

  /* Upcoming List */
  .upcoming-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }

  .upcoming-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--bg-secondary);
    border-radius: 12px;
  }

  .upcoming-item.today { border-left: 3px solid var(--danger); }

  .upcoming-info { flex: 1; min-width: 0; }
  .upcoming-name { font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .upcoming-date { font-size: 0.75rem; color: var(--text-secondary); }
  .upcoming-amount { font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }

  /* Category Groups */
  .category-group { margin-bottom: 12px; }

  .category-group-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: none;
    border-radius: 12px;
    color: var(--text-primary);
    cursor: pointer;
    margin-bottom: 8px;
  }

  .category-group-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-group-name {
    flex: 1;
    text-align: left;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .category-group-count {
    font-size: 0.75rem;
    color: var(--text-secondary);
    padding: 2px 8px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .category-group-chevron {
    color: var(--text-secondary);
    transition: transform 0.2s;
    transform: rotate(0deg);
  }

  .category-group-chevron.expanded {
    transform: rotate(90deg);
  }

  /* Subscription Cards with Swipe */
  .subscriptions-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sub-card-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
  }

  .sub-card-swipe-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    background: var(--danger);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 16px 16px 0;
  }

  .swipe-delete-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: white;
    background: none;
    border: none;
    font-size: 0.625rem;
    font-weight: 600;
  }

  .sub-card {
    background: var(--bg-secondary);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    position: relative;
    z-index: 1;
  }

  .sub-card-accent {
    width: 4px;
    background: var(--accent);
    flex-shrink: 0;
  }

  .sub-card-content {
    flex: 1;
    padding: 14px;
    min-width: 0;
  }

  .sub-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sub-info { flex: 1; min-width: 0; }
  .sub-name { font-size: 0.9375rem; font-weight: 700; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .sub-price-inline {
    display: flex;
    align-items: baseline;
    gap: 2px;
    font-size: 0.8125rem;
    color: var(--text-secondary);
  }

  .sub-price-inline .price-amount { font-weight: 700; color: var(--text-primary); }

  .sub-edit-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s;
  }

  .sub-edit-btn:active { background: var(--accent); color: white; }

  .sub-next {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 6px 10px;
    border-radius: 20px;
    flex-shrink: 0;
  }

  .sub-next.warning { background: rgba(245, 158, 11, 0.12); color: #F59E0B; }
  .sub-next.soon { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

  /* Confirm Modal */
  .confirm-modal {
    background: var(--bg-secondary);
    border-radius: 20px;
    padding: 24px;
    width: calc(100% - 48px);
    max-width: 320px;
    text-align: center;
    animation: confirmPopIn 0.2s ease;
  }

  @keyframes confirmPopIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  .confirm-modal h3 { font-size: 1.125rem; font-weight: 700; margin-bottom: 8px; }
  .confirm-modal p { color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 20px; }

  .confirm-actions { display: flex; gap: 12px; }

  .cancel-btn, .delete-confirm-btn {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .cancel-btn { background: var(--bg-tertiary); color: var(--text-primary); }
  .delete-confirm-btn { background: var(--danger); color: white; }

  /* Empty State */
  .empty-state { text-align: center; padding: 48px 32px; }
  .empty-icon { font-size: 3rem; margin-bottom: 16px; }
  .empty-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 8px; }
  .empty-text { color: var(--text-secondary); margin-bottom: 20px; font-size: 0.875rem; }

  .empty-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: stretch;
    justify-content: center;
    z-index: 1000;
  }

  .modal-overlay.confirm-overlay {
    align-items: center;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal {
    background: var(--bg-primary);
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: slideUp 0.3s ease;
  }

  .modal.closing {
    animation: slideDown 0.3s ease forwards;
  }

  .subscription-modal {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    height: 100vh;
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes slideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  /* Screen transitions */
  @keyframes screenSlideIn {
    from { transform: translateX(100%); opacity: 0.8; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes screenSlideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0.8; }
  }

  .screen-overlay {
    position: fixed;
    inset: 0;
    z-index: 900;
  }

  .screen-enter {
    animation: screenSlideIn 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .screen-exit {
    animation: screenSlideOut 0.3s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    padding-top: calc(16px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--bg-primary);
    z-index: 10;
    flex-shrink: 0;
  }

  .modal-header h2 { font-size: 1rem; font-weight: 700; }

  .back-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Template Selector */
  .template-selector {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  .template-selector-sticky {
    padding: 16px 16px 0;
    flex-shrink: 0;
  }

  .template-selector-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    -webkit-overflow-scrolling: touch;
  }

  .custom-sub-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: var(--bg-secondary);
    border: 2px dashed var(--border);
    border-radius: 14px;
    cursor: pointer;
    margin-bottom: 16px;
    color: var(--text-primary);
    transition: all 0.2s;
  }

  .custom-sub-btn:active { transform: scale(0.98); }

  .custom-sub-btn span {
    flex: 1;
    text-align: left;
    font-weight: 600;
    font-size: 0.9375rem;
  }

  .custom-sub-icon {
    width: 40px;
    height: 40px;
    background: var(--accent);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .custom-sub-chevron {
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .template-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .template-divider::before,
  .template-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--bg-secondary);
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .search-box input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: var(--text-primary);
    outline: none;
  }

  .search-box svg { color: var(--text-secondary); flex-shrink: 0; }

  .category-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 8px;
    -webkit-overflow-scrolling: touch;
  }

  .category-tabs::-webkit-scrollbar { display: none; }

  .cat-tab {
    padding: 8px 14px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .cat-tab.active { background: var(--accent); color: white; }

  .template-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (min-width: 480px) {
    .template-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (min-width: 768px) {
    .template-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .template-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px 8px;
    background: var(--bg-secondary);
    border: 2px solid transparent;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .template-item:active { transform: scale(0.97); }

  .template-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .template-item span { font-size: 0.875rem; font-weight: 600; text-align: center; line-height: 1.3; color: var(--text-primary); }

  /* Subscription Form */
  .subscription-form {
    padding: 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    width: 100%;
    max-width: 100%;
  }

  .form-preview {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 14px;
    margin-bottom: 20px;
  }

  .preview-info h3 { font-size: 1.125rem; font-weight: 700; }
  .preview-info p { color: var(--text-secondary); font-size: 0.875rem; }

  .form-section { margin-bottom: 16px; width: 100%; }

  .form-section label {
    display: block;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
  }

  .form-section input,
  .form-section select {
    width: 100%;
    padding: 12px 14px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 12px;
    font-size: 1rem;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
  }

  .form-section input:focus,
  .form-section select:focus { border-color: var(--accent); }

  /* Date input fix for iOS */
  .form-section input[type="date"] {
    -webkit-appearance: none;
    appearance: none;
    min-height: 44px;
    max-height: 48px;
    line-height: 1.2;
  }

  .form-section input[type="date"]::-webkit-date-and-time-value {
    text-align: left;
  }

  .form-row { display: flex; gap: 12px; }
  .flex-1 { flex: 1; }

  /* Amount input with compact currency selector */
  .amount-row {
    display: flex;
    gap: 10px;
    align-items: stretch;
  }

  .amount-input {
    flex: 1;
    padding: 16px 18px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 14px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s;
  }

  .amount-input:focus { border-color: var(--accent); }
  .amount-input::placeholder { color: var(--text-secondary); font-weight: 500; }

  .currency-selector-compact {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .currency-btn-sm {
    padding: 8px 12px;
    border: 1.5px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
  }

  .currency-btn-sm.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent);
  }

  .currency-selector { display: flex; gap: 8px; }

  .currency-btn {
    flex: 1;
    padding: 12px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    cursor: pointer;
  }

  .currency-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .cycle-selector-main {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  .cycle-btn {
    flex: 1;
    padding: 12px 8px;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 10px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .cycle-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .other-period-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 14px;
    background: transparent;
    border: none;
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }

  .other-period-link.selected { color: var(--success); }

  .settings-row-hint {
    font-size: 0.6875rem;
    color: var(--text-secondary);
    margin: 2px 0 0;
    font-weight: 400;
    line-height: 1.3;
  }

  .custom-category-input {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .custom-category-input input {
    flex: 1;
    padding: 10px 14px;
    background: var(--bg-secondary);
    border: 2px solid var(--border);
    border-radius: 10px;
    font-size: 0.875rem;
    color: var(--text-primary);
    outline: none;
  }

  .custom-category-input input:focus { border-color: var(--accent); }

  .add-category-btn {
    padding: 10px 14px;
    background: var(--accent);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-category-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Notification Section */
  .notification-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .notification-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 0.875rem;
  }

  .toggle {
    position: relative;
    width: 48px;
    height: 28px;
    display: block;
  }

  .toggle input { opacity: 0; width: 0; height: 0; }

  .toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: var(--border);
    border-radius: 28px;
    transition: 0.3s;
  }

  .toggle-slider:before {
    content: '';
    position: absolute;
    height: 22px;
    width: 22px;
    left: 3px;
    bottom: 3px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }

  .toggle input:checked + .toggle-slider { background: var(--accent); }
  .toggle input:checked + .toggle-slider:before { transform: translateX(20px); }

  .form-section.compact { margin-bottom: 12px; }
  .form-section.compact label { margin-bottom: 6px; }

  .reminder-selector, .time-selector {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .reminder-btn, .time-btn {
    padding: 8px 12px;
    border: 2px solid var(--border);
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .reminder-btn.active, .time-btn.active { border-color: var(--accent); background: rgba(99, 102, 241, 0.1); }

  .notification-summary {
    margin-top: 12px;
    padding: 10px 12px;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }


  .form-logo-btn {
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
  }

  .logo-edit-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 2px solid var(--bg-primary);
  }

  .logo-picker {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .upload-photo-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    background: var(--bg-tertiary);
    border: 2px dashed var(--border);
    border-radius: 10px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    cursor: not-allowed;
    opacity: 0.6;
    margin-top: 12px;
  }

  .badge-dev {
    font-size: 0.625rem;
    padding: 2px 6px;
    background: var(--accent);
    color: white;
    border-radius: 4px;
    font-weight: 700;
  }

  .save-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
  }

  .save-btn:disabled { opacity: 0.6; }

  /* =============================================
     CARD-BASED FORM LAYOUT
     ============================================= */
  .card-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .card-form-logo {
    position: relative;
    cursor: pointer;
    margin: 8px 0 4px;
    transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .card-form-logo.scaled-up {
    transform: scale(1.15);
  }

  .card-form-logo .logo-edit-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 26px;
    height: 26px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: 2px solid var(--bg-primary);
  }

  /* Logo Editor Bottom Sheet */
  .logo-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1200;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .logo-sheet {
    width: 100%;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 12px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    max-height: 65vh;
    display: flex;
    flex-direction: column;
  }

  .logo-sheet.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .logo-sheet-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .logo-sheet-preview {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  .logo-sheet-colors {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .logo-color-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s;
  }

  .logo-color-btn.active {
    border-color: white;
    transform: scale(1.15);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
  }

  .logo-color-btn:active {
    transform: scale(0.9);
  }

  .logo-sheet-tabs {
    display: flex;
    gap: 0;
    background: var(--bg-secondary);
    border-radius: 10px;
    padding: 3px;
    margin-bottom: 16px;
  }

  .logo-sheet-tab {
    flex: 1;
    padding: 8px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .logo-sheet-tab.active {
    background: var(--bg-primary);
    color: var(--text-primary);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .logo-sheet-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    overflow-y: auto;
    flex: 1;
    padding-bottom: 8px;
  }

  .logo-grid-item {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .logo-grid-item.active {
    border-color: var(--accent);
    background: rgba(99, 102, 241, 0.15);
  }

  .logo-grid-item:active {
    transform: scale(0.93);
  }

  .logo-grid-emoji {
    font-size: 1.5rem;
  }

  .logo-sheet-placeholder {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 32px 16px;
    text-align: center;
  }

  .logo-sheet-placeholder span {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .logo-sheet-placeholder p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    opacity: 0.7;
    margin: 0;
  }

  .settings-card {
    width: 100%;
    background: var(--bg-secondary);
    border-radius: 14px;
    overflow: hidden;
  }

  .settings-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    min-height: 48px;
    cursor: pointer;
    gap: 12px;
  }

  .settings-row-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .settings-row-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .settings-row-label {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .settings-row-value {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-secondary);
    font-size: 0.9375rem;
    min-width: 0;
  }

  .settings-row-value span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .native-select {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.9375rem;
    font-family: inherit;
    font-weight: 500;
    padding: 0;
    outline: none;
    cursor: pointer;
    text-align: right;
    direction: rtl;
  }

  .native-select option {
    direction: ltr;
    color: #000;
    background: #fff;
  }

  .settings-row-value-input {
    text-align: right;
    border: none;
    background: transparent;
    padding: 0;
    font-size: 0.9375rem;
    color: var(--text-primary);
    outline: none;
    width: 100%;
    min-width: 0;
    font-family: inherit;
  }

  .settings-row-value-input::placeholder {
    color: var(--text-secondary);
  }

  .settings-row-chevron {
    color: var(--text-secondary);
    opacity: 0.4;
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  .settings-row-chevron.open {
    transform: rotate(90deg);
  }

  .settings-row-divider {
    height: 0.5px;
    background: var(--border);
    margin-left: 16px;
  }

  .settings-date-input {
    border: none;
    background: transparent;
    padding: 4px 0;
    font-size: 0.9375rem;
    color: var(--text-secondary);
    outline: none;
    text-align: right;
    font-family: inherit;
    cursor: pointer;
    min-width: 130px;
  }
  .settings-date-input::-webkit-calendar-picker-indicator {
    filter: var(--calendar-icon-filter, none);
    cursor: pointer;
  }

  .settings-card-expand {
    padding: 8px 16px 16px;
  }


  .notification-expanded {
    padding: 16px;
  }

  /* Period Dropdown (inline in card) */

  /* =============================================
     AMOUNT MODAL (Bottom Sheet)
     ============================================= */
  .amount-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1100;
    animation: fadeOverlayIn 0.2s ease;
  }

  @keyframes fadeOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .amount-modal {
    width: 100%;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 20px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  }

  .amount-modal.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  @keyframes amountSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes amountSlideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  .amount-modal-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .currency-capsule-wrapper {
    position: relative;
  }

  .currency-capsule {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    background: var(--bg-secondary);
    border: 1.5px solid var(--border);
    border-radius: 20px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    cursor: pointer;
  }

  .capsule-chevron {
    transition: transform 0.2s;
  }

  .capsule-chevron.open {
    transform: rotate(90deg);
  }

  .currency-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 6px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    z-index: 10;
    min-width: 140px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    animation: dropdownFadeIn 0.15s ease;
  }

  @keyframes dropdownFadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .currency-dropdown-item {
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 0.875rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition: background 0.15s;
  }

  .currency-dropdown-item:active {
    background: var(--bg-tertiary);
  }

  .currency-dropdown-item.active {
    color: var(--accent);
    font-weight: 600;
  }

  .amount-modal-close {
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .amount-modal-close:active {
    background: var(--bg-tertiary);
  }

  .amount-display-section {
    text-align: center;
    margin-bottom: 28px;
  }

  .amount-display-label {
    display: block;
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-bottom: 8px;
    font-weight: 500;
  }

  .amount-display-value {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-primary);
    animation: amountBounce 0.15s ease;
    letter-spacing: -0.02em;
  }

  @keyframes amountBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }

  /* Numpad */
  .numpad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .numpad-key {
    height: 56px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1.375rem;
    font-weight: 600;
    border-radius: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease, background 0.1s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .numpad-key:active {
    transform: scale(0.92);
    background: var(--bg-tertiary);
  }

  .numpad-back {
    background: transparent;
  }

  .numpad-back:active {
    background: var(--bg-secondary);
    transform: scale(0.92);
  }

  .amount-done-btn {
    width: 100%;
    padding: 16px;
    background: white;
    color: #000;
    border: none;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.1s ease;
  }

  .amount-done-btn:active {
    transform: scale(0.98);
  }

  /* =============================================
     CATEGORIES BOTTOM SHEET
     ============================================= */
  .categories-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1100;
    animation: fadeOverlayIn 0.2s ease;
  }

  .categories-sheet {
    width: 100%;
    max-height: 85vh;
    background: var(--bg-primary);
    border-radius: 20px 20px 0 0;
    padding: 20px 20px calc(20px + var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .categories-sheet.closing {
    animation: amountSlideDown 0.28s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  .categories-sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .categories-sheet-header h3 {
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1;
    text-align: center;
  }

  .categories-list-wrapper {
    flex: 1;
    overflow-y: auto;
  }

  .cat-swipe-wrapper {
    position: relative;
    overflow: hidden;
  }

  .cat-swipe-bg {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80px;
    background: #EF4444;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    min-height: 48px;
    background: var(--bg-secondary);
    position: relative;
  }

  .category-list-name {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .category-color-dot {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-color-dot.clickable {
    cursor: pointer;
    border: 2px solid var(--border);
  }

  .categories-hint {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin: 12px 0 16px;
    line-height: 1.4;
    padding: 0 4px;
  }

  .new-category-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: var(--bg-secondary);
    border-radius: 14px;
  }

  .new-category-input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9375rem;
    color: var(--text-primary);
    outline: none;
    font-family: inherit;
  }

  .new-category-input::placeholder {
    color: var(--text-secondary);
  }

  .new-category-add-btn {
    padding: 6px 14px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }

  .new-category-add-btn:not(:disabled) {
    color: var(--accent);
  }

  /* Color Picker Sheet */
  .color-picker-sheet {
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    padding: 16px 20px 24px;
    margin: 16px -20px calc(-20px - var(--tg-safe-area-bottom, 0px));
    animation: amountSlideUp 0.2s ease;
  }

  .color-picker-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .color-picker-sheet h4 {
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .color-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .color-palette-item {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 3px solid transparent;
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s;
  }

  .color-palette-item.active {
    border-color: white;
    transform: scale(1.1);
  }

  .color-palette-item:active {
    transform: scale(0.9);
  }

  /* =============================================
     SETTINGS SCREEN ADDITIONS
     ============================================= */
  .settings-section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 16px 4px 8px;
  }

  .settings-hint {
    font-size: 0.6875rem;
    color: var(--text-secondary);
    padding: 8px 4px 0;
    font-style: italic;
  }

  .notification-row {
    flex-wrap: wrap;
    gap: 8px;
  }

  .notification-row-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }


  .time-input-capsule {
    padding: 6px 12px;
    background: var(--bg-tertiary);
    border: none;
    border-radius: 8px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-primary);
    outline: none;
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  .test-notification-btn {
    background: transparent;
    border: none;
    color: #F59E0B;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
  }

  .test-notification-btn:active {
    opacity: 0.7;
  }

  /* Period Modal */
  .period-modal {
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    width: 100%;
    padding-bottom: calc(20px + var(--tg-safe-area-bottom));
  }

  .period-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
  }

  .period-modal-header h3 { font-size: 1rem; font-weight: 700; }

  .close-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .period-options { padding: 12px 16px; }

  .period-option {
    width: 100%;
    padding: 14px 16px;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    border-radius: 10px;
  }

  .period-option:active { background: var(--bg-tertiary); }
  .period-option.active { color: var(--accent); }

  /* Analytics Screen */
  .analytics-screen, .settings-screen {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-primary);
  }

  .analytics-header, .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: calc(12px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .analytics-header h2, .settings-header h2 { font-size: 1rem; font-weight: 700; }

  .settings-tabs {
    display: flex;
    gap: 8px;
    margin: 12px 16px 0;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 12px;
    flex-shrink: 0;
  }

  .settings-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.8125rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .settings-tab.active { background: var(--accent); color: white; }

  .settings-section-desc {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .save-text-btn {
    background: none;
    border: none;
    color: var(--accent);
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .analytics-content, .settings-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
  }

  /* Profile Section */
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 20px;
    background: var(--bg-secondary);
    border-radius: 20px;
  }

  .profile-avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;
    background: var(--accent);
  }

  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  }

  .profile-name {
    font-size: 1.375rem;
    font-weight: 700;
    margin-bottom: 4px;
    text-align: center;
  }

  .profile-id {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-family: monospace;
  }

  .version-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 12px;
    margin-top: 24px;
    color: var(--text-secondary);
    font-size: 0.75rem;
    cursor: pointer;
  }

  .version-tag {
    padding: 4px 10px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-weight: 600;
  }

  .version-modal {
    background: var(--bg-secondary);
    border-radius: 20px;
    width: calc(100% - 48px);
    max-width: 320px;
    overflow: hidden;
  }

  .version-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
  }

  .version-modal-header h3 { font-size: 1rem; font-weight: 700; }

  .version-modal-body {
    padding: 24px;
    text-align: center;
  }

  .version-logo {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8px;
  }

  .version-number {
    display: inline-block;
    padding: 4px 12px;
    background: var(--bg-tertiary);
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .version-desc {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 20px;
  }

  .contact-btn {
    width: 100%;
    padding: 12px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
  }

  .analytics-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .summary-item {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 14px 10px;
    text-align: center;
  }

  .summary-value { display: block; font-size: 1.125rem; font-weight: 800; }
  .summary-label { font-size: 0.6875rem; color: var(--text-secondary); }

  .period-tabs {
    display: flex;
    background: var(--bg-secondary);
    padding: 4px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .period-tab {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
  }

  .period-tab.active { background: var(--accent); color: white; }

  .chart-section, .categories-section, .top-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .chart-section h3, .categories-section h3, .top-section h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9375rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .bar-chart {
    display: flex;
    align-items: flex-end;
    height: 120px;
    gap: 2px;
  }

  .bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
  }

  .bar {
    width: 100%;
    background: var(--accent);
    border-radius: 2px 2px 0 0;
    min-height: 2px;
  }

  .bar-label { font-size: 0.5rem; color: var(--text-secondary); margin-top: 4px; }

  .categories-chart { display: flex; gap: 16px; align-items: center; }

  .pie-chart {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: conic-gradient(var(--accent) 0deg 90deg, var(--success) 90deg 180deg, #f59e0b 180deg 270deg, #6b7280 270deg 360deg);
    flex-shrink: 0;
  }

  .categories-list { flex: 1; }

  .category-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    font-size: 0.8125rem;
  }

  .category-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .category-name { flex: 1; }
  .category-value { font-weight: 600; }
  .category-percent { color: var(--text-secondary); font-size: 0.75rem; width: 40px; text-align: right; }

  .top-list { display: flex; flex-direction: column; gap: 10px; }

  .top-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .top-rank {
    width: 20px;
    height: 20px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6875rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .top-info { flex: 1; min-width: 0; }
  .top-name { display: block; font-weight: 600; font-size: 0.875rem; }
  .top-monthly { font-size: 0.6875rem; color: var(--text-secondary); }
  .top-yearly { font-size: 0.8125rem; font-weight: 700; flex-shrink: 0; }

  /* Settings Screen */
  .settings-section {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
  }

  .settings-section h3 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
  }

  .setting-row:last-child { border-bottom: none; }

  .setting-info { flex: 1; margin-right: 12px; }
  .setting-title { display: flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.9375rem; }
  .setting-desc { font-size: 0.75rem; color: var(--text-secondary); margin-top: 2px; }

  .settings-subsection {
    background: var(--bg-tertiary);
    border-radius: 10px;
    padding: 14px;
    margin: 12px 0;
  }

  .settings-subsection h4 { font-size: 0.8125rem; font-weight: 600; margin-bottom: 12px; }

  .setting-select { margin-bottom: 12px; }

  .setting-select label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }

  .setting-select select {
    width: 100%;
    padding: 10px 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .quiet-hours-time {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }

  .time-input {
    flex: 1;
  }

  .time-input label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 4px;
  }

  .time-input input {
    width: 100%;
    padding: 10px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  /* Category Management in Settings */
  .category-manage-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category-manage-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .category-manage-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .category-manage-name {
    flex: 1;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .category-manage-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .category-manage-actions button {
    width: 28px;
    height: 28px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-manage-actions button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .toggle.small {
    width: 36px;
    height: 20px;
  }

  .toggle.small .toggle-slider:before {
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
  }

  .toggle.small input:checked + .toggle-slider:before {
    transform: translateX(16px);
  }

  .system-settings-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;
    background: var(--bg-tertiary);
    border: none;
    border-radius: 10px;
    color: var(--accent);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 12px;
  }

  /* Calendar */
  .calendar-view { padding-bottom: 16px; }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .calendar-header button {
    width: 36px;
    height: 36px;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-title { text-align: center; }
  .calendar-title h3 { font-size: 1rem; font-weight: 700; text-transform: capitalize; }
  .month-total { font-size: 0.8125rem; color: var(--accent); font-weight: 600; }

  .calendar-weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;
  }

  .weekday { text-align: center; font-size: 0.6875rem; font-weight: 600; color: var(--text-secondary); padding: 6px 0; }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  .calendar-day {
    aspect-ratio: 1;
    background: var(--bg-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  .calendar-day.empty { background: transparent; }
  .calendar-day.today { border: 2px solid var(--accent); }
  .calendar-day.has-subs { background: var(--bg-tertiary); cursor: pointer; }
  .calendar-day.has-subs:active { transform: scale(0.95); }
  .calendar-day.selected { background: var(--accent); color: white; }

  .day-number { font-size: 0.8125rem; font-weight: 600; }
  .day-subs { display: flex; gap: 2px; margin-top: 2px; }
  .day-sub-dot { width: 5px; height: 5px; border-radius: 50%; }

  .day-details {
    background: var(--bg-secondary);
    border-radius: 14px;
    padding: 14px;
    margin-top: 16px;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .day-details-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .day-details-header h4 { font-size: 0.9375rem; font-weight: 700; text-transform: capitalize; }

  .close-details {
    width: 28px;
    height: 28px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .day-details-list { display: flex; flex-direction: column; gap: 10px; }

  .day-detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--bg-tertiary);
    border-radius: 10px;
  }

  .detail-info { flex: 1; min-width: 0; }
  .detail-name { display: block; font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .detail-category { font-size: 0.6875rem; color: var(--text-secondary); }
  .detail-amount { font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }
`;var Ms;(Ms=window.Telegram)!=null&&Ms.WebApp&&(window.Telegram.WebApp.ready(),window.Telegram.WebApp.expand());bi.createRoot(document.getElementById("root")).render(a.jsx(Vs.StrictMode,{children:a.jsx(zm,{})}));
