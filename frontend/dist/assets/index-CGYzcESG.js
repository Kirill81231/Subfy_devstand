(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Vo={},$s={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),pd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),kd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),Ea=Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=Ea&&e[Ea]||e["@@iterator"],typeof e=="function"?e:null)}var Bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Hs={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Bs}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ws(){}Ws.prototype=Vn.prototype;function El(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Bs}var zl=El.prototype=new Ws;zl.constructor=El;Vs(zl,Vn.prototype);zl.isPureReactComponent=!0;var za=Array.isArray,Ys=Object.prototype.hasOwnProperty,_l={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ys.call(t,r)&&!Qs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Lr,type:e,key:i,ref:l,props:o,_owner:_l.current}}function jd(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _a=/\/+/g;function ii(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Lr:case pd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ii(l,0):r,za(o)?(n="",e!=null&&(n=e.replace(_a,"$&/")+"/"),oo(o,t,n,"",function(d){return d})):o!=null&&(Tl(o)&&(o=jd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(_a,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",za(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+ii(i,s);l+=oo(i,t,n,c,o)}else if(c=bd(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+ii(i,s++),l+=oo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $r(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},io={transition:null},Ed={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:io,ReactCurrentOwner:_l};function Ks(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Vn;Q.Fragment=md;Q.Profiler=hd;Q.PureComponent=El;Q.StrictMode=gd;Q.Suspense=wd;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;Q.act=Ks;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=_l.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ys.call(t,c)&&!Qs.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Lr,type:e.type,key:o,ref:i,props:r,_owner:l}};Q.createContext=function(e){return e={$$typeof:vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yd,_context:e},e.Consumer=e};Q.createElement=Xs;Q.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:xd,render:e}};Q.isValidElement=Tl;Q.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Cd}};Q.memo=function(e,t){return{$$typeof:kd,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};Q.unstable_act=Ks;Q.useCallback=function(e,t){return Me.current.useCallback(e,t)};Q.useContext=function(e){return Me.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Me.current.useEffect(e,t)};Q.useId=function(){return Me.current.useId()};Q.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Me.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};Q.useRef=function(e){return Me.current.useRef(e)};Q.useState=function(e){return Me.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Me.current.useTransition()};Q.version="18.3.1";$s.exports=Q;var N=$s.exports;const Gs=fd(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=N,_d=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),Md=Object.prototype.hasOwnProperty,Pd=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Md.call(t,r)&&!Dd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_d,type:e,key:i,ref:l,props:o,_owner:Pd.current}}Vo.Fragment=Td;Vo.jsx=Js;Vo.jsxs=Js;Us.exports=Vo;var a=Us.exports,Mi={},Zs={exports:{}},We={},qs={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(v,L){var O=v.length;v.push(L);e:for(;0<O;){var K=O-1>>>1,ee=v[K];if(0<o(ee,L))v[K]=L,v[O]=ee,O=K;else break e}}function n(v){return v.length===0?null:v[0]}function r(v){if(v.length===0)return null;var L=v[0],O=v.pop();if(O!==L){v[0]=O;e:for(var K=0,ee=v.length,et=ee>>>1;K<et;){var R=2*(K+1)-1,U=v[R],w=R+1,H=v[w];if(0>o(U,O))w<ee&&0>o(H,U)?(v[K]=H,v[w]=O,K=w):(v[K]=U,v[R]=O,K=R);else if(w<ee&&0>o(H,O))v[K]=H,v[w]=O,K=w;else break e}}return L}function o(v,L){var O=v.sortIndex-L.sortIndex;return O!==0?O:v.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],d=[],y=1,h=null,m=3,k=!1,z=!1,j=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(v){for(var L=n(d);L!==null;){if(L.callback===null)r(d);else if(L.startTime<=v)r(d),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(d)}}function S(v){if(j=!1,p(v),!z)if(n(c)!==null)z=!0,De(b);else{var L=n(d);L!==null&&ae(S,L.startTime-v)}}function b(v,L){z=!1,j&&(j=!1,f(C),C=-1),k=!0;var O=m;try{for(p(L),h=n(c);h!==null&&(!(h.expirationTime>L)||v&&!B());){var K=h.callback;if(typeof K=="function"){h.callback=null,m=h.priorityLevel;var ee=K(h.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(c)&&r(c),p(L)}else r(c);h=n(c)}if(h!==null)var et=!0;else{var R=n(d);R!==null&&ae(S,R.startTime-L),et=!1}return et}finally{h=null,m=O,k=!1}}var T=!1,g=null,C=-1,E=5,M=-1;function B(){return!(e.unstable_now()-M<E)}function q(){if(g!==null){var v=e.unstable_now();M=v;var L=!0;try{L=g(!0,v)}finally{L?A():(T=!1,g=null)}}else T=!1}var A;if(typeof u=="function")A=function(){u(q)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ye=J.port2;J.port1.onmessage=q,A=function(){ye.postMessage(null)}}else A=function(){I(q,0)};function De(v){g=v,T||(T=!0,A())}function ae(v,L){C=I(function(){v(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(v){v.callback=null},e.unstable_continueExecution=function(){z||k||(z=!0,De(b))},e.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<v?Math.floor(1e3/v):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(v){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var O=m;m=L;try{return v()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(v,L){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var O=m;m=v;try{return L()}finally{m=O}},e.unstable_scheduleCallback=function(v,L,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,v){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=O+ee,v={id:y++,callback:L,priorityLevel:v,startTime:O,expirationTime:ee,sortIndex:-1},O>K?(v.sortIndex=O,t(d,v),n(c)===null&&v===n(d)&&(j?(f(C),C=-1):j=!0,ae(S,O-K))):(v.sortIndex=ee,t(c,v),z||k||(z=!0,De(b))),v},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(v){var L=m;return function(){var O=m;m=L;try{return v.apply(this,arguments)}finally{m=O}}}})(ec);qs.exports=ec;var Ld=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=N,He=Ld;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,yr={};function fn(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(yr[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ta={},Ma={};function Fd(e){return Pi.call(Ma,e)?!0:Pi.call(Ta,e)?!1:Id.test(e)?Ma[e]=!0:(Ta[e]=!0,!1)}function Od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,Pl);be[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,Pl);be[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,Pl);be[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,t,n,r){var o=be.hasOwnProperty(t)?be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,o,r)&&(n=null),r||o===null?Fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),yn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),Ll=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,li;function or(e){if(li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);li=t&&t[1]||""}return`
`+li+e}var ai=!1;function si(e,t){if(!e||ai)return"";ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Ud(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case yn:return"Portal";case Di:return"Profiler";case Ll:return"StrictMode";case Li:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function $d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ll?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Bd(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ac(e,t){t=t.checked,t!=null&&Dl(e,"checked",t,!1)}function Oi(e,t){ac(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(ir(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function sc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hd=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,Tn=null,Mn=null;function Fa(e){if(e=Fr(e)){if(typeof Wi!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Xo(t),Wi(e.stateNode,e.type,t))}}function pc(e){Tn?Mn?Mn.push(e):Mn=[e]:Tn=e}function mc(){if(Tn){var e=Tn,t=Mn;if(Mn=Tn=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function gc(e,t){return e(t)}function hc(){}var ci=!1;function yc(e,t,n){if(ci)return e(t,n);ci=!0;try{return gc(e,t,n)}finally{ci=!1,(Tn!==null||Mn!==null)&&(hc(),mc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Yi=!1;if(St)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Yi=!1}function Wd(e,t,n,r,o,i,l,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var cr=!1,xo=null,wo=!1,Qi=null,Yd={onError:function(e){cr=!0,xo=e}};function Qd(e,t,n,r,o,i,l,s,c){cr=!1,xo=null,Wd.apply(Yd,arguments)}function Xd(e,t,n,r,o,i,l,s,c){if(Qd.apply(this,arguments),cr){if(cr){var d=xo;cr=!1,xo=null}else throw Error(_(198));wo||(wo=!0,Qi=d)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(pn(e)!==e)throw Error(_(188))}function Kd(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Oa(o),e;if(i===r)return Oa(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function xc(e){return e=Kd(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var kc=He.unstable_scheduleCallback,Aa=He.unstable_cancelCallback,Gd=He.unstable_shouldYield,Jd=He.unstable_requestPaint,pe=He.unstable_now,Zd=He.unstable_getCurrentPriorityLevel,Ol=He.unstable_ImmediatePriority,Sc=He.unstable_UserBlockingPriority,ko=He.unstable_NormalPriority,qd=He.unstable_LowPriority,bc=He.unstable_IdlePriority,Ho=null,mt=null;function ef(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:rf,tf=Math.log,nf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(tf(e)/nf|0)|0}var Wr=64,Yr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=lr(s):(i&=l,i!==0&&(r=lr(i)))}else l=n&~o,l!==0?r=lr(l):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),o=1<<n,r|=e[n],t&=~o;return r}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-st(i),s=1<<l,c=o[l];c===-1?(!(s&n)||s&r)&&(o[l]=of(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-st(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ne=0;function Nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,Ul,Ec,zc,_c,Ki=!1,Qr=[],Lt=null,Rt=null,It=null,wr=new Map,kr=new Map,Tt=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fr(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cf(e,t,n,r,o){switch(t){case"focusin":return Lt=Zn(Lt,e,t,n,r,o),!0;case"dragenter":return Rt=Zn(Rt,e,t,n,r,o),!0;case"mouseover":return It=Zn(It,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wr.set(i,Zn(wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,kr.set(i,Zn(kr.get(i)||null,e,t,n,r,o)),!0}return!1}function Tc(e){var t=qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,_c(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=Fr(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function $a(e,t,n){lo(e)&&n.delete(t)}function uf(){Ki=!1,Lt!==null&&lo(Lt)&&(Lt=null),Rt!==null&&lo(Rt)&&(Rt=null),It!==null&&lo(It)&&(It=null),wr.forEach($a),kr.forEach($a)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ki||(Ki=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,uf)))}function Sr(e){function t(o){return qn(o,e)}if(0<Qr.length){qn(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&qn(Lt,e),Rt!==null&&qn(Rt,e),It!==null&&qn(It,e),wr.forEach(t),kr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Tc(n),n.blockedOn===null&&Tt.shift()}var Pn=Ct.ReactCurrentBatchConfig,bo=!0;function df(e,t,n,r){var o=ne,i=Pn.transition;Pn.transition=null;try{ne=1,$l(e,t,n,r)}finally{ne=o,Pn.transition=i}}function ff(e,t,n,r){var o=ne,i=Pn.transition;Pn.transition=null;try{ne=4,$l(e,t,n,r)}finally{ne=o,Pn.transition=i}}function $l(e,t,n,r){if(bo){var o=Gi(e,t,n,r);if(o===null)wi(e,t,r,jo,n),Ua(e,r);else if(cf(o,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<sf.indexOf(e)){for(;o!==null;){var i=Fr(o);if(i!==null&&Cc(i),i=Gi(e,t,n,r),i===null&&wi(e,t,r,jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wi(e,t,r,null,n)}}var jo=null;function Gi(e,t,n,r){if(jo=null,e=Fl(r),e=qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Ol:return 1;case Sc:return 4;case ko:case qd:return 16;case bc:return 536870912;default:return 16}default:return 16}}var Pt=null,Bl=null,ao=null;function Pc(){if(ao)return ao;var e,t=Bl,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ba(){return!1}function Ye(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:Ba,this.isPropagationStopped=Ba,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Ye(Hn),Ir=ue({},Hn,{view:0,detail:0}),pf=Ye(Ir),di,fi,er,Wo=ue({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(di=e.screenX-er.screenX,fi=e.screenY-er.screenY):fi=di=0,er=e),di)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),Va=Ye(Wo),mf=ue({},Wo,{dataTransfer:0}),gf=Ye(mf),hf=ue({},Ir,{relatedTarget:0}),pi=Ye(hf),yf=ue({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=Ye(yf),xf=ue({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=Ye(xf),kf=ue({},Hn,{data:0}),Ha=Ye(kf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jf[e])?!!t[e]:!1}function Hl(){return Nf}var Cf=ue({},Ir,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=Ye(Cf),zf=ue({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Ye(zf),_f=ue({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Tf=Ye(_f),Mf=ue({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=Ye(Mf),Df=ue({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=Ye(Df),Rf=[9,13,27,32],Wl=St&&"CompositionEvent"in window,ur=null;St&&"documentMode"in document&&(ur=document.documentMode);var If=St&&"TextEvent"in window&&!ur,Dc=St&&(!Wl||ur&&8<ur&&11>=ur),Ya=" ",Qa=!1;function Lc(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Ff(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Qa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Qa?null:e;default:return null}}function Of(e,t){if(xn)return e==="compositionend"||!Wl&&Lc(e,t)?(e=Pc(),ao=Bl=Pt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Ic(e,t,n,r){pc(r),t=No(t,"onChange"),0<t.length&&(n=new Vl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,br=null;function Uf(e){Qc(e,0)}function Yo(e){var t=Sn(e);if(lc(t))return e}function $f(e,t){if(e==="change")return t}var Fc=!1;if(St){var mi;if(St){var gi="oninput"in document;if(!gi){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),gi=typeof Ka.oninput=="function"}mi=gi}else mi=!1;Fc=mi&&(!document.documentMode||9<document.documentMode)}function Ga(){dr&&(dr.detachEvent("onpropertychange",Oc),br=dr=null)}function Oc(e){if(e.propertyName==="value"&&Yo(br)){var t=[];Ic(t,br,e,Fl(e)),yc(Uf,t)}}function Bf(e,t,n){e==="focusin"?(Ga(),dr=t,br=n,dr.attachEvent("onpropertychange",Oc)):e==="focusout"&&Ga()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(br)}function Hf(e,t){if(e==="click")return Yo(t)}function Wf(e,t){if(e==="input"||e==="change")return Yo(t)}function Yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Yf;function jr(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Pi.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Za(n,i);var l=Za(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=St&&"documentMode"in document&&11>=document.documentMode,wn=null,Ji=null,fr=null,Zi=!1;function qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zi||wn==null||wn!==vo(r)||(r=wn,"selectionStart"in r&&Yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&jr(fr,r)||(fr=r,r=No(Ji,"onSelect"),0<r.length&&(t=new Vl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},hi={},$c={};St&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Qo(e){if(hi[e])return hi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $c)return hi[e]=t[n];return e}var Bc=Qo("animationend"),Vc=Qo("animationiteration"),Hc=Qo("animationstart"),Wc=Qo("transitionend"),Yc=new Map,es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Yc.set(e,t),fn(t,[e])}for(var yi=0;yi<es.length;yi++){var vi=es[yi],Kf=vi.toLowerCase(),Gf=vi[0].toUpperCase()+vi.slice(1);Ht(Kf,"on"+Gf)}Ht(Bc,"onAnimationEnd");Ht(Vc,"onAnimationIteration");Ht(Hc,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Wc,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;ts(o,s,d),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;ts(o,s,d),i=c}}}if(wo)throw e=Qi,wo=!1,Qi=null,e}function oe(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function xi(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Gr]){e[Gr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||xi(n,!1,e),xi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,xi("selectionchange",!1,t))}}function Xc(e,t,n,r){switch(Mc(t)){case 1:var o=df;break;case 4:o=ff;break;default:o=$l}n=o.bind(null,t,n,e),o=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=qt(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}yc(function(){var d=i,y=Fl(n),h=[];e:{var m=Yc.get(e);if(m!==void 0){var k=Vl,z=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":k=Ef;break;case"focusin":z="focus",k=pi;break;case"focusout":z="blur",k=pi;break;case"beforeblur":case"afterblur":k=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Tf;break;case Bc:case Vc:case Hc:k=vf;break;case Wc:k=Pf;break;case"scroll":k=pf;break;case"wheel":k=Lf;break;case"copy":case"cut":case"paste":k=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Wa}var j=(t&4)!==0,I=!j&&e==="scroll",f=j?m!==null?m+"Capture":null:m;j=[];for(var u=d,p;u!==null;){p=u;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,f!==null&&(S=xr(u,f),S!=null&&j.push(Cr(u,S,p)))),I)break;u=u.return}0<j.length&&(m=new k(m,z,null,n,y),h.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&n!==Hi&&(z=n.relatedTarget||n.fromElement)&&(qt(z)||z[bt]))break e;if((k||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,k?(z=n.relatedTarget||n.toElement,k=d,z=z?qt(z):null,z!==null&&(I=pn(z),z!==I||z.tag!==5&&z.tag!==6)&&(z=null)):(k=null,z=d),k!==z)){if(j=Va,S="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=Wa,S="onPointerLeave",f="onPointerEnter",u="pointer"),I=k==null?m:Sn(k),p=z==null?m:Sn(z),m=new j(S,u+"leave",k,n,y),m.target=I,m.relatedTarget=p,S=null,qt(y)===d&&(j=new j(f,u+"enter",z,n,y),j.target=p,j.relatedTarget=I,S=j),I=S,k&&z)t:{for(j=k,f=z,u=0,p=j;p;p=gn(p))u++;for(p=0,S=f;S;S=gn(S))p++;for(;0<u-p;)j=gn(j),u--;for(;0<p-u;)f=gn(f),p--;for(;u--;){if(j===f||f!==null&&j===f.alternate)break t;j=gn(j),f=gn(f)}j=null}else j=null;k!==null&&ns(h,m,k,j,!1),z!==null&&I!==null&&ns(h,I,z,j,!0)}}e:{if(m=d?Sn(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var b=$f;else if(Xa(m))if(Fc)b=Wf;else{b=Vf;var T=Bf}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Hf);if(b&&(b=b(e,d))){Ic(h,b,n,y);break e}T&&T(e,m,d),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Ai(m,"number",m.value)}switch(T=d?Sn(d):window,e){case"focusin":(Xa(T)||T.contentEditable==="true")&&(wn=T,Ji=d,fr=null);break;case"focusout":fr=Ji=wn=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,qa(h,n,y);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":qa(h,n,y)}var g;if(Wl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xn?Lc(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Dc&&n.locale!=="ko"&&(xn||C!=="onCompositionStart"?C==="onCompositionEnd"&&xn&&(g=Pc()):(Pt=y,Bl="value"in Pt?Pt.value:Pt.textContent,xn=!0)),T=No(d,C),0<T.length&&(C=new Ha(C,e,null,n,y),h.push({event:C,listeners:T}),g?C.data=g:(g=Rc(n),g!==null&&(C.data=g)))),(g=If?Ff(e,n):Of(e,n))&&(d=No(d,"onBeforeInput"),0<d.length&&(y=new Ha("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=g))}Qc(h,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=xr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ns(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,o?(c=xr(n,i),c!=null&&l.unshift(Cr(n,c,s))):o||(c=xr(n,i),c!=null&&l.push(Cr(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function rs(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(qf,"")}function Jr(e,t,n){if(t=rs(t),rs(e)!==t&&n)throw Error(_(425))}function Co(){}var qi=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,os=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof os<"u"?function(e){return os.resolve(null).then(e).catch(np)}:nl;function np(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Wn,Er="__reactProps$"+Wn,bt="__reactContainer$"+Wn,rl="__reactEvents$"+Wn,rp="__reactListeners$"+Wn,op="__reactHandles$"+Wn;function qt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=is(e);e!==null;){if(n=e[pt])return n;e=is(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[pt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Xo(e){return e[Er]||null}var ol=[],bn=-1;function Wt(e){return{current:e}}function ie(e){0>bn||(e.current=ol[bn],ol[bn]=null,bn--)}function re(e,t){bn++,ol[bn]=e.current,e.current=t}var Vt={},Ee=Wt(Vt),Oe=Wt(!1),ln=Vt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Eo(){ie(Oe),ie(Ee)}function ls(e,t,n){if(Ee.current!==Vt)throw Error(_(168));re(Ee,t),re(Oe,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,$d(e)||"Unknown",o));return ue({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ln=Ee.current,re(Ee,e),re(Oe,Oe.current),!0}function as(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Kc(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,ie(Oe),ie(Ee),re(Ee,e)):ie(Oe),re(Oe,n)}var vt=null,Ko=!1,Si=!1;function Gc(e){vt===null?vt=[e]:vt.push(e)}function ip(e){Ko=!0,Gc(e)}function Yt(){if(!Si&&vt!==null){Si=!0;var e=0,t=ne;try{var n=vt;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Ko=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),kc(Ol,Yt),o}finally{ne=t,Si=!1}}return null}var jn=[],Nn=0,_o=null,To=0,Xe=[],Ke=0,an=null,xt=1,wt="";function Jt(e,t){jn[Nn++]=To,jn[Nn++]=_o,_o=e,To=t}function Jc(e,t,n){Xe[Ke++]=xt,Xe[Ke++]=wt,Xe[Ke++]=an,an=e;var r=xt;e=wt;var o=32-st(r)-1;r&=~(1<<o),n+=1;var i=32-st(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,xt=1<<32-st(t)+o|n<<o|r,wt=i+e}else xt=1<<i|n<<o|r,wt=e}function Ql(e){e.return!==null&&(Jt(e,1),Jc(e,1,0))}function Xl(e){for(;e===_o;)_o=jn[--Nn],jn[Nn]=null,To=jn[--Nn],jn[Nn]=null;for(;e===an;)an=Xe[--Ke],Xe[Ke]=null,wt=Xe[--Ke],Xe[Ke]=null,xt=Xe[--Ke],Xe[Ke]=null}var Ve=null,Be=null,le=!1,it=null;function Zc(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(le){var t=Be;if(t){var n=t;if(!ss(e,t)){if(il(e))throw Error(_(418));t=Ft(n.nextSibling);var r=Ve;t&&ss(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,le=!1,Ve=e)}}else{if(il(e))throw Error(_(418));e.flags=e.flags&-4097|2,le=!1,Ve=e}}}function cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Zr(e){if(e!==Ve)return!1;if(!le)return cs(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Be)){if(il(e))throw qc(),Error(_(418));for(;t;)Zc(e,t),t=Ft(t.nextSibling)}if(cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?Ft(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=Be;e;)e=Ft(e.nextSibling)}function On(){Be=Ve=null,le=!1}function Kl(e){it===null?it=[e]:it.push(e)}var lp=Ct.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function us(e){var t=e._init;return t(e._payload)}function eu(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=$t(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,S){return u===null||u.tag!==6?(u=_i(p,f.mode,S),u.return=f,u):(u=o(u,p),u.return=f,u)}function c(f,u,p,S){var b=p.type;return b===vn?y(f,u,p.props.children,S,p.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zt&&us(b)===u.type)?(S=o(u,p.props),S.ref=tr(f,u,p),S.return=f,S):(S=ho(p.type,p.key,p.props,null,f.mode,S),S.ref=tr(f,u,p),S.return=f,S)}function d(f,u,p,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ti(p,f.mode,S),u.return=f,u):(u=o(u,p.children||[]),u.return=f,u)}function y(f,u,p,S,b){return u===null||u.tag!==7?(u=rn(p,f.mode,S,b),u.return=f,u):(u=o(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_i(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Br:return p=ho(u.type,u.key,u.props,null,f.mode,p),p.ref=tr(f,null,u),p.return=f,p;case yn:return u=Ti(u,f.mode,p),u.return=f,u;case zt:var S=u._init;return h(f,S(u._payload),p)}if(ir(u)||Gn(u))return u=rn(u,f.mode,p,null),u.return=f,u;qr(f,u)}return null}function m(f,u,p,S){var b=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:s(f,u,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:return p.key===b?c(f,u,p,S):null;case yn:return p.key===b?d(f,u,p,S):null;case zt:return b=p._init,m(f,u,b(p._payload),S)}if(ir(p)||Gn(p))return b!==null?null:y(f,u,p,S,null);qr(f,p)}return null}function k(f,u,p,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(p)||null,s(u,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Br:return f=f.get(S.key===null?p:S.key)||null,c(u,f,S,b);case yn:return f=f.get(S.key===null?p:S.key)||null,d(u,f,S,b);case zt:var T=S._init;return k(f,u,p,T(S._payload),b)}if(ir(S)||Gn(S))return f=f.get(p)||null,y(u,f,S,b,null);qr(u,S)}return null}function z(f,u,p,S){for(var b=null,T=null,g=u,C=u=0,E=null;g!==null&&C<p.length;C++){g.index>C?(E=g,g=null):E=g.sibling;var M=m(f,g,p[C],S);if(M===null){g===null&&(g=E);break}e&&g&&M.alternate===null&&t(f,g),u=i(M,u,C),T===null?b=M:T.sibling=M,T=M,g=E}if(C===p.length)return n(f,g),le&&Jt(f,C),b;if(g===null){for(;C<p.length;C++)g=h(f,p[C],S),g!==null&&(u=i(g,u,C),T===null?b=g:T.sibling=g,T=g);return le&&Jt(f,C),b}for(g=r(f,g);C<p.length;C++)E=k(g,f,C,p[C],S),E!==null&&(e&&E.alternate!==null&&g.delete(E.key===null?C:E.key),u=i(E,u,C),T===null?b=E:T.sibling=E,T=E);return e&&g.forEach(function(B){return t(f,B)}),le&&Jt(f,C),b}function j(f,u,p,S){var b=Gn(p);if(typeof b!="function")throw Error(_(150));if(p=b.call(p),p==null)throw Error(_(151));for(var T=b=null,g=u,C=u=0,E=null,M=p.next();g!==null&&!M.done;C++,M=p.next()){g.index>C?(E=g,g=null):E=g.sibling;var B=m(f,g,M.value,S);if(B===null){g===null&&(g=E);break}e&&g&&B.alternate===null&&t(f,g),u=i(B,u,C),T===null?b=B:T.sibling=B,T=B,g=E}if(M.done)return n(f,g),le&&Jt(f,C),b;if(g===null){for(;!M.done;C++,M=p.next())M=h(f,M.value,S),M!==null&&(u=i(M,u,C),T===null?b=M:T.sibling=M,T=M);return le&&Jt(f,C),b}for(g=r(f,g);!M.done;C++,M=p.next())M=k(g,f,C,M.value,S),M!==null&&(e&&M.alternate!==null&&g.delete(M.key===null?C:M.key),u=i(M,u,C),T===null?b=M:T.sibling=M,T=M);return e&&g.forEach(function(q){return t(f,q)}),le&&Jt(f,C),b}function I(f,u,p,S){if(typeof p=="object"&&p!==null&&p.type===vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:e:{for(var b=p.key,T=u;T!==null;){if(T.key===b){if(b=p.type,b===vn){if(T.tag===7){n(f,T.sibling),u=o(T,p.props.children),u.return=f,f=u;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===zt&&us(b)===T.type){n(f,T.sibling),u=o(T,p.props),u.ref=tr(f,T,p),u.return=f,f=u;break e}n(f,T);break}else t(f,T);T=T.sibling}p.type===vn?(u=rn(p.props.children,f.mode,S,p.key),u.return=f,f=u):(S=ho(p.type,p.key,p.props,null,f.mode,S),S.ref=tr(f,u,p),S.return=f,f=S)}return l(f);case yn:e:{for(T=p.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=o(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ti(p,f.mode,S),u.return=f,f=u}return l(f);case zt:return T=p._init,I(f,u,T(p._payload),S)}if(ir(p))return z(f,u,p,S);if(Gn(p))return j(f,u,p,S);qr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,p),u.return=f,f=u):(n(f,u),u=_i(p,f.mode,S),u.return=f,f=u),l(f)):n(f,u)}return I}var An=eu(!0),tu=eu(!1),Mo=Wt(null),Po=null,Cn=null,Gl=null;function Jl(){Gl=Cn=Po=null}function Zl(e){var t=Mo.current;ie(Mo),e._currentValue=t}function al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Po=e,Gl=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Po===null)throw Error(_(308));Cn=e,Po.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var en=null;function ql(e){en===null?en=[e]:en.push(e)}function nu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ql(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,ql(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}function ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;l=0,y=d=c=null,s=i;do{var m=s.lane,k=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var z=e,j=s;switch(m=t,k=n,j.tag){case 1:if(z=j.payload,typeof z=="function"){h=z.call(k,h,m);break e}h=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=j.payload,m=typeof z=="function"?z.call(k,h,m):z,m==null)break e;h=ue({},h,m);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else k={eventTime:k,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=k,c=h):y=y.next=k,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(y===null&&(c=h),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=h}}function fs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Or={},gt=Wt(Or),zr=Wt(Or),_r=Wt(Or);function tn(e){if(e===Or)throw Error(_(174));return e}function ta(e,t){switch(re(_r,t),re(zr,e),re(gt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$i(t,e)}ie(gt),re(gt,t)}function Un(){ie(gt),ie(zr),ie(_r)}function ou(e){tn(_r.current);var t=tn(gt.current),n=$i(t,e.type);t!==n&&(re(zr,e),re(gt,n))}function na(e){zr.current===e&&(ie(gt),ie(zr))}var se=Wt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function ra(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var uo=Ct.ReactCurrentDispatcher,ji=Ct.ReactCurrentBatchConfig,sn=0,ce=null,ge=null,ve=null,Ro=!1,pr=!1,Tr=0,ap=0;function je(){throw Error(_(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,o,i){if(sn=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?dp:fp,e=n(r,o),pr){i=0;do{if(pr=!1,Tr=0,25<=i)throw Error(_(301));i+=1,ve=ge=null,t.updateQueue=null,uo.current=pp,e=n(r,o)}while(pr)}if(uo.current=Io,t=ge!==null&&ge.next!==null,sn=0,ve=ge=ce=null,Ro=!1,t)throw Error(_(300));return e}function la(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ce.memoizedState=ve=e:ve=ve.next=e,ve}function qe(){if(ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ve===null?ce.memoizedState:ve.next;if(t!==null)ve=t,ge=e;else{if(e===null)throw Error(_(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?ce.memoizedState=ve=e:ve=ve.next=e}return ve}function Mr(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ge,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,c=null,d=i;do{var y=d.lane;if((sn&y)===y)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,l=r):c=c.next=h,ce.lanes|=y,cn|=y}d=d.next}while(d!==null&&d!==i);c===null?l=r:c.next=s,ut(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ut(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iu(){}function lu(e,t){var n=ce,r=qe(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,aa(cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Pr(9,su.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(_(349));sn&30||au(n,t,o)}return o}function au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function su(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&du(e)}function cu(e,t,n){return n(function(){uu(t)&&du(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function du(e){var t=jt(e,1);t!==null&&ct(t,e,1,-1)}function ps(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,ce,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fu(){return qe().memoizedState}function fo(e,t,n,r){var o=ft();ce.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var o=qe();r=r===void 0?null:r;var i=void 0;if(ge!==null){var l=ge.memoizedState;if(i=l.destroy,r!==null&&oa(r,l.deps)){o.memoizedState=Pr(t,n,i,r);return}}ce.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function ms(e,t){return fo(8390656,8,e,t)}function aa(e,t){return Go(2048,8,e,t)}function pu(e,t){return Go(4,2,e,t)}function mu(e,t){return Go(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,gu.bind(null,t,e),n)}function sa(){}function yu(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xu(e,t,n){return sn&21?(ut(n,t)||(n=jc(),ce.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function sp(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=ji.transition;ji.transition={};try{e(!1),t()}finally{ne=n,ji.transition=r}}function wu(){return qe().memoizedState}function cp(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ku(e))Su(t,n);else if(n=nu(e,t,n,r),n!==null){var o=Te();ct(n,e,r,o),bu(n,t,r)}}function up(e,t,n){var r=Ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Su(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,ut(s,l)){var c=t.interleaved;c===null?(o.next=o,ql(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=nu(e,t,o,r),n!==null&&(o=Te(),ct(n,e,r,o),bu(n,t,r))}}function ku(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Su(e,t){pr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}var Io={readContext:Ze,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},dp={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:ms,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ps,useDebugValue:sa,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ps(!1),t=e[0];return e=sp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=ft();if(le){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),xe===null)throw Error(_(349));sn&30||au(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ms(cu.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,su.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=xe.identifierPrefix;if(le){var n=wt,r=xt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:Ze,useCallback:yu,useContext:Ze,useEffect:aa,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:mu,useMemo:vu,useReducer:Ni,useRef:fu,useState:function(){return Ni(Mr)},useDebugValue:sa,useDeferredValue:function(e){var t=qe();return xu(t,ge.memoizedState,e)},useTransition:function(){var e=Ni(Mr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:wu,unstable_isNewReconciler:!1},pp={readContext:Ze,useCallback:yu,useContext:Ze,useEffect:aa,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:mu,useMemo:vu,useReducer:Ci,useRef:fu,useState:function(){return Ci(Mr)},useDebugValue:sa,useDeferredValue:function(e){var t=qe();return ge===null?t.memoizedState=e:xu(t,ge.memoizedState,e)},useTransition:function(){var e=Ci(Mr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:wu,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Ut(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(ct(t,e,o,r),co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Ut(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(ct(t,e,o,r),co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ut(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(ct(t,e,r,n),co(t,e,r))}};function gs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(o,i):!0}function ju(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ze(i):(o=Ae(t)?ln:Ee.current,r=t.contextTypes,i=(r=r!=null)?Fn(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function cl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ea(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ze(i):(i=Ae(t)?ln:Ee.current,o.context=Fn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),Do(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=Ud(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,wl=r),ul(e,t)},n}function Cu(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ul(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ys(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var gp=Ct.ReactCurrentOwner,Fe=!1;function _e(e,t,n,r){t.child=e===null?tu(t,null,n,r):An(t,e.child,n,r)}function ws(e,t,n,r,o){n=n.render;var i=t.ref;return Dn(t,o),r=ia(e,t,n,r,i,o),n=la(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(le&&n&&Ql(t),t.flags|=1,_e(e,t,r,o),t.child)}function ks(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ha(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Eu(e,t,i,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(l,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(jr(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return dl(e,t,n,r,o)}function zu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(zn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(zn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,re(zn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,re(zn,$e),$e|=r;return _e(e,t,o,n),t.child}function _u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,o){var i=Ae(n)?ln:Ee.current;return i=Fn(t,i),Dn(t,o),n=ia(e,t,n,r,i,o),r=la(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(le&&r&&Ql(t),t.flags|=1,_e(e,t,n,o),t.child)}function Ss(e,t,n,r,o){if(Ae(n)){var i=!0;zo(t)}else i=!1;if(Dn(t,o),t.stateNode===null)po(e,t),ju(t,n,r),cl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ze(d):(d=Ae(n)?ln:Ee.current,d=Fn(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==d)&&hs(t,l,r,d),_t=!1;var m=t.memoizedState;l.state=m,Do(t,r,l,o),c=t.memoizedState,s!==r||m!==c||Oe.current||_t?(typeof y=="function"&&(sl(t,n,y,r),c=t.memoizedState),(s=_t||gs(t,n,s,r,m,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ru(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:rt(t.type,s),l.props=d,h=t.pendingProps,m=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ze(c):(c=Ae(n)?ln:Ee.current,c=Fn(t,c));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||m!==c)&&hs(t,l,r,c),_t=!1,m=t.memoizedState,l.state=m,Do(t,r,l,o);var z=t.memoizedState;s!==h||m!==z||Oe.current||_t?(typeof k=="function"&&(sl(t,n,k,r),z=t.memoizedState),(d=_t||gs(t,n,d,r,m,z,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,z,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,z,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=z),l.props=r,l.state=z,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,i,o)}function fl(e,t,n,r,o,i){_u(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&as(t,n,!1),Nt(e,t,i);r=t.stateNode,gp.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=An(t,e.child,null,i),t.child=An(t,null,s,i)):_e(e,t,s,i),t.memoizedState=r.state,o&&as(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ls(e,t.context,!1),ta(e,t.containerInfo)}function bs(e,t,n,r,o){return On(),Kl(o),t.flags|=256,_e(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(se,o&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ei(l,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ml(n),t.memoizedState=pl,e):ca(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return hp(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$t(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=$t(s,i):(i=rn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ml(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ca(e,t){return t=ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&Kl(r),An(t,e.child,null,n),e=ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ei(Error(_(422))),eo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ei({mode:"visible",children:r.children},o,0,null),i=rn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,l),t.child.memoizedState=ml(l),t.memoizedState=pl,i);if(!(t.mode&1))return eo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(_(419)),r=Ei(i,r,void 0),eo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Fe||s){if(r=xe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),ct(r,e,o,-1))}return ga(),r=Ei(Error(_(421))),eo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=Ft(o.nextSibling),Ve=t,le=!0,it=null,e!==null&&(Xe[Ke++]=xt,Xe[Ke++]=wt,Xe[Ke++]=an,xt=e.id,wt=e.overflow,an=t),t=ca(t,r.children),t.flags|=4096,t)}function js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),al(e.return,t,n)}function zi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Pu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&js(e,n,t);else if(e.tag===19)js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zi(t,!0,n,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:Tu(t),On();break;case 5:ou(t);break;case 1:Ae(t.type)&&zo(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;re(Mo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Mu(e,t,n):(re(se,se.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);re(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,n)}return Nt(e,t,n)}var Du,gl,Lu,Ru;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gl=function(){};Lu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(gt.current);var i=null;switch(n){case"input":o=Fi(e,o),r=Fi(e,r),i=[];break;case"select":o=ue({},o,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":o=Ui(e,o),r=Ui(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Bi(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(yr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&oe("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ru=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vp(e,t,n){var r=t.pendingProps;switch(Xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ae(t.type)&&Eo(),Ne(t),null;case 3:return r=t.stateNode,Un(),ie(Oe),ie(Ee),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(bl(it),it=null))),gl(e,t),Ne(t),null;case 5:na(t);var o=tn(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Lu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Ne(t),null}if(e=tn(gt.current),Zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[Er]=i,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)oe(ar[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Da(r,i),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},oe("invalid",r);break;case"textarea":Ra(r,i),oe("invalid",r)}Bi(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",""+s]):yr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&oe("scroll",r)}switch(n){case"input":Vr(r),La(r,i,!0);break;case"textarea":Vr(r),Ia(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[Er]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vi(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)oe(ar[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":Da(e,r),o=Fi(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ue({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Ra(e,r),o=Ui(e,r),oe("invalid",e);break;default:o=r}Bi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?fc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uc(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&vr(e,c):typeof c=="number"&&vr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&oe("scroll",e):c!=null&&Dl(e,i,c,l))}switch(n){case"input":Vr(e),La(e,r,!1);break;case"textarea":Vr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_n(e,!!r.multiple,i,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Ru(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tn(_r.current),tn(gt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ne(t),null;case 13:if(ie(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Be!==null&&t.mode&1&&!(t.flags&128))qc(),On(),t.flags|=98560,i=!1;else if(i=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[pt]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else it!==null&&(bl(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?he===0&&(he=3):ga())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Un(),gl(e,t),e===null&&Nr(t.stateNode.containerInfo),Ne(t),null;case 10:return Zl(t.type._context),Ne(t),null;case 17:return Ae(t.type)&&Eo(),Ne(t),null;case 19:if(ie(se),i=t.memoizedState,i===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)nr(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Lo(e),l!==null){for(t.flags|=128,nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Bn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Ne(t),null}else 2*pe()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,re(se,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function xp(e,t){switch(Xl(t),t.tag){case 1:return Ae(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),ie(Oe),ie(Ee),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(ie(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(se),null;case 4:return Un(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var to=!1,Ce=!1,wp=typeof WeakSet=="function"?WeakSet:Set,D=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){de(e,t,r)}}var Ns=!1;function kp(e,t){if(qi=bo,e=Uc(),Yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,d=0,y=0,h=e,m=null;t:for(;;){for(var k;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break t;if(m===n&&++d===o&&(s=l),m===i&&++y===r&&(c=l),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},bo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var z=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var j=z.memoizedProps,I=z.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:rt(t.type,j),I);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){de(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return z=Ns,Ns=!1,z}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hl(t,n,i)}o=o.next}while(o!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Er],delete t[rl],delete t[rp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var ke=null,ot=!1;function Et(e,t,n){for(n=n.child;n!==null;)Ou(e,t,n),n=n.sibling}function Ou(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ce||En(n,t);case 6:var r=ke,o=ot;ke=null,Et(e,t,n),ke=r,ot=o,ke!==null&&(ot?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ot?(e=ke,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Sr(e)):ki(ke,n.stateNode));break;case 4:r=ke,o=ot,ke=n.stateNode.containerInfo,ot=!0,Et(e,t,n),ke=r,ot=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&hl(n,t,l),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!Ce&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Et(e,t,n),Ce=r):Et(e,t,n);break;default:Et(e,t,n)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(r){var o=Tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,ot=!1;break e;case 3:ke=s.stateNode.containerInfo,ot=!0;break e;case 4:ke=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ke===null)throw Error(_(160));Ou(i,l,o),ke=null,ot=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){de(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{mr(3,e,e.return),Zo(3,e)}catch(j){de(e,e.return,j)}try{mr(5,e,e.return)}catch(j){de(e,e.return,j)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(j){de(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ac(o,i),Vi(s,l);var d=Vi(s,i);for(l=0;l<c.length;l+=2){var y=c[l],h=c[l+1];y==="style"?fc(o,h):y==="dangerouslySetInnerHTML"?uc(o,h):y==="children"?vr(o,h):Dl(o,y,h,d)}switch(s){case"input":Oi(o,i);break;case"textarea":sc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?_n(o,!!i.multiple,k,!1):m!==!!i.multiple&&(i.defaultValue!=null?_n(o,!!i.multiple,i.defaultValue,!0):_n(o,!!i.multiple,i.multiple?[]:"",!1))}o[Er]=i}catch(j){de(e,e.return,j)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){de(e,e.return,j)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(j){de(e,e.return,j)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fa=pe())),r&4&&Es(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(d=Ce)||y,nt(t,e),Ce=d):nt(t,e),dt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(D=e,y=e.child;y!==null;){for(h=D=y;D!==null;){switch(m=D,k=m.child,m.tag){case 0:case 11:case 14:case 15:mr(4,m,m.return);break;case 1:En(m,m.return);var z=m.stateNode;if(typeof z.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,z.props=t.memoizedProps,z.state=t.memoizedState,z.componentWillUnmount()}catch(j){de(r,n,j)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){_s(h);continue}}k!==null?(k.return=m,D=k):_s(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=dc("display",l))}catch(j){de(e,e.return,j)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(j){de(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nt(t,e),dt(e),r&4&&Es(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fu(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var i=Cs(e);xl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Cs(e);vl(e,s,l);break;default:throw Error(_(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){D=e,Uu(e)}function Uu(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||to;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Ce;s=to;var d=Ce;if(to=l,(Ce=c)&&!d)for(D=o;D!==null;)l=D,c=l.child,l.tag===22&&l.memoizedState!==null?Ts(o):c!==null?(c.return=l,D=c):Ts(o);for(;i!==null;)D=i,Uu(i),i=i.sibling;D=o,to=s,Ce=d}zs(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):zs(e)}}function zs(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fs(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ce||t.flags&512&&yl(t)}catch(m){de(t,t.return,m)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function _s(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Ts(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){de(t,o,c)}}var i=t.return;try{yl(t)}catch(c){de(t,i,c)}break;case 5:var l=t.return;try{yl(t)}catch(c){de(t,l,c)}}}catch(c){de(t,t.return,c)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var bp=Math.ceil,Fo=Ct.ReactCurrentDispatcher,ua=Ct.ReactCurrentOwner,Je=Ct.ReactCurrentBatchConfig,G=0,xe=null,me=null,Se=0,$e=0,zn=Wt(0),he=0,Dr=null,cn=0,qo=0,da=0,gr=null,Ie=null,fa=0,Bn=1/0,yt=null,Oo=!1,wl=null,At=null,no=!1,Dt=null,Ao=0,hr=0,kl=null,mo=-1,go=0;function Te(){return G&6?pe():mo!==-1?mo:mo=pe()}function Ut(e){return e.mode&1?G&2&&Se!==0?Se&-Se:lp.transition!==null?(go===0&&(go=jc()),go):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function ct(e,t,n,r){if(50<hr)throw hr=0,kl=null,Error(_(185));Rr(e,n,r),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(qo|=n),he===4&&Mt(e,Se)),Ue(e,r),n===1&&G===0&&!(t.mode&1)&&(Bn=pe()+500,Ko&&Yt()))}function Ue(e,t){var n=e.callbackNode;lf(e,t);var r=So(e,e===xe?Se:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?ip(Ms.bind(null,e)):Gc(Ms.bind(null,e)),tp(function(){!(G&6)&&Yt()}),n=null;else{switch(Nc(r)){case 1:n=Ol;break;case 4:n=Sc;break;case 16:n=ko;break;case 536870912:n=bc;break;default:n=ko}n=Xu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(mo=-1,go=0,G&6)throw Error(_(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=So(e,e===xe?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uo(e,r);else{t=r;var o=G;G|=2;var i=Vu();(xe!==e||Se!==t)&&(yt=null,Bn=pe()+500,nn(e,t));do try{Cp();break}catch(s){Bu(e,s)}while(!0);Jl(),Fo.current=i,G=o,me!==null?t=0:(xe=null,Se=0,t=he)}if(t!==0){if(t===2&&(o=Xi(e),o!==0&&(r=o,t=Sl(e,o))),t===1)throw n=Dr,nn(e,0),Mt(e,r),Ue(e,pe()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jp(o)&&(t=Uo(e,r),t===2&&(i=Xi(e),i!==0&&(r=i,t=Sl(e,i))),t===1))throw n=Dr,nn(e,0),Mt(e,r),Ue(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Zt(e,Ie,yt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=fa+500-pe(),10<t)){if(So(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nl(Zt.bind(null,e,Ie,yt),t);break}Zt(e,Ie,yt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-st(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bp(r/1960))-r,10<r){e.timeoutHandle=nl(Zt.bind(null,e,Ie,yt),r);break}Zt(e,Ie,yt);break;case 5:Zt(e,Ie,yt);break;default:throw Error(_(329))}}}return Ue(e,pe()),e.callbackNode===n?$u.bind(null,e):null}function Sl(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&bl(t)),e}function bl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~da,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Ms(e){if(G&6)throw Error(_(327));Ln();var t=So(e,0);if(!(t&1))return Ue(e,pe()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=Xi(e);r!==0&&(t=r,n=Sl(e,r))}if(n===1)throw n=Dr,nn(e,0),Mt(e,t),Ue(e,pe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ie,yt),Ue(e,pe()),null}function pa(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Bn=pe()+500,Ko&&Yt())}}function un(e){Dt!==null&&Dt.tag===0&&!(G&6)&&Ln();var t=G;G|=1;var n=Je.transition,r=ne;try{if(Je.transition=null,ne=1,e)return e()}finally{ne=r,Je.transition=n,G=t,!(G&6)&&Yt()}}function ma(){$e=zn.current,ie(zn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:Un(),ie(Oe),ie(Ee),ra();break;case 5:na(r);break;case 4:Un();break;case 13:ie(se);break;case 19:ie(se);break;case 10:Zl(r.type._context);break;case 22:case 23:ma()}n=n.return}if(xe=e,me=e=$t(e.current,null),Se=$e=t,he=0,Dr=null,da=qo=cn=0,Ie=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}en=null}return e}function Bu(e,t){do{var n=me;try{if(Jl(),uo.current=Io,Ro){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ro=!1}if(sn=0,ve=ge=ce=null,pr=!1,Tr=0,ua.current=null,n===null||n.return===null){he=1,Dr=t,me=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=Se,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=vs(l);if(k!==null){k.flags&=-257,xs(k,l,s,i,t),k.mode&1&&ys(i,d,t),t=k,c=d;var z=t.updateQueue;if(z===null){var j=new Set;j.add(c),t.updateQueue=j}else z.add(c);break e}else{if(!(t&1)){ys(i,d,t),ga();break e}c=Error(_(426))}}else if(le&&s.mode&1){var I=vs(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),xs(I,l,s,i,t),Kl($n(c,s));break e}}i=c=$n(c,s),he!==4&&(he=2),gr===null?gr=[i]:gr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Nu(i,c,t);ds(i,f);break e;case 1:s=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Cu(i,s,t);ds(i,S);break e}}i=i.return}while(i!==null)}Wu(n)}catch(b){t=b,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Vu(){var e=Fo.current;return Fo.current=Io,e===null?Io:e}function ga(){(he===0||he===3||he===2)&&(he=4),xe===null||!(cn&268435455)&&!(qo&268435455)||Mt(xe,Se)}function Uo(e,t){var n=G;G|=2;var r=Vu();(xe!==e||Se!==t)&&(yt=null,nn(e,t));do try{Np();break}catch(o){Bu(e,o)}while(!0);if(Jl(),G=n,Fo.current=r,me!==null)throw Error(_(261));return xe=null,Se=0,he}function Np(){for(;me!==null;)Hu(me)}function Cp(){for(;me!==null&&!Gd();)Hu(me)}function Hu(e){var t=Qu(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Wu(e):me=t,ua.current=null}function Wu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xp(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,me=null;return}}else if(n=vp(n,t,$e),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);he===0&&(he=5)}function Zt(e,t,n){var r=ne,o=Je.transition;try{Je.transition=null,ne=1,Ep(e,t,n,r)}finally{Je.transition=o,ne=r}return null}function Ep(e,t,n,r){do Ln();while(Dt!==null);if(G&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(af(e,i),e===xe&&(me=xe=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Xu(ko,function(){return Ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var l=ne;ne=1;var s=G;G|=4,ua.current=null,kp(e,n),Au(n,e),Qf(el),bo=!!qi,el=qi=null,e.current=n,Sp(n),Jd(),G=s,ne=l,Je.transition=i}else e.current=n;if(no&&(no=!1,Dt=e,Ao=o),i=e.pendingLanes,i===0&&(At=null),ef(n.stateNode),Ue(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=wl,wl=null,e;return Ao&1&&e.tag!==0&&Ln(),i=e.pendingLanes,i&1?e===kl?hr++:(hr=0,kl=e):hr=0,Yt(),null}function Ln(){if(Dt!==null){var e=Nc(Ao),t=Je.transition,n=ne;try{if(Je.transition=null,ne=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Ao=0,G&6)throw Error(_(331));var o=G;for(G|=4,D=e.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(D=d;D!==null;){var y=D;switch(y.tag){case 0:case 11:case 15:mr(8,y,i)}var h=y.child;if(h!==null)h.return=y,D=h;else for(;D!==null;){y=D;var m=y.sibling,k=y.return;if(Iu(y),y===d){D=null;break}if(m!==null){m.return=k,D=m;break}D=k}}}var z=i.alternate;if(z!==null){var j=z.child;if(j!==null){z.child=null;do{var I=j.sibling;j.sibling=null,j=I}while(j!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,D=f;break e}D=i.return}}var u=e.current;for(D=u;D!==null;){l=D;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,D=p;else e:for(l=u;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zo(9,s)}}catch(b){de(s,s.return,b)}if(s===l){D=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,D=S;break e}D=s.return}}if(G=o,Yt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{ne=n,Je.transition=t}}return!1}function Ps(e,t,n){t=$n(n,t),t=Nu(e,t,1),e=Ot(e,t,1),t=Te(),e!==null&&(Rr(e,1,t),Ue(e,t))}function de(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=$n(n,e),e=Cu(t,e,1),t=Ot(t,e,1),e=Te(),t!==null&&(Rr(t,1,e),Ue(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>pe()-fa?nn(e,0):da|=n),Ue(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=Yr,Yr<<=1,!(Yr&130023424)&&(Yr=4194304)):t=1);var n=Te();e=jt(e,t),e!==null&&(Rr(e,t,n),Ue(e,n))}function _p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Yu(e,n)}var Qu;Qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,yp(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,le&&t.flags&1048576&&Jc(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var o=Fn(t,Ee.current);Dn(t,n),o=ia(null,t,r,e,o,n);var i=la();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,zo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ea(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,cl(t,r,e,n),t=fl(null,t,r,!0,i,n)):(t.tag=0,le&&i&&Ql(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pp(r),e=rt(r,e),o){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Ss(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,rt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Ss(e,t,r,o,n);case 3:e:{if(Tu(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ru(e,t),Do(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$n(Error(_(423)),t),t=bs(e,t,r,n,o);break e}else if(r!==o){o=$n(Error(_(424)),t),t=bs(e,t,r,n,o);break e}else for(Be=Ft(t.stateNode.containerInfo.firstChild),Ve=t,le=!0,it=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=Nt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,tl(r,o)?l=null:i!==null&&tl(r,i)&&(t.flags|=32),_u(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&ll(t),null;case 13:return Mu(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ws(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,re(Mo,r._currentValue),r._currentValue=l,i!==null)if(ut(i.value,l)){if(i.children===o.children&&!Oe.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=kt(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?c.next=c:(c.next=y.next,y.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),al(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(_(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),al(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=Ze(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),ks(e,t,r,o,n);case 15:return Eu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),po(e,t),t.tag=1,Ae(r)?(e=!0,zo(t)):e=!1,Dn(t,n),ju(t,r,o),cl(t,r,o,n),fl(null,t,r,!0,e,n);case 19:return Pu(e,t,n);case 22:return zu(e,t,n)}throw Error(_(156,t.tag))};function Xu(e,t){return kc(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Mp(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rl)return 11;if(e===Il)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ha(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vn:return rn(n.children,o,i,t);case Ll:l=8,o|=8;break;case Di:return e=Ge(12,n,t,o|2),e.elementType=Di,e.lanes=i,e;case Li:return e=Ge(13,n,t,o),e.elementType=Li,e.lanes=i,e;case Ri:return e=Ge(19,n,t,o),e.elementType=Ri,e.lanes=i,e;case oc:return ei(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:l=10;break e;case rc:l=9;break e;case Rl:l=11;break e;case Il:l=14;break e;case zt:l=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function ei(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Ti(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,o,i,l,s,c){return e=new Dp(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(i),e}function Lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ku(e){if(!e)return Vt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Kc(e,n,t)}return t}function Gu(e,t,n,r,o,i,l,s,c){return e=ya(n,r,!0,e,o,i,l,s,c),e.context=Ku(null),n=e.current,r=Te(),o=Ut(n),i=kt(r,o),i.callback=t??null,Ot(n,i,o),e.current.lanes=o,Rr(e,o,r),Ue(e,r),e}function ti(e,t,n,r){var o=t.current,i=Te(),l=Ut(o);return n=Ku(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,l),e!==null&&(ct(e,o,l,i),co(e,o,l)),l}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ds(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){Ds(e,t),(e=e.alternate)&&Ds(e,t)}function Rp(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}ni.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ti(e,t,null,null)};ni.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){ti(null,e,null,null)}),t[bt]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Tc(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ls(){}function Ip(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=$o(l);i.call(d)}}var l=Gu(t,r,e,0,null,!1,!1,"",Ls);return e._reactRootContainer=l,e[bt]=l.current,Nr(e.nodeType===8?e.parentNode:e),un(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=$o(c);s.call(d)}}var c=ya(e,0,!1,null,null,!1,!1,"",Ls);return e._reactRootContainer=c,e[bt]=c.current,Nr(e.nodeType===8?e.parentNode:e),un(function(){ti(t,c,n,r)}),c}function oi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=$o(l);s.call(c)}}ti(t,l,e,o)}else l=Ip(n,t,e,o,r);return $o(l)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Al(t,n|1),Ue(t,pe()),!(G&6)&&(Bn=pe()+500,Yt()))}break;case 13:un(function(){var r=jt(e,1);if(r!==null){var o=Te();ct(r,e,1,o)}}),va(e,1)}};Ul=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Te();ct(t,e,134217728,n)}va(e,134217728)}};Ec=function(e){if(e.tag===13){var t=Ut(e),n=jt(e,t);if(n!==null){var r=Te();ct(n,e,t,r)}va(e,t)}};zc=function(){return ne};_c=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};Wi=function(e,t,n){switch(t){case"input":if(Oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xo(r);if(!o)throw Error(_(90));lc(r),Oi(r,o)}}}break;case"textarea":sc(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};gc=pa;hc=un;var Fp={usingClientEntryPoint:!1,Events:[Fr,Sn,Xo,pc,mc,pa]},rr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ho=ro.inject(Op),mt=ro}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(_(200));return Lp(e,t,null,n)};We.createRoot=function(e,t){if(!wa(e))throw Error(_(299));var n=!1,r="",o=Ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,o),e[bt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new xa(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return un(e)};We.hydrate=function(e,t,n){if(!ri(t))throw Error(_(200));return oi(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ju;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Gu(t,null,e,1,n??null,o,!1,i,l),e[bt]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ni(t)};We.render=function(e,t,n){if(!ri(t))throw Error(_(200));return oi(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ri(e))throw Error(_(40));return e._reactRootContainer?(un(function(){oi(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};We.unstable_batchedUpdates=pa;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ri(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return oi(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zs.exports=We;var Ap=Zs.exports,Rs=Ap;Mi.createRoot=Rs.createRoot,Mi.hydrateRoot=Rs.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:c,...d},y)=>N.createElement("svg",{ref:y,...Up,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${$p(e)}`,s].join(" "),...d},[...t.map(([h,m])=>N.createElement(h,m)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=Y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Y("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Y("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=Y("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Y("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=Y("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Y("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Y("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=Y("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Y("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=Y("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=Y("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Y("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=Y("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=Y("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Y("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Y("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Y("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=Y("Keyboard",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2",key:"15u882"}],["path",{d:"M6 8h.001",key:"1ej0i3"}],["path",{d:"M10 8h.001",key:"1x2st2"}],["path",{d:"M14 8h.001",key:"1vkmyp"}],["path",{d:"M18 8h.001",key:"kfsenl"}],["path",{d:"M8 12h.001",key:"1sjpby"}],["path",{d:"M12 12h.001",key:"al75ts"}],["path",{d:"M16 12h.001",key:"931bgk"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=Y("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=Y("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=Y("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=Y("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=Y("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=Y("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=Y("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=Y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=Y("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=Y("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=Y("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=Y("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=Y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=Y("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Y("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),wm="/assets/Floating%20Object-BZKwimej.png",km="/assets/Calendar-Clf_zeo1.png",Sm="/assets/Notificastion-DsUxzrl4.png",bm="/assets/Fade-BllV-6ik.png",jl="https://jvokgylbrvlymtnlqolu.supabase.co",jm="https://jvokgylbrvlymtnlqolu.supabase.co/functions/v1/telegram-auth",hn=`${jl}/functions/v1`,Xt={auth:jm,getSubscriptions:`${hn}/get-subscriptions`,saveSubscription:`${hn}/save-subscription`,deleteSubscription:`${hn}/delete-subscription`,getTemplates:`${hn}/get-templates`,saveNotificationSettings:`${hn}/save-notification-settings`,sendTestNotification:`${hn}/send-test-notification`},Nm=[{id:"t1",name:"Яндекс Плюс",price:299,color:"#FFCC00",category:"Развлечения",domain:"plus.yandex.ru"},{id:"t2",name:"СберПрайм",price:399,color:"#21A038",category:"Утилиты",domain:"sberbank.ru"},{id:"t3",name:"МТС Premium",price:299,color:"#E30611",category:"Утилиты",domain:"mts.ru"},{id:"t4",name:"Тинькофф Pro",price:399,color:"#FFDD2D",category:"Утилиты",domain:"tinkoff.ru"},{id:"t5",name:"Кинопоиск",price:269,color:"#FF6600",category:"Развлечения",domain:"kinopoisk.ru"},{id:"t6",name:"Okko",price:399,color:"#6B4EFF",category:"Развлечения",domain:"okko.tv"},{id:"t7",name:"ivi",price:399,color:"#EA003D",category:"Развлечения",domain:"ivi.ru"},{id:"t8",name:"Netflix",price:699,color:"#E50914",category:"Развлечения",domain:"netflix.com"},{id:"t9",name:"YouTube Premium",price:299,color:"#FF0000",category:"Развлечения",domain:"youtube.com"},{id:"t10",name:"Spotify",price:199,color:"#1DB954",category:"Развлечения",domain:"spotify.com"},{id:"t11",name:"Яндекс Музыка",price:249,color:"#FFCC00",category:"Развлечения",domain:"music.yandex.ru"},{id:"t12",name:"Apple Music",price:169,color:"#FA2D48",category:"Развлечения",domain:"apple.com"},{id:"t13",name:"VK Музыка",price:249,color:"#0077FF",category:"Развлечения",domain:"vk.com"},{id:"t14",name:"iCloud+",price:149,color:"#3693F3",category:"Утилиты",domain:"icloud.com"},{id:"t15",name:"Google One",price:139,color:"#4285F4",category:"Утилиты",domain:"one.google.com"},{id:"t16",name:"Telegram Premium",price:299,color:"#0088CC",category:"Утилиты",domain:"telegram.org"},{id:"t17",name:"ChatGPT Plus",price:1900,color:"#10A37F",category:"Работа",domain:"openai.com"},{id:"t18",name:"Notion",price:800,color:"#000000",category:"Работа",domain:"notion.so"}],Cm=e=>({id:e.id,name:e.name,price:e.default_price,color:e.color,category:e.category,domain:e.domain||null,icon:e.icon||"📦",logo_url:e.logo_url||null,currency:e.default_currency||"RUB"}),Rn=[{id:"entertainment",name:"Развлечения",color:"#EF4444"},{id:"productivity",name:"Продуктивность",color:"#22C55E"},{id:"lifestyle",name:"Лайфстайл",color:"#FBBF24"},{id:"utilities",name:"Утилиты",color:"#3B82F6"},{id:"finance",name:"Финансы",color:"#EAB308"},{id:"health",name:"Здоровье",color:"#F97316"},{id:"gaming",name:"Игры",color:"#EC4899"},{id:"other",name:"Другое",color:"#9CA3AF"}],dn=[{value:"monthly",label:"Ежемесячно",multiplier:1,short:"мес",daysApprox:30},{value:"yearly",label:"Ежегодно",multiplier:.083,short:"год",daysApprox:365},{value:"trial",label:"Пробная",multiplier:0,short:"проба",daysApprox:0},{value:"one-time",label:"Одноразовая",multiplier:0,short:"раз",daysApprox:0}],we=[{code:"RUB",symbol:"₽",rate:1},{code:"USD",symbol:"$",rate:96},{code:"EUR",symbol:"€",rate:104}],Is=[{value:0,label:"В день списания"},{value:1,label:"За 1 день"},{value:2,label:"За 2 дня"},{value:3,label:"За 3 дня"},{value:4,label:"За 4 дня"},{value:5,label:"За 5 дней"},{value:10,label:"За 10 дней"},{value:15,label:"За 15 дней"},{value:25,label:"За 25 дней"},{value:30,label:"За 30 дней"},{value:-1,label:"Никогда"}],yo=["#EF4444","#22C55E","#FBBF24","#3B82F6","#EAB308","#F97316","#EC4899","#9CA3AF","#F43F5E","#2563EB","#7C3AED","#06B6D4","#10B981","#84CC16","#F59E0B","#FB923C","#A78BFA","#67E8F9"],Em=["🎬","🎵","🎮","📱","🖥️","🎧","📚","☁️","💳","🛒","🏠","🚗","✈️","🍔","☕","🍕","💡","⭐","🎓","💊","🏀","🎸","📷","🎨","💼","🏋️","🔒","🔑","📦","🎯","🍿","📺","🎤","🎹","🕹️","📰","💎","🛡️","🔔","💰","🧘","🚀","🌍","❤️","🐾","🧠","🎁","📧","🏦","🛠️"],rd=[{name:"credit-card",icon:ed},{name:"sport",icon:Kp},{name:"bank",icon:im},{name:"shopping-cart",icon:gm},{name:"bag",icon:mm},{name:"tv",icon:ym},{name:"music",icon:am},{name:"gamepad",icon:Zp},{name:"cloud",icon:Gp},{name:"phone",icon:sm},{name:"wifi",icon:vm},{name:"lightning",icon:xm},{name:"droplet",icon:Jp},{name:"house",icon:nm},{name:"car",icon:Qp},{name:"plane",icon:dm},{name:"heart",icon:tm},{name:"pill",icon:um},{name:"graduation",icon:em},{name:"briefcase",icon:Hp},{name:"lock",icon:lm},{name:"key",icon:rm},{name:"keyboard",icon:om},{name:"globe",icon:qp},{name:"star",icon:hm}],mn=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const t=String(e).split("T")[0],[n,r,o]=t.split("-").map(Number);return!n||!r||!o?null:new Date(n,r-1,o)},od=()=>{const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())},zm=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},id=(e,t)=>{const n=mn(e);if(!n)return null;const r=od();if(t==="one-time"||t==="trial")return n>r?n:null;for(;n<=r;)switch(t){case"weekly":n.setDate(n.getDate()+7);break;case"biweekly":n.setDate(n.getDate()+14);break;case"monthly":n.setMonth(n.getMonth()+1);break;case"quarterly":n.setMonth(n.getMonth()+3);break;case"semiannual":n.setMonth(n.getMonth()+6);break;case"yearly":n.setFullYear(n.getFullYear()+1);break;default:n.setMonth(n.getMonth()+1)}return n},ld=(e,t,n,r)=>{const o=mn(e);if(!o)return[];const i=new Date(n,r,1),l=new Date(n,r+1,0);if(t==="one-time"||t==="trial")return o>=i&&o<=l?[new Date(o)]:[];const s=[],c=(d,y)=>{switch(y){case"weekly":d.setDate(d.getDate()+7);break;case"biweekly":d.setDate(d.getDate()+14);break;case"monthly":d.setMonth(d.getMonth()+1);break;case"quarterly":d.setMonth(d.getMonth()+3);break;case"semiannual":d.setMonth(d.getMonth()+6);break;case"yearly":d.setFullYear(d.getFullYear()+1);break;default:d.setMonth(d.getMonth()+1)}};for(;o<i;)c(o,t);for(;o<=l;)o>=i&&s.push(new Date(o)),c(o,t);return s},_m=e=>{const t=mn(e);return t?t.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):"дата не указана"},Nl=e=>{if(!e)return null;const t=mn(e)||new Date(e),n=od();return Math.round((t-n)/(1e3*60*60*24))},Tm=e=>e===null?"дата не указана":e===0?"сегодня":e===1?"завтра":e<0?"просрочено":`через ${e} дн.`,on=()=>{var e;return(e=window.Telegram)==null?void 0:e.WebApp},ad=()=>{var e,t;(t=(e=on())==null?void 0:e.HapticFeedback)==null||t.impactOccurred("medium")},Fs=()=>{var e,t;(t=(e=on())==null?void 0:e.HapticFeedback)==null||t.notificationOccurred("success")},Mm="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2tneWxicnZseW10bmxxb2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNjQwMzAsImV4cCI6MjA4NDg0MDAzMH0.R8mBhpBKf7LwmbOCCmfTThbfhtKNGORLzMrTR8bdf3Q",Kt={"Content-Type":"application/json",apikey:Mm},Gt={async auth(e){const t=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",n=await fetch(Xt.auth,{method:"POST",headers:Kt,body:JSON.stringify({initData:e,timezone:t})});if(!n.ok)throw new Error("Auth failed");return n.json()},async getSubscriptions(e){const t=await fetch(Xt.getSubscriptions,{method:"POST",headers:Kt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to fetch");return t.json()},async saveSubscription(e,t){const n=await fetch(Xt.saveSubscription,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,subscription:t})});if(!n.ok)throw new Error("Failed to save");return n.json()},async deleteSubscription(e,t){const n=await fetch(Xt.deleteSubscription,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,subscriptionId:t})});if(!n.ok)throw new Error("Failed to delete");return n.json()},async getTemplates(){const e=await fetch(Xt.getTemplates,{method:"GET",headers:Kt});if(!e.ok)throw new Error("Failed to fetch templates");return e.json()},async saveNotificationSettings(e,t){const n=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",r=await fetch(Xt.saveNotificationSettings,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,settings:t,timezone:n})});if(!r.ok)throw new Error("Failed to save notification settings");return r.json()},async sendTestNotification(e){const t=await fetch(Xt.sendTestNotification,{method:"POST",headers:Kt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to send test notification");return t.json()}},Pm=({message:e,visible:t,type:n="success",onHide:r})=>{const[o,i]=N.useState(!1);return N.useEffect(()=>{if(t){i(!1);const l=setTimeout(()=>{i(!0),setTimeout(r,300)},2700);return()=>clearTimeout(l)}},[t,r]),t?a.jsxs("div",{className:`toast ${n} ${o?"leaving":""}`,children:[n==="error"?a.jsx(Yn,{size:18}):a.jsx(Xp,{size:18}),a.jsx("span",{children:e})]}):null},Dm=({onComplete:e,theme:t})=>{const[n,r]=N.useState(0),[o,i]=N.useState(0),[l,s]=N.useState(0),c=[{mainImage:wm,useGlow:!0,imageClass:"floating-objects",title:"Привет!",subtitle:"Это ",subtitleAccent:"Subfy",description:"Отслеживайте подписки и получайте напоминания о платежах — всё в Telegram"},{mainImage:km,useGlow:!1,imageClass:"calendar",title:"Все подписки",subtitle:"",subtitleAccent:"в одном месте",description:"Переключайтесь между календарём и списком одним тапом"},{mainImage:Sm,useGlow:!0,imageClass:"notification",title:"Уведомления",subtitle:"",subtitleAccent:"о списании",description:"Напоминания приходят сообщением от бота — всегда на виду в Telegram"}],d=m=>{i(m.touches[0].clientX)},y=m=>{s(m.touches[0].clientX)},h=()=>{if(!o||!l)return;const m=o-l;Math.abs(m)>=50&&(m>0?n<c.length-1?r(z=>z+1):e():m<0&&n>0&&r(z=>z-1)),i(0),s(0)};return a.jsxs("div",{className:`onboarding ${t}`,children:[a.jsx("button",{className:"onboarding-skip",onClick:e,children:"Пропустить"}),a.jsx("div",{className:"onboarding-slides",onTouchStart:d,onTouchMove:y,onTouchEnd:h,children:a.jsx("div",{className:"slides-track",style:{transform:`translateX(-${n*100}%)`},children:c.map((m,k)=>a.jsxs("div",{className:"slide",children:[a.jsxs("div",{className:`slide-image-area ${m.imageClass}`,children:[m.useGlow&&a.jsx("img",{className:"slide-glow",src:bm,alt:""}),a.jsx("img",{className:"slide-main-img",src:m.mainImage,alt:""})]}),a.jsxs("div",{className:"slide-text",children:[a.jsx("h1",{className:"slide-title",children:m.title}),a.jsxs("h2",{className:"slide-subtitle",children:[m.subtitle,a.jsx("span",{className:"accent-text",children:m.subtitleAccent})]}),a.jsx("p",{className:"slide-description",children:m.description})]})]},k))})}),a.jsxs("div",{className:"onboarding-bottom",children:[a.jsx("div",{className:"onboarding-indicators",children:c.map((m,k)=>a.jsx("button",{className:`indicator ${k===n?"active":""}`,onClick:()=>r(k)},k))}),n===c.length-1&&a.jsx("button",{className:"onboarding-start-btn",onClick:e,children:"Начать"})]})]})},Lm=({message:e="Загрузка..."})=>a.jsx("div",{className:"loading-screen",children:a.jsxs("div",{className:"loading-content",children:[a.jsx("div",{className:"loading-logo",children:"Subfy"}),a.jsx(td,{className:"loading-spinner",size:32}),a.jsx("p",{className:"loading-message",children:e})]})}),lt=({domain:e,emoji:t,color:n,size:r=32,logoUrl:o})=>{const[i,l]=N.useState(!1),[s,c]=N.useState(!1),d=o||(e?`https://logo.clearbit.com/${e}`:null);if(!d||i){if(t&&typeof t=="string"&&t.startsWith("symbol:")){const h=t.replace("symbol:",""),m=rd.find(k=>k.name===h);if(m){const k=m.icon;return a.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,flexShrink:0},children:a.jsx(k,{size:r*.5,color:"white",strokeWidth:2})})}}return a.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n+"20",color:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,fontSize:r*.5,flexShrink:0},children:t||"📦"})}return a.jsxs("div",{className:"logo-container",style:{width:r,height:r,background:s?"white":n+"20",borderRadius:r>60?20:8,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:[a.jsx("img",{src:d,alt:"",style:{width:r,height:r,objectFit:"cover",opacity:s?1:0,transition:"opacity 0.2s"},onLoad:()=>c(!0),onError:()=>l(!0)}),!s&&!i&&a.jsx("div",{style:{fontSize:r*.5},children:t||"📦"})]})},ba=({visible:e,title:t,message:n,onConfirm:r,onCancel:o})=>e?a.jsx("div",{className:"modal-overlay confirm-overlay",onClick:o,children:a.jsxs("div",{className:"confirm-modal",onClick:i=>i.stopPropagation(),children:[a.jsx("h3",{children:t}),a.jsx("p",{children:n}),a.jsxs("div",{className:"confirm-actions",children:[a.jsx("button",{className:"cancel-btn",onClick:o,children:"Отмена"}),a.jsx("button",{className:"delete-confirm-btn",onClick:r,children:"Удалить"})]})]})}):null,Rm=({subscription:e,onEdit:t,onDelete:n,currencies:r})=>{const[o,i]=N.useState(0),[l,s]=N.useState(0),[c,d]=N.useState(!1),[y,h]=N.useState(!1),m=r.find(E=>E.code===e.currency)||r[0],k=e.billing_cycle||e.billingCycle||"monthly",z=e.first_billing_date||e.next_billing_date||e.firstBillingDate,j=e.trial_end_date||e.trialEndDate,I=k==="trial"&&j?mn(j):id(z,k),f=Nl(I),u=dn.find(E=>E.value===k)||dn[0],p=e.amount*((u==null?void 0:u.multiplier)||1),S=E=>{s(E.touches[0].clientX),d(!0)},b=E=>{if(!c)return;const M=l-E.touches[0].clientX;i(Math.max(0,Math.min(80,M)))},T=()=>{d(!1),o>40?i(80):i(0)},g=()=>{h(!0)},C=()=>{h(!1),i(0),n(e.id)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"sub-card-wrapper",children:[a.jsx("div",{className:"sub-card-swipe-bg",style:{opacity:o/80},children:a.jsxs("button",{className:"swipe-delete-btn",onClick:g,children:[a.jsx(Sa,{size:20}),a.jsx("span",{children:"Удалить"})]})}),a.jsxs("div",{className:"sub-card",style:{"--accent":e.color,transform:`translateX(-${o}px)`,transition:c?"none":"transform 0.2s ease"},onTouchStart:S,onTouchMove:b,onTouchEnd:T,children:[a.jsx("div",{className:"sub-card-accent"}),a.jsx("div",{className:"sub-card-content",children:a.jsxs("div",{className:"sub-card-header",children:[a.jsx(lt,{domain:e.domain,emoji:e.icon,color:e.color,size:44,logoUrl:e.logo_url}),a.jsxs("div",{className:"sub-info",children:[a.jsx("h3",{className:"sub-name",children:e.name}),a.jsxs("div",{className:"sub-price-inline",children:[a.jsx("span",{className:"price-amount",children:(k==="trial"||k==="one-time"?e.amount:Math.round(p)).toLocaleString("ru-RU")}),a.jsx("span",{className:"price-currency",children:m.symbol}),a.jsxs("span",{className:"price-cycle",children:["/ ",u.short]})]})]}),a.jsx("button",{className:"sub-edit-btn",onClick:E=>{E.stopPropagation(),t(e)},children:a.jsx(nd,{size:16})}),a.jsx("div",{className:`sub-next ${f!==null&&f<=0?"soon":f!==null&&f<=2?"warning":""}`,children:a.jsx("span",{children:Tm(f)})})]})})]})]}),a.jsx(ba,{visible:y,title:"Удалить подписку?",message:`Подписка «${e.name}» будет удалена безвозвратно.`,onConfirm:C,onCancel:()=>{h(!1),i(0)}})]})},Im=({visible:e,amount:t,currency:n,currencies:r,onAmountChange:o,onCurrencyChange:i,onClose:l})=>{const[s,c]=N.useState(t?String(t):""),[d,y]=N.useState(!1),[h,m]=N.useState(!1),[k,z]=N.useState(0);if(N.useEffect(()=>{e&&(c(t?String(t):""),m(!1),y(!1))},[e,t]),!e)return null;const j=r.find(b=>b.code===n),I=b=>{var T,g,C;(C=(g=(T=window.Telegram)==null?void 0:T.WebApp)==null?void 0:g.HapticFeedback)==null||C.impactOccurred("light"),c(E=>E==="0"&&b!=="."?b:b==="."&&E.includes(".")||E.includes(".")&&E.split(".")[1].length>=2||E.replace(".","").length>=8?E:E+b),z(E=>E+1)},f=()=>{var b,T,g;(g=(T=(b=window.Telegram)==null?void 0:b.WebApp)==null?void 0:T.HapticFeedback)==null||g.impactOccurred("light"),c(C=>C.slice(0,-1)),z(C=>C+1)},u=()=>{m(!0),setTimeout(()=>l(),280)},p=()=>{const b=s||"0";o(parseFloat(b)>0?b:""),u()},S=s?`${(j==null?void 0:j.symbol)||""} ${s}`:`${(j==null?void 0:j.symbol)||""} 0`;return a.jsx("div",{className:"amount-modal-overlay",onClick:u,children:a.jsxs("div",{className:`amount-modal ${h?"closing":""}`,onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"amount-modal-topbar",children:[a.jsxs("div",{className:"currency-capsule-wrapper",children:[a.jsxs("button",{className:"currency-capsule",onClick:()=>y(!d),children:[n," (",j==null?void 0:j.symbol,")",a.jsx(at,{size:14,className:`capsule-chevron ${d?"open":""}`})]}),d&&a.jsx("div",{className:"currency-dropdown",children:r.map(b=>a.jsxs("button",{className:`currency-dropdown-item ${n===b.code?"active":""}`,onClick:()=>{i(b.code),y(!1)},children:[b.code," (",b.symbol,")"]},b.code))})]}),a.jsx("button",{className:"amount-modal-close",onClick:u,children:a.jsx(Yn,{size:20})})]}),a.jsxs("div",{className:"amount-display-section",children:[a.jsx("span",{className:"amount-display-label",children:"Сумма"}),a.jsx("span",{className:"amount-display-value",children:S},k)]}),a.jsx("div",{className:"numpad",children:["1","2","3","4","5","6","7","8","9",".","0","back"].map(b=>a.jsx("button",{className:`numpad-key ${b==="back"?"numpad-back":""}`,onClick:()=>b==="back"?f():I(b),children:b==="back"?a.jsx(ka,{size:24}):b},b))}),a.jsx("button",{className:"amount-done-btn",onClick:p,children:"Готово"})]})})},Fm=({onClose:e,onSave:t,onDelete:n,editData:r,templates:o,isLoading:i,defaultNotificationSettings:l,customCategories:s=[],onAddCategory:c,categories:d=Rn,preselectedDate:y})=>{var R,U;const[h,m]=N.useState(r?2:1),[k,z]=N.useState(""),[j,I]=N.useState("Все"),[f,u]=N.useState(!1),[p,S]=N.useState(!1),[b,T]=N.useState(!1),[g,C]=N.useState("emoji"),[E,M]=N.useState(!1),[B,q]=N.useState(!1),[A,J]=N.useState(!1);N.useEffect(()=>{var W,Z;const w=(W=window.Telegram)==null?void 0:W.WebApp;w&&w.expand();const H=()=>{var fe,Le;(((fe=document.activeElement)==null?void 0:fe.tagName)==="INPUT"||((Le=document.activeElement)==null?void 0:Le.tagName)==="TEXTAREA")&&setTimeout(()=>{var Re;(Re=document.activeElement)==null||Re.scrollIntoView({behavior:"smooth",block:"center"})},100)};return(Z=window.visualViewport)==null||Z.addEventListener("resize",H),()=>{var fe;return(fe=window.visualViewport)==null?void 0:fe.removeEventListener("resize",H)}},[]);const ye=()=>{u(!0),setTimeout(()=>e(),280)},De=d.find(w=>w.id==="other"),ae=[...d.filter(w=>w.id!=="other"),...s,...De?[De]:[]],[v,L]=N.useState(r?{...r,firstBillingDate:(r.next_billing_date||r.first_billing_date||r.firstBillingDate||"").split("T")[0],billingCycle:r.billing_cycle||r.billingCycle||"monthly",trialEndDate:(r.trial_end_date||r.trialEndDate||"").split("T")[0]||"",category:r.category||"Другое",notifyEnabled:r.notify_enabled??!0}:{name:"",amount:"",currency:"RUB",billingCycle:"monthly",firstBillingDate:y||zm(),trialEndDate:"",category:"Другое",color:"#6366f1",icon:"📦",domain:null,logo_url:null,isCustom:!0,notifyEnabled:!0}),O=["Все",...Rn.map(w=>w.name)],K=o.filter(w=>{const H=w.name.toLowerCase().includes(k.toLowerCase()),W=j==="Все"||w.category===j;return H&&W}),ee=w=>{L({...v,name:w.name,color:w.color,icon:w.icon||"📦",domain:w.domain,logo_url:w.logo_url||null,category:w.category,isCustom:!1,templateId:w.id}),m(2)},et=()=>{!v.name||!v.amount||(ad(),t({...v,id:r==null?void 0:r.id,amount:parseFloat(v.amount),next_billing_date:v.billingCycle==="trial"&&v.trialEndDate?v.trialEndDate:v.firstBillingDate,first_billing_date:v.firstBillingDate,billing_cycle:v.billingCycle,trial_end_date:v.billingCycle==="trial"?v.trialEndDate:null,notify_enabled:v.notifyEnabled}))};return a.jsxs("div",{className:"modal-overlay",onClick:ye,children:[a.jsxs("div",{className:`modal subscription-modal ${f?"closing":""}`,onClick:w=>w.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("button",{className:"back-btn",onClick:()=>h===1||r?ye():m(1),children:h===1||r?a.jsx(Yn,{size:20}):a.jsx(qu,{size:20})}),a.jsx("h2",{children:r?"Редактировать":h===1?"Выберите сервис":"Новая подписка"}),r?a.jsx("button",{className:"icon-btn delete",onClick:()=>J(!0),children:a.jsx(Sa,{size:18})}):a.jsx("div",{style:{width:32}})]}),a.jsx(ba,{visible:A,title:"Удалить подписку?",message:`${(r==null?void 0:r.name)||"Подписка"} будет удалена без возможности восстановления`,onConfirm:()=>{J(!1),n==null||n(r.id),ye()},onCancel:()=>J(!1)}),h===1?a.jsxs("div",{className:"template-selector",children:[a.jsxs("div",{className:"template-selector-sticky",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(fm,{size:18}),a.jsx("input",{type:"text",placeholder:"Поиск сервиса...",value:k,onChange:w=>z(w.target.value)})]}),a.jsx("div",{className:"category-tabs",children:O.map(w=>a.jsx("button",{className:`cat-tab ${j===w?"active":""}`,onClick:()=>I(w),children:w},w))})]}),a.jsxs("div",{className:"template-selector-scroll",children:[a.jsxs("button",{className:"custom-sub-btn",onClick:()=>m(2),children:[a.jsx("div",{className:"custom-sub-icon",children:a.jsx(Bo,{size:22,color:"white"})}),a.jsx("span",{children:"Своя подписка"}),a.jsx(at,{size:18,className:"custom-sub-chevron"})]}),a.jsx("div",{className:"template-divider",children:a.jsx("span",{children:"Или выберите из шаблонов"})}),a.jsx("div",{className:"template-grid",children:K.map(w=>a.jsxs("button",{className:"template-item",onClick:()=>ee(w),children:[a.jsx(lt,{domain:w.domain,emoji:w.icon,color:w.color,size:48,logoUrl:w.logo_url}),a.jsx("span",{children:w.name})]},w.id))})]})]}):a.jsxs("div",{className:"subscription-form card-form",children:[a.jsxs("div",{className:`card-form-logo ${E?"scaled-up":""}`,onClick:()=>{M(!0),setTimeout(()=>S(!0),150)},children:[a.jsx(lt,{domain:v.domain,emoji:v.icon,color:v.color,size:96,logoUrl:v.logo_url}),a.jsx("div",{className:"logo-edit-badge",children:a.jsx(nd,{size:14})})]}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Название"}),a.jsx("input",{className:"settings-row-value-input",type:"text",value:v.name,onChange:w=>L({...v,name:w.target.value}),placeholder:"Название"})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Периодичность"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("select",{className:"native-select",value:v.billingCycle,onChange:w=>L({...v,billingCycle:w.target.value}),children:dn.map(w=>a.jsx("option",{value:w.value,children:w.label},w.value))}),a.jsx(at,{size:16,className:"settings-row-chevron"})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Дата начала"}),a.jsx("input",{type:"date",className:"settings-date-input",value:v.firstBillingDate,onChange:w=>L({...v,firstBillingDate:w.target.value})})]}),v.billingCycle==="trial"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row trial-end-row",children:[a.jsx("span",{className:"settings-row-label",children:"Дата окончания"}),a.jsx("input",{type:"date",className:"settings-date-input",value:v.trialEndDate,min:v.firstBillingDate,onChange:w=>L({...v,trialEndDate:w.target.value})})]})]})]}),a.jsx("div",{className:"settings-card",onClick:()=>q(!0),children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Сумма"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("span",{children:v.amount?`${(R=we.find(w=>w.code===v.currency))==null?void 0:R.symbol} ${v.amount} (${v.currency})`:`${(U=we.find(w=>w.code===v.currency))==null?void 0:U.symbol} 0.00 (${v.currency})`}),a.jsx(at,{size:16,className:"settings-row-chevron"})]})]})}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row",children:[a.jsxs("div",{className:"settings-row-left",children:[a.jsx("div",{className:"settings-row-icon",style:{background:"rgba(139, 92, 246, 0.15)",color:"#8B5CF6"},children:a.jsx(cm,{size:16})}),a.jsx("span",{className:"settings-row-label",children:"Категория"})]}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("select",{className:"native-select",value:v.category,onChange:w=>L({...v,category:w.target.value}),children:ae.map(w=>a.jsx("option",{value:w.name,children:w.name},w.id))}),a.jsx(at,{size:16,className:"settings-row-chevron"})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row",children:[a.jsxs("div",{className:"settings-row-left",children:[a.jsx("div",{className:"settings-row-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:a.jsx(Vp,{size:16})}),a.jsxs("div",{children:[a.jsx("span",{className:"settings-row-label",children:"Уведомления"}),a.jsx("p",{className:"settings-row-hint",children:"Настроить можно в настройках"})]})]}),a.jsxs("label",{className:"toggle",onClick:w=>w.stopPropagation(),children:[a.jsx("input",{type:"checkbox",checked:v.notifyEnabled,onChange:()=>L({...v,notifyEnabled:!v.notifyEnabled})}),a.jsx("span",{className:"toggle-slider"})]})]})]}),a.jsxs("button",{className:"save-btn",onClick:et,disabled:i||!v.name||!v.amount,children:[i?a.jsx(td,{className:"spin",size:20}):null,r?"Сохранить":"Добавить подписку"]})]})]}),a.jsx(Im,{visible:B,amount:v.amount,currency:v.currency,currencies:we,onAmountChange:w=>L({...v,amount:w}),onCurrencyChange:w=>L({...v,currency:w}),onClose:()=>q(!1)}),p&&(()=>{const w=()=>{T(!0),M(!1),setTimeout(()=>{S(!1),T(!1)},280)};let H=0,W=0,Z=!1;const fe=te=>{H=te.touches[0].clientY,W=0;const tt=te.currentTarget.querySelector(".logo-sheet-grid");Z=!tt||tt.scrollTop<=0},Le=te=>{const tt=te.touches[0].clientY-H;W=tt,Z&&tt>0&&(te.currentTarget.style.transform=`translateY(${tt}px)`)},Re=te=>{Z&&W>80&&w(),te.currentTarget.style.transform="",te.currentTarget.style.transition="transform 0.2s ease",setTimeout(()=>{te.currentTarget&&(te.currentTarget.style.transition="")},200)};return a.jsx("div",{className:"logo-sheet-overlay",onClick:te=>{te.stopPropagation(),w()},children:a.jsxs("div",{className:`logo-sheet ${b?"closing":""}`,onClick:te=>te.stopPropagation(),onTouchStart:fe,onTouchMove:Le,onTouchEnd:Re,children:[a.jsx("div",{className:"logo-sheet-handle"}),a.jsx("div",{className:"logo-sheet-preview",children:a.jsx(lt,{domain:null,emoji:v.icon,color:v.color,size:80,logoUrl:null})}),a.jsx("div",{className:"logo-sheet-colors",children:yo.slice(0,7).map(te=>a.jsx("button",{className:`logo-color-btn ${v.color===te?"active":""}`,style:{background:te},onClick:()=>L({...v,color:te,domain:null,logo_url:null})},te))}),a.jsxs("div",{className:"logo-sheet-tabs",children:[a.jsx("button",{className:`logo-sheet-tab ${g==="photo"?"active":""}`,onClick:()=>C("photo"),children:"Фото"}),a.jsx("button",{className:`logo-sheet-tab ${g==="emoji"?"active":""}`,onClick:()=>C("emoji"),children:"Эмодзи"}),a.jsx("button",{className:`logo-sheet-tab ${g==="symbols"?"active":""}`,onClick:()=>C("symbols"),children:"Символы"})]}),a.jsx("div",{className:"logo-sheet-grid",children:g==="photo"?a.jsxs("div",{className:"logo-sheet-placeholder",children:[a.jsx(Yp,{size:32,color:"var(--text-secondary)"}),a.jsx("span",{children:"В разработке"}),a.jsx("p",{children:"Загрузка фото будет доступна в следующем обновлении"})]}):g==="emoji"?Em.map((te,tt)=>a.jsx("button",{className:`logo-grid-item ${v.icon===te?"active":""}`,onClick:()=>L({...v,icon:te,domain:null,logo_url:null}),children:a.jsx("span",{className:"logo-grid-emoji",children:te})},te+tt)):rd.map(te=>a.jsx("button",{className:`logo-grid-item ${v.icon==="symbol:"+te.name?"active":""}`,onClick:()=>L({...v,icon:"symbol:"+te.name,domain:null,logo_url:null}),children:a.jsx(te.icon,{size:24,color:"var(--text-primary)",strokeWidth:1.5})},te.name))})]})})})()]})},Cl=(e,t=400)=>{const[n,r]=N.useState(e),o=N.useRef(null);return N.useEffect(()=>{const i=n,l=e-i;if(l===0)return;const s=performance.now(),c=d=>{const y=d-s,h=Math.min(y/t,1),m=1-Math.pow(1-h,3);r(Math.round(i+l*m)),h<1&&(o.current=requestAnimationFrame(c))};return o.current=requestAnimationFrame(c),()=>cancelAnimationFrame(o.current)},[e]),n},Om=({subscriptions:e,currencies:t,onClose:n})=>{const[r,o]=N.useState(!1),[i,l]=N.useState(0),[s,c]=N.useState(0),[d,y]=N.useState(""),[h,m]=N.useState(!1),k=N.useRef(!1),z=N.useRef(0),j=N.useRef(0),I=N.useRef(null),f=N.useRef(0),u=N.useRef(0),p=N.useRef(0),S=N.useRef(null),b=()=>{o(!0),setTimeout(()=>n(),280)},T=N.useMemo(()=>{let R=0;const U={};return e.forEach(w=>{const H=dn.find(Re=>Re.value===(w.billing_cycle||w.billingCycle)),W=we.find(Re=>Re.code===w.currency),fe=w.amount*((W==null?void 0:W.rate)||1)*((H==null?void 0:H.multiplier)||1);R+=fe;const Le=w.category||"Другое";U[Le]=(U[Le]||0)+fe}),{monthly:Math.round(R),yearly:Math.round(R*12),count:e.length,categories:U}},[e]),g=N.useMemo(()=>Object.entries(T.categories).map(([U,w])=>{var H;return{name:U,value:Math.round(w),color:((H=Rn.find(W=>W.name===U))==null?void 0:H.color)||"#6B7280",percent:T.monthly>0?Math.round(w/T.monthly*100):0}}).sort((U,w)=>w.value-U.value),[T]),C=N.useMemo(()=>{if(g.length===0)return[];const R=3,w=360-R*g.length;let H=0;return g.map(W=>{const Z=Math.max(W.percent/100*w,8),fe={...W,startAngle:H,sweepAngle:Z};return H+=Z+R,fe})},[g]),E=N.useCallback(R=>{if(C.length===0)return 0;const U=((270-R)%360+360)%360;for(let W=0;W<C.length;W++){const Z=C[W],fe=Z.startAngle+Z.sweepAngle;if(U>=Z.startAngle&&U<fe)return W}let w=1/0,H=0;return C.forEach((W,Z)=>{const fe=W.startAngle+W.sweepAngle/2,Le=Math.abs((U-fe+180)%360-180);Le<w&&(w=Le,H=Z)}),H},[C]);N.useEffect(()=>{var U;const R=E(s);R!==i&&(y(((U=g[i])==null?void 0:U.name)||""),l(R),m(!0),setTimeout(()=>m(!1),300))},[s,E]);const M=(R,U)=>{const w=U.left+U.width/2,H=U.top+U.height/2,W=R.touches?R.touches[0].clientX:R.clientX,Z=R.touches?R.touches[0].clientY:R.clientY;return Math.atan2(Z-H,W-w)*(180/Math.PI)},B=R=>{if(!I.current)return;cancelAnimationFrame(S.current),k.current=!0;const U=I.current.getBoundingClientRect();z.current=M(R,U),j.current=s,f.current=0,u.current=z.current,p.current=performance.now()},q=R=>{if(!k.current||!I.current)return;R.preventDefault();const U=I.current.getBoundingClientRect(),w=M(R,U),H=w-z.current,W=performance.now(),Z=W-p.current;Z>0&&(f.current=(w-u.current)/Z),u.current=w,p.current=W,c(j.current+H)},A=()=>{if(!k.current)return;k.current=!1;let R=f.current*16;const U=()=>{Math.abs(R)<.1||(R*=.95,c(w=>w+R),S.current=requestAnimationFrame(U))};S.current=requestAnimationFrame(U)};N.useEffect(()=>{const R=I.current;if(!R)return;const U={passive:!1},w=H=>q(H);return R.addEventListener("touchmove",w,U),()=>R.removeEventListener("touchmove",w,U)},[s]);const J=g[i]||{name:"-",value:0,percent:0,color:"#666"},ye=Cl(J.value),De=Cl(J.percent),ae=240,v=ae/2,L=95,O=22,K=L,ee=(R,U,w,H)=>{const W=H*Math.PI/180;return{x:R+w*Math.cos(W),y:U+w*Math.sin(W)}},et=(R,U,w,H,W)=>{const Z=ee(R,U,w,H),fe=ee(R,U,w,W),Le=W-H>180?1:0;return`M ${Z.x} ${Z.y} A ${w} ${w} 0 ${Le} 1 ${fe.x} ${fe.y}`};return a.jsxs("div",{className:`analytics-halfsheet ${r?"closing":""}`,children:[a.jsx("div",{className:"sheet-handle"}),a.jsxs("div",{className:"analytics-sheet-header",children:[a.jsx("h2",{children:"Аналитика"}),a.jsx("button",{className:"analytics-close-btn",onClick:b,children:a.jsx(Yn,{size:18})})]}),a.jsxs("div",{className:"analytics-content",children:[a.jsxs("div",{className:"ring-sub-count",children:["У вас ",a.jsx("span",{children:T.count})," ",T.count===1?"подписка":T.count<5?"подписки":"подписок"]}),a.jsxs("div",{className:"ring-container",children:[a.jsx("div",{className:"ring-pointer",children:"▼"}),a.jsxs("svg",{ref:I,width:ae,height:ae,viewBox:`0 0 ${ae} ${ae}`,className:"ring-svg",onTouchStart:B,onTouchEnd:A,onMouseDown:B,onMouseMove:q,onMouseUp:A,onMouseLeave:A,children:[a.jsx("circle",{cx:v,cy:v,r:K,fill:"none",stroke:"var(--bg-tertiary)",strokeWidth:O,opacity:"0.5"}),a.jsx("g",{style:{transform:`rotate(${s}deg)`,transformOrigin:"center",transition:k.current?"none":"transform 0.1s ease-out"},children:C.map((R,U)=>{const w=U===i,H=et(v,v,L,R.startAngle,R.startAngle+R.sweepAngle);return a.jsxs("g",{children:[w&&a.jsx("path",{d:H,fill:"none",stroke:R.color,strokeWidth:O+8,strokeLinecap:"round",opacity:"0.25",filter:"url(#glow)"}),a.jsx("path",{d:H,fill:"none",stroke:w?R.color:R.color+"66",strokeWidth:w?O+2:O,strokeLinecap:"round"}),w&&(()=>{const W=ee(v,v,L,R.startAngle+R.sweepAngle/2);return a.jsx("circle",{cx:W.x,cy:W.y,r:5,fill:R.color})})()]},R.name)})}),a.jsx("defs",{children:a.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[a.jsx("feGaussianBlur",{stdDeviation:"6",result:"blur"}),a.jsxs("feMerge",{children:[a.jsx("feMergeNode",{in:"blur"}),a.jsx("feMergeNode",{in:"SourceGraphic"})]})]})})]}),a.jsxs("div",{className:"ring-center-text",children:[a.jsx("div",{className:`ring-cat-name ${h?"animating":""}`,children:J.name}),a.jsxs("div",{className:"ring-cat-details",children:[ye.toLocaleString("ru-RU")," ₽ · ",De,"%"]})]}),a.jsx("div",{className:"ring-glow-bg",style:{background:`radial-gradient(circle, ${J.color}33 0%, transparent 70%)`}})]}),a.jsxs("div",{className:"analytics-cards",children:[a.jsxs("div",{className:"analytics-card",children:[a.jsxs("span",{className:"analytics-card-label",children:["Годовой",a.jsx("br",{}),"прогноз"]}),a.jsxs("span",{className:"analytics-card-value",children:[T.yearly.toLocaleString("ru-RU")," ₽"]})]}),a.jsxs("div",{className:"analytics-card",children:[a.jsxs("span",{className:"analytics-card-label",children:["Средняя цена",a.jsx("br",{}),"в месяц"]}),a.jsxs("span",{className:"analytics-card-value",children:[T.monthly.toLocaleString("ru-RU")," ₽"]})]})]})]})]})},Am=({visible:e,categories:t,customCategories:n,onAddCategory:r,onDeleteCategory:o,onClose:i})=>{const[l,s]=N.useState(""),[c,d]=N.useState(yo[0]),[y,h]=N.useState(!1),[m,k]=N.useState(!1),[z,j]=N.useState({}),[I,f]=N.useState(null);if(N.useEffect(()=>{e&&(k(!1),j({}))},[e]),!e)return null;const u=t,p=()=>{k(!0),setTimeout(()=>i(),280)},S=()=>{l.trim()&&(r(l.trim(),c),s(""),d(yo[0]))},b=(E,M)=>{j(B=>({...B,[E]:{...B[E],startX:M.touches[0].clientX,swiping:!0}}))},T=(E,M)=>{const B=z[E];if(!(B!=null&&B.swiping))return;const q=B.startX-M.touches[0].clientX;j(A=>({...A,[E]:{...A[E],x:Math.max(0,Math.min(80,q))}}))},g=E=>{const M=z[E];M&&j(B=>({...B,[E]:{...B[E],swiping:!1,x:M.x>40?80:0}}))},C=()=>{I&&(o(I.id),j(E=>{const M={...E};return delete M[I.id],M}),f(null))};return a.jsxs("div",{className:"categories-sheet-overlay",onClick:p,children:[a.jsxs("div",{className:`categories-sheet ${m?"closing":""}`,onClick:E=>E.stopPropagation(),children:[a.jsxs("div",{className:"categories-sheet-header",children:[a.jsx("h3",{children:"Категории"}),a.jsx("button",{className:"amount-modal-close",onClick:p,children:a.jsx(Yn,{size:20})})]}),a.jsxs("div",{className:"categories-list-wrapper",children:[a.jsx("div",{className:"settings-card",children:u.map((E,M)=>{const B=z[E.id]||{x:0,swiping:!1};return a.jsxs(Gs.Fragment,{children:[a.jsxs("div",{className:"cat-swipe-wrapper",children:[a.jsx("div",{className:"cat-swipe-bg",style:{opacity:B.x/80},children:a.jsxs("button",{className:"swipe-delete-btn",onClick:()=>f(E),children:[a.jsx(Sa,{size:18}),a.jsx("span",{children:"Удалить"})]})}),a.jsxs("div",{className:"category-list-item",style:{transform:`translateX(-${B.x}px)`,transition:B.swiping?"none":"transform 0.2s ease"},onTouchStart:q=>b(E.id,q),onTouchMove:q=>T(E.id,q),onTouchEnd:()=>g(E.id),children:[a.jsx("span",{className:"category-list-name",children:E.name}),a.jsx("div",{className:"category-color-dot",style:{background:E.color}})]})]}),M<u.length-1&&a.jsx("div",{className:"settings-row-divider"})]},E.id)})}),a.jsx("p",{className:"categories-hint",children:"Свайпните влево, чтобы удалить категорию. Подписки из удалённой категории перейдут в «Другое»."}),a.jsxs("div",{className:"new-category-row",children:[a.jsx("div",{className:"category-color-dot clickable",style:{background:c},onClick:()=>h(!y)}),a.jsx("input",{type:"text",className:"new-category-input",value:l,onChange:E=>s(E.target.value),placeholder:"Новая категория"}),a.jsx("button",{className:"new-category-add-btn",onClick:S,disabled:!l.trim(),children:"Добавить"})]})]}),y&&a.jsxs("div",{className:"color-picker-sheet",children:[a.jsx("div",{className:"color-picker-handle"}),a.jsx("h4",{children:"Выберите цвет"}),a.jsx("div",{className:"color-palette",children:yo.map(E=>a.jsx("button",{className:`color-palette-item ${c===E?"active":""}`,style:{background:E},onClick:()=>{d(E),h(!1)}},E))})]})]}),a.jsx(ba,{visible:!!I,title:"Удалить категорию?",message:I?`Категория «${I.name}» будет удалена. Подписки с этой категорией станут «Другое».`:"",onConfirm:C,onCancel:()=>f(null)})]})},Um=({user:e,appSettings:t,onUpdateSettings:n,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:l,theme:s,onToggleTheme:c,onClose:d,onSendTestNotification:y})=>{var q;const h=on(),m=(q=h==null?void 0:h.initDataUnsafe)==null?void 0:q.user,[k,z]=N.useState(!1),[j,I]=N.useState(!1),f=()=>{z(!0),setTimeout(()=>d(),280)},[u,p]=N.useState(!1),S=(m==null?void 0:m.photo_url)||null,b=m!=null&&m.first_name?`${m.first_name}${m.last_name?" "+m.last_name:""}`:(e==null?void 0:e.first_name)||"Пользователь",T=(m==null?void 0:m.id)||(e==null?void 0:e.telegram_id)||(e==null?void 0:e.id)||"—",g=r,C=t.firstReminder||{days:1,time:"09:00"},E=t.secondReminder||{days:-1,time:"09:00"},M=(A,J)=>{n(ye=>({...ye,firstReminder:{...ye.firstReminder||{days:1,time:"09:00"},[A]:J}}))},B=(A,J)=>{n(ye=>({...ye,secondReminder:{...ye.secondReminder||{days:-1,time:"09:00"},[A]:J}}))};return a.jsxs("div",{className:`settings-screen screen-enter ${k?"screen-exit":""}`,children:[a.jsxs("div",{className:"settings-header",children:[a.jsx("button",{className:"back-btn",onClick:f,children:a.jsx(ka,{size:20})}),a.jsx("h2",{children:"Настройки"}),a.jsx("div",{style:{width:32}})]}),a.jsxs("div",{className:"settings-content",children:[a.jsxs("div",{className:"profile-section",children:[a.jsx("div",{className:"profile-avatar",children:S?a.jsx("img",{src:S,alt:"Avatar"}):a.jsx("div",{className:"avatar-placeholder",children:b.charAt(0).toUpperCase()})}),a.jsx("h3",{className:"profile-name",children:b}),a.jsxs("span",{className:"profile-id",children:["ID: ",T]})]}),a.jsx("div",{className:"settings-section-label",children:"КАТЕГОРИИ"}),a.jsx("div",{className:"settings-card",onClick:()=>p(!0),children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Категории"}),a.jsxs("div",{className:"settings-row-value",children:[a.jsx("span",{children:g.length}),a.jsx(at,{size:16,className:"settings-row-chevron"})]})]})}),a.jsx("div",{className:"settings-section-label",children:"УВЕДОМЛЕНИЯ"}),a.jsxs("div",{className:"settings-card",children:[a.jsxs("div",{className:"settings-row notification-row",children:[a.jsx("span",{className:"settings-row-label",children:"Первое уведомление"}),a.jsxs("div",{className:"notification-row-controls",children:[a.jsx("select",{className:"native-select",value:C.days,onChange:A=>M("days",parseInt(A.target.value)),children:Is.map(A=>a.jsx("option",{value:A.value,children:A.label},A.value))}),C.days!==-1&&a.jsx("input",{type:"time",className:"time-input-capsule",value:C.time,onChange:A=>M("time",A.target.value)})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsxs("div",{className:"settings-row notification-row",children:[a.jsx("span",{className:"settings-row-label",children:"Второе уведомление"}),a.jsxs("div",{className:"notification-row-controls",children:[a.jsx("select",{className:"native-select",value:E.days,onChange:A=>B("days",parseInt(A.target.value)),children:Is.map(A=>a.jsx("option",{value:A.value,children:A.label},A.value))}),E.days!==-1&&a.jsx("input",{type:"time",className:"time-input-capsule",value:E.time,onChange:A=>B("time",A.target.value)})]})]}),a.jsx("div",{className:"settings-row-divider"}),a.jsx("div",{className:"settings-row",children:a.jsx("button",{className:"test-notification-btn",onClick:()=>{y&&y()},children:"Тест уведомлений"})})]}),a.jsx("p",{className:"settings-hint",children:"Уведомления приходят через Telegram‑бот. Убедитесь, что бот не заблокирован и уведомления от него включены."}),a.jsx("div",{className:"settings-row-divider"}),a.jsx("div",{className:"settings-row",children:a.jsx("button",{className:"test-notification-btn",style:{background:"var(--danger)",color:"white"},onClick:()=>{confirm("Сбросить все данные и вернуться к onboarding?")&&(localStorage.clear(),window.location.reload())},children:"🔄 Сбросить приложение"})}),a.jsx("div",{className:"settings-section-label",children:"ОФОРМЛЕНИЕ"}),a.jsx("div",{className:"settings-card",children:a.jsxs("div",{className:"settings-row",children:[a.jsx("span",{className:"settings-row-label",children:"Тёмная тема"}),a.jsxs("label",{className:"toggle",children:[a.jsx("input",{type:"checkbox",checked:s==="dark",onChange:()=>c()}),a.jsx("span",{className:"toggle-slider"})]})]})}),a.jsxs("div",{className:"version-badge",onClick:()=>I(!0),children:[a.jsx("span",{className:"version-tag",children:"Beta 0.1.13"}),a.jsx(at,{size:14})]})]}),j&&a.jsx("div",{className:"modal-overlay confirm-overlay",onClick:()=>I(!1),children:a.jsxs("div",{className:"version-modal",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"version-modal-header",children:[a.jsx("h3",{children:"О приложении"}),a.jsx("button",{className:"close-btn",onClick:()=>I(!1),children:a.jsx(Yn,{size:18})})]}),a.jsxs("div",{className:"version-modal-body",children:[a.jsx("div",{className:"version-logo",children:"Subfy"}),a.jsx("span",{className:"version-number",children:"Beta 0.1.13"}),a.jsx("p",{className:"version-desc",children:"⚙️ Это бета‑версия приложения. Если вы заметили ошибку или баг — сообщите нам через Telegram‑бот"}),a.jsx("button",{className:"contact-btn",onClick:()=>{var J;const A=on();(J=A==null?void 0:A.openTelegramLink)==null||J.call(A,"https://t.me/subfy_support_bot")},children:"Написать в бот"})]})]})}),a.jsx(Am,{visible:u,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:l,onClose:()=>p(!1)})]})},$m=({subscriptions:e,currencies:t,onOpenForm:n,onEditSubscription:r,currentMonth:o,onChangeMonth:i})=>{const[l,s]=N.useState(null),[c,d]=N.useState(!1),[y,h]=N.useState(!1),m=N.useRef(!0),k=new Date,z=o.getFullYear()===k.getFullYear()&&o.getMonth()===k.getMonth();N.useEffect(()=>{if(m.current!==z){h(!0);const g=setTimeout(()=>h(!1),550);return m.current=z,()=>clearTimeout(g)}},[z]);const I=(g=>{const C=g.getFullYear(),E=g.getMonth(),M=new Date(C,E,1),B=new Date(C,E+1,0),q=[],A=M.getDay()||7;for(let J=1;J<A;J++)q.push({date:null,subscriptions:[]});for(let J=1;J<=B.getDate();J++){const ye=new Date(C,E,J),De=e.filter(ae=>{const v=ae.billing_cycle||ae.billingCycle||"monthly";if(v==="trial"){const K=mn(ae.trial_end_date||ae.trialEndDate);return K?K.getFullYear()===C&&K.getMonth()===E&&K.getDate()===J:!1}const L=ae.first_billing_date||ae.next_billing_date||ae.firstBillingDate;return ld(L,v,C,E).some(K=>K.getDate()===J)});q.push({date:ye,subscriptions:De})}for(;q.length<42;)q.push({date:null,subscriptions:[]});return q})(o),f=o.toLocaleDateString("ru-RU",{month:"long",year:"numeric"}),u=g=>{const C=new Date(o);C.setMonth(C.getMonth()+g),i(C),b()},p=g=>`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`,S=g=>{g.date&&(g.subscriptions.length>0?(s(g),d(!1)):n==null||n(p(g.date)))},b=()=>{l&&(d(!0),setTimeout(()=>{s(null),d(!1)},250))},T=N.useMemo(()=>l?l.subscriptions.reduce((g,C)=>{const E=t.find(M=>M.code===C.currency)||t[0];return g+C.amount*E.rate},0):0,[l,t]);return a.jsxs("div",{className:"calendar-view",children:[a.jsxs("div",{className:"calendar-header",children:[a.jsx("button",{onClick:()=>u(-1),children:a.jsx(qu,{size:20})}),a.jsx("div",{className:"calendar-title",children:a.jsx("h3",{children:f})}),a.jsx("button",{onClick:()=>u(1),children:a.jsx(at,{size:20})})]}),a.jsx("div",{className:"calendar-weekdays",children:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(g=>a.jsx("div",{className:"weekday",children:g},g))}),a.jsx("div",{className:"calendar-grid",children:I.map((g,C)=>{var q;const E=((q=g.date)==null?void 0:q.toDateString())===new Date().toDateString(),M=g.subscriptions.length>0,B=M?g.subscriptions[0].color:null;return a.jsx("div",{className:`calendar-day ${g.date?"":"empty"} ${M?"has-subs":""} ${E?"today":""}`,style:M&&E?{background:B+"25"}:M?{background:B+"15"}:void 0,onClick:()=>S(g),children:g.date&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"day-logo-container",children:M&&(g.subscriptions.length===1?a.jsx(lt,{domain:g.subscriptions[0].domain,emoji:g.subscriptions[0].icon,color:g.subscriptions[0].color,size:22,logoUrl:g.subscriptions[0].logo_url}):g.subscriptions.length===2?a.jsxs("div",{className:"day-logos-pair",children:[a.jsx(lt,{domain:g.subscriptions[0].domain,emoji:g.subscriptions[0].icon,color:g.subscriptions[0].color,size:18,logoUrl:g.subscriptions[0].logo_url}),a.jsx(lt,{domain:g.subscriptions[1].domain,emoji:g.subscriptions[1].icon,color:g.subscriptions[1].color,size:18,logoUrl:g.subscriptions[1].logo_url})]}):a.jsxs("div",{className:"day-logos-pair",children:[a.jsx(lt,{domain:g.subscriptions[0].domain,emoji:g.subscriptions[0].icon,color:g.subscriptions[0].color,size:18,logoUrl:g.subscriptions[0].logo_url}),a.jsxs("div",{className:"day-count-badge",children:["+",g.subscriptions.length-1]})]}))}),a.jsx("span",{className:"day-number",children:g.date.getDate()})]})},C)})}),z?a.jsxs("button",{className:`calendar-add-btn ${y?"drum-in":""}`,onClick:()=>n==null?void 0:n(null),children:[a.jsx(Bo,{size:20}),"Добавить подписку"]}):a.jsxs("button",{className:`calendar-add-btn calendar-return-btn ${y?"drum-in":""}`,onClick:()=>i(new Date),children:[a.jsx(ka,{size:20}),"Вернуться к активному месяцу"]}),l&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`day-bottom-sheet-overlay ${c?"closing":""}`,onClick:b}),a.jsxs("div",{className:`day-bottom-sheet ${c?"closing":""}`,children:[a.jsx("div",{className:"sheet-handle"}),a.jsxs("div",{className:"sheet-header",children:[a.jsx("h4",{children:"Подписки"}),a.jsx("span",{className:"sheet-date",children:_m(l.date)})]}),a.jsx("div",{className:"sheet-list",children:l.subscriptions.map(g=>{const C=t.find(M=>M.code===g.currency)||t[0],E=dn.find(M=>M.value===(g.billing_cycle||g.billingCycle));return a.jsxs("div",{className:"sheet-subscription-item",onClick:()=>{b(),r==null||r(g)},children:[a.jsx(lt,{domain:g.domain,emoji:g.icon,color:g.color,size:40,logoUrl:g.logo_url}),a.jsxs("div",{className:"sheet-sub-info",children:[a.jsx("span",{className:"sheet-sub-name",children:g.name}),a.jsx("span",{className:"sheet-sub-cycle",children:(E==null?void 0:E.label)||"Ежемесячно"})]}),a.jsxs("div",{className:"sheet-sub-right",children:[a.jsxs("span",{className:"sheet-sub-amount",children:[g.amount.toLocaleString("ru-RU")," ",C.symbol]}),a.jsx(at,{size:16,className:"sheet-chevron"})]})]},g.id)})}),a.jsxs("button",{className:"sheet-add-btn",onClick:()=>{const g=p(l.date);b(),n==null||n(g)},children:[a.jsx(Bo,{size:18}),"Добавить подписку"]}),a.jsxs("div",{className:"sheet-total",children:[a.jsx("span",{children:"Итого"}),a.jsxs("span",{className:"sheet-total-amount",children:[Math.round(T).toLocaleString("ru-RU")," ₽"]})]})]})]})]})},Bm=({value:e})=>{const t=Cl(e,500);return a.jsxs("span",{className:"hero-amount-text",children:["₽ ",t.toLocaleString("ru-RU")]})};function Vm(){var Na;const[e,t]=N.useState("loading"),[n,r]=N.useState(null),[o,i]=N.useState(()=>{const x=localStorage.getItem("subfy_theme");if(x)return x;const P=on();return(P==null?void 0:P.colorScheme)||"dark"}),[l,s]=N.useState("calendar"),[c,d]=N.useState(null),[y,h]=N.useState(new Date),[m,k]=N.useState(null),[z,j]=N.useState(!1),[I,f]=N.useState(null),[u,p]=N.useState([]),[S,b]=N.useState(!1),[T,g]=N.useState(null),[C,E]=N.useState(!1),[M,B]=N.useState(!1),[q,A]=N.useState(!1),[J,ye]=N.useState({visible:!1,message:"",type:"success"}),[De,ae]=N.useState([]),[v,L]=N.useState({}),[O,K]=N.useState(()=>{const x=localStorage.getItem("subfy_settings"),P={notificationsEnabled:!0,firstReminder:{days:1,time:"09:00"},secondReminder:{days:-1,time:"09:00"},categoryOrder:null,hiddenCategories:[]};return x?{...P,...JSON.parse(x)}:P}),[ee,et]=N.useState(()=>{const x=localStorage.getItem("subfy_custom_categories");return x?JSON.parse(x):[]}),[R,U]=N.useState(()=>{const x=localStorage.getItem("subfy_deleted_default_categories");return x?JSON.parse(x):[]}),w=(x,P="#EF4444")=>{const F={id:`custom-${Date.now()}`,name:x,color:P,isCustom:!0};et($=>{const V=[...$,F];return localStorage.setItem("subfy_custom_categories",JSON.stringify(V)),V})},H=x=>{const P=ee.some(V=>V.id===x),$=[...Rn,...ee].find(V=>V.id===x);P?et(V=>{const X=V.filter(Qe=>Qe.id!==x);return localStorage.setItem("subfy_custom_categories",JSON.stringify(X)),X}):U(V=>{const X=[...V,x];return localStorage.setItem("subfy_deleted_default_categories",JSON.stringify(X)),X}),$&&$.name!=="Другое"&&p(V=>V.map(X=>X.category===$.name?{...X,category:"Другое"}:X))},W=N.useMemo(()=>De.length>0?De.map(Cm):Nm,[De]),Z=N.useMemo(()=>[...Rn.filter(x=>!R.includes(x.id)),...ee],[ee,R]),fe=N.useMemo(()=>{const x=O.categoryOrder||Z.map(V=>V.id),P=x.map(V=>Z.find(X=>X.id===V)).filter(Boolean);Z.forEach(V=>{x.includes(V.id)||P.push(V)});const F={};P.forEach(V=>{const X=u.filter(Qe=>Qe.category===V.name);X.length>0&&(F[V.name]={...V,subscriptions:X})});const $=u.filter(V=>!Z.some(X=>X.name===V.category));return $.length>0&&(F["Без категории"]={id:"uncategorized",name:"Без категории",color:"#6B7280",subscriptions:$}),F},[u,Z,O]);N.useEffect(()=>{localStorage.setItem("subfy_settings",JSON.stringify(O)),n!=null&&n.id&&!C&&jl&&Gt.saveNotificationSettings(n.id,O).catch(()=>{})},[O]),N.useEffect(()=>{localStorage.setItem("subfy_theme",o)},[o]),N.useEffect(()=>{var P,F,$,V;const x=on();if(x){x.ready(),x.expand(),x.requestFullscreen&&x.requestFullscreen(),x.disableVerticalSwipes&&x.disableVerticalSwipes();const X=()=>{var Qn,Xn,Kn,Ca;const Qe=((Qn=x.safeAreaInset)==null?void 0:Qn.top)||0,Qt=((Xn=x.safeAreaInset)==null?void 0:Xn.bottom)||0,ze=((Kn=x.contentSafeAreaInset)==null?void 0:Kn.top)||0,Ur=((Ca=x.contentSafeAreaInset)==null?void 0:Ca.bottom)||0;document.documentElement.style.setProperty("--tg-safe-area-top",`${Qe}px`),document.documentElement.style.setProperty("--tg-safe-area-bottom",`${Qt}px`),document.documentElement.style.setProperty("--tg-content-safe-area-top",`${ze}px`),document.documentElement.style.setProperty("--tg-content-safe-area-bottom",`${Ur}px`)};X(),(P=x.onEvent)==null||P.call(x,"viewportChanged",X),(F=x.onEvent)==null||F.call(x,"safeAreaChanged",X),($=x.onEvent)==null||$.call(x,"contentSafeAreaChanged",X),(V=x.onEvent)==null||V.call(x,"fullscreenChanged",X)}Le()},[]);const Le=async()=>{try{const x=localStorage.getItem("subfy_templates");if(x)try{ae(JSON.parse(x))}catch{}const P=on(),F=P==null?void 0:P.initData,$=localStorage.getItem("subfy_onboarding_complete");if(!F||!jl){E(!0);const Qt=localStorage.getItem("subfy_subscriptions");Qt&&p(JSON.parse(Qt)),r({id:"dev-user",first_name:"Developer"}),t($?"main":"onboarding"),Gt.getTemplates().then(({templates:ze})=>{ze&&(ae(ze),localStorage.setItem("subfy_templates",JSON.stringify(ze)))}).catch(()=>{});return}const[V,X]=await Promise.all([Gt.auth(F),Gt.getTemplates().catch(()=>({templates:null}))]);X.templates&&(ae(X.templates),localStorage.setItem("subfy_templates",JSON.stringify(X.templates))),r(V.user);const Qe=V.user;if(Qe){const Qt=ze=>ze?ze.substring(0,5):"09:00";K(ze=>{var Ur,Qn,Xn,Kn;return{...ze,notificationsEnabled:Qe.notifications_enabled??ze.notificationsEnabled,firstReminder:{days:Qe.first_reminder_days??((Ur=ze.firstReminder)==null?void 0:Ur.days)??1,time:Qt(Qe.first_reminder_time)||((Qn=ze.firstReminder)==null?void 0:Qn.time)||"09:00"},secondReminder:{days:Qe.second_reminder_days??((Xn=ze.secondReminder)==null?void 0:Xn.days)??-1,time:Qt(Qe.second_reminder_time)||((Kn=ze.secondReminder)==null?void 0:Kn.time)||"09:00"}}})}p(V.subscriptions||[]),t($?"main":"onboarding")}catch(x){console.error("Init error:",x),E(!0);const P=localStorage.getItem("subfy_subscriptions");P&&p(JSON.parse(P)),r({id:"dev-user",first_name:"User"});const F=localStorage.getItem("subfy_onboarding_complete");t(F?"main":"onboarding")}},Re=(x,P="success")=>{ye({visible:!0,message:x,type:P})},te=async x=>{b(!0);try{if(!C&&(n!=null&&n.id)){const{subscription:P}=await Gt.saveSubscription(n.id,x);p(I?F=>F.map($=>$.id===P.id?P:$):F=>[P,...F])}else{const P={...x,id:(I==null?void 0:I.id)||`local-${Date.now()}`};p(I?F=>{const $=F.map(V=>V.id===P.id?P:V);return localStorage.setItem("subfy_subscriptions",JSON.stringify($)),$}:F=>{const $=[P,...F];return localStorage.setItem("subfy_subscriptions",JSON.stringify($)),$})}j(!1),Re(I?"Подписка сохранена":"Подписка добавлена"),Fs(),f(null)}catch(P){console.error("Save error:",P),Re("Ошибка сохранения","error")}finally{b(!1)}},tt=async x=>{try{!C&&(n!=null&&n.id)&&await Gt.deleteSubscription(n.id,x),p(P=>{const F=P.filter($=>$.id!==x);return localStorage.setItem("subfy_subscriptions",JSON.stringify(F)),F})}catch(P){console.error("Delete error:",P)}},sd=async()=>{if(!(n!=null&&n.id)||C){Re("Недоступно в режиме разработки","error");return}try{await Gt.sendTestNotification(n.id),Fs(),Re("Тестовое уведомление отправлено!")}catch(x){console.error("Test notification error:",x),Re("Не удалось отправить уведомление","error")}},cd=()=>{localStorage.setItem("subfy_onboarding_complete","true"),t("main")};N.useMemo(()=>{let x=0;return u.forEach(P=>{const F=dn.find(X=>X.value===(P.billing_cycle||P.billingCycle)),$=we.find(X=>X.code===P.currency),V=P.amount*(($==null?void 0:$.rate)||1);x+=V*((F==null?void 0:F.multiplier)||1)}),{monthly:Math.round(x),yearly:Math.round(x*12)}},[u]);const Ar=N.useCallback((x,P,F)=>{const $=x.billing_cycle||x.billingCycle||"monthly";if($==="trial"){const X=mn(x.trial_end_date||x.trialEndDate);return X&&X.getFullYear()===P&&X.getMonth()===F}const V=x.first_billing_date||x.next_billing_date||x.firstBillingDate;return ld(V,$,P,F).length>0},[]),ud=N.useMemo(()=>{const x=y.getFullYear(),P=y.getMonth();return Math.round(u.reduce((F,$)=>{if(!Ar($,x,P))return F;const V=we.find(X=>X.code===$.currency)||we[0];return F+$.amount*V.rate},0))},[u,y,Ar]),ht=N.useMemo(()=>{const x=y.getFullYear(),P=y.getMonth();return u.filter(F=>(F.billing_cycle||F.billingCycle||"monthly")==="monthly"?!1:Ar(F,x,P))},[u,y,Ar]),ja=N.useMemo(()=>u.map(x=>({...x,nextDate:id(x.first_billing_date||x.next_billing_date||x.firstBillingDate,x.billing_cycle||x.billingCycle)})).filter(x=>{if(!x.nextDate)return!1;const P=Nl(x.nextDate);return P!==null&&P>=0&&P<=3}).sort((x,P)=>x.nextDate-P.nextDate),[u]),dd={firstReminder:O.firstReminder||{days:1,time:"09:00"},secondReminder:O.secondReminder||{days:-1,time:"09:00"}};return e==="loading"?a.jsx(Lm,{message:"Подключение..."}):e==="onboarding"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Os}),a.jsx(Dm,{onComplete:cd,theme:o})]}):a.jsxs("div",{className:`app ${o}`,children:[a.jsx("style",{children:Os}),M&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"analytics-overlay",onClick:()=>B(!1)}),a.jsx(Om,{subscriptions:u,currencies:we,onClose:()=>B(!1)})]}),q&&a.jsx("div",{className:"screen-overlay",children:a.jsx(Um,{user:n,appSettings:O,onUpdateSettings:K,categories:Z,customCategories:ee,onAddCategory:w,onDeleteCategory:H,theme:o,onToggleTheme:()=>i(o==="dark"?"light":"dark"),onClose:()=>A(!1),onSendTestNotification:sd})}),a.jsxs("header",{className:"app-header",children:[a.jsx("span",{className:"logo",children:"Subfy"}),a.jsxs("div",{className:"header-actions",children:[a.jsx("button",{className:"icon-btn",onClick:()=>B(!0),children:a.jsx(Bp,{size:20})}),a.jsx("button",{className:"icon-btn",onClick:()=>A(!0),children:a.jsx(pm,{size:20})})]})]}),a.jsxs("div",{className:"hero-amount",children:[a.jsx("div",{className:"hero-amount-glow"}),a.jsx(Bm,{value:ud}),ht.length>0?a.jsxs("div",{className:"hero-extra-row",children:[a.jsxs("button",{className:"hero-extra-badge",onClick:()=>{k(ht)},children:[a.jsx("div",{className:"hero-extra-dot",style:{background:((Na=Rn.find(x=>x.name===ht[0].category))==null?void 0:Na.color)||"#6B7280"}}),a.jsx("span",{className:"hero-extra-name",children:ht[0].name}),a.jsx("span",{className:"hero-extra-sep",children:"·"}),a.jsxs("span",{className:"hero-extra-amount",children:[ht[0].amount.toLocaleString("ru-RU")," ",(we.find(x=>x.code===ht[0].currency)||we[0]).symbol]})]}),ht.length>1&&a.jsxs("button",{className:"hero-extra-more",onClick:()=>k(ht),children:["+",ht.length-1]})]}):a.jsx("span",{className:"hero-badge",children:"В месяц"})]}),m&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"day-bottom-sheet-overlay",onClick:()=>k(null)}),a.jsxs("div",{className:"day-bottom-sheet",children:[a.jsx("div",{className:"sheet-handle"}),a.jsx("div",{className:"sheet-header",children:a.jsx("h4",{children:"Дополнительные платежи"})}),a.jsx("div",{className:"sheet-list",children:m.map(x=>{const P=we.find($=>$.code===x.currency)||we[0],F=dn.find($=>$.value===(x.billing_cycle||x.billingCycle));return a.jsxs("div",{className:"sheet-subscription-item",onClick:()=>{k(null),f(x),j(!0)},children:[a.jsx(lt,{domain:x.domain,emoji:x.icon,color:x.color,size:40,logoUrl:x.logo_url}),a.jsxs("div",{className:"sheet-sub-info",children:[a.jsx("span",{className:"sheet-sub-name",children:x.name}),a.jsx("span",{className:"sheet-sub-cycle",children:(F==null?void 0:F.label)||"Ежемесячно"})]}),a.jsxs("div",{className:"sheet-sub-right",children:[a.jsxs("span",{className:"sheet-sub-amount",children:[x.amount.toLocaleString("ru-RU")," ",P.symbol]}),a.jsx(at,{size:16,className:"sheet-chevron"})]})]},x.id)})}),a.jsxs("div",{className:"sheet-total",children:[a.jsx("span",{children:"Итого"}),a.jsxs("span",{className:"sheet-total-amount",children:[Math.round(m.reduce((x,P)=>{const F=we.find($=>$.code===P.currency)||we[0];return x+P.amount*F.rate},0)).toLocaleString("ru-RU")," ₽"]})]})]})]}),a.jsxs("div",{className:"view-tabs",children:[a.jsxs("button",{className:`view-tab ${l==="calendar"?"active":""}`,onClick:()=>s("calendar"),children:[a.jsx(Wp,{size:18}),"Календарь"]}),a.jsxs("button",{className:`view-tab ${l==="home"?"active":""}`,onClick:()=>s("home"),children:[a.jsx(ed,{size:18}),"Подписки"]})]}),a.jsx("div",{className:"content",children:l==="home"?a.jsxs(a.Fragment,{children:[ja.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"section-header",children:a.jsx("h2",{className:"section-title",children:"Ближайшие списания"})}),a.jsx("div",{className:"upcoming-list",children:ja.map(x=>{const P=we.find(V=>V.code===x.currency),F=Nl(x.nextDate),$=F===0?"Сегодня":F===1?"Завтра":`Через ${F} дн.`;return a.jsxs("div",{className:`upcoming-item ${F===0?"today":""}`,children:[a.jsx(lt,{domain:x.domain,emoji:x.icon,color:x.color,size:36,logoUrl:x.logo_url}),a.jsxs("div",{className:"upcoming-info",children:[a.jsx("div",{className:"upcoming-name",children:x.name}),a.jsx("div",{className:"upcoming-date",children:$})]}),a.jsxs("div",{className:"upcoming-amount",children:[x.amount," ",P==null?void 0:P.symbol]})]},x.id)})})]}),a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{className:"section-title",children:"Все подписки"}),a.jsx("span",{className:"section-count",children:u.length})]}),u.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"📦"}),a.jsx("h3",{className:"empty-title",children:"Нет подписок"}),a.jsx("p",{className:"empty-text",children:"Добавьте первую подписку"}),a.jsxs("button",{className:"empty-btn",onClick:()=>{ad(),j(!0)},children:[a.jsx(Bo,{size:20}),"Добавить"]})]}):Object.entries(fe).map(([x,P])=>a.jsxs("div",{className:"category-group",children:[a.jsxs("button",{className:"category-group-header",onClick:()=>L(F=>({...F,[x]:!F[x]})),children:[a.jsx("div",{className:"category-group-dot",style:{background:P.color}}),a.jsx("span",{className:"category-group-name",children:x}),a.jsx("span",{className:"category-group-count",children:P.subscriptions.length}),a.jsx(at,{size:16,className:`category-group-chevron ${v[x]?"":"expanded"}`})]}),!v[x]&&a.jsx("div",{className:"subscriptions-list",children:P.subscriptions.map(F=>a.jsx(Rm,{subscription:F,onEdit:$=>{f($),j(!0)},onDelete:tt,currencies:we},F.id))})]},x))]}):a.jsx($m,{subscriptions:u,currencies:we,currentMonth:y,onChangeMonth:h,onOpenForm:x=>{d(x),f(null),j(!0)},onEditSubscription:x=>{f(x),j(!0)}})}),z&&a.jsx(Fm,{onClose:()=>{j(!1),f(null),d(null)},onSave:te,onDelete:tt,editData:I,templates:W,isLoading:S,defaultNotificationSettings:dd,customCategories:ee,onAddCategory:w,categories:Z,preselectedDate:c}),a.jsx(Pm,{message:J.message,visible:J.visible,type:J.type,onHide:()=>ye({...J,visible:!1})})]})}const Os=`
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
  
  /* Цвета для тёмной темы (по умолчанию) */
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

    /* Onboarding Screen */
  .onboarding {
    --ob-bg: #0a0a0a;
    --ob-text: #ffffff;
    --ob-text-secondary: #999999;
    --ob-accent: #6366f1;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: var(--ob-bg);
    position: relative;
  }

  .onboarding.light {
    --ob-bg: #ffffff;
    --ob-text: #1a1a1a;
    --ob-text-secondary: #888888;
  }

  /* Skip / Start link */
  .onboarding-skip {
    position: absolute;
    top: calc(16px + var(--tg-safe-area-top, 0px) + var(--tg-content-safe-area-top, 0px));
    right: 20px;
    z-index: 10;
    background: none;
    border: none;
    color: var(--ob-text-secondary);
    font-size: 15px;
    font-weight: 500;
    opacity: 0.4;
    cursor: pointer;
    padding: 4px 8px;
    font-family: inherit;
    transition: opacity 0.2s;
  }

  .onboarding-skip:active {
    opacity: 0.7;
  }

  /* Slides container */
  .onboarding .onboarding-slides {
    flex: 1;
    overflow: hidden;
    position: relative;
    min-height: 0;
  }

  .onboarding .slides-track {
    display: flex;
    height: 100%;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .onboarding .slide {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
    text-align: center;
  }

  /* Image area */
  .slide-image-area {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    min-height: 0;
  }

  .slide-glow {
    position: absolute;
    width: 110%;
    height: 110%;
    object-fit: contain;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }

  .onboarding.light .slide-glow {
    display: none;
  }

  .onboarding.light .slide-image-area::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    background: radial-gradient(ellipse, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    z-index: 0;
    pointer-events: none;
  }

  .slide-main-img {
    position: relative;
    z-index: 1;
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }

  /* Slide 1: Floating objects */
  .slide-image-area.floating-objects .slide-main-img {
    max-width: 70%;
    max-height: 70%;
  }

  /* Slide 2: Calendar */
  .slide-image-area.calendar .slide-main-img {
    max-width: 92%;
    max-height: 92%;
    border-radius: 16px;
  }

  .onboarding.light .slide-image-area.calendar .slide-main-img {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  }

  /* Slide 3: Notification */
  .slide-image-area.notification .slide-main-img {
    max-width: 85%;
    max-height: 45%;
  }

  .onboarding.light .slide-image-area.notification .slide-main-img {
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.08));
  }

  /* Text area */
  .slide-text {
    flex-shrink: 0;
    padding: 8px 0 16px;
  }

  .onboarding .slide-title {
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    margin: 0;
    color: var(--ob-text);
  }

  .onboarding .slide-subtitle {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.1;
    margin: 4px 0 0 0;
    color: var(--ob-text);
  }

  .accent-text {
    color: var(--ob-accent);
  }

  .onboarding .slide-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--ob-text-secondary);
    max-width: 300px;
    margin: 16px auto 0;
  }

  /* Bottom area: indicators + start button */
  .onboarding-bottom {
    flex-shrink: 0;
    padding: 16px 32px calc(32px + var(--tg-safe-area-bottom, 0px));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .onboarding-indicators {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  .onboarding-start-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    background: var(--ob-accent);
    color: #fff;
    font-family: inherit;
    transition: opacity 0.2s;
  }

  .onboarding-start-btn:active {
    opacity: 0.8;
  }

  .indicator {
    height: 8px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.35s ease;
  }

  .indicator:not(.active) {
    width: 8px;
    background: var(--ob-text-secondary);
    opacity: 0.3;
  }

  .indicator.active {
    width: 28px;
    background: var(--ob-accent);
    opacity: 1;
  }

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

  /* Hero Amount */
  .hero-amount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px 28px;
    position: relative;
    flex-shrink: 0;
  }

  .hero-amount-glow {
    position: absolute;
    width: 260px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(ellipse, var(--accent) 0%, var(--accent-secondary) 40%, transparent 70%);
    opacity: 0.12;
    filter: blur(40px);
    pointer-events: none;
  }

  .hero-amount-text {
    font-size: 3.25rem;
    font-weight: 800;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
    line-height: 1;
  }

  .hero-badge {
    display: inline-block;
    margin-top: 10px;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    background: rgba(100, 180, 80, 0.2);
    color: #6ab854;
    position: relative;
    z-index: 1;
  }

  .hero-extra-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    position: relative;
    z-index: 1;
    animation: drumRoll 0.3s ease;
  }

  .hero-extra-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 20px;
    background: var(--bg-tertiary);
    border: none;
    color: var(--text-primary);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: transform 0.15s;
    white-space: nowrap;
    max-width: 260px;
    overflow: hidden;
  }

  .hero-extra-badge:active { transform: scale(0.97); }

  .hero-extra-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .hero-extra-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hero-extra-sep {
    color: var(--text-secondary);
    flex-shrink: 0;
  }

  .hero-extra-amount {
    flex-shrink: 0;
    color: var(--text-secondary);
  }

  .hero-extra-more {
    padding: 5px 10px;
    border-radius: 20px;
    background: var(--bg-tertiary);
    border: none;
    color: var(--text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    flex-shrink: 0;
    transition: transform 0.15s;
  }

  .hero-extra-more:active { transform: scale(0.95); }

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

  .trial-end-row {
    animation: drumRoll 0.3s ease;
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

  /* Analytics Half-Sheet */
  .analytics-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 899;
    animation: sheetOverlayIn 0.3s ease;
  }

  .analytics-halfsheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55vh;
    background: var(--bg-secondary);
    border-radius: 24px 24px 0 0;
    z-index: 900;
    display: flex;
    flex-direction: column;
    padding-bottom: calc(var(--tg-safe-area-bottom));
    animation: analyticsSlideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1);
    overflow: hidden;
  }

  .analytics-halfsheet.closing {
    animation: analyticsSlideDown 0.3s cubic-bezier(0.32, 0.72, 0, 1) forwards;
  }

  @keyframes analyticsSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes analyticsSlideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  .analytics-sheet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px 8px;
    flex-shrink: 0;
  }

  .analytics-sheet-header h2 { font-size: 1.125rem; font-weight: 700; }

  .analytics-close-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Settings Screen (full-screen) */
  .settings-screen {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-primary);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    padding-top: calc(12px + var(--tg-safe-area-top) + var(--tg-content-safe-area-top));
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }

  .settings-header h2 { font-size: 1rem; font-weight: 700; }

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

  .analytics-content {
    flex: 1;
    overflow-y: auto;
    padding: 8px 16px 16px;
  }

  .settings-content {
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

  /* Ring Analytics */
  .ring-sub-count {
    text-align: center;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  .ring-sub-count span {
    color: var(--text-primary);
    font-weight: 700;
  }

  .ring-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    width: 240px;
    height: 240px;
  }

  .ring-pointer {
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    color: var(--text-secondary);
    z-index: 5;
    line-height: 1;
  }

  .ring-svg {
    position: relative;
    z-index: 2;
    touch-action: none;
    cursor: grab;
  }

  .ring-svg:active { cursor: grabbing; }

  .ring-center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
    pointer-events: none;
  }

  .ring-cat-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
    transition: opacity 0.15s, transform 0.3s;
    white-space: nowrap;
  }

  .ring-cat-name.animating {
    animation: drumRoll 0.3s ease;
  }

  @keyframes drumRoll {
    0% { opacity: 0; transform: translateY(12px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .ring-cat-details {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-top: 4px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .ring-glow-bg {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    transition: background 0.5s ease;
  }

  .analytics-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .analytics-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .analytics-card-label {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.3;
  }

  .analytics-card-value {
    font-size: 1.375rem;
    font-weight: 800;
    color: var(--text-primary);
    font-variant-numeric: tabular-nums;
  }

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
    grid-template-rows: repeat(6, auto);
    gap: 4px;
  }

  .calendar-day {
    aspect-ratio: 1;
    background: var(--bg-secondary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px 2px;
    cursor: pointer;
    position: relative;
    transition: transform 0.15s;
    overflow: hidden;
  }

  .calendar-day:active { transform: scale(0.95); }
  .calendar-day.empty { background: var(--bg-secondary); opacity: 0.4; cursor: default; }
  .calendar-day.empty:active { transform: none; }

  .calendar-day.today {
    box-shadow: inset 0 0 0 2px var(--accent), 0 0 12px rgba(99, 102, 241, 0.3);
  }

  .calendar-day.has-subs { cursor: pointer; }

  .day-logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
  }

  .day-logos-pair {
    display: flex;
    gap: 2px;
    align-items: center;
  }

  .day-count-badge {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 0.5625rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .day-number {
    font-size: 0.6875rem;
    font-weight: 500;
    color: var(--text-secondary);
    line-height: 1;
  }

  .calendar-day.today .day-number { color: var(--accent); font-weight: 700; }

  /* Calendar add button */
  .calendar-add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px;
    margin-top: 16px;
    border: none;
    border-radius: 14px;
    background: var(--accent);
    color: white;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    font-family: inherit;
  }

  .calendar-add-btn:active { transform: scale(0.98); }

  .calendar-add-btn.drum-in {
    animation: btnSwap 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  @keyframes btnSwap {
    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
    60% { opacity: 1; }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  .calendar-return-btn {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }

  /* Bottom Sheet */
  .day-bottom-sheet-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
    animation: sheetOverlayIn 0.3s ease;
  }

  .day-bottom-sheet-overlay.closing {
    animation: sheetOverlayOut 0.25s ease forwards;
  }

  @keyframes sheetOverlayIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes sheetOverlayOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .day-bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    border-radius: 20px 20px 0 0;
    padding: 12px 16px;
    padding-bottom: calc(16px + var(--tg-safe-area-bottom));
    z-index: 950;
    max-height: 70vh;
    overflow-y: auto;
    animation: sheetSlideUp 0.3s ease-out;
  }

  .day-bottom-sheet.closing {
    animation: sheetSlideDown 0.25s ease forwards;
  }

  @keyframes sheetSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes sheetSlideDown {
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  }

  .sheet-handle {
    width: 36px;
    height: 4px;
    background: var(--border);
    border-radius: 2px;
    margin: 0 auto 12px;
  }

  .sheet-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 14px;
  }

  .sheet-header h4 {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .sheet-date {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    text-transform: capitalize;
  }

  .sheet-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  }

  .sheet-subscription-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: var(--bg-tertiary);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.15s;
  }

  .sheet-subscription-item:active { transform: scale(0.98); }

  .sheet-sub-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .sheet-sub-name {
    font-weight: 600;
    font-size: 0.9375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sheet-sub-cycle {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .sheet-sub-right {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  }

  .sheet-sub-amount {
    font-weight: 700;
    font-size: 0.9375rem;
  }

  .sheet-chevron {
    color: var(--text-secondary);
  }

  .sheet-add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 12px;
    border: 2px dashed var(--border);
    border-radius: 12px;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 12px;
    font-family: inherit;
    transition: all 0.2s;
  }

  .sheet-add-btn:active {
    border-color: var(--accent);
    color: var(--accent);
  }

  .sheet-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    background: var(--bg-tertiary);
    border-radius: 12px;
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  .sheet-total-amount {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
  }
`;var As;(As=window.Telegram)!=null&&As.WebApp&&(window.Telegram.WebApp.ready(),window.Telegram.WebApp.expand());Mi.createRoot(document.getElementById("root")).render(a.jsx(Gs.StrictMode,{children:a.jsx(Vm,{})}));
