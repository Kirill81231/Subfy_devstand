(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Vo={},$s={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),pd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),yd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),kd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),Ea=Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=Ea&&e[Ea]||e["@@iterator"],typeof e=="function"?e:null)}var Bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vs=Object.assign,Hs={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Bs}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ws(){}Ws.prototype=Vn.prototype;function El(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Bs}var zl=El.prototype=new Ws;zl.constructor=El;Vs(zl,Vn.prototype);zl.isPureReactComponent=!0;var za=Array.isArray,Ys=Object.prototype.hasOwnProperty,_l={current:null},Qs={key:!0,ref:!0,__self:!0,__source:!0};function Xs(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Ys.call(t,r)&&!Qs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Lr,type:e,key:i,ref:a,props:o,_owner:_l.current}}function jd(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _a=/\/+/g;function ii(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Lr:case pd:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ii(a,0):r,za(o)?(n="",e!=null&&(n=e.replace(_a,"$&/")+"/"),oo(o,t,n,"",function(d){return d})):o!=null&&(Tl(o)&&(o=jd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(_a,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",za(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+ii(i,s);a+=oo(i,t,n,c,o)}else if(c=bd(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+ii(i,s++),a+=oo(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $r(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},io={transition:null},Ed={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:io,ReactCurrentOwner:_l};function Ks(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Vn;K.Fragment=md;K.Profiler=hd;K.PureComponent=El;K.StrictMode=gd;K.Suspense=wd;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;K.act=Ks;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vs({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=_l.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ys.call(t,c)&&!Qs.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Lr,type:e.type,key:o,ref:i,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:vd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yd,_context:e},e.Consumer=e};K.createElement=Xs;K.createFactory=function(e){var t=Xs.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:xd,render:e}};K.isValidElement=Tl;K.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Cd}};K.memo=function(e,t){return{$$typeof:kd,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=io.transition;io.transition={};try{e()}finally{io.transition=t}};K.unstable_act=Ks;K.useCallback=function(e,t){return De.current.useCallback(e,t)};K.useContext=function(e){return De.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return De.current.useDeferredValue(e)};K.useEffect=function(e,t){return De.current.useEffect(e,t)};K.useId=function(){return De.current.useId()};K.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return De.current.useMemo(e,t)};K.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};K.useRef=function(e){return De.current.useRef(e)};K.useState=function(e){return De.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return De.current.useTransition()};K.version="18.3.1";$s.exports=K;var j=$s.exports;const Gs=fd(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=j,_d=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),Md=Object.prototype.hasOwnProperty,Pd=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Md.call(t,r)&&!Dd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_d,type:e,key:i,ref:a,props:o,_owner:Pd.current}}Vo.Fragment=Td;Vo.jsx=Js;Vo.jsxs=Js;Us.exports=Vo;var l=Us.exports,Mi={},Zs={exports:{}},Ye={},qs={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(g,P){var O=g.length;g.push(P);e:for(;0<O;){var X=O-1>>>1,J=g[X];if(0<o(J,P))g[X]=P,g[O]=J,O=X;else break e}}function n(g){return g.length===0?null:g[0]}function r(g){if(g.length===0)return null;var P=g[0],O=g.pop();if(O!==P){g[0]=O;e:for(var X=0,J=g.length,pe=J>>>1;X<pe;){var F=2*(X+1)-1,$=g[F],v=F+1,H=g[v];if(0>o($,O))v<J&&0>o(H,$)?(g[X]=H,g[v]=O,X=v):(g[X]=$,g[F]=O,X=F);else if(v<J&&0>o(H,O))g[X]=H,g[v]=O,X=v;else break e}}return P}function o(g,P){var O=g.sortIndex-P.sortIndex;return O!==0?O:g.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],d=[],y=1,h=null,m=3,x=!1,N=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(g){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=g)r(d),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(d)}}function w(g){if(k=!1,p(g),!N)if(n(c)!==null)N=!0,T(S);else{var P=n(d);P!==null&&Z(w,P.startTime-g)}}function S(g,P){N=!1,k&&(k=!1,f(_),_=-1),x=!0;var O=m;try{for(p(P),h=n(c);h!==null&&(!(h.expirationTime>P)||g&&!Q());){var X=h.callback;if(typeof X=="function"){h.callback=null,m=h.priorityLevel;var J=X(h.expirationTime<=P);P=e.unstable_now(),typeof J=="function"?h.callback=J:h===n(c)&&r(c),p(P)}else r(c);h=n(c)}if(h!==null)var pe=!0;else{var F=n(d);F!==null&&Z(w,F.startTime-P),pe=!1}return pe}finally{h=null,m=O,x=!1}}var E=!1,M=null,_=-1,z=5,I=-1;function Q(){return!(e.unstable_now()-I<z)}function le(){if(M!==null){var g=e.unstable_now();I=g;var P=!0;try{P=M(!0,g)}finally{P?B():(E=!1,M=null)}}else E=!1}var B;if(typeof u=="function")B=function(){u(le)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,xe=ne.port2;ne.port1.onmessage=le,B=function(){xe.postMessage(null)}}else B=function(){A(le,0)};function T(g){M=g,E||(E=!0,B())}function Z(g,P){_=A(function(){g(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(g){g.callback=null},e.unstable_continueExecution=function(){N||x||(N=!0,T(S))},e.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<g?Math.floor(1e3/g):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(g){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var O=m;m=P;try{return g()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(g,P){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var O=m;m=g;try{return P()}finally{m=O}},e.unstable_scheduleCallback=function(g,P,O){var X=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?X+O:X):O=X,g){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=O+J,g={id:y++,callback:P,priorityLevel:g,startTime:O,expirationTime:J,sortIndex:-1},O>X?(g.sortIndex=O,t(d,g),n(c)===null&&g===n(d)&&(k?(f(_),_=-1):k=!0,Z(w,O-X))):(g.sortIndex=J,t(c,g),N||x||(N=!0,T(S))),g},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(g){var P=m;return function(){var O=m;m=P;try{return g.apply(this,arguments)}finally{m=O}}}})(ec);qs.exports=ec;var Ld=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=j,We=Ld;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,yr={};function fn(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(yr[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ta={},Ma={};function Fd(e){return Pi.call(Ma,e)?!0:Pi.call(Ta,e)?!1:Id.test(e)?Ma[e]=!0:(Ta[e]=!0,!1)}function Od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,Pl);Ne[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,Pl);Ne[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,Pl);Ne[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Dl(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,o,r)&&(n=null),r||o===null?Fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),yn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),Ll=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),Rl=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Ri=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),Pa=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,li;function or(e){if(li===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);li=t&&t[1]||""}return`
`+li+e}var ai=!1;function si(e,t){if(!e||ai)return"";ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Ud(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case yn:return"Portal";case Di:return"Profiler";case Ll:return"StrictMode";case Li:return"Suspense";case Ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function $d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ll?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Bd(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ac(e,t){t=t.checked,t!=null&&Dl(e,"checked",t,!1)}function Oi(e,t){ac(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ra(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ir(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function sc(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hd=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bi(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,Tn=null,Mn=null;function Fa(e){if(e=Fr(e)){if(typeof Wi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Xo(t),Wi(e.stateNode,e.type,t))}}function pc(e){Tn?Mn?Mn.push(e):Mn=[e]:Tn=e}function mc(){if(Tn){var e=Tn,t=Mn;if(Mn=Tn=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function gc(e,t){return e(t)}function hc(){}var ci=!1;function yc(e,t,n){if(ci)return e(t,n);ci=!0;try{return gc(e,t,n)}finally{ci=!1,(Tn!==null||Mn!==null)&&(hc(),mc())}}function xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Yi=!1;if(St)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Yi=!1}function Wd(e,t,n,r,o,i,a,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var cr=!1,xo=null,wo=!1,Qi=null,Yd={onError:function(e){cr=!0,xo=e}};function Qd(e,t,n,r,o,i,a,s,c){cr=!1,xo=null,Wd.apply(Yd,arguments)}function Xd(e,t,n,r,o,i,a,s,c){if(Qd.apply(this,arguments),cr){if(cr){var d=xo;cr=!1,xo=null}else throw Error(C(198));wo||(wo=!0,Qi=d)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(pn(e)!==e)throw Error(C(188))}function Kd(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Oa(o),e;if(i===r)return Oa(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function xc(e){return e=Kd(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var kc=We.unstable_scheduleCallback,Aa=We.unstable_cancelCallback,Gd=We.unstable_shouldYield,Jd=We.unstable_requestPaint,ge=We.unstable_now,Zd=We.unstable_getCurrentPriorityLevel,Ol=We.unstable_ImmediatePriority,Sc=We.unstable_UserBlockingPriority,ko=We.unstable_NormalPriority,qd=We.unstable_LowPriority,bc=We.unstable_IdlePriority,Ho=null,mt=null;function ef(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:rf,tf=Math.log,nf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(tf(e)/nf|0)|0}var Wr=64,Yr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=lr(s):(i&=a,i!==0&&(r=lr(i)))}else a=n&~o,a!==0?r=lr(a):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),o=1<<n,r|=e[n],t&=~o;return r}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-st(i),s=1<<a,c=o[a];c===-1?(!(s&n)||s&r)&&(o[a]=of(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-st(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function Nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,Ul,Ec,zc,_c,Ki=!1,Qr=[],Lt=null,Rt=null,It=null,wr=new Map,kr=new Map,Tt=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ua(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function Zn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fr(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cf(e,t,n,r,o){switch(t){case"focusin":return Lt=Zn(Lt,e,t,n,r,o),!0;case"dragenter":return Rt=Zn(Rt,e,t,n,r,o),!0;case"mouseover":return It=Zn(It,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wr.set(i,Zn(wr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,kr.set(i,Zn(kr.get(i)||null,e,t,n,r,o)),!0}return!1}function Tc(e){var t=qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,_c(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=Fr(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function $a(e,t,n){lo(e)&&n.delete(t)}function uf(){Ki=!1,Lt!==null&&lo(Lt)&&(Lt=null),Rt!==null&&lo(Rt)&&(Rt=null),It!==null&&lo(It)&&(It=null),wr.forEach($a),kr.forEach($a)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ki||(Ki=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,uf)))}function Sr(e){function t(o){return qn(o,e)}if(0<Qr.length){qn(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&qn(Lt,e),Rt!==null&&qn(Rt,e),It!==null&&qn(It,e),wr.forEach(t),kr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Tc(n),n.blockedOn===null&&Tt.shift()}var Pn=Ct.ReactCurrentBatchConfig,bo=!0;function df(e,t,n,r){var o=re,i=Pn.transition;Pn.transition=null;try{re=1,$l(e,t,n,r)}finally{re=o,Pn.transition=i}}function ff(e,t,n,r){var o=re,i=Pn.transition;Pn.transition=null;try{re=4,$l(e,t,n,r)}finally{re=o,Pn.transition=i}}function $l(e,t,n,r){if(bo){var o=Gi(e,t,n,r);if(o===null)wi(e,t,r,jo,n),Ua(e,r);else if(cf(o,e,t,n,r))r.stopPropagation();else if(Ua(e,r),t&4&&-1<sf.indexOf(e)){for(;o!==null;){var i=Fr(o);if(i!==null&&Cc(i),i=Gi(e,t,n,r),i===null&&wi(e,t,r,jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wi(e,t,r,null,n)}}var jo=null;function Gi(e,t,n,r){if(jo=null,e=Fl(r),e=qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Ol:return 1;case Sc:return 4;case ko:case qd:return 16;case bc:return 536870912;default:return 16}default:return 16}}var Pt=null,Bl=null,ao=null;function Pc(){if(ao)return ao;var e,t=Bl,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ao=o.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ba(){return!1}function Qe(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:Ba,this.isPropagationStopped=Ba,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Qe(Hn),Ir=fe({},Hn,{view:0,detail:0}),pf=Qe(Ir),di,fi,er,Wo=fe({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(di=e.screenX-er.screenX,fi=e.screenY-er.screenY):fi=di=0,er=e),di)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),Va=Qe(Wo),mf=fe({},Wo,{dataTransfer:0}),gf=Qe(mf),hf=fe({},Ir,{relatedTarget:0}),pi=Qe(hf),yf=fe({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=Qe(yf),xf=fe({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wf=Qe(xf),kf=fe({},Hn,{data:0}),Ha=Qe(kf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jf[e])?!!t[e]:!1}function Hl(){return Nf}var Cf=fe({},Ir,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=Qe(Cf),zf=fe({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Qe(zf),_f=fe({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Tf=Qe(_f),Mf=fe({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=Qe(Mf),Df=fe({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=Qe(Df),Rf=[9,13,27,32],Wl=St&&"CompositionEvent"in window,ur=null;St&&"documentMode"in document&&(ur=document.documentMode);var If=St&&"TextEvent"in window&&!ur,Dc=St&&(!Wl||ur&&8<ur&&11>=ur),Ya=" ",Qa=!1;function Lc(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Ff(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Qa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Qa?null:e;default:return null}}function Of(e,t){if(xn)return e==="compositionend"||!Wl&&Lc(e,t)?(e=Pc(),ao=Bl=Pt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function Ic(e,t,n,r){pc(r),t=No(t,"onChange"),0<t.length&&(n=new Vl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var dr=null,br=null;function Uf(e){Qc(e,0)}function Yo(e){var t=Sn(e);if(lc(t))return e}function $f(e,t){if(e==="change")return t}var Fc=!1;if(St){var mi;if(St){var gi="oninput"in document;if(!gi){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),gi=typeof Ka.oninput=="function"}mi=gi}else mi=!1;Fc=mi&&(!document.documentMode||9<document.documentMode)}function Ga(){dr&&(dr.detachEvent("onpropertychange",Oc),br=dr=null)}function Oc(e){if(e.propertyName==="value"&&Yo(br)){var t=[];Ic(t,br,e,Fl(e)),yc(Uf,t)}}function Bf(e,t,n){e==="focusin"?(Ga(),dr=t,br=n,dr.attachEvent("onpropertychange",Oc)):e==="focusout"&&Ga()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(br)}function Hf(e,t){if(e==="click")return Yo(t)}function Wf(e,t){if(e==="input"||e==="change")return Yo(t)}function Yf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Yf;function jr(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Pi.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ac(n.ownerDocument.documentElement,n)){if(r!==null&&Yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Za(n,i);var a=Za(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=St&&"documentMode"in document&&11>=document.documentMode,wn=null,Ji=null,fr=null,Zi=!1;function qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zi||wn==null||wn!==vo(r)||(r=wn,"selectionStart"in r&&Yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&jr(fr,r)||(fr=r,r=No(Ji,"onSelect"),0<r.length&&(t=new Vl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},hi={},$c={};St&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Qo(e){if(hi[e])return hi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $c)return hi[e]=t[n];return e}var Bc=Qo("animationend"),Vc=Qo("animationiteration"),Hc=Qo("animationstart"),Wc=Qo("transitionend"),Yc=new Map,es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Yc.set(e,t),fn(t,[e])}for(var yi=0;yi<es.length;yi++){var vi=es[yi],Kf=vi.toLowerCase(),Gf=vi[0].toUpperCase()+vi.slice(1);Ht(Kf,"on"+Gf)}Ht(Bc,"onAnimationEnd");Ht(Vc,"onAnimationIteration");Ht(Hc,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Wc,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;ts(o,s,d),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;ts(o,s,d),i=c}}}if(wo)throw e=Qi,wo=!1,Qi=null,e}function ae(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function xi(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Gr]){e[Gr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||xi(n,!1,e),xi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,xi("selectionchange",!1,t))}}function Xc(e,t,n,r){switch(Mc(t)){case 1:var o=df;break;case 4:o=ff;break;default:o=$l}n=o.bind(null,t,n,e),o=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=qt(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}yc(function(){var d=i,y=Fl(n),h=[];e:{var m=Yc.get(e);if(m!==void 0){var x=Vl,N=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":x=Ef;break;case"focusin":N="focus",x=pi;break;case"focusout":N="blur",x=pi;break;case"beforeblur":case"afterblur":x=pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Tf;break;case Bc:case Vc:case Hc:x=vf;break;case Wc:x=Pf;break;case"scroll":x=pf;break;case"wheel":x=Lf;break;case"copy":case"cut":case"paste":x=wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wa}var k=(t&4)!==0,A=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var u=d,p;u!==null;){p=u;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=xr(u,f),w!=null&&k.push(Cr(u,w,p)))),A)break;u=u.return}0<k.length&&(m=new x(m,N,null,n,y),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Hi&&(N=n.relatedTarget||n.fromElement)&&(qt(N)||N[bt]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(N=n.relatedTarget||n.toElement,x=d,N=N?qt(N):null,N!==null&&(A=pn(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=d),x!==N)){if(k=Va,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=Wa,w="onPointerLeave",f="onPointerEnter",u="pointer"),A=x==null?m:Sn(x),p=N==null?m:Sn(N),m=new k(w,u+"leave",x,n,y),m.target=A,m.relatedTarget=p,w=null,qt(y)===d&&(k=new k(f,u+"enter",N,n,y),k.target=p,k.relatedTarget=A,w=k),A=w,x&&N)t:{for(k=x,f=N,u=0,p=k;p;p=gn(p))u++;for(p=0,w=f;w;w=gn(w))p++;for(;0<u-p;)k=gn(k),u--;for(;0<p-u;)f=gn(f),p--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break t;k=gn(k),f=gn(f)}k=null}else k=null;x!==null&&ns(h,m,x,k,!1),N!==null&&A!==null&&ns(h,A,N,k,!0)}}e:{if(m=d?Sn(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=$f;else if(Xa(m))if(Fc)S=Wf;else{S=Vf;var E=Bf}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Hf);if(S&&(S=S(e,d))){Ic(h,S,n,y);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Ai(m,"number",m.value)}switch(E=d?Sn(d):window,e){case"focusin":(Xa(E)||E.contentEditable==="true")&&(wn=E,Ji=d,fr=null);break;case"focusout":fr=Ji=wn=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,qa(h,n,y);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":qa(h,n,y)}var M;if(Wl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else xn?Lc(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Dc&&n.locale!=="ko"&&(xn||_!=="onCompositionStart"?_==="onCompositionEnd"&&xn&&(M=Pc()):(Pt=y,Bl="value"in Pt?Pt.value:Pt.textContent,xn=!0)),E=No(d,_),0<E.length&&(_=new Ha(_,e,null,n,y),h.push({event:_,listeners:E}),M?_.data=M:(M=Rc(n),M!==null&&(_.data=M)))),(M=If?Ff(e,n):Of(e,n))&&(d=No(d,"onBeforeInput"),0<d.length&&(y=new Ha("onBeforeInput","beforeinput",null,n,y),h.push({event:y,listeners:d}),y.data=M))}Qc(h,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=xr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ns(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,o?(c=xr(n,i),c!=null&&a.unshift(Cr(n,c,s))):o||(c=xr(n,i),c!=null&&a.push(Cr(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Zf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function rs(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(qf,"")}function Jr(e,t,n){if(t=rs(t),rs(e)!==t&&n)throw Error(C(425))}function Co(){}var qi=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,os=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof os<"u"?function(e){return os.resolve(null).then(e).catch(np)}:nl;function np(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Sr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function is(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Wn,Er="__reactProps$"+Wn,bt="__reactContainer$"+Wn,rl="__reactEvents$"+Wn,rp="__reactListeners$"+Wn,op="__reactHandles$"+Wn;function qt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=is(e);e!==null;){if(n=e[pt])return n;e=is(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[pt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Xo(e){return e[Er]||null}var ol=[],bn=-1;function Wt(e){return{current:e}}function se(e){0>bn||(e.current=ol[bn],ol[bn]=null,bn--)}function ie(e,t){bn++,ol[bn]=e.current,e.current=t}var Vt={},_e=Wt(Vt),Ae=Wt(!1),ln=Vt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Eo(){se(Ae),se(_e)}function ls(e,t,n){if(_e.current!==Vt)throw Error(C(168));ie(_e,t),ie(Ae,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,$d(e)||"Unknown",o));return fe({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ln=_e.current,ie(_e,e),ie(Ae,Ae.current),!0}function as(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Kc(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,se(Ae),se(_e),ie(_e,e)):se(Ae),ie(Ae,n)}var vt=null,Ko=!1,Si=!1;function Gc(e){vt===null?vt=[e]:vt.push(e)}function ip(e){Ko=!0,Gc(e)}function Yt(){if(!Si&&vt!==null){Si=!0;var e=0,t=re;try{var n=vt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Ko=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),kc(Ol,Yt),o}finally{re=t,Si=!1}}return null}var jn=[],Nn=0,_o=null,To=0,Ke=[],Ge=0,an=null,xt=1,wt="";function Jt(e,t){jn[Nn++]=To,jn[Nn++]=_o,_o=e,To=t}function Jc(e,t,n){Ke[Ge++]=xt,Ke[Ge++]=wt,Ke[Ge++]=an,an=e;var r=xt;e=wt;var o=32-st(r)-1;r&=~(1<<o),n+=1;var i=32-st(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,xt=1<<32-st(t)+o|n<<o|r,wt=i+e}else xt=1<<i|n<<o|r,wt=e}function Ql(e){e.return!==null&&(Jt(e,1),Jc(e,1,0))}function Xl(e){for(;e===_o;)_o=jn[--Nn],jn[Nn]=null,To=jn[--Nn],jn[Nn]=null;for(;e===an;)an=Ke[--Ge],Ke[Ge]=null,wt=Ke[--Ge],Ke[Ge]=null,xt=Ke[--Ge],Ke[Ge]=null}var He=null,Ve=null,ce=!1,it=null;function Zc(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ss(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ve=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ve=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(ce){var t=Ve;if(t){var n=t;if(!ss(e,t)){if(il(e))throw Error(C(418));t=Ft(n.nextSibling);var r=He;t&&ss(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,ce=!1,He=e)}}else{if(il(e))throw Error(C(418));e.flags=e.flags&-4097|2,ce=!1,He=e}}}function cs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Zr(e){if(e!==He)return!1;if(!ce)return cs(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ve)){if(il(e))throw qc(),Error(C(418));for(;t;)Zc(e,t),t=Ft(t.nextSibling)}if(cs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=He?Ft(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=Ve;e;)e=Ft(e.nextSibling)}function On(){Ve=He=null,ce=!1}function Kl(e){it===null?it=[e]:it.push(e)}var lp=Ct.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function us(e){var t=e._init;return t(e._payload)}function eu(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=$t(f,u),f.index=0,f.sibling=null,f}function i(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,w){return u===null||u.tag!==6?(u=_i(p,f.mode,w),u.return=f,u):(u=o(u,p),u.return=f,u)}function c(f,u,p,w){var S=p.type;return S===vn?y(f,u,p.props.children,w,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&us(S)===u.type)?(w=o(u,p.props),w.ref=tr(f,u,p),w.return=f,w):(w=ho(p.type,p.key,p.props,null,f.mode,w),w.ref=tr(f,u,p),w.return=f,w)}function d(f,u,p,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ti(p,f.mode,w),u.return=f,u):(u=o(u,p.children||[]),u.return=f,u)}function y(f,u,p,w,S){return u===null||u.tag!==7?(u=rn(p,f.mode,w,S),u.return=f,u):(u=o(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_i(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Br:return p=ho(u.type,u.key,u.props,null,f.mode,p),p.ref=tr(f,null,u),p.return=f,p;case yn:return u=Ti(u,f.mode,p),u.return=f,u;case zt:var w=u._init;return h(f,w(u._payload),p)}if(ir(u)||Gn(u))return u=rn(u,f.mode,p,null),u.return=f,u;qr(f,u)}return null}function m(f,u,p,w){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,u,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:return p.key===S?c(f,u,p,w):null;case yn:return p.key===S?d(f,u,p,w):null;case zt:return S=p._init,m(f,u,S(p._payload),w)}if(ir(p)||Gn(p))return S!==null?null:y(f,u,p,w,null);qr(f,p)}return null}function x(f,u,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,s(u,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Br:return f=f.get(w.key===null?p:w.key)||null,c(u,f,w,S);case yn:return f=f.get(w.key===null?p:w.key)||null,d(u,f,w,S);case zt:var E=w._init;return x(f,u,p,E(w._payload),S)}if(ir(w)||Gn(w))return f=f.get(p)||null,y(u,f,w,S,null);qr(u,w)}return null}function N(f,u,p,w){for(var S=null,E=null,M=u,_=u=0,z=null;M!==null&&_<p.length;_++){M.index>_?(z=M,M=null):z=M.sibling;var I=m(f,M,p[_],w);if(I===null){M===null&&(M=z);break}e&&M&&I.alternate===null&&t(f,M),u=i(I,u,_),E===null?S=I:E.sibling=I,E=I,M=z}if(_===p.length)return n(f,M),ce&&Jt(f,_),S;if(M===null){for(;_<p.length;_++)M=h(f,p[_],w),M!==null&&(u=i(M,u,_),E===null?S=M:E.sibling=M,E=M);return ce&&Jt(f,_),S}for(M=r(f,M);_<p.length;_++)z=x(M,f,_,p[_],w),z!==null&&(e&&z.alternate!==null&&M.delete(z.key===null?_:z.key),u=i(z,u,_),E===null?S=z:E.sibling=z,E=z);return e&&M.forEach(function(Q){return t(f,Q)}),ce&&Jt(f,_),S}function k(f,u,p,w){var S=Gn(p);if(typeof S!="function")throw Error(C(150));if(p=S.call(p),p==null)throw Error(C(151));for(var E=S=null,M=u,_=u=0,z=null,I=p.next();M!==null&&!I.done;_++,I=p.next()){M.index>_?(z=M,M=null):z=M.sibling;var Q=m(f,M,I.value,w);if(Q===null){M===null&&(M=z);break}e&&M&&Q.alternate===null&&t(f,M),u=i(Q,u,_),E===null?S=Q:E.sibling=Q,E=Q,M=z}if(I.done)return n(f,M),ce&&Jt(f,_),S;if(M===null){for(;!I.done;_++,I=p.next())I=h(f,I.value,w),I!==null&&(u=i(I,u,_),E===null?S=I:E.sibling=I,E=I);return ce&&Jt(f,_),S}for(M=r(f,M);!I.done;_++,I=p.next())I=x(M,f,_,I.value,w),I!==null&&(e&&I.alternate!==null&&M.delete(I.key===null?_:I.key),u=i(I,u,_),E===null?S=I:E.sibling=I,E=I);return e&&M.forEach(function(le){return t(f,le)}),ce&&Jt(f,_),S}function A(f,u,p,w){if(typeof p=="object"&&p!==null&&p.type===vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Br:e:{for(var S=p.key,E=u;E!==null;){if(E.key===S){if(S=p.type,S===vn){if(E.tag===7){n(f,E.sibling),u=o(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zt&&us(S)===E.type){n(f,E.sibling),u=o(E,p.props),u.ref=tr(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===vn?(u=rn(p.props.children,f.mode,w,p.key),u.return=f,f=u):(w=ho(p.type,p.key,p.props,null,f.mode,w),w.ref=tr(f,u,p),w.return=f,f=w)}return a(f);case yn:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=o(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ti(p,f.mode,w),u.return=f,f=u}return a(f);case zt:return E=p._init,A(f,u,E(p._payload),w)}if(ir(p))return N(f,u,p,w);if(Gn(p))return k(f,u,p,w);qr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,p),u.return=f,f=u):(n(f,u),u=_i(p,f.mode,w),u.return=f,f=u),a(f)):n(f,u)}return A}var An=eu(!0),tu=eu(!1),Mo=Wt(null),Po=null,Cn=null,Gl=null;function Jl(){Gl=Cn=Po=null}function Zl(e){var t=Mo.current;se(Mo),e._currentValue=t}function al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Po=e,Gl=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Po===null)throw Error(C(308));Cn=e,Po.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var en=null;function ql(e){en===null?en=[e]:en.push(e)}function nu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ql(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,ql(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}function ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,d=c.next;c.next=null,a===null?i=d:a.next=d,a=c;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==a&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=c))}if(i!==null){var h=o.baseState;a=0,y=d=c=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,k=s;switch(m=t,x=n,k.tag){case 1:if(N=k.payload,typeof N=="function"){h=N.call(x,h,m);break e}h=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=k.payload,m=typeof N=="function"?N.call(x,h,m):N,m==null)break e;h=fe({},h,m);break e;case 2:_t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=x,c=h):y=y.next=x,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(y===null&&(c=h),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=a,e.lanes=a,e.memoizedState=h}}function fs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Or={},gt=Wt(Or),zr=Wt(Or),_r=Wt(Or);function tn(e){if(e===Or)throw Error(C(174));return e}function ta(e,t){switch(ie(_r,t),ie(zr,e),ie(gt,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$i(t,e)}se(gt),ie(gt,t)}function Un(){se(gt),se(zr),se(_r)}function ou(e){tn(_r.current);var t=tn(gt.current),n=$i(t,e.type);t!==n&&(ie(zr,e),ie(gt,n))}function na(e){zr.current===e&&(se(gt),se(zr))}var ue=Wt(0);function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bi=[];function ra(){for(var e=0;e<bi.length;e++)bi[e]._workInProgressVersionPrimary=null;bi.length=0}var uo=Ct.ReactCurrentDispatcher,ji=Ct.ReactCurrentBatchConfig,sn=0,de=null,ye=null,we=null,Ro=!1,pr=!1,Tr=0,ap=0;function Ce(){throw Error(C(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,o,i){if(sn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,uo.current=e===null||e.memoizedState===null?dp:fp,e=n(r,o),pr){i=0;do{if(pr=!1,Tr=0,25<=i)throw Error(C(301));i+=1,we=ye=null,t.updateQueue=null,uo.current=pp,e=n(r,o)}while(pr)}if(uo.current=Io,t=ye!==null&&ye.next!==null,sn=0,we=ye=de=null,Ro=!1,t)throw Error(C(300));return e}function la(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?de.memoizedState=we=e:we=we.next=e,we}function et(){if(ye===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=we===null?de.memoizedState:we.next;if(t!==null)we=t,ye=e;else{if(e===null)throw Error(C(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?de.memoizedState=we=e:we=we.next=e}return we}function Mr(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=et(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,c=null,d=i;do{var y=d.lane;if((sn&y)===y)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=h,a=r):c=c.next=h,de.lanes|=y,cn|=y}d=d.next}while(d!==null&&d!==i);c===null?a=r:c.next=s,ut(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=et(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ut(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iu(){}function lu(e,t){var n=de,r=et(),o=t(),i=!ut(r.memoizedState,o);if(i&&(r.memoizedState=o,Oe=!0),r=r.queue,aa(cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Pr(9,su.bind(null,n,r,o,t),void 0,null),ke===null)throw Error(C(349));sn&30||au(n,t,o)}return o}function au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function su(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&du(e)}function cu(e,t,n){return n(function(){uu(t)&&du(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function du(e){var t=jt(e,1);t!==null&&ct(t,e,1,-1)}function ps(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,de,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fu(){return et().memoizedState}function fo(e,t,n,r){var o=ft();de.flags|=e,o.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function Go(e,t,n,r){var o=et();r=r===void 0?null:r;var i=void 0;if(ye!==null){var a=ye.memoizedState;if(i=a.destroy,r!==null&&oa(r,a.deps)){o.memoizedState=Pr(t,n,i,r);return}}de.flags|=e,o.memoizedState=Pr(1|t,n,i,r)}function ms(e,t){return fo(8390656,8,e,t)}function aa(e,t){return Go(2048,8,e,t)}function pu(e,t){return Go(4,2,e,t)}function mu(e,t){return Go(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hu(e,t,n){return n=n!=null?n.concat([e]):null,Go(4,4,gu.bind(null,t,e),n)}function sa(){}function yu(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xu(e,t,n){return sn&21?(ut(n,t)||(n=jc(),de.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function sp(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=ji.transition;ji.transition={};try{e(!1),t()}finally{re=n,ji.transition=r}}function wu(){return et().memoizedState}function cp(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ku(e))Su(t,n);else if(n=nu(e,t,n,r),n!==null){var o=Pe();ct(n,e,r,o),bu(n,t,r)}}function up(e,t,n){var r=Ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ku(e))Su(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,ut(s,a)){var c=t.interleaved;c===null?(o.next=o,ql(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=nu(e,t,o,r),n!==null&&(o=Pe(),ct(n,e,r,o),bu(n,t,r))}}function ku(e){var t=e.alternate;return e===de||t!==null&&t===de}function Su(e,t){pr=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Al(e,n)}}var Io={readContext:qe,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},dp={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ms,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cp.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ps,useDebugValue:sa,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ps(!1),t=e[0];return e=sp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=ft();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ke===null)throw Error(C(349));sn&30||au(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ms(cu.bind(null,r,i,e),[e]),r.flags|=2048,Pr(9,su.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=ke.identifierPrefix;if(ce){var n=wt,r=xt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:qe,useCallback:yu,useContext:qe,useEffect:aa,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:mu,useMemo:vu,useReducer:Ni,useRef:fu,useState:function(){return Ni(Mr)},useDebugValue:sa,useDeferredValue:function(e){var t=et();return xu(t,ye.memoizedState,e)},useTransition:function(){var e=Ni(Mr)[0],t=et().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:wu,unstable_isNewReconciler:!1},pp={readContext:qe,useCallback:yu,useContext:qe,useEffect:aa,useImperativeHandle:hu,useInsertionEffect:pu,useLayoutEffect:mu,useMemo:vu,useReducer:Ci,useRef:fu,useState:function(){return Ci(Mr)},useDebugValue:sa,useDeferredValue:function(e){var t=et();return ye===null?t.memoizedState=e:xu(t,ye.memoizedState,e)},useTransition:function(){var e=Ci(Mr)[0],t=et().memoizedState;return[e,t]},useMutableSource:iu,useSyncExternalStore:lu,useId:wu,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Ut(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(ct(t,e,o,r),co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Ut(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ot(e,i,o),t!==null&&(ct(t,e,o,r),co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Ut(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(ct(t,e,r,n),co(t,e,r))}};function gs(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(o,i):!0}function ju(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=qe(i):(o=Ue(t)?ln:_e.current,r=t.contextTypes,i=(r=r!=null)?Fn(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function hs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function cl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ea(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=qe(i):(i=Ue(t)?ln:_e.current,o.context=Fn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jo.enqueueReplaceState(o,o.state,null),Do(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=Ud(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oo||(Oo=!0,wl=r),ul(e,t)},n}function Cu(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ul(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ys(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function vs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var gp=Ct.ReactCurrentOwner,Oe=!1;function Me(e,t,n,r){t.child=e===null?tu(t,null,n,r):An(t,e.child,n,r)}function ws(e,t,n,r,o){n=n.render;var i=t.ref;return Dn(t,o),r=ia(e,t,n,r,i,o),n=la(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ce&&n&&Ql(t),t.flags|=1,Me(e,t,r,o),t.child)}function ks(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ha(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Eu(e,t,i,r,o)):(e=ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(a,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=$t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(jr(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return dl(e,t,n,r,o)}function zu(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(zn,Be),Be|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(zn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(zn,Be),Be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(zn,Be),Be|=r;return Me(e,t,o,n),t.child}function _u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,o){var i=Ue(n)?ln:_e.current;return i=Fn(t,i),Dn(t,o),n=ia(e,t,n,r,i,o),r=la(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(ce&&r&&Ql(t),t.flags|=1,Me(e,t,n,o),t.child)}function Ss(e,t,n,r,o){if(Ue(n)){var i=!0;zo(t)}else i=!1;if(Dn(t,o),t.stateNode===null)po(e,t),ju(t,n,r),cl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=Ue(n)?ln:_e.current,d=Fn(t,d));var y=n.getDerivedStateFromProps,h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==d)&&hs(t,a,r,d),_t=!1;var m=t.memoizedState;a.state=m,Do(t,r,a,o),c=t.memoizedState,s!==r||m!==c||Ae.current||_t?(typeof y=="function"&&(sl(t,n,y,r),c=t.memoizedState),(s=_t||gs(t,n,s,r,m,c,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ru(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:rt(t.type,s),a.props=d,h=t.pendingProps,m=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=Ue(n)?ln:_e.current,c=Fn(t,c));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==c)&&hs(t,a,r,c),_t=!1,m=t.memoizedState,a.state=m,Do(t,r,a,o);var N=t.memoizedState;s!==h||m!==N||Ae.current||_t?(typeof x=="function"&&(sl(t,n,x,r),N=t.memoizedState),(d=_t||gs(t,n,d,r,m,N,c)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,i,o)}function fl(e,t,n,r,o,i){_u(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&as(t,n,!1),Nt(e,t,i);r=t.stateNode,gp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=An(t,e.child,null,i),t.child=An(t,null,s,i)):Me(e,t,s,i),t.memoizedState=r.state,o&&as(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ls(e,t.context,!1),ta(e,t.containerInfo)}function bs(e,t,n,r,o){return On(),Kl(o),t.flags|=256,Me(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,o=ue.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ue,o&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ei(a,r,0,null),e=rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ml(n),t.memoizedState=pl,e):ca(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return hp(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$t(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=$t(s,i):(i=rn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ml(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return i=e.child,e=i.sibling,r=$t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ca(e,t){return t=ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&Kl(r),An(t,e.child,null,n),e=ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ei(Error(C(422))),eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ei({mode:"visible",children:r.children},o,0,null),i=rn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,a),t.child.memoizedState=ml(a),t.memoizedState=pl,i);if(!(t.mode&1))return eo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=Ei(i,r,void 0),eo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Oe||s){if(r=ke,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),ct(r,e,o,-1))}return ga(),r=Ei(Error(C(421))),eo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Ft(o.nextSibling),He=t,ce=!0,it=null,e!==null&&(Ke[Ge++]=xt,Ke[Ge++]=wt,Ke[Ge++]=an,xt=e.id,wt=e.overflow,an=t),t=ca(t,r.children),t.flags|=4096,t)}function js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),al(e.return,t,n)}function zi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Pu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&js(e,n,t);else if(e.tag===19)js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zi(t,!0,n,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:Tu(t),On();break;case 5:ou(t);break;case 1:Ue(t.type)&&zo(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Mo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Mu(e,t,n):(ie(ue,ue.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,zu(e,t,n)}return Nt(e,t,n)}var Du,gl,Lu,Ru;Du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gl=function(){};Lu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,tn(gt.current);var i=null;switch(n){case"input":o=Fi(e,o),r=Fi(e,r),i=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":o=Ui(e,o),r=Ui(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Bi(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(yr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(s=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(yr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ae("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ru=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vp(e,t,n){var r=t.pendingProps;switch(Xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&Eo(),Ee(t),null;case 3:return r=t.stateNode,Un(),se(Ae),se(_e),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(bl(it),it=null))),gl(e,t),Ee(t),null;case 5:na(t);var o=tn(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Lu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ee(t),null}if(e=tn(gt.current),Zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[Er]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)ae(ar[o],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Da(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":Ra(r,i),ae("invalid",r)}Bi(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",""+s]):yr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":Vr(r),La(r,i,!0);break;case"textarea":Vr(r),Ia(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pt]=t,e[Er]=r,Du(e,t,!1,!1),t.stateNode=e;e:{switch(a=Vi(n,r),n){case"dialog":ae("cancel",e),ae("close",e),o=r;break;case"iframe":case"object":case"embed":ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)ae(ar[o],e);o=r;break;case"source":ae("error",e),o=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=r;break;case"details":ae("toggle",e),o=r;break;case"input":Da(e,r),o=Fi(e,r),ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Ra(e,r),o=Ui(e,r),ae("invalid",e);break;default:o=r}Bi(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?fc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&uc(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&vr(e,c):typeof c=="number"&&vr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ae("scroll",e):c!=null&&Dl(e,i,c,a))}switch(n){case"input":Vr(e),La(e,r,!1);break;case"textarea":Vr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_n(e,!!r.multiple,i,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Ru(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=tn(_r.current),tn(gt.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ve!==null&&t.mode&1&&!(t.flags&128))qc(),On(),t.flags|=98560,i=!1;else if(i=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[pt]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else it!==null&&(bl(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?ve===0&&(ve=3):ga())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Un(),gl(e,t),e===null&&Nr(t.stateNode.containerInfo),Ee(t),null;case 10:return Zl(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&Eo(),Ee(t),null;case 19:if(se(ue),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)nr(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Lo(e),a!==null){for(t.flags|=128,nr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&ge()>Bn&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Lo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ce)return Ee(t),null}else 2*ge()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,nr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ge(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function xp(e,t){switch(Xl(t),t.tag){case 1:return Ue(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),se(Ae),se(_e),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return Un(),null;case 10:return Zl(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var to=!1,ze=!1,wp=typeof WeakSet=="function"?WeakSet:Set,R=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){me(e,t,r)}}var Ns=!1;function kp(e,t){if(qi=bo,e=Uc(),Yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,d=0,y=0,h=e,m=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(s=a+o),h!==i||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===o&&(s=a),m===i&&++y===r&&(c=a),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},bo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var k=N.memoizedProps,A=N.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:rt(t.type,k),A);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){me(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return N=Ns,Ns=!1,N}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hl(t,n,i)}o=o.next}while(o!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Er],delete t[rl],delete t[rp],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var be=null,ot=!1;function Et(e,t,n){for(n=n.child;n!==null;)Ou(e,t,n),n=n.sibling}function Ou(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:ze||En(n,t);case 6:var r=be,o=ot;be=null,Et(e,t,n),be=r,ot=o,be!==null&&(ot?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ot?(e=be,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),Sr(e)):ki(be,n.stateNode));break;case 4:r=be,o=ot,be=n.stateNode.containerInfo,ot=!0,Et(e,t,n),be=r,ot=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&hl(n,t,a),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!ze&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Et(e,t,n),ze=r):Et(e,t,n);break;default:Et(e,t,n)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wp),t.forEach(function(r){var o=Tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ot=!1;break e;case 3:be=s.stateNode.containerInfo,ot=!0;break e;case 4:be=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(be===null)throw Error(C(160));Ou(i,a,o),be=null,ot=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){me(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{mr(3,e,e.return),Zo(3,e)}catch(k){me(e,e.return,k)}try{mr(5,e,e.return)}catch(k){me(e,e.return,k)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var o=e.stateNode;try{vr(o,"")}catch(k){me(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ac(o,i),Vi(s,a);var d=Vi(s,i);for(a=0;a<c.length;a+=2){var y=c[a],h=c[a+1];y==="style"?fc(o,h):y==="dangerouslySetInnerHTML"?uc(o,h):y==="children"?vr(o,h):Dl(o,y,h,d)}switch(s){case"input":Oi(o,i);break;case"textarea":sc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?_n(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?_n(o,!!i.multiple,i.defaultValue,!0):_n(o,!!i.multiple,i.multiple?[]:"",!1))}o[Er]=i}catch(k){me(e,e.return,k)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){me(e,e.return,k)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(k){me(e,e.return,k)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(fa=ge())),r&4&&Es(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(d=ze)||y,nt(t,e),ze=d):nt(t,e),dt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(R=e,y=e.child;y!==null;){for(h=R=y;R!==null;){switch(m=R,x=m.child,m.tag){case 0:case 11:case 14:case 15:mr(4,m,m.return);break;case 1:En(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(k){me(r,n,k)}}break;case 5:En(m,m.return);break;case 22:if(m.memoizedState!==null){_s(h);continue}}x!==null?(x.return=m,R=x):_s(h)}y=y.sibling}e:for(y=null,h=e;;){if(h.tag===5){if(y===null){y=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=dc("display",a))}catch(k){me(e,e.return,k)}}}else if(h.tag===6){if(y===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){me(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;y===h&&(y=null),h=h.return}y===h&&(y=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:nt(t,e),dt(e),r&4&&Es(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vr(o,""),r.flags&=-33);var i=Cs(e);xl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Cs(e);vl(e,s,a);break;default:throw Error(C(161))}}catch(c){me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){R=e,Uu(e)}function Uu(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||to;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||ze;s=to;var d=ze;if(to=a,(ze=c)&&!d)for(R=o;R!==null;)a=R,c=a.child,a.tag===22&&a.memoizedState!==null?Ts(o):c!==null?(c.return=a,R=c):Ts(o);for(;i!==null;)R=i,Uu(i),i=i.sibling;R=o,to=s,ze=d}zs(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):zs(e)}}function zs(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fs(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fs(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var h=y.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ze||t.flags&512&&yl(t)}catch(m){me(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function _s(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ts(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(c){me(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){me(t,o,c)}}var i=t.return;try{yl(t)}catch(c){me(t,i,c)}break;case 5:var a=t.return;try{yl(t)}catch(c){me(t,a,c)}}}catch(c){me(t,t.return,c)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var bp=Math.ceil,Fo=Ct.ReactCurrentDispatcher,ua=Ct.ReactCurrentOwner,Ze=Ct.ReactCurrentBatchConfig,ee=0,ke=null,he=null,je=0,Be=0,zn=Wt(0),ve=0,Dr=null,cn=0,qo=0,da=0,gr=null,Fe=null,fa=0,Bn=1/0,yt=null,Oo=!1,wl=null,At=null,no=!1,Dt=null,Ao=0,hr=0,kl=null,mo=-1,go=0;function Pe(){return ee&6?ge():mo!==-1?mo:mo=ge()}function Ut(e){return e.mode&1?ee&2&&je!==0?je&-je:lp.transition!==null?(go===0&&(go=jc()),go):(e=re,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e):1}function ct(e,t,n,r){if(50<hr)throw hr=0,kl=null,Error(C(185));Rr(e,n,r),(!(ee&2)||e!==ke)&&(e===ke&&(!(ee&2)&&(qo|=n),ve===4&&Mt(e,je)),$e(e,r),n===1&&ee===0&&!(t.mode&1)&&(Bn=ge()+500,Ko&&Yt()))}function $e(e,t){var n=e.callbackNode;lf(e,t);var r=So(e,e===ke?je:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?ip(Ms.bind(null,e)):Gc(Ms.bind(null,e)),tp(function(){!(ee&6)&&Yt()}),n=null;else{switch(Nc(r)){case 1:n=Ol;break;case 4:n=Sc;break;case 16:n=ko;break;case 536870912:n=bc;break;default:n=ko}n=Xu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(mo=-1,go=0,ee&6)throw Error(C(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=So(e,e===ke?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Uo(e,r);else{t=r;var o=ee;ee|=2;var i=Vu();(ke!==e||je!==t)&&(yt=null,Bn=ge()+500,nn(e,t));do try{Cp();break}catch(s){Bu(e,s)}while(!0);Jl(),Fo.current=i,ee=o,he!==null?t=0:(ke=null,je=0,t=ve)}if(t!==0){if(t===2&&(o=Xi(e),o!==0&&(r=o,t=Sl(e,o))),t===1)throw n=Dr,nn(e,0),Mt(e,r),$e(e,ge()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!jp(o)&&(t=Uo(e,r),t===2&&(i=Xi(e),i!==0&&(r=i,t=Sl(e,i))),t===1))throw n=Dr,nn(e,0),Mt(e,r),$e(e,ge()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Zt(e,Fe,yt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=fa+500-ge(),10<t)){if(So(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nl(Zt.bind(null,e,Fe,yt),t);break}Zt(e,Fe,yt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-st(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bp(r/1960))-r,10<r){e.timeoutHandle=nl(Zt.bind(null,e,Fe,yt),r);break}Zt(e,Fe,yt);break;case 5:Zt(e,Fe,yt);break;default:throw Error(C(329))}}}return $e(e,ge()),e.callbackNode===n?$u.bind(null,e):null}function Sl(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(nn(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&bl(t)),e}function bl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ut(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~da,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function Ms(e){if(ee&6)throw Error(C(327));Ln();var t=So(e,0);if(!(t&1))return $e(e,ge()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=Xi(e);r!==0&&(t=r,n=Sl(e,r))}if(n===1)throw n=Dr,nn(e,0),Mt(e,t),$e(e,ge()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Fe,yt),$e(e,ge()),null}function pa(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Bn=ge()+500,Ko&&Yt())}}function un(e){Dt!==null&&Dt.tag===0&&!(ee&6)&&Ln();var t=ee;ee|=1;var n=Ze.transition,r=re;try{if(Ze.transition=null,re=1,e)return e()}finally{re=r,Ze.transition=n,ee=t,!(ee&6)&&Yt()}}function ma(){Be=zn.current,se(zn)}function nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ep(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:Un(),se(Ae),se(_e),ra();break;case 5:na(r);break;case 4:Un();break;case 13:se(ue);break;case 19:se(ue);break;case 10:Zl(r.type._context);break;case 22:case 23:ma()}n=n.return}if(ke=e,he=e=$t(e.current,null),je=Be=t,ve=0,Dr=null,da=qo=cn=0,Fe=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}en=null}return e}function Bu(e,t){do{var n=he;try{if(Jl(),uo.current=Io,Ro){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ro=!1}if(sn=0,we=ye=de=null,pr=!1,Tr=0,ua.current=null,n===null||n.return===null){ve=1,Dr=t,he=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=je,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,y=s,h=y.tag;if(!(y.mode&1)&&(h===0||h===11||h===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=vs(a);if(x!==null){x.flags&=-257,xs(x,a,s,i,t),x.mode&1&&ys(i,d,t),t=x,c=d;var N=t.updateQueue;if(N===null){var k=new Set;k.add(c),t.updateQueue=k}else N.add(c);break e}else{if(!(t&1)){ys(i,d,t),ga();break e}c=Error(C(426))}}else if(ce&&s.mode&1){var A=vs(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),xs(A,a,s,i,t),Kl($n(c,s));break e}}i=c=$n(c,s),ve!==4&&(ve=2),gr===null?gr=[i]:gr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Nu(i,c,t);ds(i,f);break e;case 1:s=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(At===null||!At.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Cu(i,s,t);ds(i,w);break e}}i=i.return}while(i!==null)}Wu(n)}catch(S){t=S,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Vu(){var e=Fo.current;return Fo.current=Io,e===null?Io:e}function ga(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(cn&268435455)&&!(qo&268435455)||Mt(ke,je)}function Uo(e,t){var n=ee;ee|=2;var r=Vu();(ke!==e||je!==t)&&(yt=null,nn(e,t));do try{Np();break}catch(o){Bu(e,o)}while(!0);if(Jl(),ee=n,Fo.current=r,he!==null)throw Error(C(261));return ke=null,je=0,ve}function Np(){for(;he!==null;)Hu(he)}function Cp(){for(;he!==null&&!Gd();)Hu(he)}function Hu(e){var t=Qu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Wu(e):he=t,ua.current=null}function Wu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xp(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=vp(n,t,Be),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function Zt(e,t,n){var r=re,o=Ze.transition;try{Ze.transition=null,re=1,Ep(e,t,n,r)}finally{Ze.transition=o,re=r}return null}function Ep(e,t,n,r){do Ln();while(Dt!==null);if(ee&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(af(e,i),e===ke&&(he=ke=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Xu(ko,function(){return Ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ze.transition,Ze.transition=null;var a=re;re=1;var s=ee;ee|=4,ua.current=null,kp(e,n),Au(n,e),Qf(el),bo=!!qi,el=qi=null,e.current=n,Sp(n),Jd(),ee=s,re=a,Ze.transition=i}else e.current=n;if(no&&(no=!1,Dt=e,Ao=o),i=e.pendingLanes,i===0&&(At=null),ef(n.stateNode),$e(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=wl,wl=null,e;return Ao&1&&e.tag!==0&&Ln(),i=e.pendingLanes,i&1?e===kl?hr++:(hr=0,kl=e):hr=0,Yt(),null}function Ln(){if(Dt!==null){var e=Nc(Ao),t=Ze.transition,n=re;try{if(Ze.transition=null,re=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Ao=0,ee&6)throw Error(C(331));var o=ee;for(ee|=4,R=e.current;R!==null;){var i=R,a=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(R=d;R!==null;){var y=R;switch(y.tag){case 0:case 11:case 15:mr(8,y,i)}var h=y.child;if(h!==null)h.return=y,R=h;else for(;R!==null;){y=R;var m=y.sibling,x=y.return;if(Iu(y),y===d){R=null;break}if(m!==null){m.return=x,R=m;break}R=x}}}var N=i.alternate;if(N!==null){var k=N.child;if(k!==null){N.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}R=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,R=a;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var u=e.current;for(R=u;R!==null;){a=R;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,R=p;else e:for(a=u;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zo(9,s)}}catch(S){me(s,s.return,S)}if(s===a){R=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,R=w;break e}R=s.return}}if(ee=o,Yt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{re=n,Ze.transition=t}}return!1}function Ps(e,t,n){t=$n(n,t),t=Nu(e,t,1),e=Ot(e,t,1),t=Pe(),e!==null&&(Rr(e,1,t),$e(e,t))}function me(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=$n(n,e),e=Cu(t,e,1),t=Ot(t,e,1),e=Pe(),t!==null&&(Rr(t,1,e),$e(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(je&n)===n&&(ve===4||ve===3&&(je&130023424)===je&&500>ge()-fa?nn(e,0):da|=n),$e(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=Yr,Yr<<=1,!(Yr&130023424)&&(Yr=4194304)):t=1);var n=Pe();e=jt(e,t),e!==null&&(Rr(e,t,n),$e(e,n))}function _p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yu(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Yu(e,n)}var Qu;Qu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,yp(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,ce&&t.flags&1048576&&Jc(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var o=Fn(t,_e.current);Dn(t,n),o=ia(null,t,r,e,o,n);var i=la();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,zo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ea(t),o.updater=Jo,t.stateNode=o,o._reactInternals=t,cl(t,r,e,n),t=fl(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&Ql(t),Me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Pp(r),e=rt(r,e),o){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Ss(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,rt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Ss(e,t,r,o,n);case 3:e:{if(Tu(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ru(e,t),Do(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$n(Error(C(423)),t),t=bs(e,t,r,n,o);break e}else if(r!==o){o=$n(Error(C(424)),t),t=bs(e,t,r,n,o);break e}else for(Ve=Ft(t.stateNode.containerInfo.firstChild),He=t,ce=!0,it=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=Nt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,tl(r,o)?a=null:i!==null&&tl(r,i)&&(t.flags|=32),_u(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&ll(t),null;case 13:return Mu(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ws(e,t,r,o,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(Mo,r._currentValue),r._currentValue=a,i!==null)if(ut(i.value,a)){if(i.children===o.children&&!Ae.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=kt(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?c.next=c:(c.next=y.next,y.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),al(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(C(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),al(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=qe(o),r=r(o),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),ks(e,t,r,o,n);case 15:return Eu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),po(e,t),t.tag=1,Ue(r)?(e=!0,zo(t)):e=!1,Dn(t,n),ju(t,r,o),cl(t,r,o,n),fl(null,t,r,!0,e,n);case 19:return Pu(e,t,n);case 22:return zu(e,t,n)}throw Error(C(156,t.tag))};function Xu(e,t){return kc(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new Mp(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pp(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rl)return 11;if(e===Il)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ho(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")ha(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case vn:return rn(n.children,o,i,t);case Ll:a=8,o|=8;break;case Di:return e=Je(12,n,t,o|2),e.elementType=Di,e.lanes=i,e;case Li:return e=Je(13,n,t,o),e.elementType=Li,e.lanes=i,e;case Ri:return e=Je(19,n,t,o),e.elementType=Ri,e.lanes=i,e;case oc:return ei(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:a=10;break e;case rc:a=9;break e;case Rl:a=11;break e;case Il:a=14;break e;case zt:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Je(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function rn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function ei(e,t,n,r){return e=Je(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function Ti(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,o,i,a,s,c){return e=new Dp(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(i),e}function Lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ku(e){if(!e)return Vt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Kc(e,n,t)}return t}function Gu(e,t,n,r,o,i,a,s,c){return e=ya(n,r,!0,e,o,i,a,s,c),e.context=Ku(null),n=e.current,r=Pe(),o=Ut(n),i=kt(r,o),i.callback=t??null,Ot(n,i,o),e.current.lanes=o,Rr(e,o,r),$e(e,r),e}function ti(e,t,n,r){var o=t.current,i=Pe(),a=Ut(o);return n=Ku(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,a),e!==null&&(ct(e,o,a,i),co(e,o,a)),a}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ds(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){Ds(e,t),(e=e.alternate)&&Ds(e,t)}function Rp(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}ni.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));ti(e,t,null,null)};ni.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){ti(null,e,null,null)}),t[bt]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Tc(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ls(){}function Ip(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=$o(a);i.call(d)}}var a=Gu(t,r,e,0,null,!1,!1,"",Ls);return e._reactRootContainer=a,e[bt]=a.current,Nr(e.nodeType===8?e.parentNode:e),un(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=$o(c);s.call(d)}}var c=ya(e,0,!1,null,null,!1,!1,"",Ls);return e._reactRootContainer=c,e[bt]=c.current,Nr(e.nodeType===8?e.parentNode:e),un(function(){ti(t,c,n,r)}),c}function oi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=$o(a);s.call(c)}}ti(t,a,e,o)}else a=Ip(n,t,e,o,r);return $o(a)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Al(t,n|1),$e(t,ge()),!(ee&6)&&(Bn=ge()+500,Yt()))}break;case 13:un(function(){var r=jt(e,1);if(r!==null){var o=Pe();ct(r,e,1,o)}}),va(e,1)}};Ul=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Pe();ct(t,e,134217728,n)}va(e,134217728)}};Ec=function(e){if(e.tag===13){var t=Ut(e),n=jt(e,t);if(n!==null){var r=Pe();ct(n,e,t,r)}va(e,t)}};zc=function(){return re};_c=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Wi=function(e,t,n){switch(t){case"input":if(Oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xo(r);if(!o)throw Error(C(90));lc(r),Oi(r,o)}}}break;case"textarea":sc(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};gc=pa;hc=un;var Fp={usingClientEntryPoint:!1,Events:[Fr,Sn,Xo,pc,mc,pa]},rr={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Op={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{Ho=ro.inject(Op),mt=ro}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fp;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(C(200));return Lp(e,t,null,n)};Ye.createRoot=function(e,t){if(!wa(e))throw Error(C(299));var n=!1,r="",o=Ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,o),e[bt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new xa(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return un(e)};Ye.hydrate=function(e,t,n){if(!ri(t))throw Error(C(200));return oi(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ju;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Gu(t,null,e,1,n??null,o,!1,i,a),e[bt]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ni(t)};Ye.render=function(e,t,n){if(!ri(t))throw Error(C(200));return oi(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!ri(e))throw Error(C(40));return e._reactRootContainer?(un(function(){oi(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Ye.unstable_batchedUpdates=pa;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ri(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return oi(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zs.exports=Ye;var Ap=Zs.exports,Rs=Ap;Mi.createRoot=Rs.createRoot,Mi.hydrateRoot=Rs.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:c,...d},y)=>j.createElement("svg",{ref:y,...Up,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:["lucide",`lucide-${$p(e)}`,s].join(" "),...d},[...t.map(([h,m])=>j.createElement(h,m)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
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
 */const xm=Y("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),wm="/assets/Floating%20Object-D4TX8mVS.png",km="/assets/Calendar-FAXU5yuQ.png",Sm="/assets/Notificastion-DsUxzrl4.png",jl="https://jvokgylbrvlymtnlqolu.supabase.co",bm="https://jvokgylbrvlymtnlqolu.supabase.co/functions/v1/telegram-auth",hn=`${jl}/functions/v1`,Xt={auth:bm,getSubscriptions:`${hn}/get-subscriptions`,saveSubscription:`${hn}/save-subscription`,deleteSubscription:`${hn}/delete-subscription`,getTemplates:`${hn}/get-templates`,saveNotificationSettings:`${hn}/save-notification-settings`,sendTestNotification:`${hn}/send-test-notification`},jm=[{id:"t1",name:"Яндекс Плюс",price:299,color:"#FFCC00",category:"Развлечения",domain:"plus.yandex.ru"},{id:"t2",name:"СберПрайм",price:399,color:"#21A038",category:"Утилиты",domain:"sberbank.ru"},{id:"t3",name:"МТС Premium",price:299,color:"#E30611",category:"Утилиты",domain:"mts.ru"},{id:"t4",name:"Тинькофф Pro",price:399,color:"#FFDD2D",category:"Утилиты",domain:"tinkoff.ru"},{id:"t5",name:"Кинопоиск",price:269,color:"#FF6600",category:"Развлечения",domain:"kinopoisk.ru"},{id:"t6",name:"Okko",price:399,color:"#6B4EFF",category:"Развлечения",domain:"okko.tv"},{id:"t7",name:"ivi",price:399,color:"#EA003D",category:"Развлечения",domain:"ivi.ru"},{id:"t8",name:"Netflix",price:699,color:"#E50914",category:"Развлечения",domain:"netflix.com"},{id:"t9",name:"YouTube Premium",price:299,color:"#FF0000",category:"Развлечения",domain:"youtube.com"},{id:"t10",name:"Spotify",price:199,color:"#1DB954",category:"Развлечения",domain:"spotify.com"},{id:"t11",name:"Яндекс Музыка",price:249,color:"#FFCC00",category:"Развлечения",domain:"music.yandex.ru"},{id:"t12",name:"Apple Music",price:169,color:"#FA2D48",category:"Развлечения",domain:"apple.com"},{id:"t13",name:"VK Музыка",price:249,color:"#0077FF",category:"Развлечения",domain:"vk.com"},{id:"t14",name:"iCloud+",price:149,color:"#3693F3",category:"Утилиты",domain:"icloud.com"},{id:"t15",name:"Google One",price:139,color:"#4285F4",category:"Утилиты",domain:"one.google.com"},{id:"t16",name:"Telegram Premium",price:299,color:"#0088CC",category:"Утилиты",domain:"telegram.org"},{id:"t17",name:"ChatGPT Plus",price:1900,color:"#10A37F",category:"Работа",domain:"openai.com"},{id:"t18",name:"Notion",price:800,color:"#000000",category:"Работа",domain:"notion.so"}],Nm=e=>({id:e.id,name:e.name,price:e.default_price,color:e.color,category:e.category,domain:e.domain||null,icon:e.icon||"📦",logo_url:e.logo_url||null,currency:e.default_currency||"RUB"}),Rn=[{id:"entertainment",name:"Развлечения",color:"#EF4444"},{id:"productivity",name:"Продуктивность",color:"#22C55E"},{id:"lifestyle",name:"Лайфстайл",color:"#FBBF24"},{id:"utilities",name:"Утилиты",color:"#3B82F6"},{id:"finance",name:"Финансы",color:"#EAB308"},{id:"health",name:"Здоровье",color:"#F97316"},{id:"gaming",name:"Игры",color:"#EC4899"},{id:"other",name:"Другое",color:"#9CA3AF"}],dn=[{value:"monthly",label:"Ежемесячно",multiplier:1,short:"мес",daysApprox:30},{value:"yearly",label:"Ежегодно",multiplier:.083,short:"год",daysApprox:365},{value:"trial",label:"Пробная",multiplier:0,short:"проба",daysApprox:0},{value:"one-time",label:"Одноразовая",multiplier:0,short:"раз",daysApprox:0}],Se=[{code:"RUB",symbol:"₽",rate:1},{code:"USD",symbol:"$",rate:96},{code:"EUR",symbol:"€",rate:104}],Is=[{value:0,label:"В день списания"},{value:1,label:"За 1 день"},{value:2,label:"За 2 дня"},{value:3,label:"За 3 дня"},{value:4,label:"За 4 дня"},{value:5,label:"За 5 дней"},{value:10,label:"За 10 дней"},{value:15,label:"За 15 дней"},{value:25,label:"За 25 дней"},{value:30,label:"За 30 дней"},{value:-1,label:"Никогда"}],yo=["#EF4444","#22C55E","#FBBF24","#3B82F6","#EAB308","#F97316","#EC4899","#9CA3AF","#F43F5E","#2563EB","#7C3AED","#06B6D4","#10B981","#84CC16","#F59E0B","#FB923C","#A78BFA","#67E8F9"],Cm=["🎬","🎵","🎮","📱","🖥️","🎧","📚","☁️","💳","🛒","🏠","🚗","✈️","🍔","☕","🍕","💡","⭐","🎓","💊","🏀","🎸","📷","🎨","💼","🏋️","🔒","🔑","📦","🎯","🍿","📺","🎤","🎹","🕹️","📰","💎","🛡️","🔔","💰","🧘","🚀","🌍","❤️","🐾","🧠","🎁","📧","🏦","🛠️"],rd=[{name:"credit-card",icon:ed},{name:"sport",icon:Kp},{name:"bank",icon:im},{name:"shopping-cart",icon:gm},{name:"bag",icon:mm},{name:"tv",icon:ym},{name:"music",icon:am},{name:"gamepad",icon:Zp},{name:"cloud",icon:Gp},{name:"phone",icon:sm},{name:"wifi",icon:vm},{name:"lightning",icon:xm},{name:"droplet",icon:Jp},{name:"house",icon:nm},{name:"car",icon:Qp},{name:"plane",icon:dm},{name:"heart",icon:tm},{name:"pill",icon:um},{name:"graduation",icon:em},{name:"briefcase",icon:Hp},{name:"lock",icon:lm},{name:"key",icon:rm},{name:"keyboard",icon:om},{name:"globe",icon:qp},{name:"star",icon:hm}],mn=e=>{if(!e)return null;if(e instanceof Date)return new Date(e.getFullYear(),e.getMonth(),e.getDate());const t=String(e).split("T")[0],[n,r,o]=t.split("-").map(Number);return!n||!r||!o?null:new Date(n,r-1,o)},od=()=>{const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())},Em=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},id=(e,t)=>{const n=mn(e);if(!n)return null;const r=od();if(t==="one-time"||t==="trial")return n>r?n:null;for(;n<=r;)switch(t){case"weekly":n.setDate(n.getDate()+7);break;case"biweekly":n.setDate(n.getDate()+14);break;case"monthly":n.setMonth(n.getMonth()+1);break;case"quarterly":n.setMonth(n.getMonth()+3);break;case"semiannual":n.setMonth(n.getMonth()+6);break;case"yearly":n.setFullYear(n.getFullYear()+1);break;default:n.setMonth(n.getMonth()+1)}return n},ld=(e,t,n,r)=>{const o=mn(e);if(!o)return[];const i=new Date(n,r,1),a=new Date(n,r+1,0);if(t==="one-time"||t==="trial")return o>=i&&o<=a?[new Date(o)]:[];const s=[],c=(d,y)=>{switch(y){case"weekly":d.setDate(d.getDate()+7);break;case"biweekly":d.setDate(d.getDate()+14);break;case"monthly":d.setMonth(d.getMonth()+1);break;case"quarterly":d.setMonth(d.getMonth()+3);break;case"semiannual":d.setMonth(d.getMonth()+6);break;case"yearly":d.setFullYear(d.getFullYear()+1);break;default:d.setMonth(d.getMonth()+1)}};for(;o<i;)c(o,t);for(;o<=a;)o>=i&&s.push(new Date(o)),c(o,t);return s},zm=e=>{const t=mn(e);return t?t.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}):"дата не указана"},Nl=e=>{if(!e)return null;const t=mn(e)||new Date(e),n=od();return Math.round((t-n)/(1e3*60*60*24))},_m=e=>e===null?"дата не указана":e===0?"сегодня":e===1?"завтра":e<0?"просрочено":`через ${e} дн.`,on=()=>{var e;return(e=window.Telegram)==null?void 0:e.WebApp},ad=()=>{var e,t;(t=(e=on())==null?void 0:e.HapticFeedback)==null||t.impactOccurred("medium")},Fs=()=>{var e,t;(t=(e=on())==null?void 0:e.HapticFeedback)==null||t.notificationOccurred("success")},Tm="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2tneWxicnZseW10bmxxb2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNjQwMzAsImV4cCI6MjA4NDg0MDAzMH0.R8mBhpBKf7LwmbOCCmfTThbfhtKNGORLzMrTR8bdf3Q",Kt={"Content-Type":"application/json",apikey:Tm},Gt={async auth(e){const t=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",n=await fetch(Xt.auth,{method:"POST",headers:Kt,body:JSON.stringify({initData:e,timezone:t})});if(!n.ok)throw new Error("Auth failed");return n.json()},async getSubscriptions(e){const t=await fetch(Xt.getSubscriptions,{method:"POST",headers:Kt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to fetch");return t.json()},async saveSubscription(e,t){const n=await fetch(Xt.saveSubscription,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,subscription:t})});if(!n.ok)throw new Error("Failed to save");return n.json()},async deleteSubscription(e,t){const n=await fetch(Xt.deleteSubscription,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,subscriptionId:t})});if(!n.ok)throw new Error("Failed to delete");return n.json()},async getTemplates(){const e=await fetch(Xt.getTemplates,{method:"GET",headers:Kt});if(!e.ok)throw new Error("Failed to fetch templates");return e.json()},async saveNotificationSettings(e,t){const n=Intl.DateTimeFormat().resolvedOptions().timeZone||"Europe/Moscow",r=await fetch(Xt.saveNotificationSettings,{method:"POST",headers:Kt,body:JSON.stringify({userId:e,settings:t,timezone:n})});if(!r.ok)throw new Error("Failed to save notification settings");return r.json()},async sendTestNotification(e){const t=await fetch(Xt.sendTestNotification,{method:"POST",headers:Kt,body:JSON.stringify({userId:e})});if(!t.ok)throw new Error("Failed to send test notification");return t.json()}},Mm=({message:e,visible:t,type:n="success",onHide:r})=>{const[o,i]=j.useState(!1);return j.useEffect(()=>{if(t){i(!1);const a=setTimeout(()=>{i(!0),setTimeout(r,300)},2700);return()=>clearTimeout(a)}},[t,r]),t?l.jsxs("div",{className:`toast ${n} ${o?"leaving":""}`,children:[n==="error"?l.jsx(Yn,{size:18}):l.jsx(Xp,{size:18}),l.jsx("span",{children:e})]}):null},Pm=({onComplete:e,theme:t})=>{const[n,r]=j.useState(0),[o,i]=j.useState(0),[a,s]=j.useState(0),c=[{mainImage:wm,imageClass:"floating-objects",title:"Привет!",subtitle:"Это ",subtitleAccent:"Subfy",description:"Отслеживайте подписки и получайте напоминания о платежах — всё в Telegram"},{mainImage:km,imageClass:"calendar",title:"Все подписки",subtitle:"",subtitleAccent:"в одном месте",description:"Переключайтесь между календарём и списком одним тапом"},{mainImage:Sm,imageClass:"notification",title:"Уведомления",subtitle:"",subtitleAccent:"о списании",description:"Напоминания приходят сообщением от бота — всегда на виду в Telegram"}],d=m=>{i(m.touches[0].clientX)},y=m=>{s(m.touches[0].clientX)},h=()=>{if(!o||!a)return;const m=o-a;Math.abs(m)>=50&&(m>0?n<c.length-1?r(N=>N+1):e():m<0&&n>0&&r(N=>N-1)),i(0),s(0)};return l.jsxs("div",{className:`onboarding ${t}`,children:[l.jsx("button",{className:"onboarding-skip",onClick:e,children:"Пропустить"}),l.jsx("div",{className:"onboarding-slides",onTouchStart:d,onTouchMove:y,onTouchEnd:h,children:l.jsx("div",{className:"slides-track",style:{transform:`translateX(-${n*100}%)`},children:c.map((m,x)=>l.jsxs("div",{className:"slide",children:[l.jsx("div",{className:`slide-image-area ${m.imageClass}`,children:l.jsx("img",{className:"slide-main-img",src:m.mainImage,alt:""})}),l.jsxs("div",{className:"slide-text",children:[l.jsx("h1",{className:"slide-title",children:m.title}),l.jsxs("h2",{className:"slide-subtitle",children:[m.subtitle,l.jsx("span",{className:"accent-text",children:m.subtitleAccent})]}),l.jsx("p",{className:"slide-description",children:m.description})]})]},x))})}),l.jsxs("div",{className:"onboarding-bottom",children:[l.jsx("div",{className:"onboarding-indicators",children:c.map((m,x)=>l.jsx("button",{className:`indicator ${x===n?"active":""}`,onClick:()=>r(x)},x))}),n===c.length-1&&l.jsx("button",{className:"onboarding-start-btn",onClick:e,children:"Начать"})]})]})},Dm=({message:e="Загрузка..."})=>l.jsx("div",{className:"loading-screen",children:l.jsxs("div",{className:"loading-content",children:[l.jsx("div",{className:"loading-logo",children:"Subfy"}),l.jsx(td,{className:"loading-spinner",size:32}),l.jsx("p",{className:"loading-message",children:e})]})}),lt=({domain:e,emoji:t,color:n,size:r=32,logoUrl:o})=>{const[i,a]=j.useState(!1),[s,c]=j.useState(!1),d=o||(e?`https://logo.clearbit.com/${e}`:null);if(!d||i){if(t&&typeof t=="string"&&t.startsWith("symbol:")){const h=t.replace("symbol:",""),m=rd.find(x=>x.name===h);if(m){const x=m.icon;return l.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,flexShrink:0},children:l.jsx(x,{size:r*.5,color:"white",strokeWidth:2})})}}return l.jsx("div",{className:"logo-emoji",style:{width:r,height:r,background:n+"20",color:n,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:r>60?20:8,fontSize:r*.5,flexShrink:0},children:t||"📦"})}return l.jsxs("div",{className:"logo-container",style:{width:r,height:r,background:s?"white":n+"20",borderRadius:r>60?20:8,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:[l.jsx("img",{src:d,alt:"",style:{width:r,height:r,objectFit:"cover",opacity:s?1:0,transition:"opacity 0.2s"},onLoad:()=>c(!0),onError:()=>a(!0)}),!s&&!i&&l.jsx("div",{style:{fontSize:r*.5},children:t||"📦"})]})},ba=({visible:e,title:t,message:n,onConfirm:r,onCancel:o})=>e?l.jsx("div",{className:"modal-overlay confirm-overlay",onClick:o,children:l.jsxs("div",{className:"confirm-modal",onClick:i=>i.stopPropagation(),children:[l.jsx("h3",{children:t}),l.jsx("p",{children:n}),l.jsxs("div",{className:"confirm-actions",children:[l.jsx("button",{className:"cancel-btn",onClick:o,children:"Отмена"}),l.jsx("button",{className:"delete-confirm-btn",onClick:r,children:"Удалить"})]})]})}):null,Lm=({subscription:e,onEdit:t,onDelete:n,currencies:r})=>{const[o,i]=j.useState(0),[a,s]=j.useState(0),[c,d]=j.useState(!1),[y,h]=j.useState(!1),m=r.find(z=>z.code===e.currency)||r[0],x=e.billing_cycle||e.billingCycle||"monthly",N=e.first_billing_date||e.next_billing_date||e.firstBillingDate,k=e.trial_end_date||e.trialEndDate,A=x==="trial"&&k?mn(k):id(N,x),f=Nl(A),u=dn.find(z=>z.value===x)||dn[0],p=e.amount*((u==null?void 0:u.multiplier)||1),w=z=>{s(z.touches[0].clientX),d(!0)},S=z=>{if(!c)return;const I=a-z.touches[0].clientX;i(Math.max(0,Math.min(80,I)))},E=()=>{d(!1),o>40?i(80):i(0)},M=()=>{h(!0)},_=()=>{h(!1),i(0),n(e.id)};return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sub-card-wrapper",children:[l.jsx("div",{className:"sub-card-swipe-bg",style:{opacity:o/80},children:l.jsxs("button",{className:"swipe-delete-btn",onClick:M,children:[l.jsx(Sa,{size:20}),l.jsx("span",{children:"Удалить"})]})}),l.jsxs("div",{className:"sub-card",style:{"--accent":e.color,transform:`translateX(-${o}px)`,transition:c?"none":"transform 0.2s ease"},onTouchStart:w,onTouchMove:S,onTouchEnd:E,children:[l.jsx("div",{className:"sub-card-accent"}),l.jsx("div",{className:"sub-card-content",children:l.jsxs("div",{className:"sub-card-header",children:[l.jsx(lt,{domain:e.domain,emoji:e.icon,color:e.color,size:44,logoUrl:e.logo_url}),l.jsxs("div",{className:"sub-info",children:[l.jsx("h3",{className:"sub-name",children:e.name}),l.jsxs("div",{className:"sub-price-inline",children:[l.jsx("span",{className:"price-amount",children:(x==="trial"||x==="one-time"?e.amount:Math.round(p)).toLocaleString("ru-RU")}),l.jsx("span",{className:"price-currency",children:m.symbol}),l.jsxs("span",{className:"price-cycle",children:["/ ",u.short]})]})]}),l.jsx("button",{className:"sub-edit-btn",onClick:z=>{z.stopPropagation(),t(e)},children:l.jsx(nd,{size:16})}),l.jsx("div",{className:`sub-next ${f!==null&&f<=0?"soon":f!==null&&f<=2?"warning":""}`,children:l.jsx("span",{children:_m(f)})})]})})]})]}),l.jsx(ba,{visible:y,title:"Удалить подписку?",message:`Подписка «${e.name}» будет удалена безвозвратно.`,onConfirm:_,onCancel:()=>{h(!1),i(0)}})]})},Rm=({visible:e,amount:t,currency:n,currencies:r,onAmountChange:o,onCurrencyChange:i,onClose:a})=>{const[s,c]=j.useState(t?String(t):""),[d,y]=j.useState(!1),[h,m]=j.useState(!1),[x,N]=j.useState(0);if(j.useEffect(()=>{e&&(c(t?String(t):""),m(!1),y(!1))},[e,t]),!e)return null;const k=r.find(S=>S.code===n),A=S=>{var E,M,_;(_=(M=(E=window.Telegram)==null?void 0:E.WebApp)==null?void 0:M.HapticFeedback)==null||_.impactOccurred("light"),c(z=>z==="0"&&S!=="."?S:S==="."&&z.includes(".")||z.includes(".")&&z.split(".")[1].length>=2||z.replace(".","").length>=8?z:z+S),N(z=>z+1)},f=()=>{var S,E,M;(M=(E=(S=window.Telegram)==null?void 0:S.WebApp)==null?void 0:E.HapticFeedback)==null||M.impactOccurred("light"),c(_=>_.slice(0,-1)),N(_=>_+1)},u=()=>{m(!0),setTimeout(()=>a(),280)},p=()=>{const S=s||"0";o(parseFloat(S)>0?S:""),u()},w=s?`${(k==null?void 0:k.symbol)||""} ${s}`:`${(k==null?void 0:k.symbol)||""} 0`;return l.jsx("div",{className:"amount-modal-overlay",onClick:u,children:l.jsxs("div",{className:`amount-modal ${h?"closing":""}`,onClick:S=>S.stopPropagation(),children:[l.jsxs("div",{className:"amount-modal-topbar",children:[l.jsxs("div",{className:"currency-capsule-wrapper",children:[l.jsxs("button",{className:"currency-capsule",onClick:()=>y(!d),children:[n," (",k==null?void 0:k.symbol,")",l.jsx(at,{size:14,className:`capsule-chevron ${d?"open":""}`})]}),d&&l.jsx("div",{className:"currency-dropdown",children:r.map(S=>l.jsxs("button",{className:`currency-dropdown-item ${n===S.code?"active":""}`,onClick:()=>{i(S.code),y(!1)},children:[S.code," (",S.symbol,")"]},S.code))})]}),l.jsx("button",{className:"amount-modal-close",onClick:u,children:l.jsx(Yn,{size:20})})]}),l.jsxs("div",{className:"amount-display-section",children:[l.jsx("span",{className:"amount-display-label",children:"Сумма"}),l.jsx("span",{className:"amount-display-value",children:w},x)]}),l.jsx("div",{className:"numpad",children:["1","2","3","4","5","6","7","8","9",".","0","back"].map(S=>l.jsx("button",{className:`numpad-key ${S==="back"?"numpad-back":""}`,onClick:()=>S==="back"?f():A(S),children:S==="back"?l.jsx(ka,{size:24}):S},S))}),l.jsx("button",{className:"amount-done-btn",onClick:p,children:"Готово"})]})})},Im=({onClose:e,onSave:t,onDelete:n,editData:r,templates:o,isLoading:i,defaultNotificationSettings:a,customCategories:s=[],onAddCategory:c,categories:d=Rn,preselectedDate:y})=>{var F,$;const[h,m]=j.useState(r?2:1),[x,N]=j.useState(""),[k,A]=j.useState("Все"),[f,u]=j.useState(!1),[p,w]=j.useState(!1),[S,E]=j.useState(!1),[M,_]=j.useState("emoji"),[z,I]=j.useState(!1),[Q,le]=j.useState(!1),[B,ne]=j.useState(!1);j.useEffect(()=>{var W,q;const v=(W=window.Telegram)==null?void 0:W.WebApp;v&&v.expand();const H=()=>{var oe,Re;(((oe=document.activeElement)==null?void 0:oe.tagName)==="INPUT"||((Re=document.activeElement)==null?void 0:Re.tagName)==="TEXTAREA")&&setTimeout(()=>{var Ie;(Ie=document.activeElement)==null||Ie.scrollIntoView({behavior:"smooth",block:"center"})},100)};return(q=window.visualViewport)==null||q.addEventListener("resize",H),()=>{var oe;return(oe=window.visualViewport)==null?void 0:oe.removeEventListener("resize",H)}},[]);const xe=()=>{u(!0),setTimeout(()=>e(),280)},T=d.find(v=>v.id==="other"),Z=[...d.filter(v=>v.id!=="other"),...s,...T?[T]:[]],[g,P]=j.useState(r?{...r,firstBillingDate:(r.next_billing_date||r.first_billing_date||r.firstBillingDate||"").split("T")[0],billingCycle:r.billing_cycle||r.billingCycle||"monthly",trialEndDate:(r.trial_end_date||r.trialEndDate||"").split("T")[0]||"",category:r.category||"Другое",notifyEnabled:r.notify_enabled??!0}:{name:"",amount:"",currency:"RUB",billingCycle:"monthly",firstBillingDate:y||Em(),trialEndDate:"",category:"Другое",color:"#6366f1",icon:"📦",domain:null,logo_url:null,isCustom:!0,notifyEnabled:!0}),O=["Все",...Rn.map(v=>v.name)],X=o.filter(v=>{const H=v.name.toLowerCase().includes(x.toLowerCase()),W=k==="Все"||v.category===k;return H&&W}),J=v=>{P({...g,name:v.name,color:v.color,icon:v.icon||"📦",domain:v.domain,logo_url:v.logo_url||null,category:v.category,isCustom:!1,templateId:v.id}),m(2)},pe=()=>{!g.name||!g.amount||(ad(),t({...g,id:r==null?void 0:r.id,amount:parseFloat(g.amount),next_billing_date:g.billingCycle==="trial"&&g.trialEndDate?g.trialEndDate:g.firstBillingDate,first_billing_date:g.firstBillingDate,billing_cycle:g.billingCycle,trial_end_date:g.billingCycle==="trial"?g.trialEndDate:null,notify_enabled:g.notifyEnabled}))};return l.jsxs("div",{className:"modal-overlay",onClick:xe,children:[l.jsxs("div",{className:`modal subscription-modal ${f?"closing":""}`,onClick:v=>v.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("button",{className:"back-btn",onClick:()=>h===1||r?xe():m(1),children:h===1||r?l.jsx(Yn,{size:20}):l.jsx(qu,{size:20})}),l.jsx("h2",{children:r?"Редактировать":h===1?"Выберите сервис":"Новая подписка"}),r?l.jsx("button",{className:"icon-btn delete",onClick:()=>ne(!0),children:l.jsx(Sa,{size:18})}):l.jsx("div",{style:{width:32}})]}),l.jsx(ba,{visible:B,title:"Удалить подписку?",message:`${(r==null?void 0:r.name)||"Подписка"} будет удалена без возможности восстановления`,onConfirm:()=>{ne(!1),n==null||n(r.id),xe()},onCancel:()=>ne(!1)}),h===1?l.jsxs("div",{className:"template-selector",children:[l.jsxs("div",{className:"template-selector-sticky",children:[l.jsxs("div",{className:"search-box",children:[l.jsx(fm,{size:18}),l.jsx("input",{type:"text",placeholder:"Поиск сервиса...",value:x,onChange:v=>N(v.target.value)})]}),l.jsx("div",{className:"category-tabs",children:O.map(v=>l.jsx("button",{className:`cat-tab ${k===v?"active":""}`,onClick:()=>A(v),children:v},v))})]}),l.jsxs("div",{className:"template-selector-scroll",children:[l.jsxs("button",{className:"custom-sub-btn",onClick:()=>m(2),children:[l.jsx("div",{className:"custom-sub-icon",children:l.jsx(Bo,{size:22,color:"white"})}),l.jsx("span",{children:"Своя подписка"}),l.jsx(at,{size:18,className:"custom-sub-chevron"})]}),l.jsx("div",{className:"template-divider",children:l.jsx("span",{children:"Или выберите из шаблонов"})}),l.jsx("div",{className:"template-grid",children:X.map(v=>l.jsxs("button",{className:"template-item",onClick:()=>J(v),children:[l.jsx(lt,{domain:v.domain,emoji:v.icon,color:v.color,size:48,logoUrl:v.logo_url}),l.jsx("span",{children:v.name})]},v.id))})]})]}):l.jsxs("div",{className:"subscription-form card-form",children:[l.jsxs("div",{className:`card-form-logo ${z?"scaled-up":""}`,onClick:()=>{I(!0),setTimeout(()=>w(!0),150)},children:[l.jsx(lt,{domain:g.domain,emoji:g.icon,color:g.color,size:96,logoUrl:g.logo_url}),l.jsx("div",{className:"logo-edit-badge",children:l.jsx(nd,{size:14})})]}),l.jsxs("div",{className:"settings-card",children:[l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Название"}),l.jsx("input",{className:"settings-row-value-input",type:"text",value:g.name,onChange:v=>P({...g,name:v.target.value}),placeholder:"Название"})]}),l.jsx("div",{className:"settings-row-divider"}),l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Периодичность"}),l.jsxs("div",{className:"settings-row-value",children:[l.jsx("select",{className:"native-select",value:g.billingCycle,onChange:v=>P({...g,billingCycle:v.target.value}),children:dn.map(v=>l.jsx("option",{value:v.value,children:v.label},v.value))}),l.jsx(at,{size:16,className:"settings-row-chevron"})]})]}),l.jsx("div",{className:"settings-row-divider"}),l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Дата начала"}),l.jsx("input",{type:"date",className:"settings-date-input",value:g.firstBillingDate,onChange:v=>P({...g,firstBillingDate:v.target.value})})]}),g.billingCycle==="trial"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"settings-row-divider"}),l.jsxs("div",{className:"settings-row trial-end-row",children:[l.jsx("span",{className:"settings-row-label",children:"Дата окончания"}),l.jsx("input",{type:"date",className:"settings-date-input",value:g.trialEndDate,min:g.firstBillingDate,onChange:v=>P({...g,trialEndDate:v.target.value})})]})]})]}),l.jsx("div",{className:"settings-card",onClick:()=>le(!0),children:l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Сумма"}),l.jsxs("div",{className:"settings-row-value",children:[l.jsx("span",{children:g.amount?`${(F=Se.find(v=>v.code===g.currency))==null?void 0:F.symbol} ${g.amount} (${g.currency})`:`${($=Se.find(v=>v.code===g.currency))==null?void 0:$.symbol} 0.00 (${g.currency})`}),l.jsx(at,{size:16,className:"settings-row-chevron"})]})]})}),l.jsxs("div",{className:"settings-card",children:[l.jsxs("div",{className:"settings-row",children:[l.jsxs("div",{className:"settings-row-left",children:[l.jsx("div",{className:"settings-row-icon",style:{background:"rgba(139, 92, 246, 0.15)",color:"#8B5CF6"},children:l.jsx(cm,{size:16})}),l.jsx("span",{className:"settings-row-label",children:"Категория"})]}),l.jsxs("div",{className:"settings-row-value",children:[l.jsx("select",{className:"native-select",value:g.category,onChange:v=>P({...g,category:v.target.value}),children:Z.map(v=>l.jsx("option",{value:v.name,children:v.name},v.id))}),l.jsx(at,{size:16,className:"settings-row-chevron"})]})]}),l.jsx("div",{className:"settings-row-divider"}),l.jsxs("div",{className:"settings-row",children:[l.jsxs("div",{className:"settings-row-left",children:[l.jsx("div",{className:"settings-row-icon",style:{background:"rgba(245, 158, 11, 0.15)",color:"#F59E0B"},children:l.jsx(Vp,{size:16})}),l.jsxs("div",{children:[l.jsx("span",{className:"settings-row-label",children:"Уведомления"}),l.jsx("p",{className:"settings-row-hint",children:"Настроить можно в настройках"})]})]}),l.jsxs("label",{className:"toggle",onClick:v=>v.stopPropagation(),children:[l.jsx("input",{type:"checkbox",checked:g.notifyEnabled,onChange:()=>P({...g,notifyEnabled:!g.notifyEnabled})}),l.jsx("span",{className:"toggle-slider"})]})]})]}),l.jsxs("button",{className:"save-btn",onClick:pe,disabled:i||!g.name||!g.amount,children:[i?l.jsx(td,{className:"spin",size:20}):null,r?"Сохранить":"Добавить подписку"]})]})]}),l.jsx(Rm,{visible:Q,amount:g.amount,currency:g.currency,currencies:Se,onAmountChange:v=>P({...g,amount:v}),onCurrencyChange:v=>P({...g,currency:v}),onClose:()=>le(!1)}),p&&(()=>{const v=()=>{E(!0),I(!1),setTimeout(()=>{w(!1),E(!1)},280)};let H=0,W=0,q=!1;const oe=te=>{H=te.touches[0].clientY,W=0;const tt=te.currentTarget.querySelector(".logo-sheet-grid");q=!tt||tt.scrollTop<=0},Re=te=>{const tt=te.touches[0].clientY-H;W=tt,q&&tt>0&&(te.currentTarget.style.transform=`translateY(${tt}px)`)},Ie=te=>{q&&W>80&&v(),te.currentTarget.style.transform="",te.currentTarget.style.transition="transform 0.2s ease",setTimeout(()=>{te.currentTarget&&(te.currentTarget.style.transition="")},200)};return l.jsx("div",{className:"logo-sheet-overlay",onClick:te=>{te.stopPropagation(),v()},children:l.jsxs("div",{className:`logo-sheet ${S?"closing":""}`,onClick:te=>te.stopPropagation(),onTouchStart:oe,onTouchMove:Re,onTouchEnd:Ie,children:[l.jsx("div",{className:"logo-sheet-handle"}),l.jsx("div",{className:"logo-sheet-preview",children:l.jsx(lt,{domain:null,emoji:g.icon,color:g.color,size:80,logoUrl:null})}),l.jsx("div",{className:"logo-sheet-colors",children:yo.slice(0,7).map(te=>l.jsx("button",{className:`logo-color-btn ${g.color===te?"active":""}`,style:{background:te},onClick:()=>P({...g,color:te,domain:null,logo_url:null})},te))}),l.jsxs("div",{className:"logo-sheet-tabs",children:[l.jsx("button",{className:`logo-sheet-tab ${M==="photo"?"active":""}`,onClick:()=>_("photo"),children:"Фото"}),l.jsx("button",{className:`logo-sheet-tab ${M==="emoji"?"active":""}`,onClick:()=>_("emoji"),children:"Эмодзи"}),l.jsx("button",{className:`logo-sheet-tab ${M==="symbols"?"active":""}`,onClick:()=>_("symbols"),children:"Символы"})]}),l.jsx("div",{className:"logo-sheet-grid",children:M==="photo"?l.jsxs("div",{className:"logo-sheet-placeholder",children:[l.jsx(Yp,{size:32,color:"var(--text-secondary)"}),l.jsx("span",{children:"В разработке"}),l.jsx("p",{children:"Загрузка фото будет доступна в следующем обновлении"})]}):M==="emoji"?Cm.map((te,tt)=>l.jsx("button",{className:`logo-grid-item ${g.icon===te?"active":""}`,onClick:()=>P({...g,icon:te,domain:null,logo_url:null}),children:l.jsx("span",{className:"logo-grid-emoji",children:te})},te+tt)):rd.map(te=>l.jsx("button",{className:`logo-grid-item ${g.icon==="symbol:"+te.name?"active":""}`,onClick:()=>P({...g,icon:"symbol:"+te.name,domain:null,logo_url:null}),children:l.jsx(te.icon,{size:24,color:"var(--text-primary)",strokeWidth:1.5})},te.name))})]})})})()]})},Cl=(e,t=400)=>{const[n,r]=j.useState(e),o=j.useRef(null);return j.useEffect(()=>{const i=n,a=e-i;if(a===0)return;const s=performance.now(),c=d=>{const y=d-s,h=Math.min(y/t,1),m=1-Math.pow(1-h,3);r(Math.round(i+a*m)),h<1&&(o.current=requestAnimationFrame(c))};return o.current=requestAnimationFrame(c),()=>cancelAnimationFrame(o.current)},[e]),n},Fm=({subscriptions:e,currencies:t,onClose:n})=>{const[r,o]=j.useState(!1),[i,a]=j.useState(0),[s,c]=j.useState(0),[d,y]=j.useState(""),[h,m]=j.useState(!1),x=j.useRef(!1),N=j.useRef(0),k=j.useRef(0),A=j.useRef(null),f=j.useRef(0),u=j.useRef(0),p=j.useRef(0),w=j.useRef(null),S=()=>{o(!0),setTimeout(()=>n(),280)},E=j.useMemo(()=>{let F=0;const $={};return e.forEach(v=>{const H=dn.find(Ie=>Ie.value===(v.billing_cycle||v.billingCycle)),W=Se.find(Ie=>Ie.code===v.currency),oe=v.amount*((W==null?void 0:W.rate)||1)*((H==null?void 0:H.multiplier)||1);F+=oe;const Re=v.category||"Другое";$[Re]=($[Re]||0)+oe}),{monthly:Math.round(F),yearly:Math.round(F*12),count:e.length,categories:$}},[e]),M=j.useMemo(()=>Object.entries(E.categories).map(([$,v])=>{var H;return{name:$,value:Math.round(v),color:((H=Rn.find(W=>W.name===$))==null?void 0:H.color)||"#6B7280",percent:E.monthly>0?Math.round(v/E.monthly*100):0}}).sort(($,v)=>v.value-$.value),[E]),_=j.useMemo(()=>{if(M.length===0)return[];const F=3,v=360-F*M.length;let H=0;return M.map(W=>{const q=Math.max(W.percent/100*v,8),oe={...W,startAngle:H,sweepAngle:q};return H+=q+F,oe})},[M]),z=j.useCallback(F=>{if(_.length===0)return 0;const $=((270-F)%360+360)%360;for(let W=0;W<_.length;W++){const q=_[W],oe=q.startAngle+q.sweepAngle;if($>=q.startAngle&&$<oe)return W}let v=1/0,H=0;return _.forEach((W,q)=>{const oe=W.startAngle+W.sweepAngle/2,Re=Math.abs(($-oe+180)%360-180);Re<v&&(v=Re,H=q)}),H},[_]);j.useEffect(()=>{var $;const F=z(s);F!==i&&(y((($=M[i])==null?void 0:$.name)||""),a(F),m(!0),setTimeout(()=>m(!1),300))},[s,z]);const I=(F,$)=>{const v=$.left+$.width/2,H=$.top+$.height/2,W=F.touches?F.touches[0].clientX:F.clientX,q=F.touches?F.touches[0].clientY:F.clientY;return Math.atan2(q-H,W-v)*(180/Math.PI)},Q=F=>{if(!A.current)return;cancelAnimationFrame(w.current),x.current=!0;const $=A.current.getBoundingClientRect();N.current=I(F,$),k.current=s,f.current=0,u.current=N.current,p.current=performance.now()},le=F=>{if(!x.current||!A.current)return;F.preventDefault();const $=A.current.getBoundingClientRect(),v=I(F,$),H=v-N.current,W=performance.now(),q=W-p.current;q>0&&(f.current=(v-u.current)/q),u.current=v,p.current=W,c(k.current+H)},B=()=>{if(!x.current)return;x.current=!1;let F=f.current*16;const $=()=>{Math.abs(F)<.1||(F*=.95,c(v=>v+F),w.current=requestAnimationFrame($))};w.current=requestAnimationFrame($)};j.useEffect(()=>{const F=A.current;if(!F)return;const $={passive:!1},v=H=>le(H);return F.addEventListener("touchmove",v,$),()=>F.removeEventListener("touchmove",v,$)},[s]);const ne=M[i]||{name:"-",value:0,percent:0,color:"#666"},xe=Cl(ne.value),T=Cl(ne.percent),Z=240,g=Z/2,P=95,O=22,X=P,J=(F,$,v,H)=>{const W=H*Math.PI/180;return{x:F+v*Math.cos(W),y:$+v*Math.sin(W)}},pe=(F,$,v,H,W)=>{const q=J(F,$,v,H),oe=J(F,$,v,W),Re=W-H>180?1:0;return`M ${q.x} ${q.y} A ${v} ${v} 0 ${Re} 1 ${oe.x} ${oe.y}`};return l.jsxs("div",{className:`analytics-halfsheet ${r?"closing":""}`,children:[l.jsx("div",{className:"sheet-handle"}),l.jsxs("div",{className:"analytics-sheet-header",children:[l.jsx("h2",{children:"Аналитика"}),l.jsx("button",{className:"analytics-close-btn",onClick:S,children:l.jsx(Yn,{size:18})})]}),l.jsxs("div",{className:"analytics-content",children:[l.jsxs("div",{className:"ring-sub-count",children:["У вас ",l.jsx("span",{children:E.count})," ",E.count===1?"подписка":E.count<5?"подписки":"подписок"]}),l.jsxs("div",{className:"ring-container",children:[l.jsx("div",{className:"ring-pointer",children:"▼"}),l.jsxs("svg",{ref:A,width:Z,height:Z,viewBox:`0 0 ${Z} ${Z}`,className:"ring-svg",onTouchStart:Q,onTouchEnd:B,onMouseDown:Q,onMouseMove:le,onMouseUp:B,onMouseLeave:B,children:[l.jsx("circle",{cx:g,cy:g,r:X,fill:"none",stroke:"var(--bg-tertiary)",strokeWidth:O,opacity:"0.5"}),l.jsx("g",{style:{transform:`rotate(${s}deg)`,transformOrigin:"center",transition:x.current?"none":"transform 0.1s ease-out"},children:_.map((F,$)=>{const v=$===i,H=pe(g,g,P,F.startAngle,F.startAngle+F.sweepAngle);return l.jsxs("g",{children:[v&&l.jsx("path",{d:H,fill:"none",stroke:F.color,strokeWidth:O+8,strokeLinecap:"round",opacity:"0.25",filter:"url(#glow)"}),l.jsx("path",{d:H,fill:"none",stroke:v?F.color:F.color+"66",strokeWidth:v?O+2:O,strokeLinecap:"round"}),v&&(()=>{const W=J(g,g,P,F.startAngle+F.sweepAngle/2);return l.jsx("circle",{cx:W.x,cy:W.y,r:5,fill:F.color})})()]},F.name)})}),l.jsx("defs",{children:l.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[l.jsx("feGaussianBlur",{stdDeviation:"6",result:"blur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"blur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})})]}),l.jsxs("div",{className:"ring-center-text",children:[l.jsx("div",{className:`ring-cat-name ${h?"animating":""}`,children:ne.name}),l.jsxs("div",{className:"ring-cat-details",children:[xe.toLocaleString("ru-RU")," ₽ · ",T,"%"]})]}),l.jsx("div",{className:"ring-glow-bg",style:{background:`radial-gradient(circle, ${ne.color}33 0%, transparent 70%)`}})]}),l.jsxs("div",{className:"analytics-cards",children:[l.jsxs("div",{className:"analytics-card",children:[l.jsxs("span",{className:"analytics-card-label",children:["Годовой",l.jsx("br",{}),"прогноз"]}),l.jsxs("span",{className:"analytics-card-value",children:[E.yearly.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"analytics-card",children:[l.jsxs("span",{className:"analytics-card-label",children:["Средняя цена",l.jsx("br",{}),"в месяц"]}),l.jsxs("span",{className:"analytics-card-value",children:[E.monthly.toLocaleString("ru-RU")," ₽"]})]})]})]})]})},Om=({visible:e,categories:t,customCategories:n,onAddCategory:r,onDeleteCategory:o,onClose:i})=>{const[a,s]=j.useState(""),[c,d]=j.useState(yo[0]),[y,h]=j.useState(!1),[m,x]=j.useState(!1),[N,k]=j.useState({}),[A,f]=j.useState(null);if(j.useEffect(()=>{e&&(x(!1),k({}))},[e]),!e)return null;const u=t,p=()=>{x(!0),setTimeout(()=>i(),280)},w=()=>{a.trim()&&(r(a.trim(),c),s(""),d(yo[0]))},S=(z,I)=>{k(Q=>({...Q,[z]:{...Q[z],startX:I.touches[0].clientX,swiping:!0}}))},E=(z,I)=>{const Q=N[z];if(!(Q!=null&&Q.swiping))return;const le=Q.startX-I.touches[0].clientX;k(B=>({...B,[z]:{...B[z],x:Math.max(0,Math.min(80,le))}}))},M=z=>{const I=N[z];I&&k(Q=>({...Q,[z]:{...Q[z],swiping:!1,x:I.x>40?80:0}}))},_=()=>{A&&(o(A.id),k(z=>{const I={...z};return delete I[A.id],I}),f(null))};return l.jsxs("div",{className:"categories-sheet-overlay",onClick:p,children:[l.jsxs("div",{className:`categories-sheet ${m?"closing":""}`,onClick:z=>z.stopPropagation(),children:[l.jsxs("div",{className:"categories-sheet-header",children:[l.jsx("h3",{children:"Категории"}),l.jsx("button",{className:"amount-modal-close",onClick:p,children:l.jsx(Yn,{size:20})})]}),l.jsxs("div",{className:"categories-list-wrapper",children:[l.jsx("div",{className:"settings-card",children:u.map((z,I)=>{const Q=N[z.id]||{x:0,swiping:!1};return l.jsxs(Gs.Fragment,{children:[l.jsxs("div",{className:"cat-swipe-wrapper",children:[l.jsx("div",{className:"cat-swipe-bg",style:{opacity:Q.x/80},children:l.jsxs("button",{className:"swipe-delete-btn",onClick:()=>f(z),children:[l.jsx(Sa,{size:18}),l.jsx("span",{children:"Удалить"})]})}),l.jsxs("div",{className:"category-list-item",style:{transform:`translateX(-${Q.x}px)`,transition:Q.swiping?"none":"transform 0.2s ease"},onTouchStart:le=>S(z.id,le),onTouchMove:le=>E(z.id,le),onTouchEnd:()=>M(z.id),children:[l.jsx("span",{className:"category-list-name",children:z.name}),l.jsx("div",{className:"category-color-dot",style:{background:z.color}})]})]}),I<u.length-1&&l.jsx("div",{className:"settings-row-divider"})]},z.id)})}),l.jsx("p",{className:"categories-hint",children:"Свайпните влево, чтобы удалить категорию. Подписки из удалённой категории перейдут в «Другое»."}),l.jsxs("div",{className:"new-category-row",children:[l.jsx("div",{className:"category-color-dot clickable",style:{background:c},onClick:()=>h(!y)}),l.jsx("input",{type:"text",className:"new-category-input",value:a,onChange:z=>s(z.target.value),placeholder:"Новая категория"}),l.jsx("button",{className:"new-category-add-btn",onClick:w,disabled:!a.trim(),children:"Добавить"})]})]}),y&&l.jsxs("div",{className:"color-picker-sheet",children:[l.jsx("div",{className:"color-picker-handle"}),l.jsx("h4",{children:"Выберите цвет"}),l.jsx("div",{className:"color-palette",children:yo.map(z=>l.jsx("button",{className:`color-palette-item ${c===z?"active":""}`,style:{background:z},onClick:()=>{d(z),h(!1)}},z))})]})]}),l.jsx(ba,{visible:!!A,title:"Удалить категорию?",message:A?`Категория «${A.name}» будет удалена. Подписки с этой категорией станут «Другое».`:"",onConfirm:_,onCancel:()=>f(null)})]})},Am=({user:e,appSettings:t,onUpdateSettings:n,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:a,theme:s,onToggleTheme:c,onClose:d,onSendTestNotification:y})=>{var le;const h=on(),m=(le=h==null?void 0:h.initDataUnsafe)==null?void 0:le.user,[x,N]=j.useState(!1),[k,A]=j.useState(!1),f=()=>{N(!0),setTimeout(()=>d(),280)},[u,p]=j.useState(!1),w=(m==null?void 0:m.photo_url)||null,S=m!=null&&m.first_name?`${m.first_name}${m.last_name?" "+m.last_name:""}`:(e==null?void 0:e.first_name)||"Пользователь",E=(m==null?void 0:m.id)||(e==null?void 0:e.telegram_id)||(e==null?void 0:e.id)||"—",M=r,_=t.firstReminder||{days:1,time:"09:00"},z=t.secondReminder||{days:-1,time:"09:00"},I=(B,ne)=>{n(xe=>({...xe,firstReminder:{...xe.firstReminder||{days:1,time:"09:00"},[B]:ne}}))},Q=(B,ne)=>{n(xe=>({...xe,secondReminder:{...xe.secondReminder||{days:-1,time:"09:00"},[B]:ne}}))};return l.jsxs("div",{className:`settings-screen screen-enter ${x?"screen-exit":""}`,children:[l.jsxs("div",{className:"settings-header",children:[l.jsx("button",{className:"back-btn",onClick:f,children:l.jsx(ka,{size:20})}),l.jsx("h2",{children:"Настройки"}),l.jsx("div",{style:{width:32}})]}),l.jsxs("div",{className:"settings-content",children:[l.jsxs("div",{className:"profile-section",children:[l.jsx("div",{className:"profile-avatar",children:w?l.jsx("img",{src:w,alt:"Avatar"}):l.jsx("div",{className:"avatar-placeholder",children:S.charAt(0).toUpperCase()})}),l.jsx("h3",{className:"profile-name",children:S}),l.jsxs("span",{className:"profile-id",children:["ID: ",E]})]}),l.jsx("div",{className:"settings-section-label",children:"КАТЕГОРИИ"}),l.jsx("div",{className:"settings-card",onClick:()=>p(!0),children:l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Категории"}),l.jsxs("div",{className:"settings-row-value",children:[l.jsx("span",{children:M.length}),l.jsx(at,{size:16,className:"settings-row-chevron"})]})]})}),l.jsx("div",{className:"settings-section-label",children:"УВЕДОМЛЕНИЯ"}),l.jsxs("div",{className:"settings-card",children:[l.jsxs("div",{className:"settings-row notification-row",children:[l.jsx("span",{className:"settings-row-label",children:"Первое уведомление"}),l.jsxs("div",{className:"notification-row-controls",children:[l.jsx("select",{className:"native-select",value:_.days,onChange:B=>I("days",parseInt(B.target.value)),children:Is.map(B=>l.jsx("option",{value:B.value,children:B.label},B.value))}),_.days!==-1&&l.jsx("input",{type:"time",className:"time-input-capsule",value:_.time,onChange:B=>I("time",B.target.value)})]})]}),l.jsx("div",{className:"settings-row-divider"}),l.jsxs("div",{className:"settings-row notification-row",children:[l.jsx("span",{className:"settings-row-label",children:"Второе уведомление"}),l.jsxs("div",{className:"notification-row-controls",children:[l.jsx("select",{className:"native-select",value:z.days,onChange:B=>Q("days",parseInt(B.target.value)),children:Is.map(B=>l.jsx("option",{value:B.value,children:B.label},B.value))}),z.days!==-1&&l.jsx("input",{type:"time",className:"time-input-capsule",value:z.time,onChange:B=>Q("time",B.target.value)})]})]}),l.jsx("div",{className:"settings-row-divider"}),l.jsx("div",{className:"settings-row",children:l.jsx("button",{className:"test-notification-btn",onClick:()=>{y&&y()},children:"Тест уведомлений"})})]}),l.jsx("p",{className:"settings-hint",children:"Уведомления приходят через Telegram‑бот. Убедитесь, что бот не заблокирован и уведомления от него включены."}),l.jsx("div",{className:"settings-row-divider"}),l.jsx("div",{className:"settings-section-label",children:"ОФОРМЛЕНИЕ"}),l.jsx("div",{className:"settings-card",children:l.jsxs("div",{className:"settings-row",children:[l.jsx("span",{className:"settings-row-label",children:"Тёмная тема"}),l.jsxs("label",{className:"toggle",children:[l.jsx("input",{type:"checkbox",checked:s==="dark",onChange:()=>c()}),l.jsx("span",{className:"toggle-slider"})]})]})}),["820187903","dev-user"].includes(String(E))&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"settings-section-label",children:"РАЗРАБОТЧИК"}),l.jsx("div",{className:"settings-card",children:l.jsx("div",{className:"settings-row",children:l.jsx("button",{className:"test-notification-btn",style:{background:"var(--danger)",color:"white"},onClick:()=>{confirm("Сбросить все данные и вернуться к onboarding?")&&(localStorage.clear(),window.location.reload())},children:"🔄 Сбросить приложение"})})})]}),l.jsxs("div",{className:"version-badge",onClick:()=>A(!0),children:[l.jsx("span",{className:"version-tag",children:"Beta 0.1.13"}),l.jsx(at,{size:14})]})]}),k&&l.jsx("div",{className:"modal-overlay confirm-overlay",onClick:()=>A(!1),children:l.jsxs("div",{className:"version-modal",onClick:B=>B.stopPropagation(),children:[l.jsxs("div",{className:"version-modal-header",children:[l.jsx("h3",{children:"О приложении"}),l.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:l.jsx(Yn,{size:18})})]}),l.jsxs("div",{className:"version-modal-body",children:[l.jsx("div",{className:"version-logo",children:"Subfy"}),l.jsx("span",{className:"version-number",children:"Beta 0.1.13"}),l.jsx("p",{className:"version-desc",children:"⚙️ Это бета‑версия приложения. Если вы заметили ошибку или баг — сообщите нам через Telegram‑бот"}),l.jsx("button",{className:"contact-btn",onClick:()=>{var ne;const B=on();(ne=B==null?void 0:B.openTelegramLink)==null||ne.call(B,"https://t.me/subfy_support_bot")},children:"Написать в бот"})]})]})}),l.jsx(Om,{visible:u,categories:r,customCategories:o,onAddCategory:i,onDeleteCategory:a,onClose:()=>p(!1)})]})},Um=({subscriptions:e,currencies:t,onOpenForm:n,onEditSubscription:r,currentMonth:o,onChangeMonth:i})=>{const[a,s]=j.useState(null),[c,d]=j.useState(!1),[y,h]=j.useState(!1),m=j.useRef(!0),[x,N]=j.useState(null),k=j.useRef(!1),A=j.useRef(0),f=j.useRef(0),u=T=>{A.current=T.touches[0].clientX},p=T=>{f.current=T.touches[0].clientX},w=()=>{const T=A.current-f.current;Math.abs(T)>=50&&I(T>0?1:-1),A.current=0,f.current=0},S=new Date,E=o.getFullYear()===S.getFullYear()&&o.getMonth()===S.getMonth();j.useEffect(()=>{if(m.current!==E){h(!0);const T=setTimeout(()=>h(!1),550);return m.current=E,()=>clearTimeout(T)}},[E]);const _=(T=>{const Z=T.getFullYear(),g=T.getMonth(),P=new Date(Z,g,1),O=new Date(Z,g+1,0),X=[],J=P.getDay()||7;for(let pe=1;pe<J;pe++)X.push({date:null,subscriptions:[]});for(let pe=1;pe<=O.getDate();pe++){const F=new Date(Z,g,pe),$=e.filter(v=>{const H=v.billing_cycle||v.billingCycle||"monthly";if(H==="trial"){const oe=mn(v.trial_end_date||v.trialEndDate);return oe?oe.getFullYear()===Z&&oe.getMonth()===g&&oe.getDate()===pe:!1}const W=v.first_billing_date||v.next_billing_date||v.firstBillingDate;return ld(W,H,Z,g).some(oe=>oe.getDate()===pe)});X.push({date:F,subscriptions:$})}for(;X.length<42;)X.push({date:null,subscriptions:[]});return X})(o),z=o.toLocaleDateString("ru-RU",{month:"long",year:"numeric"}),I=T=>{if(k.current)return;k.current=!0;const Z=T>0?"left":"right",g=T>0?"right":"left";N("exit-"+Z),ne(),setTimeout(()=>{const P=new Date(o);P.setMonth(P.getMonth()+T),i(P),N("enter-"+g),setTimeout(()=>{N(null),k.current=!1},200)},200)},Q=()=>{if(k.current)return;const T=new Date,Z=o.getFullYear(),g=o.getMonth(),P=T.getFullYear(),O=T.getMonth();if(Z===P&&g===O)return;const X=Z*12+g>P*12+O?-1:1;k.current=!0;const J=X>0?"left":"right",pe=X>0?"right":"left";N("exit-"+J),ne(),setTimeout(()=>{i(new Date(P,O,1)),N("enter-"+pe),setTimeout(()=>{N(null),k.current=!1},200)},200)},le=T=>`${T.getFullYear()}-${String(T.getMonth()+1).padStart(2,"0")}-${String(T.getDate()).padStart(2,"0")}`,B=T=>{T.date&&(T.subscriptions.length>0?(s(T),d(!1)):n==null||n(le(T.date)))},ne=()=>{a&&(d(!0),setTimeout(()=>{s(null),d(!1)},250))},xe=j.useMemo(()=>a?a.subscriptions.reduce((T,Z)=>{const g=t.find(P=>P.code===Z.currency)||t[0];return T+Z.amount*g.rate},0):0,[a,t]);return l.jsxs("div",{className:"calendar-view",children:[l.jsxs("div",{className:"calendar-header",children:[l.jsx("button",{onClick:()=>I(-1),children:l.jsx(qu,{size:20})}),l.jsx("div",{className:`calendar-title ${x||""}`,children:l.jsx("h3",{children:z})}),l.jsx("button",{onClick:()=>I(1),children:l.jsx(at,{size:20})})]}),l.jsx("div",{className:"calendar-weekdays",children:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(T=>l.jsx("div",{className:"weekday",children:T},T))}),l.jsx("div",{className:`calendar-grid ${x||""}`,onTouchStart:u,onTouchMove:p,onTouchEnd:w,children:_.map((T,Z)=>{var X;const g=((X=T.date)==null?void 0:X.toDateString())===new Date().toDateString(),P=T.subscriptions.length>0,O=P?T.subscriptions[0].color:null;return l.jsx("div",{className:`calendar-day ${T.date?"":"empty"} ${P?"has-subs":""} ${g?"today":""}`,style:P&&g?{background:O+"25"}:P?{background:O+"15"}:void 0,onClick:()=>B(T),children:T.date&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"day-logo-container",children:P&&(T.subscriptions.length===1?l.jsx(lt,{domain:T.subscriptions[0].domain,emoji:T.subscriptions[0].icon,color:T.subscriptions[0].color,size:22,logoUrl:T.subscriptions[0].logo_url}):T.subscriptions.length===2?l.jsxs("div",{className:"day-logos-pair",children:[l.jsx(lt,{domain:T.subscriptions[0].domain,emoji:T.subscriptions[0].icon,color:T.subscriptions[0].color,size:18,logoUrl:T.subscriptions[0].logo_url}),l.jsx(lt,{domain:T.subscriptions[1].domain,emoji:T.subscriptions[1].icon,color:T.subscriptions[1].color,size:18,logoUrl:T.subscriptions[1].logo_url})]}):l.jsxs("div",{className:"day-logos-pair",children:[l.jsx(lt,{domain:T.subscriptions[0].domain,emoji:T.subscriptions[0].icon,color:T.subscriptions[0].color,size:18,logoUrl:T.subscriptions[0].logo_url}),l.jsxs("div",{className:"day-count-badge",children:["+",T.subscriptions.length-1]})]}))}),l.jsx("span",{className:"day-number",children:T.date.getDate()})]})},Z)})}),E?l.jsxs("button",{className:`calendar-add-btn ${y?"drum-in":""}`,onClick:()=>n==null?void 0:n(null),children:[l.jsx(Bo,{size:20}),"Добавить подписку"]}):l.jsxs("button",{className:`calendar-add-btn calendar-return-btn ${y?"drum-in":""}`,onClick:Q,children:[l.jsx(ka,{size:20}),"Вернуться к активному месяцу"]}),a&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:`day-bottom-sheet-overlay ${c?"closing":""}`,onClick:ne}),l.jsxs("div",{className:`day-bottom-sheet ${c?"closing":""}`,children:[l.jsx("div",{className:"sheet-handle"}),l.jsxs("div",{className:"sheet-header",children:[l.jsx("h4",{children:"Подписки"}),l.jsx("span",{className:"sheet-date",children:zm(a.date)})]}),l.jsx("div",{className:"sheet-list",children:a.subscriptions.map(T=>{const Z=t.find(P=>P.code===T.currency)||t[0],g=dn.find(P=>P.value===(T.billing_cycle||T.billingCycle));return l.jsxs("div",{className:"sheet-subscription-item",onClick:()=>{ne(),r==null||r(T)},children:[l.jsx(lt,{domain:T.domain,emoji:T.icon,color:T.color,size:40,logoUrl:T.logo_url}),l.jsxs("div",{className:"sheet-sub-info",children:[l.jsx("span",{className:"sheet-sub-name",children:T.name}),l.jsx("span",{className:"sheet-sub-cycle",children:(g==null?void 0:g.label)||"Ежемесячно"})]}),l.jsxs("div",{className:"sheet-sub-right",children:[l.jsxs("span",{className:"sheet-sub-amount",children:[T.amount.toLocaleString("ru-RU")," ",Z.symbol]}),l.jsx(at,{size:16,className:"sheet-chevron"})]})]},T.id)})}),l.jsxs("button",{className:"sheet-add-btn",onClick:()=>{const T=le(a.date);ne(),n==null||n(T)},children:[l.jsx(Bo,{size:18}),"Добавить подписку"]}),l.jsxs("div",{className:"sheet-total",children:[l.jsx("span",{children:"Итого"}),l.jsxs("span",{className:"sheet-total-amount",children:[Math.round(xe).toLocaleString("ru-RU")," ₽"]})]})]})]})]})},$m=({value:e})=>{const t=Cl(e,500);return l.jsxs("span",{className:"hero-amount-text",children:["₽ ",t.toLocaleString("ru-RU")]})};function Bm(){var Na;const[e,t]=j.useState("loading"),[n,r]=j.useState(null),[o,i]=j.useState(()=>{const b=localStorage.getItem("subfy_theme");if(b)return b;const D=on();return(D==null?void 0:D.colorScheme)||"dark"}),[a,s]=j.useState("calendar"),[c,d]=j.useState(null),[y,h]=j.useState(new Date),[m,x]=j.useState(null),[N,k]=j.useState(!1),[A,f]=j.useState(null),[u,p]=j.useState([]),[w,S]=j.useState(!1),[E,M]=j.useState(null),[_,z]=j.useState(!1),[I,Q]=j.useState(!1),[le,B]=j.useState(!1),[ne,xe]=j.useState({visible:!1,message:"",type:"success"}),[T,Z]=j.useState([]),[g,P]=j.useState({}),[O,X]=j.useState(()=>{const b=localStorage.getItem("subfy_settings"),D={notificationsEnabled:!0,firstReminder:{days:1,time:"09:00"},secondReminder:{days:-1,time:"09:00"},categoryOrder:null,hiddenCategories:[]};return b?{...D,...JSON.parse(b)}:D}),[J,pe]=j.useState(()=>{const b=localStorage.getItem("subfy_custom_categories");return b?JSON.parse(b):[]}),[F,$]=j.useState(()=>{const b=localStorage.getItem("subfy_deleted_default_categories");return b?JSON.parse(b):[]}),v=(b,D="#EF4444")=>{const U={id:`custom-${Date.now()}`,name:b,color:D,isCustom:!0};pe(V=>{const L=[...V,U];return localStorage.setItem("subfy_custom_categories",JSON.stringify(L)),L})},H=b=>{const D=J.some(L=>L.id===b),V=[...Rn,...J].find(L=>L.id===b);D?pe(L=>{const G=L.filter(Xe=>Xe.id!==b);return localStorage.setItem("subfy_custom_categories",JSON.stringify(G)),G}):$(L=>{const G=[...L,b];return localStorage.setItem("subfy_deleted_default_categories",JSON.stringify(G)),G}),V&&V.name!=="Другое"&&p(L=>L.map(G=>G.category===V.name?{...G,category:"Другое"}:G))},W=j.useMemo(()=>T.length>0?T.map(Nm):jm,[T]),q=j.useMemo(()=>[...Rn.filter(b=>!F.includes(b.id)),...J],[J,F]),oe=j.useMemo(()=>{const b=O.categoryOrder||q.map(L=>L.id),D=b.map(L=>q.find(G=>G.id===L)).filter(Boolean);q.forEach(L=>{b.includes(L.id)||D.push(L)});const U={};D.forEach(L=>{const G=u.filter(Xe=>Xe.category===L.name);G.length>0&&(U[L.name]={...L,subscriptions:G})});const V=u.filter(L=>!q.some(G=>G.name===L.category));return V.length>0&&(U["Без категории"]={id:"uncategorized",name:"Без категории",color:"#6B7280",subscriptions:V}),U},[u,q,O]);j.useEffect(()=>{localStorage.setItem("subfy_settings",JSON.stringify(O)),n!=null&&n.id&&!_&&jl&&Gt.saveNotificationSettings(n.id,O).catch(()=>{})},[O]),j.useEffect(()=>{localStorage.setItem("subfy_theme",o)},[o]),j.useEffect(()=>{var b,D,U,V;try{const L=on();if(L){if(L.ready(),L.expand(),L.requestFullscreen)try{L.requestFullscreen()}catch{}if(L.disableVerticalSwipes)try{L.disableVerticalSwipes()}catch{}const G=()=>{var Qn,Xn,Kn,Ca;const Xe=((Qn=L.safeAreaInset)==null?void 0:Qn.top)||0,Qt=((Xn=L.safeAreaInset)==null?void 0:Xn.bottom)||0,Te=((Kn=L.contentSafeAreaInset)==null?void 0:Kn.top)||0,Ur=((Ca=L.contentSafeAreaInset)==null?void 0:Ca.bottom)||0;document.documentElement.style.setProperty("--tg-safe-area-top",`${Xe}px`),document.documentElement.style.setProperty("--tg-safe-area-bottom",`${Qt}px`),document.documentElement.style.setProperty("--tg-content-safe-area-top",`${Te}px`),document.documentElement.style.setProperty("--tg-content-safe-area-bottom",`${Ur}px`)};G(),(b=L.onEvent)==null||b.call(L,"viewportChanged",G),(D=L.onEvent)==null||D.call(L,"safeAreaChanged",G),(U=L.onEvent)==null||U.call(L,"contentSafeAreaChanged",G),(V=L.onEvent)==null||V.call(L,"fullscreenChanged",G)}}catch(L){console.warn("Telegram WebApp init error:",L)}Re()},[]);const Re=async()=>{try{const b=localStorage.getItem("subfy_templates");if(b)try{Z(JSON.parse(b))}catch{}const D=on(),U=D==null?void 0:D.initData,V=localStorage.getItem("subfy_onboarding_complete");if(!U||!jl){z(!0);const Qt=localStorage.getItem("subfy_subscriptions");Qt&&p(JSON.parse(Qt)),r({id:"dev-user",first_name:"Developer"}),t(V?"main":"onboarding"),Gt.getTemplates().then(({templates:Te})=>{Te&&(Z(Te),localStorage.setItem("subfy_templates",JSON.stringify(Te)))}).catch(()=>{});return}const[L,G]=await Promise.all([Gt.auth(U),Gt.getTemplates().catch(()=>({templates:null}))]);G.templates&&(Z(G.templates),localStorage.setItem("subfy_templates",JSON.stringify(G.templates))),r(L.user);const Xe=L.user;if(Xe){const Qt=Te=>Te?Te.substring(0,5):"09:00";X(Te=>{var Ur,Qn,Xn,Kn;return{...Te,notificationsEnabled:Xe.notifications_enabled??Te.notificationsEnabled,firstReminder:{days:Xe.first_reminder_days??((Ur=Te.firstReminder)==null?void 0:Ur.days)??1,time:Qt(Xe.first_reminder_time)||((Qn=Te.firstReminder)==null?void 0:Qn.time)||"09:00"},secondReminder:{days:Xe.second_reminder_days??((Xn=Te.secondReminder)==null?void 0:Xn.days)??-1,time:Qt(Xe.second_reminder_time)||((Kn=Te.secondReminder)==null?void 0:Kn.time)||"09:00"}}})}p(L.subscriptions||[]),t(V?"main":"onboarding")}catch(b){console.error("Init error:",b),z(!0);const D=localStorage.getItem("subfy_subscriptions");D&&p(JSON.parse(D)),r({id:"dev-user",first_name:"User"});const U=localStorage.getItem("subfy_onboarding_complete");t(U?"main":"onboarding")}},Ie=(b,D="success")=>{xe({visible:!0,message:b,type:D})},te=async b=>{S(!0);try{if(!_&&(n!=null&&n.id)){const{subscription:D}=await Gt.saveSubscription(n.id,b);p(A?U=>U.map(V=>V.id===D.id?D:V):U=>[D,...U])}else{const D={...b,id:(A==null?void 0:A.id)||`local-${Date.now()}`};p(A?U=>{const V=U.map(L=>L.id===D.id?D:L);return localStorage.setItem("subfy_subscriptions",JSON.stringify(V)),V}:U=>{const V=[D,...U];return localStorage.setItem("subfy_subscriptions",JSON.stringify(V)),V})}k(!1),Ie(A?"Подписка сохранена":"Подписка добавлена"),Fs(),f(null)}catch(D){console.error("Save error:",D),Ie("Ошибка сохранения","error")}finally{S(!1)}},tt=async b=>{try{!_&&(n!=null&&n.id)&&await Gt.deleteSubscription(n.id,b),p(D=>{const U=D.filter(V=>V.id!==b);return localStorage.setItem("subfy_subscriptions",JSON.stringify(U)),U})}catch(D){console.error("Delete error:",D)}},sd=async()=>{if(!(n!=null&&n.id)||_){Ie("Недоступно в режиме разработки","error");return}try{await Gt.sendTestNotification(n.id),Fs(),Ie("Тестовое уведомление отправлено!")}catch(b){console.error("Test notification error:",b),Ie("Не удалось отправить уведомление","error")}},cd=()=>{localStorage.setItem("subfy_onboarding_complete","true"),t("main")};j.useMemo(()=>{let b=0;return u.forEach(D=>{const U=dn.find(G=>G.value===(D.billing_cycle||D.billingCycle)),V=Se.find(G=>G.code===D.currency),L=D.amount*((V==null?void 0:V.rate)||1);b+=L*((U==null?void 0:U.multiplier)||1)}),{monthly:Math.round(b),yearly:Math.round(b*12)}},[u]);const Ar=j.useCallback((b,D,U)=>{const V=b.billing_cycle||b.billingCycle||"monthly";if(V==="trial"){const G=mn(b.trial_end_date||b.trialEndDate);return G&&G.getFullYear()===D&&G.getMonth()===U}const L=b.first_billing_date||b.next_billing_date||b.firstBillingDate;return ld(L,V,D,U).length>0},[]),ud=j.useMemo(()=>{const b=y.getFullYear(),D=y.getMonth();return Math.round(u.reduce((U,V)=>{if(!Ar(V,b,D))return U;const L=Se.find(G=>G.code===V.currency)||Se[0];return U+V.amount*L.rate},0))},[u,y,Ar]),ht=j.useMemo(()=>{const b=y.getFullYear(),D=y.getMonth();return u.filter(U=>(U.billing_cycle||U.billingCycle||"monthly")==="monthly"?!1:Ar(U,b,D))},[u,y,Ar]),ja=j.useMemo(()=>u.map(b=>({...b,nextDate:id(b.first_billing_date||b.next_billing_date||b.firstBillingDate,b.billing_cycle||b.billingCycle)})).filter(b=>{if(!b.nextDate)return!1;const D=Nl(b.nextDate);return D!==null&&D>=0&&D<=3}).sort((b,D)=>b.nextDate-D.nextDate),[u]),dd={firstReminder:O.firstReminder||{days:1,time:"09:00"},secondReminder:O.secondReminder||{days:-1,time:"09:00"}};return e==="loading"?l.jsx(Dm,{message:"Подключение..."}):e==="onboarding"?l.jsxs(l.Fragment,{children:[l.jsx("style",{children:Os}),l.jsx(Pm,{onComplete:cd,theme:o})]}):l.jsxs("div",{className:`app ${o}`,children:[l.jsx("style",{children:Os}),I&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"analytics-overlay",onClick:()=>Q(!1)}),l.jsx(Fm,{subscriptions:u,currencies:Se,onClose:()=>Q(!1)})]}),le&&l.jsx("div",{className:"screen-overlay",children:l.jsx(Am,{user:n,appSettings:O,onUpdateSettings:X,categories:q,customCategories:J,onAddCategory:v,onDeleteCategory:H,theme:o,onToggleTheme:()=>i(o==="dark"?"light":"dark"),onClose:()=>B(!1),onSendTestNotification:sd})}),l.jsxs("header",{className:"app-header",children:[l.jsx("span",{className:"logo",children:"Subfy"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"icon-btn",onClick:()=>Q(!0),children:l.jsx(Bp,{size:20})}),l.jsx("button",{className:"icon-btn",onClick:()=>B(!0),children:l.jsx(pm,{size:20})})]})]}),l.jsxs("div",{className:"hero-amount",children:[l.jsx("div",{className:"hero-amount-glow"}),l.jsx($m,{value:ud}),ht.length>0?l.jsxs("div",{className:"hero-extra-row",children:[l.jsxs("button",{className:"hero-extra-badge",onClick:()=>{x(ht)},children:[l.jsx("div",{className:"hero-extra-dot",style:{background:((Na=Rn.find(b=>b.name===ht[0].category))==null?void 0:Na.color)||"#6B7280"}}),l.jsx("span",{className:"hero-extra-name",children:ht[0].name}),l.jsx("span",{className:"hero-extra-sep",children:"·"}),l.jsxs("span",{className:"hero-extra-amount",children:[ht[0].amount.toLocaleString("ru-RU")," ",(Se.find(b=>b.code===ht[0].currency)||Se[0]).symbol]})]}),ht.length>1&&l.jsxs("button",{className:"hero-extra-more",onClick:()=>x(ht),children:["+",ht.length-1]})]}):l.jsx("span",{className:"hero-badge",children:"В месяц"})]}),m&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"day-bottom-sheet-overlay",onClick:()=>x(null)}),l.jsxs("div",{className:"day-bottom-sheet",children:[l.jsx("div",{className:"sheet-handle"}),l.jsx("div",{className:"sheet-header",children:l.jsx("h4",{children:"Дополнительные платежи"})}),l.jsx("div",{className:"sheet-list",children:m.map(b=>{const D=Se.find(V=>V.code===b.currency)||Se[0],U=dn.find(V=>V.value===(b.billing_cycle||b.billingCycle));return l.jsxs("div",{className:"sheet-subscription-item",onClick:()=>{x(null),f(b),k(!0)},children:[l.jsx(lt,{domain:b.domain,emoji:b.icon,color:b.color,size:40,logoUrl:b.logo_url}),l.jsxs("div",{className:"sheet-sub-info",children:[l.jsx("span",{className:"sheet-sub-name",children:b.name}),l.jsx("span",{className:"sheet-sub-cycle",children:(U==null?void 0:U.label)||"Ежемесячно"})]}),l.jsxs("div",{className:"sheet-sub-right",children:[l.jsxs("span",{className:"sheet-sub-amount",children:[b.amount.toLocaleString("ru-RU")," ",D.symbol]}),l.jsx(at,{size:16,className:"sheet-chevron"})]})]},b.id)})}),l.jsxs("div",{className:"sheet-total",children:[l.jsx("span",{children:"Итого"}),l.jsxs("span",{className:"sheet-total-amount",children:[Math.round(m.reduce((b,D)=>{const U=Se.find(V=>V.code===D.currency)||Se[0];return b+D.amount*U.rate},0)).toLocaleString("ru-RU")," ₽"]})]})]})]}),l.jsxs("div",{className:"view-tabs",children:[l.jsxs("button",{className:`view-tab ${a==="calendar"?"active":""}`,onClick:()=>s("calendar"),children:[l.jsx(Wp,{size:18}),"Календарь"]}),l.jsxs("button",{className:`view-tab ${a==="home"?"active":""}`,onClick:()=>s("home"),children:[l.jsx(ed,{size:18}),"Подписки"]})]}),l.jsx("div",{className:"content",children:a==="home"?l.jsxs(l.Fragment,{children:[ja.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"section-header",children:l.jsx("h2",{className:"section-title",children:"Ближайшие списания"})}),l.jsx("div",{className:"upcoming-list",children:ja.map(b=>{const D=Se.find(L=>L.code===b.currency),U=Nl(b.nextDate),V=U===0?"Сегодня":U===1?"Завтра":`Через ${U} дн.`;return l.jsxs("div",{className:`upcoming-item ${U===0?"today":""}`,children:[l.jsx(lt,{domain:b.domain,emoji:b.icon,color:b.color,size:36,logoUrl:b.logo_url}),l.jsxs("div",{className:"upcoming-info",children:[l.jsx("div",{className:"upcoming-name",children:b.name}),l.jsx("div",{className:"upcoming-date",children:V})]}),l.jsxs("div",{className:"upcoming-amount",children:[b.amount," ",D==null?void 0:D.symbol]})]},b.id)})})]}),l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title",children:"Все подписки"}),l.jsx("span",{className:"section-count",children:u.length})]}),u.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📦"}),l.jsx("h3",{className:"empty-title",children:"Нет подписок"}),l.jsx("p",{className:"empty-text",children:"Добавьте первую подписку"}),l.jsxs("button",{className:"empty-btn",onClick:()=>{ad(),k(!0)},children:[l.jsx(Bo,{size:20}),"Добавить"]})]}):Object.entries(oe).map(([b,D])=>l.jsxs("div",{className:"category-group",children:[l.jsxs("button",{className:"category-group-header",onClick:()=>P(U=>({...U,[b]:!U[b]})),children:[l.jsx("div",{className:"category-group-dot",style:{background:D.color}}),l.jsx("span",{className:"category-group-name",children:b}),l.jsx("span",{className:"category-group-count",children:D.subscriptions.length}),l.jsx(at,{size:16,className:`category-group-chevron ${g[b]?"":"expanded"}`})]}),!g[b]&&l.jsx("div",{className:"subscriptions-list",children:D.subscriptions.map(U=>l.jsx(Lm,{subscription:U,onEdit:V=>{f(V),k(!0)},onDelete:tt,currencies:Se},U.id))})]},b))]}):l.jsx(Um,{subscriptions:u,currencies:Se,currentMonth:y,onChangeMonth:h,onOpenForm:b=>{d(b),f(null),k(!0)},onEditSubscription:b=>{f(b),k(!0)}})}),N&&l.jsx(Im,{onClose:()=>{k(!1),f(null),d(null)},onSave:te,onDelete:tt,editData:A,templates:W,isLoading:w,defaultNotificationSettings:dd,customCategories:J,onAddCategory:v,categories:q,preselectedDate:c}),l.jsx(Mm,{message:ne.message,visible:ne.visible,type:ne.type,onHide:()=>xe({...ne,visible:!1})})]})}const Os=`
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
    min-height: 0;
  }

  /* CSS glow background — per-slide shapes */
  .slide-image-area::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }

  /* Slide 1: floating objects — wide horizontal blob */
  .slide-image-area.floating-objects::before {
    width: 240%;
    height: 90%;
    border-radius: 40%;
    background: radial-gradient(ellipse at center,
      rgba(99, 102, 241, 0.7) 0%,
      rgba(99, 102, 241, 0.45) 25%,
      rgba(99, 102, 241, 0.15) 55%,
      transparent 75%
    );
    filter: blur(40px);
  }

  /* Slide 2: calendar — very wide glow */
  .slide-image-area.calendar::before {
    width: 250%;
    height: 100%;
    border-radius: 45%;
    background: radial-gradient(ellipse at center,
      rgba(99, 102, 241, 0.65) 0%,
      rgba(99, 102, 241, 0.35) 25%,
      rgba(99, 102, 241, 0.1) 50%,
      transparent 70%
    );
    filter: blur(50px);
  }

  /* Slide 3: notification — tight centered glow */
  .slide-image-area.notification::before {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at center,
      rgba(99, 102, 241, 0.75) 0%,
      rgba(99, 102, 241, 0.5) 20%,
      rgba(99, 102, 241, 0.2) 45%,
      transparent 65%
    );
    filter: blur(35px);
  }

  .onboarding.light .slide-image-area::before {
    background: radial-gradient(ellipse at center,
      rgba(99, 102, 241, 0.15) 0%,
      rgba(99, 102, 241, 0.07) 40%,
      transparent 70%
    );
    filter: blur(25px);
  }

  .slide-main-img {
    position: relative;
    z-index: 1;
    max-width: 95%;
    max-height: 90%;
    object-fit: contain;
  }

  /* Slide 1: Floating objects — big and centered */
  .slide-image-area.floating-objects .slide-main-img {
    max-width: 100%;
    max-height: 100%;
  }

  /* Slide 2: Calendar — big */
  .slide-image-area.calendar .slide-main-img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
  }

  .onboarding.light .slide-image-area.calendar .slide-main-img {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  }

  /* Slide 3: Notification */
  .slide-image-area.notification .slide-main-img {
    max-width: 95%;
    max-height: 55%;
  }

  .onboarding.light .slide-image-area.notification .slide-main-img {
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.08));
  }

  /* Text area — fixed height so text stays at the same level on all slides */
  .slide-text {
    flex-shrink: 0;
    height: 200px;
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
    width: 320px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(ellipse, var(--accent) 0%, var(--accent-secondary) 35%, transparent 70%);
    opacity: 0.22;
    filter: blur(45px);
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

  .calendar-title { text-align: center; overflow: hidden; }
  .calendar-title h3 { font-size: 1rem; font-weight: 700; text-transform: capitalize; }

  /* Calendar slide animations */
  .exit-left  { animation: calExitLeft 0.2s ease-in forwards; }
  .exit-right { animation: calExitRight 0.2s ease-in forwards; }
  .enter-left { animation: calEnterLeft 0.2s ease-out forwards; }
  .enter-right { animation: calEnterRight 0.2s ease-out forwards; }

  @keyframes calExitLeft {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-30px); }
  }
  @keyframes calExitRight {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(30px); }
  }
  @keyframes calEnterLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes calEnterRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }


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
`;var As;(As=window.Telegram)!=null&&As.WebApp&&(window.Telegram.WebApp.ready(),window.Telegram.WebApp.expand());Mi.createRoot(document.getElementById("root")).render(l.jsx(Gs.StrictMode,{children:l.jsx(Bm,{})}));
