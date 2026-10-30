var P2=Object.create;var g0=Object.defineProperty;var X2=Object.getOwnPropertyDescriptor;var K2=Object.getOwnPropertyNames;var Z2=Object.getPrototypeOf,Q2=Object.prototype.hasOwnProperty;var h0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var qt=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var I2=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of K2(t))!Q2.call(e,a)&&a!==r&&g0(e,a,{get:()=>t[a],enumerable:!(n=X2(t,a))||n.enumerable});return e};var G=(e,t,r)=>(r=e!=null?P2(Z2(e)):{},I2(t||!e||!e.__esModule?g0(r,"default",{value:e,enumerable:!0}):r,e));var E0=qt(q=>{"use strict";var Iu=Symbol.for("react.transitional.element"),W2=Symbol.for("react.portal"),J2=Symbol.for("react.fragment"),e5=Symbol.for("react.strict_mode"),t5=Symbol.for("react.profiler"),r5=Symbol.for("react.consumer"),n5=Symbol.for("react.context"),a5=Symbol.for("react.forward_ref"),o5=Symbol.for("react.suspense"),i5=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),v0=Symbol.iterator;function l5(e){return e===null||typeof e!="object"?null:(e=v0&&e[v0]||e["@@iterator"],typeof e=="function"?e:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,N0={};function ka(e,t,r){this.props=e,this.context=t,this.refs=N0,this.updater=r||S0}ka.prototype.isReactComponent={};ka.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function A0(){}A0.prototype=ka.prototype;function Wu(e,t,r){this.props=e,this.context=t,this.refs=N0,this.updater=r||S0}var Ju=Wu.prototype=new A0;Ju.constructor=Wu;T0(Ju,ka.prototype);Ju.isPureReactComponent=!0;var b0=Array.isArray,de={H:null,A:null,T:null,S:null,V:null},M0=Object.prototype.hasOwnProperty;function ed(e,t,r,n,a,o){return r=o.ref,{$$typeof:Iu,type:e,key:t,ref:r!==void 0?r:null,props:o}}function s5(e,t){return ed(e.type,t,void 0,void 0,void 0,e.props)}function td(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iu}function c5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var x0=/\/+/g;function Qu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c5(""+e.key):t.toString(36)}function y0(){}function u5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(y0,y0):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function wa(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Iu:case W2:i=!0;break;case k0:return i=e._init,wa(i(e._payload),t,r,n,a)}}if(i)return a=a(e),i=n===""?"."+Qu(e,0):n,b0(a)?(r="",i!=null&&(r=i.replace(x0,"$&/")+"/"),wa(a,t,r,"",function(u){return u})):a!=null&&(td(a)&&(a=s5(a,r+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(x0,"$&/")+"/")+i)),t.push(a)),1;i=0;var l=n===""?".":n+":";if(b0(e))for(var c=0;c<e.length;c++)n=e[c],o=l+Qu(n,c),i+=wa(n,t,r,o,a);else if(c=l5(e),typeof c=="function")for(e=c.call(e),c=0;!(n=e.next()).done;)n=n.value,o=l+Qu(n,c++),i+=wa(n,t,r,o,a);else if(o==="object"){if(typeof e.then=="function")return wa(u5(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function ql(e,t,r){if(e==null)return e;var n=[],a=0;return wa(e,n,"","",function(o){return t.call(r,o,a++)}),n}function d5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f5(){}q.Children={map:ql,forEach:function(e,t,r){ql(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ql(e,function(){t++}),t},toArray:function(e){return ql(e,function(t){return t})||[]},only:function(e){if(!td(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ka;q.Fragment=J2;q.Profiler=t5;q.PureComponent=Wu;q.StrictMode=e5;q.Suspense=o5;q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de;q.__COMPILER_RUNTIME={__proto__:null,c:function(e){return de.H.useMemoCache(e)}};q.cache=function(e){return function(){return e.apply(null,arguments)}};q.cloneElement=function(e,t,r){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=T0({},e.props),a=e.key,o=void 0;if(t!=null)for(i in t.ref!==void 0&&(o=void 0),t.key!==void 0&&(a=""+t.key),t)!M0.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(n[i]=t[i]);var i=arguments.length-2;if(i===1)n.children=r;else if(1<i){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+2];n.children=l}return ed(e.type,a,void 0,void 0,o,n)};q.createContext=function(e){return e={$$typeof:n5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:r5,_context:e},e};q.createElement=function(e,t,r){var n,a={},o=null;if(t!=null)for(n in t.key!==void 0&&(o=""+t.key),t)M0.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(a[n]=t[n]);var i=arguments.length-2;if(i===1)a.children=r;else if(1<i){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)a[n]===void 0&&(a[n]=i[n]);return ed(e,o,void 0,void 0,null,a)};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:a5,render:e}};q.isValidElement=td;q.lazy=function(e){return{$$typeof:k0,_payload:{_status:-1,_result:e},_init:d5}};q.memo=function(e,t){return{$$typeof:i5,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=de.T,r={};de.T=r;try{var n=e(),a=de.S;a!==null&&a(r,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(f5,w0)}catch(o){w0(o)}finally{de.T=t}};q.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()};q.use=function(e){return de.H.use(e)};q.useActionState=function(e,t,r){return de.H.useActionState(e,t,r)};q.useCallback=function(e,t){return de.H.useCallback(e,t)};q.useContext=function(e){return de.H.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e,t){return de.H.useDeferredValue(e,t)};q.useEffect=function(e,t,r){var n=de.H;if(typeof r=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)};q.useId=function(){return de.H.useId()};q.useImperativeHandle=function(e,t,r){return de.H.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return de.H.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return de.H.useLayoutEffect(e,t)};q.useMemo=function(e,t){return de.H.useMemo(e,t)};q.useOptimistic=function(e,t){return de.H.useOptimistic(e,t)};q.useReducer=function(e,t,r){return de.H.useReducer(e,t,r)};q.useRef=function(e){return de.H.useRef(e)};q.useState=function(e){return de.H.useState(e)};q.useSyncExternalStore=function(e,t,r){return de.H.useSyncExternalStore(e,t,r)};q.useTransition=function(){return de.H.useTransition()};q.version="19.1.0"});var W=qt((JT,C0)=>{"use strict";C0.exports=E0()});var L0=qt(fe=>{"use strict";function od(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,a=e[n];if(0<Yl(a,t))e[n]=t,e[r]=a,r=n;else break e}}function Yt(e){return e.length===0?null:e[0]}function Xl(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,a=e.length,o=a>>>1;n<o;){var i=2*(n+1)-1,l=e[i],c=i+1,u=e[c];if(0>Yl(l,r))c<a&&0>Yl(u,l)?(e[n]=u,e[c]=r,n=c):(e[n]=l,e[i]=r,n=i);else if(c<a&&0>Yl(u,r))e[n]=u,e[c]=r,n=c;else break e}}return t}function Yl(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}fe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(D0=performance,fe.unstable_now=function(){return D0.now()}):(rd=Date,R0=rd.now(),fe.unstable_now=function(){return rd.now()-R0});var D0,rd,R0,sr=[],$r=[],m5=1,wt=null,Pe=3,id=!1,qo=!1,Yo=!1,ld=!1,z0=typeof setTimeout=="function"?setTimeout:null,_0=typeof clearTimeout=="function"?clearTimeout:null,V0=typeof setImmediate<"u"?setImmediate:null;function Pl(e){for(var t=Yt($r);t!==null;){if(t.callback===null)Xl($r);else if(t.startTime<=e)Xl($r),t.sortIndex=t.expirationTime,od(sr,t);else break;t=Yt($r)}}function sd(e){if(Yo=!1,Pl(e),!qo)if(Yt(sr)!==null)qo=!0,Ta||(Ta=!0,Sa());else{var t=Yt($r);t!==null&&cd(sd,t.startTime-e)}}var Ta=!1,Po=-1,B0=5,$0=-1;function F0(){return ld?!0:!(fe.unstable_now()-$0<B0)}function nd(){if(ld=!1,Ta){var e=fe.unstable_now();$0=e;var t=!0;try{e:{qo=!1,Yo&&(Yo=!1,_0(Po),Po=-1),id=!0;var r=Pe;try{t:{for(Pl(e),wt=Yt(sr);wt!==null&&!(wt.expirationTime>e&&F0());){var n=wt.callback;if(typeof n=="function"){wt.callback=null,Pe=wt.priorityLevel;var a=n(wt.expirationTime<=e);if(e=fe.unstable_now(),typeof a=="function"){wt.callback=a,Pl(e),t=!0;break t}wt===Yt(sr)&&Xl(sr),Pl(e)}else Xl(sr);wt=Yt(sr)}if(wt!==null)t=!0;else{var o=Yt($r);o!==null&&cd(sd,o.startTime-e),t=!1}}break e}finally{wt=null,Pe=r,id=!1}t=void 0}}finally{t?Sa():Ta=!1}}}var Sa;typeof V0=="function"?Sa=function(){V0(nd)}:typeof MessageChannel<"u"?(ad=new MessageChannel,O0=ad.port2,ad.port1.onmessage=nd,Sa=function(){O0.postMessage(null)}):Sa=function(){z0(nd,0)};var ad,O0;function cd(e,t){Po=z0(function(){e(fe.unstable_now())},t)}fe.unstable_IdlePriority=5;fe.unstable_ImmediatePriority=1;fe.unstable_LowPriority=4;fe.unstable_NormalPriority=3;fe.unstable_Profiling=null;fe.unstable_UserBlockingPriority=2;fe.unstable_cancelCallback=function(e){e.callback=null};fe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B0=0<e?Math.floor(1e3/e):5};fe.unstable_getCurrentPriorityLevel=function(){return Pe};fe.unstable_next=function(e){switch(Pe){case 1:case 2:case 3:var t=3;break;default:t=Pe}var r=Pe;Pe=t;try{return e()}finally{Pe=r}};fe.unstable_requestPaint=function(){ld=!0};fe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Pe;Pe=e;try{return t()}finally{Pe=r}};fe.unstable_scheduleCallback=function(e,t,r){var n=fe.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=r+a,e={id:m5++,callback:t,priorityLevel:e,startTime:r,expirationTime:a,sortIndex:-1},r>n?(e.sortIndex=r,od($r,e),Yt(sr)===null&&e===Yt($r)&&(Yo?(_0(Po),Po=-1):Yo=!0,cd(sd,r-n))):(e.sortIndex=a,od(sr,e),qo||id||(qo=!0,Ta||(Ta=!0,Sa()))),e};fe.unstable_shouldYield=F0;fe.unstable_wrapCallback=function(e){var t=Pe;return function(){var r=Pe;Pe=t;try{return e.apply(this,arguments)}finally{Pe=r}}}});var j0=qt((t8,U0)=>{"use strict";U0.exports=L0()});var G0=qt(Ie=>{"use strict";var p5=W();function H0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fr(){}var Qe={d:{f:Fr,r:function(){throw Error(H0(522))},D:Fr,C:Fr,L:Fr,m:Fr,X:Fr,S:Fr,M:Fr},p:0,findDOMNode:null},g5=Symbol.for("react.portal");function h5(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g5,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}var Xo=p5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Qe;Ie.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(H0(299));return h5(e,t,null,r)};Ie.flushSync=function(e){var t=Xo.T,r=Qe.p;try{if(Xo.T=null,Qe.p=2,e)return e()}finally{Xo.T=t,Qe.p=r,Qe.d.f()}};Ie.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Qe.d.C(e,t))};Ie.prefetchDNS=function(e){typeof e=="string"&&Qe.d.D(e)};Ie.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var r=t.as,n=Kl(r,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,o=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;r==="style"?Qe.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:o}):r==="script"&&Qe.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:o,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ie.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var r=Kl(t.as,t.crossOrigin);Qe.d.M(e,{crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Qe.d.M(e)};Ie.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var r=t.as,n=Kl(r,t.crossOrigin);Qe.d.L(e,r,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ie.preloadModule=function(e,t){if(typeof e=="string")if(t){var r=Kl(t.as,t.crossOrigin);Qe.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Qe.d.m(e)};Ie.requestFormReset=function(e){Qe.d.r(e)};Ie.unstable_batchedUpdates=function(e,t){return e(t)};Ie.useFormState=function(e,t,r){return Xo.H.useFormState(e,t,r)};Ie.useFormStatus=function(){return Xo.H.useHostTransitionStatus()};Ie.version="19.1.0"});var ud=qt((n8,Y0)=>{"use strict";function q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0)}catch(e){console.error(e)}}q0(),Y0.exports=G0()});var Xb=qt(hc=>{"use strict";var Oe=j0(),mh=W(),v5=ud();function C(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ph(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function gh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function P0(e){if(zi(e)!==e)throw Error(C(188))}function b5(e){var t=e.alternate;if(!t){if(t=zi(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return P0(a),e;if(o===n)return P0(a),t;o=o.sibling}throw Error(C(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function hh(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=hh(e),t!==null)return t;e=e.sibling}return null}var ce=Object.assign,x5=Symbol.for("react.element"),Zl=Symbol.for("react.transitional.element"),ri=Symbol.for("react.portal"),Ra=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),y5=Symbol.for("react.provider"),bh=Symbol.for("react.consumer"),mr=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Yd=Symbol.for("react.activity"),w5=Symbol.for("react.memo_cache_sentinel"),X0=Symbol.iterator;function Ko(e){return e===null||typeof e!="object"?null:(e=X0&&e[X0]||e["@@iterator"],typeof e=="function"?e:null)}var k5=Symbol.for("react.client.reference");function Pd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ra:return"Fragment";case Hd:return"Profiler";case vh:return"StrictMode";case Gd:return"Suspense";case qd:return"SuspenseList";case Yd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ri:return"Portal";case mr:return(e.displayName||"Context")+".Provider";case bh:return(e._context.displayName||"Context")+".Consumer";case Ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lf:return t=e.displayName||null,t!==null?t:Pd(e.type)||"Memo";case jr:t=e._payload,e=e._init;try{return Pd(e(t))}catch{}}return null}var ni=Array.isArray,L=mh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=v5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,zn={pending:!1,data:null,method:null,action:null},Xd=[],Va=-1;function Wt(e){return{current:e}}function Ue(e){0>Va||(e.current=Xd[Va],Xd[Va]=null,Va--)}function pe(e,t){Va++,Xd[Va]=e.current,e.current=t}var Zt=Wt(null),yi=Wt(null),Ir=Wt(null),Ns=Wt(null);function As(e,t){switch(pe(Ir,t),pe(yi,e),pe(Zt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jg(t),e=_b(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ue(Zt),pe(Zt,e)}function Ia(){Ue(Zt),Ue(yi),Ue(Ir)}function Kd(e){e.memoizedState!==null&&pe(Ns,e);var t=Zt.current,r=_b(t,e.type);t!==r&&(pe(yi,e),pe(Zt,r))}function Ms(e){yi.current===e&&(Ue(Zt),Ue(yi)),Ns.current===e&&(Ue(Ns),Di._currentValue=zn)}var Zd=Object.prototype.hasOwnProperty,Uf=Oe.unstable_scheduleCallback,dd=Oe.unstable_cancelCallback,S5=Oe.unstable_shouldYield,T5=Oe.unstable_requestPaint,Qt=Oe.unstable_now,N5=Oe.unstable_getCurrentPriorityLevel,xh=Oe.unstable_ImmediatePriority,yh=Oe.unstable_UserBlockingPriority,Es=Oe.unstable_NormalPriority,A5=Oe.unstable_LowPriority,wh=Oe.unstable_IdlePriority,M5=Oe.log,E5=Oe.unstable_setDisableYieldValue,_i=null,ft=null;function Xr(e){if(typeof M5=="function"&&E5(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(_i,e)}catch{}}var mt=Math.clz32?Math.clz32:R5,C5=Math.log,D5=Math.LN2;function R5(e){return e>>>=0,e===0?32:31-(C5(e)/D5|0)|0}var Ql=256,Il=4194304;function Rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tc(e,t,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=n&134217727;return l!==0?(n=l&~o,n!==0?a=Rn(n):(i&=l,i!==0?a=Rn(i):r||(r=l&~e,r!==0&&(a=Rn(r))))):(l=n&~o,l!==0?a=Rn(l):i!==0?a=Rn(i):r||(r=n&~e,r!==0&&(a=Rn(r)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,r=t&-t,o>=r||o===32&&(r&4194048)!==0)?t:a}function Bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function V5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(){var e=Ql;return Ql<<=1,(Ql&4194048)===0&&(Ql=256),e}function Sh(){var e=Il;return Il<<=1,(Il&62914560)===0&&(Il=4194304),e}function fd(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $i(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function O5(e,t,r,n,a,o){var i=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var l=e.entanglements,c=e.expirationTimes,u=e.hiddenUpdates;for(r=i&~r;0<r;){var d=31-mt(r),m=1<<d;l[d]=0,c[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}r&=~m}n!==0&&Th(e,n,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(i&~t))}function Th(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-mt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|r&4194090}function Nh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-mt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}function jf(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hf(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ah(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Yb(e.type))}function z5(e,t){var r=ee.p;try{return ee.p=e,t()}finally{ee.p=r}}var cn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+cn,at="__reactProps$"+cn,so="__reactContainer$"+cn,Qd="__reactEvents$"+cn,_5="__reactListeners$"+cn,B5="__reactHandles$"+cn,K0="__reactResources$"+cn,Fi="__reactMarker$"+cn;function Gf(e){delete e[Xe],delete e[at],delete e[Qd],delete e[_5],delete e[B5]}function Oa(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[so]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=rh(e);e!==null;){if(r=e[Xe])return r;e=rh(e)}return t}e=r,r=e.parentNode}return null}function co(e){if(e=e[Xe]||e[so]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ai(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(C(33))}function Ga(e){var t=e[K0];return t||(t=e[K0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Fi]=!0}var Mh=new Set,Eh={};function Yn(e,t){Wa(e,t),Wa(e+"Capture",t)}function Wa(e,t){for(Eh[e]=t,e=0;e<t.length;e++)Mh.add(t[e])}var $5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Z0={},Q0={};function F5(e){return Zd.call(Q0,e)?!0:Zd.call(Z0,e)?!1:$5.test(e)?Q0[e]=!0:(Z0[e]=!0,!1)}function fs(e,t,r){if(F5(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Wl(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function cr(e,t,r,n){if(n===null)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+n)}}var md,I0;function Ea(e){if(md===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);md=t&&t[1]||"",I0=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+md+e+I0}var pd=!1;function gd(e,t){if(!e||pd)return"";pd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(p){var f=p}Reflect.construct(e,[],m)}else{try{m.call()}catch(p){f=p}e.call(m.prototype)}}else{try{throw Error()}catch(p){f=p}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var c=i.split(`
`),u=l.split(`
`);for(a=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(n===c.length||a===u.length)for(n=c.length-1,a=u.length-1;1<=n&&0<=a&&c[n]!==u[a];)a--;for(;1<=n&&0<=a;n--,a--)if(c[n]!==u[a]){if(n!==1||a!==1)do if(n--,a--,0>a||c[n]!==u[a]){var d=`
`+c[n].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=n&&0<=a);break}}}finally{pd=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ea(r):""}function L5(e){switch(e.tag){case 26:case 27:case 5:return Ea(e.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return gd(e.type,!1);case 11:return gd(e.type.render,!1);case 1:return gd(e.type,!0);case 31:return Ea("Activity");default:return""}}function W0(e){try{var t="";do t+=L5(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U5(e){var t=Ch(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){e._valueTracker||(e._valueTracker=U5(e))}function Dh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ch(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var j5=/[\n"\\]/g;function At(e){return e.replace(j5,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Id(e,t,r,n,a,o,i,l){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?Wd(e,i,St(t)):r!=null?Wd(e,i,St(r)):n!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+St(l):e.removeAttribute("name")}function Rh(e,t,r,n,a,o,i,l){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||r!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;r=r!=null?""+St(r):"",t=t!=null?""+St(t):r,l||t===e.value||(e.value=t),e.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function Wd(e,t,r){t==="number"&&Ds(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function qa(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+St(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Vh(e,t,r){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+St(r):""}function Oh(e,t,r,n){if(t==null){if(n!=null){if(r!=null)throw Error(C(92));if(ni(n)){if(1<n.length)throw Error(C(93));n=n[0]}r=n}r==null&&(r=""),t=r}r=St(t),e.defaultValue=r,n=e.textContent,n===r&&n!==""&&n!==null&&(e.value=n)}function Ja(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var H5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J0(e,t,r){var n=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,r):typeof r!="number"||r===0||H5.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function zh(e,t,r){if(t!=null&&typeof t!="object")throw Error(C(62));if(e=e.style,r!=null){for(var n in r)!r.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&r[a]!==n&&J0(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&J0(e,o,t[o])}function qf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(e){return q5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Jd=null;function Yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Ya=null;function eg(e){var t=co(e);if(t&&(e=t.stateNode)){var r=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(Id(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+At(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=n[at]||null;if(!a)throw Error(C(90));Id(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<r.length;t++)n=r[t],n.form===e.form&&Dh(n)}break e;case"textarea":Vh(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&qa(e,!!r.multiple,t,!1)}}}var hd=!1;function _h(e,t,r){if(hd)return e(t,r);hd=!0;try{var n=e(t);return n}finally{if(hd=!1,(za!==null||Ya!==null)&&(dc(),za&&(t=za,e=Ya,Ya=za=null,eg(t),e)))for(t=0;t<e.length;t++)eg(e[t])}}function wi(e,t){var r=e.stateNode;if(r===null)return null;var n=r[at]||null;if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(yr)try{Na={},Object.defineProperty(Na,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{ef=!1}var Na,Kr=null,Pf=null,ps=null;function Bh(){if(ps)return ps;var e,t=Pf,r=t.length,n,a="value"in Kr?Kr.value:Kr.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return ps=a.slice(e,1<n?1-n:void 0)}function gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jl(){return!0}function tg(){return!1}function ot(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jl:tg,this.isPropagationStopped=tg,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=ot(Pn),Li=ce({},Pn,{view:0,detail:0}),Y5=ot(Li),vd,bd,Zo,nc=ce({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(vd=e.screenX-Zo.screenX,bd=e.screenY-Zo.screenY):bd=vd=0,Zo=e),vd)},movementY:function(e){return"movementY"in e?e.movementY:bd}}),rg=ot(nc),P5=ce({},nc,{dataTransfer:0}),X5=ot(P5),K5=ce({},Li,{relatedTarget:0}),xd=ot(K5),Z5=ce({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),Q5=ot(Z5),I5=ce({},Pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W5=ot(I5),J5=ce({},Pn,{data:0}),ng=ot(J5),ew={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rw[e])?!!t[e]:!1}function Xf(){return nw}var aw=ce({},Li,{key:function(e){if(e.key){var t=ew[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(e){return e.type==="keypress"?gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ow=ot(aw),iw=ce({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=ot(iw),lw=ce({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),sw=ot(lw),cw=ce({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uw=ot(cw),dw=ce({},nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=ot(dw),mw=ce({},Pn,{newState:0,oldState:0}),pw=ot(mw),gw=[9,13,27,32],Kf=yr&&"CompositionEvent"in window,ii=null;yr&&"documentMode"in document&&(ii=document.documentMode);var hw=yr&&"TextEvent"in window&&!ii,$h=yr&&(!Kf||ii&&8<ii&&11>=ii),og=" ",ig=!1;function Fh(e,t){switch(e){case"keyup":return gw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _a=!1;function vw(e,t){switch(e){case"compositionend":return Lh(t);case"keypress":return t.which!==32?null:(ig=!0,og);case"textInput":return e=t.data,e===og&&ig?null:e;default:return null}}function bw(e,t){if(_a)return e==="compositionend"||!Kf&&Fh(e,t)?(e=Bh(),ps=Pf=Kr=null,_a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $h&&t.locale!=="ko"?null:t.data;default:return null}}var xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xw[e.type]:t==="textarea"}function Uh(e,t,r,n){za?Ya?Ya.push(n):Ya=[n]:za=n,t=Ks(t,"onChange"),0<t.length&&(r=new rc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var li=null,ki=null;function yw(e){Vb(e,0)}function ac(e){var t=ai(e);if(Dh(t))return e}function sg(e,t){if(e==="change")return t}var jh=!1;yr&&(yr?(ts="oninput"in document,ts||(yd=document.createElement("div"),yd.setAttribute("oninput","return;"),ts=typeof yd.oninput=="function"),es=ts):es=!1,jh=es&&(!document.documentMode||9<document.documentMode));var es,ts,yd;function cg(){li&&(li.detachEvent("onpropertychange",Hh),ki=li=null)}function Hh(e){if(e.propertyName==="value"&&ac(ki)){var t=[];Uh(t,ki,e,Yf(e)),_h(yw,t)}}function ww(e,t,r){e==="focusin"?(cg(),li=t,ki=r,li.attachEvent("onpropertychange",Hh)):e==="focusout"&&cg()}function kw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(ki)}function Sw(e,t){if(e==="click")return ac(t)}function Tw(e,t){if(e==="input"||e==="change")return ac(t)}function Nw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Nw;function Si(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Zd.call(t,a)||!ht(e[a],t[a]))return!1}return!0}function ug(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dg(e,t){var r=ug(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ug(r)}}function Gh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ds(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ds(e.document)}return t}function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Aw=yr&&"documentMode"in document&&11>=document.documentMode,Ba=null,tf=null,si=null,rf=!1;function fg(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;rf||Ba==null||Ba!==Ds(n)||(n=Ba,"selectionStart"in n&&Zf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),si&&Si(si,n)||(si=n,n=Ks(tf,"onSelect"),0<n.length&&(t=new rc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Ba)))}function Dn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $a={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionrun:Dn("Transition","TransitionRun"),transitionstart:Dn("Transition","TransitionStart"),transitioncancel:Dn("Transition","TransitionCancel"),transitionend:Dn("Transition","TransitionEnd")},wd={},Yh={};yr&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Xn(e){if(wd[e])return wd[e];if(!$a[e])return e;var t=$a[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Yh)return wd[e]=t[r];return e}var Ph=Xn("animationend"),Xh=Xn("animationiteration"),Kh=Xn("animationstart"),Mw=Xn("transitionrun"),Ew=Xn("transitionstart"),Cw=Xn("transitioncancel"),Zh=Xn("transitionend"),Qh=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Lt(e,t){Qh.set(e,t),Yn(t,[e])}var mg=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var r=mg.get(e);return r!==void 0?r:(t={value:e,source:t,stack:W0(t)},mg.set(e,t),t)}return{value:e,source:t,stack:W0(t)}}var kt=[],Fa=0,Qf=0;function oc(){for(var e=Fa,t=Qf=Fa=0;t<e;){var r=kt[t];kt[t++]=null;var n=kt[t];kt[t++]=null;var a=kt[t];kt[t++]=null;var o=kt[t];if(kt[t++]=null,n!==null&&a!==null){var i=n.pending;i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a}o!==0&&Ih(r,a,o)}}function ic(e,t,r,n){kt[Fa++]=e,kt[Fa++]=t,kt[Fa++]=r,kt[Fa++]=n,Qf|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function If(e,t,r,n){return ic(e,t,r,n),Rs(e)}function uo(e,t){return ic(e,null,null,t),Rs(e)}function Ih(e,t,r){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r);for(var a=!1,o=e.return;o!==null;)o.childLanes|=r,n=o.alternate,n!==null&&(n.childLanes|=r),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-mt(r),e=o.hiddenUpdates,n=e[a],n===null?e[a]=[t]:n.push(t),t.lane=r|536870912),o):null}function Rs(e){if(50<bi)throw bi=0,Nf=null,Error(C(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function Dw(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,n){return new Dw(e,t,r,n)}function Wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function br(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Wh(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hs(e,t,r,n,a,o){var i=0;if(n=e,typeof e=="function")Wf(e)&&(i=1);else if(typeof e=="string")i=D4(e,r,Zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Yd:return e=dt(31,r,t,a),e.elementType=Yd,e.lanes=o,e;case Ra:return _n(r.children,a,o,t);case vh:i=8,a|=24;break;case Hd:return e=dt(12,r,t,a|2),e.elementType=Hd,e.lanes=o,e;case Gd:return e=dt(13,r,t,a),e.elementType=Gd,e.lanes=o,e;case qd:return e=dt(19,r,t,a),e.elementType=qd,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y5:case mr:i=10;break e;case bh:i=9;break e;case Ff:i=11;break e;case Lf:i=14;break e;case jr:i=16,n=null;break e}i=29,r=Error(C(130,e===null?"null":typeof e,"")),n=null}return t=dt(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function _n(e,t,r,n){return e=dt(7,e,n,t),e.lanes=r,e}function kd(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function Sd(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ua=[],ja=0,Vs=null,Os=0,Tt=[],Nt=0,Bn=null,pr=1,gr="";function Vn(e,t){Ua[ja++]=Os,Ua[ja++]=Vs,Vs=e,Os=t}function Jh(e,t,r){Tt[Nt++]=pr,Tt[Nt++]=gr,Tt[Nt++]=Bn,Bn=e;var n=pr;e=gr;var a=32-mt(n)-1;n&=~(1<<a),r+=1;var o=32-mt(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,pr=1<<32-mt(t)+a|r<<a|n,gr=o+e}else pr=1<<o|r<<a|n,gr=e}function Jf(e){e.return!==null&&(Vn(e,1),Jh(e,1,0))}function em(e){for(;e===Vs;)Vs=Ua[--ja],Ua[ja]=null,Os=Ua[--ja],Ua[ja]=null;for(;e===Bn;)Bn=Tt[--Nt],Tt[Nt]=null,gr=Tt[--Nt],Tt[Nt]=null,pr=Tt[--Nt],Tt[Nt]=null}var We=null,ke=null,J=!1,$n=null,Xt=!1,af=Error(C(519));function jn(e){var t=Error(C(418,""));throw Ti(Mt(t,e)),af}function pg(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[Xe]=e,t[at]=n,r){case"dialog":X("cancel",t),X("close",t);break;case"iframe":case"object":case"embed":X("load",t);break;case"video":case"audio":for(r=0;r<Mi.length;r++)X(Mi[r],t);break;case"source":X("error",t);break;case"img":case"image":case"link":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"input":X("invalid",t),Rh(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Cs(t);break;case"select":X("invalid",t);break;case"textarea":X("invalid",t),Oh(t,n.value,n.defaultValue,n.children),Cs(t)}r=n.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||n.suppressHydrationWarning===!0||zb(t.textContent,r)?(n.popover!=null&&(X("beforetoggle",t),X("toggle",t)),n.onScroll!=null&&X("scroll",t),n.onScrollEnd!=null&&X("scrollend",t),n.onClick!=null&&(t.onclick=pc),t=!0):t=!1,t||jn(e)}function gg(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:We=We.return}}function Qo(e){if(e!==We)return!1;if(!J)return gg(e),J=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Rf(e.type,e.memoizedProps)),r=!r),r&&ke&&jn(e),gg(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){ke=Ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}ke=null}}else t===27?(t=ke,un(e.type)?(e=zf,zf=null,ke=e):ke=t):ke=We?Ft(e.stateNode.nextSibling):null;return!0}function Ui(){ke=We=null,J=!1}function hg(){var e=$n;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),$n=null),e}function Ti(e){$n===null?$n=[e]:$n.push(e)}var of=Wt(null),Kn=null,hr=null;function Gr(e,t,r){pe(of,t._currentValue),t._currentValue=r}function xr(e){e._currentValue=of.current,Ue(of)}function lf(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function sf(e,t,r,n){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var i=a.child;o=o.firstContext;e:for(;o!==null;){var l=o;o=a;for(var c=0;c<t.length;c++)if(l.context===t[c]){o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),lf(o.return,r,e),n||(i=null);break e}o=l.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(C(341));i.lanes|=r,o=i.alternate,o!==null&&(o.lanes|=r),lf(i,r,e),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===e){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function ji(e,t,r,n){e=null;for(var a=t,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(C(387));if(i=i.memoizedProps,i!==null){var l=a.type;ht(a.pendingProps.value,i.value)||(e!==null?e.push(l):e=[l])}}else if(a===Ns.current){if(i=a.alternate,i===null)throw Error(C(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Di):e=[Di])}a=a.return}e!==null&&sf(t,e,r,n),t.flags|=262144}function zs(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){Kn=e,hr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return ev(Kn,e)}function rs(e,t){return Kn===null&&Hn(e),ev(e,t)}function ev(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},hr===null){if(e===null)throw Error(C(308));hr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hr=hr.next=t;return r}var Rw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},Vw=Oe.unstable_scheduleCallback,Ow=Oe.unstable_NormalPriority,Re={$$typeof:mr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tm(){return{controller:new Rw,data:new Map,refCount:0}}function Hi(e){e.refCount--,e.refCount===0&&Vw(Ow,function(){e.controller.abort()})}var ci=null,cf=0,eo=0,Pa=null;function zw(e,t){if(ci===null){var r=ci=[];cf=0,eo=Tm(),Pa={status:"pending",value:void 0,then:function(n){r.push(n)}}}return cf++,t.then(vg,vg),t}function vg(){if(--cf===0&&ci!==null){Pa!==null&&(Pa.status="fulfilled");var e=ci;ci=null,eo=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _w(e,t){var r=[],n={status:"pending",value:null,reason:null,then:function(a){r.push(a)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<r.length;a++)(0,r[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<r.length;a++)(0,r[a])(void 0)}),n}var bg=L.S;L.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&zw(e,t),bg!==null&&bg(e,t)};var Fn=Wt(null);function rm(){var e=Fn.current;return e!==null?e:se.pooledCache}function vs(e,t){t===null?pe(Fn,Fn.current):pe(Fn,t.pool)}function tv(){var e=rm();return e===null?null:{parent:Re._currentValue,pool:e}}var Gi=Error(C(460)),rv=Error(C(474)),lc=Error(C(542)),uf={then:function(){}};function xg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ns(){}function nv(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(ns,ns),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wg(e),e;default:if(typeof t.status=="string")t.then(ns,ns);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(C(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wg(e),e}throw ui=t,Gi}}var ui=null;function yg(){if(ui===null)throw Error(C(459));var e=ui;return ui=null,e}function wg(e){if(e===Gi||e===lc)throw Error(C(483))}var Hr=!1;function nm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(re&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=Rs(e),Ih(e,null,r),t}return ic(e,n,t,r),Rs(e)}function di(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Nh(e,r)}}function Td(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var ff=!1;function fi(){if(ff){var e=Pa;if(e!==null)throw e}}function mi(e,t,r,n){ff=!1;var a=e.updateQueue;Hr=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var m=a.baseState;i=0,d=u=c=null,l=o;do{var f=l.lane&-536870913,p=f!==l.lane;if(p?(Q&f)===f:(n&f)===f){f!==0&&f===eo&&(ff=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var b=e,x=l;f=t;var y=r;switch(x.tag){case 1:if(b=x.payload,typeof b=="function"){m=b.call(y,m,f);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=x.payload,f=typeof b=="function"?b.call(y,m,f):b,f==null)break e;m=ce({},m,f);break e;case 2:Hr=!0}}f=l.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,c=m):d=d.next=p,i|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,o===null&&(a.shared.lanes=0),sn|=i,e.lanes=i,e.memoizedState=m}}function av(e,t){if(typeof e!="function")throw Error(C(191,e));e.call(t)}function ov(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)av(r[e],t)}var to=Wt(null),_s=Wt(0);function kg(e,t){e=Sr,pe(_s,e),pe(to,t),Sr=e|t.baseLanes}function mf(){pe(_s,Sr),pe(to,to.current)}function am(){Sr=_s.current,Ue(to),Ue(_s)}var on=0,P=null,ie=null,Ee=null,Bs=!1,Xa=!1,Gn=!1,$s=0,Ni=0,Ka=null,Bw=0;function Ne(){throw Error(C(321))}function om(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ht(e[r],t[r]))return!1;return!0}function im(e,t,r,n,a,o){return on=o,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Bv:$v,Gn=!1,o=r(n,a),Gn=!1,Xa&&(o=lv(t,r,n,a)),iv(e),o}function iv(e){L.H=Fs;var t=ie!==null&&ie.next!==null;if(on=0,Ee=ie=P=null,Bs=!1,Ni=0,Ka=null,t)throw Error(C(300));e===null||Le||(e=e.dependencies,e!==null&&zs(e)&&(Le=!0))}function lv(e,t,r,n){P=e;var a=0;do{if(Xa&&(Ka=null),Ni=0,Xa=!1,25<=a)throw Error(C(301));if(a+=1,Ee=ie=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=Gw,o=t(r,n)}while(Xa);return o}function $w(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?qi(t):t,e=e.useState()[0],(ie!==null?ie.memoizedState:null)!==e&&(P.flags|=1024),t}function lm(){var e=$s!==0;return $s=0,e}function sm(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function cm(e){if(Bs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bs=!1}on=0,Ee=ie=P=null,Xa=!1,Ni=$s=0,Ka=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?P.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function Ce(){if(ie===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=Ee===null?P.memoizedState:Ee.next;if(t!==null)Ee=t,ie=e;else{if(e===null)throw P.alternate===null?Error(C(467)):Error(C(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Ee===null?P.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function um(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qi(e){var t=Ni;return Ni+=1,Ka===null&&(Ka=[]),e=nv(Ka,e,t),t=P,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Bv:$v),e}function sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qi(e);if(e.$$typeof===mr)return Ke(e)}throw Error(C(438,String(e)))}function dm(e){var t=null,r=P.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var n=P.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=um(),P.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),n=0;n<e;n++)r[n]=w5;return t.index++,r}function wr(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=Ce();return fm(t,ie,e)}function fm(e,t,r){var n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=r;var a=e.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}t.baseQueue=a=o,n.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var l=i=null,c=null,u=t,d=!1;do{var m=u.lane&-536870913;if(m!==u.lane?(Q&m)===m:(on&m)===m){var f=u.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),m===eo&&(d=!0);else if((on&f)===f){u=u.next,f===eo&&(d=!0);continue}else m={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(l=c=m,i=o):c=c.next=m,P.lanes|=f,sn|=f;m=u.action,Gn&&r(o,m),o=u.hasEagerState?u.eagerState:r(o,m)}else f={lane:m,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(l=c=f,i=o):c=c.next=f,P.lanes|=m,sn|=m;u=u.next}while(u!==null&&u!==t);if(c===null?i=o:c.next=l,!ht(o,e.memoizedState)&&(Le=!0,d&&(r=Pa,r!==null)))throw r;e.memoizedState=o,e.baseState=i,e.baseQueue=c,n.lastRenderedState=o}return a===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Nd(e){var t=Ce(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);ht(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function sv(e,t,r){var n=P,a=Ce(),o=J;if(o){if(r===void 0)throw Error(C(407));r=r()}else r=t();var i=!ht((ie||a).memoizedState,r);i&&(a.memoizedState=r,Le=!0),a=a.queue;var l=dv.bind(null,n,a,e);if(Yi(2048,8,l,[e]),a.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,ro(9,cc(),uv.bind(null,n,a,r,t),null),se===null)throw Error(C(349));o||(on&124)!==0||cv(n,t,r)}return r}function cv(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=P.updateQueue,t===null?(t=um(),P.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uv(e,t,r,n){t.value=r,t.getSnapshot=n,fv(t)&&mv(e)}function dv(e,t,r){return r(function(){fv(t)&&mv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ht(e,r)}catch{return!0}}function mv(e){var t=uo(e,2);t!==null&&gt(t,e,2)}function pf(e){var t=tt();if(typeof e=="function"){var r=e;if(e=r(),Gn){Xr(!0);try{r()}finally{Xr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t}function pv(e,t,r,n){return e.baseState=r,fm(e,ie,typeof n=="function"?n:wr)}function Fw(e,t,r,n,a){if(uc(e))throw Error(C(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){o.listeners.push(i)}};L.T!==null?r(!0):o.isTransition=!1,n(o),r=t.pending,r===null?(o.next=t.pending=o,gv(t,o)):(o.next=r.next,t.pending=r.next=o)}}function gv(e,t){var r=t.action,n=t.payload,a=e.state;if(t.isTransition){var o=L.T,i={};L.T=i;try{var l=r(a,n),c=L.S;c!==null&&c(i,l),Sg(e,t,l)}catch(u){gf(e,t,u)}finally{L.T=o}}else try{o=r(a,n),Sg(e,t,o)}catch(u){gf(e,t,u)}}function Sg(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(n){Tg(e,t,n)},function(n){return gf(e,t,n)}):Tg(e,t,r)}function Tg(e,t,r){t.status="fulfilled",t.value=r,hv(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,gv(e,r)))}function gf(e,t,r){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=r,hv(t),t=t.next;while(t!==n)}e.action=null}function hv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vv(e,t){return t}function Ng(e,t){if(J){var r=se.formState;if(r!==null){e:{var n=P;if(J){if(ke){t:{for(var a=ke,o=Xt;a.nodeType!==8;){if(!o){a=null;break t}if(a=Ft(a.nextSibling),a===null){a=null;break t}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){ke=Ft(a.nextSibling),n=a.data==="F!";break e}}jn(n)}n=!1}n&&(t=r[0])}}return r=tt(),r.memoizedState=r.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vv,lastRenderedState:t},r.queue=n,r=Ov.bind(null,P,n),n.dispatch=r,n=pf(!1),o=hm.bind(null,P,!1,n.queue),n=tt(),a={state:t,dispatch:null,action:e,pending:null},n.queue=a,r=Fw.bind(null,P,a,o,r),a.dispatch=r,n.memoizedState=e,[t,r,!1]}function Ag(e){var t=Ce();return bv(t,ie,e)}function bv(e,t,r){if(t=fm(e,t,vv)[0],e=bs(wr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=qi(t)}catch(i){throw i===Gi?lc:i}else n=t;t=Ce();var a=t.queue,o=a.dispatch;return r!==t.memoizedState&&(P.flags|=2048,ro(9,cc(),Lw.bind(null,a,r),null)),[n,o,e]}function Lw(e,t){e.action=t}function Mg(e){var t=Ce(),r=ie;if(r!==null)return bv(t,r,e);Ce(),t=t.memoizedState,r=Ce();var n=r.queue.dispatch;return r.memoizedState=e,[t,n,!1]}function ro(e,t,r,n){return e={tag:e,create:r,deps:n,inst:t,next:null},t=P.updateQueue,t===null&&(t=um(),P.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function cc(){return{destroy:void 0,resource:void 0}}function xv(){return Ce().memoizedState}function xs(e,t,r,n){var a=tt();n=n===void 0?null:n,P.flags|=e,a.memoizedState=ro(1|t,cc(),r,n)}function Yi(e,t,r,n){var a=Ce();n=n===void 0?null:n;var o=a.memoizedState.inst;ie!==null&&n!==null&&om(n,ie.memoizedState.deps)?a.memoizedState=ro(t,o,r,n):(P.flags|=e,a.memoizedState=ro(1|t,o,r,n))}function Eg(e,t){xs(8390656,8,e,t)}function yv(e,t){Yi(2048,8,e,t)}function wv(e,t){return Yi(4,2,e,t)}function kv(e,t){return Yi(4,4,e,t)}function Sv(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tv(e,t,r){r=r!=null?r.concat([e]):null,Yi(4,4,Sv.bind(null,t,e),r)}function mm(){}function Nv(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;return t!==null&&om(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Av(e,t){var r=Ce();t=t===void 0?null:t;var n=r.memoizedState;if(t!==null&&om(t,n[1]))return n[0];if(n=e(),Gn){Xr(!0);try{e()}finally{Xr(!1)}}return r.memoizedState=[n,t],n}function pm(e,t,r){return r===void 0||(on&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=hb(),P.lanes|=e,sn|=e,r)}function Mv(e,t,r,n){return ht(r,t)?r:to.current!==null?(e=pm(e,r,n),ht(e,t)||(Le=!0),e):(on&42)===0?(Le=!0,e.memoizedState=r):(e=hb(),P.lanes|=e,sn|=e,t)}function Ev(e,t,r,n,a){var o=ee.p;ee.p=o!==0&&8>o?o:8;var i=L.T,l={};L.T=l,hm(e,!1,t,r);try{var c=a(),u=L.S;if(u!==null&&u(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=_w(c,n);pi(e,t,d,pt(e))}else pi(e,t,n,pt(e))}catch(m){pi(e,t,{then:function(){},status:"rejected",reason:m},pt())}finally{ee.p=o,L.T=i}}function Uw(){}function hf(e,t,r,n){if(e.tag!==5)throw Error(C(476));var a=Cv(e).queue;Ev(e,a,t,zn,r===null?Uw:function(){return Dv(e),r(n)})}function Cv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:zn,baseState:zn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:zn},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dv(e){var t=Cv(e).next.queue;pi(e,t,{},pt())}function gm(){return Ke(Di)}function Rv(){return Ce().memoizedState}function Vv(){return Ce().memoizedState}function jw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=pt();e=Wr(r);var n=Jr(t,e,r);n!==null&&(gt(n,t,r),di(n,t,r)),t={cache:tm()},e.payload=t;return}t=t.return}}function Hw(e,t,r){var n=pt();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},uc(e)?zv(t,r):(r=If(e,t,r,n),r!==null&&(gt(r,e,n),_v(r,t,n)))}function Ov(e,t,r){var n=pt();pi(e,t,r,n)}function pi(e,t,r,n){var a={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(uc(e))zv(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,ht(l,i))return ic(e,t,a,0),se===null&&oc(),!1}catch{}if(r=If(e,t,a,n),r!==null)return gt(r,e,n),_v(r,t,n),!0}return!1}function hm(e,t,r,n){if(n={lane:2,revertLane:Tm(),action:n,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(t)throw Error(C(479))}else t=If(e,r,n,2),t!==null&&gt(t,e,2)}function uc(e){var t=e.alternate;return e===P||t!==null&&t===P}function zv(e,t){Xa=Bs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _v(e,t,r){if((r&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Nh(e,r)}}var Fs={readContext:Ke,use:sc,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Bv={readContext:Ke,use:sc,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Eg,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,xs(4194308,4,Sv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return xs(4194308,4,e,t)},useInsertionEffect:function(e,t){xs(4,2,e,t)},useMemo:function(e,t){var r=tt();t=t===void 0?null:t;var n=e();if(Gn){Xr(!0);try{e()}finally{Xr(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=tt();if(r!==void 0){var a=r(t);if(Gn){Xr(!0);try{r(t)}finally{Xr(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},n.queue=e,e=e.dispatch=Hw.bind(null,P,e),[n.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:function(e){e=pf(e);var t=e.queue,r=Ov.bind(null,P,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:mm,useDeferredValue:function(e,t){var r=tt();return pm(r,e,t)},useTransition:function(){var e=pf(!1);return e=Ev.bind(null,P,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var n=P,a=tt();if(J){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),se===null)throw Error(C(349));(Q&124)!==0||cv(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Eg(dv.bind(null,n,o,e),[e]),n.flags|=2048,ro(9,cc(),uv.bind(null,n,o,r,t),null),r},useId:function(){var e=tt(),t=se.identifierPrefix;if(J){var r=gr,n=pr;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,t="\xAB"+t+"R"+r,r=$s++,0<r&&(t+="H"+r.toString(32)),t+="\xBB"}else r=Bw++,t="\xAB"+t+"r"+r.toString(32)+"\xBB";return e.memoizedState=t},useHostTransitionStatus:gm,useFormState:Ng,useActionState:Ng,useOptimistic:function(e){var t=tt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=hm.bind(null,P,!0,r),r.dispatch=t,[e,t]},useMemoCache:dm,useCacheRefresh:function(){return tt().memoizedState=jw.bind(null,P)}},$v={readContext:Ke,use:sc,useCallback:Nv,useContext:Ke,useEffect:yv,useImperativeHandle:Tv,useInsertionEffect:wv,useLayoutEffect:kv,useMemo:Av,useReducer:bs,useRef:xv,useState:function(){return bs(wr)},useDebugValue:mm,useDeferredValue:function(e,t){var r=Ce();return Mv(r,ie.memoizedState,e,t)},useTransition:function(){var e=bs(wr)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:sv,useId:Rv,useHostTransitionStatus:gm,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,t){var r=Ce();return pv(r,ie,e,t)},useMemoCache:dm,useCacheRefresh:Vv},Gw={readContext:Ke,use:sc,useCallback:Nv,useContext:Ke,useEffect:yv,useImperativeHandle:Tv,useInsertionEffect:wv,useLayoutEffect:kv,useMemo:Av,useReducer:Nd,useRef:xv,useState:function(){return Nd(wr)},useDebugValue:mm,useDeferredValue:function(e,t){var r=Ce();return ie===null?pm(r,e,t):Mv(r,ie.memoizedState,e,t)},useTransition:function(){var e=Nd(wr)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:sv,useId:Rv,useHostTransitionStatus:gm,useFormState:Mg,useActionState:Mg,useOptimistic:function(e,t){var r=Ce();return ie!==null?pv(r,ie,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:dm,useCacheRefresh:Vv},Za=null,Ai=0;function as(e){var t=Ai;return Ai+=1,Za===null&&(Za=[]),nv(Za,e,t)}function Io(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function os(e,t){throw t.$$typeof===x5?Error(C(525)):(e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cg(e){var t=e._init;return t(e._payload)}function Fv(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g){for(var h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function a(g,h){return g=br(g,h),g.index=0,g.sibling=null,g}function o(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=67108866,h):v):(g.flags|=67108866,h)):(g.flags|=1048576,h)}function i(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function l(g,h,v,w){return h===null||h.tag!==6?(h=kd(v,g.mode,w),h.return=g,h):(h=a(h,v),h.return=g,h)}function c(g,h,v,w){var k=v.type;return k===Ra?d(g,h,v.props.children,w,v.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jr&&Cg(k)===h.type)?(h=a(h,v.props),Io(h,v),h.return=g,h):(h=hs(v.type,v.key,v.props,null,g.mode,w),Io(h,v),h.return=g,h)}function u(g,h,v,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Sd(v,g.mode,w),h.return=g,h):(h=a(h,v.children||[]),h.return=g,h)}function d(g,h,v,w,k){return h===null||h.tag!==7?(h=_n(v,g.mode,w,k),h.return=g,h):(h=a(h,v),h.return=g,h)}function m(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=kd(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Zl:return v=hs(h.type,h.key,h.props,null,g.mode,v),Io(v,h),v.return=g,v;case ri:return h=Sd(h,g.mode,v),h.return=g,h;case jr:var w=h._init;return h=w(h._payload),m(g,h,v)}if(ni(h)||Ko(h))return h=_n(h,g.mode,v,null),h.return=g,h;if(typeof h.then=="function")return m(g,as(h),v);if(h.$$typeof===mr)return m(g,rs(g,h),v);os(g,h)}return null}function f(g,h,v,w){var k=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return k!==null?null:l(g,h,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zl:return v.key===k?c(g,h,v,w):null;case ri:return v.key===k?u(g,h,v,w):null;case jr:return k=v._init,v=k(v._payload),f(g,h,v,w)}if(ni(v)||Ko(v))return k!==null?null:d(g,h,v,w,null);if(typeof v.then=="function")return f(g,h,as(v),w);if(v.$$typeof===mr)return f(g,h,rs(g,v),w);os(g,v)}return null}function p(g,h,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return g=g.get(v)||null,l(h,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Zl:return g=g.get(w.key===null?v:w.key)||null,c(h,g,w,k);case ri:return g=g.get(w.key===null?v:w.key)||null,u(h,g,w,k);case jr:var A=w._init;return w=A(w._payload),p(g,h,v,w,k)}if(ni(w)||Ko(w))return g=g.get(v)||null,d(h,g,w,k,null);if(typeof w.then=="function")return p(g,h,v,as(w),k);if(w.$$typeof===mr)return p(g,h,v,rs(h,w),k);os(h,w)}return null}function b(g,h,v,w){for(var k=null,A=null,N=h,S=h=0,D=null;N!==null&&S<v.length;S++){N.index>S?(D=N,N=null):D=N.sibling;var E=f(g,N,v[S],w);if(E===null){N===null&&(N=D);break}e&&N&&E.alternate===null&&t(g,N),h=o(E,h,S),A===null?k=E:A.sibling=E,A=E,N=D}if(S===v.length)return r(g,N),J&&Vn(g,S),k;if(N===null){for(;S<v.length;S++)N=m(g,v[S],w),N!==null&&(h=o(N,h,S),A===null?k=N:A.sibling=N,A=N);return J&&Vn(g,S),k}for(N=n(N);S<v.length;S++)D=p(N,g,S,v[S],w),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?S:D.key),h=o(D,h,S),A===null?k=D:A.sibling=D,A=D);return e&&N.forEach(function(V){return t(g,V)}),J&&Vn(g,S),k}function x(g,h,v,w){if(v==null)throw Error(C(151));for(var k=null,A=null,N=h,S=h=0,D=null,E=v.next();N!==null&&!E.done;S++,E=v.next()){N.index>S?(D=N,N=null):D=N.sibling;var V=f(g,N,E.value,w);if(V===null){N===null&&(N=D);break}e&&N&&V.alternate===null&&t(g,N),h=o(V,h,S),A===null?k=V:A.sibling=V,A=V,N=D}if(E.done)return r(g,N),J&&Vn(g,S),k;if(N===null){for(;!E.done;S++,E=v.next())E=m(g,E.value,w),E!==null&&(h=o(E,h,S),A===null?k=E:A.sibling=E,A=E);return J&&Vn(g,S),k}for(N=n(N);!E.done;S++,E=v.next())E=p(N,g,S,E.value,w),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?S:E.key),h=o(E,h,S),A===null?k=E:A.sibling=E,A=E);return e&&N.forEach(function(F){return t(g,F)}),J&&Vn(g,S),k}function y(g,h,v,w){if(typeof v=="object"&&v!==null&&v.type===Ra&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zl:e:{for(var k=v.key;h!==null;){if(h.key===k){if(k=v.type,k===Ra){if(h.tag===7){r(g,h.sibling),w=a(h,v.props.children),w.return=g,g=w;break e}}else if(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jr&&Cg(k)===h.type){r(g,h.sibling),w=a(h,v.props),Io(w,v),w.return=g,g=w;break e}r(g,h);break}else t(g,h);h=h.sibling}v.type===Ra?(w=_n(v.props.children,g.mode,w,v.key),w.return=g,g=w):(w=hs(v.type,v.key,v.props,null,g.mode,w),Io(w,v),w.return=g,g=w)}return i(g);case ri:e:{for(k=v.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(g,h.sibling),w=a(h,v.children||[]),w.return=g,g=w;break e}else{r(g,h);break}else t(g,h);h=h.sibling}w=Sd(v,g.mode,w),w.return=g,g=w}return i(g);case jr:return k=v._init,v=k(v._payload),y(g,h,v,w)}if(ni(v))return b(g,h,v,w);if(Ko(v)){if(k=Ko(v),typeof k!="function")throw Error(C(150));return v=k.call(v),x(g,h,v,w)}if(typeof v.then=="function")return y(g,h,as(v),w);if(v.$$typeof===mr)return y(g,h,rs(g,v),w);os(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(r(g,h.sibling),w=a(h,v),w.return=g,g=w):(r(g,h),w=kd(v,g.mode,w),w.return=g,g=w),i(g)):r(g,h)}return function(g,h,v,w){try{Ai=0;var k=y(g,h,v,w);return Za=null,k}catch(N){if(N===Gi||N===lc)throw N;var A=dt(29,N,null,g.mode);return A.lanes=w,A.return=g,A}}}var no=Fv(!0),Lv=Fv(!1),Ct=Wt(null),It=null;function qr(e){var t=e.alternate;pe(Ve,Ve.current&1),pe(Ct,e),It===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(It=e)}function Uv(e){if(e.tag===22){if(pe(Ve,Ve.current),pe(Ct,e),It===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(It=e)}}else Yr(e)}function Yr(){pe(Ve,Ve.current),pe(Ct,Ct.current)}function vr(e){Ue(Ct),It===e&&(It=null),Ue(Ve)}var Ve=Wt(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Of(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ad(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ce({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vf={enqueueSetState:function(e,t,r){e=e._reactInternals;var n=pt(),a=Wr(n);a.payload=t,r!=null&&(a.callback=r),t=Jr(e,a,n),t!==null&&(gt(t,e,n),di(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=pt(),a=Wr(n);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Jr(e,a,n),t!==null&&(gt(t,e,n),di(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=pt(),n=Wr(r);n.tag=2,t!=null&&(n.callback=t),t=Jr(e,n,r),t!==null&&(gt(t,e,r),di(t,e,r))}};function Dg(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!Si(r,n)||!Si(a,o):!0}function Rg(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&vf.enqueueReplaceState(t,t.state,null)}function qn(e,t){var r=t;if("ref"in t){r={};for(var n in t)n!=="ref"&&(r[n]=t[n])}if(e=e.defaultProps){r===t&&(r=ce({},r));for(var a in e)r[a]===void 0&&(r[a]=e[a])}return r}var Us=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jv(e){Us(e)}function Hv(e){console.error(e)}function Gv(e){Us(e)}function js(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Vg(e,t,r){try{var n=e.onCaughtError;n(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function bf(e,t,r){return r=Wr(r),r.tag=3,r.payload={element:null},r.callback=function(){js(e,t)},r}function qv(e){return e=Wr(e),e.tag=3,e}function Yv(e,t,r,n){var a=r.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;e.payload=function(){return a(o)},e.callback=function(){Vg(t,r,n)}}var i=r.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Vg(t,r,n),typeof a!="function"&&(en===null?en=new Set([this]):en.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})})}function qw(e,t,r,n,a){if(r.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=r.alternate,t!==null&&ji(t,r,a,!0),r=Ct.current,r!==null){switch(r.tag){case 13:return It===null?Af():r.alternate===null&&Se===0&&(Se=3),r.flags&=-257,r.flags|=65536,r.lanes=a,n===uf?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([n]):t.add(n),$d(e,n,a)),!1;case 22:return r.flags|=65536,n===uf?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([n]):r.add(n)),$d(e,n,a)),!1}throw Error(C(435,r.tag))}return $d(e,n,a),Af(),!1}if(J)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==af&&(e=Error(C(422),{cause:n}),Ti(Mt(e,r)))):(n!==af&&(t=Error(C(423),{cause:n}),Ti(Mt(t,r))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,n=Mt(n,r),a=bf(e.stateNode,n,a),Td(e,a),Se!==4&&(Se=2)),!1;var o=Error(C(520),{cause:n});if(o=Mt(o,r),vi===null?vi=[o]:vi.push(o),Se!==4&&(Se=2),t===null)return!0;n=Mt(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=a&-a,r.lanes|=e,e=bf(r.stateNode,n,e),Td(r,e),!1;case 1:if(t=r.type,o=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(en===null||!en.has(o))))return r.flags|=65536,a&=-a,r.lanes|=a,a=qv(a),Yv(a,e,r,n),Td(r,a),!1}r=r.return}while(r!==null);return!1}var Pv=Error(C(461)),Le=!1;function He(e,t,r,n){t.child=e===null?Lv(t,null,r,n):no(t,e.child,r,n)}function Og(e,t,r,n,a){r=r.render;var o=t.ref;if("ref"in n){var i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}else i=n;return Hn(t),n=im(e,t,r,i,o,a),l=lm(),e!==null&&!Le?(sm(e,t,a),kr(e,t,a)):(J&&l&&Jf(t),t.flags|=1,He(e,t,n,a),t.child)}function zg(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!Wf(o)&&o.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=o,Xv(e,t,o,n,a)):(e=hs(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!vm(e,a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Si,r(i,n)&&e.ref===t.ref)return kr(e,t,a)}return t.flags|=1,e=br(o,n),e.ref=t.ref,e.return=t,t.child=e}function Xv(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(Si(o,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=o,vm(e,a))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,kr(e,t,a)}return xf(e,t,r,n,a)}function Kv(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|r:r,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return _g(e,t,n,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vs(t,o!==null?o.cachePool:null),o!==null?kg(t,o):mf(),Uv(t);else return t.lanes=t.childLanes=536870912,_g(e,t,o!==null?o.baseLanes|r:r,r)}else o!==null?(vs(t,o.cachePool),kg(t,o),Yr(t),t.memoizedState=null):(e!==null&&vs(t,null),mf(),Yr(t));return He(e,t,a,r),t.child}function _g(e,t,r,n){var a=rm();return a=a===null?null:{parent:Re._currentValue,pool:a},t.memoizedState={baseLanes:r,cachePool:a},e!==null&&vs(t,null),mf(),Uv(t),e!==null&&ji(e,t,n,!0),null}function ys(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(C(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function xf(e,t,r,n,a){return Hn(t),r=im(e,t,r,n,void 0,a),n=lm(),e!==null&&!Le?(sm(e,t,a),kr(e,t,a)):(J&&n&&Jf(t),t.flags|=1,He(e,t,r,a),t.child)}function Bg(e,t,r,n,a,o){return Hn(t),t.updateQueue=null,r=lv(t,n,r,a),iv(e),n=lm(),e!==null&&!Le?(sm(e,t,o),kr(e,t,o)):(J&&n&&Jf(t),t.flags|=1,He(e,t,r,o),t.child)}function $g(e,t,r,n,a){if(Hn(t),t.stateNode===null){var o=La,i=r.contextType;typeof i=="object"&&i!==null&&(o=Ke(i)),o=new r(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vf,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},nm(t),i=r.contextType,o.context=typeof i=="object"&&i!==null?Ke(i):La,o.state=t.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Ad(t,r,i,n),o.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(i=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),i!==o.state&&vf.enqueueReplaceState(o,o.state,null),mi(t,n,o,a),fi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var l=t.memoizedProps,c=qn(r,l);o.props=c;var u=o.context,d=r.contextType;i=La,typeof d=="object"&&d!==null&&(i=Ke(d));var m=r.getDerivedStateFromProps;d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l||u!==i)&&Rg(t,o,n,i),Hr=!1;var f=t.memoizedState;o.state=f,mi(t,n,o,a),fi(),u=t.memoizedState,l||f!==u||Hr?(typeof m=="function"&&(Ad(t,r,m,n),u=t.memoizedState),(c=Hr||Dg(t,r,c,n,f,u,i))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),o.props=n,o.state=u,o.context=i,n=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,df(e,t),i=t.memoizedProps,d=qn(r,i),o.props=d,m=t.pendingProps,f=o.context,u=r.contextType,c=La,typeof u=="object"&&u!==null&&(c=Ke(u)),l=r.getDerivedStateFromProps,(u=typeof l=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==m||f!==c)&&Rg(t,o,n,c),Hr=!1,f=t.memoizedState,o.state=f,mi(t,n,o,a),fi();var p=t.memoizedState;i!==m||f!==p||Hr||e!==null&&e.dependencies!==null&&zs(e.dependencies)?(typeof l=="function"&&(Ad(t,r,l,n),p=t.memoizedState),(d=Hr||Dg(t,r,d,n,f,p,c)||e!==null&&e.dependencies!==null&&zs(e.dependencies))?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,p,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,p,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=c,n=d):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,ys(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,r=n&&typeof r.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=no(t,e.child,null,a),t.child=no(t,null,r,a)):He(e,t,r,a),t.memoizedState=o.state,e=t.child):e=kr(e,t,a),e}function Fg(e,t,r,n){return Ui(),t.flags|=256,He(e,t,r,n),t.child}var Md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ed(e){return{baseLanes:e,cachePool:tv()}}function Cd(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Et),e}function Zv(e,t,r){var n=t.pendingProps,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),i&&(a=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(J){if(a?qr(t):Yr(t),J){var l=ke,c;if(c=l){e:{for(c=l,l=Xt;c.nodeType!==8;){if(!l){l=null;break e}if(c=Ft(c.nextSibling),c===null){l=null;break e}}l=c}l!==null?(t.memoizedState={dehydrated:l,treeContext:Bn!==null?{id:pr,overflow:gr}:null,retryLane:536870912,hydrationErrors:null},c=dt(18,null,null,0),c.stateNode=l,c.return=t,t.child=c,We=t,ke=null,c=!0):c=!1}c||jn(t)}if(l=t.memoizedState,l!==null&&(l=l.dehydrated,l!==null))return Of(l)?t.lanes=32:t.lanes=536870912,null;vr(t)}return l=n.children,n=n.fallback,a?(Yr(t),a=t.mode,l=Hs({mode:"hidden",children:l},a),n=_n(n,a,r,null),l.return=t,n.return=t,l.sibling=n,t.child=l,a=t.child,a.memoizedState=Ed(r),a.childLanes=Cd(e,i,r),t.memoizedState=Md,n):(qr(t),yf(t,l))}if(c=e.memoizedState,c!==null&&(l=c.dehydrated,l!==null)){if(o)t.flags&256?(qr(t),t.flags&=-257,t=Dd(e,t,r)):t.memoizedState!==null?(Yr(t),t.child=e.child,t.flags|=128,t=null):(Yr(t),a=n.fallback,l=t.mode,n=Hs({mode:"visible",children:n.children},l),a=_n(a,l,r,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,no(t,e.child,null,r),n=t.child,n.memoizedState=Ed(r),n.childLanes=Cd(e,i,r),t.memoizedState=Md,t=a);else if(qr(t),Of(l)){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;i=u,n=Error(C(419)),n.stack="",n.digest=i,Ti({value:n,source:null,stack:null}),t=Dd(e,t,r)}else if(Le||ji(e,t,r,!1),i=(r&e.childLanes)!==0,Le||i){if(i=se,i!==null&&(n=r&-r,n=(n&42)!==0?1:jf(n),n=(n&(i.suspendedLanes|r))!==0?0:n,n!==0&&n!==c.retryLane))throw c.retryLane=n,uo(e,n),gt(i,e,n),Pv;l.data==="$?"||Af(),t=Dd(e,t,r)}else l.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ke=Ft(l.nextSibling),We=t,J=!0,$n=null,Xt=!1,e!==null&&(Tt[Nt++]=pr,Tt[Nt++]=gr,Tt[Nt++]=Bn,pr=e.id,gr=e.overflow,Bn=t),t=yf(t,n.children),t.flags|=4096);return t}return a?(Yr(t),a=n.fallback,l=t.mode,c=e.child,u=c.sibling,n=br(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,u!==null?a=br(u,a):(a=_n(a,l,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,l=e.child.memoizedState,l===null?l=Ed(r):(c=l.cachePool,c!==null?(u=Re._currentValue,c=c.parent!==u?{parent:u,pool:u}:c):c=tv(),l={baseLanes:l.baseLanes|r,cachePool:c}),a.memoizedState=l,a.childLanes=Cd(e,i,r),t.memoizedState=Md,n):(qr(t),r=e.child,e=r.sibling,r=br(r,{mode:"visible",children:n.children}),r.return=t,r.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=r,t.memoizedState=null,r)}function yf(e,t){return t=Hs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hs(e,t){return e=dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Dd(e,t,r){return no(t,e.child,null,r),e=yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),lf(e.return,t,r)}function Rd(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Qv(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(He(e,t,n.children,r),n=Ve.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,r,t);else if(e.tag===19)Lg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(pe(Ve,n),a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ls(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Rd(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ls(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Rd(t,!0,r,null,o);break;case"together":Rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(ji(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=br(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=br(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function vm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&zs(e)))}function Yw(e,t,r){switch(t.tag){case 3:As(t,t.stateNode.containerInfo),Gr(t,Re,e.memoizedState.cache),Ui();break;case 27:case 5:Kd(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:Gr(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(qr(t),t.flags|=128,null):(r&t.child.childLanes)!==0?Zv(e,t,r):(qr(t),e=kr(e,t,r),e!==null?e.sibling:null);qr(t);break;case 19:var a=(e.flags&128)!==0;if(n=(r&t.childLanes)!==0,n||(ji(e,t,r,!1),n=(r&t.childLanes)!==0),a){if(n)return Qv(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(Ve,Ve.current),n)break;return null;case 22:case 23:return t.lanes=0,Kv(e,t,r);case 24:Gr(t,Re,e.memoizedState.cache)}return kr(e,t,r)}function Iv(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!vm(e,r)&&(t.flags&128)===0)return Le=!1,Yw(e,t,r);Le=(e.flags&131072)!==0}else Le=!1,J&&(t.flags&1048576)!==0&&Jh(t,Os,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,a=n._init;if(n=a(n._payload),t.type=n,typeof n=="function")Wf(n)?(e=qn(n,e),t.tag=1,t=$g(null,t,n,e,r)):(t.tag=0,t=xf(null,t,n,e,r));else{if(n!=null){if(a=n.$$typeof,a===Ff){t.tag=11,t=Og(null,t,n,e,r);break e}else if(a===Lf){t.tag=14,t=zg(null,t,n,e,r);break e}}throw t=Pd(n)||n,Error(C(306,t,""))}}return t;case 0:return xf(e,t,t.type,t.pendingProps,r);case 1:return n=t.type,a=qn(n,t.pendingProps),$g(e,t,n,a,r);case 3:e:{if(As(t,t.stateNode.containerInfo),e===null)throw Error(C(387));n=t.pendingProps;var o=t.memoizedState;a=o.element,df(e,t),mi(t,n,null,r);var i=t.memoizedState;if(n=i.cache,Gr(t,Re,n),n!==o.cache&&sf(t,[Re],r,!0),fi(),n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Fg(e,t,n,r);break e}else if(n!==a){a=Mt(Error(C(424)),t),Ti(a),t=Fg(e,t,n,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=Ft(e.firstChild),We=t,J=!0,$n=null,Xt=!0,r=Lv(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ui(),n===a){t=kr(e,t,r);break e}He(e,t,n,r)}t=t.child}return t;case 26:return ys(e,t),e===null?(r=ah(t.type,null,t.pendingProps,null))?t.memoizedState=r:J||(r=t.type,e=t.pendingProps,n=Zs(Ir.current).createElement(r),n[Xe]=t,n[at]=e,qe(n,r,e),Fe(n),t.stateNode=n):t.memoizedState=ah(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kd(t),e===null&&J&&(n=t.stateNode=$b(t.type,t.pendingProps,Ir.current),We=t,Xt=!0,a=ke,un(t.type)?(zf=a,ke=Ft(n.firstChild)):ke=a),He(e,t,t.pendingProps.children,r),ys(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((a=n=ke)&&(n=v4(n,t.type,t.pendingProps,Xt),n!==null?(t.stateNode=n,We=t,ke=Ft(n.firstChild),Xt=!1,a=!0):a=!1),a||jn(t)),Kd(t),a=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Rf(a,o)?n=null:i!==null&&Rf(a,i)&&(t.flags|=32),t.memoizedState!==null&&(a=im(e,t,$w,null,null,r),Di._currentValue=a),ys(e,t),He(e,t,n,r),t.child;case 6:return e===null&&J&&((e=r=ke)&&(r=b4(r,t.pendingProps,Xt),r!==null?(t.stateNode=r,We=t,ke=null,e=!0):e=!1),e||jn(t)),null;case 13:return Zv(e,t,r);case 4:return As(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=no(t,null,n,r):He(e,t,n,r),t.child;case 11:return Og(e,t,t.type,t.pendingProps,r);case 7:return He(e,t,t.pendingProps,r),t.child;case 8:return He(e,t,t.pendingProps.children,r),t.child;case 12:return He(e,t,t.pendingProps.children,r),t.child;case 10:return n=t.pendingProps,Gr(t,t.type,n.value),He(e,t,n.children,r),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,Hn(t),a=Ke(a),n=n(a),t.flags|=1,He(e,t,n,r),t.child;case 14:return zg(e,t,t.type,t.pendingProps,r);case 15:return Xv(e,t,t.type,t.pendingProps,r);case 19:return Qv(e,t,r);case 31:return n=t.pendingProps,r=t.mode,n={mode:n.mode,children:n.children},e===null?(r=Hs(n,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=br(e.child,n),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Kv(e,t,r);case 24:return Hn(t),n=Ke(Re),e===null?(a=rm(),a===null&&(a=se,o=tm(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=r),a=o),t.memoizedState={parent:n,cache:a},nm(t),Gr(t,Re,a)):((e.lanes&r)!==0&&(df(e,t),mi(t,null,null,r),fi()),a=e.memoizedState,o=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gr(t,Re,n)):(n=o.cache,Gr(t,Re,n),n!==a.cache&&sf(t,[Re],r,!0))),He(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(C(156,t.tag))}function ur(e){e.flags|=4}function Ug(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ub(t)){if(t=Ct.current,t!==null&&((Q&4194048)===Q?It!==null:(Q&62914560)!==Q&&(Q&536870912)===0||t!==It))throw ui=uf,rv;e.flags|=8192}}function is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sh():536870912,e.lanes|=t,ao|=t)}function Wo(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Pw(e,t,r){var n=t.pendingProps;switch(em(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return r=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xr(Re),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?ur(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hg())),ve(t),null;case 26:return r=t.memoizedState,e===null?(ur(t),r!==null?(ve(t),Ug(t,r)):(ve(t),t.flags&=-16777217)):r?r!==e.memoizedState?(ur(t),ve(t),Ug(t,r)):(ve(t),t.flags&=-16777217):(e.memoizedProps!==n&&ur(t),ve(t),t.flags&=-16777217),null;case 27:Ms(t),r=Ir.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ur(t);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ve(t),null}e=Zt.current,Qo(t)?pg(t,e):(e=$b(a,n,r),t.stateNode=e,ur(t))}return ve(t),null;case 5:if(Ms(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ur(t);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ve(t),null}if(e=Zt.current,Qo(t))pg(t,e);else{switch(a=Zs(Ir.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?a.createElement("select",{is:n.is}):a.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?a.createElement(r,{is:n.is}):a.createElement(r)}}e[Xe]=t,e[at]=n;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(qe(e,r,n),r){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ur(t)}}return ve(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ur(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(e=Ir.current,Qo(t)){if(e=t.stateNode,r=t.memoizedProps,n=null,a=We,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===r||n!==null&&n.suppressHydrationWarning===!0||zb(e.nodeValue,r)),e||jn(t)}else e=Zs(e).createTextNode(n),e[Xe]=t,t.stateNode=e}return ve(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Qo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Xe]=t}else Ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else a=hg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(vr(t),t):(vr(t),null)}if(vr(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=n!==null,e=e!==null&&e.memoizedState!==null,r){n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),is(t,t.updateQueue),ve(t),null;case 4:return Ia(),e===null&&Nm(t.stateNode.containerInfo),ve(t),null;case 10:return xr(t.type),ve(t),null;case 19:if(Ue(Ve),a=t.memoizedState,a===null)return ve(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)Wo(a,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Ls(e),o!==null){for(t.flags|=128,Wo(a,!1),e=o.updateQueue,t.updateQueue=e,is(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Wh(r,e),r=r.sibling;return pe(Ve,Ve.current&1|2),t.child}e=e.sibling}a.tail!==null&&Qt()>qs&&(t.flags|=128,n=!0,Wo(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ls(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,is(t,e),Wo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!J)return ve(t),null}else 2*Qt()-a.renderingStartTime>qs&&r!==536870912&&(t.flags|=128,n=!0,Wo(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qt(),t.sibling=null,e=Ve.current,pe(Ve,n?e&1|2:e&1),t):(ve(t),null);case 22:case 23:return vr(t),am(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(r&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),r=t.updateQueue,r!==null&&is(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==r&&(t.flags|=2048),e!==null&&Ue(Fn),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xr(Re),ve(t),null;case 25:return null;case 30:return null}throw Error(C(156,t.tag))}function Xw(e,t){switch(em(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(Re),Ia(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ms(t),null;case 13:if(vr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ve),null;case 4:return Ia(),null;case 10:return xr(t.type),null;case 22:case 23:return vr(t),am(),e!==null&&Ue(Fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xr(Re),null;case 25:return null;default:return null}}function Wv(e,t){switch(em(t),t.tag){case 3:xr(Re),Ia();break;case 26:case 27:case 5:Ms(t);break;case 4:Ia();break;case 13:vr(t);break;case 19:Ue(Ve);break;case 10:xr(t.type);break;case 22:case 23:vr(t),am(),e!==null&&Ue(Fn);break;case 24:xr(Re)}}function Pi(e,t){try{var r=t.updateQueue,n=r!==null?r.lastEffect:null;if(n!==null){var a=n.next;r=a;do{if((r.tag&e)===e){n=void 0;var o=r.create,i=r.inst;n=o(),i.destroy=n}r=r.next}while(r!==a)}}catch(l){le(t,t.return,l)}}function ln(e,t,r){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){var i=n.inst,l=i.destroy;if(l!==void 0){i.destroy=void 0,a=t;var c=r,u=l;try{u()}catch(d){le(a,c,d)}}}n=n.next}while(n!==o)}}catch(d){le(t,t.return,d)}}function Jv(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{ov(t,r)}catch(n){le(e,e.return,n)}}}function eb(e,t,r){r.props=qn(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(n){le(e,t,n)}}function gi(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof r=="function"?e.refCleanup=r(n):r.current=n}}catch(a){le(e,t,a)}}function Kt(e,t){var r=e.ref,n=e.refCleanup;if(r!==null)if(typeof n=="function")try{n()}catch(a){le(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(a){le(e,t,a)}else r.current=null}function tb(e){var t=e.type,r=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break e;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(a){le(e,e.return,a)}}function Vd(e,t,r){try{var n=e.stateNode;f4(n,e.type,r,t),n[at]=t}catch(a){le(e,e.return,a)}}function rb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&un(e.type)||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=pc));else if(n!==4&&(n===27&&un(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(wf(e,t,r),e=e.sibling;e!==null;)wf(e,t,r),e=e.sibling}function Gs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(n===27&&un(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Gs(e,t,r),e=e.sibling;e!==null;)Gs(e,t,r),e=e.sibling}function nb(e){var t=e.stateNode,r=e.memoizedProps;try{for(var n=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);qe(t,n,r),t[Xe]=e,t[at]=r}catch(o){le(e,e.return,o)}}var fr=!1,Ae=!1,zd=!1,jg=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Kw(e,t){if(e=e.containerInfo,Cf=Js,e=qh(e),Zf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,d=0,m=e,f=null;t:for(;;){for(var p;m!==r||a!==0&&m.nodeType!==3||(l=i+a),m!==o||n!==0&&m.nodeType!==3||(c=i+n),m.nodeType===3&&(i+=m.nodeValue.length),(p=m.firstChild)!==null;)f=m,m=p;for(;;){if(m===e)break t;if(f===r&&++u===a&&(l=i),f===o&&++d===n&&(c=i),(p=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=p}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Df={focusedElem:e,selectionRange:r},Js=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,r=t,a=o.memoizedProps,o=o.memoizedState,n=r.stateNode;try{var b=qn(r.type,a,r.elementType===r.type);e=n.getSnapshotBeforeUpdate(b,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(x){le(r,r.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Vf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(C(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function ab(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:Lr(e,r),n&4&&Pi(5,r);break;case 1:if(Lr(e,r),n&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(i){le(r,r.return,i)}else{var a=qn(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){le(r,r.return,i)}}n&64&&Jv(r),n&512&&gi(r,r.return);break;case 3:if(Lr(e,r),n&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{ov(e,t)}catch(i){le(r,r.return,i)}}break;case 27:t===null&&n&4&&nb(r);case 26:case 5:Lr(e,r),t===null&&n&4&&tb(r),n&512&&gi(r,r.return);break;case 12:Lr(e,r);break;case 13:Lr(e,r),n&4&&lb(e,r),n&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=n4.bind(null,r),x4(e,r))));break;case 22:if(n=r.memoizedState!==null||fr,!n){t=t!==null&&t.memoizedState!==null||Ae,a=fr;var o=Ae;fr=n,(Ae=t)&&!o?Ur(e,r,(r.subtreeFlags&8772)!==0):Lr(e,r),fr=a,Ae=o}break;case 30:break;default:Lr(e,r)}}function ob(e){var t=e.alternate;t!==null&&(e.alternate=null,ob(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gf(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var me=null,rt=!1;function dr(e,t,r){for(r=r.child;r!==null;)ib(e,t,r),r=r.sibling}function ib(e,t,r){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(_i,r)}catch{}switch(r.tag){case 26:Ae||Kt(r,t),dr(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ae||Kt(r,t);var n=me,a=rt;un(r.type)&&(me=r.stateNode,rt=!1),dr(e,t,r),xi(r.stateNode),me=n,rt=a;break;case 5:Ae||Kt(r,t);case 6:if(n=me,a=rt,me=null,dr(e,t,r),me=n,rt=a,me!==null)if(rt)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(r.stateNode)}catch(o){le(r,t,o)}else try{me.removeChild(r.stateNode)}catch(o){le(r,t,o)}break;case 18:me!==null&&(rt?(e=me,th(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Oi(e)):th(me,r.stateNode));break;case 4:n=me,a=rt,me=r.stateNode.containerInfo,rt=!0,dr(e,t,r),me=n,rt=a;break;case 0:case 11:case 14:case 15:Ae||ln(2,r,t),Ae||ln(4,r,t),dr(e,t,r);break;case 1:Ae||(Kt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"&&eb(r,t,n)),dr(e,t,r);break;case 21:dr(e,t,r);break;case 22:Ae=(n=Ae)||r.memoizedState!==null,dr(e,t,r),Ae=n;break;default:dr(e,t,r)}}function lb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oi(e)}catch(r){le(t,t.return,r)}}function Zw(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jg),t;default:throw Error(C(435,e.tag))}}function _d(e,t){var r=Zw(e);t.forEach(function(n){var a=a4.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}function st(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n],o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 27:if(un(l.type)){me=l.stateNode,rt=!1;break e}break;case 5:me=l.stateNode,rt=!1;break e;case 3:case 4:me=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(me===null)throw Error(C(160));ib(o,i,a),me=null,rt=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)sb(t,e),t=t.sibling}var $t=null;function sb(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ct(e),n&4&&(ln(3,e,e.return),Pi(3,e),ln(5,e,e.return));break;case 1:st(t,e),ct(e),n&512&&(Ae||r===null||Kt(r,r.return)),n&64&&fr&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?n:r.concat(n))));break;case 26:var a=$t;if(st(t,e),ct(e),n&512&&(Ae||r===null||Kt(r,r.return)),n&4){var o=r!==null?r.memoizedState:null;if(n=e.memoizedState,r===null)if(n===null)if(e.stateNode===null){e:{n=e.type,r=e.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":o=a.getElementsByTagName("title")[0],(!o||o[Fi]||o[Xe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),qe(o,n,r),o[Xe]=e,Fe(o),n=o;break e;case"link":var i=ih("link","href",a).get(n+(r.href||""));if(i){for(var l=0;l<i.length;l++)if(o=i[l],o.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&o.getAttribute("rel")===(r.rel==null?null:r.rel)&&o.getAttribute("title")===(r.title==null?null:r.title)&&o.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){i.splice(l,1);break t}}o=a.createElement(n),qe(o,n,r),a.head.appendChild(o);break;case"meta":if(i=ih("meta","content",a).get(n+(r.content||""))){for(l=0;l<i.length;l++)if(o=i[l],o.getAttribute("content")===(r.content==null?null:""+r.content)&&o.getAttribute("name")===(r.name==null?null:r.name)&&o.getAttribute("property")===(r.property==null?null:r.property)&&o.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&o.getAttribute("charset")===(r.charSet==null?null:r.charSet)){i.splice(l,1);break t}}o=a.createElement(n),qe(o,n,r),a.head.appendChild(o);break;default:throw Error(C(468,n))}o[Xe]=e,Fe(o),n=o}e.stateNode=n}else lh(a,e.type,e.stateNode);else e.stateNode=oh(a,n,e.memoizedProps);else o!==n?(o===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):o.count--,n===null?lh(a,e.type,e.stateNode):oh(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Vd(e,e.memoizedProps,r.memoizedProps)}break;case 27:st(t,e),ct(e),n&512&&(Ae||r===null||Kt(r,r.return)),r!==null&&n&4&&Vd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(st(t,e),ct(e),n&512&&(Ae||r===null||Kt(r,r.return)),e.flags&32){a=e.stateNode;try{Ja(a,"")}catch(p){le(e,e.return,p)}}n&4&&e.stateNode!=null&&(a=e.memoizedProps,Vd(e,a,r!==null?r.memoizedProps:a)),n&1024&&(zd=!0);break;case 6:if(st(t,e),ct(e),n&4){if(e.stateNode===null)throw Error(C(162));n=e.memoizedProps,r=e.stateNode;try{r.nodeValue=n}catch(p){le(e,e.return,p)}}break;case 3:if(Ss=null,a=$t,$t=Qs(t.containerInfo),st(t,e),$t=a,ct(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(p){le(e,e.return,p)}zd&&(zd=!1,cb(e));break;case 4:n=$t,$t=Qs(e.stateNode.containerInfo),st(t,e),ct(e),$t=n;break;case 12:st(t,e),ct(e);break;case 13:st(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(km=Qt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_d(e,n)));break;case 22:a=e.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,u=fr,d=Ae;if(fr=u||a,Ae=d||c,st(t,e),Ae=d,fr=u,ct(e),n&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(r===null||c||fr||Ae||On(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){c=r=t;try{if(o=c.stateNode,a)i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{l=c.stateNode;var m=c.memoizedProps.style,f=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){le(c,c.return,p)}}}else if(t.tag===6){if(r===null){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(p){le(c,c.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(r=n.retryQueue,r!==null&&(n.retryQueue=null,_d(e,r))));break;case 19:st(t,e),ct(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,_d(e,n)));break;case 30:break;case 21:break;default:st(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var r,n=e.return;n!==null;){if(rb(n)){r=n;break}n=n.return}if(r==null)throw Error(C(160));switch(r.tag){case 27:var a=r.stateNode,o=Od(e);Gs(e,o,a);break;case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var l=Od(e);Gs(e,l,i);break;case 3:case 4:var c=r.stateNode.containerInfo,u=Od(e);wf(e,u,c);break;default:throw Error(C(161))}}catch(d){le(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;cb(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Lr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ab(e,t.alternate,t),t=t.sibling}function On(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ln(4,t,t.return),On(t);break;case 1:Kt(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&eb(t,t.return,r),On(t);break;case 27:xi(t.stateNode);case 26:case 5:Kt(t,t.return),On(t);break;case 22:t.memoizedState===null&&On(t);break;case 30:On(t);break;default:On(t)}e=e.sibling}}function Ur(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Ur(a,o,r),Pi(4,o);break;case 1:if(Ur(a,o,r),n=o,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){le(n,n.return,u)}if(n=o,a=n.updateQueue,a!==null){var l=n.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)av(c[a],l)}catch(u){le(n,n.return,u)}}r&&i&64&&Jv(o),gi(o,o.return);break;case 27:nb(o);case 26:case 5:Ur(a,o,r),r&&n===null&&i&4&&tb(o),gi(o,o.return);break;case 12:Ur(a,o,r);break;case 13:Ur(a,o,r),r&&i&4&&lb(a,o);break;case 22:o.memoizedState===null&&Ur(a,o,r),gi(o,o.return);break;case 30:break;default:Ur(a,o,r)}t=t.sibling}}function bm(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Hi(r))}function xm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e))}function Pt(e,t,r,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ub(e,t,r,n),t=t.sibling}function ub(e,t,r,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,r,n),a&2048&&Pi(9,t);break;case 1:Pt(e,t,r,n);break;case 3:Pt(e,t,r,n),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e)));break;case 12:if(a&2048){Pt(e,t,r,n),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;typeof l=="function"&&l(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){le(t,t.return,c)}}else Pt(e,t,r,n);break;case 13:Pt(e,t,r,n);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,t.memoizedState!==null?o._visibility&2?Pt(e,t,r,n):hi(e,t):o._visibility&2?Pt(e,t,r,n):(o._visibility|=2,Ca(e,t,r,n,(t.subtreeFlags&10256)!==0)),a&2048&&bm(i,t);break;case 24:Pt(e,t,r,n),a&2048&&xm(t.alternate,t);break;default:Pt(e,t,r,n)}}function Ca(e,t,r,n,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,i=t,l=r,c=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ca(o,i,l,c,a),Pi(8,i);break;case 23:break;case 22:var d=i.stateNode;i.memoizedState!==null?d._visibility&2?Ca(o,i,l,c,a):hi(o,i):(d._visibility|=2,Ca(o,i,l,c,a)),a&&u&2048&&bm(i.alternate,i);break;case 24:Ca(o,i,l,c,a),a&&u&2048&&xm(i.alternate,i);break;default:Ca(o,i,l,c,a)}t=t.sibling}}function hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,n=t,a=n.flags;switch(n.tag){case 22:hi(r,n),a&2048&&bm(n.alternate,n);break;case 24:hi(r,n),a&2048&&xm(n.alternate,n);break;default:hi(r,n)}t=t.sibling}}var oi=8192;function Aa(e){if(e.subtreeFlags&oi)for(e=e.child;e!==null;)db(e),e=e.sibling}function db(e){switch(e.tag){case 26:Aa(e),e.flags&oi&&e.memoizedState!==null&&V4($t,e.memoizedState,e.memoizedProps);break;case 5:Aa(e);break;case 3:case 4:var t=$t;$t=Qs(e.stateNode.containerInfo),Aa(e),$t=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=oi,oi=16777216,Aa(e),oi=t):Aa(e));break;default:Aa(e)}}function fb(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];$e=n,pb(n,e)}fb(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mb(e),e=e.sibling}function mb(e){switch(e.tag){case 0:case 11:case 15:Jo(e),e.flags&2048&&ln(9,e,e.return);break;case 3:Jo(e);break;case 12:Jo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ws(e)):Jo(e);break;default:Jo(e)}}function ws(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];$e=n,pb(n,e)}fb(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ln(8,t,t.return),ws(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,ws(t));break;default:ws(t)}e=e.sibling}}function pb(e,t){for(;$e!==null;){var r=$e;switch(r.tag){case 0:case 11:case 15:ln(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var n=r.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Hi(r.memoizedState.cache)}if(n=r.child,n!==null)n.return=r,$e=n;else e:for(r=e;$e!==null;){n=$e;var a=n.sibling,o=n.return;if(ob(n),n===r){$e=null;break e}if(a!==null){a.return=o,$e=a;break e}$e=o}}}var Qw={getCacheForType:function(e){var t=Ke(Re),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Iw=typeof WeakMap=="function"?WeakMap:Map,re=0,se=null,K=null,Q=0,te=0,ut=null,Zr=!1,fo=!1,ym=!1,Sr=0,Se=0,sn=0,Ln=0,wm=0,Et=0,ao=0,vi=null,nt=null,kf=!1,km=0,qs=1/0,Ys=null,en=null,Ge=0,tn=null,oo=null,Qa=0,Sf=0,Tf=null,gb=null,bi=0,Nf=null;function pt(){if((re&2)!==0&&Q!==0)return Q&-Q;if(L.T!==null){var e=eo;return e!==0?e:Tm()}return Ah()}function hb(){Et===0&&(Et=(Q&536870912)===0||J?kh():536870912);var e=Ct.current;return e!==null&&(e.flags|=32),Et}function gt(e,t,r){(e===se&&(te===2||te===9)||e.cancelPendingCommit!==null)&&(io(e,0),Qr(e,Q,Et,!1)),$i(e,r),((re&2)===0||e!==se)&&(e===se&&((re&2)===0&&(Ln|=r),Se===4&&Qr(e,Q,Et,!1)),Jt(e))}function vb(e,t,r){if((re&6)!==0)throw Error(C(327));var n=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Bi(e,t),a=n?e4(e,t):Bd(e,t,!0),o=n;do{if(a===0){fo&&!n&&Qr(e,t,0,!1);break}else{if(r=e.current.alternate,o&&!Ww(r)){a=Bd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var l=e;a=vi;var c=l.current.memoizedState.isDehydrated;if(c&&(io(l,i).flags|=256),i=Bd(l,i,!1),i!==2){if(ym&&!c){l.errorRecoveryDisabledLanes|=o,Ln|=o,a=4;break e}o=nt,nt=a,o!==null&&(nt===null?nt=o:nt.push.apply(nt,o))}a=i}if(o=!1,a!==2)continue}}if(a===1){io(e,0),Qr(e,t,0,!0);break}e:{switch(n=e,o=a,o){case 0:case 1:throw Error(C(345));case 4:if((t&4194048)!==t)break;case 6:Qr(n,t,Et,!Zr);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(C(329))}if((t&62914560)===t&&(a=km+300-Qt(),10<a)){if(Qr(n,t,Et,!Zr),tc(n,0,!0)!==0)break e;n.timeoutHandle=Bb(Hg.bind(null,n,r,nt,Ys,kf,t,Et,Ln,ao,Zr,o,2,-0,0),a);break e}Hg(n,r,nt,Ys,kf,t,Et,Ln,ao,Zr,o,0,-0,0)}}break}while(!0);Jt(e)}function Hg(e,t,r,n,a,o,i,l,c,u,d,m,f,p){if(e.timeoutHandle=-1,m=t.subtreeFlags,(m&8192||(m&16785408)===16785408)&&(Ci={stylesheets:null,count:0,unsuspend:R4},db(t),m=O4(),m!==null)){e.cancelPendingCommit=m(qg.bind(null,e,t,o,r,n,a,i,l,c,d,1,f,p)),Qr(e,o,i,!u);return}qg(e,t,o,r,n,a,i,l,c)}function Ww(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!ht(o(),a))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qr(e,t,r,n){t&=~wm,t&=~Ln,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-mt(a),i=1<<o;n[o]=-1,a&=~i}r!==0&&Th(e,r,t)}function dc(){return(re&6)===0?(Xi(0,!1),!1):!0}function Sm(){if(K!==null){if(te===0)var e=K.return;else e=K,hr=Kn=null,cm(e),Za=null,Ai=0,e=K;for(;e!==null;)Wv(e.alternate,e),e=e.return;K=null}}function io(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,p4(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Sm(),se=e,K=r=br(e.current,null),Q=t,te=0,ut=null,Zr=!1,fo=Bi(e,t),ym=!1,ao=Et=wm=Ln=sn=Se=0,nt=vi=null,kf=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-mt(n),o=1<<a;t|=e[a],n&=~o}return Sr=t,oc(),r}function bb(e,t){P=null,L.H=Fs,t===Gi||t===lc?(t=yg(),te=3):t===rv?(t=yg(),te=4):te=t===Pv?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,K===null&&(Se=1,js(e,Mt(t,e.current)))}function xb(){var e=L.H;return L.H=Fs,e===null?Fs:e}function yb(){var e=L.A;return L.A=Qw,e}function Af(){Se=4,Zr||(Q&4194048)!==Q&&Ct.current!==null||(fo=!0),(sn&134217727)===0&&(Ln&134217727)===0||se===null||Qr(se,Q,Et,!1)}function Bd(e,t,r){var n=re;re|=2;var a=xb(),o=yb();(se!==e||Q!==t)&&(Ys=null,io(e,t)),t=!1;var i=Se;e:do try{if(te!==0&&K!==null){var l=K,c=ut;switch(te){case 8:Sm(),i=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var u=te;if(te=0,ut=null,Ha(e,l,c,u),r&&fo){i=0;break e}break;default:u=te,te=0,ut=null,Ha(e,l,c,u)}}Jw(),i=Se;break}catch(d){bb(e,d)}while(!0);return t&&e.shellSuspendCounter++,hr=Kn=null,re=n,L.H=a,L.A=o,K===null&&(se=null,Q=0,oc()),i}function Jw(){for(;K!==null;)wb(K)}function e4(e,t){var r=re;re|=2;var n=xb(),a=yb();se!==e||Q!==t?(Ys=null,qs=Qt()+500,io(e,t)):fo=Bi(e,t);e:do try{if(te!==0&&K!==null){t=K;var o=ut;t:switch(te){case 1:te=0,ut=null,Ha(e,t,o,1);break;case 2:case 9:if(xg(o)){te=0,ut=null,Gg(t);break}t=function(){te!==2&&te!==9||se!==e||(te=7),Jt(e)},o.then(t,t);break e;case 3:te=7;break e;case 4:te=5;break e;case 7:xg(o)?(te=0,ut=null,Gg(t)):(te=0,ut=null,Ha(e,t,o,7));break;case 5:var i=null;switch(K.tag){case 26:i=K.memoizedState;case 5:case 27:var l=K;if(!i||Ub(i)){te=0,ut=null;var c=l.sibling;if(c!==null)K=c;else{var u=l.return;u!==null?(K=u,fc(u)):K=null}break t}}te=0,ut=null,Ha(e,t,o,5);break;case 6:te=0,ut=null,Ha(e,t,o,6);break;case 8:Sm(),Se=6;break e;default:throw Error(C(462))}}t4();break}catch(d){bb(e,d)}while(!0);return hr=Kn=null,L.H=n,L.A=a,re=r,K!==null?0:(se=null,Q=0,oc(),Se)}function t4(){for(;K!==null&&!S5();)wb(K)}function wb(e){var t=Iv(e.alternate,e,Sr);e.memoizedProps=e.pendingProps,t===null?fc(e):K=t}function Gg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Bg(r,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=Bg(r,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:cm(t);default:Wv(r,t),t=K=Wh(t,Sr),t=Iv(r,t,Sr)}e.memoizedProps=e.pendingProps,t===null?fc(e):K=t}function Ha(e,t,r,n){hr=Kn=null,cm(t),Za=null,Ai=0;var a=t.return;try{if(qw(e,a,t,r,Q)){Se=1,js(e,Mt(r,e.current)),K=null;return}}catch(o){if(a!==null)throw K=a,o;Se=1,js(e,Mt(r,e.current)),K=null;return}t.flags&32768?(J||n===1?e=!0:fo||(Q&536870912)!==0?e=!1:(Zr=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ct.current,n!==null&&n.tag===13&&(n.flags|=16384))),kb(t,e)):fc(t)}function fc(e){var t=e;do{if((t.flags&32768)!==0){kb(t,Zr);return}e=t.return;var r=Pw(t.alternate,t,Sr);if(r!==null){K=r;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Se===0&&(Se=5)}function kb(e,t){do{var r=Xw(e.alternate,e);if(r!==null){r.flags&=32767,K=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=r}while(e!==null);Se=6,K=null}function qg(e,t,r,n,a,o,i,l,c){e.cancelPendingCommit=null;do mc();while(Ge!==0);if((re&6)!==0)throw Error(C(327));if(t!==null){if(t===e.current)throw Error(C(177));if(o=t.lanes|t.childLanes,o|=Qf,O5(e,r,o,i,l,c),e===se&&(K=se=null,Q=0),oo=t,tn=e,Qa=r,Sf=o,Tf=a,gb=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,o4(Es,function(){return Mb(!0),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null,a=ee.p,ee.p=2,i=re,re|=4;try{Kw(e,t,r)}finally{re=i,ee.p=a,L.T=n}}Ge=1,Sb(),Tb(),Nb()}}function Sb(){if(Ge===1){Ge=0;var e=tn,t=oo,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=L.T,L.T=null;var n=ee.p;ee.p=2;var a=re;re|=4;try{sb(t,e);var o=Df,i=qh(e.containerInfo),l=o.focusedElem,c=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Gh(l.ownerDocument.documentElement,l)){if(c!==null&&Zf(l)){var u=c.start,d=c.end;if(d===void 0&&(d=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,f=m&&m.defaultView||window;if(f.getSelection){var p=f.getSelection(),b=l.textContent.length,x=Math.min(c.start,b),y=c.end===void 0?x:Math.min(c.end,b);!p.extend&&x>y&&(i=y,y=x,x=i);var g=dg(l,x),h=dg(l,y);if(g&&h&&(p.rangeCount!==1||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==h.node||p.focusOffset!==h.offset)){var v=m.createRange();v.setStart(g.node,g.offset),p.removeAllRanges(),x>y?(p.addRange(v),p.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),p.addRange(v))}}}}for(m=[],p=l;p=p.parentNode;)p.nodeType===1&&m.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var w=m[l];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Js=!!Cf,Df=Cf=null}finally{re=a,ee.p=n,L.T=r}}e.current=t,Ge=2}}function Tb(){if(Ge===2){Ge=0;var e=tn,t=oo,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=L.T,L.T=null;var n=ee.p;ee.p=2;var a=re;re|=4;try{ab(e,t.alternate,t)}finally{re=a,ee.p=n,L.T=r}}Ge=3}}function Nb(){if(Ge===4||Ge===3){Ge=0,T5();var e=tn,t=oo,r=Qa,n=gb;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,oo=tn=null,Ab(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(en=null),Hf(r),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(_i,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=L.T,a=ee.p,ee.p=2,L.T=null;try{for(var o=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];o(l.value,{componentStack:l.stack})}}finally{L.T=t,ee.p=a}}(Qa&3)!==0&&mc(),Jt(e),a=e.pendingLanes,(r&4194090)!==0&&(a&42)!==0?e===Nf?bi++:(bi=0,Nf=e):bi=0,Xi(0,!1)}}function Ab(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hi(t)))}function mc(e){return Sb(),Tb(),Nb(),Mb(e)}function Mb(){if(Ge!==5)return!1;var e=tn,t=Sf;Sf=0;var r=Hf(Qa),n=L.T,a=ee.p;try{ee.p=32>r?32:r,L.T=null,r=Tf,Tf=null;var o=tn,i=Qa;if(Ge=0,oo=tn=null,Qa=0,(re&6)!==0)throw Error(C(331));var l=re;if(re|=4,mb(o.current),ub(o,o.current,i,r),re=l,Xi(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(_i,o)}catch{}return!0}finally{ee.p=a,L.T=n,Ab(e,t)}}function Yg(e,t,r){t=Mt(r,t),t=bf(e.stateNode,t,2),e=Jr(e,t,2),e!==null&&($i(e,2),Jt(e))}function le(e,t,r){if(e.tag===3)Yg(e,e,r);else for(;t!==null;){if(t.tag===3){Yg(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(en===null||!en.has(n))){e=Mt(r,e),r=qv(2),n=Jr(t,r,2),n!==null&&(Yv(r,n,t,e),$i(n,2),Jt(n));break}}t=t.return}}function $d(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Iw;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(ym=!0,a.add(r),e=r4.bind(null,e,t,r),t.then(e,e))}function r4(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,se===e&&(Q&r)===r&&(Se===4||Se===3&&(Q&62914560)===Q&&300>Qt()-km?(re&2)===0&&io(e,0):wm|=r,ao===Q&&(ao=0)),Jt(e)}function Eb(e,t){t===0&&(t=Sh()),e=uo(e,t),e!==null&&($i(e,t),Jt(e))}function n4(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Eb(e,r)}function a4(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(C(314))}n!==null&&n.delete(t),Eb(e,r)}function o4(e,t){return Uf(e,t)}var Ps=null,Da=null,Mf=!1,Xs=!1,Fd=!1,Un=0;function Jt(e){e!==Da&&e.next===null&&(Da===null?Ps=Da=e:Da=Da.next=e),Xs=!0,Mf||(Mf=!0,l4())}function Xi(e,t){if(!Fd&&Xs){Fd=!0;do for(var r=!1,n=Ps;n!==null;){if(!t)if(e!==0){var a=n.pendingLanes;if(a===0)var o=0;else{var i=n.suspendedLanes,l=n.pingedLanes;o=(1<<31-mt(42|e)+1)-1,o&=a&~(i&~l),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(r=!0,Pg(n,o))}else o=Q,o=tc(n,n===se?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||Bi(n,o)||(r=!0,Pg(n,o));n=n.next}while(r);Fd=!1}}function i4(){Cb()}function Cb(){Xs=Mf=!1;var e=0;Un!==0&&(m4()&&(e=Un),Un=0);for(var t=Qt(),r=null,n=Ps;n!==null;){var a=n.next,o=Db(n,t);o===0?(n.next=null,r===null?Ps=a:r.next=a,a===null&&(Da=r)):(r=n,(e!==0||(o&3)!==0)&&(Xs=!0)),n=a}Xi(e,!1)}function Db(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var i=31-mt(o),l=1<<i,c=a[i];c===-1?((l&r)===0||(l&n)!==0)&&(a[i]=V5(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}if(t=se,r=Q,r=tc(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,r===0||e===t&&(te===2||te===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&dd(n),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Bi(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(n!==null&&dd(n),Hf(r)){case 2:case 8:r=yh;break;case 32:r=Es;break;case 268435456:r=wh;break;default:r=Es}return n=Rb.bind(null,e),r=Uf(r,n),e.callbackPriority=t,e.callbackNode=r,t}return n!==null&&n!==null&&dd(n),e.callbackPriority=2,e.callbackNode=null,2}function Rb(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(mc(!0)&&e.callbackNode!==r)return null;var n=Q;return n=tc(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(vb(e,n,t),Db(e,Qt()),e.callbackNode!=null&&e.callbackNode===r?Rb.bind(null,e):null)}function Pg(e,t){if(mc())return null;vb(e,t,!0)}function l4(){g4(function(){(re&6)!==0?Uf(xh,i4):Cb()})}function Tm(){return Un===0&&(Un=kh()),Un}function Xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ms(""+e)}function Kg(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function s4(e,t,r,n,a){if(t==="submit"&&r&&r.stateNode===a){var o=Xg((a[at]||null).action),i=n.submitter;i&&(t=(t=i[at]||null)?Xg(t.formAction):i.getAttribute("formAction"),t!==null&&(o=t,i=null));var l=new rc("action","action",null,n,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Un!==0){var c=i?Kg(a,i):new FormData(a);hf(r,{pending:!0,data:c,method:a.method,action:o},null,c)}}else typeof o=="function"&&(l.preventDefault(),c=i?Kg(a,i):new FormData(a),hf(r,{pending:!0,data:c,method:a.method,action:o},o,c))},currentTarget:a}]})}}for(ls=0;ls<nf.length;ls++)ss=nf[ls],Zg=ss.toLowerCase(),Qg=ss[0].toUpperCase()+ss.slice(1),Lt(Zg,"on"+Qg);var ss,Zg,Qg,ls;Lt(Ph,"onAnimationEnd");Lt(Xh,"onAnimationIteration");Lt(Kh,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Mw,"onTransitionRun");Lt(Ew,"onTransitionStart");Lt(Cw,"onTransitionCancel");Lt(Zh,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi));function Vb(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(d){Us(d)}a.currentTarget=null,o=c}else for(i=0;i<n.length;i++){if(l=n[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(d){Us(d)}a.currentTarget=null,o=c}}}}function X(e,t){var r=t[Qd];r===void 0&&(r=t[Qd]=new Set);var n=e+"__bubble";r.has(n)||(Ob(t,e,2,!1),r.add(n))}function Ld(e,t,r){var n=0;t&&(n|=4),Ob(r,e,n,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Nm(e){if(!e[cs]){e[cs]=!0,Mh.forEach(function(r){r!=="selectionchange"&&(c4.has(r)||Ld(r,!1,e),Ld(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Ld("selectionchange",!1,t))}}function Ob(e,t,r,n){switch(Yb(t)){case 2:var a=B4;break;case 8:a=$4;break;default:a=Cm}r=a.bind(null,t,r,e),a=void 0,!ef||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ud(e,t,r,n,a){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===a)break;if(i===4)for(i=n.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;l!==null;){if(i=Oa(l),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){n=o=i;continue e}l=l.parentNode}}n=n.return}_h(function(){var u=o,d=Yf(r),m=[];e:{var f=Qh.get(e);if(f!==void 0){var p=rc,b=e;switch(e){case"keypress":if(gs(r)===0)break e;case"keydown":case"keyup":p=ow;break;case"focusin":b="focus",p=xd;break;case"focusout":b="blur",p=xd;break;case"beforeblur":case"afterblur":p=xd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=X5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sw;break;case Ph:case Xh:case Kh:p=Q5;break;case Zh:p=uw;break;case"scroll":case"scrollend":p=Y5;break;case"wheel":p=fw;break;case"copy":case"cut":case"paste":p=W5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ag;break;case"toggle":case"beforetoggle":p=pw}var x=(t&4)!==0,y=!x&&(e==="scroll"||e==="scrollend"),g=x?f!==null?f+"Capture":null:f;x=[];for(var h=u,v;h!==null;){var w=h;if(v=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||v===null||g===null||(w=wi(h,g),w!=null&&x.push(Ei(h,w,v))),y)break;h=h.return}0<x.length&&(f=new p(f,b,null,r,d),m.push({event:f,listeners:x}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&r!==Jd&&(b=r.relatedTarget||r.fromElement)&&(Oa(b)||b[so]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(b=r.relatedTarget||r.toElement,p=u,b=b?Oa(b):null,b!==null&&(y=zi(b),x=b.tag,b!==y||x!==5&&x!==27&&x!==6)&&(b=null)):(p=null,b=u),p!==b)){if(x=rg,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=ag,w="onPointerLeave",g="onPointerEnter",h="pointer"),y=p==null?f:ai(p),v=b==null?f:ai(b),f=new x(w,h+"leave",p,r,d),f.target=y,f.relatedTarget=v,w=null,Oa(d)===u&&(x=new x(g,h+"enter",b,r,d),x.target=v,x.relatedTarget=y,w=x),y=w,p&&b)t:{for(x=p,g=b,h=0,v=x;v;v=Ma(v))h++;for(v=0,w=g;w;w=Ma(w))v++;for(;0<h-v;)x=Ma(x),h--;for(;0<v-h;)g=Ma(g),v--;for(;h--;){if(x===g||g!==null&&x===g.alternate)break t;x=Ma(x),g=Ma(g)}x=null}else x=null;p!==null&&Ig(m,f,p,x,!1),b!==null&&y!==null&&Ig(m,y,b,x,!0)}}e:{if(f=u?ai(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=sg;else if(lg(f))if(jh)k=Tw;else{k=kw;var A=ww}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&qf(u.elementType)&&(k=sg):k=Sw;if(k&&(k=k(e,u))){Uh(m,k,r,d);break e}A&&A(e,f,u),e==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Wd(f,"number",f.value)}switch(A=u?ai(u):window,e){case"focusin":(lg(A)||A.contentEditable==="true")&&(Ba=A,tf=u,si=null);break;case"focusout":si=tf=Ba=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,fg(m,r,d);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":fg(m,r,d)}var N;if(Kf)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else _a?Fh(e,r)&&(S="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(S="onCompositionStart");S&&($h&&r.locale!=="ko"&&(_a||S!=="onCompositionStart"?S==="onCompositionEnd"&&_a&&(N=Bh()):(Kr=d,Pf="value"in Kr?Kr.value:Kr.textContent,_a=!0)),A=Ks(u,S),0<A.length&&(S=new ng(S,e,null,r,d),m.push({event:S,listeners:A}),N?S.data=N:(N=Lh(r),N!==null&&(S.data=N)))),(N=hw?vw(e,r):bw(e,r))&&(S=Ks(u,"onBeforeInput"),0<S.length&&(A=new ng("onBeforeInput","beforeinput",null,r,d),m.push({event:A,listeners:S}),A.data=N)),s4(m,e,u,r,d)}Vb(m,t)})}function Ei(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ks(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=wi(e,r),a!=null&&n.unshift(Ei(e,a,o)),a=wi(e,t),a!=null&&n.push(Ei(e,a,o))),e.tag===3)return n;e=e.return}return[]}function Ma(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(l=l.tag,c!==null&&c===n)break;l!==5&&l!==26&&l!==27||u===null||(c=u,a?(u=wi(r,o),u!=null&&i.unshift(Ei(r,u,c))):a||(u=wi(r,o),u!=null&&i.push(Ei(r,u,c)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var u4=/\r\n?/g,d4=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(u4,`
`).replace(d4,"")}function zb(e,t){return t=Wg(t),Wg(e)===t}function pc(){}function oe(e,t,r,n,a,o){switch(r){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ja(e,""+n);break;case"className":Wl(e,"class",n);break;case"tabIndex":Wl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,r,n);break;case"style":zh(e,n,o);break;case"data":if(t!=="object"){Wl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(r);break}n=ms(""+n),e.setAttribute(r,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(r==="formAction"?(t!=="input"&&oe(e,t,"name",a.name,a,null),oe(e,t,"formEncType",a.formEncType,a,null),oe(e,t,"formMethod",a.formMethod,a,null),oe(e,t,"formTarget",a.formTarget,a,null)):(oe(e,t,"encType",a.encType,a,null),oe(e,t,"method",a.method,a,null),oe(e,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(r);break}n=ms(""+n),e.setAttribute(r,n);break;case"onClick":n!=null&&(e.onclick=pc);break;case"onScroll":n!=null&&X("scroll",e);break;case"onScrollEnd":n!=null&&X("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(C(61));if(r=n.__html,r!=null){if(a.children!=null)throw Error(C(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}r=ms(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":n===!0?e.setAttribute(r,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":X("beforetoggle",e),X("toggle",e),fs(e,"popover",n);break;case"xlinkActuate":cr(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":cr(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":cr(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":cr(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":cr(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":cr(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":cr(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":cr(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":cr(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":fs(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=G5.get(r)||r,fs(e,r,n))}}function Ef(e,t,r,n,a,o){switch(r){case"style":zh(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(C(61));if(r=n.__html,r!=null){if(a.children!=null)throw Error(C(60));e.innerHTML=r}}break;case"children":typeof n=="string"?Ja(e,n):(typeof n=="number"||typeof n=="bigint")&&Ja(e,""+n);break;case"onScroll":n!=null&&X("scroll",e);break;case"onScrollEnd":n!=null&&X("scrollend",e);break;case"onClick":n!=null&&(e.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eh.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(a=r.endsWith("Capture"),t=r.slice(2,a?r.length-7:void 0),o=e[at]||null,o=o!=null?o[r]:null,typeof o=="function"&&e.removeEventListener(t,o,a),typeof n=="function")){typeof o!="function"&&o!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,a);break e}r in e?e[r]=n:n===!0?e.setAttribute(r,""):fs(e,r,n)}}}function qe(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",e),X("load",e);var n=!1,a=!1,o;for(o in r)if(r.hasOwnProperty(o)){var i=r[o];if(i!=null)switch(o){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(C(137,t));default:oe(e,t,o,i,r,null)}}a&&oe(e,t,"srcSet",r.srcSet,r,null),n&&oe(e,t,"src",r.src,r,null);return;case"input":X("invalid",e);var l=o=i=a=null,c=null,u=null;for(n in r)if(r.hasOwnProperty(n)){var d=r[n];if(d!=null)switch(n){case"name":a=d;break;case"type":i=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":o=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(C(137,t));break;default:oe(e,t,n,d,r,null)}}Rh(e,o,l,c,u,i,a,!1),Cs(e);return;case"select":X("invalid",e),n=i=o=null;for(a in r)if(r.hasOwnProperty(a)&&(l=r[a],l!=null))switch(a){case"value":o=l;break;case"defaultValue":i=l;break;case"multiple":n=l;default:oe(e,t,a,l,r,null)}t=o,r=i,e.multiple=!!n,t!=null?qa(e,!!n,t,!1):r!=null&&qa(e,!!n,r,!0);return;case"textarea":X("invalid",e),o=a=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":a=l;break;case"children":o=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(C(91));break;default:oe(e,t,i,l,r,null)}Oh(e,n,a,o),Cs(e);return;case"option":for(c in r)r.hasOwnProperty(c)&&(n=r[c],n!=null)&&(c==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":oe(e,t,c,n,r,null));return;case"dialog":X("beforetoggle",e),X("toggle",e),X("cancel",e),X("close",e);break;case"iframe":case"object":X("load",e);break;case"video":case"audio":for(n=0;n<Mi.length;n++)X(Mi[n],e);break;case"image":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"embed":case"source":case"link":X("error",e),X("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in r)if(r.hasOwnProperty(u)&&(n=r[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(C(137,t));default:oe(e,t,u,n,r,null)}return;default:if(qf(t)){for(d in r)r.hasOwnProperty(d)&&(n=r[d],n!==void 0&&Ef(e,t,d,n,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(n=r[l],n!=null&&oe(e,t,l,n,r,null))}function f4(e,t,r,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,i=null,l=null,c=null,u=null,d=null;for(p in r){var m=r[p];if(r.hasOwnProperty(p)&&m!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":c=m;default:n.hasOwnProperty(p)||oe(e,t,p,null,n,m)}}for(var f in n){var p=n[f];if(m=r[f],n.hasOwnProperty(f)&&(p!=null||m!=null))switch(f){case"type":o=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(C(137,t));break;default:p!==m&&oe(e,t,f,p,n,m)}}Id(e,i,l,c,u,d,o,a);return;case"select":p=i=l=f=null;for(o in r)if(c=r[o],r.hasOwnProperty(o)&&c!=null)switch(o){case"value":break;case"multiple":p=c;default:n.hasOwnProperty(o)||oe(e,t,o,null,n,c)}for(a in n)if(o=n[a],c=r[a],n.hasOwnProperty(a)&&(o!=null||c!=null))switch(a){case"value":f=o;break;case"defaultValue":l=o;break;case"multiple":i=o;default:o!==c&&oe(e,t,a,o,n,c)}t=l,r=i,n=p,f!=null?qa(e,!!r,f,!1):!!n!=!!r&&(t!=null?qa(e,!!r,t,!0):qa(e,!!r,r?[]:"",!1));return;case"textarea":p=f=null;for(l in r)if(a=r[l],r.hasOwnProperty(l)&&a!=null&&!n.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:oe(e,t,l,null,n,a)}for(i in n)if(a=n[i],o=r[i],n.hasOwnProperty(i)&&(a!=null||o!=null))switch(i){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(C(91));break;default:a!==o&&oe(e,t,i,a,n,o)}Vh(e,f,p);return;case"option":for(var b in r)f=r[b],r.hasOwnProperty(b)&&f!=null&&!n.hasOwnProperty(b)&&(b==="selected"?e.selected=!1:oe(e,t,b,null,n,f));for(c in n)f=n[c],p=r[c],n.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null)&&(c==="selected"?e.selected=f&&typeof f!="function"&&typeof f!="symbol":oe(e,t,c,f,n,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in r)f=r[x],r.hasOwnProperty(x)&&f!=null&&!n.hasOwnProperty(x)&&oe(e,t,x,null,n,f);for(u in n)if(f=n[u],p=r[u],n.hasOwnProperty(u)&&f!==p&&(f!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(C(137,t));break;default:oe(e,t,u,f,n,p)}return;default:if(qf(t)){for(var y in r)f=r[y],r.hasOwnProperty(y)&&f!==void 0&&!n.hasOwnProperty(y)&&Ef(e,t,y,void 0,n,f);for(d in n)f=n[d],p=r[d],!n.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||Ef(e,t,d,f,n,p);return}}for(var g in r)f=r[g],r.hasOwnProperty(g)&&f!=null&&!n.hasOwnProperty(g)&&oe(e,t,g,null,n,f);for(m in n)f=n[m],p=r[m],!n.hasOwnProperty(m)||f===p||f==null&&p==null||oe(e,t,m,f,n,p)}var Cf=null,Df=null;function Zs(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _b(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jd=null;function m4(){var e=window.event;return e&&e.type==="popstate"?e===jd?!1:(jd=e,!0):(jd=null,!1)}var Bb=typeof setTimeout=="function"?setTimeout:void 0,p4=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,g4=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(e){return eh.resolve(null).then(e).catch(h4)}:Bb;function h4(e){setTimeout(function(){throw e})}function un(e){return e==="head"}function th(e,t){var r=t,n=0,a=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(0<n&&8>n){r=n;var i=e.ownerDocument;if(r&1&&xi(i.documentElement),r&2&&xi(i.body),r&4)for(r=i.head,xi(r),i=r.firstChild;i;){var l=i.nextSibling,c=i.nodeName;i[Fi]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||r.removeChild(i),i=l}}if(a===0){e.removeChild(o),Oi(t);return}a--}else r==="$"||r==="$?"||r==="$!"?a++:n=r.charCodeAt(0)-48;else n=0;r=o}while(r);Oi(t)}function Vf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Vf(r),Gf(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function v4(e,t,r,n){for(;e.nodeType===1;){var a=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Fi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function b4(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ft(e.nextSibling),e===null))return null;return e}function Of(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function x4(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var n=function(){t(),r.removeEventListener("DOMContentLoaded",n)};r.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var zf=null;function rh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function $b(e,t,r){switch(t=Zs(r),e){case"html":if(e=t.documentElement,!e)throw Error(C(452));return e;case"head":if(e=t.head,!e)throw Error(C(453));return e;case"body":if(e=t.body,!e)throw Error(C(454));return e;default:throw Error(C(451))}}function xi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gf(e)}var Dt=new Map,nh=new Set;function Qs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tr=ee.d;ee.d={f:y4,r:w4,D:k4,C:S4,L:T4,m:N4,X:M4,S:A4,M:E4};function y4(){var e=Tr.f(),t=dc();return e||t}function w4(e){var t=co(e);t!==null&&t.tag===5&&t.type==="form"?Dv(t):Tr.r(e)}var mo=typeof document>"u"?null:document;function Fb(e,t,r){var n=mo;if(n&&typeof t=="string"&&t){var a=At(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof r=="string"&&(a+='[crossorigin="'+r+'"]'),nh.has(a)||(nh.add(a),e={rel:e,crossOrigin:r,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),qe(t,"link",e),Fe(t),n.head.appendChild(t)))}}function k4(e){Tr.D(e),Fb("dns-prefetch",e,null)}function S4(e,t){Tr.C(e,t),Fb("preconnect",e,t)}function T4(e,t,r){Tr.L(e,t,r);var n=mo;if(n&&e&&t){var a='link[rel="preload"][as="'+At(t)+'"]';t==="image"&&r&&r.imageSrcSet?(a+='[imagesrcset="'+At(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(a+='[imagesizes="'+At(r.imageSizes)+'"]')):a+='[href="'+At(e)+'"]';var o=a;switch(t){case"style":o=lo(e);break;case"script":o=po(e)}Dt.has(o)||(e=ce({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Dt.set(o,e),n.querySelector(a)!==null||t==="style"&&n.querySelector(Ki(o))||t==="script"&&n.querySelector(Zi(o))||(t=n.createElement("link"),qe(t,"link",e),Fe(t),n.head.appendChild(t)))}}function N4(e,t){Tr.m(e,t);var r=mo;if(r&&e){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+At(n)+'"][href="'+At(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=po(e)}if(!Dt.has(o)&&(e=ce({rel:"modulepreload",href:e},t),Dt.set(o,e),r.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zi(o)))return}n=r.createElement("link"),qe(n,"link",e),Fe(n),r.head.appendChild(n)}}}function A4(e,t,r){Tr.S(e,t,r);var n=mo;if(n&&e){var a=Ga(n).hoistableStyles,o=lo(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=n.querySelector(Ki(o)))l.loading=5;else{e=ce({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Dt.get(o))&&Am(e,r);var c=i=n.createElement("link");Fe(c),qe(c,"link",e),c._p=new Promise(function(u,d){c.onload=u,c.onerror=d}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,ks(i,t,n)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}}function M4(e,t){Tr.X(e,t);var r=mo;if(r&&e){var n=Ga(r).hoistableScripts,a=po(e),o=n.get(a);o||(o=r.querySelector(Zi(a)),o||(e=ce({src:e,async:!0},t),(t=Dt.get(a))&&Mm(e,t),o=r.createElement("script"),Fe(o),qe(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function E4(e,t){Tr.M(e,t);var r=mo;if(r&&e){var n=Ga(r).hoistableScripts,a=po(e),o=n.get(a);o||(o=r.querySelector(Zi(a)),o||(e=ce({src:e,async:!0,type:"module"},t),(t=Dt.get(a))&&Mm(e,t),o=r.createElement("script"),Fe(o),qe(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o))}}function ah(e,t,r,n){var a=(a=Ir.current)?Qs(a):null;if(!a)throw Error(C(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=lo(r.href),r=Ga(a).hoistableStyles,n=r.get(t),n||(n={type:"style",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=lo(r.href);var o=Ga(a).hoistableStyles,i=o.get(e);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,i),(o=a.querySelector(Ki(e)))&&!o._p&&(i.instance=o,i.state.loading=5),Dt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Dt.set(e,r),o||C4(a,e,r,i.state))),t&&n===null)throw Error(C(528,""));return i}if(t&&n!==null)throw Error(C(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=po(r),r=Ga(a).hoistableScripts,n=r.get(t),n||(n={type:"script",instance:null,count:0,state:null},r.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(C(444,e))}}function lo(e){return'href="'+At(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function Lb(e){return ce({},e,{"data-precedence":e.precedence,precedence:null})}function C4(e,t,r,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),qe(t,"link",r),Fe(t),e.head.appendChild(t))}function po(e){return'[src="'+At(e)+'"]'}function Zi(e){return"script[async]"+e}function oh(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+At(r.href)+'"]');if(n)return t.instance=n,Fe(n),n;var a=ce({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),qe(n,"style",a),ks(n,r.precedence,e),t.instance=n;case"stylesheet":a=lo(r.href);var o=e.querySelector(Ki(a));if(o)return t.state.loading|=4,t.instance=o,Fe(o),o;n=Lb(r),(a=Dt.get(a))&&Am(n,a),o=(e.ownerDocument||e).createElement("link"),Fe(o);var i=o;return i._p=new Promise(function(l,c){i.onload=l,i.onerror=c}),qe(o,"link",n),t.state.loading|=4,ks(o,r.precedence,e),t.instance=o;case"script":return o=po(r.src),(a=e.querySelector(Zi(o)))?(t.instance=a,Fe(a),a):(n=r,(a=Dt.get(o))&&(n=ce({},r),Mm(n,a)),e=e.ownerDocument||e,a=e.createElement("script"),Fe(a),qe(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(C(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,ks(n,r.precedence,e));return t.instance}function ks(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,i=0;i<n.length;i++){var l=n[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Am(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ss=null;function ih(e,t,r){if(Ss===null){var n=new Map,a=Ss=new Map;a.set(r,n)}else a=Ss,n=a.get(r),n||(n=new Map,a.set(r,n));if(n.has(e))return n;for(n.set(e,null),r=r.getElementsByTagName(e),a=0;a<r.length;a++){var o=r[a];if(!(o[Fi]||o[Xe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var i=o.getAttribute(t)||"";i=e+i;var l=n.get(i);l?l.push(o):n.set(i,[o])}}return n}function lh(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function D4(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ub(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ci=null;function R4(){}function V4(e,t,r){if(Ci===null)throw Error(C(475));var n=Ci;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=lo(r.href),o=e.querySelector(Ki(a));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Is.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,Fe(o);return}o=e.ownerDocument||e,r=Lb(r),(a=Dt.get(a))&&Am(r,a),o=o.createElement("link"),Fe(o);var i=o;i._p=new Promise(function(l,c){i.onload=l,i.onerror=c}),qe(o,"link",r),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Is.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function O4(){if(Ci===null)throw Error(C(475));var e=Ci;return e.stylesheets&&e.count===0&&_f(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&_f(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Is(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ws=null;function _f(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ws=new Map,t.forEach(z4,e),Ws=null,Is.call(e))}function z4(e,t){if(!(t.state.loading&4)){var r=Ws.get(e);if(r)var n=r.get(null);else{r=new Map,Ws.set(e,r);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}a=t.instance,i=a.getAttribute("data-precedence"),o=r.get(i)||n,o===n&&r.set(null,a),r.set(i,a),this.count++,n=Is.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Di={$$typeof:mr,Provider:null,Consumer:null,_currentValue:zn,_currentValue2:zn,_threadCount:0};function _4(e,t,r,n,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.hiddenUpdates=fd(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function jb(e,t,r,n,a,o,i,l,c,u,d,m){return e=new _4(e,t,r,i,l,c,u,m),t=1,o===!0&&(t|=24),o=dt(3,null,null,t),e.current=o,o.stateNode=e,t=tm(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:r,cache:t},nm(o),e}function Hb(e){return e?(e=La,e):La}function Gb(e,t,r,n,a,o){a=Hb(a),n.context===null?n.context=a:n.pendingContext=a,n=Wr(t),n.payload={element:r},o=o===void 0?null:o,o!==null&&(n.callback=o),r=Jr(e,n,t),r!==null&&(gt(r,e,t),di(r,e,t))}function sh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Em(e,t){sh(e,t),(e=e.alternate)&&sh(e,t)}function qb(e){if(e.tag===13){var t=uo(e,67108864);t!==null&&gt(t,e,67108864),Em(e,67108864)}}var Js=!0;function B4(e,t,r,n){var a=L.T;L.T=null;var o=ee.p;try{ee.p=2,Cm(e,t,r,n)}finally{ee.p=o,L.T=a}}function $4(e,t,r,n){var a=L.T;L.T=null;var o=ee.p;try{ee.p=8,Cm(e,t,r,n)}finally{ee.p=o,L.T=a}}function Cm(e,t,r,n){if(Js){var a=Bf(n);if(a===null)Ud(e,t,n,ec,r),ch(e,n);else if(L4(a,e,t,r,n))n.stopPropagation();else if(ch(e,n),t&4&&-1<F4.indexOf(e)){for(;a!==null;){var o=co(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var i=Rn(o.pendingLanes);if(i!==0){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var c=1<<31-mt(i);l.entanglements[1]|=c,i&=~c}Jt(o),(re&6)===0&&(qs=Qt()+500,Xi(0,!1))}}break;case 13:l=uo(o,2),l!==null&&gt(l,o,2),dc(),Em(o,2)}if(o=Bf(n),o===null&&Ud(e,t,n,ec,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else Ud(e,t,n,null,r)}}function Bf(e){return e=Yf(e),Dm(e)}var ec=null;function Dm(e){if(ec=null,e=Oa(e),e!==null){var t=zi(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=gh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ec=e,null}function Yb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(N5()){case xh:return 2;case yh:return 8;case Es:case A5:return 32;case wh:return 268435456;default:return 32}default:return 32}}var $f=!1,rn=null,nn=null,an=null,Ri=new Map,Vi=new Map,Pr=[],F4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ch(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function ei(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=co(t),t!==null&&qb(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function L4(e,t,r,n,a){switch(t){case"focusin":return rn=ei(rn,e,t,r,n,a),!0;case"dragenter":return nn=ei(nn,e,t,r,n,a),!0;case"mouseover":return an=ei(an,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Ri.set(o,ei(Ri.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,Vi.set(o,ei(Vi.get(o)||null,e,t,r,n,a)),!0}return!1}function Pb(e){var t=Oa(e.target);if(t!==null){var r=zi(t);if(r!==null){if(t=r.tag,t===13){if(t=gh(r),t!==null){e.blockedOn=t,z5(e.priority,function(){if(r.tag===13){var n=pt();n=jf(n);var a=uo(r,n);a!==null&&gt(a,r,n),Em(r,n)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Bf(e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Jd=n,r.target.dispatchEvent(n),Jd=null}else return t=co(r),t!==null&&qb(t),e.blockedOn=r,!1;t.shift()}return!0}function uh(e,t,r){Ts(e)&&r.delete(t)}function U4(){$f=!1,rn!==null&&Ts(rn)&&(rn=null),nn!==null&&Ts(nn)&&(nn=null),an!==null&&Ts(an)&&(an=null),Ri.forEach(uh),Vi.forEach(uh)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,$f||($f=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,U4)))}var ds=null;function dh(e){ds!==e&&(ds=e,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,function(){ds===e&&(ds=null);for(var t=0;t<e.length;t+=3){var r=e[t],n=e[t+1],a=e[t+2];if(typeof n!="function"){if(Dm(n||r)===null)continue;break}var o=co(r);o!==null&&(e.splice(t,3),t-=3,hf(o,{pending:!0,data:a,method:r.method,action:n},n,a))}}))}function Oi(e){function t(c){return us(c,e)}rn!==null&&us(rn,e),nn!==null&&us(nn,e),an!==null&&us(an,e),Ri.forEach(t),Vi.forEach(t);for(var r=0;r<Pr.length;r++){var n=Pr[r];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Pr.length&&(r=Pr[0],r.blockedOn===null);)Pb(r),r.blockedOn===null&&Pr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(n=0;n<r.length;n+=3){var a=r[n],o=r[n+1],i=a[at]||null;if(typeof o=="function")i||dh(r);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[at]||null)l=i.formAction;else if(Dm(a)!==null)continue}else l=i.action;typeof l=="function"?r[n+1]=l:(r.splice(n,3),n-=3),dh(r)}}}function Rm(e){this._internalRoot=e}gc.prototype.render=Rm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));var r=t.current,n=pt();Gb(r,n,e,t,null,null)};gc.prototype.unmount=Rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gb(e.current,2,null,e,null,null),dc(),t[so]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ah();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Pr.length&&t!==0&&t<Pr[r].priority;r++);Pr.splice(r,0,e),r===0&&Pb(e)}};var fh=mh.version;if(fh!=="19.1.0")throw Error(C(527,fh,"19.1.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=b5(t),e=e!==null?hh(e):null,e=e===null?null:e.stateNode,e};var j4={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ti=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ti.isDisabled&&ti.supportsFiber))try{_i=ti.inject(j4),ft=ti}catch{}var ti;hc.createRoot=function(e,t){if(!ph(e))throw Error(C(299));var r=!1,n="",a=jv,o=Hv,i=Gv,l=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(l=t.unstable_transitionCallbacks)),t=jb(e,1,!1,null,null,r,n,a,o,i,l,null),e[so]=t.current,Nm(e),new Rm(t)};hc.hydrateRoot=function(e,t,r){if(!ph(e))throw Error(C(299));var n=!1,a="",o=jv,i=Hv,l=Gv,c=null,u=null;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onUncaughtError!==void 0&&(o=r.onUncaughtError),r.onCaughtError!==void 0&&(i=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(c=r.unstable_transitionCallbacks),r.formState!==void 0&&(u=r.formState)),t=jb(e,1,!0,t,r??null,n,a,o,i,l,c,u),t.context=Hb(null),r=t.current,n=pt(),n=jf(n),a=Wr(n),a.callback=null,Jr(r,a,n),r=n,t.current.lanes=r,$i(t,r),Jt(t),e[so]=t.current,Nm(e),new gc(t)};hc.version="19.1.0"});var Qb=qt((o8,Zb)=>{"use strict";function Kb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kb)}catch(e){console.error(e)}}Kb(),Zb.exports=Xb()});var Wb=qt(vc=>{"use strict";var H4=Symbol.for("react.transitional.element"),G4=Symbol.for("react.fragment");function Ib(e,t,r){var n=null;if(r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),"key"in t){r={};for(var a in t)a!=="key"&&(r[a]=t[a])}else r=t;return t=r.ref,{$$typeof:H4,type:e,key:n,ref:t!==void 0?t:null,props:r}}vc.Fragment=G4;vc.jsx=Ib;vc.jsxs=Ib});var er=qt((l8,Jb)=>{"use strict";Jb.exports=Wb()});var rF=G(W(),1),z2=G(Qb(),1);var Fl=G(er(),1),Ht=G(W(),1);var ex=G(W(),1),go=(0,ex.createContext)({});var tx=G(W(),1);function dn(e){let t=(0,tx.useRef)(null);return t.current===null&&(t.current=e()),t.current}var bc=G(W(),1);var rx=typeof window<"u";var ho=rx?bc.useLayoutEffect:bc.useEffect;var Up=G(er(),1),u1=G(W(),1),Tn=G(W(),1);var nx=G(W(),1),fn=(0,nx.createContext)(null);var s1=G(er(),1);function Zn(e,t){e.indexOf(t)===-1&&e.push(t)}function mn(e,t){let r=e.indexOf(t);r>-1&&e.splice(r,1)}var ze=(e,t,r)=>r>t?t:r<e?e:r;var Nr=()=>{},it=()=>{};var Je={};var Qi=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);var Ii=e=>typeof e=="object"&&e!==null;var Wi=e=>/^0[^.\s]+$/u.test(e);function Ji(e){let t;return()=>(t===void 0&&(t=e()),t)}var be=e=>e;var Ut=(...e)=>e.reduce((t,r)=>n=>r(t(n)));var tr=(e,t,r)=>{let n=t-e;return n?(r-e)/n:1};var Ar=class{constructor(){this.subscriptions=[]}add(t){return Zn(this.subscriptions,t),()=>mn(this.subscriptions,t)}notify(t,r,n){let a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](t,r,n);else for(let o=0;o<a;o++){let i=this.subscriptions[o];i&&i(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var Me=e=>e*1e3,je=e=>e/1e3;var el=(e,t)=>t?e*(1e3/t):0;var ax=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,q4=1e-7,Y4=12;function P4(e,t,r,n,a){let o,i,l=0;do i=t+(r-t)/2,o=ax(i,n,a)-e,o>0?r=i:t=i;while(Math.abs(o)>q4&&++l<Y4);return i}function pn(e,t,r,n){if(e===t&&r===n)return be;let a=o=>P4(o,0,1,e,r);return o=>o===0||o===1?o:ax(a(o),t,n)}var xc=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2;var yc=e=>t=>1-e(1-t);var wc=pn(.33,1.53,.69,.99),vo=yc(wc),tl=xc(vo);var rl=e=>e>=1?1:(e*=2)<1?.5*vo(e):.5*(2-Math.pow(2,-10*(e-1)));var nl=e=>1-Math.sin(Math.acos(e)),al=yc(nl),ol=xc(nl);var Vm=pn(.42,0,1,1),Om=pn(0,0,.58,1),il=pn(.42,0,.58,1);var zm=e=>Array.isArray(e)&&typeof e[0]!="number";var ll=e=>Array.isArray(e)&&typeof e[0]=="number";var ox={linear:be,easeIn:Vm,easeInOut:il,easeOut:Om,circIn:nl,circInOut:ol,circOut:al,backIn:vo,backInOut:tl,backOut:wc,anticipate:rl},X4=e=>typeof e=="string",kc=e=>{if(ll(e)){it(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,r,n,a]=e;return pn(t,r,n,a)}else if(X4(e))return it(ox[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),ox[e];return e};var sl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ix(e){let t=new Set,r=new Set,n=!1,a=!1,o=new WeakSet,i={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(i)}let c={schedule:(u,d=!1,m=!1)=>{let p=m&&n?t:r;return d&&o.add(u),p.add(u),u},cancel:u=>{r.delete(u),o.delete(u)},process:u=>{if(i=u,n){a=!0;return}n=!0;let d=t;t=r,r=d,t.forEach(l),t.clear(),n=!1,a&&(a=!1,c.process(u))}};return c}var K4=40;function Sc(e,t){let r=!1,n=!0,a={delta:0,timestamp:0,isProcessing:!1},o=()=>r=!0,i=sl.reduce((v,w)=>(v[w]=ix(o),v),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:m,preRender:f,render:p,postRender:b}=i,x=()=>{let v=Je.useManualTiming,w=v?a.timestamp:performance.now();r=!1,v||(a.delta=n?1e3/60:Math.max(Math.min(w-a.timestamp,K4),1)),a.timestamp=w,a.isProcessing=!0,l.process(a),c.process(a),u.process(a),d.process(a),m.process(a),f.process(a),p.process(a),b.process(a),a.isProcessing=!1,r&&t&&(n=!1,e(x))},y=()=>{r=!0,n=!0,a.isProcessing||e(x)};return{schedule:sl.reduce((v,w)=>{let k=i[w];return v[w]=(A,N=!1,S=!1)=>(r||y(),k.schedule(A,N,S)),v},{}),cancel:v=>{for(let w=0;w<sl.length;w++)i[sl[w]].cancel(v)},state:a,steps:i}}var{schedule:H,cancel:lt,state:Te,steps:cl}=Sc(typeof requestAnimationFrame<"u"?requestAnimationFrame:be,!0);var Tc;function Z4(){Tc=void 0}var xe={now:()=>(Tc===void 0&&xe.set(Te.isProcessing||Je.useManualTiming?Te.timestamp:performance.now()),Tc),set:e=>{Tc=e,queueMicrotask(Z4)}};var lx=e=>t=>typeof t=="string"&&t.startsWith(e),Nc=lx("--"),Q4=lx("var(--"),bo=e=>Q4(e)?I4.test(e.split("/*")[0].trim()):!1,I4=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function _m(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}var rr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Mr={...rr,transform:e=>ze(0,1,e)},ul={...rr,default:1};var gn=e=>Math.round(e*1e5)/1e5;var xo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sx(e){return e==null}var cx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var yo=(e,t)=>r=>!!(typeof r=="string"&&cx.test(r)&&r.startsWith(e)||t&&!sx(r)&&Object.prototype.hasOwnProperty.call(r,t)),Ac=(e,t,r)=>n=>{if(typeof n!="string")return n;let[a,o,i,l]=n.match(xo);return{[e]:parseFloat(a),[t]:parseFloat(o),[r]:parseFloat(i),alpha:l!==void 0?parseFloat(l):1}};var W4=e=>ze(0,255,e),Bm={...rr,transform:e=>Math.round(W4(e))},nr={test:yo("rgb","red"),parse:Ac("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+Bm.transform(e)+", "+Bm.transform(t)+", "+Bm.transform(r)+", "+gn(Mr.transform(n))+")"};function J4(e){let t="",r="",n="",a="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),a=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),a=e.substring(4,5),t+=t,r+=r,n+=n,a+=a),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:a?parseInt(a,16)/255:1}}var dl={test:yo("#"),parse:J4,transform:nr.transform};var fl=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rt=fl("deg"),Ze=fl("%"),_=fl("px"),$m=fl("vh"),Fm=fl("vw"),Mc={...Ze,parse:e=>Ze.parse(e)/100,transform:e=>Ze.transform(e*100)};var hn={test:yo("hsl","hue"),parse:Ac("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+Ze.transform(gn(t))+", "+Ze.transform(gn(r))+", "+gn(Mr.transform(n))+")"};var ge={test:e=>nr.test(e)||dl.test(e)||hn.test(e),parse:e=>nr.test(e)?nr.parse(e):hn.test(e)?hn.parse(e):dl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?nr.transform(e):hn.transform(e),getAnimatableNone:e=>{let t=ge.parse(e);return t.alpha=0,ge.transform(t)}};var ux=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ek(e){return isNaN(e)&&typeof e=="string"&&(e.match(xo)?.length||0)+(e.match(ux)?.length||0)>0}var fx="number",mx="color",tk="var",rk="var(",dx="${}",nk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vn(e){let t=e.toString(),r=[],n={color:[],number:[],var:[]},a=[],o=0,l=t.replace(nk,c=>(ge.test(c)?(n.color.push(o),a.push(mx),r.push(ge.parse(c))):c.startsWith(rk)?(n.var.push(o),a.push(tk),r.push(c)):(n.number.push(o),a.push(fx),r.push(parseFloat(c))),++o,dx)).split(dx);return{values:r,split:l,indexes:n,types:a}}function ak(e){return vn(e).values}function px({split:e,types:t}){let r=e.length;return n=>{let a="";for(let o=0;o<r;o++)if(a+=e[o],n[o]!==void 0){let i=t[o];i===fx?a+=gn(n[o]):i===mx?a+=ge.transform(n[o]):a+=n[o]}return a}}function ok(e){return px(vn(e))}var ik=e=>typeof e=="number"?0:ge.test(e)?ge.getAnimatableNone(e):e,lk=(e,t)=>typeof e=="number"?t?.trim().endsWith("/")?e:0:ik(e);function sk(e){let t=vn(e);return px(t)(t.values.map((n,a)=>lk(n,t.split[a])))}var _e={test:ek,parse:ak,createTransformer:ok,getAnimatableNone:sk};function Lm(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function gx({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let a=0,o=0,i=0;if(!t)a=o=i=r;else{let l=r<.5?r*(1+t):r+t-r*t,c=2*r-l;a=Lm(c,l,e+1/3),o=Lm(c,l,e),i=Lm(c,l,e-1/3)}return{red:Math.round(a*255),green:Math.round(o*255),blue:Math.round(i*255),alpha:n}}function wo(e,t){return r=>r>0?t:e}var Y=(e,t,r)=>e+(t-e)*r;var Um=(e,t,r)=>{let n=e*e,a=r*(t*t-n)+n;return a<0?0:Math.sqrt(a)},ck=[dl,nr,hn],uk=e=>ck.find(t=>t.test(e));function hx(e){let t=uk(e);if(Nr(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let r=t.parse(e);return t===hn&&(r=gx(r)),r}var jm=(e,t)=>{let r=hx(e),n=hx(t);if(!r||!n)return wo(e,t);let a={...r};return o=>(a.red=Um(r.red,n.red,o),a.green=Um(r.green,n.green,o),a.blue=Um(r.blue,n.blue,o),a.alpha=Y(r.alpha,n.alpha,o),nr.transform(a))};var Ec=new Set(["none","hidden"]);function vx(e,t){return Ec.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}function dk(e,t){return r=>Y(e,t,r)}function Cc(e){return typeof e=="number"?dk:typeof e=="string"?bo(e)?wo:ge.test(e)?jm:pk:Array.isArray(e)?bx:typeof e=="object"?ge.test(e)?jm:fk:wo}function bx(e,t){let r=[...e],n=r.length,a=e.map((o,i)=>Cc(o)(o,t[i]));return o=>{for(let i=0;i<n;i++)r[i]=a[i](o);return r}}function fk(e,t){let r={...e,...t},n={};for(let a in r)e[a]!==void 0&&t[a]!==void 0&&(n[a]=Cc(e[a])(e[a],t[a]));return a=>{for(let o in n)r[o]=n[o](a);return r}}function mk(e,t){let r=[],n={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){let o=t.types[a],i=e.indexes[o][n[o]],l=e.values[i]??0;r[a]=l,n[o]++}return r}var pk=(e,t)=>{let r=_e.createTransformer(t),n=vn(e),a=vn(t);return n.indexes.var.length===a.indexes.var.length&&n.indexes.color.length===a.indexes.color.length&&n.indexes.number.length>=a.indexes.number.length?Ec.has(e)&&!a.values.length||Ec.has(t)&&!n.values.length?vx(e,t):Ut(bx(mk(n,a),a.values),r):(Nr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),wo(e,t))};function Dc(e,t,r){return typeof e=="number"&&typeof t=="number"&&typeof r=="number"?Y(e,t,r):Cc(e)(e,t)}var xx=e=>{let t=({timestamp:r})=>e(r);return{start:(r=!0)=>H.update(t,r),stop:()=>lt(t),now:()=>Te.isProcessing?Te.timestamp:xe.now()}};var Rc=(e,t,r=10)=>{let n="",a=Math.max(Math.round(t/r),2);for(let o=0;o<a;o++)n+=Math.round(e(o/(a-1))*1e4)/1e4+", ";return`linear(${n.substring(0,n.length-2)})`};function ko(e){let t=0,r=50,n=e.next(t);for(;!n.done&&t<2e4;)t+=r,n=e.next(t);return t>=2e4?1/0:t}function yx(e,t=100,r){let n=r({...e,keyframes:[0,t]}),a=Math.min(ko(n),2e4);return{type:"keyframes",ease:o=>n.next(a*o).value/t,duration:je(a)}}var ye={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function qm(e,t){return e*Math.sqrt(1-t*t)}var gk=12;function hk(e,t,r){let n=r;for(let a=1;a<gk;a++)n=n-e(n)/t(n);return n}var Gm=.001;function vk({duration:e=ye.duration,bounce:t=ye.bounce,velocity:r=ye.velocity,mass:n=ye.mass}){let a,o;Nr(e<=Me(ye.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let i=1-t;i=ze(ye.minDamping,ye.maxDamping,i),e=ze(ye.minDuration,ye.maxDuration,je(e)),i<1?(a=u=>{let d=u*i,m=d*e,f=d-r,p=qm(u,i),b=Math.exp(-m);return Gm-f/p*b},o=u=>{let m=u*i*e,f=m*r+r,p=Math.pow(i,2)*Math.pow(u,2)*e,b=Math.exp(-m),x=qm(Math.pow(u,2),i);return(-a(u)+Gm>0?-1:1)*((f-p)*b)/x}):(a=u=>{let d=Math.exp(-u*e),m=(u-r)*e+1;return-Gm+d*m},o=u=>{let d=Math.exp(-u*e),m=(r-u)*(e*e);return d*m});let l=5/e,c=hk(a,o,l);if(e=Me(e),isNaN(c))return{stiffness:ye.stiffness,damping:ye.damping,duration:e};{let u=Math.pow(c,2)*n;return{stiffness:u,damping:i*2*Math.sqrt(n*u),duration:e}}}var bk=["duration","bounce"],xk=["stiffness","damping","mass"];function wx(e,t){return t.some(r=>e[r]!==void 0)}function yk(e){let t={velocity:ye.velocity,stiffness:ye.stiffness,damping:ye.damping,mass:ye.mass,isResolvedFromDuration:!1,...e};if(!wx(e,xk)&&wx(e,bk))if(t.velocity=0,e.visualDuration){let r=e.visualDuration,n=2*Math.PI/(r*1.2),a=n*n,o=2*ze(.05,1,1-(e.bounce||0))*Math.sqrt(a);t={...t,mass:ye.mass,stiffness:a,damping:o}}else{let r=vk({...e,velocity:0});t={...t,...r,mass:ye.mass},t.isResolvedFromDuration=!0}return t}function So(e=ye.visualDuration,t=ye.bounce){let r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:n,restDelta:a}=r,o=r.keyframes[0],i=r.keyframes[r.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:m,velocity:f,isResolvedFromDuration:p}=yk({...r,velocity:-je(r.velocity||0)}),b=f||0,x=u/(2*Math.sqrt(c*d)),y=i-o,g=je(Math.sqrt(c/d)),h=Math.abs(y)<5;n||(n=h?ye.restSpeed.granular:ye.restSpeed.default),a||(a=h?ye.restDelta.granular:ye.restDelta.default);let v,w,k,A,N,S;if(x<1)k=qm(g,x),A=(b+x*g*y)/k,v=E=>{let V=Math.exp(-x*g*E);return i-V*(A*Math.sin(k*E)+y*Math.cos(k*E))},N=x*g*A+y*k,S=x*g*y-A*k,w=E=>Math.exp(-x*g*E)*(N*Math.sin(k*E)+S*Math.cos(k*E));else if(x===1){v=V=>i-Math.exp(-g*V)*(y+(b+g*y)*V);let E=b+g*y;w=V=>Math.exp(-g*V)*(g*E*V-b)}else{let E=g*Math.sqrt(x*x-1);v=R=>{let z=Math.exp(-x*g*R),U=Math.min(E*R,300);return i-z*((b+x*g*y)*Math.sinh(U)+E*y*Math.cosh(U))/E};let V=(b+x*g*y)/E,F=x*g*V-y*E,M=x*g*y-V*E;w=R=>{let z=Math.exp(-x*g*R),U=Math.min(E*R,300);return z*(F*Math.sinh(U)+M*Math.cosh(U))}}let D={calculatedDuration:p&&m||null,velocity:E=>Me(w(E)),next:E=>{if(!p&&x<1){let F=Math.exp(-x*g*E),M=Math.sin(k*E),R=Math.cos(k*E),z=i-F*(A*M+y*R),U=Me(F*(N*M+S*R));return l.done=Math.abs(U)<=n&&Math.abs(i-z)<=a,l.value=l.done?i:z,l}let V=v(E);if(p)l.done=E>=m;else{let F=Me(w(E));l.done=Math.abs(F)<=n&&Math.abs(i-V)<=a}return l.value=l.done?i:V,l},toString:()=>{let E=Math.min(ko(D),2e4),V=Rc(F=>D.next(E*F).value,E,30);return E+"ms "+V},toTransition:()=>{}};return D}So.applyToOptions=e=>{let t=yx(e,100,So);return e.ease=t.ease,e.duration=Me(t.duration),e.type="keyframes",e};var wk=5;function Vc(e,t,r){let n=Math.max(t-wk,0);return el(r-e(n),t-n)}function ml({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:i,min:l,max:c,restDelta:u=.5,restSpeed:d}){let m=e[0],f={done:!1,value:m},p=S=>l!==void 0&&S<l||c!==void 0&&S>c,b=S=>l===void 0?c:c===void 0||Math.abs(l-S)<Math.abs(c-S)?l:c,x=r*t,y=m+x,g=i===void 0?y:i(y);g!==y&&(x=g-m);let h=S=>-x*Math.exp(-S/n),v=S=>g+h(S),w=S=>{let D=h(S),E=v(S);f.done=Math.abs(D)<=u,f.value=f.done?g:E},k,A,N=S=>{p(f.value)&&(k=S,A=So({keyframes:[f.value,b(f.value)],velocity:Vc(v,S,f.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return N(0),{calculatedDuration:null,next:S=>{let D=!1;return!A&&k===void 0&&(D=!0,w(S),N(S)),k!==void 0&&S>=k?A.next(S-k):(!D&&w(S),f)}}}function kk(e,t,r){let n=[],a=r||Je.mix||Dc,o=e.length-1;for(let i=0;i<o;i++){let l=a(e[i],e[i+1]);if(t){let c=Array.isArray(t)?t[i]||be:t;l=Ut(c,l)}n.push(l)}return n}function kx(e,t,{clamp:r=!0,ease:n,mixer:a}={}){let o=e.length;if(it(o===t.length,"Both input and output ranges must be the same length","range-length"),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];let i=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let l=kk(t,n,a),c=l.length,u=d=>{if(i&&d<e[0])return t[0];let m=0;if(c>1)for(;m<e.length-2&&!(d<e[m+1]);m++);let f=tr(e[m],e[m+1],d);return l[m](f)};return r?d=>u(ze(e[0],e[o-1],d)):u}function Sx(e,t){let r=e[e.length-1];for(let n=1;n<=t;n++){let a=tr(0,t,n);e.push(Y(r,1,a))}}function Tx(e){let t=[0];return Sx(t,e.length-1),t}function Nx(e,t){return e.map(r=>r*t)}function Sk(e,t){return e.map(()=>t||il).splice(0,e.length-1)}function Qn({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){let a=zm(n)?n.map(kc):kc(n),o={done:!1,value:t[0]},i=Nx(r&&r.length===t.length?r:Tx(t),e),l=kx(i,t,{ease:Array.isArray(a)?a:Sk(t,a)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}var Tk=e=>e!==null;function bn(e,{repeat:t,repeatType:r="loop"},n,a=1){let o=e.filter(Tk),l=a<0||t&&r!=="loop"&&t%2===1?0:o.length-1;return!l||n===void 0?o[l]:n}var Nk={decay:ml,inertia:ml,tween:Qn,keyframes:Qn,spring:So};function Oc(e){typeof e.type=="string"&&(e.type=Nk[e.type])}var xn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,r){return this.finished.then(t,r)}};var Ak=e=>e/100,Er=class extends xn{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:r}=this.options;r&&r.updatedAt!==xe.now()&&this.tick(xe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){let{options:t}=this;Oc(t);let{type:r=Qn,repeat:n=0,repeatDelay:a=0,repeatType:o,velocity:i=0}=t,{keyframes:l}=t,c=r||Qn;c!==Qn&&typeof l[0]!="number"&&(this.mixKeyframes=Ut(Ak,Dc(l[0],l[1])),l=[0,100]);let u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-i})),u.calculatedDuration===null&&(u.calculatedDuration=ko(u));let{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+a,this.totalDuration=this.resolvedDuration*(n+1)-a,this.generator=u}updateTime(t){let r=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(t,r=!1){let{generator:n,totalDuration:a,mixKeyframes:o,mirroredGenerator:i,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return n.next(0);let{delay:u=0,keyframes:d,repeat:m,repeatType:f,repeatDelay:p,type:b,onUpdate:x,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-a/this.speed,this.startTime)),r?this.currentTime=t:this.updateTime(t);let g=this.currentTime-u*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?g<0:g>a;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let v=this.currentTime,w=n;if(m){let S=Math.min(this.currentTime,a)/l,D=Math.floor(S),E=S%1;!E&&S>=1&&(E=1),E===1&&D--,D=Math.min(D,m+1),D%2&&(f==="reverse"?(E=1-E,p&&(E-=p/l)):f==="mirror"&&(w=i)),v=ze(0,1,E)*l}let k;h?(this.delayState.value=d[0],k=this.delayState):k=w.next(v),o&&!h&&(k.value=o(k.value));let{done:A}=k;!h&&c!==null&&(A=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);let N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return N&&b!==ml&&(k.value=bn(d,this.options,y,this.speed)),x&&x(k.value),N&&this.finish(),k}then(t,r){return this.finished.then(t,r)}get duration(){return je(this.calculatedDuration)}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+je(t)}get time(){return je(this.currentTime)}set time(t){t=Me(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){let t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);let r=this.generator.next(t).value;return Vc(n=>this.generator.next(n).value,t,r)}get speed(){return this.playbackSpeed}set speed(t){let r=this.playbackSpeed!==t;r&&this.driver&&this.updateTime(xe.now()),this.playbackSpeed=t,r&&this.driver&&(this.time=je(this.currentTime))}play(){if(this.isStopped)return;let{driver:t=xx,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),this.options.onPlay?.();let n=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=n):this.holdTime!==null?this.startTime=n-this.holdTime:this.startTime||(this.startTime=r??n),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(xe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}};function Ax(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var In=e=>e*180/Math.PI,Ym=e=>{let t=In(Math.atan2(e[1],e[0]));return Pm(t)},Mk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ym,rotateZ:Ym,skewX:e=>In(Math.atan(e[1])),skewY:e=>In(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Pm=e=>(e=e%360,e<0&&(e+=360),e),Mx=Ym,Ex=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Cx=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ek={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ex,scaleY:Cx,scale:e=>(Ex(e)+Cx(e))/2,rotateX:e=>Pm(In(Math.atan2(e[6],e[5]))),rotateY:e=>Pm(In(Math.atan2(-e[2],e[0]))),rotateZ:Mx,rotate:Mx,skewX:e=>In(Math.atan(e[4])),skewY:e=>In(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function zc(e){return e.includes("scale")?1:0}function _c(e,t){if(!e||e==="none")return zc(t);let r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),n,a;if(r)n=Ek,a=r;else{let l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=Mk,a=l}if(!a)return zc(t);let o=n[t],i=a[1].split(",").map(Ck);return typeof o=="function"?o(i):i[o]}var Dx=(e,t)=>{let{transform:r="none"}=getComputedStyle(e);return _c(r,t)};function Ck(e){return parseFloat(e.trim())}var ar=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vt=new Set([...ar,"pathRotation"]);var Xm=e=>e===rr||e===_,Dk=new Set(["x","y","z"]),Rk=ar.filter(e=>!Dk.has(e));function Rx(e){let t=[];return Rk.forEach(r=>{let n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t}var Cr={width:({x:e},{paddingLeft:t="0",paddingRight:r="0",boxSizing:n})=>{let a=e.max-e.min;return n==="border-box"?a:a-parseFloat(t)-parseFloat(r)},height:({y:e},{paddingTop:t="0",paddingBottom:r="0",boxSizing:n})=>{let a=e.max-e.min;return n==="border-box"?a:a-parseFloat(t)-parseFloat(r)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>_c(t,"x"),y:(e,{transform:t})=>_c(t,"y")};Cr.translateX=Cr.x;Cr.translateY=Cr.y;var Wn=new Set,Km=!1,Zm=!1,Qm=!1;function Vx(){if(Zm){let e=Array.from(Wn).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),r=new Map;t.forEach(n=>{let a=Rx(n);a.length&&(r.set(n,a),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();let a=r.get(n);a&&a.forEach(([o,i])=>{n.getValue(o)?.set(i)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Zm=!1,Km=!1,Wn.forEach(e=>e.complete(Qm)),Wn.clear()}function Ox(){Wn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Zm=!0)})}function zx(){Qm=!0,Ox(),Vx(),Qm=!1}var yn=class{constructor(t,r,n,a,o,i=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=n,this.motionValue=a,this.element=o,this.isAsync=i}scheduleResolve(){this.state="scheduled",this.isAsync?(Wn.add(this),Km||(Km=!0,H.read(Ox),H.resolveKeyframes(Vx))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:r,element:n,motionValue:a}=this;if(t[0]===null){let o=a?.get(),i=t[t.length-1];if(o!==void 0)t[0]=o;else if(n&&r){let l=n.readValue(r,i);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=i),a&&o===void 0&&a.set(t[0])}Ax(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Wn.delete(this)}cancel(){this.state==="scheduled"&&(Wn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var _x=e=>e.startsWith("--");function Bc(e,t,r){_x(t)?e.style.setProperty(t,r):e.style[t]=r}var Bx={};function $c(e,t){let r=Ji(e);return()=>Bx[t]??r()}var $x=$c(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Fc=$c(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var Jn=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`;var Im={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jn([0,.65,.55,1]),circOut:Jn([.55,0,1,.45]),backIn:Jn([.31,.01,.66,-.59]),backOut:Jn([.33,1.53,.69,.99])};function Wm(e,t){if(e)return typeof e=="function"?Fc()?Rc(e,t):"ease-out":ll(e)?Jn(e):Array.isArray(e)?e.map(r=>Wm(r,t)||Im.easeOut):Im[e]}function Fx(e,t,r,{delay:n=0,duration:a=300,repeat:o=0,repeatType:i="loop",ease:l="easeOut",times:c}={},u=void 0){let d={[t]:r};c&&(d.offset=c);let m=Wm(l,a);Array.isArray(m)&&(d.easing=m);let f={delay:n,duration:a,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:o+1,direction:i==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Lc(e){return typeof e=="function"&&"applyToOptions"in e}function Lx({type:e,...t}){return Lc(e)&&Fc()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}var To=class extends xn{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;let{element:r,name:n,keyframes:a,pseudoElement:o,allowFlatten:i=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=i,this.options=t,it(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let u=Lx(t);this.animation=Fx(r,n,a,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){let d=bn(a,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),Bc(r,n,d),this.animation.cancel()}c?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){let t=this.animation.effect?.getComputedTiming?.().duration||0;return je(Number(t))}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+je(t)}get time(){return je(Number(this.animation.currentTime)||0)}set time(t){let r=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Me(t),r&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:r,rangeEnd:n,observe:a}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&$x()?(this.animation.timeline=t,r&&(this.animation.rangeStart=r),n&&(this.animation.rangeEnd=n),be):a(this)}};var Ux={anticipate:rl,backInOut:tl,circInOut:ol};function Vk(e){return e in Ux}function jx(e){typeof e.ease=="string"&&Vk(e.ease)&&(e.ease=Ux[e.ease])}var Jm=10,Uc=class extends To{constructor(t){jx(t),Oc(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){let{motionValue:r,onUpdate:n,onComplete:a,element:o,...i}=this.options;if(!r)return;if(t!==void 0){r.set(t);return}let l=new Er({...i,autoplay:!1}),c=Math.max(Jm,xe.now()-this.startTime),u=ze(0,Jm,c-Jm),d=l.sample(c).value,{name:m}=this.options;o&&m&&Bc(o,m,d),r.setWithVelocity(l.sample(Math.max(0,c-u)).value,d,u),l.stop()}};var ep=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(_e.test(e)||e==="0")&&!e.startsWith("url("));function Ok(e){let t=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}function Hx(e,t,r,n){let a=e[0];if(a===null)return!1;if(t==="display"||t==="visibility")return!0;let o=e[e.length-1],i=ep(a,t),l=ep(o,t);return Nr(i===l,`You are trying to animate ${t} from "${a}" to "${o}". "${i?o:a}" is not an animatable value.`,"value-not-animatable"),!i||!l?!1:Ok(e)||(r==="spring"||Lc(r))&&n}function pl(e){e.duration=0,e.type="keyframes"}var jc=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);var zk=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Gx(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&zk.test(e[t]))return!0;return!1}var _k=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Bk=Ji(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function qx(e){let{motionValue:t,name:r,repeatDelay:n,repeatType:a,damping:o,type:i,keyframes:l}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:u,transformTemplate:d}=t.owner.getProps();return Bk()&&r&&(jc.has(r)||_k.has(r)&&Gx(l))&&(r!=="transform"||!d)&&!u&&!n&&a!=="mirror"&&o!==0&&i!=="inertia"}var $k=40,Hc=class extends xn{constructor({autoplay:t=!0,delay:r=0,type:n="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:i="loop",keyframes:l,name:c,motionValue:u,element:d,...m}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=xe.now();let f={autoplay:t,delay:r,type:n,repeat:a,repeatDelay:o,repeatType:i,name:c,motionValue:u,element:d,...m},p=d?.KeyframeResolver||yn;this.keyframeResolver=new p(l,(b,x,y)=>this.onKeyframesResolved(b,x,f,!y),c,u,d),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,r,n,a){this.keyframeResolver=void 0;let{name:o,type:i,velocity:l,delay:c,isHandoff:u,onUpdate:d}=n;this.resolvedAt=xe.now();let m=!0;Hx(t,o,i,l)||(m=!1,(Je.instantAnimations||!c)&&d?.(bn(t,n,r)),t[0]=t[t.length-1],pl(n),n.repeat=0);let p={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>$k?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...n,keyframes:t},b=m&&!u&&qx(p),x=p.motionValue?.owner?.current,y;if(b)try{y=new Uc({...p,element:x})}catch{y=new Er(p)}else y=new Er(p);y.finished.then(()=>{this.notifyFinished()}).catch(be),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,r){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),zx()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Gc(e,t,r,n=0,a=1){let o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),i=e.size,l=(i-1)*n;return typeof r=="function"?r(o,i):a===1?o*n:l-o*n}var Yx=30,Fk=e=>!isNaN(parseFloat(e)),Px={current:void 0},tp=class{constructor(t,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=n=>{let a=xe.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=xe.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Fk(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Ar);let n=this.events[t].add(r);return t==="change"?()=>{n(),H.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,r,n){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Px.current&&Px.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let t=xe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Yx)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,Yx);return el(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function jt(e,t){return new tp(e,t)}function ea(e,t){if(e?.inherit&&t){let{inherit:r,...n}=e;return{...t,...n}}return e}function No(e,t){let r=e?.[t]??e?.default??e;return r!==e?ea(r,e):r}var Lk={type:"spring",stiffness:500,damping:25,restSpeed:10},Uk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),jk={type:"keyframes",duration:.8},Hk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Xx=(e,{keyframes:t})=>t.length>2?jk:Vt.has(e)?e.startsWith("scale")?Uk(t[1]):Lk:Hk;var Gk=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Kx(e){for(let t in e)if(!Gk.has(t))return!0;return!1}var ta=(e,t,r,n={},a,o)=>i=>{let l=No(n,e)||{},c=l.delay||n.delay||0,{elapsed:u=0}=n;u=u-Me(c);let d={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{i(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:a};Kx(l)||Object.assign(d,Xx(e,d)),d.duration&&(d.duration=Me(d.duration)),d.repeatDelay&&(d.repeatDelay=Me(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let m=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(pl(d),d.delay===0&&(m=!0)),(Je.instantAnimations||Je.skipAnimations||a?.shouldSkipAnimations||l.skipAnimations)&&(m=!0,pl(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,m&&!o&&t.get()!==void 0){let f=bn(d.keyframes,l);if(f!==void 0){H.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new Er(d):new Hc(d)};var qk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Yk(e){let t=qk.exec(e);if(!t)return[,];let[,r,n,a]=t;return[`--${r??n}`,a]}var Pk=4;function rp(e,t,r=1){it(r<=Pk,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[n,a]=Yk(e);if(!n)return;let o=window.getComputedStyle(t).getPropertyValue(n);if(o){let i=o.trim();return Qi(i)?parseFloat(i):i}return bo(a)?rp(a,t,r+1):a}function Zx(e){let t=[{},{}];return e?.values.forEach((r,n)=>{t[0][n]=r.get(),t[1][n]=r.getVelocity()}),t}function ra(e,t,r,n){if(typeof t=="function"){let[a,o]=Zx(n);t=t(r!==void 0?r:e.custom,a,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){let[a,o]=Zx(n);t=t(r!==void 0?r:e.custom,a,o)}return t}function vt(e,t,r){let n=e.getProps();return ra(n,t,r!==void 0?r:n.custom,e)}var qc=new Set(["width","height","top","left","right","bottom",...ar]);var gl=e=>Array.isArray(e);function Xk(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,jt(r))}function Kk(e){return gl(e)?e[e.length-1]||0:e}function Qx(e,t){let r=vt(e,t),{transitionEnd:n={},transition:a={},...o}=r||{};o={...o,...n};for(let i in o){let l=Kk(o[i]);Xk(e,i,l)}}var ne=e=>!!(e&&e.getVelocity);function Ix(e){return!!(ne(e)&&e.add)}function Ao(e,t){let r=e.getValue("willChange");if(Ix(r))return r.add(t);if(!r&&Je.WillChange){let n=new Je.WillChange("auto");e.addValue("willChange",n),n.add(t)}}function Mo(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}var Wx="framerAppearId",hl="data-"+Mo(Wx);function Yc(e){return e.props[hl]}function Zk({protectedKeys:e,needsAnimating:t},r){let n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function Pc(e,t,{delay:r=0,transitionOverride:n,type:a}={}){let{transition:o,transitionEnd:i,...l}=t,c=e.getDefaultTransition();o=o?ea(o,c):c;let u=o?.reduceMotion,d=o?.skipAnimations;n&&(o=n);let m=[],f=a&&e.animationState&&e.animationState.getState()[a],p=o?.path;p&&p.animateVisualElement(e,l,o,r,m);for(let b in l){let x=e.getValue(b,e.latestValues[b]??null),y=l[b];if(y===void 0||f&&Zk(f,b))continue;let g={delay:r,...No(o||{},b)};d&&(g.skipAnimations=!0);let h=x.get();if(h!==void 0&&!x.isAnimating()&&!Array.isArray(y)&&y===h&&!g.velocity){H.update(()=>x.set(y));continue}let v=!1;if(window.MotionHandoffAnimation){let A=Yc(e);if(A){let N=window.MotionHandoffAnimation(A,b,H);N!==null&&(g.startTime=N,v=!0)}}Ao(e,b);let w=u??e.shouldReduceMotion;x.start(ta(b,x,y,w&&qc.has(b)?{type:!1}:g,e,v));let k=x.animation;k&&m.push(k)}if(i){let b=()=>H.update(()=>{i&&Qx(e,i)});m.length?Promise.all(m).then(b):b()}return m}function Xc(e,t,r={}){let n=vt(e,t,r.type==="exit"?e.presenceContext?.custom:void 0),{transition:a=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(a=r.transitionOverride);let o=n?()=>Promise.all(Pc(e,n,r)):()=>Promise.resolve(),i=e.variantChildren&&e.variantChildren.size?(c=0)=>{let{delayChildren:u=0,staggerChildren:d,staggerDirection:m}=a;return Qk(e,t,c,u,d,m,r)}:()=>Promise.resolve(),{when:l}=a;if(l){let[c,u]=l==="beforeChildren"?[o,i]:[i,o];return c().then(()=>u())}else return Promise.all([o(),i(r.delay)])}function Qk(e,t,r=0,n=0,a=0,o=1,i){let l=[];for(let c of e.variantChildren)c.notify("AnimationStart",t),l.push(Xc(c,t,{...i,delay:r+(typeof n=="function"?0:n)+Gc(e.variantChildren,c,n,a,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function Jx(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){let a=t.map(o=>Xc(e,o,r));n=Promise.all(a)}else if(typeof t=="string")n=Xc(e,t,r);else{let a=typeof t=="function"?vt(e,t,r.custom):t;n=Promise.all(Pc(e,a,r))}return n.then(()=>{e.notify("AnimationComplete",t)})}var ey={test:e=>e==="auto",parse:e=>e};var Kc=e=>t=>t.test(e);var np=[rr,_,Ze,Rt,Fm,$m,ey],ap=e=>np.find(Kc(e));function ty(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Wi(e):!0}var Ik=new Set(["brightness","contrast","saturate","opacity"]);function Wk(e){let[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;let[n]=r.match(xo)||[];if(!n)return e;let a=r.replace(n,""),o=Ik.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+a+")"}var Jk=/\b([a-z-]*)\(.*?\)/gu,vl={..._e,getAnimatableNone:e=>{let t=e.match(Jk);return t?t.map(Wk).join(" "):e}};var bl={..._e,getAnimatableNone:e=>{let t=_e.parse(e);return _e.createTransformer(e)(t.map(n=>typeof n=="number"?0:typeof n=="object"?{...n,alpha:1}:n))}};var op={...rr,transform:Math.round};var ry={rotate:Rt,pathRotation:Rt,rotateX:Rt,rotateY:Rt,rotateZ:Rt,scale:ul,scaleX:ul,scaleY:ul,scaleZ:ul,skew:Rt,skewX:Rt,skewY:Rt,distance:_,translateX:_,translateY:_,translateZ:_,x:_,y:_,z:_,perspective:_,transformPerspective:_,opacity:Mr,originX:Mc,originY:Mc,originZ:_};var na={borderWidth:_,borderTopWidth:_,borderRightWidth:_,borderBottomWidth:_,borderLeftWidth:_,borderRadius:_,borderTopLeftRadius:_,borderTopRightRadius:_,borderBottomRightRadius:_,borderBottomLeftRadius:_,width:_,maxWidth:_,height:_,maxHeight:_,top:_,right:_,bottom:_,left:_,inset:_,insetBlock:_,insetBlockStart:_,insetBlockEnd:_,insetInline:_,insetInlineStart:_,insetInlineEnd:_,padding:_,paddingTop:_,paddingRight:_,paddingBottom:_,paddingLeft:_,paddingBlock:_,paddingBlockStart:_,paddingBlockEnd:_,paddingInline:_,paddingInlineStart:_,paddingInlineEnd:_,margin:_,marginTop:_,marginRight:_,marginBottom:_,marginLeft:_,marginBlock:_,marginBlockStart:_,marginBlockEnd:_,marginInline:_,marginInlineStart:_,marginInlineEnd:_,fontSize:_,backgroundPositionX:_,backgroundPositionY:_,...ry,zIndex:op,fillOpacity:Mr,strokeOpacity:Mr,numOctaves:op};var eS={...na,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:vl,WebkitFilter:vl,mask:bl,WebkitMask:bl},Zc=e=>eS[e];var tS=new Set([vl,bl]);function Qc(e,t){let r=Zc(e);return tS.has(r)||(r=_e),r.getAnimatableNone?r.getAnimatableNone(t):void 0}var rS=new Set(["auto","none","0"]);function ny(e,t,r){let n=0,a;for(;n<e.length&&!a;){let o=e[n];typeof o=="string"&&!rS.has(o)&&vn(o).values.length&&(a=e[n]),n++}if(a&&r)for(let o of t)e[o]=Qc(r,a)}var Ic=class extends yn{constructor(t,r,n,a,o){super(t,r,n,a,o,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:r,name:n}=this;if(!r||!r.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let m=t[d];if(typeof m=="string"&&(m=m.trim(),bo(m))){let f=rp(m,r.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!qc.has(n)||t.length!==2)return;let[a,o]=t,i=ap(a),l=ap(o),c=_m(a),u=_m(o);if(c!==u&&Cr[n]){this.needsMeasurement=!0;return}if(i!==l)if(Xm(i)&&Xm(l))for(let d=0;d<t.length;d++){let m=t[d];typeof m=="string"&&(t[d]=parseFloat(m))}else Cr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:r}=this,n=[];for(let a=0;a<t.length;a++)(t[a]===null||ty(t[a]))&&n.push(a);n.length&&ny(t,n,r)}measureInitialState(){let{element:t,unresolvedKeyframes:r,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Cr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;let a=r[r.length-1];a!==void 0&&t.getValue(n,a).jump(a,!1)}measureEndState(){let{element:t,name:r,unresolvedKeyframes:n}=this;if(!t||!t.current)return;let a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);let o=n.length-1,i=n[o];n[o]=Cr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),i!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=i),this.removedTransforms?.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}};var xl=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Wc(e,t,r){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let n=document;t&&(n=t.current);let a=r?.[e]??n.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e).filter(n=>n!=null)}var yl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function aa(e){return Ii(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}var{schedule:oa,cancel:nS}=Sc(queueMicrotask,!1);var Ot={x:!1,y:!1};function Jc(){return Ot.x||Ot.y}function ip(e){return e==="x"||e==="y"?Ot[e]?null:(Ot[e]=!0,()=>{Ot[e]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function eu(e,t){let r=Wc(e),n=new AbortController,a={passive:!0,...t,signal:n.signal};return[r,a,()=>n.abort()]}function aS(e){return!(e.pointerType==="touch"||Jc())}function lp(e,t,r={}){let[n,a,o]=eu(e,r);return n.forEach(i=>{let l=!1,c=!1,u,d=()=>{i.removeEventListener("pointerleave",b)},m=y=>{u&&(u(y),u=void 0),d()},f=y=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,m(y))},p=()=>{l=!0,window.addEventListener("pointerup",f,a),window.addEventListener("pointercancel",f,a)},b=y=>{if(y.pointerType!=="touch"){if(l){c=!0;return}m(y)}},x=y=>{if(!aS(y))return;c=!1;let g=t(i,y);typeof g=="function"&&(u=g,i.addEventListener("pointerleave",b,a))};i.addEventListener("pointerenter",x,a),i.addEventListener("pointerdown",p,a)}),o}var sp=(e,t)=>t?e===t?!0:sp(e,t.parentElement):!1;var ia=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;var oS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function cp(e){return oS.has(e.tagName)||e.isContentEditable===!0}var iS=new Set(["INPUT","SELECT","TEXTAREA"]);function up(e){return iS.has(e.tagName)||e.isContentEditable===!0}var Eo=new WeakSet;function ay(e){return t=>{t.key==="Enter"&&e(t)}}function dp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}var oy=(e,t)=>{let r=e.currentTarget;if(!r)return;let n=ay(()=>{if(Eo.has(r))return;dp(r,"down");let a=ay(()=>{dp(r,"up")}),o=()=>dp(r,"cancel");r.addEventListener("keyup",a,t),r.addEventListener("blur",o,t)});r.addEventListener("keydown",n,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",n),t)};function iy(e){return ia(e)&&!Jc()}var ly=new WeakSet;function fp(e,t,r={}){let[n,a,o]=eu(e,r),i=l=>{let c=l.currentTarget;if(!iy(l)||ly.has(l))return;Eo.add(c),r.stopPropagation&&ly.add(l);let u=t(c,l),d={...a,capture:!0},m=(b,x)=>{window.removeEventListener("pointerup",f,d),window.removeEventListener("pointercancel",p,d),Eo.has(c)&&Eo.delete(c),iy(b)&&typeof u=="function"&&u(b,{success:x})},f=b=>{m(b,c===window||c===document||r.useGlobalTarget||sp(c,b.target))},p=b=>{m(b,!1)};window.addEventListener("pointerup",f,d),window.addEventListener("pointercancel",p,d)};return n.forEach(l=>{(r.useGlobalTarget?window:l).addEventListener("pointerdown",i,a),aa(l)&&(l.addEventListener("focus",u=>oy(u,a)),!cp(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function Co(e){return Ii(e)&&"ownerSVGElement"in e}var tu=new WeakMap,ru,sy=(e,t,r)=>(n,a)=>a&&a[0]?a[0][e+"Size"]:Co(n)&&"getBBox"in n?n.getBBox()[t]:n[r],lS=sy("inline","width","offsetWidth"),sS=sy("block","height","offsetHeight");function cS({target:e,borderBoxSize:t}){tu.get(e)?.forEach(r=>{r(e,{get width(){return lS(e,t)},get height(){return sS(e,t)}})})}function uS(e){e.forEach(cS)}function dS(){typeof ResizeObserver>"u"||(ru=new ResizeObserver(uS))}function cy(e,t){ru||dS();let r=Wc(e);return r.forEach(n=>{let a=tu.get(n);a||(a=new Set,tu.set(n,a)),a.add(t),ru?.observe(n)}),()=>{r.forEach(n=>{let a=tu.get(n);a?.delete(t),a?.size||ru?.unobserve(n)})}}var nu=new Set,Do;function fS(){Do=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};nu.forEach(t=>t(e))},window.addEventListener("resize",Do)}function uy(e){return nu.add(e),Do||fS(),()=>{nu.delete(e),!nu.size&&typeof Do=="function"&&(window.removeEventListener("resize",Do),Do=void 0)}}function au(e,t){return typeof e=="function"?uy(e):cy(e,t)}var la={value:null,addProjectionMetrics:null};function dy(e){return Co(e)&&e.tagName==="svg"}var mS=[...np,ge,_e],fy=e=>mS.find(Kc(e));var mp=()=>({translate:0,scale:1,origin:0,originPoint:0}),wn=()=>({x:mp(),y:mp()}),pp=()=>({min:0,max:0}),he=()=>({x:pp(),y:pp()});var my=new WeakMap;function Dr(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function or(e){return typeof e=="string"||Array.isArray(e)}var ou=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wl=["initial",...ou];function kn(e){return Dr(e.animate)||wl.some(t=>or(e[t]))}function kl(e){return!!(kn(e)||e.variants)}function py(e,t,r){for(let n in t){let a=t[n],o=r[n];if(ne(a))e.addValue(n,a);else if(ne(o))e.addValue(n,jt(a,{owner:e}));else if(o!==a)if(e.hasValue(n)){let i=e.getValue(n);i.liveStyle===!0?i.jump(a):i.hasAnimated||i.set(a)}else{let i=e.getStaticValue(n);e.addValue(n,jt(i!==void 0?i:a,{owner:e}))}}for(let n in r)t[n]===void 0&&e.removeValue(n);return t}var Sn={current:null},sa={current:!1};var pS=typeof window<"u";function Sl(){if(sa.current=!0,!!pS)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Sn.current=e.matches;e.addEventListener("change",t),t()}else Sn.current=!1}var gy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],iu={};function Nl(e){iu=e}function gp(){return iu}var Tl=class{scrapeMotionValuesFromProps(t,r,n){return{}}constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:a,skipAnimations:o,blockInitialAnimation:i,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let p=xe.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,H.render(this.render,!1,!0))};let{latestValues:u,renderState:d}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=r.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=o,this.options=c,this.blockInitialAnimation=!!i,this.isControllingVariants=kn(r),this.isVariantNode=kl(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:m,...f}=this.scrapeMotionValuesFromProps(r,{},this);for(let p in f){let b=f[p];u[p]!==void 0&&ne(b)&&b.set(u[p])}}mount(t){if(this.hasBeenMounted)for(let r in this.initialValues)this.values.get(r)?.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=t,my.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(sa.current||Sl(),this.shouldReduceMotion=Sn.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),lt(this.notifyUpdate),lt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let t in this.events)this.events[t].clear();for(let t in this.features){let r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,r){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),r.accelerate&&jc.has(t)&&this.current instanceof HTMLElement){let{factory:i,keyframes:l,times:c,ease:u,duration:d}=r.accelerate,m=new To({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:Me(d)}),f=i(m);this.valueSubscriptions.set(t,()=>{f(),m.cancel()});return}let n=Vt.has(t);n&&this.onBindTransform&&this.onBindTransform();let a=r.on("change",i=>{this.latestValues[t]=i,this.props.onUpdate&&H.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{a(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in iu){let r=iu[t];if(!r)continue;let{isEnabled:n,Feature:a}=r;if(!this.features[t]&&a&&n(this.props)&&(this.features[t]=new a(this)),this.features[t]){let o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):he()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<gy.length;n++){let a=gy[n];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);let o="on"+a,i=t[o];i&&(this.propEventSubscriptions[a]=this.on(a,i))}this.prevMotionValues=py(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){let r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){let n=this.values.get(t);r!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);let r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=jt(r===null?void 0:r,{owner:this}),this.addValue(t,n)),n}readValue(t,r){let n=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return n!=null&&(typeof n=="string"&&(Qi(n)||Wi(n))?n=parseFloat(n):!fy(n)&&_e.test(r)&&(n=Qc(t,r)),this.setBaseTarget(t,ne(n)?n.get():n)),ne(n)?n.get():n}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){let{initial:r}=this.props,n;if(typeof r=="string"||typeof r=="object"){let o=ra(this.props,r,this.presenceContext?.custom);o&&(n=o[t])}if(r&&n!==void 0)return n;let a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!ne(a)?a:this.initialValues[t]!==void 0&&n===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Ar),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}scheduleRenderMicrotask(){oa.render(this.render)}};var Ro=class extends Tl{constructor(){super(...arguments),this.KeyframeResolver=Ic}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){let n=t.style;return n?n[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;ne(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}};var Be=class{constructor(t){this.isMounted=!1,this.node=t}update(){}};function Al({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function hp({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function vp(e,t){if(!t)return e;let r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function bp(e){return e===void 0||e===1}function lu({scale:e,scaleX:t,scaleY:r}){return!bp(e)||!bp(t)||!bp(r)}function Rr(e){return lu(e)||xp(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function xp(e){return hy(e.x)||hy(e.y)}function hy(e){return e&&e!=="0%"}function Ml(e,t,r){let n=e-r,a=t*n;return r+a}function vy(e,t,r,n,a){return a!==void 0&&(e=Ml(e,a,n)),Ml(e,r,n)+t}function yp(e,t=0,r=1,n,a){e.min=vy(e.min,t,r,n,a),e.max=vy(e.max,t,r,n,a)}function wp(e,{x:t,y:r}){yp(e.x,t.translate,t.scale,t.originPoint),yp(e.y,r.translate,r.scale,r.originPoint)}var by=.999999999999,xy=1.0000000000001;function ky(e,t,r,n=!1){let a=r.length;if(!a)return;t.x=t.y=1;let o,i;for(let l=0;l<a;l++){o=r[l],i=o.projectionDelta;let{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(zt(e.x,-o.scroll.offset.x),zt(e.y,-o.scroll.offset.y)),i&&(t.x*=i.x.scale,t.y*=i.y.scale,wp(e,i)),n&&Rr(o.latestValues)&&El(e,o.latestValues,o.layout?.layoutBox))}t.x<xy&&t.x>by&&(t.x=1),t.y<xy&&t.y>by&&(t.y=1)}function zt(e,t){e.min+=t,e.max+=t}function yy(e,t,r,n,a=.5){let o=Y(e.min,e.max,a);yp(e,t,r,o,n)}function wy(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function El(e,t,r){let n=r??e;yy(e.x,wy(t.x,n.x),t.scaleX,t.scale,t.originX),yy(e.y,wy(t.y,n.y),t.scaleY,t.scale,t.originY)}function su(e,t){return Al(vp(e.getBoundingClientRect(),t))}function kp(e,t,r){let n=su(e,r),{scroll:a}=t;return a&&(zt(n.x,a.offset.x),zt(n.y,a.offset.y)),n}var gS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hS=ar.length;function Sy(e,t,r){let n="",a=!0;for(let i=0;i<hS;i++){let l=ar[i],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{let d=parseFloat(c);u=l.startsWith("scale")?d===1:d===0}if(!u||r){let d=yl(c,na[l]);if(!u){a=!1;let m=gS[l]||l;n+=`${m}(${d}) `}r&&(t[l]=d)}}let o=e.pathRotation;return o&&(a=!1,n+=`rotate(${yl(o,na.pathRotation)}) `),n=n.trim(),r?n=r(t,a?"":n):a&&(n="none"),n}function ca(e,t,r){let{style:n,vars:a,transformOrigin:o}=e,i=!1,l=!1;for(let c in t){let u=t[c];if(Vt.has(c)){i=!0;continue}else if(Nc(c)){a[c]=u;continue}else{let d=yl(u,na[c]);c.startsWith("origin")?(l=!0,o[c]=d):n[c]=d}}if(t.transform||(i||r?n.transform=Sy(t,e.transform,r):n.transform&&(n.transform="none")),l){let{originX:c="50%",originY:u="50%",originZ:d=0}=o;n.transformOrigin=`${c} ${u} ${d}`}}function cu(e,{style:t,vars:r},n,a){let o=e.style,i;for(i in t)o[i]=t[i];a?.applyProjectionStyles(o,n);for(i in r)o.setProperty(i,r[i])}function Ty(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Vo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(_.test(e))e=parseFloat(e);else return e;let r=Ty(e,t.target.x),n=Ty(e,t.target.y);return`${r}% ${n}%`}};var Ny={correct:(e,{treeScale:t,projectionDelta:r})=>{let n=e,a=_e.parse(e);if(a.length>5)return n;let o=_e.createTransformer(e),i=typeof a[0]!="number"?1:0,l=r.x.scale*t.x,c=r.y.scale*t.y;a[0+i]/=l,a[1+i]/=c;let u=Y(l,c,.5);return typeof a[2+i]=="number"&&(a[2+i]/=u),typeof a[3+i]=="number"&&(a[3+i]/=u),o(a)}};var Cl={borderRadius:{...Vo,applyTo:[...xl]},borderTopLeftRadius:Vo,borderTopRightRadius:Vo,borderBottomLeftRadius:Vo,borderBottomRightRadius:Vo,boxShadow:Ny};function Dl(e,{layout:t,layoutId:r}){return Vt.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Cl[e]||e==="opacity")}function ua(e,t,r){let n=e.style,a=t?.style,o={};if(!n)return o;for(let i in n)(ne(n[i])||a&&ne(a[i])||Dl(i,e)||r?.getValue(i)?.liveStyle!==void 0)&&(o[i]=n[i]);return o}function vS(e){return window.getComputedStyle(e)}var Rl=class extends Ro{constructor(){super(...arguments),this.type="html",this.renderInstance=cu}mount(t){it(!!t.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(t)}readValueFromInstance(t,r){if(Vt.has(r))return this.projection?.isProjecting?zc(r):Dx(t,r);{let n=vS(t),a=(Nc(r)?n.getPropertyValue(r):n[r])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:r}){return su(t,r)}build(t,r,n){ca(t,r,n.transformTemplate)}scrapeMotionValuesFromProps(t,r,n){return ua(t,r,n)}};var bS={offset:"stroke-dashoffset",array:"stroke-dasharray"},xS={offset:"strokeDashoffset",array:"strokeDasharray"};function Ay(e,t,r=1,n=0,a=!0){e.pathLength=1;let o=a?bS:xS;e[o.offset]=`${-n}`,e[o.array]=`${t} ${r}`}var yS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Vl(e,{attrX:t,attrY:r,attrScale:n,pathLength:a,pathSpacing:o=1,pathOffset:i=0,...l},c,u,d){if(ca(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:m,style:f}=e;m.transform&&(f.transform=m.transform,delete m.transform),(f.transform||m.transformOrigin)&&(f.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),f.transform&&(f.transformBox=d?.transformBox??"fill-box",delete m.transformBox);for(let p of yS)m[p]!==void 0&&(f[p]=m[p],delete m[p]);t!==void 0&&(m.x=t),r!==void 0&&(m.y=r),n!==void 0&&(m.scale=n),a!==void 0&&Ay(m,a,o,i,!1)}var uu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);var Ol=e=>typeof e=="string"&&e.toLowerCase()==="svg";function My(e,t,r,n){cu(e,t,void 0,n);for(let a in t.attrs)e.setAttribute(uu.has(a)?a:Mo(a),t.attrs[a])}function zl(e,t,r){let n=ua(e,t,r);for(let a in e)if(ne(e[a])||ne(t[a])){let o=ar.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;n[o]=e[a]}return n}var _l=class extends Ro{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=he}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Vt.has(r)){let n=Zc(r);return n&&n.default||0}return r=uu.has(r)?r:Mo(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,n){return zl(t,r,n)}build(t,r,n){Vl(t,r,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(t,r,n,a){My(t,r,n,a)}mount(t){this.isSVGTag=Ol(t.tagName),super.mount(t)}};var wS=wl.length;function Sp(e){if(!e)return;if(!e.isControllingVariants){let r=e.parent?Sp(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}let t={};for(let r=0;r<wS;r++){let n=wl[r],a=e.props[n];(or(a)||a===!1)&&(t[n]=a)}return t}function Tp(e,t){if(!Array.isArray(t))return!1;let r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}var kS=[...ou].reverse(),SS=ou.length;function TS(e){return t=>Promise.all(t.map(({animation:r,options:n})=>Jx(e,r,n)))}function Np(e){let t=TS(e),r=Ey(),n=!0,a=!1,o=u=>(d,m)=>{let f=vt(e,m,u==="exit"?e.presenceContext?.custom:void 0);if(f){let{transition:p,transitionEnd:b,...x}=f;d={...d,...x,...b}}return d};function i(u){t=u(e)}function l(u){let{props:d}=e,m=Sp(e.parent)||{},f=[],p=new Set,b={},x=1/0;for(let g=0;g<SS;g++){let h=kS[g],v=r[h],w=d[h]!==void 0?d[h]:m[h],k=or(w),A=h===u?v.isActive:null;A===!1&&(x=g);let N=w===m[h]&&w!==d[h]&&k;if(N&&(n||a)&&e.manuallyAnimateOnMount&&(N=!1),v.protectedKeys={...b},!v.isActive&&A===null||!w&&!v.prevProp||Dr(w)||typeof w=="boolean")continue;if(h==="exit"&&v.isActive&&A!==!0){v.prevResolvedValues&&(b={...b,...v.prevResolvedValues});continue}let S=Cy(v.prevProp,w),D=S||h===u&&v.isActive&&!N&&k||g>x&&k,E=!1,V=Array.isArray(w)?w:[w],F=V.reduce(o(h),{});A===!1&&(F={});let{prevResolvedValues:M={}}=v,R={...M,...F},z=j=>{D=!0,p.has(j)&&(E=!0,p.delete(j)),v.needsAnimating[j]=!0;let Z=e.getValue(j);Z&&(Z.liveStyle=!1)};for(let j in R){let Z=F[j],ae=M[j];if(b.hasOwnProperty(j))continue;let ue=!1;gl(Z)&&gl(ae)?ue=!Tp(Z,ae)||S:ue=Z!==ae,ue?Z!=null?z(j):p.add(j):Z!==void 0&&p.has(j)?z(j):v.protectedKeys[j]=!0}v.prevProp=w,v.prevResolvedValues=F,v.isActive&&(b={...b,...F}),(n||a)&&e.blockInitialAnimation&&(D=!1);let U=N&&S;D&&(!U||E)&&f.push(...V.map(j=>{let Z={type:h};if(typeof j=="string"&&(n||a)&&!U&&e.manuallyAnimateOnMount&&e.parent){let{parent:ae}=e,ue=vt(ae,j);if(ae.enteringChildren&&ue){let{delayChildren:Gt}=ue.transition||{};Z.delay=Gc(ae.enteringChildren,e,Gt)}}return{animation:j,options:Z}}))}if(p.size){let g={};if(typeof d.initial!="boolean"){let h=vt(e,Array.isArray(d.initial)?d.initial[0]:d.initial);h&&h.transition&&(g.transition=h.transition)}p.forEach(h=>{let v=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),g[h]=v??null}),f.push({animation:g})}let y=!!f.length;return n&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(y=!1),n=!1,a=!1,y?t(f):Promise.resolve()}function c(u,d){if(r[u].isActive===d)return Promise.resolve();e.variantChildren?.forEach(f=>f.animationState?.setActive(u,d)),r[u].isActive=d;let m=l(u);for(let f in r)r[f].protectedKeys={};return m}return{animateChanges:l,setActive:c,setAnimateFunction:i,getState:()=>r,reset:()=>{r=Ey(),a=!0}}}function Cy(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Tp(t,e):!1}function da(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ey(){return{animate:da(!0),whileInView:da(),whileHover:da(),whileTap:da(),whileDrag:da(),whileFocus:da(),exit:da()}}function du(e,t){e.min=t.min,e.max=t.max}function _t(e,t){du(e.x,t.x),du(e.y,t.y)}function Ap(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Dy=1e-4,NS=1-Dy,AS=1+Dy,Ry=.01,MS=0-Ry,ES=0+Ry;function De(e){return e.max-e.min}function Dp(e,t,r){return Math.abs(e-t)<=r}function Mp(e,t,r,n=.5){e.origin=n,e.originPoint=Y(t.min,t.max,e.origin),e.scale=De(r)/De(t),e.translate=Y(r.min,r.max,e.origin)-e.originPoint,(e.scale>=NS&&e.scale<=AS||isNaN(e.scale))&&(e.scale=1),(e.translate>=MS&&e.translate<=ES||isNaN(e.translate))&&(e.translate=0)}function fa(e,t,r,n){Mp(e.x,t.x,r.x,n?n.originX:void 0),Mp(e.y,t.y,r.y,n?n.originY:void 0)}function Ep(e,t,r,n=0){let a=n?Y(r.min,r.max,n):r.min;e.min=a+t.min,e.max=e.min+De(t)}function Rp(e,t,r,n){Ep(e.x,t.x,r.x,n?.x),Ep(e.y,t.y,r.y,n?.y)}function Cp(e,t,r,n=0){let a=n?Y(r.min,r.max,n):r.min;e.min=t.min-a,e.max=e.min+De(t)}function Oo(e,t,r,n){Cp(e.x,t.x,r.x,n?.x),Cp(e.y,t.y,r.y,n?.y)}function Vy(e,t,r,n,a){return e-=t,e=Ml(e,1/r,n),a!==void 0&&(e=Ml(e,1/a,n)),e}function CS(e,t=0,r=1,n=.5,a,o=e,i=e){if(Ze.test(t)&&(t=parseFloat(t),t=Y(i.min,i.max,t/100)-i.min),typeof t!="number")return;let l=Y(o.min,o.max,n);e===o&&(l-=t),e.min=Vy(e.min,t,r,l,a),e.max=Vy(e.max,t,r,l,a)}function Oy(e,t,[r,n,a],o,i){CS(e,t[r],t[n],t[a],t.scale,o,i)}var DS=["x","scaleX","originX"],RS=["y","scaleY","originY"];function Vp(e,t,r,n){Oy(e.x,t,DS,r?r.x:void 0,n?n.x:void 0),Oy(e.y,t,RS,r?r.y:void 0,n?n.y:void 0)}function zy(e){return e.translate===0&&e.scale===1}function Op(e){return zy(e.x)&&zy(e.y)}function _y(e,t){return e.min===t.min&&e.max===t.max}function $y(e,t){return _y(e.x,t.x)&&_y(e.y,t.y)}function By(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zp(e,t){return By(e.x,t.x)&&By(e.y,t.y)}function _p(e){return De(e.x)/De(e.y)}function Bp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function bt(e){return[e("x"),e("y")]}function Fy(e,t,r){let n="",a=e.x.translate/t.x,o=e.y.translate/t.y,i=r?.z||0;if((a||o||i)&&(n=`translate3d(${a}px, ${o}px, ${i}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){let{transformPerspective:u,rotate:d,pathRotation:m,rotateX:f,rotateY:p,skewX:b,skewY:x}=r;u&&(n=`perspective(${u}px) ${n}`),d&&(n+=`rotate(${d}deg) `),m&&(n+=`rotate(${m}deg) `),f&&(n+=`rotateX(${f}deg) `),p&&(n+=`rotateY(${p}deg) `),b&&(n+=`skewX(${b}deg) `),x&&(n+=`skewY(${x}deg) `)}let l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(n+=`scale(${l}, ${c})`),n||"none"}var VS=xl.length,Ly=e=>typeof e=="string"?parseFloat(e):e,Uy=e=>typeof e=="number"||_.test(e);function Hy(e,t,r,n,a,o){a?(e.opacity=Y(0,r.opacity??1,OS(n)),e.opacityExit=Y(t.opacity??1,0,zS(n))):o&&(e.opacity=Y(t.opacity??1,r.opacity??1,n));for(let i=0;i<VS;i++){let l=xl[i],c=jy(t,l),u=jy(r,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Uy(c)===Uy(u)?(e[l]=Math.max(Y(Ly(c),Ly(u),n),0),(Ze.test(u)||Ze.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||r.rotate)&&(e.rotate=Y(t.rotate||0,r.rotate||0,n))}function jy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}var OS=Gy(0,.5,al),zS=Gy(.5,.95,be);function Gy(e,t,r){return n=>n<e?0:n>t?1:r(tr(e,t,n))}function qy(e,t,r){let n=ne(e)?e:jt(e);return n.start(ta("",n,t,r)),n.animation}function ir(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}var Yy=(e,t)=>e.depth-t.depth;var fu=class{constructor(){this.children=[],this.isDirty=!1}add(t){Zn(this.children,t),this.isDirty=!0}remove(t){mn(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Yy),this.isDirty=!1,this.children.forEach(t)}};function Py(e,t){let r=xe.now(),n=({timestamp:a})=>{let o=a-r;o>=t&&(lt(n),e(o-t))};return H.setup(n,!0),()=>lt(n)}function ma(e){return ne(e)?e.get():e}var mu=class{constructor(){this.members=[]}add(t){Zn(this.members,t);for(let r=this.members.length-1;r>=0;r--){let n=this.members[r];if(n===t||n===this.lead||n===this.prevLead)continue;let a=n.instance;(!a||a.isConnected===!1)&&!n.snapshot&&(mn(this.members,n),n.unmount())}t.scheduleRender()}remove(t){if(mn(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){for(let r=this.members.indexOf(t)-1;r>=0;r--){let n=this.members[r];if(n.isPresent!==!1&&n.instance?.isConnected!==!1)return this.promote(n),!0}return!1}promote(t,r){let n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.updateSnapshot(),t.scheduleRender();let{layoutDependency:a}=n.options,{layoutDependency:o}=t.options;(a===void 0||a!==o)&&(t.resumeFrom=n,r&&(n.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root?.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{t.options.onExitComplete?.(),t.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}};var pa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var ga={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},$p=["","X","Y","Z"],_S=1e3,BS=0;function Fp(e,t,r,n){let{latestValues:a}=t;a[e]&&(r[e]=a[e],t.setStaticValue(e,0),n&&(n[e]=0))}function t1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let r=Yc(t);if(window.MotionHasOptimisedAnimation(r,"transform")){let{layout:a,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",H,!(a||o))}let{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&t1(n)}function pu({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:a}){return class{constructor(i={},l=t?.()){this.id=BS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,la.value&&(ga.nodes=ga.calculatedTargetDeltas=ga.calculatedProjections=0),this.nodes.forEach(LS),this.nodes.forEach(YS),this.nodes.forEach(PS),this.nodes.forEach(US),la.addProjectionMetrics&&la.addProjectionMetrics(ga)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=i,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new fu)}addEventListener(i,l){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Ar),this.eventHandlers.get(i).add(l)}notifyListeners(i,...l){let c=this.eventHandlers.get(i);c&&c.notify(...l)}hasListeners(i){return this.eventHandlers.has(i)}mount(i){if(this.instance)return;this.isSVG=Co(i)&&!dy(i),this.instance=i;let{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(i),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,m=0,f=()=>this.root.updateBlockedByResize=!1;H.read(()=>{m=window.innerWidth}),e(i,()=>{let p=window.innerWidth;p!==m&&(m=p,this.root.updateBlockedByResize=!0,d&&d(),d=Py(f,250),pa.hasAnimatedSinceResize&&(pa.hasAnimatedSinceResize=!1,this.nodes.forEach(Zy)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let b=this.options.transition||u.getDefaultTransition()||IS,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=u.getProps(),g=!this.targetLayout||!zp(this.targetLayout,p),h=!m&&f;if(this.options.layoutRoot||this.resumeFrom||h||m&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let v={...No(b,"layout"),onPlay:x,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,h,v.path)}else m||Zy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let i=this.getStack();i&&i.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),lt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(XS),this.animationId++)}getTransformTemplate(){let{visualElement:i}=this.options;return i&&i.getProps().transformTemplate}willUpdate(i=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&t1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){let m=this.path[d];m.shouldResetTransform=!0,(typeof m.latestValues.x=="string"||typeof m.latestValues.y=="string")&&(m.isLayoutDirty=!0),m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}let{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;let u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(HS),this.nodes.forEach(Xy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ky);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(GS),this.nodes.forEach(qS),this.nodes.forEach($S),this.nodes.forEach(FS)):this.nodes.forEach(Ky),this.clearAllSnapshots();let l=xe.now();Te.delta=ze(0,1e3/60,l-Te.timestamp),Te.timestamp=l,Te.isProcessing=!0,cl.update.process(Te),cl.preRender.process(Te),cl.render.process(Te),Te.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oa.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jS),this.sharedNodes.forEach(KS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,H.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){H.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!De(this.snapshot.measuredBox.x)&&!De(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();let i=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=he()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,i?i.layoutBox:void 0)}updateScroll(i="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(l=!1),l&&this.instance){let c=n(this.instance);this.scroll={animationId:this.root.animationId,phase:i,isRoot:c,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!a)return;let i=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Op(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;i&&this.instance&&(l||Rr(this.latestValues)||d)&&(a(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){let l=this.measurePageBox(),c=this.removeElementScroll(l);return i&&(c=this.removeTransform(c)),WS(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:i}=this.options;if(!i)return he();let l=i.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(JS))){let{scroll:u}=this.root;u&&(zt(l.x,u.offset.x),zt(l.y,u.offset.y))}return l}removeElementScroll(i){let l=he();if(_t(l,i),this.scroll?.wasRoot)return l;for(let c=0;c<this.path.length;c++){let u=this.path[c],{scroll:d,options:m}=u;u!==this.root&&d&&m.layoutScroll&&(d.wasRoot&&_t(l,i),zt(l.x,d.offset.x),zt(l.y,d.offset.y))}return l}applyTransform(i,l=!1,c){let u=c||he();_t(u,i);for(let d=0;d<this.path.length;d++){let m=this.path[d];!l&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(zt(u.x,-m.scroll.offset.x),zt(u.y,-m.scroll.offset.y)),Rr(m.latestValues)&&El(u,m.latestValues,m.layout?.layoutBox)}return Rr(this.latestValues)&&El(u,this.latestValues,this.layout?.layoutBox),u}removeTransform(i){let l=he();_t(l,i);for(let c=0;c<this.path.length;c++){let u=this.path[c];if(!Rr(u.latestValues))continue;let d;u.instance&&(lu(u.latestValues)&&u.updateSnapshot(),d=he(),_t(d,u.measurePageBox())),Vp(l,u.latestValues,u.snapshot?.layoutBox,d)}return Rr(this.latestValues)&&Vp(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Te.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(i=!1){let l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);let c=!!this.resumingFrom||this!==l;if(!(i||c&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:d,layoutId:m}=this.options;if(!this.layout||!(d||m))return;this.resolvedRelativeTargetAt=Te.timestamp;let f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=he(),this.targetWithTransforms=he()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rp(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):_t(this.target,this.layout.layoutBox),wp(this.target,this.targetDelta)):_t(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0),la.value&&ga.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||lu(this.parent.latestValues)||xp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(i,l,c){this.relativeParent=i,this.linkedParentVersion=i.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),Oo(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),_t(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let i=this.getLead(),l=!!this.resumingFrom||this!==i,c=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Te.timestamp&&(c=!1),c)return;let{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;_t(this.layoutCorrected,this.layout.layoutBox);let m=this.treeScale.x,f=this.treeScale.y;ky(this.layoutCorrected,this.treeScale,this.path,l),i.layout&&!i.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(i.target=i.layout.layoutBox,i.targetWithTransforms=he());let{target:p}=i;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ap(this.prevProjectionDelta.x,this.projectionDelta.x),Ap(this.prevProjectionDelta.y,this.projectionDelta.y)),fa(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==f||!Bp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Bp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),la.value&&ga.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){if(this.options.visualElement?.scheduleRender(),i){let l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=wn(),this.projectionDelta=wn(),this.projectionDeltaWithTransform=wn()}setAnimationOrigin(i,l=!1,c){let u=this.snapshot,d=u?u.latestValues:{},m={...this.latestValues},f=wn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;let p=he(),b=u?u.source:void 0,x=this.layout?this.layout.source:void 0,y=b!==x,g=this.getStack(),h=!g||g.members.length<=1,v=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(QS));this.animationProgress=0;let w,k=c?.interpolateProjection(i);this.mixTargetDelta=A=>{let N=A/1e3,S=k?.(N);S?(f.x.translate=S.x,f.x.scale=Y(i.x.scale,1,N),f.x.origin=i.x.origin,f.x.originPoint=i.x.originPoint,f.y.translate=S.y,f.y.scale=Y(i.y.scale,1,N),f.y.origin=i.y.origin,f.y.originPoint=i.y.originPoint):(Qy(f.x,i.x,N),Qy(f.y,i.y,N)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ZS(this.relativeTarget,this.relativeTargetOrigin,p,N),w&&$y(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=he()),_t(w,this.relativeTarget)),y&&(this.animationValues=m,Hy(m,d,this.latestValues,N,v,h)),S&&S.rotate!==void 0&&(this.animationValues||(this.animationValues=m),this.animationValues.pathRotation=S.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(i){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(lt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=H.update(()=>{pa.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jt(0)),this.motionValue.jump(0,!1),this.currentAnimation=qy(this.motionValue,[0,1e3],{...i,velocity:0,isSync:!0,onUpdate:l=>{this.mixTargetDelta(l),i.onUpdate&&i.onUpdate(l)},onComplete:()=>{i.onComplete&&i.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let i=this.getStack();i&&i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_S),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let i=this.getLead(),{targetWithTransforms:l,target:c,layout:u,latestValues:d}=i;if(!(!l||!c||!u)){if(this!==i&&this.layout&&u&&r1(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||he();let m=De(this.layout.layoutBox.x);c.x.min=i.target.x.min,c.x.max=c.x.min+m;let f=De(this.layout.layoutBox.y);c.y.min=i.target.y.min,c.y.max=c.y.min+f}_t(l,c),El(l,d),fa(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(i,l){this.sharedNodes.has(i)||this.sharedNodes.set(i,new mu),this.sharedNodes.get(i).add(l);let u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){let i=this.getStack();return i?i.lead===this:!0}getLead(){let{layoutId:i}=this.options;return i?this.getStack()?.lead||this:this}getPrevLead(){let{layoutId:i}=this.options;return i?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:l,preserveFollowOpacity:c}={}){let u=this.getStack();u&&u.promote(this,c),i&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){let i=this.getStack();return i?i.relegate(this):!1}resetSkewAndRotation(){let{visualElement:i}=this.options;if(!i)return;let l=!1,{latestValues:c}=i;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;let u={};c.z&&Fp("z",i,u,this.animationValues);for(let d=0;d<$p.length;d++)Fp(`rotate${$p[d]}`,i,u,this.animationValues),Fp(`skew${$p[d]}`,i,u,this.animationValues);i.render();for(let d in u)i.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);i.scheduleRender()}applyProjectionStyles(i,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){i.visibility="hidden";return}let c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,i.visibility="",i.opacity="",i.pointerEvents=ma(l?.pointerEvents)||"",i.transform=c?c(this.latestValues,""):"none";return}let u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(i.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,i.pointerEvents=ma(l?.pointerEvents)||""),this.hasProjected&&!Rr(this.latestValues)&&(i.transform=c?c({},""):"none",this.hasProjected=!1);return}i.visibility="";let d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let m=Fy(this.projectionDeltaWithTransform,this.treeScale,d);c&&(m=c(d,m)),i.transform=m;let{x:f,y:p}=this.projectionDelta;i.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,u.animationValues?i.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:i.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(let b in Cl){if(d[b]===void 0)continue;let{correct:x,applyTo:y,isCSSVariable:g}=Cl[b],h=m==="none"?d[b]:x(d[b],u);if(y){let v=y.length;for(let w=0;w<v;w++)i[y[w]]=h}else g?this.options.visualElement.renderState.vars[b]=h:i[b]=h}this.options.layoutId&&(i.pointerEvents=u===this?ma(l?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>i.currentAnimation?.stop()),this.root.nodes.forEach(Xy),this.root.sharedNodes.clear()}}}function $S(e){e.updateLayout()}function FS(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:r,measuredBox:n}=e.layout,{animationType:a}=e.options,o=t.source!==e.layout.source;if(a==="size")bt(d=>{let m=o?t.measuredBox[d]:t.layoutBox[d],f=De(m);m.min=r[d].min,m.max=m.min+f});else if(a==="x"||a==="y"){let d=a==="x"?"y":"x";du(o?t.measuredBox[d]:t.layoutBox[d],r[d])}else r1(a,t.layoutBox,r)&&bt(d=>{let m=o?t.measuredBox[d]:t.layoutBox[d],f=De(r[d]);m.max=m.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+f)});let i=wn();fa(i,r,t.layoutBox);let l=wn();o?fa(l,e.applyTransform(n,!0),t.measuredBox):fa(l,r,t.layoutBox);let c=!Op(i),u=!1;if(!e.resumeFrom){let d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){let{snapshot:m,layout:f}=d;if(m&&f){let p=e.options.layoutAnchor||void 0,b=he();Oo(b,t.layoutBox,m.layoutBox,p);let x=he();Oo(x,r,f.layoutBox,p),zp(b,x)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=b,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:i,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(e.isLead()){let{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function LS(e){la.value&&ga.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function US(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function jS(e){e.clearSnapshot()}function Xy(e){e.clearMeasurements()}function HS(e){e.isLayoutDirty=!0,e.updateLayout()}function Ky(e){e.isLayoutDirty=!1}function GS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function qS(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Zy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function YS(e){e.resolveTargetDelta()}function PS(e){e.calcProjection()}function XS(e){e.resetSkewAndRotation()}function KS(e){e.removeLeadSnapshot()}function Qy(e,t,r){e.translate=Y(t.translate,0,r),e.scale=Y(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Iy(e,t,r,n){e.min=Y(t.min,r.min,n),e.max=Y(t.max,r.max,n)}function ZS(e,t,r,n){Iy(e.x,t.x,r.x,n),Iy(e.y,t.y,r.y,n)}function QS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var IS={duration:.45,ease:[.4,0,.1,1]},Wy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Jy=Wy("applewebkit/")&&!Wy("chrome/")?Math.round:be;function e1(e){e.min=Jy(e.min),e.max=Jy(e.max)}function WS(e){e1(e.x),e1(e.y)}function r1(e,t,r){return e==="position"||e==="preserve-aspect"&&!Dp(_p(t),_p(r),.2)}function JS(e){return e!==e.root&&e.scroll?.wasRoot}var n1=pu({attachResizeListener:(e,t)=>ir(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0});var gu={current:void 0},Bl=pu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!gu.current){let e=new n1({});e.mount(window),e.setOptions({layoutScroll:!0}),gu.current=e}return gu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"});var hu=G(W(),1),Or=G(W(),1);var a1=G(W(),1),Vr=(0,a1.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});var i1=G(W(),1);function o1(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function e3(...e){return t=>{let r=!1,n=e.map(a=>{let o=o1(a,t);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let a=0;a<n.length;a++){let o=n[a];typeof o=="function"?o():o1(e[a],null)}}}}function l1(...e){return i1.useCallback(e3(...e),e)}var Lp=class extends hu.Component{getSnapshotBeforeUpdate(t){let r=this.props.childRef.current;if(aa(r)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let n=r.offsetParent,a=aa(n)&&n.offsetWidth||0,o=aa(n)&&n.offsetHeight||0,i=getComputedStyle(r),l=this.props.sizeRef.current;l.height=parseFloat(i.height),l.width=parseFloat(i.width),l.top=r.offsetTop,l.left=r.offsetLeft,l.right=a-l.width-l.left,l.bottom=o-l.height-l.top,l.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function c1({children:e,isPresent:t,anchorX:r,anchorY:n,root:a,pop:o}){let i=(0,Or.useId)(),l=(0,Or.useRef)(null),c=(0,Or.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=(0,Or.useContext)(Vr),d=o!==!1?e.props?.ref??e?.ref:void 0,m=l1(l,d);return(0,Or.useInsertionEffect)(()=>{let{width:f,height:p,top:b,left:x,right:y,bottom:g,direction:h}=c.current;if(t||o===!1||!l.current||!f||!p)return;let v=h==="rtl",w=r==="left"?v?`right: ${y}`:`left: ${x}`:v?`left: ${x}`:`right: ${y}`,k=n==="bottom"?`bottom: ${g}`:`top: ${b}`;l.current.dataset.motionPopId=i;let A=document.createElement("style");u&&(A.nonce=u);let N=a??document.head;return N.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${w}px !important;
            ${k}px !important;
          }
        `),()=>{l.current?.removeAttribute("data-motion-pop-id"),N.contains(A)&&N.removeChild(A)}},[t]),(0,s1.jsx)(Lp,{isPresent:t,childRef:l,sizeRef:c,pop:o,children:o===!1?e:hu.cloneElement(e,{ref:m})})}var d1=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:a,presenceAffectsLayout:o,mode:i,anchorX:l,anchorY:c,root:u})=>{let d=dn(t3),m=(0,Tn.useId)(),f=(0,Tn.useRef)(r),p=(0,Tn.useRef)(n);ho(()=>{f.current=r,p.current=n});let b=!0,x=(0,Tn.useMemo)(()=>(b=!1,{id:m,initial:t,isPresent:r,custom:a,onExitComplete:y=>{d.set(y,!0);for(let g of d.values())if(!g)return;n&&n()},register:y=>(d.set(y,!1),()=>{d.delete(y),!f.current&&!d.size&&p.current?.()})}),[r,d,n]);return o&&b&&(x={...x}),(0,Tn.useMemo)(()=>{d.forEach((y,g)=>d.set(g,!1))},[r]),u1.useEffect(()=>{!r&&!d.size&&n&&n()},[r]),e=(0,Up.jsx)(c1,{pop:i==="popLayout",isPresent:r,anchorX:l,anchorY:c,root:u,children:e}),(0,Up.jsx)(fn.Provider,{value:x,children:e})};function t3(){return new Map}var Nn=G(W(),1);function vu(e=!0){let t=(0,Nn.useContext)(fn);if(t===null)return[!0,null];let{isPresent:r,onExitComplete:n,register:a}=t,o=(0,Nn.useId)();(0,Nn.useEffect)(()=>{if(e)return a(o)},[e]);let i=(0,Nn.useCallback)(()=>e&&n&&n(o),[o,n,e]);return!r&&n?[!1,i]:[!0]}var bu=G(W(),1),$l=e=>e.key||"";function jp(e){let t=[];return bu.Children.forEach(e,r=>{(0,bu.isValidElement)(r)&&t.push(r)}),t}var Bt=({children:e,custom:t,initial:r=!0,onExitComplete:n,presenceAffectsLayout:a=!0,mode:o="sync",propagate:i=!1,anchorX:l="left",anchorY:c="top",root:u})=>{let[d,m]=vu(i),f=(0,Ht.useMemo)(()=>jp(e),[e]),p=i&&!d?[]:f.map($l),b=(0,Ht.useRef)(!0),x=(0,Ht.useRef)(f),y=dn(()=>new Map),g=(0,Ht.useRef)(new Set),[h,v]=(0,Ht.useState)(f),[w,k]=(0,Ht.useState)(f);ho(()=>{b.current=!1,x.current=f;for(let S=0;S<w.length;S++){let D=$l(w[S]);p.includes(D)?(y.delete(D),g.current.delete(D)):y.get(D)!==!0&&y.set(D,!1)}},[w,p.length,p.join("-")]);let A=[];if(f!==h){let S=[...f];for(let D=0;D<w.length;D++){let E=w[D],V=$l(E);p.includes(V)||(S.splice(D,0,E),A.push(E))}return o==="wait"&&A.length&&(S=A),k(jp(S)),v(f),null}let{forceRender:N}=(0,Ht.useContext)(go);return(0,Fl.jsx)(Fl.Fragment,{children:w.map(S=>{let D=$l(S),E=i&&!d?!1:f===w||p.includes(D),V=()=>{if(g.current.has(D))return;if(y.has(D))g.current.add(D),y.set(D,!0);else return;let F=!0;y.forEach(M=>{M||(F=!1)}),F&&(N?.(),k(x.current),i&&m?.(),n&&n())};return(0,Fl.jsx)(d1,{isPresent:E,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,root:u,onExitComplete:E?void 0:V,anchorX:l,anchorY:c,children:S},D)})})};var f1=G(W(),1),xu=(0,f1.createContext)({strict:!1});var m1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},p1=!1;function r3(){if(p1)return;let e={};for(let t in m1)e[t]={isEnabled:r=>m1[t].some(n=>!!r[n])};Nl(e),p1=!0}function yu(){return r3(),gp()}function g1(e){let t=yu();for(let r in e)t[r]={...t[r],...e[r]};Nl(t)}var b1=G(er(),1),wu=G(W(),1);var n3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ll(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||n3.has(e)}var h1=e=>!Ll(e);function Hp(e){typeof e=="function"&&(h1=t=>t.startsWith("on")?!Ll(t):e(t))}try{Hp(h0("@emotion/is-prop-valid").default)}catch{}function v1(e,t,r){let n={};for(let a in e)a==="values"&&typeof e.values=="object"||ne(e[a])||(h1(a)||r===!0&&Ll(a)||!t&&!Ll(a)||e.draggable&&a.startsWith("onDrag"))&&(n[a]=e[a]);return n}function Gp({children:e,isValidProp:t,...r}){t&&Hp(t);let n=(0,wu.useContext)(Vr);r={...n,...r},r.transition=ea(r.transition,n.transition),r.isStatic=dn(()=>r.isStatic);let a=(0,wu.useMemo)(()=>r,[JSON.stringify(r.transition),r.transformPagePoint,r.reducedMotion,r.skipAnimations]);return(0,b1.jsx)(Vr.Provider,{value:a,children:e})}var Au=G(er(),1);var $o=G(W(),1);var x1=G(W(),1),An=(0,x1.createContext)({});var ku=G(W(),1);function y1(e,t){if(kn(e)){let{initial:r,animate:n}=e;return{initial:r===!1||or(r)?r:void 0,animate:or(n)?n:void 0}}return e.inherit!==!1?t:{}}function k1(e){let{initial:t,animate:r}=y1(e,(0,ku.useContext)(An));return(0,ku.useMemo)(()=>({initial:t,animate:r}),[w1(t),w1(r)])}function w1(e){return Array.isArray(e)?e.join(" "):e}var Bo=G(W(),1);var S1=G(W(),1);var zo=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qp(e,t,r){for(let n in t)!ne(t[n])&&!Dl(n,r)&&(e[n]=t[n])}function a3({transformTemplate:e},t){return(0,S1.useMemo)(()=>{let r=zo();return ca(r,t,e),Object.assign({},r.vars,r.style)},[t])}function o3(e,t){let r=e.style||{},n={};return qp(n,r,e),Object.assign(n,a3(e,t)),n}function T1(e,t){let r={},n=o3(e,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=n,r}var N1=G(W(),1);var Su=()=>({...zo(),attrs:{}});function A1(e,t,r,n){let a=(0,N1.useMemo)(()=>{let o=Su();return Vl(o,t,Ol(n),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){let o={};qp(o,e.style,e),a.style={...o,...a.style}}return a}var M1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _o(e){return typeof e!="string"||e.includes("-")?!1:!!(M1.indexOf(e)>-1||/[A-Z]/u.test(e))}function E1(e,t,r,{latestValues:n},a,o=!1,i){let c=(i??_o(e)?A1:T1)(t,n,a,e),u=v1(t,typeof e=="string",o),d=e!==Bo.Fragment?{...u,...c,ref:r}:{},{children:m}=t,f=(0,Bo.useMemo)(()=>ne(m)?m.get():m,[m]);return(0,Bo.createElement)(e,{...d,children:f})}var Yp=G(W(),1);function i3({scrapeMotionValuesFromProps:e,createRenderState:t},r,n,a){return{latestValues:l3(r,n,a,e),renderState:t()}}function l3(e,t,r,n){let a={},o=n(e,{});for(let f in o)a[f]=ma(o[f]);let{initial:i,animate:l}=e,c=kn(e),u=kl(e);t&&u&&!c&&e.inherit!==!1&&(i===void 0&&(i=t.initial),l===void 0&&(l=t.animate));let d=r?r.initial===!1:!1;d=d||i===!1;let m=d?l:i;if(m&&typeof m!="boolean"&&!Dr(m)){let f=Array.isArray(m)?m:[m];for(let p=0;p<f.length;p++){let b=ra(e,f[p]);if(b){let{transitionEnd:x,transition:y,...g}=b;for(let h in g){let v=g[h];if(Array.isArray(v)){let w=d?v.length-1:0;v=v[w]}v!==null&&(a[h]=v)}for(let h in x)a[h]=x[h]}}}return a}var Tu=e=>(t,r)=>{let n=(0,Yp.useContext)(An),a=(0,Yp.useContext)(fn),o=()=>i3(e,t,n,a);return r?o():dn(o)};var C1=Tu({scrapeMotionValuesFromProps:ua,createRenderState:zo});var D1=Tu({scrapeMotionValuesFromProps:zl,createRenderState:Su});var R1=Symbol.for("motionComponentSymbol");var ha=G(W(),1);function V1(e,t,r){let n=(0,ha.useRef)(r);(0,ha.useInsertionEffect)(()=>{n.current=r});let a=(0,ha.useRef)(null);return(0,ha.useCallback)(o=>{o&&e.onMount?.(o),t&&(o?t.mount(o):t.unmount());let i=n.current;if(typeof i=="function")if(o){let l=i(o);typeof l=="function"&&(a.current=l)}else a.current?(a.current(),a.current=null):i(o);else i&&(i.current=o)},[t])}var et=G(W(),1);var O1=G(W(),1),Nu=(0,O1.createContext)({});function Mn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function z1(e,t,r,n,a,o){let{visualElement:i}=(0,et.useContext)(An),l=(0,et.useContext)(xu),c=(0,et.useContext)(fn),u=(0,et.useContext)(Vr),d=u.reducedMotion,m=u.skipAnimations,f=(0,et.useRef)(null),p=(0,et.useRef)(!1);n=n||l.renderer,!f.current&&n&&(f.current=n(e,{visualState:t,parent:i,props:r,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:m,isSVG:o}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let b=f.current,x=(0,et.useContext)(Nu);b&&!b.projection&&a&&(b.type==="html"||b.type==="svg")&&s3(f.current,r,a,x);let y=(0,et.useRef)(!1);(0,et.useInsertionEffect)(()=>{b&&y.current&&b.update(r,c)});let g=r[hl],h=(0,et.useRef)(!!g&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(g)&&window.MotionHasOptimisedAnimation?.(g));return ho(()=>{p.current=!0,b&&(y.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),h.current&&b.animationState&&b.animationState.animateChanges())}),(0,et.useEffect)(()=>{b&&(!h.current&&b.animationState&&b.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(g)}),h.current=!1),b.enteringChildren=void 0)}),b}function s3(e,t,r,n){let{layoutId:a,layout:o,drag:i,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:m}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:_1(e.parent)),e.projection.setOptions({layoutId:a,layout:o,alwaysMeasureLayout:!!i||l&&Mn(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:n,crossfade:m,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function _1(e){if(e)return e.options.allowProjection!==!1?e.projection:_1(e.parent)}function Mu(e,{forwardMotionProps:t=!1,type:r}={},n,a){n&&g1(n);let o=r?r==="svg":_o(e),i=o?D1:C1;function l(u,d){let m,f={...(0,$o.useContext)(Vr),...u,layoutId:c3(u)},{isStatic:p}=f,b=k1(u),x=i(u,p);if(!p&&typeof window<"u"){u3(f,n);let y=d3(f);m=y.MeasureLayout,b.visualElement=z1(e,x,f,a,y.ProjectionNode,o)}return(0,Au.jsxs)(An.Provider,{value:b,children:[m&&b.visualElement?(0,Au.jsx)(m,{visualElement:b.visualElement,...f}):null,E1(e,u,V1(x,b.visualElement,d),x,p,t,o)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;let c=(0,$o.forwardRef)(l);return c[R1]=e,c}function c3({layoutId:e}){let t=(0,$o.useContext)(go).id;return t&&e!==void 0?t+"-"+e:e}function u3(e,t){let r=(0,$o.useContext)(xu).strict}function d3(e){let t=yu(),{drag:r,layout:n}=t;if(!r&&!n)return{};let a={...r,...n};return{MeasureLayout:r?.isEnabled(e)||n?.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function B1(e,t){if(typeof Proxy>"u")return Mu;let r=new Map,n=(o,i)=>Mu(o,i,e,t),a=(o,i)=>n(o,i);return new Proxy(a,{get:(o,i)=>i==="create"?n:(r.has(i)||r.set(i,Mu(i,void 0,e,t)),r.get(i))})}var $1=G(W(),1);var F1=(e,t)=>t.isSVG??_o(e)?new _l(t):new Rl(t,{allowProjection:e!==$1.Fragment});var Eu=class extends Be{constructor(t){super(t),t.animationState||(t.animationState=Np(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();Dr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}};var f3=0,Cu=class extends Be{constructor(){super(...arguments),this.id=f3++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;if(t&&n===!1){if(this.isExitComplete){let{initial:o,custom:i}=this.node.getProps();if(typeof o=="string"||typeof o=="object"&&o!==null&&!Array.isArray(o)){let l=vt(this.node,o,i);if(l){let{transition:c,transitionEnd:u,...d}=l;for(let m in d)this.node.getValue(m)?.jump(d[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}let a=this.node.animationState.setActive("exit",!t);r&&!t&&a.then(()=>{this.isExitComplete=!0,r(this.id)})}mount(){let{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}};var L1={animation:{Feature:Eu},exit:{Feature:Cu}};function zr(e){return{point:{x:e.pageX,y:e.pageY}}}var U1=e=>t=>ia(t)&&e(t,zr(t));function En(e,t,r,n){return ir(e,t,U1(r),n)}var Du=({current:e})=>e?e.ownerDocument.defaultView:null;var j1=(e,t)=>Math.abs(e-t);function H1(e,t){let r=j1(e.x,t.x),n=j1(e.y,t.y);return Math.sqrt(r**2+n**2)}var G1=new Set(["auto","scroll"]),Fo=class{constructor(t,r,{transformPagePoint:n,contextWindow:a=window,dragSnapToOrigin:o=!1,distanceThreshold:i=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=b=>{this.handleScroll(b.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ru(this.lastRawMoveEventInfo,this.transformPagePoint));let b=Pp(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,y=H1(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!y)return;let{point:g}=b,{timestamp:h}=Te;this.history.push({...g,timestamp:h});let{onStart:v,onMove:w}=this.handlers;x||(v&&v(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=Ru(x,this.transformPagePoint),H.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();let{onEnd:y,onSessionEnd:g,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let v=Pp(b.type==="pointercancel"?this.lastMoveEventInfo:Ru(x,this.transformPagePoint),this.history);this.startEvent&&y&&y(b,v),g&&g(b,v)},!ia(t))return;this.dragSnapToOrigin=o,this.handlers=r,this.transformPagePoint=n,this.distanceThreshold=i,this.contextWindow=a||window;let c=zr(t),u=Ru(c,this.transformPagePoint),{point:d}=u,{timestamp:m}=Te;this.history=[{...d,timestamp:m}];let{onSessionStart:f}=r;f&&f(t,Pp(u,this.history));let p={passive:!0,capture:!0};this.removeListeners=Ut(En(this.contextWindow,"pointermove",this.handlePointerMove,p),En(this.contextWindow,"pointerup",this.handlePointerUp,p),En(this.contextWindow,"pointercancel",this.handlePointerUp,p)),l&&this.startScrollTracking(l)}startScrollTracking(t){let r=t.parentElement;for(;r;){let n=getComputedStyle(r);(G1.has(n.overflowX)||G1.has(n.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){let r=this.scrollPositions.get(t);if(!r)return;let n=t===window,a=n?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:a.x-r.x,y:a.y-r.y};o.x===0&&o.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,a),H.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),lt(this.updatePoint)}};function Ru(e,t){return t?{point:t(e.point)}:e}function q1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Pp({point:e},t){return{point:e,delta:q1(e,Y1(t)),offset:q1(e,m3(t)),velocity:p3(t,.1)}}function m3(e){return e[0]}function Y1(e){return e[e.length-1]}function p3(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null,a=Y1(e);for(;r>=0&&(n=e[r],!(a.timestamp-n.timestamp>Me(t)));)r--;if(!n)return{x:0,y:0};n===e[0]&&e.length>2&&a.timestamp-n.timestamp>Me(t)*2&&(n=e[1]);let o=je(a.timestamp-n.timestamp);if(o===0)return{x:0,y:0};let i={x:(a.x-n.x)/o,y:(a.y-n.y)/o};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function Q1(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?Y(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?Y(r,e,n.max):Math.min(e,r)),e}function P1(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function I1(e,{top:t,left:r,bottom:n,right:a}){return{x:P1(e.x,r,a),y:P1(e.y,t,n)}}function X1(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function W1(e,t){return{x:X1(e.x,t.x),y:X1(e.y,t.y)}}function J1(e,t){let r=.5,n=De(e),a=De(t);return a>n?r=tr(t.min,t.max-n,e.min):n>a&&(r=tr(e.min,e.max-a,t.min)),ze(0,1,r)}function e2(e,t){let r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}var Vu=.35;function t2(e=Vu){return e===!1?e=0:e===!0&&(e=Vu),{x:K1(e,"left","right"),y:K1(e,"top","bottom")}}function K1(e,t,r){return{min:Z1(e,t),max:Z1(e,r)}}function Z1(e,t){return typeof e=="number"?e:e[t]||0}var g3=new WeakMap,zu=class{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=he(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:r=!1,distanceThreshold:n}={}){let{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;let o=m=>{r&&this.snapToCursor(zr(m).point),this.stopAnimation()},i=(m,f)=>{let{drag:p,dragPropagation:b,onDragStart:x}=this.getProps();if(p&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ip(p),!this.openDragLock))return;this.latestPointerEvent=m,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(g=>{let h=this.getAxisMotionValue(g).get()||0;if(Ze.test(h)){let{projection:v}=this.visualElement;if(v&&v.layout){let w=v.layout.layoutBox[g];w&&(h=De(w)*(parseFloat(h)/100))}}this.originPoint[g]=h}),x&&H.update(()=>x(m,f),!1,!0),Ao(this.visualElement,"transform");let{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},l=(m,f)=>{this.latestPointerEvent=m,this.latestPanInfo=f;let{dragPropagation:p,dragDirectionLock:b,onDirectionLock:x,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;let{offset:g}=f;if(b&&this.currentDirection===null){this.currentDirection=v3(g),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),y&&H.update(()=>y(m,f),!1,!0)},c=(m,f)=>{this.latestPointerEvent=m,this.latestPanInfo=f,this.stop(m,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{let{dragSnapToOrigin:m}=this.getProps();(m||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Fo(t,{onSessionStart:o,onStart:i,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:n,contextWindow:Du(this.visualElement),element:this.visualElement.current})}stop(t,r){let n=t||this.latestPointerEvent,a=r||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!a||!n)return;let{velocity:i}=a;this.startAnimation(i);let{onDragEnd:l}=this.getProps();l&&H.postRender(()=>l(n,a))}cancel(){this.isDragging=!1;let{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,r,n){let{drag:a}=this.getProps();if(!n||!Ou(t,a,this.currentDirection))return;let o=this.getAxisMotionValue(t),i=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(i=Q1(i,this.constraints[t],this.elastic[t])),o.set(i)}resolveConstraints(){let{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,a=this.constraints;t&&Mn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&n?this.constraints=I1(n.layoutBox,t):this.constraints=!1,this.elastic=t2(r),a!==this.constraints&&!Mn(t)&&n&&this.constraints&&!this.hasMutatedConstraints&&bt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=e2(n.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){let{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Mn(t))return!1;let n=t.current;it(n!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:a}=this.visualElement;if(!a||!a.layout)return!1;a.root&&(a.root.scroll=void 0,a.root.updateScroll());let o=kp(n,a.root,this.visualElement.getTransformPagePoint()),i=W1(a.layout.layoutBox,o);if(r){let l=r(hp(i));this.hasMutatedConstraints=!!l,l&&(i=Al(l))}return i}startAnimation(t){let{drag:r,dragMomentum:n,dragElastic:a,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=bt(d=>{if(!Ou(d,r,this.currentDirection))return;let m=c&&c[d]||{};(i===!0||i===d)&&(m={min:0,max:0});let f=a?200:1e6,p=a?40:1e7,b={type:"inertia",velocity:n?t[d]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...m};return this.startAxisValueAnimation(d,b)});return Promise.all(u).then(l)}startAxisValueAnimation(t,r){let n=this.getAxisMotionValue(t);return Ao(this.visualElement,t),n.start(ta(t,n,0,r,this.visualElement,!1))}stopAnimation(){bt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){let r=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps()[r];return a||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){bt(r=>{let{drag:n}=this.getProps();if(!Ou(r,n,this.currentDirection))return;let{projection:a}=this.visualElement,o=this.getAxisMotionValue(r);if(a&&a.layout){let{min:i,max:l}=a.layout.layoutBox[r],c=o.get()||0;o.set(t[r]-Y(i,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!Mn(r)||!n||!this.constraints)return;this.stopAnimation();let a={x:0,y:0};bt(i=>{let l=this.getAxisMotionValue(i);if(l&&this.constraints!==!1){let c=l.get();a[i]=J1({min:c,max:c},this.constraints[i])}});let{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),bt(i=>{if(!Ou(i,t,null))return;let l=this.getAxisMotionValue(i),{min:c,max:u}=this.constraints[i];l.set(Y(c,u,a[i]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;g3.set(this.visualElement,this);let t=this.visualElement.current,r=En(t,"pointerdown",u=>{let{drag:d,dragListener:m=!0}=this.getProps(),f=u.target,p=f!==t&&up(f);d&&m&&!p&&this.start(u)}),n,a=()=>{let{dragConstraints:u}=this.getProps();Mn(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),n||(n=h3(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,i=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),H.read(a);let l=ir(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(bt(m=>{let f=this.getAxisMotionValue(m);f&&(this.originPoint[m]+=u[m].translate,f.set(f.get()+u[m].translate))}),this.visualElement.render())}));return()=>{l(),r(),i(),c&&c(),n&&n()}}getProps(){let t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:a=!1,dragConstraints:o=!1,dragElastic:i=Vu,dragMomentum:l=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:a,dragConstraints:o,dragElastic:i,dragMomentum:l}}};function r2(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function h3(e,t,r){let n=au(e,r2(r)),a=au(t,r2(r));return()=>{n(),a()}}function Ou(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function v3(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}var _u=class extends Be{constructor(t){super(t),this.removeGroupControls=be,this.removeListeners=be,this.controls=new zu(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||be}update(){let{dragControls:t}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};t!==r&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}};var Xp=e=>(t,r)=>{e&&H.update(()=>e(t,r),!1,!0)},Bu=class extends Be{constructor(){super(...arguments),this.removePointerDownListener=be}onPointerDown(t){this.session=new Fo(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Du(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:a}=this.node.getProps();return{onSessionStart:Xp(t),onStart:Xp(r),onMove:Xp(n),onEnd:(o,i)=>{delete this.session,a&&H.postRender(()=>a(o,i))}}}mount(){this.removePointerDownListener=En(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};var n2=G(er(),1);var Ul=G(W(),1);var Kp=!1,Zp=class extends Ul.Component{componentDidMount(){let{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:a}=this.props,{projection:o}=t;o&&(r.group&&r.group.add(o),n&&n.register&&a&&n.register(o),Kp&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),pa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:r,visualElement:n,drag:a,isPresent:o}=this.props,{projection:i}=n;return i&&(i.isPresent=o,t.layoutDependency!==r&&i.setOptions({...i.options,layoutDependency:r}),Kp=!0,a||t.layoutDependency!==r||r===void 0||t.isPresent!==o?i.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?i.promote():i.relegate()||H.postRender(()=>{let l=i.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:t,layoutAnchor:r}=this.props,{projection:n}=t;n&&(n.options.layoutAnchor=r,n.root.didUpdate(),oa.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:a}=t;Kp=!0,a&&(a.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(a),n&&n.deregister&&n.deregister(a))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}};function $u(e){let[t,r]=vu(),n=(0,Ul.useContext)(go);return(0,n2.jsx)(Zp,{...e,layoutGroup:n,switchLayoutGroup:(0,Ul.useContext)(Nu),isPresent:t,safeToRemove:r})}var a2={pan:{Feature:Bu},drag:{Feature:_u,ProjectionNode:Bl,MeasureLayout:$u}};function o2(e,t,r){let{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",r==="Start");let a="onHover"+r,o=n[a];o&&H.postRender(()=>o(t,zr(t)))}var Fu=class extends Be{mount(){let{current:t}=this.node;t&&(this.unmount=lp(t,(r,n)=>(o2(this.node,n,"Start"),a=>o2(this.node,a,"End"))))}unmount(){}};var Lu=class extends Be{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ut(ir(this.node.current,"focus",()=>this.onFocus()),ir(this.node.current,"blur",()=>this.onBlur()))}unmount(){}};function i2(e,t,r){let{props:n}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",r==="Start");let a="onTap"+(r==="End"?"":r),o=n[a];o&&H.postRender(()=>o(t,zr(t)))}var Uu=class extends Be{mount(){let{current:t}=this.node;if(!t)return;let{globalTapTarget:r,propagate:n}=this.node.props;this.unmount=fp(t,(a,o)=>(i2(this.node,o,"Start"),(i,{success:l})=>i2(this.node,i,l?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:n?.tap===!1})}unmount(){}};var Ip=new WeakMap,Qp=new WeakMap,b3=e=>{let t=Ip.get(e.target);t&&t(e)},x3=e=>{e.forEach(b3)};function y3({root:e,...t}){let r=e||document;Qp.has(r)||Qp.set(r,{});let n=Qp.get(r),a=JSON.stringify(t);return n[a]||(n[a]=new IntersectionObserver(x3,{root:e,...t})),n[a]}function l2(e,t,r){let n=y3(t);return Ip.set(e,r),n.observe(e),()=>{Ip.delete(e),n.unobserve(e)}}var w3={some:0,all:1},ju=class extends Be{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:a="some",once:o}=t,i={root:r?r.current:void 0,rootMargin:n,threshold:typeof a=="number"?a:w3[a]},l=c=>{let{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);let{onViewportEnter:d,onViewportLeave:m}=this.node.getProps(),f=u?d:m;f&&f(c)};this.stopObserver=l2(this.node.current,i,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;let{props:t,prevProps:r}=this.node;["amount","margin","root"].some(k3(t,r))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function k3({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}var s2={inView:{Feature:ju},tap:{Feature:Uu},focus:{Feature:Lu},hover:{Feature:Fu}};var c2={layout:{ProjectionNode:Bl,MeasureLayout:$u}};var u2={...L1,...s2,...a2,...c2};var B=B1(u2,F1);var d2=G(W(),1);function Wp(){!sa.current&&Sl();let[e]=(0,d2.useState)(Sn.current);return e}var T=G(W(),1);var s=G(er(),1),a0=G(ud(),1),S3={emergency:{bg:"bg-nerv-red",subtextColor:"text-black/80",glow:"nerv-text-shadow-red",borderColor:"#FF0000",stripeColor1:"#000000",stripeColor2:"#FF0000",indicatorColor:"bg-black",flicker:!0,titleColor:"#000000"},warning:{bg:"bg-nerv-orange",subtextColor:"text-black/80",glow:"nerv-text-shadow-orange",borderColor:"#FF9900",stripeColor1:"#000000",stripeColor2:"#FF9900",indicatorColor:"bg-black",flicker:!0,titleColor:"#000000"},info:{bg:"bg-nerv-cyan",subtextColor:"text-black/80",glow:"nerv-text-shadow-cyan",borderColor:"#00FFFF",stripeColor1:"#003333",stripeColor2:"#00FFFF",indicatorColor:"bg-black",flicker:!1,titleColor:"#000000"},success:{bg:"bg-nerv-green",subtextColor:"text-black/80",glow:"nerv-text-shadow-green",borderColor:"#00FF00",stripeColor1:"#003300",stripeColor2:"#00FF00",indicatorColor:"bg-black",flicker:!1,titleColor:"#000000"},critical:{bg:"bg-nerv-red",subtextColor:"text-white/80",glow:"nerv-text-shadow-red",borderColor:"#FF0000",stripeColor1:"#FF0000",stripeColor2:"#330000",indicatorColor:"bg-white",flicker:!0,titleColor:"#FFFFFF"},contrast:{bg:"bg-nerv-black",subtextColor:"text-nerv-white/70",glow:"",borderColor:"#FFFFFF",stripeColor1:"#FFFFFF",stripeColor2:"#000000",indicatorColor:"bg-nerv-white",flicker:!0,titleColor:"#E3DDD4"},disabled:{bg:"bg-nerv-mid-gray",subtextColor:"text-nerv-dark-gray/80",glow:"",borderColor:"#555555",stripeColor1:"#444444",stripeColor2:"#666666",indicatorColor:"bg-nerv-dark-gray",flicker:!1,titleColor:"#111111"}},u$=(0,T.forwardRef)(function({text:t="EMERGENCY",subtext:r="",visible:n=!0,severity:a="emergency",fullScreen:o=!1,children:i=null,animateStripes:l=!0,className:c="",...u},d){let m=S3[a],f=14,p=25,b={topLeft:{backgroundImage:`repeating-linear-gradient(
        45deg,
        ${m.stripeColor1} 0 ${f}px,
        ${m.stripeColor2} ${f}px ${p}px
      )`,backgroundPosition:"0 0"},topRight:{backgroundImage:`repeating-linear-gradient(
        135deg,
        ${m.stripeColor1} 0 ${f}px,
        ${m.stripeColor2} ${f}px ${p}px
      )`,backgroundPosition:"0 0"},bottomLeft:{backgroundImage:`repeating-linear-gradient(
        45deg,
        ${m.stripeColor1} 0 ${f}px,
        ${m.stripeColor2} ${f}px ${p}px
      )`,backgroundPosition:"0 0"},bottomRight:{backgroundImage:`repeating-linear-gradient(
        135deg,
        ${m.stripeColor1} 0 ${f}px,
        ${m.stripeColor2} ${f}px ${p}px
      )`,backgroundPosition:"0 0"}};return(0,s.jsx)(Bt,{children:n&&(0,s.jsxs)(B.div,{ref:d,...u,initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1},exit:{scaleY:0,opacity:0},transition:{duration:.15,ease:"easeOut"},className:`
            ${o?"fixed inset-0 z-50 flex items-center justify-center":"relative w-full"}
            ${c}
          `,role:"alert","aria-live":"assertive",children:[(0,s.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,s.jsx)("div",{className:`absolute inset-0 ${m.bg} opacity-95`}),(0,s.jsx)("div",{className:"absolute inset-0 opacity-16",style:{background:`repeating-linear-gradient(
                  0deg,
                  transparent 0 3px,
                  rgba(0,0,0,0.42) 3px 6px
                )`}})]}),(0,s.jsxs)("div",{className:"relative w-full overflow-hidden [container-type:inline-size]",children:[(0,s.jsxs)("div",{className:"relative h-5 overflow-hidden md:h-7",children:[(0,s.jsx)("div",{className:`nerv-banner-stripe absolute inset-y-0 left-0 ${l?"nerv-banner-stripe-forward":""}`,style:{...b.topLeft,width:"50%"}}),(0,s.jsx)("div",{className:`nerv-banner-stripe absolute inset-y-0 right-0 ${l?"nerv-banner-stripe-reverse":""}`,style:{...b.topRight,width:"50%"}})]}),(0,s.jsxs)("div",{className:"relative  px-4 pb-5 pt-4 md:px-8 md:pb-6 md:pt-5",style:{borderColor:"rgba(0,0,0,0.52)"},children:[(0,s.jsx)("div",{className:"absolute left-0 right-0 top-0.5 h-1 bg-black md:left-0 md:right-0"}),(0,s.jsx)("div",{className:"absolute left-0 right-0 bottom-0.5 h-1 bg-black md:left-0 md:right-0"}),(0,s.jsx)(B.h1,{animate:m.flicker?{opacity:[.96,.7,1,.82,1]}:{},transition:m.flicker?{duration:1.35,repeat:1/0,ease:"linear"}:{},className:`
                  text-center text-[clamp(2rem,12cqw,12rem)]
                  font-black uppercase leading-[0.9] tracking-[0.02em]
                  select-none
                `,style:{fontFamily:"var(--font-nerv-display)",color:m.titleColor,textShadow:a==="emergency"||a==="warning"?"0 0 1px rgba(0,0,0,0.22)":void 0},children:t}),(0,s.jsx)(B.p,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{delay:.15},className:`mx-auto mt-2.5 max-w-[72ch] px-3 text-center text-[clamp(8px,2.4cqw,11px)] leading-[1.36] md:mt-3 md:leading-[1.42] uppercase tracking-[clamp(0.18em,0.5cqw,0.24em)] ${m.subtextColor}`,style:{fontFamily:"var(--font-nerv-display)"},children:r}),i&&(0,s.jsx)(B.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.25},className:"relative z-10 mt-3 flex justify-center",children:i})]}),(0,s.jsxs)("div",{className:"relative h-5 overflow-hidden md:h-7",children:[(0,s.jsx)("div",{className:`nerv-banner-stripe absolute inset-y-0 left-0 ${l?"nerv-banner-stripe-forward":""}`,style:{...b.bottomLeft,width:"50%"}}),(0,s.jsx)("div",{className:`nerv-banner-stripe absolute inset-y-0 right-0 ${l?"nerv-banner-stripe-reverse":""}`,style:{...b.bottomRight,width:"50%"}})]})]})]})})}),T3={green:"text-nerv-green",orange:"text-nerv-orange",cyan:"text-nerv-cyan",red:"text-nerv-red"},N3={green:"nerv-text-shadow-green",orange:"nerv-text-shadow-orange",cyan:"nerv-text-shadow-cyan",red:"nerv-text-shadow-red"},A3={green:"text-nerv-green/72 border-nerv-green/18 bg-nerv-green/[0.05]",orange:"text-nerv-orange/75 border-nerv-orange/22 bg-nerv-orange/[0.05]",cyan:"text-nerv-cyan/75 border-nerv-cyan/22 bg-nerv-cyan/[0.05]",red:"text-nerv-red/78 border-nerv-red/22 bg-nerv-red/[0.05]"},d$=(0,T.forwardRef)(function({lines:t,typewriter:r=!1,typeSpeed:n=30,lineDelay:a=200,color:o="green",showCursor:i=!0,title:l,maxHeight:c="400px",className:u="",showLineNumbers:d=!1,prompt:m,...f},p){let[b,x]=(0,T.useState)(r?[]:t),[y,g]=(0,T.useState)(0),[h,v]=(0,T.useState)(0),[w,k]=(0,T.useState)(r),A=(0,T.useRef)(null);(0,T.useEffect)(()=>{x(r?[]:t),g(0),v(0),k(r)},[t,r,n,a]),(0,T.useEffect)(()=>{if(!r||y>=t.length){k(!1);return}let E=t[y];if(h===0&&x(V=>[...V,""]),h<E.length){let V=setTimeout(()=>{x(F=>{let M=[...F];return M[M.length-1]=E.substring(0,h+1),M}),v(F=>F+1)},n);return()=>clearTimeout(V)}else{let V=setTimeout(()=>{g(F=>F+1),v(0)},a);return()=>clearTimeout(V)}},[r,y,h,t,n,a]),(0,T.useEffect)(()=>{A.current&&(A.current.scrollTop=A.current.scrollHeight)},[b]);let N=T3[o],S=N3[o],D=A3[o];return(0,s.jsxs)("div",{ref:p,className:`relative bg-nerv-black border border-nerv-mid-gray ${u}`,...f,children:[l&&(0,s.jsxs)("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-nerv-mid-gray bg-nerv-dark-gray",children:[(0,s.jsxs)("div",{className:"flex gap-1.5",children:[(0,s.jsx)("div",{className:"w-2 h-2 bg-nerv-red"}),(0,s.jsx)("div",{className:"w-2 h-2 bg-nerv-orange"}),(0,s.jsx)("div",{className:"w-2 h-2 bg-nerv-green"})]}),(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] text-nerv-orange font-bold ml-2",style:{fontFamily:"var(--font-nerv-display)"},children:l}),(0,s.jsx)("div",{className:"ml-auto text-[10px] text-nerv-mid-gray font-mono",children:"MAGI_SYS"})]}),(0,s.jsxs)("div",{ref:A,className:"p-4 overflow-y-auto font-mono text-sm leading-relaxed",style:{maxHeight:c,fontFamily:"var(--font-nerv-mono)"},children:[b.map((E,V)=>(0,s.jsxs)(B.div,{initial:r?{opacity:0}:!1,animate:{opacity:1},className:`${N} ${S} whitespace-pre-wrap`,children:[d&&(0,s.jsx)("span",{"data-slot":"line-number",className:`inline-flex w-12 shrink-0 items-center justify-end mr-3 border-r pr-2 text-[11px] font-semibold tabular-nums select-none ${D}`,style:{fontFamily:"var(--font-nerv-mono)",textShadow:"none"},children:String(V+1).padStart(3,"0")}),m&&(0,s.jsx)("span",{className:"text-nerv-orange mr-1 select-none",children:m}),E,i&&w&&V===b.length-1&&(0,s.jsx)("span",{className:"inline-block w-2.5 h-4 ml-0.5 align-middle bg-current",style:{animation:"cursor-blink 1s step-end infinite"}})]},V)),i&&!w&&(0,s.jsx)("span",{className:`inline-block w-2.5 h-4 ml-0.5 align-middle ${N.replace("text-","bg-")}`,style:{animation:"cursor-blink 1s step-end infinite"}})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1 border-t border-nerv-mid-gray bg-nerv-dark-gray text-[10px] font-mono text-nerv-mid-gray",children:[(0,s.jsxs)("span",{children:["LINES: ",b.length]}),(0,s.jsx)("span",{children:w?"TRANSMITTING...":"READY"})]})]})}),M3={orange:"#FF9900",green:"#00FF00",cyan:"#00FFFF",red:"#FF0000"},A2=(0,T.forwardRef)(function({children:t,label:r,showCrosshairs:n=!0,color:a="orange",bracketSize:o=18,className:i="",...l},c){let u=M3[a];return(0,s.jsxs)(B.div,{ref:c,...l,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:`relative border bg-black/80 px-3 pb-3 pt-4 ${i}`,style:{borderColor:`${u}55`,boxShadow:`inset 0 0 0 1px ${u}12`},children:[n&&(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none opacity-[0.06]",style:{backgroundImage:`
                linear-gradient(${u} 0.5px, transparent 0.5px),
                linear-gradient(90deg, ${u} 0.5px, transparent 0.5px)
              `,backgroundSize:"28px 28px, 28px 28px"}}),(0,s.jsx)("div",{className:"absolute left-0 right-0 top-[18px] h-px pointer-events-none",style:{backgroundColor:`${u}55`}}),(0,s.jsx)("div",{className:"absolute left-0 right-0 bottom-[10px] h-px pointer-events-none",style:{backgroundColor:`${u}22`}}),(0,s.jsx)("div",{className:"absolute top-0 left-0 pointer-events-none",style:{width:o,height:o,borderTop:`1px solid ${u}`,borderLeft:`1px solid ${u}`}}),(0,s.jsx)("div",{className:"absolute top-0 right-0 pointer-events-none",style:{width:o,height:o,borderTop:`1px solid ${u}`,borderRight:`1px solid ${u}`}}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 pointer-events-none",style:{width:o,height:o,borderBottom:`1px solid ${u}`,borderLeft:`1px solid ${u}`}}),(0,s.jsx)("div",{className:"absolute bottom-0 right-0 pointer-events-none",style:{width:o,height:o,borderBottom:`1px solid ${u}`,borderRight:`1px solid ${u}`}}),(0,s.jsxs)("div",{className:"absolute right-3 top-[18px] flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 pointer-events-none",style:{fontFamily:"var(--font-nerv-mono)"},children:[(0,s.jsx)("span",{children:a}),(0,s.jsx)("span",{className:"h-px w-6 bg-current opacity-40"})]}),r&&(0,s.jsx)("div",{className:"absolute left-3 top-0 z-20 -translate-y-1/2 bg-black px-2 text-[10px] uppercase tracking-[0.24em] font-bold",style:{color:u,fontFamily:"var(--font-nerv-display)"},children:r}),(0,s.jsx)("div",{className:`relative z-10 ${r?"mt-1.5":""}`,children:t})]})}),f$=(0,T.forwardRef)(function({color:t="#FF9900",opacity:r=.08,hexSize:n=30,animated:a=!0,className:o="",...i},l){let c=`hex-grid-${(0,T.useId)().replace(/:/g,"")}`,u=n*2,d=n*Math.sqrt(3),m=u*.75,f=d,p=Array.from({length:6},(x,y)=>{let g=Math.PI/3*y-Math.PI/6;return`${n*Math.cos(g)},${n*Math.sin(g)}`}).join(" "),b=(0,s.jsxs)("svg",{className:`absolute inset-0 w-full h-full ${o}`,style:{opacity:r},xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("pattern",{id:c,x:"0",y:"0",width:m,height:f,patternUnits:"userSpaceOnUse",children:[(0,s.jsx)("polygon",{points:p,fill:"none",stroke:t,strokeWidth:"0.5",transform:`translate(${n}, ${d/2})`}),(0,s.jsx)("polygon",{points:p,fill:"none",stroke:t,strokeWidth:"0.5",transform:`translate(${n+m/2}, ${d/2+f/2})`})]})}),(0,s.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${c})`})]});return a?(0,s.jsx)(B.div,{ref:l,...i,className:"absolute inset-0 pointer-events-none",animate:{opacity:[r,r*1.5,r]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:b}):(0,s.jsx)("div",{ref:l,...i,className:"absolute inset-0 pointer-events-none",children:b})}),E3={orange:{text:"#ff9900",scan:"rgba(255, 153, 0, 0.08)",guide:"rgba(255, 153, 0, 0.16)",frame:"rgba(255, 153, 0, 0.26)",inner:"rgba(255, 153, 0, 0.08)",glow:"rgba(255, 153, 0, 0.18)",sweep:"rgba(255, 153, 0, 0.22)"},green:{text:"#00ff00",scan:"rgba(0, 255, 0, 0.08)",guide:"rgba(0, 255, 0, 0.15)",frame:"rgba(0, 255, 0, 0.24)",inner:"rgba(0, 255, 0, 0.08)",glow:"rgba(0, 255, 0, 0.16)",sweep:"rgba(0, 255, 0, 0.22)"},cyan:{text:"#00f6ff",scan:"rgba(0, 246, 255, 0.08)",guide:"rgba(0, 246, 255, 0.15)",frame:"rgba(0, 246, 255, 0.24)",inner:"rgba(0, 246, 255, 0.08)",glow:"rgba(0, 246, 255, 0.16)",sweep:"rgba(0, 246, 255, 0.22)"},red:{text:"#ff2b1d",scan:"rgba(255, 43, 29, 0.09)",guide:"rgba(255, 43, 29, 0.18)",frame:"rgba(255, 43, 29, 0.28)",inner:"rgba(255, 43, 29, 0.09)",glow:"rgba(255, 43, 29, 0.18)",sweep:"rgba(255, 43, 29, 0.24)"}},C3={sparse:24,normal:18,dense:12},f2=[18,30,42,58,70,82],D3=(0,T.forwardRef)(function({color:t="orange",opacity:r=.34,density:n="normal",variant:a="monitor",label:o,secondaryLabel:i,animated:l=!0,className:c="",style:u,...d},m){let f=E3[t],p=C3[n],b={...u,opacity:u?.opacity??r};return(0,s.jsxs)("div",{ref:m,"aria-hidden":"true","data-slot":"monitor-overlay",className:`absolute inset-0 overflow-hidden pointer-events-none ${c}`,style:b,...d,children:[a==="alert"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{"data-slot":"alert-band",className:"absolute left-0 right-0 top-0 h-2 hazard-stripes-black opacity-45"}),(0,s.jsx)("div",{"data-slot":"alert-band",className:"absolute left-0 right-0 bottom-0 h-2 hazard-stripes-black opacity-45"})]}),(0,s.jsx)("div",{className:"absolute inset-0",style:{backgroundImage:`
              repeating-linear-gradient(
                180deg,
                transparent 0,
                transparent ${p-1}px,
                ${f.scan} ${p-1}px,
                ${f.scan} ${p}px
              ),
              linear-gradient(
                90deg,
                transparent 0,
                transparent calc(12% - 0.5px),
                ${f.guide} calc(12% - 0.5px),
                ${f.guide} calc(12% + 0.5px),
                transparent calc(12% + 0.5px),
                transparent calc(50% - 0.5px),
                ${f.guide} calc(50% - 0.5px),
                ${f.guide} calc(50% + 0.5px),
                transparent calc(50% + 0.5px),
                transparent calc(88% - 0.5px),
                ${f.guide} calc(88% - 0.5px),
                ${f.guide} calc(88% + 0.5px),
                transparent calc(88% + 0.5px)
              ),
              linear-gradient(
                180deg,
                transparent 0,
                transparent calc(16% - 0.5px),
                ${f.guide} calc(16% - 0.5px),
                ${f.guide} calc(16% + 0.5px),
                transparent calc(16% + 0.5px),
                transparent calc(50% - 0.5px),
                ${f.guide} calc(50% - 0.5px),
                ${f.guide} calc(50% + 0.5px),
                transparent calc(50% + 0.5px),
                transparent calc(84% - 0.5px),
                ${f.guide} calc(84% - 0.5px),
                ${f.guide} calc(84% + 0.5px),
                transparent calc(84% + 0.5px)
              ),
              radial-gradient(circle at center, ${f.glow} 0, transparent 58%)
            `}}),(0,s.jsx)("div",{className:"absolute inset-[8%] border",style:{borderColor:f.frame,boxShadow:`inset 0 0 0 1px ${f.inner}`}}),(0,s.jsx)("div",{className:"absolute left-[9%] right-[9%] top-[14%] h-px",style:{backgroundColor:f.frame}}),(0,s.jsx)("div",{className:"absolute left-[9%] right-[9%] bottom-[14%] h-px",style:{backgroundColor:f.frame}}),(0,s.jsx)("div",{className:"absolute top-[9%] bottom-[9%] left-[14%] w-px",style:{backgroundColor:f.frame}}),(0,s.jsx)("div",{className:"absolute top-[9%] bottom-[9%] right-[14%] w-px",style:{backgroundColor:f.frame}}),(0,s.jsx)("div",{className:"absolute left-[7.5%] top-[7.5%] h-7 w-7 border-l border-t",style:{borderColor:f.text}}),(0,s.jsx)("div",{className:"absolute right-[7.5%] top-[7.5%] h-7 w-7 border-r border-t",style:{borderColor:f.text}}),(0,s.jsx)("div",{className:"absolute left-[7.5%] bottom-[7.5%] h-7 w-7 border-b border-l",style:{borderColor:f.text}}),(0,s.jsx)("div",{className:"absolute right-[7.5%] bottom-[7.5%] h-7 w-7 border-b border-r",style:{borderColor:f.text}}),f2.map(x=>(0,s.jsx)("div",{className:"absolute left-[8.8%] h-px w-4",style:{top:`${x}%`,backgroundColor:f.frame}},`left-${x}`)),f2.map(x=>(0,s.jsx)("div",{className:"absolute right-[8.8%] h-px w-4",style:{top:`${x}%`,backgroundColor:f.frame}},`right-${x}`)),o&&(0,s.jsx)("div",{"data-slot":"monitor-label",className:"absolute left-[10%] top-[14%] -translate-y-1/2 bg-black/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.22em]",style:{color:f.text,fontFamily:"var(--font-nerv-mono)",boxShadow:`0 0 0 1px ${f.frame} inset`},children:o}),i&&(0,s.jsx)("div",{"data-slot":"monitor-secondary-label",className:"absolute bottom-[14%] right-[10%] translate-y-1/2 bg-black/85 px-2 py-1 text-[9px] uppercase tracking-[0.2em]",style:{color:f.text,fontFamily:"var(--font-nerv-mono)",boxShadow:`0 0 0 1px ${f.frame} inset`},children:i}),l&&(0,s.jsx)(B.div,{"data-slot":"monitor-sweep",className:"absolute inset-x-[10%] h-24",style:{background:`linear-gradient(180deg, transparent 0%, ${f.sweep} 44%, transparent 100%)`,filter:"blur(2px)",mixBlendMode:"screen"},animate:{top:["-18%","104%"]},transition:{duration:5.6,ease:"linear",repeat:1/0}})]})}),R3={primary:{base:"border border-nerv-orange/60 bg-nerv-black text-nerv-orange",hover:"hover:border-nerv-orange hover:bg-nerv-orange/10",active:"active:border-nerv-amber active:text-nerv-amber"},danger:{base:"border border-nerv-red/70 bg-nerv-black text-nerv-red",hover:"hover:border-nerv-red hover:bg-nerv-red/10",active:"active:border-nerv-red active:text-nerv-white"},ghost:{base:"border border-nerv-mid-gray/60 bg-transparent text-nerv-white/72",hover:"hover:border-nerv-orange/40 hover:text-nerv-orange hover:bg-nerv-orange/8",active:"active:border-nerv-orange/60"},terminal:{base:"border border-nerv-green/70 bg-nerv-black text-nerv-green",hover:"hover:border-nerv-green hover:bg-nerv-green/10",active:"active:border-nerv-green active:text-nerv-white"}},V3={sm:"min-h-8 px-3 py-1.5 text-[11px]",md:"min-h-10 px-4 py-2 text-xs",lg:"min-h-12 px-5 py-2.5 text-sm"},m2=(0,T.forwardRef)(function({variant:t="primary",size:r="md",loading:n=!1,fullWidth:a=!1,children:o,disabled:i,onClick:l,className:c="",type:u="button",...d},m){let f=R3[t];return(0,s.jsxs)(B.button,{ref:m,...d,type:u,whileHover:{y:-1},whileTap:{y:0},className:`
          relative overflow-hidden uppercase tracking-[0.2em] font-bold
          transition-colors duration-100 cursor-pointer
          select-none outline-none
          disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none
          ${f.base} ${f.hover} ${f.active}
          ${V3[r]}
          ${a?"w-full":""}
          ${c}
        `,style:{fontFamily:"var(--font-nerv-display)",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.02)"},disabled:i||n,onClick:l,"aria-busy":n?!0:void 0,"aria-disabled":n?!0:void 0,children:[(0,s.jsx)("span",{className:"absolute inset-x-2 top-0 h-px bg-current opacity-24"}),(0,s.jsx)("span",{className:"absolute inset-x-2 bottom-0 h-px bg-current opacity-16"}),n&&(0,s.jsx)("span",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsx)("span",{className:"flex gap-1",children:[0,1,2].map(p=>(0,s.jsx)(B.span,{className:"w-1.5 h-1.5 bg-current",animate:{opacity:[1,.2,1]},transition:{duration:.6,repeat:1/0,delay:p*.15}},p))})}),(0,s.jsxs)("span",{className:`relative z-10 inline-flex items-center gap-2 ${n?"invisible":""}`,children:[(0,s.jsx)("span",{className:"inline-block h-1.5 w-1.5 border border-current opacity-55"}),(0,s.jsx)("span",{className:n?"invisible":"",children:o})]}),(0,s.jsx)("span",{className:"absolute left-0 top-0 bottom-0 w-1 bg-current opacity-[0.14]"})]})}),O3={orange:{text:"text-nerv-orange",border:"border-nerv-orange",focusBorder:"focus:border-nerv-orange",label:"text-nerv-orange"},green:{text:"text-nerv-green",border:"border-nerv-green",focusBorder:"focus:border-nerv-green",label:"text-nerv-green"},cyan:{text:"text-nerv-cyan",border:"border-nerv-cyan",focusBorder:"focus:border-nerv-cyan",label:"text-nerv-cyan"}},z3={sm:"min-h-[34px] px-3 py-1.5 text-xs",md:"min-h-[42px] px-4 py-2.5 text-sm",lg:"min-h-[48px] px-5 py-3 text-base"},m$=(0,T.forwardRef)(function({label:t,color:r="orange",size:n="md",error:a,hint:o,wrapperClassName:i="",className:l="",id:c,...u},d){let m=(0,T.useId)(),f=c||m,[p,b]=(0,T.useState)(!1),x=O3[r];return(0,s.jsxs)("div",{className:`flex w-full flex-col gap-1.5 ${i}`,children:[t&&(0,s.jsxs)("label",{htmlFor:f,className:`text-xs uppercase tracking-[0.2em] font-bold ${x.label}`,style:{fontFamily:"var(--font-nerv-display)"},children:[(0,s.jsx)("span",{className:"opacity-50 mr-1",children:"//"}),t]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("span",{className:`
              pointer-events-none absolute left-[-0.85rem] top-1/2 -translate-y-1/2
              text-lg font-mono transition-all duration-100
              ${p?`${x.text} opacity-100 translate-x-0`:"opacity-0 -translate-x-2"}
            `,children:"["}),(0,s.jsx)("input",{id:f,ref:d,onFocus:y=>{b(!0),u.onFocus?.(y)},onBlur:y=>{b(!1),u.onBlur?.(y)},className:`
              w-full bg-nerv-black font-mono
              border ${p?`border-2 ${x.border}`:"border border-nerv-mid-gray"}
              ${a?"border-nerv-red":""}
              ${x.text} placeholder:text-nerv-mid-gray
              ${z3[n]}
              outline-none transition-all duration-100
              ${l}
            `,style:{fontFamily:"var(--font-nerv-mono)"},...u}),(0,s.jsx)("span",{className:`
              pointer-events-none absolute right-[-0.85rem] top-1/2 -translate-y-1/2
              text-lg font-mono transition-all duration-100
              ${p?`${x.text} opacity-100 translate-x-0`:"opacity-0 translate-x-2"}
            `,children:"]"})]}),a&&(0,s.jsxs)("span",{className:"text-xs text-nerv-red font-mono flex items-center gap-1",children:[(0,s.jsx)("span",{className:"text-[10px]",children:"!"})," ",a]}),o&&!a&&(0,s.jsx)("span",{className:"text-xs text-nerv-mid-gray font-mono",children:o})]})}),_3={orange:{text:"text-nerv-orange",border:"border-nerv-orange"},green:{text:"text-nerv-green",border:"border-nerv-green"},cyan:{text:"text-nerv-cyan",border:"border-nerv-cyan"}},M2={sm:"min-h-[34px] px-3 py-1.5 text-xs",md:"min-h-[42px] px-4 py-2.5 text-sm",lg:"min-h-[48px] px-5 py-3 text-base"},B3=M2,$3={sm:18,md:28,lg:34};function p2(e,t){if(Array.isArray(e)){let r=e.filter(n=>n!=="");return t?Array.from(new Set(r)):r.slice(0,1)}return typeof e=="string"&&e!==""?[e]:[]}function g2(e,t,r){let n=e[r];if(n&&!n.disabled)return r;let a=e.findIndex(o=>t.includes(o.value)&&!o.disabled);return a>=0?a:e.findIndex(o=>!o.disabled)}function F3(e,t,r){if(e.length===0)return-1;let n=t>=0?t:r===1?-1:0;for(let a=1;a<=e.length;a+=1){let o=(n+r*a+e.length)%e.length;if(!e[o]?.disabled)return o}return t}function L3(e,t,r){if(e.length<=1)return e.length;let n=r&&r>0?Math.max(12,Math.floor((r-56)/8)):$3[t],a=0;for(let o=0;o<e.length;o+=1){let i=e.length-o-1,l=i>0?String(i).length+5:0,c=e[o].length+6;if(a+c+l>n)return Math.max(1,o);a+=c}return e.length}function U3(e,t){return e.length!==t.length?!1:e.every((r,n)=>r===t[n])}var p$=(0,T.forwardRef)(function({label:t,options:r,color:n="orange",size:a="md",placeholder:o="SELECT...",error:i,wrapperClassName:l="",className:c="",id:u,multiple:d=!1,filter:m=!1,value:f,defaultValue:p,onValueChange:b,disabled:x,name:y,required:g,form:h,onChange:v,onFocus:w,onBlur:k,...A},N){let S=(0,T.useId)(),D=u||S,E=`${D}-native`,V=`${D}-listbox`,F=`${D}-filter`,M=d||m,R=_3[n],z=f!==void 0,U=(0,T.useRef)(p2(p,d)),[I,j]=(0,T.useState)(U.current),Z=z?p2(f,d):I,ae=Z[0]??"",[ue,Gt]=(0,T.useState)(Z),[xt,lr]=(0,T.useState)(!1),[Ye,Cn]=(0,T.useState)(!1),[Pu,jo]=(0,T.useState)(""),[Ho,_r]=(0,T.useState)(-1),[B2,$2]=(0,T.useState)(null),Hl=(0,T.useRef)(null),i0=(0,T.useRef)(null),F2=(0,T.useRef)(null),Xu=(0,T.useRef)(null),Go=(0,T.useRef)(null),Ku=(0,T.useRef)(!1),L2=new Map(r.map(O=>[O.value,O])),xa=Z.map(O=>L2.get(O)).filter(O=>!!O),Br=m&&Pu.trim()?r.filter(O=>`${O.label} ${O.value}`.toLowerCase().includes(Pu.trim().toLowerCase())):r,U2=Ho>=0?`${V}-option-${Ho}`:void 0,l0=xa.map(O=>O.label),j2=L3(l0,a,B2),s0=xa.slice(0,j2),c0=xa.length-s0.length,u0=i?"border-2 border-nerv-red":xt||Ye?`border-2 ${R.border}`:"border border-nerv-mid-gray";(0,T.useImperativeHandle)(N,()=>Go.current),(0,T.useEffect)(()=>{if(!M||!Xu.current)return;let O=Xu.current,we=()=>{let ya=O.getBoundingClientRect().width;$2(ya>0?ya:null)};if(we(),typeof ResizeObserver>"u")return;let yt=new ResizeObserver(()=>we());return yt.observe(O),()=>yt.disconnect()},[M,l0.length]),(0,T.useEffect)(()=>{U3(ue,Z)||Gt(Z)},[ue,Z]),(0,T.useEffect)(()=>{!M||!Ye||_r(O=>g2(Br,Z,O))},[M,Ye,Z,Br]),(0,T.useEffect)(()=>{if(!M||!Ye)return;let O=we=>{Hl.current?.contains(we.target)||(Cn(!1),jo(""),_r(-1),lr(!1))};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[M,Ye]),(0,T.useEffect)(()=>{!M||!Ku.current||(Ku.current=!1,Go.current?.dispatchEvent(new Event("change",{bubbles:!0})))},[M,ue]),(0,T.useEffect)(()=>{if(!M||z)return;let O=Go.current,we=(h&&document.getElementById(h)instanceof HTMLFormElement?document.getElementById(h):null)??O?.form;if(!we)return;let yt=()=>{j(U.current),jo(""),Cn(!1),_r(-1)};return we.addEventListener("reset",yt),()=>we.removeEventListener("reset",yt)},[h,z,M]);let d0=O=>{z||j(O),Gt(O),Ku.current=!0,b?.(d?O:O[0]??"")},Gl=(O=!1)=>{Cn(!1),jo(""),_r(-1),O&&i0.current?.focus()},f0=()=>{x||(Cn(!0),_r(g2(Br,Z,-1)))},H2=()=>{if(Ye){Gl();return}f0()},Zu=O=>{if(!O.disabled){if(d){let yt=Z.includes(O.value)?Z.filter(ya=>ya!==O.value):[...Z,O.value];d0(yt);return}d0([O.value]),Gl(!0)}},m0=O=>{_r(we=>F3(Br,we,O))},p0=O=>{if(!x){if(!Ye){(O.key==="ArrowDown"||O.key==="ArrowUp"||O.key==="Enter"||O.key===" ")&&(O.preventDefault(),f0());return}if(O.key==="Escape"){O.preventDefault(),Gl(!0);return}if(O.key==="Tab"){Gl(!1);return}if(O.key==="ArrowDown"){O.preventDefault(),m0(1);return}if(O.key==="ArrowUp"){O.preventDefault(),m0(-1);return}if(O.key==="Enter"){O.preventDefault();let we=Br[Ho];we&&Zu(we);return}if(O.key===" "&&!m){O.preventDefault();let we=Br[Ho];we&&Zu(we)}}},G2=O=>{M&&(Hl.current?.contains(O.relatedTarget)||(xt||lr(!0),w?.(O)))},q2=O=>{M&&(Hl.current?.contains(O.relatedTarget)||(lr(!1),Cn(!1),jo(""),_r(-1),k?.(O)))};return(0,s.jsxs)("div",{ref:Hl,className:`flex w-full flex-col gap-1.5 ${l}`,onFocusCapture:G2,onBlurCapture:q2,children:[t&&(0,s.jsxs)("label",{htmlFor:D,className:`text-xs uppercase tracking-[0.2em] font-bold ${R.text}`,style:{fontFamily:"var(--font-nerv-display)"},children:[(0,s.jsx)("span",{className:"opacity-50 mr-1",children:"//"}),t]}),!M&&(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("span",{className:`pointer-events-none absolute left-[-0.85rem] top-1/2 -translate-y-1/2 text-lg font-mono transition-all duration-100 ${xt?`${R.text} opacity-100`:"opacity-0"}`,children:"<"}),(0,s.jsxs)("div",{className:"relative flex-1",children:[(0,s.jsxs)("select",{id:D,ref:Go,disabled:x,onFocus:O=>{lr(!0),w?.(O)},onBlur:O=>{lr(!1),k?.(O)},onChange:O=>{v?.(O),b?.(O.target.value)},value:f!==void 0?ae:void 0,defaultValue:f===void 0?ae:void 0,className:`
                  w-full appearance-none bg-nerv-black font-mono cursor-pointer
                  ${u0}
                  ${R.text}
                  ${M2[a]}
                  pr-8 outline-none transition-all duration-100
                  disabled:cursor-not-allowed disabled:opacity-60
                  ${c}
                `,style:{fontFamily:"var(--font-nerv-mono)"},name:y,required:g,form:h,...A,children:[o&&(0,s.jsx)("option",{value:"",disabled:!0,children:o}),r.map(O=>(0,s.jsx)("option",{value:O.value,disabled:O.disabled,children:O.label},O.value))]}),(0,s.jsx)("div",{className:`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${R.text}`,children:(0,s.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"currentColor",children:(0,s.jsx)("path",{d:"M0 0L5 6L10 0H0Z"})})})]}),(0,s.jsx)("span",{className:`pointer-events-none absolute right-[-0.85rem] top-1/2 -translate-y-1/2 text-lg font-mono transition-all duration-100 ${xt?`${R.text} opacity-100`:"opacity-0"}`,children:">"})]}),M&&(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("span",{className:`pointer-events-none absolute left-[-0.85rem] top-1/2 -translate-y-1/2 text-lg font-mono transition-all duration-100 ${xt||Ye?`${R.text} opacity-100`:"opacity-0"}`,children:"<"}),(0,s.jsxs)("div",{className:"relative flex-1",children:[(0,s.jsxs)("button",{id:D,ref:i0,type:"button",disabled:x,role:"combobox","aria-expanded":Ye,"aria-controls":V,"aria-haspopup":"listbox","aria-activedescendant":Ye?U2:void 0,"aria-invalid":i?!0:void 0,"aria-disabled":x?!0:void 0,className:`
                  relative w-full bg-nerv-black font-mono text-left
                  ${u0}
                  ${R.text}
                  ${B3[a]}
                  pr-10 outline-none transition-all duration-100
                  disabled:cursor-not-allowed disabled:opacity-60
                  ${c}
                `,style:{fontFamily:"var(--font-nerv-mono)"},onClick:H2,onKeyDown:p0,children:[(0,s.jsx)("div",{ref:Xu,className:"min-w-0 overflow-hidden",children:d?(0,s.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden whitespace-nowrap",children:[xa.length===0&&(0,s.jsx)("span",{className:"block truncate text-nerv-mid-gray",children:o}),s0.map(O=>(0,s.jsx)("span",{className:"inline-flex min-w-0 max-w-[11rem] items-center border border-current/40 bg-nerv-dark-gray/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]",children:(0,s.jsx)("span",{className:"truncate",children:O.label})},O.value)),c0>0&&(0,s.jsxs)("span",{className:"inline-flex shrink-0 items-center border border-current/40 bg-nerv-dark-gray/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]",children:["+",c0]})]}):(0,s.jsx)("span",{className:`block truncate ${xa[0]?"":"text-nerv-mid-gray"}`,children:xa[0]?.label||o})}),(0,s.jsx)("div",{className:`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-100 ${Ye?"rotate-180":""} ${R.text}`,children:(0,s.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"currentColor",children:(0,s.jsx)("path",{d:"M0 0L5 6L10 0H0Z"})})})]}),(0,s.jsxs)("select",{id:E,ref:Go,multiple:d,value:d?ue:ue[0]??"",onChange:v??(()=>{}),name:y,required:g,form:h,disabled:x,"aria-hidden":"true",tabIndex:-1,className:"pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0",...A,children:[!d&&o&&(0,s.jsx)("option",{value:"",disabled:!0,children:o}),r.map(O=>(0,s.jsx)("option",{value:O.value,disabled:O.disabled,children:O.label},O.value))]}),Ye&&(0,s.jsxs)("div",{className:`absolute left-0 right-0 z-50 mt-1 border ${R.border} bg-nerv-black shadow-[0_0_0_1px_rgba(0,0,0,0.45)]`,children:[m&&(0,s.jsx)("div",{className:"border-b border-nerv-mid-gray/60 px-3 py-2",children:(0,s.jsx)("input",{id:F,ref:F2,type:"text",autoFocus:!0,value:Pu,onChange:O=>jo(O.target.value),onKeyDown:p0,placeholder:"FILTER OPTIONS...","aria-label":t?`${t} filter`:"Filter options",className:`
                          w-full border border-nerv-mid-gray bg-nerv-dark-gray/40
                          px-3 py-2 font-mono text-xs outline-none transition-colors
                          focus:border-current ${R.text} placeholder:text-nerv-mid-gray
                        `,style:{fontFamily:"var(--font-nerv-mono)"}})}),(0,s.jsxs)("div",{id:V,role:"listbox","aria-multiselectable":d||void 0,className:"max-h-64 overflow-y-auto py-1",children:[Br.length===0&&(0,s.jsx)("div",{className:"px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-nerv-mid-gray",style:{fontFamily:"var(--font-nerv-mono)"},children:"NO MATCHES"}),Br.map((O,we)=>{let yt=Z.includes(O.value),ya=we===Ho;return(0,s.jsxs)("div",{id:`${V}-option-${we}`,role:"option","aria-selected":yt,"aria-disabled":O.disabled||void 0,className:`
                            flex cursor-pointer items-center justify-between gap-3 px-4 py-2
                            text-xs uppercase tracking-[0.16em] transition-colors
                            ${O.disabled?"cursor-not-allowed opacity-35":ya?"bg-nerv-white/8":"hover:bg-nerv-white/[0.04]"}
                            ${yt?R.text:"text-nerv-white"}
                          `,style:{fontFamily:"var(--font-nerv-mono)"},onMouseEnter:()=>_r(we),onMouseDown:Y2=>Y2.preventDefault(),onClick:()=>Zu(O),children:[(0,s.jsx)("span",{className:"min-w-0 truncate",children:O.label}),(0,s.jsx)("span",{className:"shrink-0 text-[10px] text-current/70",children:d?yt?"[x]":"[ ]":yt?"<-":""})]},O.value)})]})]})]}),(0,s.jsx)("span",{className:`pointer-events-none absolute right-[-0.85rem] top-1/2 -translate-y-1/2 text-lg font-mono transition-all duration-100 ${xt||Ye?`${R.text} opacity-100`:"opacity-0"}`,children:">"})]}),i&&(0,s.jsxs)("span",{className:"text-xs text-nerv-red font-mono",children:[(0,s.jsx)("span",{className:"text-[10px]",children:"!"})," ",i]})]})});function j3(e){return e>=95?{filled:"bg-nerv-red",glow:"shadow-[0_0_6px_rgba(255,0,0,0.5)]",text:"text-nerv-red",blink:!0}:e>=80?{filled:"bg-nerv-orange",glow:"shadow-[0_0_6px_rgba(255,153,0,0.3)]",text:"text-nerv-orange",blink:!1}:e>=50?{filled:"bg-nerv-green",glow:"shadow-[0_0_6px_rgba(0,255,0,0.3)]",text:"text-nerv-green",blink:!1}:{filled:"bg-nerv-cyan",glow:"shadow-[0_0_6px_rgba(0,255,255,0.3)]",text:"text-nerv-cyan",blink:!1}}var g$=(0,T.forwardRef)(function({value:t,label:r,showPercentage:n=!0,blocks:a=20,blockHeight:o=16,className:i="",...l},c){let u=Math.max(0,Math.min(100,t)),d=Math.round(u/100*a),{filled:m,glow:f,text:p,blink:b}=j3(u);return(0,s.jsxs)("div",{ref:c,className:`flex flex-col gap-1 ${i}`,...l,children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[r&&(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.2em] font-bold ${p}`,style:{fontFamily:"var(--font-nerv-display)"},children:r}),n&&(0,s.jsxs)(B.span,{className:`text-xs font-mono font-bold ${p}`,style:{fontFamily:"var(--font-nerv-mono)"},animate:b?{opacity:[1,.3,1]}:{},transition:b?{duration:.5,repeat:1/0}:{},children:[u.toFixed(1),"%"]})]}),(0,s.jsx)("div",{className:"flex gap-[2px] bg-nerv-dark-gray border border-nerv-mid-gray p-1",role:"progressbar","aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":100,children:Array.from({length:a},(x,y)=>{let g=y<d;return(0,s.jsx)(B.div,{className:`
                  flex-1
                  ${g?`${m} ${f}`:"bg-nerv-black/50 border border-nerv-mid-gray/30"}
                `,style:{height:o},initial:!1,animate:g&&b&&y>=d-2?{opacity:[1,.4,1]}:{opacity:g?1:.3},transition:g&&b&&y>=d-2?{duration:.5,repeat:1/0,delay:y*.05}:{duration:.2}},y)})}),(0,s.jsxs)("div",{className:"flex justify-between text-[9px] font-mono text-nerv-mid-gray px-1",children:[(0,s.jsx)("span",{children:"000"}),(0,s.jsx)("span",{children:"025"}),(0,s.jsx)("span",{children:"050"}),(0,s.jsx)("span",{children:"075"}),(0,s.jsx)("span",{children:"100"})]})]})}),H3={orange:{header:"bg-nerv-orange text-nerv-black",row:"text-nerv-orange",hoverRow:"hover:bg-nerv-orange hover:text-nerv-black",border:"border-nerv-orange/20"},green:{header:"bg-nerv-green text-nerv-black",row:"text-nerv-green",hoverRow:"hover:bg-nerv-green hover:text-nerv-black",border:"border-nerv-green/20"},cyan:{header:"bg-nerv-cyan text-nerv-black",row:"text-nerv-cyan",hoverRow:"hover:bg-nerv-cyan hover:text-nerv-black",border:"border-nerv-cyan/20"}};function G3(e,t){let r=e.find(a=>a[t]!=null&&a[t]!=="");if(!r)return"string";let n=String(r[t]);return/^-?\d+$/.test(n)?"int":/^-?\d+\.?\d*$/.test(n)&&!isNaN(parseFloat(n))?"float":!isNaN(Date.parse(n))&&n.length>4?"datetime":"string"}var h$=(0,T.forwardRef)(function({columns:t,data:r,color:n="green",autoScroll:a=!1,scrollSpeed:o=30,maxHeight:i="400px",title:l,showIndex:c=!1,pageSize:u,className:d="",...m},f){let p=H3[n],b=(0,T.useRef)(null),[x,y]=(0,T.useState)(!1),[g,h]=(0,T.useState)(null),[v,w]=(0,T.useState)(null),[k,A]=(0,T.useState)(0);(0,T.useEffect)(()=>{A(0)},[r.length,g,v]);let N=(0,T.useMemo)(()=>{if(!g||!v)return r;let V=t.find(M=>M.key===g),F=V?.type==="auto"||!V?.type?G3(r,g):V.type;return[...r].sort((M,R)=>{let z=M[g]??"",U=R[g]??"",I=0;switch(F){case"int":case"float":I=parseFloat(String(z))-parseFloat(String(U));break;case"datetime":I=Date.parse(String(z))-Date.parse(String(U));break;default:I=String(z).localeCompare(String(U))}return v==="desc"?-I:I})},[r,g,v,t]),S=u?Math.max(1,Math.ceil(N.length/u)):1,D=u?N.slice(k*u,(k+1)*u):N,E=V=>{V.sortable&&(g!==V.key?(h(V.key),w("asc")):v==="asc"?w("desc"):(h(null),w(null)))};return(0,T.useEffect)(()=>{if(!a||x)return;let V=b.current;if(!V)return;let F=setInterval(()=>{V.scrollTop+=1,V.scrollTop>=V.scrollHeight-V.clientHeight&&(V.scrollTop=0)},1e3/o);return()=>clearInterval(F)},[a,o,x]),(0,s.jsxs)("div",{ref:f,className:`bg-nerv-black border border-nerv-mid-gray overflow-x-auto ${d}`,...m,children:[l&&(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-nerv-mid-gray bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.2em] font-bold ${p.row}`,style:{fontFamily:"var(--font-nerv-display)"},children:l}),(0,s.jsxs)("span",{className:"text-[10px] font-mono text-nerv-mid-gray",children:[r.length," ENTRIES"]})]}),(0,s.jsx)("div",{ref:b,className:"overflow-auto",style:{maxHeight:i},onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:(0,s.jsxs)("table",{className:"w-full border-collapse",style:{fontFamily:"var(--font-nerv-mono)"},children:[(0,s.jsx)("thead",{className:"sticky top-0 z-10",children:(0,s.jsxs)("tr",{className:p.header,children:[c&&(0,s.jsx)("th",{className:"px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-left border-r border-black/20 w-12",children:"#"}),t.map(V=>(0,s.jsxs)("th",{onClick:()=>E(V),className:`px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold border-r border-black/20 last:border-r-0 ${V.sortable?"cursor-pointer select-none":""}`,style:{width:V.width,textAlign:V.align||"left",fontFamily:"var(--font-nerv-display)"},children:[V.header,V.sortable&&(0,s.jsx)("span",{className:"ml-1.5 text-[8px] opacity-80",children:g===V.key?v==="asc"?"\u25B2":"\u25BC":"\u2014"})]},V.key))]})}),(0,s.jsx)("tbody",{children:D.map((V,F)=>(0,s.jsxs)(B.tr,{initial:{opacity:0},animate:{opacity:1},transition:{delay:F*.02},className:`
                    ${p.row} ${p.hoverRow}
                    border-b border-nerv-mid-gray/30
                    transition-colors duration-75 cursor-default text-xs
                  `,children:[c&&(0,s.jsx)("td",{className:"px-3 py-1.5 text-nerv-mid-gray border-r border-nerv-mid-gray/20",children:String((u?k*u:0)+F+1).padStart(3,"0")}),t.map(M=>(0,s.jsx)("td",{className:"px-3 py-1.5 border-r border-nerv-mid-gray/20 last:border-r-0 whitespace-nowrap",style:{textAlign:M.align||"left"},children:V[M.key]??"\u2014"},M.key))]},`${k}-${F}`))})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1 border-t border-nerv-mid-gray bg-nerv-dark-gray text-[10px] font-mono text-nerv-mid-gray",children:[(0,s.jsxs)("span",{children:["ROWS: ",r.length]}),u&&S>1&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("button",{onClick:()=>A(V=>Math.max(0,V-1)),disabled:k===0,className:`uppercase tracking-wider cursor-pointer ${k===0?"opacity-30 cursor-default":`${p.row} hover:underline`}`,children:"PREV"}),(0,s.jsxs)("span",{className:p.row,children:["PAGE ",String(k+1).padStart(2,"0"),"/",String(S).padStart(2,"0")]}),(0,s.jsx)("button",{onClick:()=>A(V=>Math.min(S-1,V+1)),disabled:k===S-1,className:`uppercase tracking-wider cursor-pointer ${k===S-1?"opacity-30 cursor-default":`${p.row} hover:underline`}`,children:"NEXT"})]}),a&&(0,s.jsx)("span",{className:x?"text-nerv-orange":"",children:x?"SCROLL PAUSED":"AUTO-SCROLL ACTIVE"})]})]})}),v$=(0,T.forwardRef)(function({open:t,title:r="SYSTEM NOTIFICATION",children:n,severity:a="normal",acceptText:o="ACCEPT",declineText:i="DECLINE",onAccept:l,onDecline:c,onClose:u,showHazardStripes:d,className:m="",portalContainer:f},p){let b=a==="critical"||d,x=a==="critical"?"border-nerv-red":a==="warning"?"border-nerv-orange":"border-nerv-mid-gray",y=a==="critical"?"text-nerv-red":"text-nerv-orange",g=(0,s.jsx)(Bt,{children:t&&(0,s.jsxs)(B.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},className:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-label":r,children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-black/80",onClick:u,children:(0,s.jsx)(D3,{color:a==="critical"?"red":a==="warning"?"orange":"green",opacity:.28,density:"normal",animated:a!=="normal",variant:a==="critical"?"alert":"monitor"})}),(0,s.jsxs)(B.div,{ref:p,initial:{scale:.9,y:20},animate:{scale:1,y:0},exit:{scale:.9,y:20},transition:{duration:.15,ease:"easeOut"},className:`
              relative w-full max-w-lg bg-nerv-black
              border-2 ${x}
              ${m}
            `,children:[b&&(0,s.jsx)("div",{className:"h-3 hazard-stripes-black"}),(0,s.jsxs)("div",{className:`flex items-center justify-between px-4 py-2 border-b ${x} bg-nerv-dark-gray`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[a==="critical"&&(0,s.jsx)(B.span,{animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0},className:"text-nerv-red text-lg leading-none",children:"!"}),(0,s.jsx)("h2",{className:`text-sm uppercase tracking-[0.2em] font-bold ${y}`,style:{fontFamily:"var(--font-nerv-display)"},children:r})]}),(0,s.jsx)("span",{className:"text-[10px] font-mono text-nerv-mid-gray",children:"MAGI.SYS"})]}),(0,s.jsx)("div",{className:"px-6 py-5 text-sm text-nerv-white font-mono leading-relaxed",children:n}),(0,s.jsxs)("div",{className:"flex gap-3 px-6 py-4 border-t border-nerv-mid-gray bg-nerv-dark-gray",children:[c&&(0,s.jsx)(m2,{variant:"ghost",size:"sm",onClick:c,fullWidth:!0,children:i}),l&&(0,s.jsx)(m2,{variant:a==="critical"?"danger":"primary",size:"sm",onClick:l,fullWidth:!0,children:o})]}),b&&(0,s.jsx)("div",{className:"h-3 hazard-stripes-black"}),(0,s.jsx)("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-current opacity-30 -translate-x-px -translate-y-px"}),(0,s.jsx)("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-current opacity-30 translate-x-px -translate-y-px"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-current opacity-30 -translate-x-px translate-y-px"}),(0,s.jsx)("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-current opacity-30 translate-x-px translate-y-px"})]})]})});return typeof document>"u"?g:(0,a0.createPortal)(g,f||document.body)}),q3={orange:{active:"bg-nerv-black text-nerv-orange border-nerv-orange",inactive:"bg-nerv-dark-gray text-nerv-mid-gray border-nerv-mid-gray hover:text-nerv-orange hover:border-nerv-orange/50",indicator:"bg-nerv-orange"},green:{active:"bg-nerv-black text-nerv-green border-nerv-green",inactive:"bg-nerv-dark-gray text-nerv-mid-gray border-nerv-mid-gray hover:text-nerv-green hover:border-nerv-green/50",indicator:"bg-nerv-green"},cyan:{active:"bg-nerv-black text-nerv-cyan border-nerv-cyan",inactive:"bg-nerv-dark-gray text-nerv-mid-gray border-nerv-mid-gray hover:text-nerv-cyan hover:border-nerv-cyan/50",indicator:"bg-nerv-cyan"}},b$=(0,T.forwardRef)(function({tabs:t,activeTab:r,onTabChange:n,direction:a="horizontal",color:o="orange",className:i="",...l},c){let u=q3[o],d=a==="vertical";return(0,s.jsx)("nav",{ref:c,className:`
          flex ${d?"flex-col":"flex-row"}
          ${i}
        `,role:"tablist",...l,children:t.map((m,f)=>{let p=m.id===r;return(0,s.jsxs)("button",{role:"tab","aria-selected":p,disabled:m.disabled,onClick:()=>!m.disabled&&n(m.id),className:`
                relative cursor-pointer select-none
                uppercase tracking-[0.15em] text-xs font-bold
                transition-colors duration-100 whitespace-nowrap
                disabled:opacity-30 disabled:cursor-not-allowed
                flex items-center overflow-hidden
                ${d?`px-4 py-3 text-left border-l-2 ${p?u.active:u.inactive}`:`px-5 py-2.5 border-b-2 ${p?u.active:u.inactive}`}
              `,style:{fontFamily:"var(--font-nerv-display)"},children:[(0,s.jsx)("span",{className:"opacity-40 mr-2 text-[10px] shrink-0",children:String(f+1).padStart(2,"0")}),m.icon&&(0,s.jsx)("span",{className:"mr-1.5 shrink-0",children:m.icon}),m.label,p&&(0,s.jsx)(B.span,{initial:{scale:0},animate:{scale:1},className:`ml-2 w-1.5 h-1.5 shrink-0 ${u.indicator}`}),p&&(0,s.jsx)(B.div,{layoutId:`activeTab-${t[0]?.id??"nav"}`,className:`absolute ${u.indicator} ${d?"left-0 top-0 bottom-0 w-0.5":"bottom-0 left-0 right-0 h-0.5"}`,transition:{type:"spring",stiffness:500,damping:35}})]},m.id)})})}),Y3={content:"auto",narrow:"24%",medium:"38%",wide:"62%",full:"88%"},P3={title:"var(--font-nerv-title)",display:"var(--font-nerv-display)",mono:"var(--font-nerv-mono)"},X3={primary:"#f2ece2",secondary:"rgba(242,236,226,0.86)",muted:"rgba(242,236,226,0.58)"},K3={xs:"1.8cqw",sm:"2.6cqw",md:"3.6cqw",lg:"6.2cqw",xl:"9.8cqw",display:"16cqw"},Z3={masthead:{align:"left",width:"medium",font:"title",tone:"primary",size:"xl",italic:!1,uppercase:!1},lead:{align:"left",width:"medium",font:"title",tone:"primary",size:"xl",italic:!1,uppercase:!1},hero:{align:"left",width:"full",font:"title",tone:"primary",size:"display",italic:!1,uppercase:!1},label:{align:"left",width:"content",font:"display",tone:"primary",size:"md",italic:!1,uppercase:!1},quote:{align:"right",width:"wide",font:"title",tone:"primary",size:"xl",italic:!1,uppercase:!1},support:{align:"center",width:"wide",font:"title",tone:"secondary",size:"lg",italic:!1,uppercase:!1},footer:{align:"left",width:"medium",font:"display",tone:"secondary",size:"md",italic:!1,uppercase:!1}},h2={"top-left":{anchor:"top-left",top:"8%",left:"6%",align:"left"},"top-center":{anchor:"top-center",top:"8%",left:"50%",align:"center",transform:"translateX(-50%)"},"top-right":{anchor:"top-right",top:"8%",right:"6%",align:"right"},"middle-left":{anchor:"middle-left",top:"50%",left:"6%",align:"left",transform:"translateY(-50%)"},center:{anchor:"center",top:"50%",left:"50%",align:"center",transform:"translate(-50%, -50%)"},"middle-right":{anchor:"middle-right",top:"50%",right:"6%",align:"right",transform:"translateY(-50%)"},"bottom-left":{anchor:"bottom-left",bottom:"10%",left:"6%",align:"left"},"bottom-center":{anchor:"bottom-center",bottom:"10%",left:"50%",align:"center",transform:"translateX(-50%)"},"bottom-right":{anchor:"bottom-right",bottom:"10%",right:"6%",align:"right"}},Q3={stacked:{masthead:{anchor:"top-left",top:"7%",left:"5.5%",width:"narrow"},lead:{anchor:"top-left",top:"22%",left:"5.5%",width:"medium"},hero:{anchor:"middle-left",top:"52%",left:"5%",width:"full"},label:{anchor:"bottom-left",bottom:"24%",left:"5.5%",width:"content"},quote:{anchor:"bottom-right",bottom:"11%",right:"6.5%",width:"full",align:"right"},support:{anchor:"bottom-center",bottom:"9%",left:"50%",width:"wide",align:"center",transform:"translateX(-50%)"},footer:{anchor:"bottom-left",bottom:"8.5%",left:"5.5%",width:"medium"}},episode:{masthead:{anchor:"top-left",top:"8%",left:"6%",width:"narrow"},label:{anchor:"top-left",top:"10%",left:"6%",width:"content"},lead:{anchor:"top-left",top:"20%",left:"6%",width:"medium"},hero:{anchor:"bottom-right",bottom:"10%",right:"6%",width:"wide",align:"right"},support:{anchor:"middle-left",top:"45%",left:"6%",width:"medium"},quote:{anchor:"bottom-right",bottom:"10%",right:"6%",width:"wide",align:"right"},footer:{anchor:"bottom-left",bottom:"8%",left:"6%",width:"medium"}},finale:{masthead:{anchor:"top-left",top:"7%",left:"5.5%",width:"narrow"},lead:{anchor:"top-left",top:"20%",left:"5.5%",width:"medium"},hero:{anchor:"middle-left",top:"48%",left:"0.5%",width:"full"},label:{anchor:"bottom-left",bottom:"24%",left:"5.5%",width:"content"},quote:{anchor:"bottom-right",bottom:"10%",right:"6.5%",width:"full",align:"right"},support:{anchor:"bottom-center",bottom:"9%",left:"50%",width:"wide",align:"center",transform:"translateX(-50%)"},footer:{anchor:"bottom-left",bottom:"8.5%",left:"5.5%",width:"medium"}}},n0={masthead:"top-left",lead:"top-left",hero:"middle-left",label:"bottom-left",quote:"bottom-right",support:"bottom-center",footer:"bottom-left"},I3={hidden:{opacity:0,y:10},visible:{opacity:1,y:0}};function W3(e){return Array.isArray(e)?e:e.split(`
`)}function J3(e,t){return t==="freeform"?h2[e.anchor??n0[e.role]]:Q3[t][e.role]??h2[e.anchor??n0[e.role]]}function eT(e,t){return e==="mono"?"0.12em":e==="display"?t==="sm"||t==="xs"?"0.14em":"0.09em":t==="display"?"-0.065em":"-0.05em"}function tT(e,t){return e==="mono"?1.1:e==="display"?t==="xs"||t==="sm"?.98:.94:t==="display"?.84:.88}function rT(e){return e==="muted"?"0 0 6px rgba(255, 221, 177, 0.16)":e==="secondary"?"0 0 8px rgba(255, 231, 194, 0.34), 0 0 20px rgba(255, 176, 90, 0.18)":"0 0 8px rgba(255, 244, 219, 0.52), 0 0 24px rgba(255, 186, 91, 0.24)"}function nT(e,t,r){if(!!!(t||r))return e;let a=`translate(${t??"0px"}, ${r??"0px"})`;return e?`${e} ${a}`:a}function aT(e,t,r){let n=J3(e,t),a=Z3[e.role],o=e.font??a.font,i=e.tone??a.tone,l=e.size??a.size,c=e.align??n.align??a.align,u=e.width??n.width??a.width,d=n.anchor??e.anchor??n0[e.role],m=e.italic??a.italic,f=e.uppercase??a.uppercase;return{anchor:d,align:c,width:u,font:o,tone:i,size:l,italic:m,uppercase:f,style:{position:"absolute",top:n.top,right:n.right,bottom:n.bottom,left:n.left,transform:nT(n.transform,e.offsetX,e.offsetY),width:Y3[u],textAlign:c,color:X3[i],fontFamily:P3[o],fontSize:K3[l],fontStyle:m?"italic":"normal",fontWeight:o==="mono"?500:700,lineHeight:tT(o,l),letterSpacing:eT(o,l),textTransform:f?"uppercase":"none",textShadow:r==="glow"?rT(i):void 0}}}function oT(e){return e?"h1":"div"}var iT=(0,T.forwardRef)(function({template:t="stacked",blocks:r,appearance:n="plain",reveal:a="minimal",className:o="",...i},l){let u=Wp()?"none":a,d=!1;return(0,s.jsx)("div",{ref:l,"data-title-screen":"","data-template":t,"data-appearance":n,"data-reveal":u,className:`relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-4 text-[#f2ece2] select-none sm:px-6 sm:py-6 ${o}`,...i,children:(0,s.jsx)("div",{"data-title-screen-stage":"",className:"relative h-full w-auto max-w-full aspect-[4/3] overflow-hidden",style:{containerType:"size"},children:r.map((m,f)=>{let p=W3(m.text),b=aT(m,t,n),x=m.role==="hero"&&!d,y=oT(x);x&&(d=!0);let g=(0,s.jsx)(y,{"data-role":m.role,"data-anchor":b.anchor,"data-align":b.align,"data-width":b.width,className:"m-0",style:b.style,children:p.map((h,v)=>(0,s.jsx)("span",{"data-title-screen-line":"",className:"block whitespace-nowrap",children:h},`${m.id??m.role}-${v}`))});return u==="none"?(0,s.jsx)("div",{"data-block-frame":"",children:g},m.id??`${m.role}-${f}`):(0,s.jsx)(B.div,{"data-block-frame":"","data-motion":"minimal",initial:"hidden",animate:"visible",variants:I3,transition:{duration:.26,ease:"easeOut",delay:f*.07},children:g},m.id??`${m.role}-${f}`)})})})});iT.displayName="TitleScreen";var v2=["0x7F3A >> PATTERN_ANALYSIS","0xAF02 :: SIGNAL_PROC","0x1B9E mem_alloc(PRIBNOW_BOX)","0xCC41 NEURAL_LINK :: stable","if (waveform.type === BLUE) {","  exec PRIORITY_ALPHA;","  sync_rate = calc(0.4123);","}","return MAGI_CONSENSUS;","await harmonics.verify();","deploy AT_FIELD_BARRIER;","scan SECTOR_7G :: pass","LCL_PRESSURE.normalize();","PILOT_SYNC :: fluctuating","OVERRIDE :: pending auth","0xD4F0 >> compile_verdict()","0x88A1 sync CASPER_LOGIC","0x3C7B verify_consensus(3/3)"],Jp={top:"polygon(0 0, 100% 0, 85% 100%, 15% 100%)",bottomLeft:"polygon(0 0, 55% 0, 40% 100%, 0 100%)",bottomRight:"polygon(45% 0, 100% 0, 100% 100%, 60% 100%)"};function Lo(e){switch(e){case"accepted":return"rgba(255, 153, 0, 0.4)";case"rejected":return"rgba(255, 0, 0, 0.4)";case"computing":return"rgba(0, 255, 255, 0.4)";default:return"rgba(0, 255, 0, 0.15)"}}function Hu({vote:e,index:t}){let[r,n]=(0,T.useState)([]);(0,T.useEffect)(()=>{if(e.status!=="computing"){n([]);return}let i=setInterval(()=>{n(l=>[...l,v2[Math.floor(Math.random()*v2.length)]].slice(-20))},120);return()=>clearInterval(i)},[e.status]);let a=e.status==="accepted"?"text-nerv-orange":e.status==="rejected"?"text-nerv-red":e.status==="computing"?"text-nerv-cyan":"text-nerv-green",o=e.status==="accepted"?"ACCEPTED":e.status==="rejected"?"REJECTED":e.status==="computing"?"COMPUTING...":"STANDBY";return(0,s.jsxs)("div",{className:"flex flex-col md:border-r border-nerv-mid-gray last:border-r-0 bg-nerv-black overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-2 border-b-2 border-nerv-mid-gray bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:e.name}),(0,s.jsxs)("span",{className:"text-[10px] font-mono text-nerv-mid-gray",children:["0",t+1]})]}),(0,s.jsxs)("div",{className:"flex-1 min-h-[200px] relative",children:[e.status==="idle"&&(0,s.jsx)("div",{className:"flex items-center justify-center h-full p-4",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"text-2xl font-mono text-nerv-green/60 mb-2",children:"\u2014"}),(0,s.jsx)("div",{className:"text-xs font-mono text-nerv-green uppercase tracking-wider",children:"STANDBY"})]})}),e.status==="computing"&&(0,s.jsxs)("div",{className:"h-full overflow-hidden p-2",children:[(0,s.jsx)("div",{className:"space-y-0.5",children:r.map((i,l)=>(0,s.jsx)(B.div,{initial:{opacity:0,x:-10},animate:{opacity:l===r.length-1?1:.4,x:0},className:"text-[10px] font-mono text-nerv-cyan whitespace-nowrap",children:i},`${l}-${i}`))}),(0,s.jsx)(B.div,{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-nerv-cyan/50",animate:{scaleX:[0,1,0]},transition:{duration:2,repeat:1/0,ease:"linear"},style:{transformOrigin:"left"}})]}),e.status==="accepted"&&(0,s.jsx)(B.div,{initial:{opacity:0},animate:{opacity:1},className:"flex items-center justify-center h-full bg-nerv-orange",children:(0,s.jsx)("span",{className:"text-3xl font-black uppercase tracking-[0.1em] text-nerv-black",style:{fontFamily:"var(--font-nerv-display)"},children:"ACCEPTED"})}),e.status==="rejected"&&(0,s.jsx)(B.div,{initial:{opacity:0},animate:{opacity:1},className:"flex items-center justify-center h-full bg-nerv-red",children:(0,s.jsx)(B.span,{className:"text-3xl font-black uppercase tracking-[0.1em] text-nerv-black",style:{fontFamily:"var(--font-nerv-display)"},animate:{opacity:[1,0,1]},transition:{duration:.6,repeat:1/0},children:"REJECTED"})})]}),(0,s.jsx)("div",{className:`flex items-center justify-center px-3 py-1.5 border-t-2 border-nerv-mid-gray bg-nerv-dark-gray ${a}`,children:(0,s.jsx)(B.span,{className:"text-[10px] font-mono font-bold uppercase tracking-wider",animate:e.status==="computing"?{opacity:[1,.4,1]}:{},transition:e.status==="computing"?{duration:1,repeat:1/0}:{},children:o})})]})}var x$=(0,T.forwardRef)(function({votes:t,title:r="MAGI SUPER COMPUTER SYSTEM",className:n="",trapezoidal:a=!1,...o},i){if(a){let l=t[1]??t[0],c=t[2]??t[1]??t[0],u=t[0];return(0,s.jsxs)("div",{ref:i,className:`bg-nerv-black ${n}`,...o,children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 border-2 border-nerv-mid-gray border-b-0 bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:r}),(0,s.jsx)("div",{className:"flex gap-1.5",children:t.map((d,m)=>(0,s.jsx)("div",{className:`w-2 h-2 ${d.status==="accepted"?"bg-nerv-orange":d.status==="rejected"?"bg-nerv-red":d.status==="computing"?"bg-nerv-cyan":"bg-nerv-mid-gray"}`},m))})]}),(0,s.jsxs)("div",{className:"border-2 border-nerv-mid-gray bg-nerv-black p-4",children:[(0,s.jsx)("div",{className:"flex justify-center mb-[-12px]",children:(0,s.jsx)("div",{className:"w-full",style:{clipPath:Jp.top,boxShadow:`0 0 12px ${Lo(l.status)}, inset 0 0 8px ${Lo(l.status)}`},children:(0,s.jsx)(Hu,{vote:l,index:1})})}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-0",children:[(0,s.jsx)("div",{className:"mr-[-8px]",style:{clipPath:Jp.bottomLeft,boxShadow:`0 0 12px ${Lo(c.status)}, inset 0 0 8px ${Lo(c.status)}`},children:(0,s.jsx)(Hu,{vote:c,index:2})}),(0,s.jsx)("div",{className:"ml-[-8px]",style:{clipPath:Jp.bottomRight,boxShadow:`0 0 12px ${Lo(u.status)}, inset 0 0 8px ${Lo(u.status)}`},children:(0,s.jsx)(Hu,{vote:u,index:0})})]})]})]})}return(0,s.jsxs)("div",{ref:i,className:`bg-nerv-black ${n}`,...o,children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 border-2 border-nerv-mid-gray border-b-0 bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:r}),(0,s.jsx)("div",{className:"flex gap-1.5",children:t.map((l,c)=>(0,s.jsx)("div",{className:`w-2 h-2 ${l.status==="accepted"?"bg-nerv-orange":l.status==="rejected"?"bg-nerv-red":l.status==="computing"?"bg-nerv-cyan":"bg-nerv-mid-gray"}`},c))})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 border-2 border-nerv-mid-gray",children:t.map((l,c)=>(0,s.jsx)(Hu,{vote:l,index:c},l.name))})]})}),Gu=(e,t,r,n,a)=>{let o="",l=e/100,c=t/2;for(let u=0;u<=100;u++){let d=u*l,m=c+n*Math.sin(d*a+r);u===0?o+=`M ${d},${m}`:o+=` L ${d},${m}`}return o},y$=(0,T.forwardRef)(function({frequencyA:t=.04,frequencyB:r=.055,amplitudeA:n=50,amplitudeB:a=40,phaseA:o=0,phaseB:i=1.2,showGrid:l=!0,title:c,animated:u=!0,speed:d=1,className:m="",...f},p){let b=(0,T.useRef)(null),[x,y]=(0,T.useState)({width:600,height:200}),[g,h]=(0,T.useState)(!u),v=(0,T.useRef)(null),w=(0,T.useRef)(null),k=(0,T.useRef)(0),A=(0,T.useRef)(0);(0,T.useEffect)(()=>{let M=b.current;if(!M)return;let R=new ResizeObserver(z=>{for(let U of z){let{width:I,height:j}=U.contentRect;I>0&&j>0&&y({width:I,height:j})}});return R.observe(M),()=>R.disconnect()},[]);let{width:N,height:S}=x;(0,T.useEffect)(()=>{if(!u){h(!0);return}let M=setTimeout(()=>h(!0),1800);return()=>clearTimeout(M)},[u]),(0,T.useEffect)(()=>{if(!g)return;let M=0,R=z=>{M===0&&(M=z);let U=(z-M)/1e3;M=z,A.current+=U*d;let I=Gu(N,S,o+A.current,n,t),j=Gu(N,S,i+A.current*.7,a,r);v.current&&v.current.setAttribute("d",I),w.current&&w.current.setAttribute("d",j),k.current=requestAnimationFrame(R)};return k.current=requestAnimationFrame(R),()=>cancelAnimationFrame(k.current)},[g,N,S,o,i,n,a,t,r,d]);let D=(0,T.useMemo)(()=>{let M=[];for(let z=0;z<=N;z+=20)M.push({x1:z,y1:0,x2:z,y2:S});for(let z=0;z<=S;z+=20)M.push({x1:0,y1:z,x2:N,y2:z});return M},[N,S]),E=Gu(N,S,o,n,t),V=Gu(N,S,i,a,r),F=S/2;return(0,s.jsxs)("div",{ref:p,className:`bg-nerv-black border border-nerv-mid-gray flex flex-col ${m}`,...f,children:[c&&(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-nerv-mid-gray bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:c}),(0,s.jsxs)("div",{className:"flex items-center gap-3 text-[10px] font-mono",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-3 h-0.5 bg-nerv-cyan inline-block"}),(0,s.jsx)("span",{className:"text-nerv-cyan",children:"WAVE-A"})]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-3 h-0.5 bg-nerv-magenta inline-block"}),(0,s.jsx)("span",{className:"text-nerv-magenta",children:"WAVE-B"})]})]})]}),(0,s.jsx)("div",{ref:b,className:"flex-1 min-h-[120px]",children:(0,s.jsxs)("svg",{viewBox:`0 0 ${N} ${S}`,width:"100%",height:"100%",preserveAspectRatio:"none",className:"block",children:[l&&D.map((M,R)=>(0,s.jsx)("line",{x1:M.x1,y1:M.y1,x2:M.x2,y2:M.y2,stroke:"#00FF00",strokeWidth:"0.3",opacity:"0.12"},R)),(0,s.jsx)("line",{x1:0,y1:F,x2:N,y2:F,stroke:"#00FF00",strokeWidth:"0.6",opacity:"0.25"}),!g&&u?(0,s.jsx)(B.path,{d:E,fill:"none",stroke:"#00FFFF",strokeWidth:"1.5",opacity:"0.9",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.5,ease:"easeOut"},style:{filter:"drop-shadow(0 0 3px rgba(0, 255, 255, 0.5))"}}):(0,s.jsx)("path",{ref:v,d:E,fill:"none",stroke:"#00FFFF",strokeWidth:"1.5",opacity:"0.9",style:{filter:"drop-shadow(0 0 3px rgba(0, 255, 255, 0.5))"}}),!g&&u?(0,s.jsx)(B.path,{d:V,fill:"none",stroke:"#FF00FF",strokeWidth:"1.5",opacity:"0.9",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.5,ease:"easeOut",delay:.3},style:{filter:"drop-shadow(0 0 3px rgba(255, 0, 255, 0.5))"}}):(0,s.jsx)("path",{ref:w,d:V,fill:"none",stroke:"#FF00FF",strokeWidth:"1.5",opacity:"0.9",style:{filter:"drop-shadow(0 0 3px rgba(255, 0, 255, 0.5))"}}),(0,s.jsx)("text",{x:"4",y:"12",fontSize:"8",fill:"rgba(0, 255, 0, 0.4)",fontFamily:"var(--font-nerv-mono)",children:"+1.0"}),(0,s.jsx)("text",{x:"4",y:F+3,fontSize:"8",fill:"rgba(0, 255, 0, 0.4)",fontFamily:"var(--font-nerv-mono)",children:"0.0"}),(0,s.jsx)("text",{x:"4",y:S-4,fontSize:"8",fill:"rgba(0, 255, 0, 0.4)",fontFamily:"var(--font-nerv-mono)",children:"-1.0"})]})}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1 border-t border-nerv-mid-gray bg-nerv-dark-gray text-[10px] font-mono text-nerv-mid-gray",children:[(0,s.jsxs)("span",{children:["FREQ: ",t.toFixed(3),"Hz / ",r.toFixed(3),"Hz"]}),(0,s.jsxs)("span",{children:["AMP: ",n.toFixed(0),"px / ",a.toFixed(0),"px"]})]})]})});function b2(e){let t=Math.max(0,e),r=Math.floor(t/6e4),n=Math.floor(t%6e4/1e3),a=Math.floor(t%1e3/10);return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function lT(e){return e<=1e4?"text-nerv-red":e<=6e4?"text-nerv-orange":"text-nerv-lcd-green"}var w$=(0,T.forwardRef)(function({initialSeconds:t,onExpire:r,className:n="",...a},o){let i=t*1e3,[l,c]=(0,T.useState)(i),u=(0,T.useRef)(r);u.current=r;let d=(0,T.useRef)(!1);(0,T.useEffect)(()=>{if(l<=0)return;let x=setInterval(()=>{c(y=>{let g=y-50;return g<=0?(d.current||(d.current=!0,u.current?.()),0):g})},50);return()=>clearInterval(x)},[l]),(0,T.useEffect)(()=>{c(t*1e3),d.current=!1},[t]);let m=lT(l),f=l<=1e4&&l>0,p=l<=6e4&&l>1e4,b=i>0?l/i*100:0;return(0,s.jsxs)("div",{ref:o,className:`bg-nerv-black border border-nerv-mid-gray ${n}`,...a,children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-nerv-mid-gray bg-nerv-dark-gray",children:[(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:"INTERNAL BATTERY"}),(0,s.jsxs)("span",{className:`text-[10px] font-mono ${m}`,children:[b.toFixed(1),"%"]})]}),(0,s.jsx)("div",{className:"flex items-center justify-center py-6 px-4",children:(0,s.jsx)(B.div,{className:`text-5xl md:text-6xl font-bold tabular-nums ${m}`,style:{fontFamily:"var(--font-nerv-mono)"},animate:f?{opacity:[1,.2,1]}:p?{opacity:[1,.6,1]}:{},transition:f?{duration:.25,repeat:1/0}:p?{duration:.8,repeat:1/0}:{},children:b2(l)})}),(0,s.jsx)("div",{className:"px-3 pb-3",children:(0,s.jsx)("div",{className:"h-3 bg-nerv-dark-gray border border-nerv-mid-gray flex gap-[1px] p-[1px]",children:Array.from({length:20},(x,y)=>{let g=(y+1)/20*100,h=b>=g,v=g>75?"bg-nerv-lcd-green":g>25?"bg-nerv-orange":"bg-nerv-red";return(0,s.jsx)("div",{className:`flex-1 ${h?v:"bg-nerv-black/50"}`},y)})})}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1 border-t border-nerv-mid-gray bg-nerv-dark-gray text-[10px] font-mono text-nerv-mid-gray",children:[(0,s.jsx)("span",{children:l>0?"ACTIVE":"EXPIRED"}),(0,s.jsxs)("span",{children:["ELAPSED: ",b2(i-l)]})]})]})});function qu({delay:e}){return(0,s.jsx)(B.div,{className:"w-[3px] bg-nerv-orange",animate:{height:["4px","16px","6px","14px","4px"]},transition:{duration:.5,repeat:1/0,delay:e,ease:"easeInOut"}})}var k$=(0,T.forwardRef)(function({id:t,isSpeaking:r=!1,className:n="",...a},o){return(0,s.jsxs)("div",{ref:o,className:`
          relative flex flex-col items-center justify-center
          bg-bg-base min-h-[160px] min-w-[100px]
          ${n}
        `,style:{boxShadow:"inset 0 0 12px rgba(51, 51, 51, 0.5), 0 0 1px rgba(51, 51, 51, 0.3)",border:"1px solid rgba(51, 51, 51, 0.35)"},...a,children:[(0,s.jsxs)("span",{className:"absolute top-3 text-[10px] uppercase tracking-[0.25em] font-bold text-nerv-mid-gray/50 font-mono",children:["SEELE ",t]}),(0,s.jsx)("span",{className:"text-sm font-bold uppercase tracking-[0.15em] text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:"SOUND ONLY"}),r&&(0,s.jsxs)("div",{className:"flex items-end gap-[2px] mt-3 h-[18px]",children:[(0,s.jsx)(qu,{delay:0}),(0,s.jsx)(qu,{delay:.08}),(0,s.jsx)(qu,{delay:.16}),(0,s.jsx)(qu,{delay:.1})]}),(0,s.jsx)("span",{className:"absolute bottom-3 text-[9px] font-mono text-nerv-mid-gray/30 tracking-wider",children:t})]})}),S$=(0,T.forwardRef)(function({text:t="CLASSIFIED",isUnlocked:r=!1,children:n,className:a="",...o},i){return(0,s.jsxs)("div",{ref:i,className:`relative overflow-hidden ${a}`,...o,children:[n,(0,s.jsx)(Bt,{children:!r&&(0,s.jsxs)(B.div,{initial:{y:0},animate:{y:0},exit:{y:"-100%"},transition:{duration:.2,ease:"easeIn"},className:"absolute inset-0 z-50 flex items-center justify-center",children:[(0,s.jsx)("div",{className:"absolute inset-0",style:{background:`repeating-linear-gradient(
                    -45deg,
                    #000000,
                    #000000 10px,
                    #FF0000 10px,
                    #FF0000 20px
                  )`,opacity:.35}}),(0,s.jsx)("div",{className:"absolute inset-0 bg-nerv-black/80"}),(0,s.jsx)("div",{className:"relative z-10 bg-nerv-black/90 border-4 border-nerv-red px-10 py-6",children:(0,s.jsx)("span",{className:"text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-nerv-red",style:{fontFamily:"var(--font-nerv-display)"},children:t})})]})})]})});var T$=(0,T.createContext)(null);var x2={cyan:"#00FFFF",green:"#00FF00",orange:"#FF9900",red:"#FF0000",magenta:"#FF00FF"},N$=(0,T.forwardRef)(function({size:t=64,color:r="cyan",label:n="PROCESSING...",speed:a=2.5,className:o="",...i},l){let c=x2[r]??x2.cyan,p="50,5 95,50 50,95 5,50",b=255;return(0,s.jsxs)("div",{ref:l,className:`inline-flex flex-col items-center gap-3 ${o}`,...i,children:[(0,s.jsx)(B.div,{animate:{rotateY:360},transition:{repeat:1/0,duration:a,ease:"linear"},style:{perspective:200},children:(0,s.jsxs)(B.svg,{width:t,height:t,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(B.polygon,{points:p,stroke:c,strokeWidth:"1.5",strokeLinejoin:"miter",fill:"none",initial:{strokeDasharray:b,strokeDashoffset:b},animate:{strokeDashoffset:0},transition:{duration:1.2,ease:"easeOut"},style:{filter:`drop-shadow(0 0 4px ${c})`}}),(0,s.jsx)(B.line,{x1:"5",y1:"50",x2:"95",y2:"50",stroke:c,strokeWidth:"1",opacity:"0.5",initial:{strokeDasharray:90,strokeDashoffset:90},animate:{strokeDashoffset:0},transition:{duration:.8,ease:"easeOut",delay:.6}}),(0,s.jsx)(B.line,{x1:"50",y1:"5",x2:"50",y2:"95",stroke:c,strokeWidth:"1",opacity:"0.5",initial:{strokeDasharray:90,strokeDashoffset:90},animate:{strokeDashoffset:0},transition:{duration:.8,ease:"easeOut",delay:.8}}),(0,s.jsx)(B.polygon,{points:"50,25 75,50 50,75 25,50",stroke:c,strokeWidth:"0.8",strokeLinejoin:"miter",fill:"none",opacity:"0.3",initial:{strokeDasharray:142,strokeDashoffset:142},animate:{strokeDashoffset:0},transition:{duration:1,ease:"easeOut",delay:.4}}),[{x1:50,y1:5,x2:75,y2:50},{x1:50,y1:5,x2:25,y2:50},{x1:50,y1:95,x2:75,y2:50},{x1:50,y1:95,x2:25,y2:50}].map((x,y)=>(0,s.jsx)(B.line,{...x,stroke:c,strokeWidth:"0.5",opacity:"0.2",initial:{strokeDasharray:50,strokeDashoffset:50},animate:{strokeDashoffset:0},transition:{duration:.6,ease:"easeOut",delay:1+y*.1}},y))]})}),n&&(0,s.jsx)(B.span,{className:"text-[10px] uppercase tracking-[0.25em] font-bold",style:{fontFamily:"var(--font-nerv-mono)",color:c,textShadow:`0 0 6px ${c}`},animate:{opacity:[1,.2,1]},transition:{repeat:1/0,duration:1.2,ease:"linear",times:[0,.5,1]},children:n})]})}),sT={default:{main:"#00FF00",soft:"rgba(126, 255, 126, 0.62)",glow:"rgba(0, 255, 0, 0.14)",surface:"rgba(0, 255, 0, 0.08)",divider:"rgba(126, 255, 126, 0.22)",header:"#00FF00",detail:"rgba(160, 255, 160, 0.82)",body:"rgba(240, 240, 240, 0.84)",background:"linear-gradient(180deg, rgba(4, 12, 4, 0.96) 0%, rgba(0, 0, 0, 0.95) 100%)"},alert:{main:"#FF2B1D",soft:"rgba(255, 119, 108, 0.62)",glow:"rgba(255, 43, 29, 0.16)",surface:"rgba(255, 43, 29, 0.08)",divider:"rgba(255, 119, 108, 0.24)",header:"#FF2B1D",detail:"rgba(255, 166, 160, 0.84)",body:"rgba(250, 232, 230, 0.9)",background:"linear-gradient(180deg, rgba(20, 4, 3, 0.96) 0%, rgba(0, 0, 0, 0.95) 100%)"},hud:{main:"rgba(236, 236, 236, 0.74)",soft:"rgba(255, 255, 255, 0.32)",glow:"rgba(255, 255, 255, 0.08)",surface:"rgba(255, 255, 255, 0.04)",divider:"rgba(255, 255, 255, 0.14)",header:"rgba(255, 255, 255, 0.86)",detail:"rgba(255, 255, 255, 0.62)",body:"rgba(255, 255, 255, 0.8)",background:"linear-gradient(180deg, rgba(12, 14, 16, 0.84) 0%, rgba(0, 0, 0, 0.72) 100%)"},video:{main:"#FF9900",soft:"rgba(255, 190, 92, 0.72)",glow:"rgba(255, 153, 0, 0.18)",surface:"rgba(255, 153, 0, 0.08)",divider:"rgba(255, 190, 92, 0.28)",header:"#FF9900",detail:"rgba(255, 199, 120, 0.86)",body:"rgba(255, 236, 208, 0.88)",background:"linear-gradient(180deg, rgba(14, 10, 3, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)"}},cT={default:"text-[0.98rem] leading-[1.02] tracking-[0.16em]",alert:"text-[0.98rem] leading-[1.02] tracking-[0.16em]",hud:"text-[0.98rem] leading-[1.02] tracking-[0.14em]",video:"text-[clamp(1.02rem,1.85vw,1.55rem)] leading-[0.92] tracking-[0.06em]"},e0="px-3 py-3 sm:px-4",A$=(0,T.forwardRef)(function({title:t,eyebrow:r,subtitle:n,children:a,footer:o,variant:i="default",rounded:l=!1,cutSize:c,className:u="",style:d,...m},f){let p=sT[i],b=!!(r||t||n),x=a!=null,y=o!=null,g={borderColor:p.main,background:`radial-gradient(circle at top left, ${p.surface} 0%, transparent 56%), ${p.background}`,boxShadow:i==="hud"?`0 0 0 1px ${p.glow}, inset 0 0 0 1px ${p.divider}`:`0 0 0 1px ${p.glow}, inset 0 0 0 1px ${p.soft}, 0 0 18px ${p.glow}`,...d??{}},h={color:p.detail,fontFamily:"var(--font-nerv-display)"},v={color:p.header,fontFamily:"var(--font-nerv-display)"},w={backgroundColor:p.soft},k={color:p.detail,fontFamily:"var(--font-nerv-mono)"},A={color:p.body,fontFamily:"var(--font-nerv-body)"};return(0,s.jsxs)("div",{ref:f,"data-rounded":l?"true":"false","data-variant":i,className:`relative isolate flex w-full flex-col overflow-hidden border  ${l?"rounded-lg":""} ${i==="hud"?"backdrop-blur-sm":""} ${u}`,style:g,...m,children:[b&&(0,s.jsxs)("header",{className:`relative z-10 flex flex-col gap-1.5 ${e0}`,children:[r&&(0,s.jsx)("div",{className:"text-[0.64rem] font-semibold uppercase tracking-[0.18em] opacity-90",style:h,children:r}),t&&(0,s.jsx)("div",{className:`font-semibold uppercase ${cT[i]}`,style:v,children:t}),n&&(0,s.jsx)("div",{className:"whitespace-pre-line text-[0.66rem] uppercase leading-[1.35] tracking-[0.14em]",style:k,children:n}),(x||y)&&(0,s.jsx)("div",{"aria-hidden":"true","data-card-divider":"header",className:"mx-0.45 mt-2 h-0.5",style:w})]}),x&&(0,s.jsx)("div",{className:`relative z-10 ${e0} text-sm leading-relaxed`,style:A,children:a}),y&&(0,s.jsxs)("footer",{className:`relative z-10 ${e0} whitespace-pre-line text-[0.64rem] uppercase leading-[1.35] tracking-[0.16em]`,style:k,children:[(x||b)&&(0,s.jsx)("div",{"aria-hidden":"true","data-card-divider":"footer",className:"mx-0.45 mb-3 h-0.5",style:w}),o]})]})}),E2=(0,T.createContext)(null),y2={cyan:"text-nerv-cyan",white:"text-nerv-white",orange:"text-nerv-orange",green:"text-nerv-green"},M$=(0,T.forwardRef)(function({children:t,multiple:r=!1,defaultOpen:n=[],className:a="",...o},i){let[l,c]=(0,T.useState)(new Set(n)),u=(0,T.useCallback)(d=>{c(m=>{let f=new Set(m);return f.has(d)?f.delete(d):(r||f.clear(),f.add(d)),f})},[r]);return(0,s.jsx)(E2.Provider,{value:{openIds:l,toggle:u},children:(0,s.jsx)("div",{ref:i,className:`border border-nerv-mid-gray bg-nerv-black ${a}`,...o,children:t})})}),E$=(0,T.forwardRef)(function({id:t,title:r,children:n,color:a="cyan",...o},i){let l=(0,T.useContext)(E2);if(!l)throw new Error("[NERV-UI] AccordionItem must be used inside Accordion.");let c=l.openIds.has(t),u=y2[a]??y2.cyan;return(0,s.jsxs)("div",{ref:i,className:"border-b border-nerv-mid-gray/40 last:border-b-0",...o,children:[(0,s.jsxs)("button",{onClick:()=>l.toggle(t),className:`w-full flex items-center justify-between px-4 py-3 text-left
            hover:bg-nerv-white/[0.03] transition-colors cursor-pointer group`,children:[(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.15em] ${u}`,style:{fontFamily:"var(--font-nerv-mono)"},children:r}),(0,s.jsx)("span",{className:"text-[10px] text-nerv-white/50 group-hover:text-nerv-white/80 transition-colors",style:{fontFamily:"var(--font-nerv-mono)"},children:c?"[ - ]":"[ + ]"})]}),(0,s.jsx)(Bt,{initial:!1,children:c&&(0,s.jsx)(B.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.15,ease:"linear"},className:"overflow-hidden",children:(0,s.jsx)("div",{className:"px-4 pb-4 pt-1 border-t border-nerv-mid-gray/20",children:n})},`content-${t}`)})]})}),uT={orange:{border:"border-nerv-orange",text:"text-nerv-orange"},green:{border:"border-nerv-green",text:"text-nerv-green"},cyan:{border:"border-nerv-cyan",text:"text-nerv-cyan"},red:{border:"border-nerv-red",text:"text-nerv-red"},magenta:{border:"border-nerv-magenta",text:"text-nerv-magenta"}},dT={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},jl=(0,T.forwardRef)(function({content:t,side:r="top",delay:n=200,children:a,color:o="orange",className:i="",...l},c){let[u,d]=(0,T.useState)(!1),m=(0,T.useRef)(null),f=(0,T.useId)(),p=uT[o],b=(0,T.useCallback)(()=>{m.current=setTimeout(()=>d(!0),n)},[n]),x=(0,T.useCallback)(()=>{m.current&&(clearTimeout(m.current),m.current=null),d(!1)},[]);return(0,s.jsxs)("span",{ref:c,className:`relative inline-block ${i}`,onMouseEnter:b,onMouseLeave:x,onFocus:b,onBlur:x,"aria-describedby":u?f:void 0,...l,children:[a,u&&(0,s.jsxs)("span",{id:f,role:"tooltip",className:`
              absolute z-50 ${dT[r]}
              bg-nerv-black border ${p.border}
              px-3 py-1.5 text-xs whitespace-nowrap
              ${p.text}
              pointer-events-none
            `,style:{fontFamily:"var(--font-nerv-mono)"},children:[(0,s.jsx)("span",{className:`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l ${p.border}`}),(0,s.jsx)("span",{className:`absolute top-0 right-0 w-1.5 h-1.5 border-t border-r ${p.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l ${p.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r ${p.border}`}),t]})]})}),fT={cyan:{bar:"#00FFFF",text:"text-nerv-cyan",grid:"rgba(0,255,255,0.12)",lane:"rgba(0,255,255,0.06)"},green:{bar:"#00FF00",text:"text-nerv-green",grid:"rgba(0,255,0,0.12)",lane:"rgba(0,255,0,0.06)"},orange:{bar:"#FF9900",text:"text-nerv-orange",grid:"rgba(255,153,0,0.12)",lane:"rgba(255,153,0,0.06)"},red:{bar:"#FF0000",text:"text-nerv-red",grid:"rgba(255,0,0,0.12)",lane:"rgba(255,0,0,0.06)"},magenta:{bar:"#FF00FF",text:"text-nerv-magenta",grid:"rgba(255,0,255,0.12)",lane:"rgba(255,0,255,0.06)"}},C$=(0,T.forwardRef)(function({bars:t,maxValue:r,color:n="cyan",title:a,showGrid:o=!0,showValues:i=!0,direction:l="vertical",stagger:c=.08,height:u=200,unit:d="",segmented:m=!0,className:f=""},p){let b=fT[n],x=n==="magenta"?"magenta":n,y=r??Math.max(1,...t.map(h=>h.value)),g=4;return l==="horizontal"?(0,s.jsxs)("div",{ref:p,className:`font-mono ${f}`,children:[a&&(0,s.jsx)("div",{className:`mb-2 border-b border-current/25 pb-1 text-[10px] uppercase tracking-[0.22em] font-bold ${b.text}`,style:{fontFamily:"var(--font-nerv-display)"},children:a}),(0,s.jsx)("div",{className:"space-y-1.5",children:t.map((h,v)=>{let w=Math.min(h.value/y*100,100),k=h.color||b.bar,A=`${h.label}: ${h.value}${d}`;return(0,s.jsxs)("div",{className:"grid grid-cols-[78px_minmax(0,1fr)_44px] items-center gap-2",children:[(0,s.jsx)("div",{className:"truncate text-[9px] uppercase tracking-[0.15em] text-nerv-white/58",children:h.label}),(0,s.jsx)(jl,{content:A,color:x,delay:120,className:"block w-full",tabIndex:0,"aria-label":A,children:(0,s.jsxs)(B.div,{whileHover:{scaleX:1.015,boxShadow:`0 0 0 1px ${k}55, 0 0 12px ${k}33`},transition:{duration:.16,ease:"easeOut"},className:"relative h-4 cursor-pointer overflow-hidden border border-white/10 bg-black/70",style:{borderColor:`${k}30`},children:[(0,s.jsx)("div",{className:"absolute inset-0",style:{backgroundColor:b.lane}}),o&&Array.from({length:g}).map((N,S)=>(0,s.jsx)("div",{className:"absolute top-0 bottom-0 w-px",style:{left:`${(S+1)/(g+1)*100}%`,backgroundColor:b.grid}},S)),(0,s.jsx)(B.div,{initial:{width:0},animate:{width:`${w}%`},whileHover:{filter:"brightness(1.18)"},transition:{duration:.6,delay:v*c,ease:"easeOut"},className:"relative h-full",style:{...m?{backgroundColor:"transparent",background:`repeating-linear-gradient(90deg, ${k} 0px, ${k} 7px, transparent 7px, transparent 9px)`}:{backgroundColor:k},borderRight:`1px solid ${k}`}})]})}),i&&(0,s.jsxs)(B.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:v*c+.4},className:`w-11 text-right text-[9px] ${b.text} tabular-nums`,children:[h.value,d]})]},h.label)})})]}):(0,s.jsxs)("div",{ref:p,className:`font-mono ${f}`,children:[a&&(0,s.jsx)("div",{className:`mb-2 border-b border-current/25 pb-1 text-[10px] uppercase tracking-[0.22em] font-bold ${b.text}`,style:{fontFamily:"var(--font-nerv-display)"},children:a}),(0,s.jsxs)("div",{className:"relative border border-white/10 bg-black/65 px-2 pb-5 pt-2",style:{height:u},children:[o&&Array.from({length:g}).map((h,v)=>{let w=(v+1)/(g+1)*100,k=Math.round(y-y*(v+1)/(g+1));return(0,s.jsxs)("div",{className:"absolute left-0 right-0",style:{top:`${w}%`},children:[(0,s.jsx)("div",{className:"h-px w-full",style:{backgroundColor:b.grid}}),(0,s.jsx)("span",{className:"absolute -left-1 -top-2 -translate-x-full pr-1 text-[8px] text-nerv-white/28",children:k})]},v)}),(0,s.jsx)("div",{className:"flex h-full items-end gap-1.5 pl-6",children:t.map((h,v)=>{let w=Math.min(h.value/y*100,100),k=h.color||b.bar,A=`${h.label}: ${h.value}${d}`;return(0,s.jsxs)("div",{className:"flex h-full min-h-0 flex-1 flex-col items-center",children:[i&&(0,s.jsxs)(B.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:v*c+.4},className:`mb-1 text-[8px] ${b.text} tabular-nums`,children:[h.value,d]}),(0,s.jsx)("div",{className:"flex w-full flex-1 min-h-0 items-end",children:(0,s.jsx)(jl,{content:A,color:x,delay:120,className:"block h-full w-full",tabIndex:0,"aria-label":A,children:(0,s.jsx)(B.div,{whileHover:{scaleX:1.05,boxShadow:`0 0 0 1px ${k}55, 0 0 12px ${k}33`},transition:{duration:.16,ease:"easeOut"},className:"flex h-full items-end overflow-hidden border border-white/10 bg-black/70",style:{borderColor:`${k}30`},children:(0,s.jsx)(B.div,{initial:{height:0},animate:{height:`${w}%`},whileHover:{filter:"brightness(1.14)"},transition:{duration:.6,delay:v*c,ease:"easeOut"},className:"relative min-w-[8px] w-full origin-bottom cursor-pointer border border-white/10 bg-black/35",style:{...m?{backgroundColor:"transparent",background:`repeating-linear-gradient(0deg, ${k} 0px, ${k} 7px, transparent 7px, transparent 9px)`}:{backgroundColor:k},borderColor:`${k}40`}})})})}),(0,s.jsx)("div",{className:"mt-1 w-full truncate text-center text-[8px] uppercase tracking-[0.1em] text-nerv-white/50",children:h.label})]},h.label)})}),(0,s.jsx)("div",{className:"absolute bottom-4 left-6 right-2 h-px",style:{backgroundColor:`${b.bar}40`}})]})]})}),w2={cyan:{stroke:"#00FFFF",text:"text-nerv-cyan",fill:"rgba(0,255,255,0.06)"},green:{stroke:"#00FF00",text:"text-nerv-green",fill:"rgba(0,255,0,0.06)"},orange:{stroke:"#FF9900",text:"text-nerv-orange",fill:"rgba(255,153,0,0.06)"},red:{stroke:"#FF0000",text:"text-nerv-red",fill:"rgba(255,0,0,0.06)"},magenta:{stroke:"#FF00FF",text:"text-nerv-magenta",fill:"rgba(255,0,255,0.06)"}},D$=(0,T.forwardRef)(function({value:t,min:r=0,max:n=100,label:a,unit:o="%",color:i="cyan",size:l=160,showTicks:c=!0,threshold:u,variant:d="needle",gradientFrom:m="#FF00FF",gradientTo:f="#FF9900",className:p=""},b){let x=d==="ring",y=Math.max(1,n-r),g=Math.max(0,Math.min(1,(t-r)/y)),h=u!==void 0&&t>u,v=h?w2.red:w2[i],w=`gauge-${(0,T.useId)().replace(/:/g,"")}`,k=50,A=44,N=31,S=160,D=220,E=S+D,V=ae=>{let ue=ae*Math.PI/180;return{x:k+N*Math.cos(ue),y:A+N*Math.sin(ue)}},F=(ae,ue)=>{let Gt=V(ae),xt=V(ue),lr=ue-ae>180?1:0;return`M ${Gt.x} ${Gt.y} A ${N} ${N} 0 ${lr} 1 ${xt.x} ${xt.y}`},M=F(S,E),R=S+g*D,z=F(S,Math.max(S+.1,R)),U=a?`${a}: ${Math.round(t)}${o}`:`${Math.round(t)}${o}`,I=h?"red":i,j=c?Array.from({length:13}).map((ae,ue)=>{let Gt=S+ue/12*D,xt=ue%3===0?N-6:N-3,lr=V(Gt),Ye=Gt*Math.PI/180,Cn={x:k+xt*Math.cos(Ye),y:A+xt*Math.sin(Ye)};return{outer:lr,inner:Cn,major:ue%3===0}}):[],Z=V(R);return(0,s.jsxs)("div",{ref:b,className:`inline-flex flex-col items-center font-mono ${p}`,children:[a&&(0,s.jsx)("div",{className:`mb-1 border-b border-current/25 pb-1 text-[10px] uppercase tracking-[0.22em] font-bold ${v.text}`,style:{fontFamily:"var(--font-nerv-display)",width:`${Math.max(112,l*.62)}px`},children:a}),(0,s.jsx)(jl,{content:U,color:I,delay:120,className:"block",tabIndex:0,"aria-label":U,children:(0,s.jsx)(B.div,{whileHover:{scale:1.03,y:-2,filter:`drop-shadow(0 0 10px ${v.stroke}55)`},transition:{duration:.16,ease:"easeOut"},className:"cursor-pointer",children:(0,s.jsxs)("svg",{viewBox:"0 0 100 78",width:l,height:l*.78,className:"overflow-visible",children:[(0,s.jsx)("title",{children:U}),x&&(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:w,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,s.jsx)("stop",{offset:"0%",stopColor:m}),(0,s.jsx)("stop",{offset:"100%",stopColor:f})]})}),(0,s.jsx)("rect",{x:"10",y:"8",width:"80",height:"60",fill:"none",stroke:"rgba(224,224,224,0.08)",strokeWidth:"1"}),(0,s.jsx)("path",{d:M,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:x?10:6,strokeLinecap:"square"}),u!==void 0&&(0,s.jsx)("path",{d:F(S+(u-r)/y*D,E),fill:"none",stroke:"rgba(255,0,0,0.12)",strokeWidth:x?10:6,strokeLinecap:"square"}),(0,s.jsx)(B.path,{d:z,fill:"none",stroke:x?`url(#${w})`:v.stroke,strokeWidth:x?10:4,strokeLinecap:"square",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:1,ease:"easeOut"}}),j.map((ae,ue)=>(0,s.jsx)("line",{x1:ae.inner.x,y1:ae.inner.y,x2:ae.outer.x,y2:ae.outer.y,stroke:ae.major?"rgba(255,255,255,0.34)":"rgba(255,255,255,0.16)",strokeWidth:x?ae.major?1.2:.8:ae.major?1:.6},ue)),!x&&(0,s.jsx)(B.line,{x1:k,y1:A,x2:Z.x,y2:Z.y,stroke:v.stroke,strokeWidth:1.25,strokeLinecap:"square",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5}}),(0,s.jsx)("circle",{cx:k,cy:A,r:2,fill:x?m:v.stroke}),(0,s.jsx)("circle",{cx:k,cy:A,r:.8,fill:"#000"}),(0,s.jsx)("text",{x:"18",y:"57",fill:"rgba(224,224,224,0.42)",fontSize:5,fontFamily:"monospace",children:r}),(0,s.jsx)("text",{x:"78",y:"57",fill:"rgba(224,224,224,0.42)",fontSize:5,fontFamily:"monospace",children:n}),(0,s.jsx)("rect",{x:"30",y:"60",width:"40",height:"10",fill:"black",stroke:v.stroke,strokeWidth:"1"}),(0,s.jsxs)("text",{x:k,y:"67",textAnchor:"middle",fill:x?f:v.stroke,fontSize:8,fontFamily:"monospace",fontWeight:"bold",children:[Math.round(t),o]})]})})})]})}),mT={cyan:["#00FFFF","#0099AA","#005566","#00CCDD","#003344"],green:["#00FF00","#00AA00","#005500","#00CC00","#003300"],orange:["#FF9900","#CC7700","#995500","#FFBB33","#664400"],mixed:["#00FFFF","#FF9900","#00FF00","#FF0000","#FF00FF","#FFFF00","#0099FF"]},R$=(0,T.forwardRef)(function({slices:t,title:r,size:n=180,donut:a=!1,showLegend:o=!0,showLabels:i=!0,color:l="mixed",className:c=""},u){let d=(0,T.useRef)(null),[m,f]=(0,T.useState)(null),[p,b]=(0,T.useState)(null),x=t.reduce((M,R)=>M+R.value,0);if(x===0)return null;let y=mT[l],g=50,h=50,v=42,w=a?26:0,k=-90,A=t.map((M,R)=>{let z=M.value/x,U=z*360,I=k;k+=U;let j=k,Z=(I+j)/2,ae=M.color||y[R%y.length];return{...M,pct:z,startDeg:I,endDeg:j,midDeg:Z,sliceColor:ae}}),N=(M,R)=>{let z=M*Math.PI/180;return{x:g+R*Math.cos(z),y:h+R*Math.sin(z)}},S=(M,R)=>{let z=N(M,v),U=N(R,v),I=R-M>180?1:0;if(a){let j=N(R,w),Z=N(M,w);return`M ${z.x} ${z.y} A ${v} ${v} 0 ${I} 1 ${U.x} ${U.y} L ${j.x} ${j.y} A ${w} ${w} 0 ${I} 0 ${Z.x} ${Z.y} Z`}return`M ${g} ${h} L ${z.x} ${z.y} A ${v} ${v} 0 ${I} 1 ${U.x} ${U.y} Z`},D=(M,R,z,U)=>{let I=d.current?.getBoundingClientRect();if(!I)return;let j=M.getBoundingClientRect(),Z=U?U.clientX-I.left:j.left-I.left+j.width/2,ae=U?U.clientY-I.top:j.top-I.top+j.height/2;f(z),b({x:Z,y:ae,label:R.label,value:R.value,pct:Math.round(R.pct*100),color:R.sliceColor})},E=()=>{f(null),b(null)},V=p?Math.max(56,Math.min((d.current?.clientWidth??n)-56,p.x)):0,F=p?Math.max(24,p.y-16):0;return(0,s.jsxs)("div",{ref:u,className:`inline-flex flex-col items-center font-mono ${c}`,children:[r&&(0,s.jsx)("div",{className:"mb-2 w-full border-b border-nerv-orange/25 pb-1 text-left text-[10px] uppercase tracking-[0.22em] font-bold text-nerv-orange",style:{fontFamily:"var(--font-nerv-display)"},children:r}),(0,s.jsxs)("div",{ref:d,className:"relative flex items-center gap-4 border border-white/10 bg-black/65 px-3 py-3",children:[(0,s.jsxs)("svg",{viewBox:"0 0 100 100",width:n,height:n,children:[(0,s.jsx)("rect",{x:"6",y:"6",width:"88",height:"88",fill:"none",stroke:"rgba(224,224,224,0.08)",strokeWidth:"0.6"}),[18,28,38,42].map(M=>(0,s.jsx)("circle",{cx:g,cy:h,r:M,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:.5},M)),(0,s.jsx)("line",{x1:g,y1:6,x2:g,y2:94,stroke:"rgba(255,255,255,0.08)",strokeWidth:.5}),(0,s.jsx)("line",{x1:6,y1:h,x2:94,y2:h,stroke:"rgba(255,255,255,0.08)",strokeWidth:.5}),A.map((M,R)=>M.pct>=.999?(0,s.jsx)(B.circle,{cx:g,cy:h,r:a?(v+w)/2:v/2,fill:a?"none":M.sliceColor,stroke:a?M.sliceColor:"none",strokeWidth:a?v-w:0,initial:{opacity:0,scale:.8},animate:{opacity:m===null||m===R?.94:.5,scale:m===R?1.05:1},transition:{duration:.24,delay:R*.06},style:{cursor:"pointer"},tabIndex:0,onMouseEnter:z=>D(z.currentTarget,M,R,z),onMouseMove:z=>D(z.currentTarget,M,R,z),onMouseLeave:E,onFocus:z=>D(z.currentTarget,M,R),onBlur:E,children:(0,s.jsx)("title",{children:`${M.label}: ${M.value} (${Math.round(M.pct*100)}%)`})},M.label):(0,s.jsx)(B.path,{d:S(M.startDeg,M.endDeg),fill:M.sliceColor,stroke:"#000",strokeWidth:.8,initial:{opacity:0,scale:.8},animate:{opacity:m===null||m===R?.94:.5,scale:m===R?1.05:1},transition:{duration:.24,delay:R*.06},style:{transformOrigin:`${g}px ${h}px`,cursor:"pointer"},tabIndex:0,onMouseEnter:z=>D(z.currentTarget,M,R,z),onMouseMove:z=>D(z.currentTarget,M,R,z),onMouseLeave:E,onFocus:z=>D(z.currentTarget,M,R),onBlur:E,children:(0,s.jsx)("title",{children:`${M.label}: ${M.value} (${Math.round(M.pct*100)}%)`})},M.label)),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("circle",{cx:g,cy:h,r:w-1,fill:"#000",fillOpacity:.8}),(0,s.jsx)("text",{x:g,y:h+3,textAnchor:"middle",fill:"#ffffff",fontSize:7,fontFamily:"monospace",fontWeight:"bold",children:x})]}),i&&A.filter(M=>M.pct>=.05).map(M=>{let R=a?(v+w)/2:v*.65,z=N(M.midDeg,R);return(0,s.jsxs)("text",{x:z.x,y:z.y+2,textAnchor:"middle",fill:"#000",fontSize:5,fontFamily:"monospace",fontWeight:"bold",children:[Math.round(M.pct*100),"%"]},`${M.label}-label`)})]}),o&&(0,s.jsx)("div",{className:"space-y-1",children:A.map((M,R)=>(0,s.jsxs)("div",{className:"grid cursor-pointer grid-cols-[8px_minmax(0,1fr)_34px] items-center gap-2 border-b border-white/8 pb-1 transition-colors hover:bg-white/[0.03]",onMouseEnter:z=>D(z.currentTarget,M,R),onMouseLeave:E,onFocus:z=>D(z.currentTarget,M,R),onBlur:E,tabIndex:0,children:[(0,s.jsx)("div",{className:"h-2 w-2 shrink-0",style:{backgroundColor:M.sliceColor}}),(0,s.jsx)("span",{className:"truncate text-[9px] uppercase tracking-[0.12em] text-nerv-white/70",children:M.label}),(0,s.jsxs)("span",{className:"ml-auto text-right text-[9px] text-nerv-white/45 tabular-nums",children:[Math.round(M.pct*100),"%"]})]},M.label))}),p&&(0,s.jsxs)(B.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0},className:"pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full border bg-black/95 px-2 py-1 text-[9px] uppercase tracking-[0.16em]",style:{left:V,top:F,color:p.color,borderColor:p.color,boxShadow:`0 0 0 1px ${p.color}22 inset, 0 6px 20px rgba(0,0,0,0.32)`,fontFamily:"var(--font-nerv-mono)"},children:[p.label,": ",p.value," (",p.pct,"%)"]})]})]})}),pT={orange:{main:"#FF9900",glow:"rgba(255, 153, 0, 0.2)",surface:"rgba(255, 153, 0, 0.08)",soft:"rgba(255, 184, 90, 0.66)"},red:{main:"#FF2B1D",glow:"rgba(255, 43, 29, 0.18)",surface:"rgba(255, 43, 29, 0.08)",soft:"rgba(255, 110, 99, 0.66)"},cyan:{main:"#00F6FF",glow:"rgba(0, 246, 255, 0.18)",surface:"rgba(0, 246, 255, 0.08)",soft:"rgba(116, 250, 255, 0.6)"},green:{main:"#00FF00",glow:"rgba(0, 255, 0, 0.18)",surface:"rgba(0, 255, 0, 0.08)",soft:"rgba(111, 255, 111, 0.62)"},magenta:{main:"#FF00FF",glow:"rgba(255, 0, 255, 0.18)",surface:"rgba(255, 0, 255, 0.08)",soft:"rgba(255, 120, 255, 0.62)"}};function va({children:e,color:t="orange",className:r="",style:n,...a}){let o=pT[t],i={"--overlay-main":o.main,"--overlay-main-soft":o.soft,"--overlay-glow":o.glow,"--overlay-surface":o.surface};return(0,s.jsx)("div",{className:`camera-overlay-plate ${r}`,style:{...i,...n},...a,children:(0,s.jsx)("div",{className:"camera-overlay-plate__body",children:e})})}var gT={red:{text:"#FF2B1D",glow:"rgba(255, 43, 29, 0.18)",border:"#FF2B1D",bg:"rgba(255, 43, 29, 0.07)"},green:{text:"#00FF00",glow:"rgba(0, 255, 0, 0.16)",border:"#00FF00",bg:"rgba(0, 255, 0, 0.07)"},orange:{text:"#FF9900",glow:"rgba(255, 153, 0, 0.16)",border:"#FF9900",bg:"rgba(255, 153, 0, 0.07)"},cyan:{text:"#00F6FF",glow:"rgba(0, 246, 255, 0.16)",border:"#00F6FF",bg:"rgba(0, 246, 255, 0.07)"},magenta:{text:"#FF00FF",glow:"rgba(255, 0, 255, 0.18)",border:"#FF00FF",bg:"rgba(255, 0, 255, 0.07)"}},V$=(0,T.forwardRef)(function({text:t,visible:r=!0,color:n="red",rotation:a=-12,repeat:o=!1,repeatRows:i=3,repeatCols:l=2,subtitle:c,bordered:u=!1,doubleBordered:d=!1,fullScreen:m=!1,blink:f=!1,className:p="",...b},x){let y=gT[n],g=u||d,h={"--overlay-main":y.border,"--overlay-main-soft":y.border,"--overlay-glow":y.glow,"--overlay-surface":y.bg},v=m?"fixed inset-0 z-50 flex items-center justify-center bg-nerv-black/90":"relative flex items-center justify-center",w=[.22,1,.36,1],k=f?{scale:{duration:.25,ease:w},rotate:{duration:.25,ease:w},opacity:{duration:1.15,repeat:Number.POSITIVE_INFINITY,repeatType:"loop",ease:"easeInOut"}}:{duration:.25,ease:w};return(0,s.jsx)(Bt,{children:r&&(0,s.jsx)(B.div,{ref:x,...b,className:`${v} ${p}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},children:o?(0,s.jsx)(B.div,{className:"flex flex-col items-center justify-center gap-2",initial:{scale:1.3,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.2,ease:"easeOut"},style:{transform:`rotate(${a}deg)`},children:Array.from({length:i}).map((A,N)=>(0,s.jsx)("div",{className:"flex gap-8",children:Array.from({length:l}).map((S,D)=>(0,s.jsx)("span",{className:"font-bold uppercase tracking-[0.16em] whitespace-nowrap",style:{fontFamily:"var(--font-nerv-display)",fontSize:"clamp(1.4rem, 4.6vw, 3.4rem)",color:y.text,textShadow:`0 0 8px ${y.glow}`,opacity:.88-N*.1},children:t},D))},N))}):(0,s.jsxs)(B.div,{className:"flex flex-col items-center justify-center",initial:{scale:2,opacity:0,rotate:a-5},animate:{scale:1,rotate:a,opacity:f?[1,.38,1]:1},transition:k,"data-blink":f?"true":"false",children:[g?(0,s.jsxs)("div",{className:"relative",style:h,children:[d&&(0,s.jsx)("div",{className:"pointer-events-none absolute -inset-1.5 rounded-[0.85rem] border border-current opacity-80",style:{color:y.border,boxShadow:`0 0 0 1px ${y.glow}`}}),(0,s.jsxs)(va,{color:n,children:[(0,s.jsx)("div",{className:"camera-overlay-meta text-center",children:c?"status register":"status"}),(0,s.jsx)("div",{className:"camera-overlay-title text-center",style:{fontSize:"clamp(1.5rem, 5vw, 4rem)",whiteSpace:"nowrap"},children:t}),c&&(0,s.jsx)("div",{className:"camera-overlay-detail text-center",children:c})]})]}):(0,s.jsx)("span",{className:"font-bold uppercase tracking-[0.18em] whitespace-nowrap",style:{fontFamily:"var(--font-nerv-display)",fontSize:"clamp(2rem, 8vw, 6rem)",color:y.text,textShadow:`0 0 14px ${y.glow}`},children:t}),c&&!g&&(0,s.jsx)(B.span,{className:"mt-2 font-mono text-sm uppercase tracking-[0.3em]",style:{color:y.text,opacity:.6},initial:{opacity:0,y:10},animate:{opacity:.6,y:0},transition:{delay:.2},children:c})]})})})}),Yu={orange:{on:"#FF9900",off:"#1A1200",glow:"rgba(255, 153, 0, 0.4)"},red:{on:"#FF0000",off:"#1A0000",glow:"rgba(255, 0, 0, 0.4)"},green:{on:"#00FF00",off:"#001A00",glow:"rgba(0, 255, 0, 0.4)"},cyan:{on:"#00FFFF",off:"#001A1A",glow:"rgba(0, 255, 255, 0.4)"}},hT={sm:{digit:32,gap:2,stroke:4},md:{digit:56,gap:3,stroke:6},lg:{digit:80,gap:4,stroke:8},xl:{digit:120,gap:6,stroke:10}},vT={0:[!0,!0,!0,!0,!0,!0,!1],1:[!1,!0,!0,!1,!1,!1,!1],2:[!0,!0,!1,!0,!0,!1,!0],3:[!0,!0,!0,!0,!1,!1,!0],4:[!1,!0,!0,!1,!1,!0,!0],5:[!0,!1,!0,!0,!1,!0,!0],6:[!0,!1,!0,!0,!0,!0,!0],7:[!0,!0,!0,!1,!1,!1,!1],8:[!0,!0,!0,!0,!0,!0,!0],9:[!0,!0,!0,!0,!1,!0,!0]};function bT({char:e,width:t,height:r,strokeWidth:n,onColor:a,offColor:o}){let i=vT[e]||[!1,!1,!1,!1,!1,!1,!1],l=n*.8,c=r/2,u=t-l*2,d=[`M ${l+n} ${l} L ${l+u-n} ${l}`,`M ${t-l} ${l+n} L ${t-l} ${c-n/2}`,`M ${t-l} ${c+n/2} L ${t-l} ${r-l-n}`,`M ${l+n} ${r-l} L ${l+u-n} ${r-l}`,`M ${l} ${c+n/2} L ${l} ${r-l-n}`,`M ${l} ${l+n} L ${l} ${c-n/2}`,`M ${l+n} ${c} L ${l+u-n} ${c}`];return(0,s.jsx)("svg",{width:t,height:r,viewBox:`0 0 ${t} ${r}`,children:d.map((m,f)=>(0,s.jsx)("path",{d:m,stroke:i[f]?a:o,strokeWidth:n,strokeLinecap:"square",fill:"none"},f))})}function xT(e,t){let r=Math.max(0,Math.floor(e));if(t==="SS")return String(r).padStart(2,"0");if(t==="MM:SS"){let i=Math.floor(r/60),l=r%60;return`${String(i).padStart(2,"0")}:${String(l).padStart(2,"0")}`}let n=Math.floor(r/3600),a=Math.floor(r%3600/60),o=r%60;return`${n}:${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`}var O$=(0,T.forwardRef)(function({value:t=0,countdown:r=!1,format:n="H:MM:SS",digits:a,color:o="orange",criticalThreshold:i=60,label:l,subLabel:c,size:u="lg",blinkSeparator:d=!0,onComplete:m,className:f="",...p},b){let[x,y]=(0,T.useState)(t),[g,h]=(0,T.useState)(!0),v=(0,T.useRef)(!1);(0,T.useEffect)(()=>{if(!r){y(t);return}y(t),v.current=!1;let D=setInterval(()=>{y(E=>E<=0?(clearInterval(D),v.current||(v.current=!0,m?.()),0):E-1)},1e3);return()=>clearInterval(D)},[t,r,m]),(0,T.useEffect)(()=>{if(!d)return;let D=setInterval(()=>h(E=>!E),500);return()=>clearInterval(D)},[d]);let k=r&&x<=i?"red":o,A=Yu[k],N=hT[u],S=n==="raw"?String(x).padStart(a||4,"0"):xT(x,n);return(0,s.jsxs)("div",{ref:b,className:`inline-flex flex-col items-center ${f}`,...p,children:[l&&(0,s.jsx)("div",{className:"text-xs font-bold uppercase tracking-[0.2em] mb-2",style:{fontFamily:"var(--font-nerv-display)",color:A.on,textShadow:`0 0 8px ${A.glow}`},children:l}),(0,s.jsx)("div",{className:"flex items-center gap-1 px-4 py-3",style:{background:"linear-gradient(180deg, #0A0A0A 0%, #050505 100%)",border:`1px solid ${A.on}30`,boxShadow:`0 0 20px ${A.glow}, inset 0 0 10px rgba(0,0,0,0.8)`},children:S.split("").map((D,E)=>D===":"?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mx-1",style:{width:N.stroke*2,height:N.digit,gap:N.digit*.2},children:[(0,s.jsx)("div",{style:{width:N.stroke,height:N.stroke,backgroundColor:d&&!g?Yu[k].off:A.on,boxShadow:g?`0 0 6px ${A.glow}`:"none"}}),(0,s.jsx)("div",{style:{width:N.stroke,height:N.stroke,backgroundColor:d&&!g?Yu[k].off:A.on,boxShadow:g?`0 0 6px ${A.glow}`:"none"}})]},E):(0,s.jsx)("div",{style:{filter:`drop-shadow(0 0 4px ${A.glow})`,marginRight:N.gap},children:(0,s.jsx)(bT,{char:D,width:N.digit*.6,height:N.digit,strokeWidth:N.stroke,onColor:A.on,offColor:Yu[k].off})},E))}),c&&(0,s.jsx)("div",{className:"text-[10px] font-mono uppercase tracking-[0.15em] mt-2",style:{color:A.on,opacity:.5},children:c})]})}),yT={active:{borderColor:"rgba(0, 255, 0, 0.3)",indicator:"#00FF00",label:""},"signal-lost":{borderColor:"rgba(255, 153, 0, 0.4)",indicator:"#FF9900",label:"SIGNAL LOST"},warning:{borderColor:"rgba(255, 0, 0, 0.4)",indicator:"#FF0000",label:"WARNING"},offline:{borderColor:"rgba(85, 85, 85, 0.3)",indicator:"#555555",label:"OFFLINE"}},wT={green:{text:"#00FF00",border:"rgba(0, 255, 0, 0.2)",headerBg:"rgba(0, 255, 0, 0.05)"},cyan:{text:"#00FFFF",border:"rgba(0, 255, 255, 0.2)",headerBg:"rgba(0, 255, 255, 0.05)"},orange:{text:"#FF9900",border:"rgba(255, 153, 0, 0.2)",headerBg:"rgba(255, 153, 0, 0.05)"}},z$=(0,T.forwardRef)(function({feeds:t,columns:r=3,color:n="green",title:a,showTimestamp:o=!0,animated:i=!0,className:l="",...c},u){let[d,m]=(0,T.useState)(""),f=wT[n];(0,T.useEffect)(()=>{if(!o)return;let b=()=>{let y=new Date;m(`${String(y.getHours()).padStart(2,"0")}:${String(y.getMinutes()).padStart(2,"0")}:${String(y.getSeconds()).padStart(2,"0")}.${String(y.getMilliseconds()).padStart(3,"0")}`)};b();let x=setInterval(b,100);return()=>clearInterval(x)},[o]);let p={2:"grid-cols-2",3:"grid-cols-1 sm:grid-cols-3",4:"grid-cols-2 sm:grid-cols-4"}[r];return(0,s.jsxs)("div",{ref:u,className:`bg-nerv-black ${l}`,style:{border:`1px solid ${f.border}`},...c,children:[(a||o)&&(0,s.jsxs)("div",{className:"flex items-center justify-between px-3 py-1.5",style:{borderBottom:`1px solid ${f.border}`,backgroundColor:f.headerBg},children:[a&&(0,s.jsx)("span",{className:"text-[10px] font-bold uppercase tracking-[0.2em]",style:{fontFamily:"var(--font-nerv-display)",color:f.text},children:a}),o&&(0,s.jsx)("span",{className:"text-[10px] font-mono",style:{color:f.text,opacity:.6},children:d})]}),(0,s.jsx)("div",{className:`grid ${p} gap-0`,children:t.map(b=>{let x=yT[b.status||"active"],y=b.status==="signal-lost"||b.status==="offline";return(0,s.jsxs)("div",{className:"relative overflow-hidden",style:{border:`1px solid ${x.borderColor}`,backgroundColor:"#050505",aspectRatio:"16 / 10"},children:[b.imageUrl&&(0,s.jsx)("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${b.imageUrl})`,opacity:y?.15:.5,filter:y?"grayscale(1)":"none"}}),b.children&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:b.children}),(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)"}}),x.label&&(0,s.jsx)("div",{className:`absolute inset-0 flex items-center justify-center ${i?"animate-pulse":""}`,children:(0,s.jsx)("div",{className:"px-3 py-1.5",style:{border:`2px solid ${x.indicator}`,backgroundColor:"rgba(0, 0, 0, 0.8)"},children:(0,s.jsx)("span",{className:"text-xs font-bold uppercase tracking-wider",style:{fontFamily:"var(--font-nerv-display)",color:x.indicator},children:x.label})})}),(0,s.jsxs)("div",{className:"absolute top-1 left-1 flex items-center gap-1.5",children:[(0,s.jsx)("div",{className:"w-1.5 h-1.5",style:{backgroundColor:x.indicator,boxShadow:`0 0 4px ${x.indicator}`}}),(0,s.jsx)("span",{className:"text-[9px] font-mono uppercase",style:{color:f.text,opacity:.8},children:b.id})]}),(0,s.jsxs)("div",{className:"absolute bottom-1 left-1 right-1",children:[(0,s.jsx)("div",{className:"text-[10px] font-bold uppercase truncate",style:{fontFamily:"var(--font-nerv-display)",color:"#E0E0E0",textShadow:"0 1px 2px rgba(0,0,0,0.8)"},children:b.label}),b.subLabel&&(0,s.jsx)("div",{className:"text-[8px] font-mono uppercase truncate",style:{color:f.text,opacity:.5},children:b.subLabel})]})]},b.id)})})]})}),kT={orange:{main:"#FF9900",glow:"rgba(255, 153, 0, 0.2)",dim:"rgba(255, 153, 0, 0.14)"},red:{main:"#FF2B1D",glow:"rgba(255, 43, 29, 0.18)",dim:"rgba(255, 43, 29, 0.14)"},cyan:{main:"#00F6FF",glow:"rgba(0, 246, 255, 0.18)",dim:"rgba(0, 246, 255, 0.14)"},green:{main:"#00FF00",glow:"rgba(0, 255, 0, 0.18)",dim:"rgba(0, 255, 0, 0.14)"}},k2={BLUE:"#5DA2FF",ORANGE:"#FF9900",RED:"#FF2B1D",GREEN:"#00FF00",UNKNOWN:"#9A9A9A"},_$=(0,T.forwardRef)(function({designation:t,pattern:r="PATTERN",bloodType:n="BLUE",visible:a=!0,scaleRange:o=3,unit:i="MAGNIFICATION : x05",subtitle:l,color:c="orange",animated:u=!0,className:d="",...m},f){let p=kT[c],b=k2[n]||k2.UNKNOWN,x=Array.from({length:o*2+1},(h,v)=>v-o),y={"--overlay-main":p.main},g={"--overlay-main":p.main,"--overlay-glow":p.glow};return(0,s.jsx)(Bt,{children:a&&(0,s.jsxs)(B.div,{ref:f,...m,className:`relative overflow-hidden bg-black ${d}`,initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25,ease:"easeOut"},style:{minHeight:"188px",border:`1px solid ${p.dim}`,boxShadow:`inset 0 0 0 1px ${p.dim}, 0 0 20px ${p.glow}`},children:[u&&(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none",style:{background:"repeating-linear-gradient(180deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 6px)"}}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]"}),(0,s.jsx)("div",{className:"absolute left-4 right-4 top-4 h-px bg-white/12"}),(0,s.jsx)("div",{className:"absolute left-4 right-4 bottom-4 h-px bg-white/12"}),(0,s.jsx)("div",{className:"absolute left-[24%] top-[34%] h-px w-[52%] bg-white/10"}),(0,s.jsx)("div",{className:"absolute top-[24%] bottom-[24%] left-1/2 w-px -translate-x-1/2 bg-white/8"}),(0,s.jsx)("div",{className:"camera-overlay-cross left-[14%] top-[30%]",style:y}),(0,s.jsx)("div",{className:"camera-overlay-cross right-[16%] bottom-[28%]",style:y}),(0,s.jsx)("div",{className:"absolute left-3 top-3 max-w-[16rem] sm:left-4 sm:top-4",children:(0,s.jsxs)(va,{color:c,children:[(0,s.jsx)("div",{className:"camera-overlay-meta",children:r}),(0,s.jsxs)("div",{className:"camera-overlay-title",style:{fontSize:"clamp(0.92rem, 1.25vw, 1.28rem)"},children:["blood type ",(0,s.jsx)("span",{style:{color:b},children:n})]}),(0,s.jsx)("div",{className:"camera-overlay-detail",children:"pattern analysis locked"})]})}),(0,s.jsxs)("div",{className:"absolute right-3 top-3 flex flex-col items-end gap-2 sm:right-4 sm:top-4",children:[(0,s.jsx)("div",{className:"text-[10px] uppercase tracking-[0.16em] text-nerv-white/42",style:{fontFamily:"var(--font-nerv-mono)"},children:i}),(0,s.jsx)("span",{className:"camera-overlay-live",style:g,children:"live"})]}),(0,s.jsx)("div",{className:"absolute left-4 right-4 top-[42%] hidden sm:grid sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",children:x.map(h=>(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("div",{className:"h-2 w-px",style:{backgroundColor:p.main,opacity:h===0?.9:.36}}),(0,s.jsx)("span",{className:"mt-1 text-[9px] uppercase tracking-[0.06em]",style:{color:p.main,opacity:h===0?1:.6,fontFamily:"var(--font-nerv-mono)"},children:h>0?`+${h}`:`${h}`})]},`top-${h}`))}),(0,s.jsx)("div",{className:"absolute bottom-3 right-3 max-w-[82%] sm:bottom-4 sm:right-4 sm:max-w-[68%]",children:(0,s.jsxs)(va,{color:c,className:"ml-auto",children:[(0,s.jsx)("div",{className:"camera-overlay-meta text-right",children:"subject"}),(0,s.jsx)("div",{className:"camera-overlay-title text-right",children:t}),(0,s.jsx)("div",{className:"camera-overlay-detail text-right",children:l??"camera no.012 left // signal held"})]})})]})})}),ST={red:{main:"#FF0000",glow:"rgba(255, 0, 0, 0.3)",dim:"rgba(255, 0, 0, 0.15)"},green:{main:"#00FF00",glow:"rgba(0, 255, 0, 0.3)",dim:"rgba(0, 255, 0, 0.15)"},cyan:{main:"#00FFFF",glow:"rgba(0, 255, 255, 0.3)",dim:"rgba(0, 255, 255, 0.15)"},orange:{main:"#FF9900",glow:"rgba(255, 153, 0, 0.3)",dim:"rgba(255, 153, 0, 0.15)"}},B$=(0,T.forwardRef)(function({mode:t="MODE:SHOOT",locked:r=!1,coordinates:n,readouts:a,color:o="red",size:i=400,animated:l=!0,targetLabel:c,className:u="",...d},m){let f=ST[o],[p,b]=(0,T.useState)(0),x=(0,T.useRef)(0);(0,T.useEffect)(()=>{if(!l)return;let S=0,D=()=>{S+=.3,b(S),x.current=requestAnimationFrame(D)};return x.current=requestAnimationFrame(D),()=>cancelAnimationFrame(x.current)},[l]);let y=i/2,g=i/2,h=i*.42,v=i*.18,w=i*.38,k=[{x:y,y:g-w},{x:y+w,y:g},{x:y,y:g+w},{x:y-w,y:g}],A=36,N=Array.from({length:A},(S,D)=>{let V=D*360/A*Math.PI/180,F=D%9===0,M=h-(F?12:6),R=h;return{x1:y+M*Math.cos(V),y1:g+M*Math.sin(V),x2:y+R*Math.cos(V),y2:g+R*Math.sin(V),isMain:F}});return(0,s.jsxs)("div",{ref:m,className:`relative inline-block ${u}`,style:{width:i,height:i},...d,children:[(0,s.jsxs)("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,style:{filter:`drop-shadow(0 0 8px ${f.glow})`},children:[(0,s.jsx)("polygon",{points:k.map(S=>`${S.x},${S.y}`).join(" "),fill:"none",stroke:f.main,strokeWidth:1.5,opacity:.6}),(0,s.jsx)("line",{x1:k[0].x,y1:k[0].y,x2:k[2].x,y2:k[2].y,stroke:f.main,strokeWidth:.5,opacity:.3}),(0,s.jsx)("line",{x1:k[1].x,y1:k[1].y,x2:k[3].x,y2:k[3].y,stroke:f.main,strokeWidth:.5,opacity:.3}),(0,s.jsx)("g",{transform:`rotate(${p} ${y} ${g})`,children:(0,s.jsx)("circle",{cx:y,cy:g,r:h,fill:"none",stroke:f.main,strokeWidth:2,strokeDasharray:"8 4",opacity:.4})}),(0,s.jsx)("circle",{cx:y,cy:g,r:v,fill:"none",stroke:r?"#FF0000":f.main,strokeWidth:2.5,opacity:r?1:.7}),(0,s.jsx)("line",{x1:y-v,y1:g,x2:y-v-8,y2:g,stroke:f.main,strokeWidth:2}),(0,s.jsx)("line",{x1:y+v,y1:g,x2:y+v+8,y2:g,stroke:f.main,strokeWidth:2}),(0,s.jsx)("line",{x1:y,y1:g-v,x2:y,y2:g-v-8,stroke:f.main,strokeWidth:2}),(0,s.jsx)("line",{x1:y,y1:g+v,x2:y,y2:g+v+8,stroke:f.main,strokeWidth:2}),(0,s.jsx)("line",{x1:y-6,y1:g,x2:y+6,y2:g,stroke:f.main,strokeWidth:1}),(0,s.jsx)("line",{x1:y,y1:g-6,x2:y,y2:g+6,stroke:f.main,strokeWidth:1}),N.map((S,D)=>(0,s.jsx)("line",{x1:S.x1,y1:S.y1,x2:S.x2,y2:S.y2,stroke:f.main,strokeWidth:S.isMain?2:1,opacity:S.isMain?.8:.3},D)),[-4,-3,-2,-1,0,1,2,3,4].map(S=>{let D=y+S*(i*.04),E=g+w+20;return(0,s.jsx)("g",{children:(0,s.jsx)("line",{x1:D,y1:E,x2:D,y2:E+(S===0?10:6),stroke:f.main,strokeWidth:S===0?2:1,opacity:.5})},S)})]}),(0,s.jsx)("div",{className:"absolute top-2 left-2 text-xs font-bold uppercase tracking-wider",style:{fontFamily:"var(--font-nerv-display)",color:f.main,textShadow:`0 0 6px ${f.glow}`},children:t}),n&&(0,s.jsxs)("div",{className:"absolute top-12 left-2 space-y-0.5",children:[(0,s.jsxs)("div",{className:"text-[9px] font-mono",style:{color:f.main,opacity:.7},children:["X:",n.x]}),(0,s.jsxs)("div",{className:"text-[9px] font-mono",style:{color:f.main,opacity:.7},children:["Y:",n.y]}),n.z&&(0,s.jsxs)("div",{className:"text-[9px] font-mono",style:{color:f.main,opacity:.7},children:["Z:",n.z]})]}),c&&(0,s.jsx)("div",{className:"absolute right-2 text-xs font-bold uppercase tracking-wider",style:{fontFamily:"var(--font-nerv-display)",color:r?"#FF0000":f.main,textShadow:`0 0 6px ${r?"rgba(255,0,0,0.4)":f.glow}`,top:"50%",transform:"translateY(-50%)"},children:r?"LOCKED":c}),a&&a.length>0&&(0,s.jsx)("div",{className:"absolute bottom-2 right-2 space-y-0.5 text-right",children:a.map((S,D)=>(0,s.jsxs)("div",{className:"text-[9px] font-mono",style:{color:f.main,opacity:.6},children:[S.label,":",S.value]},D))})]})}),TT={red:{main:"#FF2B1D",glow:"rgba(255, 43, 29, 0.18)",dim:"rgba(255, 43, 29, 0.14)"},cyan:{main:"#00F6FF",glow:"rgba(0, 246, 255, 0.18)",dim:"rgba(0, 246, 255, 0.14)"},green:{main:"#00FF00",glow:"rgba(0, 255, 0, 0.18)",dim:"rgba(0, 255, 0, 0.14)"},orange:{main:"#FF9900",glow:"rgba(255, 153, 0, 0.2)",dim:"rgba(255, 153, 0, 0.14)"}},t0={ok:"#00FF00","O.K.":"#00FF00",warning:"#FF9900",SYNC:"#FF9900",critical:"#FF2B1D",ERROR:"#FF2B1D",unknown:"#7A7A7A",OFFLINE:"#7A7A7A"},$$=(0,T.forwardRef)(function({designation:t,name:r,unit:n,fields:a=[],plugNumber:o,checkStatus:i="O.K.",color:l="orange",imageUrl:c,animated:u=!0,className:d="",...m},f){let p=TT[l],b=t0[i]||t0.unknown,x={"--overlay-main":p.main},y={"--overlay-main":p.main,"--overlay-glow":p.glow};return(0,s.jsxs)(B.div,{ref:f,...m,className:`relative overflow-hidden bg-black ${d}`,style:{border:`1px solid ${p.dim}`,boxShadow:`inset 0 0 0 1px ${p.dim}, 0 0 18px ${p.glow}`},initial:u?{opacity:0,y:18}:!1,animate:{opacity:1,y:0},transition:u?{duration:.4,ease:[.22,1,.36,1]}:{duration:0},children:[(0,s.jsx)("div",{className:"absolute inset-0 pointer-events-none",style:{background:"repeating-linear-gradient(180deg, transparent, transparent 18px, rgba(255,255,255,0.03) 18px, rgba(255,255,255,0.03) 19px)"}}),(0,s.jsx)("div",{className:"absolute inset-x-0 top-0 h-px bg-white/10"}),(0,s.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-px bg-white/10"}),(0,s.jsx)("div",{className:"relative",children:c?(0,s.jsxs)("div",{className:"relative h-56 overflow-hidden border-b border-white/10 sm:h-64",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:`url(${c})`,filter:"contrast(1.05) saturate(0.72) brightness(0.92)"}}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.08)_32%,rgba(0,0,0,0.56))]"}),(0,s.jsx)("div",{className:"camera-overlay-cross left-[16%] top-[22%]",style:x}),(0,s.jsx)("div",{className:"camera-overlay-cross right-[18%] bottom-[26%]",style:x}),(0,s.jsxs)("div",{className:"absolute left-3 top-3 flex flex-col gap-2 sm:left-4 sm:top-4",children:[(0,s.jsxs)(va,{color:l,className:"max-w-[13rem]",children:[(0,s.jsxs)("div",{className:"camera-overlay-meta",children:["TEST PLUG : ",o??"00"]}),(0,s.jsx)("div",{className:"camera-overlay-title",children:n??t}),(0,s.jsx)("div",{className:"camera-overlay-detail",children:"harmonics test proceeding"})]}),(0,s.jsx)("span",{className:"camera-overlay-live",style:y,children:"live"})]}),(0,s.jsx)("div",{className:"absolute bottom-3 right-3 max-w-[78%] sm:bottom-4 sm:right-4 sm:max-w-[68%]",children:(0,s.jsxs)(va,{color:l,className:"ml-auto",children:[(0,s.jsxs)("div",{className:"camera-overlay-meta text-right",children:["subject : ",t]}),(0,s.jsx)("div",{className:"camera-overlay-title text-right",children:r}),n&&(0,s.jsxs)("div",{className:"camera-overlay-detail text-right",children:["pilot channel // ",n]})]})})]}):(0,s.jsx)("div",{className:"border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.16))] p-3 sm:p-4",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[(0,s.jsxs)(va,{color:l,className:"max-w-[14rem]",children:[(0,s.jsx)("div",{className:"camera-overlay-meta",children:"subject register"}),(0,s.jsx)("div",{className:"camera-overlay-title",children:r}),(0,s.jsx)("div",{className:"camera-overlay-detail",children:t})]}),(0,s.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(o||n)&&(0,s.jsxs)(va,{color:l,children:[(0,s.jsx)("div",{className:"camera-overlay-meta text-right",children:o?`test plug : ${o}`:"entry plug"}),(0,s.jsx)("div",{className:"camera-overlay-title text-right",children:n??"standby"})]}),(0,s.jsx)("span",{className:"camera-overlay-live",style:y,children:"relay"})]})]})})}),a.length>0&&(0,s.jsx)("div",{className:"space-y-1 border-b border-white/10 p-3 sm:p-4",children:a.map((g,h)=>{let v=g.status&&t0[g.status]||"#E0E0E0";return(0,s.jsxs)("div",{className:"grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border border-white/8 bg-black/46 px-2 py-1.5",children:[(0,s.jsx)("span",{className:"truncate text-[9px] uppercase tracking-[0.16em] text-nerv-white/42",style:{fontFamily:"var(--font-nerv-mono)"},children:g.label}),(0,s.jsx)("span",{className:"text-[10px] font-bold uppercase tracking-[0.08em]",style:{color:v,fontFamily:"var(--font-nerv-mono)"},children:g.value}),(0,s.jsx)("span",{className:"px-1.5 py-[2px] text-[9px] uppercase tracking-[0.14em] text-black",style:{backgroundColor:v,fontFamily:"var(--font-nerv-mono)"},children:g.status??"log"})]},h)})}),(0,s.jsxs)("div",{className:"flex items-center justify-between gap-3 px-3 py-2 sm:px-4",children:[(0,s.jsx)("div",{className:"text-[9px] uppercase tracking-[0.18em] text-nerv-white/36",style:{fontFamily:"var(--font-nerv-mono)"},children:c?"camera no.012 left":"subject relay"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"text-[9px] uppercase tracking-[0.18em] text-nerv-white/38",style:{fontFamily:"var(--font-nerv-mono)"},children:"check"}),(0,s.jsx)("span",{className:"px-1.5 py-[2px] text-[10px] font-bold uppercase tracking-[0.16em] text-black",style:{backgroundColor:b,fontFamily:"var(--font-nerv-mono)"},children:i})]})]})]})}),NT={orange:{text:"text-nerv-orange",border:"border-nerv-orange",label:"text-nerv-orange"},green:{text:"text-nerv-green",border:"border-nerv-green",label:"text-nerv-green"},cyan:{text:"text-nerv-cyan",border:"border-nerv-cyan",label:"text-nerv-cyan"}},F$=(0,T.forwardRef)(function({label:t,color:r="orange",indeterminate:n=!1,checked:a,className:o="",id:i,disabled:l,...c},u){let d=(0,T.useId)(),m=i||d,f=(0,T.useRef)(null),p=NT[r];(0,T.useEffect)(()=>{f.current&&(f.current.indeterminate=n)},[n]);let b=n?"-":a?"X":"\xA0";return(0,s.jsxs)("label",{htmlFor:m,className:`
          inline-flex items-center gap-2 select-none
          ${l?"opacity-30 cursor-not-allowed":"cursor-pointer"}
          ${o}
        `,children:[(0,s.jsx)("input",{id:m,ref:x=>{f.current=x,typeof u=="function"?u(x):u&&(u.current=x)},type:"checkbox",checked:a,disabled:l,className:"sr-only",...c}),(0,s.jsxs)("span",{className:`
            inline-flex items-center font-mono text-sm leading-none
            ${p.text}
          `,style:{fontFamily:"var(--font-nerv-mono)"},"aria-hidden":"true",children:[(0,s.jsx)("span",{className:"opacity-70",children:"["}),(0,s.jsx)("span",{className:"w-4 text-center font-bold",children:b}),(0,s.jsx)("span",{className:"opacity-70",children:"]"})]}),t&&(0,s.jsxs)("span",{className:`text-xs uppercase tracking-[0.2em] font-bold ${p.label}`,style:{fontFamily:"var(--font-nerv-display)"},children:[(0,s.jsx)("span",{className:"opacity-50 mr-1",children:"//"}),t]})]})}),AT={orange:{active:"bg-nerv-orange",text:"text-nerv-orange",border:"border-nerv-orange",label:"text-nerv-orange"},green:{active:"bg-nerv-green",text:"text-nerv-green",border:"border-nerv-green",label:"text-nerv-green"},cyan:{active:"bg-nerv-cyan",text:"text-nerv-cyan",border:"border-nerv-cyan",label:"text-nerv-cyan"}},MT={sm:{track:"w-12 h-5",thumb:"w-5 h-3",text:"text-[8px]"},md:{track:"w-16 h-7",thumb:"w-7 h-5",text:"text-[10px]"},lg:{track:"w-20 h-9",thumb:"w-9 h-7",text:"text-xs"}},L$=(0,T.forwardRef)(function({checked:t=!1,onChange:r,label:n,color:a="orange",size:o="md",disabled:i=!1,className:l="",...c},u){let d=AT[a],m=MT[o],f=()=>{i||r?.(!t)},p=b=>{(b.key===" "||b.key==="Enter")&&(b.preventDefault(),f())};return(0,s.jsxs)("div",{ref:u,className:`inline-flex items-center gap-2 ${l}`,...c,children:[(0,s.jsxs)("div",{role:"switch","aria-checked":t,tabIndex:i?-1:0,onClick:f,onKeyDown:p,className:`
            relative ${m.track} border
            ${t?d.border:"border-nerv-mid-gray"}
            bg-nerv-black
            ${i?"opacity-30 cursor-not-allowed":"cursor-pointer"}
            transition-all duration-150 select-none
            flex items-center
          `,children:[(0,s.jsx)("span",{className:`
              absolute left-1 ${m.text} uppercase font-bold tracking-wider
              ${t?"opacity-20":"opacity-60"} text-nerv-mid-gray
            `,style:{fontFamily:"var(--font-nerv-mono)"},"aria-hidden":"true",children:"OFF"}),(0,s.jsx)("span",{className:`
              absolute right-1 ${m.text} uppercase font-bold tracking-wider
              ${t?`${d.text} opacity-100`:"opacity-0"}
            `,style:{fontFamily:"var(--font-nerv-mono)"},"aria-hidden":"true",children:"ON"}),(0,s.jsx)("span",{className:`
              absolute top-0.5 ${m.thumb}
              transition-all duration-150
              ${t?`${d.active} right-0.5 left-auto`:"bg-nerv-mid-gray left-0.5 right-auto"}
            `,style:{boxShadow:t?`0 0 6px ${a==="orange"?"#FF6A00":a==="green"?"#00FF00":"#00FFFF"}`:"none"}})]}),n&&(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.2em] font-bold ${d.label}`,style:{fontFamily:"var(--font-nerv-display)"},children:n})]})}),ET={orange:{text:"text-nerv-orange",border:"border-nerv-orange",label:"text-nerv-orange"},green:{text:"text-nerv-green",border:"border-nerv-green",label:"text-nerv-green"},cyan:{text:"text-nerv-cyan",border:"border-nerv-cyan",label:"text-nerv-cyan"}},U$=(0,T.forwardRef)(function({label:t,color:r="orange",error:n,hint:a,wrapperClassName:o="",className:i="",id:l,...c},u){let d=(0,T.useId)(),m=l||d,[f,p]=(0,T.useState)(!1),b=ET[r];return(0,s.jsxs)("div",{className:`flex flex-col gap-1.5 ${o}`,children:[t&&(0,s.jsxs)("label",{htmlFor:m,className:`text-xs uppercase tracking-[0.2em] font-bold ${b.label}`,style:{fontFamily:"var(--font-nerv-display)"},children:[(0,s.jsx)("span",{className:"opacity-50 mr-1",children:"//"}),t]}),(0,s.jsxs)("div",{className:"relative flex items-start",children:[(0,s.jsx)("span",{className:`
              text-lg font-mono mr-1 transition-all duration-100 mt-1
              ${f?`${b.text} opacity-100 translate-x-0`:"opacity-0 -translate-x-2"}
            `,children:"["}),(0,s.jsx)("textarea",{id:m,ref:u,onFocus:x=>{p(!0),c.onFocus?.(x)},onBlur:x=>{p(!1),c.onBlur?.(x)},className:`
              flex-1 bg-nerv-black font-mono resize-vertical min-h-[80px]
              border ${f?`border-2 ${b.border}`:"border border-nerv-mid-gray"}
              ${n?"border-nerv-red":""}
              ${b.text} placeholder:text-nerv-mid-gray
              px-4 py-2.5 text-sm
              outline-none transition-all duration-100
              ${i}
            `,style:{fontFamily:"var(--font-nerv-mono)"},...c}),(0,s.jsx)("span",{className:`
              text-lg font-mono ml-1 transition-all duration-100 mt-1
              ${f?`${b.text} opacity-100 translate-x-0`:"opacity-0 translate-x-2"}
            `,children:"]"})]}),n&&(0,s.jsxs)("span",{className:"text-xs text-nerv-red font-mono flex items-center gap-1",children:[(0,s.jsx)("span",{className:"text-[10px]",children:"!"})," ",n]}),a&&!n&&(0,s.jsx)("span",{className:"text-xs text-nerv-mid-gray font-mono",children:a})]})}),CT={default:{text:"text-nerv-orange",border:"border-nerv-orange"},success:{text:"text-nerv-green",border:"border-nerv-green"},warning:{text:"text-nerv-orange",border:"border-nerv-orange"},danger:{text:"text-nerv-red",border:"border-nerv-red"},info:{text:"text-nerv-cyan",border:"border-nerv-cyan"}},DT={sm:"px-1.5 py-0.5 text-[9px]",md:"px-2.5 py-1 text-[10px]",lg:"px-3 py-1.5 text-xs"},C2=(0,T.forwardRef)(function({variant:t="default",label:r,size:n="md",removable:a=!1,onRemove:o,className:i="",...l},c){let u=CT[t];return(0,s.jsxs)("span",{ref:c,className:`
          relative inline-flex items-center gap-1.5
          uppercase tracking-[0.15em] font-bold
          border ${u.border} ${u.text}
          bg-nerv-black
          ${DT[n]}
          select-none
          ${i}
        `,style:{fontFamily:"var(--font-nerv-display)"},...l,children:[(0,s.jsx)("span",{className:`absolute top-0 left-0 w-1 h-1 border-t border-l ${u.border}`}),(0,s.jsx)("span",{className:`absolute top-0 right-0 w-1 h-1 border-t border-r ${u.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 left-0 w-1 h-1 border-b border-l ${u.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 right-0 w-1 h-1 border-b border-r ${u.border}`}),r,a&&(0,s.jsx)("button",{type:"button",onClick:d=>{d.stopPropagation(),o?.()},className:`
              ${u.text} opacity-60 hover:opacity-100
              transition-opacity duration-100
              cursor-pointer text-current leading-none
            `,style:{fontFamily:"var(--font-nerv-mono)"},"aria-label":`Remove ${r}`,children:"X"})]})}),r0=`
@keyframes nerv-skeleton-scan {
  0% { transform: translateY(-135%); opacity: 0; }
  18% { opacity: 0.18; }
  46% { opacity: 0.46; }
  100% { transform: translateY(220%); opacity: 0; }
}

@keyframes nerv-skeleton-flicker {
  0%, 100% { opacity: 0.74; }
  45% { opacity: 0.94; }
  70% { opacity: 0.82; }
}

@keyframes nerv-skeleton-line-pulse {
  0%, 100% {
    opacity: 0.74;
  }
  50% {
    opacity: 0.88;
  }
}

@keyframes nerv-skeleton-cell-pulse {
  0%, 100% {
    opacity: 0.24;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes nerv-skeleton-grid-drift {
  0% { transform: translateX(-120%); opacity: 0; }
  22% { opacity: 0.1; }
  58% { opacity: 0.22; }
  100% { transform: translateX(220%); opacity: 0; }
}
`,D2="relative overflow-hidden border border-nerv-mid-gray/30 bg-black";function S2(e){return typeof e=="number"?`${e}px`:e}function T2(e,t,r){return(0,s.jsxs)("div",{className:`${D2} h-3`,style:{width:e,height:t,animation:"nerv-skeleton-line-pulse 1.7s ease-in-out infinite"},children:[(0,s.jsx)("span",{className:"absolute inset-[1px] pointer-events-none","aria-hidden":"true",style:{background:`
            repeating-linear-gradient(
              180deg,
              rgba(28,64,38,0.85) 0 2px,
              rgba(56,115,71,0.75) 2px 3px,
              rgba(16,28,20,0.95) 3px 6px
            )
          `,animation:"nerv-skeleton-flicker 2.6s steps(2, end) infinite"}}),(0,s.jsx)("span",{className:"absolute inset-x-[1px] top-[-45%] h-[45%] pointer-events-none","aria-hidden":"true",style:{background:"linear-gradient(180deg, transparent 0%, rgba(174,255,202,0.08) 18%, rgba(120,255,162,0.42) 52%, rgba(174,255,202,0.08) 82%, transparent 100%)",animation:"nerv-skeleton-scan 2.4s ease-in-out infinite"}})]},r)}function RT(e,t,r,n){let a=e==="circular"?7:12,o=e==="circular"?7:8,i=a*o;return(0,s.jsxs)("div",{className:`${D2} ${e==="circular"?"rounded-full":""} ${n}`,role:"status","aria-label":"Loading",style:{width:t,height:r,boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 16px rgba(255,255,255,0.04)"},children:[(0,s.jsx)("div",{className:"absolute inset-[10%] grid","aria-hidden":"true",style:{gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`,gridTemplateRows:`repeat(${o}, minmax(0, 1fr))`,gap:"0.28rem"},children:Array.from({length:i}).map((l,c)=>{let u=.28+c*7%5*.12;return(0,s.jsx)("span",{className:"h-1.5 w-1.5 place-self-center bg-white",style:{opacity:u,boxShadow:"0 0 5px rgba(255,255,255,0.12)",animation:"nerv-skeleton-cell-pulse 1.4s ease-in-out infinite",animationDelay:`${c%a*.06+Math.floor(c/a)*.04}s`}},c)})}),(0,s.jsx)("span",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",style:{background:`
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 58%),
            linear-gradient(180deg, rgba(255,255,255,0.04), transparent 28%, rgba(255,255,255,0.02))
          `}}),(0,s.jsx)("span",{className:"absolute inset-y-0 left-[-32%] w-[32%] pointer-events-none","aria-hidden":"true",style:{background:"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 26%, rgba(255,255,255,0.14) 58%, transparent 100%)",animation:"nerv-skeleton-grid-drift 2.2s ease-in-out infinite"}})]})}var j$=(0,T.forwardRef)(function({width:t,height:r,variant:n="text",lines:a=1,className:o="",style:i,...l},c){let u=S2(t),d=S2(r),f={text:{w:"100%",h:"14px"},rectangular:{w:"100%",h:"88px"},circular:{w:"56px",h:"56px"}}[n];return n==="text"&&a>1?(0,s.jsxs)("div",{ref:c,className:`flex flex-col gap-1.5 ${o}`,role:"status","aria-label":"Loading",style:i,...l,children:[(0,s.jsx)("style",{children:r0}),Array.from({length:a}).map((p,b)=>T2(b===a-1?u?`calc(${u} * 0.72)`:"72%":u||f.w,d||f.h,b))]}):n==="text"?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:r0}),(0,s.jsx)("div",{ref:c,className:o,role:"status","aria-label":"Loading",style:i,...l,children:T2(u||f.w,d||f.h)})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:r0}),(0,s.jsx)("div",{ref:c,style:i,...l,children:RT(n,u||f.w,d||f.h,o)})]})}),VT={orange:{text:"text-nerv-orange",separator:"text-nerv-orange/50",current:"text-nerv-white",hover:"hover:text-nerv-orange hover:underline"},green:{text:"text-nerv-green",separator:"text-nerv-green/50",current:"text-nerv-white",hover:"hover:text-nerv-green hover:underline"},cyan:{text:"text-nerv-cyan",separator:"text-nerv-cyan/50",current:"text-nerv-white",hover:"hover:text-nerv-cyan hover:underline"}},H$=(0,T.forwardRef)(function({items:t,separator:r=">>",color:n="orange",className:a="",...o},i){let l=VT[n];return(0,s.jsx)("nav",{ref:i,"aria-label":"Breadcrumb",className:`${a}`,...o,children:(0,s.jsx)("ol",{className:"flex items-center gap-2 list-none m-0 p-0",style:{fontFamily:"var(--font-nerv-display)"},children:t.map((c,u)=>{let d=u===t.length-1;return(0,s.jsxs)("li",{className:"flex items-center gap-2",children:[u>0&&(0,s.jsx)("span",{className:`text-[10px] ${l.separator} select-none`,style:{fontFamily:"var(--font-nerv-mono)"},"aria-hidden":"true",children:r}),d?(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.15em] font-bold ${l.current}`,"aria-current":"page",children:c.label}):c.href?(0,s.jsx)("a",{href:c.href,onClick:c.onClick,className:`text-xs uppercase tracking-[0.15em] font-bold ${l.text} ${l.hover} transition-colors duration-100 cursor-pointer no-underline`,children:c.label}):(0,s.jsx)("button",{type:"button",onClick:c.onClick,className:`text-xs uppercase tracking-[0.15em] font-bold ${l.text} ${l.hover} transition-colors duration-100 cursor-pointer bg-transparent border-none p-0`,children:c.label})]},u)})})})}),OT={orange:{text:"text-nerv-orange",border:"border-nerv-orange",bg:"bg-nerv-orange",activeBg:"rgba(255, 153, 0, 0.14)",hoverBg:"hover:bg-nerv-orange hover:text-nerv-black",disabledText:"text-nerv-mid-gray",disabledBorder:"border-nerv-mid-gray"},green:{text:"text-nerv-green",border:"border-nerv-green",bg:"bg-nerv-green",activeBg:"rgba(0, 255, 0, 0.14)",hoverBg:"hover:bg-nerv-green hover:text-nerv-black",disabledText:"text-nerv-mid-gray",disabledBorder:"border-nerv-mid-gray"},cyan:{text:"text-nerv-cyan",border:"border-nerv-cyan",bg:"bg-nerv-cyan",activeBg:"rgba(0, 246, 255, 0.14)",hoverBg:"hover:bg-nerv-cyan hover:text-nerv-black",disabledText:"text-nerv-mid-gray",disabledBorder:"border-nerv-mid-gray"}};function zT(e,t,r){let n=r*2+5;if(t<=n)return Array.from({length:t},(u,d)=>d+1);let a=Math.max(e-r,1),o=Math.min(e+r,t),i=a>2,l=o<t-1;return!i&&l?[...Array.from({length:3+r*2},(d,m)=>m+1),"ellipsis",t]:i&&!l?[1,"ellipsis",...Array.from({length:3+r*2},(d,m)=>t-(2+r*2)+m)]:[1,"ellipsis-left",...Array.from({length:o-a+1},(u,d)=>a+d),"ellipsis-right",t]}var G$=(0,T.forwardRef)(function({total:t,pageSize:r,currentPage:n,onPageChange:a,color:o="orange",variant:i="compact",siblingCount:l=1,className:c="",...u},d){let m=OT[o],f=Math.max(1,Math.ceil(t/r)),p=n<=1,b=n>=f,x=zT(n,f,l),y=String(n).padStart(2,"0"),g=String(f).padStart(2,"0");return i==="explicit"?(0,s.jsxs)("nav",{ref:d,"aria-label":"Pagination",className:`flex flex-wrap items-center gap-2 ${c}`,...u,children:[(0,s.jsx)("button",{type:"button",onClick:()=>!p&&a(n-1),disabled:p,"aria-label":"Previous page",className:`
              px-3 py-1.5 text-xs uppercase tracking-[0.15em] font-bold
              border transition-colors duration-100 cursor-pointer
              select-none bg-nerv-black
              disabled:opacity-30 disabled:cursor-not-allowed
              ${p?`${m.disabledText} ${m.disabledBorder}`:`${m.text} ${m.border} ${m.hoverBg}`}
            `,style:{fontFamily:"var(--font-nerv-display)"},children:"<< Avant"}),(0,s.jsx)("div",{className:"flex flex-wrap items-center gap-1",children:x.map((h,v)=>{if(typeof h!="number")return(0,s.jsx)("span",{className:`px-2 text-xs ${m.text} opacity-60`,style:{fontFamily:"var(--font-nerv-mono)"},children:"..."},`${h}-${v}`);let w=h===n;return(0,s.jsx)("button",{type:"button",onClick:()=>a(h),"aria-label":`Page ${h}`,"aria-current":w?"page":void 0,className:`
                    min-w-8 px-2.5 py-1.5 text-xs font-bold
                    border transition-colors duration-100 cursor-pointer
                    select-none bg-nerv-black
                    ${w?`${m.border} ${m.text}`:`${m.text} ${m.border} ${m.hoverBg}`}
                  `,style:{fontFamily:"var(--font-nerv-mono)",backgroundColor:w?m.activeBg:void 0},children:h},h)})}),(0,s.jsx)("button",{type:"button",onClick:()=>!b&&a(n+1),disabled:b,"aria-label":"Next page",className:`
              px-3 py-1.5 text-xs uppercase tracking-[0.15em] font-bold
              border transition-colors duration-100 cursor-pointer
              select-none bg-nerv-black
              disabled:opacity-30 disabled:cursor-not-allowed
              ${b?`${m.disabledText} ${m.disabledBorder}`:`${m.text} ${m.border} ${m.hoverBg}`}
            `,style:{fontFamily:"var(--font-nerv-display)"},children:"Apr\xE8s >>"})]}):(0,s.jsxs)("nav",{ref:d,"aria-label":"Pagination",className:`flex items-center gap-3 ${c}`,...u,children:[(0,s.jsx)("button",{type:"button",onClick:()=>!p&&a(n-1),disabled:p,"aria-label":"Previous page",className:`
            px-3 py-1.5 text-xs uppercase tracking-[0.15em] font-bold
            border transition-colors duration-100 cursor-pointer
            select-none bg-nerv-black
            disabled:opacity-30 disabled:cursor-not-allowed
            ${p?`${m.disabledText} ${m.disabledBorder}`:`${m.text} ${m.border} ${m.hoverBg}`}
          `,style:{fontFamily:"var(--font-nerv-display)"},children:"<<"}),(0,s.jsxs)("div",{className:`
            px-4 py-1.5 border bg-nerv-black ${m.border}
            flex items-center gap-2
          `,children:[(0,s.jsx)("span",{className:`text-[10px] uppercase tracking-[0.15em] ${m.text} opacity-60`,style:{fontFamily:"var(--font-nerv-display)"},children:"PAGE"}),(0,s.jsx)("span",{className:`text-sm font-bold ${m.text}`,style:{fontFamily:"var(--font-nerv-mono)"},children:y}),(0,s.jsx)("span",{className:`text-xs ${m.text} opacity-40`,style:{fontFamily:"var(--font-nerv-mono)"},children:"/"}),(0,s.jsx)("span",{className:`text-sm font-bold ${m.text}`,style:{fontFamily:"var(--font-nerv-mono)"},children:g})]}),(0,s.jsx)("button",{type:"button",onClick:()=>!b&&a(n+1),disabled:b,"aria-label":"Next page",className:`
            px-3 py-1.5 text-xs uppercase tracking-[0.15em] font-bold
            border transition-colors duration-100 cursor-pointer
            select-none bg-nerv-black
            disabled:opacity-30 disabled:cursor-not-allowed
            ${b?`${m.disabledText} ${m.disabledBorder}`:`${m.text} ${m.border} ${m.hoverBg}`}
          `,style:{fontFamily:"var(--font-nerv-display)"},children:">>"})]})}),_T={orange:{text:"text-nerv-orange",selected:"text-nerv-orange",unselected:"text-nerv-mid-gray",label:"text-nerv-orange"},green:{text:"text-nerv-green",selected:"text-nerv-green",unselected:"text-nerv-mid-gray",label:"text-nerv-green"},cyan:{text:"text-nerv-cyan",selected:"text-nerv-cyan",unselected:"text-nerv-mid-gray",label:"text-nerv-cyan"}},q$=(0,T.forwardRef)(function({options:t,value:r,onChange:n,direction:a="vertical",color:o="orange",name:i,label:l,className:c="",...u},d){let m=(0,T.useId)(),f=i||`nerv-radio-${m}`,p=_T[o];return(0,s.jsxs)("div",{ref:d,role:"radiogroup","aria-label":l,className:`${c}`,...u,children:[l&&(0,s.jsx)("div",{className:`text-[10px] uppercase tracking-[0.2em] font-bold ${p.label} mb-2`,style:{fontFamily:"var(--font-nerv-display)"},children:l}),(0,s.jsx)("div",{className:`flex ${a==="horizontal"?"flex-row gap-4":"flex-col gap-1"}`,children:t.map(b=>{let x=r===b.value,y=b.disabled===!0,g=`${f}-${b.value}`;return(0,s.jsxs)("label",{htmlFor:g,className:`
                  flex items-center gap-2 py-1 px-1 cursor-pointer
                  transition-colors duration-100 select-none
                  ${y?"opacity-30 cursor-not-allowed":""}
                `,children:[(0,s.jsx)("input",{type:"radio",id:g,name:f,value:b.value,checked:x,disabled:y,onChange:()=>!y&&n?.(b.value),className:"sr-only"}),(0,s.jsx)("span",{className:`text-sm font-bold ${x?p.selected:p.unselected}`,style:{fontFamily:"var(--font-nerv-mono)"},"aria-hidden":"true",children:x?"(*)":"( )"}),(0,s.jsx)("span",{className:`text-xs uppercase tracking-[0.15em] font-bold ${x?p.text:"text-nerv-white"}`,style:{fontFamily:"var(--font-nerv-display)"},children:b.label})]},b.value)})})]})}),BT={orange:{border:"border-nerv-orange",text:"text-nerv-orange",hazard:"bg-nerv-orange",glow:"rgba(255, 153, 0, 0.08)"},green:{border:"border-nerv-green",text:"text-nerv-green",hazard:"bg-nerv-green",glow:"rgba(0, 255, 0, 0.08)"},cyan:{border:"border-nerv-cyan",text:"text-nerv-cyan",hazard:"bg-nerv-cyan",glow:"rgba(0, 255, 255, 0.08)"}},Y$=(0,T.forwardRef)(function({open:t,onClose:r,side:n="right",width:a="400px",title:o,color:i="orange",children:l,className:c=""},u){let d=BT[i],m=n==="right",f={hidden:{x:m?"100%":"-100%"},visible:{x:0},exit:{x:m?"100%":"-100%"}},p=(0,s.jsx)(Bt,{children:t&&(0,s.jsxs)(B.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},className:"fixed inset-0 z-50",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-black/70",onClick:r}),(0,s.jsxs)(B.div,{ref:u,variants:f,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2,ease:"easeOut"},className:`
                absolute top-0 bottom-0
                ${m?"right-0":"left-0"}
                bg-nerv-black ${d.border}
                ${m?"border-l-2":"border-r-2"}
                flex flex-col
                ${c}
              `,style:{width:a},role:"dialog","aria-modal":"true","aria-label":o||"Drawer",children:[(0,s.jsx)("div",{className:"h-1 hazard-stripes-black flex-shrink-0"}),o&&(0,s.jsxs)("div",{className:`flex items-center justify-between px-4 py-3 border-b ${d.border} bg-nerv-dark-gray flex-shrink-0`,children:[(0,s.jsx)("h2",{className:`text-sm uppercase tracking-[0.2em] font-bold ${d.text}`,style:{fontFamily:"var(--font-nerv-display)"},children:o}),(0,s.jsx)("button",{type:"button",onClick:r,"aria-label":"Close drawer",className:`
                      text-xs font-bold ${d.text} bg-transparent border border-nerv-mid-gray
                      px-2 py-1 cursor-pointer transition-colors duration-100
                      hover:border-current hover:bg-nerv-dark-gray
                    `,style:{fontFamily:"var(--font-nerv-mono)"},children:"[X]"})]}),(0,s.jsx)("div",{className:"flex-1 overflow-y-auto p-4",children:l}),(0,s.jsx)("div",{className:`absolute top-0 ${m?"left-0":"right-0"} w-4 h-4 border-t-2 ${m?"border-l-2":"border-r-2"} ${d.border} opacity-30 pointer-events-none`}),(0,s.jsx)("div",{className:`absolute bottom-0 ${m?"left-0":"right-0"} w-4 h-4 border-b-2 ${m?"border-l-2":"border-r-2"} ${d.border} opacity-30 pointer-events-none`}),(0,s.jsx)("div",{className:`absolute top-0 ${m?"right-0":"left-0"} w-4 h-4 border-t-2 ${m?"border-r-2":"border-l-2"} ${d.border} opacity-30 pointer-events-none`}),(0,s.jsx)("div",{className:`absolute bottom-0 ${m?"right-0":"left-0"} w-4 h-4 border-b-2 ${m?"border-r-2":"border-l-2"} ${d.border} opacity-30 pointer-events-none`})]})]})});return typeof document>"u"?p:(0,a0.createPortal)(p,document.body)}),$T={orange:{line:"border-nerv-orange",text:"text-nerv-orange",bg:"bg-nerv-black"},green:{line:"border-nerv-green",text:"text-nerv-green",bg:"bg-nerv-black"},cyan:{line:"border-nerv-cyan",text:"text-nerv-cyan",bg:"bg-nerv-black"}},FT={solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"},P$=(0,T.forwardRef)(function({label:t,color:r="orange",variant:n="solid",orientation:a="horizontal",className:o="",...i},l){let c=$T[r],u=FT[n];return a==="vertical"?(0,s.jsx)("div",{ref:l,role:"separator","aria-orientation":"vertical",className:`
            inline-block self-stretch
            border-l ${u} ${c.line} opacity-50
            ${o}
          `,style:{minHeight:"1em"},...i}):(0,s.jsx)("div",{ref:l,role:"separator","aria-orientation":"horizontal",className:`flex items-center w-full ${o}`,...i,children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:`flex-1 border-t ${u} ${c.line} opacity-50`}),(0,s.jsxs)("span",{className:`
                px-3 text-[10px] uppercase tracking-[0.2em] font-bold
                ${c.text} whitespace-nowrap select-none
              `,style:{fontFamily:"var(--font-nerv-display)"},children:["[ ",t," ]"]}),(0,s.jsx)("div",{className:`flex-1 border-t ${u} ${c.line} opacity-50`})]}):(0,s.jsx)("div",{className:`flex-1 border-t ${u} ${c.line} opacity-50`})})}),LT={ok:"bg-nerv-green/90",warning:"bg-nerv-orange/90",danger:"bg-nerv-red/90",inactive:"bg-nerv-mid-gray/40"},UT={ok:"text-nerv-black",warning:"text-nerv-black",danger:"text-nerv-black",inactive:"text-nerv-mid-gray"},jT={orange:"text-nerv-orange",green:"text-nerv-green",cyan:"text-nerv-cyan"},HT={ok:"green",warning:"orange",danger:"red",inactive:"cyan"},X$=(0,T.forwardRef)(function({phases:t,color:r="green",title:n,className:a=""},o){return(0,s.jsxs)("div",{ref:o,className:`flex flex-col ${a}`,children:[n&&(0,s.jsx)("div",{className:`mb-1 border-b border-current/25 pb-1 text-[10px] uppercase tracking-[0.22em] font-bold ${jT[r]}`,style:{fontFamily:"var(--font-nerv-display)"},children:n}),(0,s.jsx)("div",{className:"flex flex-col gap-[3px]",children:t.map((i,l)=>(0,s.jsxs)("div",{className:"grid grid-cols-[64px_minmax(0,1fr)_48px] items-center gap-2 border border-white/10 bg-black/70 px-2 py-1",style:{borderColor:"rgba(224,224,224,0.08)"},children:[(0,s.jsx)("span",{className:"text-[9px] uppercase tracking-[0.14em] text-nerv-white/62",style:{fontFamily:"var(--font-nerv-mono)"},children:i.label}),(0,s.jsx)(jl,{content:i.value?`${i.label} \u2014 ${i.value}`:i.label,color:HT[i.status],delay:120,className:"block w-full",tabIndex:0,"aria-label":i.value?`${i.label} \u2014 ${i.value}`:i.label,children:(0,s.jsxs)("div",{className:"relative h-3 cursor-pointer overflow-hidden border border-white/10 bg-black/60 transition-transform duration-150 hover:scale-x-[1.01]",children:[(0,s.jsx)("div",{className:"absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-nerv-orange/60"}),(0,s.jsx)("div",{className:`absolute left-0 top-0 bottom-0 ${LT[i.status]}`,style:{width:i.status==="ok"?"100%":i.status==="warning"?"68%":i.status==="danger"?"48%":"24%",backgroundImage:"repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.38) 6px, rgba(0,0,0,0.38) 7px)"}})]})}),(0,s.jsx)("span",{className:`text-right text-[9px] font-bold uppercase ${UT[i.status]}`,style:{fontFamily:"var(--font-nerv-mono)"},children:i.value??i.status})]},l))})]})}),GT={cyan:"text-nerv-cyan",green:"text-nerv-green",orange:"text-nerv-orange",red:"text-nerv-red",magenta:"text-nerv-magenta"};function Uo(e){return Math.max(0,Math.min(100,e))}function qT(e,t){if(e.length===0)return"linear-gradient(90deg, transparent 0%, transparent 100%)";if(e.length===1)return`linear-gradient(90deg, ${e[0].color} 0%, ${e[0].color} 100%)`;let r=3,n=[`${e[0].color} 0%`];return e.forEach((a,o)=>{let i=Uo(t(a.start)),l=Uo(t(a.end));if(o===0){n.push(`${a.color} ${Uo(l-r)}%`);return}if(o===e.length-1){n.push(`${a.color} ${Uo(i+r)}%`),n.push(`${a.color} 100%`);return}n.push(`${a.color} ${Uo(i+r)}%`),n.push(`${a.color} ${Uo(l-r)}%`)}),`linear-gradient(90deg, ${n.join(", ")})`}var K$=(0,T.forwardRef)(function({value:t,min:r=0,max:n=100,zones:a,label:o,sublabel:i,color:l="cyan",fillMode:c="stepped",className:u=""},d){let m=Math.max(1,n-r),f=Math.max(0,Math.min(1,(t-r)/m))*100,p=x=>Math.max(0,Math.min(100,(x-r)/m*100)),b=qT(a,p);return(0,s.jsxs)("div",{ref:d,className:`flex flex-col gap-1 ${u}`,children:[(o||i)&&(0,s.jsxs)("div",{className:"flex flex-col border-b border-white/10 pb-1",children:[o&&(0,s.jsx)("span",{className:`text-[10px] uppercase tracking-[0.22em] font-bold ${GT[l]}`,style:{fontFamily:"var(--font-nerv-display)"},children:o}),i&&(0,s.jsx)("span",{className:"text-[9px] uppercase tracking-[0.1em] text-nerv-mid-gray font-mono",style:{fontFamily:"var(--font-nerv-mono)"},children:i})]}),(0,s.jsx)("div",{className:"relative h-3",children:a.map((x,y)=>{if(!x.label)return null;let g=p(x.start);return(0,s.jsx)("span",{className:"absolute whitespace-nowrap text-[8px] uppercase tracking-[0.12em] font-mono text-nerv-mid-gray",style:{left:`${g}%`,fontFamily:"var(--font-nerv-mono)",transform:g>80?"translateX(-100%)":"none"},children:x.label},y)})}),(0,s.jsxs)("div",{className:"relative h-4 overflow-hidden border border-nerv-mid-gray/50 bg-black/70",role:"meter","aria-valuenow":t,"aria-valuemin":r,"aria-valuemax":n,"aria-label":o,children:[c==="gradient"?(0,s.jsx)("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:b}}):a.map((x,y)=>{let g=p(x.start),h=p(x.end)-g;return(0,s.jsx)("div",{className:"absolute top-0 bottom-0 opacity-20",style:{left:`${g}%`,width:`${h}%`,backgroundColor:x.color}},y)}),a.slice(1).map((x,y)=>{let g=p(x.start);return(0,s.jsx)("div",{className:"absolute top-0 bottom-0 w-px bg-nerv-mid-gray/60",style:{left:`${g}%`}},y)}),Array.from({length:24}).map((x,y)=>(0,s.jsx)("div",{className:"absolute top-0 bottom-0 w-px bg-black/35",style:{left:`${y/24*100}%`}},y)),a.map((x,y)=>{let g=p(x.start),h=p(x.end)-g,v=x.label?`${x.label} (${x.start}\u2013${x.end})`:void 0;return(0,s.jsx)(jl,{content:v??`${x.start}\u2013${x.end}`,color:l==="magenta"?"magenta":l,delay:120,className:"absolute top-0 bottom-0 z-[1] block",tabIndex:0,"aria-label":v??`${x.start}\u2013${x.end}`,style:{left:`${g}%`,width:`${h}%`},children:(0,s.jsx)("div",{className:"h-full w-full cursor-pointer transition-colors duration-150 hover:bg-white/[0.04]"})},`tooltip-${y}`)}),(0,s.jsx)("div",{className:"absolute top-0 bottom-0 left-0",style:{width:`${f}%`,backgroundImage:c==="gradient"?`${b}, repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.4) 6px, rgba(0,0,0,0.4) 7px)`:"repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.4) 6px, rgba(0,0,0,0.4) 7px)"},children:f>0&&c==="stepped"&&a.map((x,y)=>{let g=p(x.start),h=p(x.end);if(g>=f)return null;let v=g,k=Math.min(h,f)-v;return k<=0?null:(0,s.jsx)("div",{className:"absolute top-0 bottom-0",style:{left:`${v/f*100}%`,width:`${k/f*100}%`,backgroundColor:x.color,opacity:.9}},y)})}),(0,s.jsx)("div",{className:"absolute top-0 bottom-0 w-px bg-white",style:{left:`${f}%`}}),(0,s.jsx)("div",{className:"absolute -top-px h-[5px] w-[8px] -translate-x-1/2 border-x border-t border-white",style:{left:`${f}%`}})]}),(0,s.jsxs)("div",{className:"flex justify-between px-0.5 text-[8px] font-mono text-nerv-mid-gray",children:[(0,s.jsx)("span",{children:r}),(0,s.jsx)("span",{children:Math.round(r+m*.25)}),(0,s.jsx)("span",{children:Math.round(r+m*.5)}),(0,s.jsx)("span",{children:Math.round(r+m*.75)}),(0,s.jsx)("span",{children:n})]})]})}),YT={orange:{border:"border-nerv-orange/40",hover:"hover:bg-nerv-orange/10",text:"text-nerv-orange"},green:{border:"border-nerv-green/40",hover:"hover:bg-nerv-green/10",text:"text-nerv-green"},cyan:{border:"border-nerv-cyan/40",hover:"hover:bg-nerv-cyan/10",text:"text-nerv-cyan"},red:{border:"border-nerv-red/40",hover:"hover:bg-nerv-red/10",text:"text-nerv-red"}},Z$=(0,T.forwardRef)(function({trigger:t,items:r,color:n="orange",align:a="left",className:o=""},i){let[l,c]=(0,T.useState)(!1),u=(0,T.useRef)(null),d=YT[n],m=(0,T.useCallback)(()=>c(!1),[]);(0,T.useEffect)(()=>{if(!l)return;let p=b=>{u.current&&!u.current.contains(b.target)&&m()};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[l,m]),(0,T.useEffect)(()=>{if(!l)return;let p=b=>{b.key==="Escape"&&m()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[l,m]);let f=p=>{p.disabled||(p.onClick?.(),m())};return(0,s.jsxs)("div",{ref:i,className:`relative inline-block ${o}`,children:[(0,s.jsx)("div",{ref:u,onClick:()=>c(p=>!p),className:"cursor-pointer",children:t}),(0,s.jsx)(Bt,{children:l&&(0,s.jsxs)(B.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.12,ease:"easeOut"},className:`
                absolute z-50 mt-1 min-w-[180px]
                ${a==="left"?"left-0":"right-0"}
                bg-nerv-black border ${d.border}
                py-1
              `,style:{fontFamily:"var(--font-nerv-mono)"},role:"menu",children:[(0,s.jsx)("span",{className:`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l ${d.border}`}),(0,s.jsx)("span",{className:`absolute top-0 right-0 w-1.5 h-1.5 border-t border-r ${d.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l ${d.border}`}),(0,s.jsx)("span",{className:`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r ${d.border}`}),r.map((p,b)=>{if(p.divider)return(0,s.jsx)("hr",{className:"my-1 border-nerv-mid-gray"},`divider-${b}`);let x=p.danger,y=p.disabled;return(0,s.jsxs)("button",{role:"menuitem",disabled:y,onClick:()=>f(p),className:`
                      w-full text-left px-4 py-2
                      text-xs uppercase tracking-wider
                      flex items-center gap-2
                      transition-colors duration-75
                      ${y?"opacity-30 cursor-not-allowed":"cursor-pointer"}
                      ${x?"text-nerv-red hover:bg-nerv-red/10":`${d.text} ${d.hover}`}
                      
                    `,children:[p.icon&&(0,s.jsx)("span",{className:"text-sm leading-none",children:p.icon}),p.label]},`${p.label}-${b}`)})]})})]})}),PT={orange:{active:"border-nerv-orange text-nerv-orange",completed:"border-nerv-orange/70 text-nerv-orange/70",future:"border-nerv-mid-gray/40 text-nerv-mid-gray/40",line:"bg-nerv-orange/70",lineDashed:"border-nerv-mid-gray/30",pulse:"bg-nerv-orange"},green:{active:"border-nerv-green text-nerv-green",completed:"border-nerv-green/70 text-nerv-green/70",future:"border-nerv-mid-gray/40 text-nerv-mid-gray/40",line:"bg-nerv-green/70",lineDashed:"border-nerv-mid-gray/30",pulse:"bg-nerv-green"},cyan:{active:"border-nerv-cyan text-nerv-cyan",completed:"border-nerv-cyan/70 text-nerv-cyan/70",future:"border-nerv-mid-gray/40 text-nerv-mid-gray/40",line:"bg-nerv-cyan/70",lineDashed:"border-nerv-mid-gray/30",pulse:"bg-nerv-cyan"}},Q$=(0,T.forwardRef)(function({steps:t,activeStep:r,color:n="orange",direction:a="horizontal",className:o="",...i},l){let c=PT[n],u=a==="vertical";return(0,s.jsx)("nav",{ref:l,className:`
          flex ${u?"flex-col":"flex-row items-center"}
          ${o}
        `,"aria-label":"Progress",...i,children:t.map((d,m)=>{let f=m===r,p=m<r,b=m>r,x=String(m+1).padStart(2,"0"),y=f?c.active:p?c.completed:c.future;return u?(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsxs)("div",{className:"flex w-4 shrink-0 flex-col items-center",children:[(0,s.jsxs)(B.div,{className:`
                      relative flex h-4 w-4 shrink-0 items-center justify-center
                      border text-[8px] font-bold leading-none
                      ${y}
                    `,style:{fontFamily:"var(--font-nerv-display)"},animate:f?{borderColor:["rgba(255,255,255,0.4)","rgba(255,255,255,1)","rgba(255,255,255,0.4)"]}:{},transition:f?{duration:2,repeat:1/0,ease:"easeInOut"}:{},children:[p?(0,s.jsx)("span",{className:"text-[8px] leading-none",children:"\u2713"}):(0,s.jsx)("span",{className:"leading-none",children:x}),f&&(0,s.jsx)(B.span,{className:`absolute right-0 top-0 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 ${c.pulse}`,animate:{opacity:[1,.3,1]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}})]}),m<t.length-1&&(0,s.jsx)("div",{className:"my-1 flex min-h-6 flex-1 justify-center",children:p?(0,s.jsx)("div",{className:`h-full w-px ${c.line}`}):(0,s.jsx)("div",{className:`h-full w-0 border-l border-dashed ${c.lineDashed}`})})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("span",{className:`
                      uppercase tracking-[0.15em] text-xs block
                      ${f?"font-bold":"font-medium"}
                      ${y}
                    `,style:{fontFamily:"var(--font-nerv-display)"},children:[x," // ",d.label]}),d.description&&(0,s.jsx)("p",{className:`
                        text-[10px] mt-0.5 tracking-wide
                        ${b?"text-nerv-mid-gray/30":"text-nerv-mid-gray/60"}
                      `,children:d.description})]})]},m):(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(B.div,{className:`
                      relative w-4 h-4 flex items-center justify-center
                      border text-[8px] font-bold shrink-0
                      ${y}
                    `,style:{fontFamily:"var(--font-nerv-display)"},children:p?(0,s.jsx)("span",{className:"text-[8px] leading-none",children:"\u2713"}):(0,s.jsx)("span",{className:"leading-none",children:x})}),(0,s.jsxs)("span",{className:`
                      ml-2 uppercase tracking-[0.15em] text-xs whitespace-nowrap
                      ${f?"font-bold":"font-medium"}
                      ${y}
                    `,style:{fontFamily:"var(--font-nerv-display)"},children:[x," // ",d.label]}),f&&(0,s.jsx)(B.span,{initial:{scale:0},animate:{scale:1,opacity:[1,.4,1]},transition:{scale:{type:"spring",stiffness:500,damping:30},opacity:{duration:1.5,repeat:1/0,ease:"easeInOut"}},className:`ml-2 w-1.5 h-1.5 shrink-0 ${c.pulse}`})]}),m<t.length-1&&(0,s.jsx)("div",{className:"mx-3 w-8 h-px shrink-0",children:p?(0,s.jsx)("div",{className:`w-full h-full ${c.line}`}):(0,s.jsx)("div",{className:`w-full h-px border-t border-dashed ${c.lineDashed}`})})]},m)})})}),XT={orange:"#FF9900",green:"#00FF00",cyan:"#00FFFF"};function N2(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}var I$=(0,T.forwardRef)(function({onFilesSelected:t,accept:r,multiple:n=!1,maxSize:a,label:o="DROP FILES HERE",sublabel:i="or click to browse",color:l="orange",disabled:c=!1,className:u="",...d},m){let f=(0,T.useRef)(null),[p,b]=(0,T.useState)([]),[x,y]=(0,T.useState)(!1),[g,h]=(0,T.useState)(null),v=XT[l],w=20,k=(0,T.useCallback)(R=>{h(null);let z=[],U=[];for(let j of R){if(a&&j.size>a){z.push(`${j.name} exceeds ${N2(a)}`);continue}U.push(j)}if(z.length>0&&h(z.join(", ")),U.length===0)return;let I=n?[...p,...U]:U.slice(0,1);b(I),t?.(I)},[p,a,n,t]),A=(0,T.useCallback)(R=>{let z=p.filter((U,I)=>I!==R);b(z),h(null),t?.(z)},[p,t]),N=()=>{c||f.current?.click()},S=R=>{R.target.files&&k(Array.from(R.target.files)),R.target.value=""},D=R=>{R.preventDefault(),R.stopPropagation(),c||y(!0)},E=R=>{R.preventDefault(),R.stopPropagation(),y(!1)},V=R=>{R.preventDefault(),R.stopPropagation(),y(!1),!c&&R.dataTransfer.files&&k(Array.from(R.dataTransfer.files))},M=!!g?"#FF0000":v;return(0,s.jsxs)("div",{ref:m,className:`${c?"opacity-30 pointer-events-none":""} ${u}`,...d,children:[(0,s.jsxs)(B.div,{onClick:N,onDragOver:D,onDragLeave:E,onDrop:V,animate:{scale:x?1.01:1},transition:{duration:.15},className:"relative cursor-pointer select-none",style:{minHeight:160},children:[(0,s.jsx)("div",{className:"absolute inset-0 transition-all duration-150",style:{border:`2px ${x?"solid":"dashed"} ${M}`,opacity:x?.8:.4,backgroundColor:x?`${v}08`:"transparent"}}),(0,s.jsx)("div",{className:"absolute top-0 left-0 pointer-events-none",style:{width:w,height:w,borderTop:`2px solid ${M}`,borderLeft:`2px solid ${M}`}}),(0,s.jsx)("div",{className:"absolute top-0 right-0 pointer-events-none",style:{width:w,height:w,borderTop:`2px solid ${M}`,borderRight:`2px solid ${M}`}}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 pointer-events-none",style:{width:w,height:w,borderBottom:`2px solid ${M}`,borderLeft:`2px solid ${M}`}}),(0,s.jsx)("div",{className:"absolute bottom-0 right-0 pointer-events-none",style:{width:w,height:w,borderBottom:`2px solid ${M}`,borderRight:`2px solid ${M}`}}),(0,s.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center py-10 px-6",children:[(0,s.jsx)(B.span,{animate:{y:x?-4:0},transition:{duration:.15},className:"text-2xl leading-none mb-3",style:{color:v,fontFamily:"var(--font-nerv-display)"},children:"\u25B2"}),(0,s.jsx)("span",{className:"text-xs uppercase tracking-[0.2em] font-bold mb-1",style:{color:v,fontFamily:"var(--font-nerv-display)"},children:o}),(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-[0.15em] text-nerv-mid-gray",style:{fontFamily:"var(--font-nerv-display)"},children:i})]}),(0,s.jsx)("input",{ref:f,type:"file",accept:r,multiple:n,onChange:S,className:"hidden",tabIndex:-1,"aria-hidden":"true"})]}),(0,s.jsx)(Bt,{children:g&&(0,s.jsx)(B.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-2 text-[10px] uppercase tracking-[0.15em] font-bold text-nerv-red",style:{fontFamily:"var(--font-nerv-display)"},children:g})}),(0,s.jsx)(Bt,{children:p.length>0&&(0,s.jsx)(B.ul,{initial:{opacity:0},animate:{opacity:1},className:"mt-3 space-y-1",children:p.map((R,z)=>(0,s.jsxs)(B.li,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},exit:{opacity:0,x:-8},transition:{duration:.15},className:"flex items-center gap-3 px-3 py-1.5 border border-nerv-mid-gray/20",children:[(0,s.jsx)("span",{className:"w-1 h-1 shrink-0",style:{backgroundColor:v}}),(0,s.jsx)("span",{className:"text-[11px] uppercase tracking-[0.1em] text-nerv-light-gray truncate flex-1",style:{fontFamily:"var(--font-nerv-display)"},children:R.name}),(0,s.jsx)("span",{className:"text-[10px] uppercase tracking-[0.1em] text-nerv-mid-gray shrink-0",style:{fontFamily:"var(--font-nerv-display)"},children:N2(R.size)}),(0,s.jsx)("button",{type:"button",onClick:U=>{U.stopPropagation(),A(z)},className:"text-nerv-mid-gray hover:text-nerv-red transition-colors text-xs leading-none cursor-pointer shrink-0","aria-label":`Remove ${R.name}`,children:"\xD7"})]},`${R.name}-${R.size}-${z}`))})})]})});var R2=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-black: 900;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --leading-relaxed: 1.625;
    --radius-lg: 0.5rem;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-sm: 8px;
    --blur-2xl: 40px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
    --color-nerv-black: #000000;
    --color-nerv-red: #ff2b1d;
    --color-nerv-orange: #ff9900;
    --color-nerv-green: #00ff00;
    --color-nerv-cyan: #00f6ff;
    --color-nerv-amber: #ffb000;
    --color-nerv-white: #e3ddd4;
    --color-nerv-dark-gray: #121212;
    --color-nerv-mid-gray: #4e4e4e;
    --color-nerv-panel: #0a0a0a;
    --color-nerv-purple: #9933ff;
    --color-nerv-magenta: #ff00ff;
    --color-nerv-lcd-green: #39ff14;
    --color-bg-base: #000000;
    --color-alert-red: #ff2b1d;
    --color-text-orange: #ff9900;
    --color-grid-green: #00ff00;
    --color-data-blue: #00f6ff;
    --color-magenta-wave: #ff00ff;
    --color-lcd-green: #39ff14;
    --font-nerv-display: "Oswald", "Arial Narrow", system-ui, sans-serif;
    --font-nerv-mono: "Fira Code", "JetBrains Mono", "Courier New", monospace;
    --font-nerv-body: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
    --font-nerv-title: "Noto Serif JP", "Playfair Display", "Georgia", serif;
    --space-2: 0.125rem;
    --space-4: 0.25rem;
    --space-8: 0.5rem;
    --line-strong: rgba(255, 153, 0, 0.28);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring:where(:not(iframe)) {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .\\[container-type\\:inline-size\\] {
    container-type: inline-size;
  }
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .-inset-1\\.5 {
    inset: calc(var(--spacing) * -1.5);
  }
  .inset-0 {
    inset: 0px;
  }
  .inset-\\[1px\\] {
    inset: 1px;
  }
  .inset-\\[8\\%\\] {
    inset: 8%;
  }
  .inset-\\[10\\%\\] {
    inset: 10%;
  }
  .inset-x-0 {
    inset-inline: 0px;
  }
  .inset-x-2 {
    inset-inline: calc(var(--spacing) * 2);
  }
  .inset-x-\\[1px\\] {
    inset-inline: 1px;
  }
  .inset-x-\\[10\\%\\] {
    inset-inline: 10%;
  }
  .inset-y-0 {
    inset-block: 0px;
  }
  .-top-2 {
    top: calc(var(--spacing) * -2);
  }
  .-top-px {
    top: -1px;
  }
  .top-0 {
    top: 0px;
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1 {
    top: var(--spacing);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-3 {
    top: calc(var(--spacing) * 3);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-5 {
    top: calc(var(--spacing) * 5);
  }
  .top-12 {
    top: calc(var(--spacing) * 12);
  }
  .top-\\[-45\\%\\] {
    top: -45%;
  }
  .top-\\[7\\.5\\%\\] {
    top: 7.5%;
  }
  .top-\\[9\\%\\] {
    top: 9%;
  }
  .top-\\[14\\%\\] {
    top: 14%;
  }
  .top-\\[18px\\] {
    top: 18px;
  }
  .top-\\[22\\%\\] {
    top: 22%;
  }
  .top-\\[24\\%\\] {
    top: 24%;
  }
  .top-\\[28\\%\\] {
    top: 28%;
  }
  .top-\\[30\\%\\] {
    top: 30%;
  }
  .top-\\[34\\%\\] {
    top: 34%;
  }
  .top-\\[42\\%\\] {
    top: 42%;
  }
  .top-full {
    top: 100%;
  }
  .right-0 {
    right: 0px;
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-1 {
    right: var(--spacing);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .right-5 {
    right: calc(var(--spacing) * 5);
  }
  .right-\\[-0\\.85rem\\] {
    right: -0.85rem;
  }
  .right-\\[7\\.5\\%\\] {
    right: 7.5%;
  }
  .right-\\[8\\.8\\%\\] {
    right: 8.8%;
  }
  .right-\\[9\\%\\] {
    right: 9%;
  }
  .right-\\[10\\%\\] {
    right: 10%;
  }
  .right-\\[14\\%\\] {
    right: 14%;
  }
  .right-\\[16\\%\\] {
    right: 16%;
  }
  .right-\\[18\\%\\] {
    right: 18%;
  }
  .right-\\[26\\%\\] {
    right: 26%;
  }
  .right-auto {
    right: auto;
  }
  .right-full {
    right: 100%;
  }
  .bottom-0 {
    bottom: 0px;
  }
  .bottom-0\\.5 {
    bottom: calc(var(--spacing) * 0.5);
  }
  .bottom-1 {
    bottom: var(--spacing);
  }
  .bottom-2 {
    bottom: calc(var(--spacing) * 2);
  }
  .bottom-3 {
    bottom: calc(var(--spacing) * 3);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .bottom-\\[7\\.5\\%\\] {
    bottom: 7.5%;
  }
  .bottom-\\[9\\%\\] {
    bottom: 9%;
  }
  .bottom-\\[10px\\] {
    bottom: 10px;
  }
  .bottom-\\[14\\%\\] {
    bottom: 14%;
  }
  .bottom-\\[24\\%\\] {
    bottom: 24%;
  }
  .bottom-\\[26\\%\\] {
    bottom: 26%;
  }
  .bottom-\\[28\\%\\] {
    bottom: 28%;
  }
  .bottom-full {
    bottom: 100%;
  }
  .-left-1 {
    left: calc(var(--spacing) * -1);
  }
  .left-0 {
    left: 0px;
  }
  .left-0\\.5 {
    left: calc(var(--spacing) * 0.5);
  }
  .left-1 {
    left: var(--spacing);
  }
  .left-1\\/2 {
    left: calc(1 / 2 * 100%);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .left-4 {
    left: calc(var(--spacing) * 4);
  }
  .left-6 {
    left: calc(var(--spacing) * 6);
  }
  .left-\\[-0\\.85rem\\] {
    left: -0.85rem;
  }
  .left-\\[-32\\%\\] {
    left: -32%;
  }
  .left-\\[7\\.5\\%\\] {
    left: 7.5%;
  }
  .left-\\[8\\.8\\%\\] {
    left: 8.8%;
  }
  .left-\\[9\\%\\] {
    left: 9%;
  }
  .left-\\[10\\%\\] {
    left: 10%;
  }
  .left-\\[14\\%\\] {
    left: 14%;
  }
  .left-\\[16\\%\\] {
    left: 16%;
  }
  .left-\\[24\\%\\] {
    left: 24%;
  }
  .left-\\[26\\%\\] {
    left: 26%;
  }
  .left-\\[50\\%\\] {
    left: 50%;
  }
  .left-auto {
    left: auto;
  }
  .left-full {
    left: 100%;
  }
  .isolate {
    isolation: isolate;
  }
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-\\[1\\] {
    z-index: 1;
  }
  .z-\\[70\\] {
    z-index: 70;
  }
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .m-0 {
    margin: 0px;
  }
  .mx-1 {
    margin-inline: var(--spacing);
  }
  .mx-3 {
    margin-inline: calc(var(--spacing) * 3);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-1 {
    margin-block: var(--spacing);
  }
  .my-10 {
    margin-block: calc(var(--spacing) * 10);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-2\\.5 {
    margin-top: calc(var(--spacing) * 2.5);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mt-10 {
    margin-top: calc(var(--spacing) * 10);
  }
  .mt-14 {
    margin-top: calc(var(--spacing) * 14);
  }
  .mt-20 {
    margin-top: calc(var(--spacing) * 20);
  }
  .mr-1 {
    margin-right: var(--spacing);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-\\[-8px\\] {
    margin-right: -8px;
  }
  .mr-auto {
    margin-right: auto;
  }
  .\\!mb-0 {
    margin-bottom: 0px !important;
  }
  .mb-0 {
    margin-bottom: 0px;
  }
  .mb-1 {
    margin-bottom: var(--spacing);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-\\[-12px\\] {
    margin-bottom: -12px;
  }
  .ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
  .ml-1 {
    margin-left: var(--spacing);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-3 {
    margin-left: calc(var(--spacing) * 3);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-\\[-8px\\] {
    margin-left: -8px;
  }
  .ml-auto {
    margin-left: auto;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .aspect-\\[4\\/3\\] {
    aspect-ratio: 4/3;
  }
  .\\!h-\\[300px\\] {
    height: 300px !important;
  }
  .\\!h-full {
    height: 100% !important;
  }
  .h-0 {
    height: 0px;
  }
  .h-0\\.5 {
    height: calc(var(--spacing) * 0.5);
  }
  .h-1 {
    height: var(--spacing);
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-14 {
    height: calc(var(--spacing) * 14);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-28 {
    height: calc(var(--spacing) * 28);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-36 {
    height: calc(var(--spacing) * 36);
  }
  .h-40 {
    height: calc(var(--spacing) * 40);
  }
  .h-48 {
    height: calc(var(--spacing) * 48);
  }
  .h-52 {
    height: calc(var(--spacing) * 52);
  }
  .h-56 {
    height: calc(var(--spacing) * 56);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-72 {
    height: calc(var(--spacing) * 72);
  }
  .h-\\[2px\\] {
    height: 2px;
  }
  .h-\\[5px\\] {
    height: 5px;
  }
  .h-\\[14\\%\\] {
    height: 14%;
  }
  .h-\\[14rem\\] {
    height: 14rem;
  }
  .h-\\[16\\%\\] {
    height: 16%;
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[45\\%\\] {
    height: 45%;
  }
  .h-\\[160px\\] {
    height: 160px;
  }
  .h-\\[176px\\] {
    height: 176px;
  }
  .h-\\[200px\\] {
    height: 200px;
  }
  .h-\\[252px\\] {
    height: 252px;
  }
  .h-\\[400px\\] {
    height: 400px;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-64 {
    max-height: calc(var(--spacing) * 64);
  }
  .max-h-\\[26rem\\] {
    max-height: 26rem;
  }
  .max-h-\\[50vh\\] {
    max-height: 50vh;
  }
  .max-h-\\[60vh\\] {
    max-height: 60vh;
  }
  .\\!min-h-0 {
    min-height: 0px !important;
  }
  .\\!min-h-screen {
    min-height: 100vh !important;
  }
  .min-h-0 {
    min-height: 0px;
  }
  .min-h-6 {
    min-height: calc(var(--spacing) * 6);
  }
  .min-h-8 {
    min-height: calc(var(--spacing) * 8);
  }
  .min-h-10 {
    min-height: calc(var(--spacing) * 10);
  }
  .min-h-12 {
    min-height: calc(var(--spacing) * 12);
  }
  .min-h-14 {
    min-height: calc(var(--spacing) * 14);
  }
  .min-h-\\[0\\] {
    min-height: 0;
  }
  .min-h-\\[3rem\\] {
    min-height: 3rem;
  }
  .min-h-\\[5\\.5rem\\] {
    min-height: 5.5rem;
  }
  .min-h-\\[7rem\\] {
    min-height: 7rem;
  }
  .min-h-\\[10rem\\] {
    min-height: 10rem;
  }
  .min-h-\\[12rem\\] {
    min-height: 12rem;
  }
  .min-h-\\[14rem\\] {
    min-height: 14rem;
  }
  .min-h-\\[22\\.5rem\\] {
    min-height: 22.5rem;
  }
  .min-h-\\[24rem\\] {
    min-height: 24rem;
  }
  .min-h-\\[34px\\] {
    min-height: 34px;
  }
  .min-h-\\[42px\\] {
    min-height: 42px;
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-\\[80px\\] {
    min-height: 80px;
  }
  .min-h-\\[112px\\] {
    min-height: 112px;
  }
  .min-h-\\[120px\\] {
    min-height: 120px;
  }
  .min-h-\\[140px\\] {
    min-height: 140px;
  }
  .min-h-\\[160px\\] {
    min-height: 160px;
  }
  .min-h-\\[200px\\] {
    min-height: 200px;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-0 {
    width: 0px;
  }
  .w-0\\.5 {
    width: calc(var(--spacing) * 0.5);
  }
  .w-1 {
    width: var(--spacing);
  }
  .w-1\\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-7 {
    width: calc(var(--spacing) * 7);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-60 {
    width: calc(var(--spacing) * 60);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[3px\\] {
    width: 3px;
  }
  .w-\\[8px\\] {
    width: 8px;
  }
  .w-\\[22rem\\] {
    width: 22rem;
  }
  .w-\\[32\\%\\] {
    width: 32%;
  }
  .w-\\[48\\%\\] {
    width: 48%;
  }
  .w-\\[52\\%\\] {
    width: 52%;
  }
  .w-\\[72\\%\\] {
    width: 72%;
  }
  .w-\\[min\\(42rem\\,calc\\(100\\%-1\\.5rem\\)\\)\\] {
    width: min(42rem, calc(100% - 1.5rem));
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-4xl {
    max-width: var(--container-4xl);
  }
  .max-w-5xl {
    max-width: var(--container-5xl);
  }
  .max-w-6xl {
    max-width: var(--container-6xl);
  }
  .max-w-7xl {
    max-width: var(--container-7xl);
  }
  .max-w-\\[11rem\\] {
    max-width: 11rem;
  }
  .max-w-\\[13rem\\] {
    max-width: 13rem;
  }
  .max-w-\\[14rem\\] {
    max-width: 14rem;
  }
  .max-w-\\[16rem\\] {
    max-width: 16rem;
  }
  .max-w-\\[19rem\\] {
    max-width: 19rem;
  }
  .max-w-\\[72ch\\] {
    max-width: 72ch;
  }
  .max-w-\\[78\\%\\] {
    max-width: 78%;
  }
  .max-w-\\[82\\%\\] {
    max-width: 82%;
  }
  .max-w-\\[82rem\\] {
    max-width: 82rem;
  }
  .max-w-\\[88vw\\] {
    max-width: 88vw;
  }
  .max-w-\\[1680px\\] {
    max-width: 1680px;
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-lg {
    max-width: var(--container-lg);
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .max-w-xs {
    max-width: var(--container-xs);
  }
  .min-w-0 {
    min-width: 0px;
  }
  .min-w-8 {
    min-width: calc(var(--spacing) * 8);
  }
  .min-w-\\[5\\.5rem\\] {
    min-width: 5.5rem;
  }
  .min-w-\\[8px\\] {
    min-width: 8px;
  }
  .min-w-\\[10rem\\] {
    min-width: 10rem;
  }
  .min-w-\\[11rem\\] {
    min-width: 11rem;
  }
  .min-w-\\[13rem\\] {
    min-width: 13rem;
  }
  .min-w-\\[100px\\] {
    min-width: 100px;
  }
  .min-w-\\[180px\\] {
    min-width: 180px;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-bottom {
    transform-origin: bottom;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-2 {
    --tw-translate-x: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-full {
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-px {
    --tw-translate-x: -1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: 0px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-1\\/2 {
    --tw-translate-x: calc(1 / 2 * 100%);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-2 {
    --tw-translate-x: calc(var(--spacing) * 2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-px {
    --tw-translate-x: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-full {
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-px {
    --tw-translate-y: -1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\/2 {
    --tw-translate-y: calc(1 / 2 * 100%);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-px {
    --tw-translate-y: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .list-inside {
    list-style-position: inside;
  }
  .list-decimal {
    list-style-type: decimal;
  }
  .list-none {
    list-style-type: none;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .grid-cols-\\[3\\.9rem_minmax\\(0\\,1fr\\)\\] {
    grid-template-columns: 3.9rem minmax(0,1fr);
  }
  .grid-cols-\\[8px_minmax\\(0\\,1fr\\)_34px\\] {
    grid-template-columns: 8px minmax(0,1fr) 34px;
  }
  .grid-cols-\\[64px_minmax\\(0\\,1fr\\)_48px\\] {
    grid-template-columns: 64px minmax(0,1fr) 48px;
  }
  .grid-cols-\\[78px_minmax\\(0\\,1fr\\)_44px\\] {
    grid-template-columns: 78px minmax(0,1fr) 44px;
  }
  .grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\] {
    grid-template-columns: minmax(0,1fr) auto;
  }
  .grid-cols-\\[minmax\\(0\\,1fr\\)_auto_auto\\] {
    grid-template-columns: minmax(0,1fr) auto auto;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .place-items-center {
    place-items: center;
  }
  .content-between {
    align-content: space-between;
  }
  .content-start {
    align-content: flex-start;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-0 {
    gap: 0px;
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .gap-\\[1px\\] {
    gap: 1px;
  }
  .gap-\\[2px\\] {
    gap: 2px;
  }
  .gap-\\[3px\\] {
    gap: 3px;
  }
  :where(.space-y-0\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-1 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-1\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-2 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--space-2) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--space-2) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-4 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--space-4) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--space-4) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-6 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-8 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(var(--space-8) * var(--tw-space-y-reverse));
    margin-block-end: calc(var(--space-8) * calc(1 - var(--tw-space-y-reverse)));
  }
  .gap-x-4 {
    column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-1 {
    row-gap: var(--spacing);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .place-self-center {
    place-self: center;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-\\[0\\.85rem\\] {
    border-radius: 0.85rem;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-t-2 {
    border-top-style: var(--tw-border-style);
    border-top-width: 2px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-r-2 {
    border-right-style: var(--tw-border-style);
    border-right-width: 2px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-0 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  .border-b-2 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 2px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-2 {
    border-left-style: var(--tw-border-style);
    border-left-width: 2px;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-dotted {
    --tw-border-style: dotted;
    border-style: dotted;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
  }
  .border-alert-red {
    border-color: var(--color-alert-red);
  }
  .border-alert-red\\/60 {
    border-color: color-mix(in srgb, #ff2b1d 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-alert-red) 60%, transparent);
    }
  }
  .border-black\\/20 {
    border-color: color-mix(in srgb, #000 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-black) 20%, transparent);
    }
  }
  .border-current {
    border-color: currentcolor;
  }
  .border-current\\/25 {
    border-color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, currentcolor 25%, transparent);
    }
  }
  .border-current\\/40 {
    border-color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, currentcolor 40%, transparent);
    }
  }
  .border-grid-green {
    border-color: var(--color-grid-green);
  }
  .border-nerv-amber {
    border-color: var(--color-nerv-amber);
  }
  .border-nerv-cyan {
    border-color: var(--color-nerv-cyan);
  }
  .border-nerv-cyan\\/20 {
    border-color: color-mix(in srgb, #00f6ff 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 20%, transparent);
    }
  }
  .border-nerv-cyan\\/22 {
    border-color: color-mix(in srgb, #00f6ff 22%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 22%, transparent);
    }
  }
  .border-nerv-cyan\\/25 {
    border-color: color-mix(in srgb, #00f6ff 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 25%, transparent);
    }
  }
  .border-nerv-cyan\\/30 {
    border-color: color-mix(in srgb, #00f6ff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 30%, transparent);
    }
  }
  .border-nerv-cyan\\/35 {
    border-color: color-mix(in srgb, #00f6ff 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 35%, transparent);
    }
  }
  .border-nerv-cyan\\/40 {
    border-color: color-mix(in srgb, #00f6ff 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 40%, transparent);
    }
  }
  .border-nerv-cyan\\/45 {
    border-color: color-mix(in srgb, #00f6ff 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 45%, transparent);
    }
  }
  .border-nerv-cyan\\/70 {
    border-color: color-mix(in srgb, #00f6ff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-cyan) 70%, transparent);
    }
  }
  .border-nerv-green {
    border-color: var(--color-nerv-green);
  }
  .border-nerv-green\\/18 {
    border-color: color-mix(in srgb, #00ff00 18%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 18%, transparent);
    }
  }
  .border-nerv-green\\/20 {
    border-color: color-mix(in srgb, #00ff00 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 20%, transparent);
    }
  }
  .border-nerv-green\\/25 {
    border-color: color-mix(in srgb, #00ff00 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 25%, transparent);
    }
  }
  .border-nerv-green\\/35 {
    border-color: color-mix(in srgb, #00ff00 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 35%, transparent);
    }
  }
  .border-nerv-green\\/40 {
    border-color: color-mix(in srgb, #00ff00 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 40%, transparent);
    }
  }
  .border-nerv-green\\/45 {
    border-color: color-mix(in srgb, #00ff00 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 45%, transparent);
    }
  }
  .border-nerv-green\\/70 {
    border-color: color-mix(in srgb, #00ff00 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-green) 70%, transparent);
    }
  }
  .border-nerv-magenta {
    border-color: var(--color-nerv-magenta);
  }
  .border-nerv-mid-gray {
    border-color: var(--color-nerv-mid-gray);
  }
  .border-nerv-mid-gray\\/20 {
    border-color: color-mix(in srgb, #4e4e4e 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 20%, transparent);
    }
  }
  .border-nerv-mid-gray\\/30 {
    border-color: color-mix(in srgb, #4e4e4e 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 30%, transparent);
    }
  }
  .border-nerv-mid-gray\\/40 {
    border-color: color-mix(in srgb, #4e4e4e 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 40%, transparent);
    }
  }
  .border-nerv-mid-gray\\/50 {
    border-color: color-mix(in srgb, #4e4e4e 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 50%, transparent);
    }
  }
  .border-nerv-mid-gray\\/60 {
    border-color: color-mix(in srgb, #4e4e4e 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 60%, transparent);
    }
  }
  .border-nerv-mid-gray\\/70 {
    border-color: color-mix(in srgb, #4e4e4e 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 70%, transparent);
    }
  }
  .border-nerv-mid-gray\\/80 {
    border-color: color-mix(in srgb, #4e4e4e 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-mid-gray) 80%, transparent);
    }
  }
  .border-nerv-orange {
    border-color: var(--color-nerv-orange);
  }
  .border-nerv-orange\\/10 {
    border-color: color-mix(in srgb, #ff9900 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 10%, transparent);
    }
  }
  .border-nerv-orange\\/12 {
    border-color: color-mix(in srgb, #ff9900 12%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 12%, transparent);
    }
  }
  .border-nerv-orange\\/16 {
    border-color: color-mix(in srgb, #ff9900 16%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 16%, transparent);
    }
  }
  .border-nerv-orange\\/18 {
    border-color: color-mix(in srgb, #ff9900 18%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 18%, transparent);
    }
  }
  .border-nerv-orange\\/20 {
    border-color: color-mix(in srgb, #ff9900 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 20%, transparent);
    }
  }
  .border-nerv-orange\\/22 {
    border-color: color-mix(in srgb, #ff9900 22%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 22%, transparent);
    }
  }
  .border-nerv-orange\\/24 {
    border-color: color-mix(in srgb, #ff9900 24%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 24%, transparent);
    }
  }
  .border-nerv-orange\\/25 {
    border-color: color-mix(in srgb, #ff9900 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 25%, transparent);
    }
  }
  .border-nerv-orange\\/28 {
    border-color: color-mix(in srgb, #ff9900 28%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 28%, transparent);
    }
  }
  .border-nerv-orange\\/30 {
    border-color: color-mix(in srgb, #ff9900 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 30%, transparent);
    }
  }
  .border-nerv-orange\\/35 {
    border-color: color-mix(in srgb, #ff9900 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 35%, transparent);
    }
  }
  .border-nerv-orange\\/40 {
    border-color: color-mix(in srgb, #ff9900 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 40%, transparent);
    }
  }
  .border-nerv-orange\\/45 {
    border-color: color-mix(in srgb, #ff9900 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 45%, transparent);
    }
  }
  .border-nerv-orange\\/50 {
    border-color: color-mix(in srgb, #ff9900 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 50%, transparent);
    }
  }
  .border-nerv-orange\\/60 {
    border-color: color-mix(in srgb, #ff9900 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 60%, transparent);
    }
  }
  .border-nerv-orange\\/70 {
    border-color: color-mix(in srgb, #ff9900 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 70%, transparent);
    }
  }
  .border-nerv-red {
    border-color: var(--color-nerv-red);
  }
  .border-nerv-red\\/15 {
    border-color: color-mix(in srgb, #ff2b1d 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 15%, transparent);
    }
  }
  .border-nerv-red\\/22 {
    border-color: color-mix(in srgb, #ff2b1d 22%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 22%, transparent);
    }
  }
  .border-nerv-red\\/25 {
    border-color: color-mix(in srgb, #ff2b1d 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 25%, transparent);
    }
  }
  .border-nerv-red\\/35 {
    border-color: color-mix(in srgb, #ff2b1d 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 35%, transparent);
    }
  }
  .border-nerv-red\\/40 {
    border-color: color-mix(in srgb, #ff2b1d 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 40%, transparent);
    }
  }
  .border-nerv-red\\/70 {
    border-color: color-mix(in srgb, #ff2b1d 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-red) 70%, transparent);
    }
  }
  .border-nerv-white {
    border-color: var(--color-nerv-white);
  }
  .border-nerv-white\\/10 {
    border-color: color-mix(in srgb, #e3ddd4 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 10%, transparent);
    }
  }
  .border-nerv-white\\/15 {
    border-color: color-mix(in srgb, #e3ddd4 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 15%, transparent);
    }
  }
  .border-nerv-white\\/25 {
    border-color: color-mix(in srgb, #e3ddd4 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 25%, transparent);
    }
  }
  .border-nerv-white\\/28 {
    border-color: color-mix(in srgb, #e3ddd4 28%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 28%, transparent);
    }
  }
  .border-nerv-white\\/30 {
    border-color: color-mix(in srgb, #e3ddd4 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 30%, transparent);
    }
  }
  .border-nerv-white\\/40 {
    border-color: color-mix(in srgb, #e3ddd4 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 40%, transparent);
    }
  }
  .border-nerv-white\\/45 {
    border-color: color-mix(in srgb, #e3ddd4 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-white) 45%, transparent);
    }
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-white {
    border-color: var(--color-white);
  }
  .border-white\\/8 {
    border-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .border-white\\/10 {
    border-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
  .border-l-alert-red {
    border-left-color: var(--color-alert-red);
  }
  .border-l-data-blue {
    border-left-color: var(--color-data-blue);
  }
  .border-l-grid-green {
    border-left-color: var(--color-grid-green);
  }
  .border-l-nerv-magenta {
    border-left-color: var(--color-nerv-magenta);
  }
  .border-l-text-orange {
    border-left-color: var(--color-text-orange);
  }
  .bg-bg-base {
    background-color: var(--color-bg-base);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
  .bg-black\\/35 {
    background-color: color-mix(in srgb, #000 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 35%, transparent);
    }
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-black\\/45 {
    background-color: color-mix(in srgb, #000 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 45%, transparent);
    }
  }
  .bg-black\\/46 {
    background-color: color-mix(in srgb, #000 46%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 46%, transparent);
    }
  }
  .bg-black\\/50 {
    background-color: color-mix(in srgb, #000 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
    }
  }
  .bg-black\\/55 {
    background-color: color-mix(in srgb, #000 55%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 55%, transparent);
    }
  }
  .bg-black\\/60 {
    background-color: color-mix(in srgb, #000 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 60%, transparent);
    }
  }
  .bg-black\\/65 {
    background-color: color-mix(in srgb, #000 65%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 65%, transparent);
    }
  }
  .bg-black\\/70 {
    background-color: color-mix(in srgb, #000 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 70%, transparent);
    }
  }
  .bg-black\\/80 {
    background-color: color-mix(in srgb, #000 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);
    }
  }
  .bg-black\\/85 {
    background-color: color-mix(in srgb, #000 85%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 85%, transparent);
    }
  }
  .bg-black\\/95 {
    background-color: color-mix(in srgb, #000 95%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 95%, transparent);
    }
  }
  .bg-current {
    background-color: currentcolor;
  }
  .bg-nerv-black {
    background-color: var(--color-nerv-black);
  }
  .bg-nerv-black\\/50 {
    background-color: color-mix(in srgb, #000000 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 50%, transparent);
    }
  }
  .bg-nerv-black\\/60 {
    background-color: color-mix(in srgb, #000000 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 60%, transparent);
    }
  }
  .bg-nerv-black\\/70 {
    background-color: color-mix(in srgb, #000000 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 70%, transparent);
    }
  }
  .bg-nerv-black\\/80 {
    background-color: color-mix(in srgb, #000000 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 80%, transparent);
    }
  }
  .bg-nerv-black\\/90 {
    background-color: color-mix(in srgb, #000000 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 90%, transparent);
    }
  }
  .bg-nerv-black\\/95 {
    background-color: color-mix(in srgb, #000000 95%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-black) 95%, transparent);
    }
  }
  .bg-nerv-cyan {
    background-color: var(--color-nerv-cyan);
  }
  .bg-nerv-cyan\\/5 {
    background-color: color-mix(in srgb, #00f6ff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-cyan) 5%, transparent);
    }
  }
  .bg-nerv-cyan\\/35 {
    background-color: color-mix(in srgb, #00f6ff 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-cyan) 35%, transparent);
    }
  }
  .bg-nerv-cyan\\/50 {
    background-color: color-mix(in srgb, #00f6ff 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-cyan) 50%, transparent);
    }
  }
  .bg-nerv-cyan\\/70 {
    background-color: color-mix(in srgb, #00f6ff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-cyan) 70%, transparent);
    }
  }
  .bg-nerv-cyan\\/\\[0\\.05\\] {
    background-color: color-mix(in srgb, #00f6ff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-cyan) 5%, transparent);
    }
  }
  .bg-nerv-dark-gray {
    background-color: var(--color-nerv-dark-gray);
  }
  .bg-nerv-dark-gray\\/20 {
    background-color: color-mix(in srgb, #121212 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 20%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/30 {
    background-color: color-mix(in srgb, #121212 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 30%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/40 {
    background-color: color-mix(in srgb, #121212 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 40%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/50 {
    background-color: color-mix(in srgb, #121212 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 50%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/60 {
    background-color: color-mix(in srgb, #121212 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 60%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/70 {
    background-color: color-mix(in srgb, #121212 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 70%, transparent);
    }
  }
  .bg-nerv-dark-gray\\/75 {
    background-color: color-mix(in srgb, #121212 75%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 75%, transparent);
    }
  }
  .bg-nerv-green {
    background-color: var(--color-nerv-green);
  }
  .bg-nerv-green\\/70 {
    background-color: color-mix(in srgb, #00ff00 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-green) 70%, transparent);
    }
  }
  .bg-nerv-green\\/90 {
    background-color: color-mix(in srgb, #00ff00 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-green) 90%, transparent);
    }
  }
  .bg-nerv-green\\/\\[0\\.05\\] {
    background-color: color-mix(in srgb, #00ff00 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-green) 5%, transparent);
    }
  }
  .bg-nerv-lcd-green {
    background-color: var(--color-nerv-lcd-green);
  }
  .bg-nerv-magenta {
    background-color: var(--color-nerv-magenta);
  }
  .bg-nerv-mid-gray {
    background-color: var(--color-nerv-mid-gray);
  }
  .bg-nerv-mid-gray\\/40 {
    background-color: color-mix(in srgb, #4e4e4e 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-mid-gray) 40%, transparent);
    }
  }
  .bg-nerv-mid-gray\\/60 {
    background-color: color-mix(in srgb, #4e4e4e 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-mid-gray) 60%, transparent);
    }
  }
  .bg-nerv-orange {
    background-color: var(--color-nerv-orange);
  }
  .bg-nerv-orange\\/5 {
    background-color: color-mix(in srgb, #ff9900 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 5%, transparent);
    }
  }
  .bg-nerv-orange\\/10 {
    background-color: color-mix(in srgb, #ff9900 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 10%, transparent);
    }
  }
  .bg-nerv-orange\\/20 {
    background-color: color-mix(in srgb, #ff9900 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 20%, transparent);
    }
  }
  .bg-nerv-orange\\/25 {
    background-color: color-mix(in srgb, #ff9900 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 25%, transparent);
    }
  }
  .bg-nerv-orange\\/35 {
    background-color: color-mix(in srgb, #ff9900 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 35%, transparent);
    }
  }
  .bg-nerv-orange\\/45 {
    background-color: color-mix(in srgb, #ff9900 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 45%, transparent);
    }
  }
  .bg-nerv-orange\\/55 {
    background-color: color-mix(in srgb, #ff9900 55%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 55%, transparent);
    }
  }
  .bg-nerv-orange\\/60 {
    background-color: color-mix(in srgb, #ff9900 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 60%, transparent);
    }
  }
  .bg-nerv-orange\\/65 {
    background-color: color-mix(in srgb, #ff9900 65%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 65%, transparent);
    }
  }
  .bg-nerv-orange\\/70 {
    background-color: color-mix(in srgb, #ff9900 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 70%, transparent);
    }
  }
  .bg-nerv-orange\\/75 {
    background-color: color-mix(in srgb, #ff9900 75%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 75%, transparent);
    }
  }
  .bg-nerv-orange\\/90 {
    background-color: color-mix(in srgb, #ff9900 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 90%, transparent);
    }
  }
  .bg-nerv-orange\\/\\[0\\.05\\] {
    background-color: color-mix(in srgb, #ff9900 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-orange) 5%, transparent);
    }
  }
  .bg-nerv-panel {
    background-color: var(--color-nerv-panel);
  }
  .bg-nerv-red {
    background-color: var(--color-nerv-red);
  }
  .bg-nerv-red\\/5 {
    background-color: color-mix(in srgb, #ff2b1d 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-red) 5%, transparent);
    }
  }
  .bg-nerv-red\\/10 {
    background-color: color-mix(in srgb, #ff2b1d 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-red) 10%, transparent);
    }
  }
  .bg-nerv-red\\/90 {
    background-color: color-mix(in srgb, #ff2b1d 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-red) 90%, transparent);
    }
  }
  .bg-nerv-red\\/\\[0\\.05\\] {
    background-color: color-mix(in srgb, #ff2b1d 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-red) 5%, transparent);
    }
  }
  .bg-nerv-white {
    background-color: var(--color-nerv-white);
  }
  .bg-nerv-white\\/8 {
    background-color: color-mix(in srgb, #e3ddd4 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-nerv-white) 8%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/8 {
    background-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .bg-white\\/10 {
    background-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
  .bg-white\\/12 {
    background-color: color-mix(in srgb, #fff 12%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 12%, transparent);
    }
  }
  .bg-white\\/\\[0\\.02\\] {
    background-color: color-mix(in srgb, #fff 2%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 2%, transparent);
    }
  }
  .bg-white\\/\\[0\\.03\\] {
    background-color: color-mix(in srgb, #fff 3%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 3%, transparent);
    }
  }
  .bg-white\\/\\[0\\.05\\] {
    background-color: color-mix(in srgb, #fff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 5%, transparent);
    }
  }
  .bg-white\\/\\[0\\.015\\] {
    background-color: color-mix(in srgb, #fff 1.5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 1.5%, transparent);
    }
  }
  .bg-gradient-to-t {
    --tw-gradient-position: to top in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-\\[linear-gradient\\(90deg\\,\\#151515_0\\%\\,\\#0b0b0b_70\\%\\)\\] {
    background-image: linear-gradient(90deg,#151515 0%,#0b0b0b 70%);
  }
  .bg-\\[linear-gradient\\(90deg\\,rgba\\(255\\,153\\,0\\,0\\.14\\)\\,rgba\\(255\\,153\\,0\\,0\\)_45\\%\\)\\] {
    background-image: linear-gradient(90deg,rgba(255,153,0,0.14),rgba(255,153,0,0) 45%);
  }
  .bg-\\[linear-gradient\\(90deg\\,rgba\\(255\\,153\\,0\\,0\\.16\\)\\,rgba\\(255\\,153\\,0\\,0\\)_35\\%\\)\\] {
    background-image: linear-gradient(90deg,rgba(255,153,0,0.16),rgba(255,153,0,0) 35%);
  }
  .bg-\\[linear-gradient\\(135deg\\,rgba\\(255\\,153\\,0\\,0\\.1\\)\\,rgba\\(0\\,0\\,0\\,0\\.92\\)_45\\%\\)\\] {
    background-image: linear-gradient(135deg,rgba(255,153,0,0.1),rgba(0,0,0,0.92) 45%);
  }
  .bg-\\[linear-gradient\\(135deg\\,rgba\\(255\\,153\\,0\\,0\\.14\\)\\,transparent_42\\%\\)\\] {
    background-image: linear-gradient(135deg,rgba(255,153,0,0.14),transparent 42%);
  }
  .bg-\\[linear-gradient\\(180deg\\,\\#15110B_0\\%\\,\\#050505_100\\%\\)\\] {
    background-image: linear-gradient(180deg,#15110B 0%,#050505 100%);
  }
  .bg-\\[linear-gradient\\(180deg\\,\\#141414_0\\%\\,\\#0a0a0a_35\\%\\,\\#050505_100\\%\\)\\] {
    background-image: linear-gradient(180deg,#141414 0%,#0a0a0a 35%,#050505 100%);
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(0\\,0\\,0\\,0\\.1\\)\\,transparent_24\\%\\,transparent_72\\%\\,rgba\\(0\\,0\\,0\\,0\\.66\\)\\)\\] {
    background-image: linear-gradient(180deg,rgba(0,0,0,0.1),transparent 24%,transparent 72%,rgba(0,0,0,0.66));
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(0\\,0\\,0\\,0\\.28\\)\\,rgba\\(0\\,0\\,0\\,0\\.08\\)_32\\%\\,rgba\\(0\\,0\\,0\\,0\\.56\\)\\)\\] {
    background-image: linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.08) 32%,rgba(0,0,0,0.56));
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(255\\,153\\,0\\,0\\.08\\)\\,rgba\\(0\\,0\\,0\\,0\\.92\\)_16\\%\\)\\] {
    background-image: linear-gradient(180deg,rgba(255,153,0,0.08),rgba(0,0,0,0.92) 16%);
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(255\\,255\\,255\\,0\\.02\\)\\,rgba\\(0\\,0\\,0\\,0\\.16\\)\\)\\] {
    background-image: linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.16));
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(255\\,255\\,255\\,0\\.015\\)\\,transparent_28\\%\\)\\] {
    background-image: linear-gradient(180deg,rgba(255,255,255,0.015),transparent 28%);
  }
  .bg-\\[linear-gradient\\(180deg\\,rgba\\(255\\,255\\,255\\,0\\.018\\)\\,rgba\\(255\\,255\\,255\\,0\\.005\\)\\)\\] {
    background-image: linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0.005));
  }
  .bg-\\[linear-gradient\\(180deg\\,transparent\\,rgba\\(0\\,0\\,0\\,0\\.68\\)\\)\\] {
    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,0.68));
  }
  .bg-\\[radial-gradient\\(circle_at_50\\%_18\\%\\,rgba\\(255\\,255\\,255\\,0\\.14\\)\\,transparent_42\\%\\)\\,linear-gradient\\(180deg\\,transparent\\,rgba\\(0\\,0\\,0\\,0\\.34\\)_48\\%\\,rgba\\(0\\,0\\,0\\,0\\.82\\)\\)\\] {
    background-image: radial-gradient(circle at 50% 18%,rgba(255,255,255,0.14),transparent 42%),linear-gradient(180deg,transparent,rgba(0,0,0,0.34) 48%,rgba(0,0,0,0.82));
  }
  .bg-\\[radial-gradient\\(circle_at_center\\,rgba\\(255\\,255\\,255\\,0\\.1\\)\\,transparent_35\\%\\)\\,linear-gradient\\(180deg\\,\\#181818_0\\%\\,\\#020202_100\\%\\)\\] {
    background-image: radial-gradient(circle at center,rgba(255,255,255,0.1),transparent 35%),linear-gradient(180deg,#181818 0%,#020202 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_center\\,rgba\\(255\\,255\\,255\\,0\\.04\\)\\,transparent_45\\%\\)\\] {
    background-image: radial-gradient(circle at center,rgba(255,255,255,0.04),transparent 45%);
  }
  .bg-\\[radial-gradient\\(circle_at_center\\,rgba\\(255\\,255\\,255\\,0\\.08\\)\\,transparent_38\\%\\)\\,linear-gradient\\(180deg\\,\\#121212_0\\%\\,\\#000_100\\%\\)\\] {
    background-image: radial-gradient(circle at center,rgba(255,255,255,0.08),transparent 38%),linear-gradient(180deg,#121212 0%,#000 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(0\\,255\\,0\\,0\\.16\\)\\,transparent_48\\%\\)\\,linear-gradient\\(180deg\\,\\#081408_0\\%\\,\\#020302_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(0,255,0,0.16),transparent 48%),linear-gradient(180deg,#081408 0%,#020302 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(0\\,255\\,255\\,0\\.16\\)\\,transparent_48\\%\\)\\,linear-gradient\\(180deg\\,\\#071215_0\\%\\,\\#020304_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(0,255,255,0.16),transparent 48%),linear-gradient(180deg,#071215 0%,#020304 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(255\\,0\\,0\\,0\\.16\\)\\,transparent_48\\%\\)\\,linear-gradient\\(180deg\\,\\#170607_0\\%\\,\\#040202_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(255,0,0,0.16),transparent 48%),linear-gradient(180deg,#170607 0%,#040202 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(255\\,153\\,0\\,0\\.07\\)\\,transparent_24\\%\\)\\,linear-gradient\\(180deg\\,\\#050505_0\\%\\,\\#020202_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(255,153,0,0.07),transparent 24%),linear-gradient(180deg,#050505 0%,#020202 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(255\\,153\\,0\\,0\\.08\\)\\,transparent_56\\%\\)\\,linear-gradient\\(180deg\\,\\#15110B_0\\%\\,\\#050505_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(255,153,0,0.08),transparent 56%),linear-gradient(180deg,#15110B 0%,#050505 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top\\,rgba\\(255\\,153\\,0\\,0\\.18\\)\\,transparent_56\\%\\)\\,linear-gradient\\(180deg\\,\\#15110B_0\\%\\,\\#050505_100\\%\\)\\] {
    background-image: radial-gradient(circle at top,rgba(255,153,0,0.18),transparent 56%),linear-gradient(180deg,#15110B 0%,#050505 100%);
  }
  .bg-\\[radial-gradient\\(circle_at_top_left\\,rgba\\(255\\,43\\,29\\,0\\.16\\)\\,transparent_34\\%\\)\\,radial-gradient\\(circle_at_top_right\\,rgba\\(0\\,246\\,255\\,0\\.1\\)\\,transparent_28\\%\\)\\] {
    background-image: radial-gradient(circle at top left,rgba(255,43,29,0.16),transparent 34%),radial-gradient(circle at top right,rgba(0,246,255,0.1),transparent 28%);
  }
  .bg-\\[radial-gradient\\(circle_at_top_left\\,rgba\\(255\\,255\\,255\\,0\\.05\\)\\,transparent_26\\%\\)\\,linear-gradient\\(180deg\\,rgba\\(255\\,255\\,255\\,0\\.02\\)\\,transparent_22\\%\\,transparent_78\\%\\,rgba\\(255\\,255\\,255\\,0\\.04\\)\\)\\] {
    background-image: radial-gradient(circle at top left,rgba(255,255,255,0.05),transparent 26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent 22%,transparent 78%,rgba(255,255,255,0.04));
  }
  .bg-\\[radial-gradient\\(circle_at_top_right\\,rgba\\(0\\,255\\,255\\,0\\.16\\)\\,transparent_36\\%\\)\\,linear-gradient\\(180deg\\,\\#071215_0\\%\\,\\#020304_100\\%\\)\\] {
    background-image: radial-gradient(circle at top right,rgba(0,255,255,0.16),transparent 36%),linear-gradient(180deg,#071215 0%,#020304 100%);
  }
  .bg-\\[repeating-linear-gradient\\(180deg\\,transparent\\,transparent_3px\\,rgba\\(255\\,255\\,255\\,0\\.04\\)_3px\\,rgba\\(255\\,255\\,255\\,0\\.04\\)_6px\\)\\] {
    background-image: repeating-linear-gradient(180deg,transparent,transparent 3px,rgba(255,255,255,0.04) 3px,rgba(255,255,255,0.04) 6px);
  }
  .from-black {
    --tw-gradient-from: var(--color-black);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .via-black\\/70 {
    --tw-gradient-via: color-mix(in srgb, #000 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-gradient-via: color-mix(in oklab, var(--color-black) 70%, transparent);
    }
    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-via-stops);
  }
  .to-transparent {
    --tw-gradient-to: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .bg-cover {
    background-size: cover;
  }
  .bg-center {
    background-position: center;
  }
  .bg-no-repeat {
    background-repeat: no-repeat;
  }
  .fill-current {
    fill: currentcolor;
  }
  .object-cover {
    object-fit: cover;
  }
  .p-0 {
    padding: 0px;
  }
  .p-1 {
    padding: var(--spacing);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-\\[1px\\] {
    padding: 1px;
  }
  .px-0 {
    padding-inline: 0px;
  }
  .px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
  .px-1 {
    padding-inline: var(--spacing);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-5 {
    padding-block: calc(var(--spacing) * 5);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-10 {
    padding-block: calc(var(--spacing) * 10);
  }
  .py-\\[2px\\] {
    padding-block: 2px;
  }
  .pt-1 {
    padding-top: var(--spacing);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pt-6 {
    padding-top: calc(var(--spacing) * 6);
  }
  .pt-14 {
    padding-top: calc(var(--spacing) * 14);
  }
  .pr-1 {
    padding-right: var(--spacing);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
  .\\!pb-40 {
    padding-bottom: calc(var(--spacing) * 40) !important;
  }
  .pb-1 {
    padding-bottom: var(--spacing);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-3 {
    padding-bottom: calc(var(--spacing) * 3);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-5 {
    padding-bottom: calc(var(--spacing) * 5);
  }
  .pb-6 {
    padding-bottom: calc(var(--spacing) * 6);
  }
  .pb-8 {
    padding-bottom: calc(var(--spacing) * 8);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .align-middle {
    vertical-align: middle;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.64rem\\] {
    font-size: 0.64rem;
  }
  .text-\\[0\\.66rem\\] {
    font-size: 0.66rem;
  }
  .text-\\[0\\.78rem\\] {
    font-size: 0.78rem;
  }
  .text-\\[0\\.95rem\\] {
    font-size: 0.95rem;
  }
  .text-\\[0\\.98rem\\] {
    font-size: 0.98rem;
  }
  .text-\\[1\\.1rem\\] {
    font-size: 1.1rem;
  }
  .text-\\[1\\.4rem\\] {
    font-size: 1.4rem;
  }
  .text-\\[1\\.05rem\\] {
    font-size: 1.05rem;
  }
  .text-\\[1\\.35rem\\] {
    font-size: 1.35rem;
  }
  .text-\\[1\\.55rem\\] {
    font-size: 1.55rem;
  }
  .text-\\[2\\.2rem\\] {
    font-size: 2.2rem;
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[9px\\] {
    font-size: 9px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[clamp\\(1\\.02rem\\,1\\.85vw\\,1\\.55rem\\)\\] {
    font-size: clamp(1.02rem, 1.85vw, 1.55rem);
  }
  .text-\\[clamp\\(2rem\\,12cqw\\,12rem\\)\\] {
    font-size: clamp(2rem, 12cqw, 12rem);
  }
  .text-\\[clamp\\(8px\\,2\\.4cqw\\,11px\\)\\] {
    font-size: clamp(8px, 2.4cqw, 11px);
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-7 {
    --tw-leading: calc(var(--spacing) * 7);
    line-height: calc(var(--spacing) * 7);
  }
  .leading-\\[0\\.9\\] {
    --tw-leading: 0.9;
    line-height: 0.9;
  }
  .leading-\\[0\\.92\\] {
    --tw-leading: 0.92;
    line-height: 0.92;
  }
  .leading-\\[1\\.02\\] {
    --tw-leading: 1.02;
    line-height: 1.02;
  }
  .leading-\\[1\\.35\\] {
    --tw-leading: 1.35;
    line-height: 1.35;
  }
  .leading-\\[1\\.36\\] {
    --tw-leading: 1.36;
    line-height: 1.36;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .font-\\[var\\(--font-nerv-display\\)\\] {
    --tw-font-weight: var(--font-nerv-display);
    font-weight: var(--font-nerv-display);
  }
  .font-\\[var\\(--font-nerv-title\\)\\] {
    --tw-font-weight: var(--font-nerv-title);
    font-weight: var(--font-nerv-title);
  }
  .font-black {
    --tw-font-weight: var(--font-weight-black);
    font-weight: var(--font-weight-black);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-\\[0\\.1em\\] {
    --tw-tracking: 0.1em;
    letter-spacing: 0.1em;
  }
  .tracking-\\[0\\.02em\\] {
    --tw-tracking: 0.02em;
    letter-spacing: 0.02em;
  }
  .tracking-\\[0\\.2em\\] {
    --tw-tracking: 0.2em;
    letter-spacing: 0.2em;
  }
  .tracking-\\[0\\.3em\\] {
    --tw-tracking: 0.3em;
    letter-spacing: 0.3em;
  }
  .tracking-\\[0\\.06em\\] {
    --tw-tracking: 0.06em;
    letter-spacing: 0.06em;
  }
  .tracking-\\[0\\.08em\\] {
    --tw-tracking: 0.08em;
    letter-spacing: 0.08em;
  }
  .tracking-\\[0\\.12em\\] {
    --tw-tracking: 0.12em;
    letter-spacing: 0.12em;
  }
  .tracking-\\[0\\.14em\\] {
    --tw-tracking: 0.14em;
    letter-spacing: 0.14em;
  }
  .tracking-\\[0\\.15em\\] {
    --tw-tracking: 0.15em;
    letter-spacing: 0.15em;
  }
  .tracking-\\[0\\.16em\\] {
    --tw-tracking: 0.16em;
    letter-spacing: 0.16em;
  }
  .tracking-\\[0\\.18em\\] {
    --tw-tracking: 0.18em;
    letter-spacing: 0.18em;
  }
  .tracking-\\[0\\.22em\\] {
    --tw-tracking: 0.22em;
    letter-spacing: 0.22em;
  }
  .tracking-\\[0\\.24em\\] {
    --tw-tracking: 0.24em;
    letter-spacing: 0.24em;
  }
  .tracking-\\[0\\.25em\\] {
    --tw-tracking: 0.25em;
    letter-spacing: 0.25em;
  }
  .tracking-\\[0\\.26em\\] {
    --tw-tracking: 0.26em;
    letter-spacing: 0.26em;
  }
  .tracking-\\[0\\.28em\\] {
    --tw-tracking: 0.28em;
    letter-spacing: 0.28em;
  }
  .tracking-\\[0\\.32em\\] {
    --tw-tracking: 0.32em;
    letter-spacing: 0.32em;
  }
  .tracking-\\[0\\.35em\\] {
    --tw-tracking: 0.35em;
    letter-spacing: 0.35em;
  }
  .tracking-\\[clamp\\(0\\.18em\\,0\\.5cqw\\,0\\.24em\\)\\] {
    --tw-tracking: clamp(0.18em, 0.5cqw, 0.24em);
    letter-spacing: clamp(0.18em, 0.5cqw, 0.24em);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#f2ece2\\] {
    color: #f2ece2;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-black\\/80 {
    color: color-mix(in srgb, #000 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-black) 80%, transparent);
    }
  }
  .text-current {
    color: currentcolor;
  }
  .text-current\\/70 {
    color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, currentcolor 70%, transparent);
    }
  }
  .text-data-blue {
    color: var(--color-data-blue);
  }
  .text-lcd-green {
    color: var(--color-lcd-green);
  }
  .text-magenta-wave {
    color: var(--color-magenta-wave);
  }
  .text-nerv-amber {
    color: var(--color-nerv-amber);
  }
  .text-nerv-black {
    color: var(--color-nerv-black);
  }
  .text-nerv-cyan {
    color: var(--color-nerv-cyan);
  }
  .text-nerv-cyan\\/50 {
    color: color-mix(in srgb, #00f6ff 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-cyan) 50%, transparent);
    }
  }
  .text-nerv-cyan\\/60 {
    color: color-mix(in srgb, #00f6ff 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-cyan) 60%, transparent);
    }
  }
  .text-nerv-cyan\\/70 {
    color: color-mix(in srgb, #00f6ff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-cyan) 70%, transparent);
    }
  }
  .text-nerv-cyan\\/75 {
    color: color-mix(in srgb, #00f6ff 75%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-cyan) 75%, transparent);
    }
  }
  .text-nerv-dark-gray\\/80 {
    color: color-mix(in srgb, #121212 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-dark-gray) 80%, transparent);
    }
  }
  .text-nerv-green {
    color: var(--color-nerv-green);
  }
  .text-nerv-green\\/50 {
    color: color-mix(in srgb, #00ff00 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-green) 50%, transparent);
    }
  }
  .text-nerv-green\\/60 {
    color: color-mix(in srgb, #00ff00 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-green) 60%, transparent);
    }
  }
  .text-nerv-green\\/70 {
    color: color-mix(in srgb, #00ff00 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-green) 70%, transparent);
    }
  }
  .text-nerv-green\\/72 {
    color: color-mix(in srgb, #00ff00 72%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-green) 72%, transparent);
    }
  }
  .text-nerv-green\\/80 {
    color: color-mix(in srgb, #00ff00 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-green) 80%, transparent);
    }
  }
  .text-nerv-lcd-green {
    color: var(--color-nerv-lcd-green);
  }
  .text-nerv-magenta {
    color: var(--color-nerv-magenta);
  }
  .text-nerv-mid-gray {
    color: var(--color-nerv-mid-gray);
  }
  .text-nerv-mid-gray\\/30 {
    color: color-mix(in srgb, #4e4e4e 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-mid-gray) 30%, transparent);
    }
  }
  .text-nerv-mid-gray\\/40 {
    color: color-mix(in srgb, #4e4e4e 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-mid-gray) 40%, transparent);
    }
  }
  .text-nerv-mid-gray\\/50 {
    color: color-mix(in srgb, #4e4e4e 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-mid-gray) 50%, transparent);
    }
  }
  .text-nerv-mid-gray\\/60 {
    color: color-mix(in srgb, #4e4e4e 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-mid-gray) 60%, transparent);
    }
  }
  .text-nerv-orange {
    color: var(--color-nerv-orange);
  }
  .text-nerv-orange\\/40 {
    color: color-mix(in srgb, #ff9900 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 40%, transparent);
    }
  }
  .text-nerv-orange\\/50 {
    color: color-mix(in srgb, #ff9900 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 50%, transparent);
    }
  }
  .text-nerv-orange\\/60 {
    color: color-mix(in srgb, #ff9900 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 60%, transparent);
    }
  }
  .text-nerv-orange\\/65 {
    color: color-mix(in srgb, #ff9900 65%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 65%, transparent);
    }
  }
  .text-nerv-orange\\/70 {
    color: color-mix(in srgb, #ff9900 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 70%, transparent);
    }
  }
  .text-nerv-orange\\/75 {
    color: color-mix(in srgb, #ff9900 75%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 75%, transparent);
    }
  }
  .text-nerv-orange\\/86 {
    color: color-mix(in srgb, #ff9900 86%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-orange) 86%, transparent);
    }
  }
  .text-nerv-purple {
    color: var(--color-nerv-purple);
  }
  .text-nerv-red {
    color: var(--color-nerv-red);
  }
  .text-nerv-red\\/70 {
    color: color-mix(in srgb, #ff2b1d 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-red) 70%, transparent);
    }
  }
  .text-nerv-red\\/78 {
    color: color-mix(in srgb, #ff2b1d 78%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-red) 78%, transparent);
    }
  }
  .text-nerv-white {
    color: var(--color-nerv-white);
  }
  .text-nerv-white\\/20 {
    color: color-mix(in srgb, #e3ddd4 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 20%, transparent);
    }
  }
  .text-nerv-white\\/25 {
    color: color-mix(in srgb, #e3ddd4 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 25%, transparent);
    }
  }
  .text-nerv-white\\/28 {
    color: color-mix(in srgb, #e3ddd4 28%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 28%, transparent);
    }
  }
  .text-nerv-white\\/30 {
    color: color-mix(in srgb, #e3ddd4 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 30%, transparent);
    }
  }
  .text-nerv-white\\/34 {
    color: color-mix(in srgb, #e3ddd4 34%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 34%, transparent);
    }
  }
  .text-nerv-white\\/35 {
    color: color-mix(in srgb, #e3ddd4 35%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 35%, transparent);
    }
  }
  .text-nerv-white\\/36 {
    color: color-mix(in srgb, #e3ddd4 36%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 36%, transparent);
    }
  }
  .text-nerv-white\\/38 {
    color: color-mix(in srgb, #e3ddd4 38%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 38%, transparent);
    }
  }
  .text-nerv-white\\/40 {
    color: color-mix(in srgb, #e3ddd4 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 40%, transparent);
    }
  }
  .text-nerv-white\\/42 {
    color: color-mix(in srgb, #e3ddd4 42%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 42%, transparent);
    }
  }
  .text-nerv-white\\/44 {
    color: color-mix(in srgb, #e3ddd4 44%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 44%, transparent);
    }
  }
  .text-nerv-white\\/45 {
    color: color-mix(in srgb, #e3ddd4 45%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 45%, transparent);
    }
  }
  .text-nerv-white\\/46 {
    color: color-mix(in srgb, #e3ddd4 46%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 46%, transparent);
    }
  }
  .text-nerv-white\\/48 {
    color: color-mix(in srgb, #e3ddd4 48%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 48%, transparent);
    }
  }
  .text-nerv-white\\/50 {
    color: color-mix(in srgb, #e3ddd4 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 50%, transparent);
    }
  }
  .text-nerv-white\\/55 {
    color: color-mix(in srgb, #e3ddd4 55%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 55%, transparent);
    }
  }
  .text-nerv-white\\/58 {
    color: color-mix(in srgb, #e3ddd4 58%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 58%, transparent);
    }
  }
  .text-nerv-white\\/60 {
    color: color-mix(in srgb, #e3ddd4 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 60%, transparent);
    }
  }
  .text-nerv-white\\/62 {
    color: color-mix(in srgb, #e3ddd4 62%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 62%, transparent);
    }
  }
  .text-nerv-white\\/65 {
    color: color-mix(in srgb, #e3ddd4 65%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 65%, transparent);
    }
  }
  .text-nerv-white\\/68 {
    color: color-mix(in srgb, #e3ddd4 68%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 68%, transparent);
    }
  }
  .text-nerv-white\\/70 {
    color: color-mix(in srgb, #e3ddd4 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 70%, transparent);
    }
  }
  .text-nerv-white\\/72 {
    color: color-mix(in srgb, #e3ddd4 72%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 72%, transparent);
    }
  }
  .text-nerv-white\\/75 {
    color: color-mix(in srgb, #e3ddd4 75%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 75%, transparent);
    }
  }
  .text-nerv-white\\/80 {
    color: color-mix(in srgb, #e3ddd4 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 80%, transparent);
    }
  }
  .text-nerv-white\\/85 {
    color: color-mix(in srgb, #e3ddd4 85%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 85%, transparent);
    }
  }
  .text-text-orange {
    color: var(--color-text-orange);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/72 {
    color: color-mix(in srgb, #fff 72%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 72%, transparent);
    }
  }
  .text-white\\/78 {
    color: color-mix(in srgb, #fff 78%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 78%, transparent);
    }
  }
  .text-white\\/80 {
    color: color-mix(in srgb, #fff 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 80%, transparent);
    }
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .underline-offset-4 {
    text-underline-offset: 4px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-16 {
    opacity: 16%;
  }
  .opacity-20 {
    opacity: 20%;
  }
  .opacity-24 {
    opacity: 24%;
  }
  .opacity-30 {
    opacity: 30%;
  }
  .opacity-35 {
    opacity: 35%;
  }
  .opacity-40 {
    opacity: 40%;
  }
  .opacity-45 {
    opacity: 45%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-55 {
    opacity: 55%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-70 {
    opacity: 70%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-90 {
    opacity: 90%;
  }
  .opacity-95 {
    opacity: 95%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .opacity-\\[0\\.03\\] {
    opacity: 0.03;
  }
  .opacity-\\[0\\.06\\] {
    opacity: 0.06;
  }
  .opacity-\\[0\\.14\\] {
    opacity: 0.14;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.45\\)\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.45));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_rgba\\(255\\,153\\,0\\,0\\.2\\)\\,0_0_28px_rgba\\(255\\,153\\,0\\,0\\.16\\)\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,153,0,0.2)), 0 0 28px var(--tw-shadow-color, rgba(255,153,0,0.16));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_6px_rgba\\(0\\,255\\,0\\,0\\.3\\)\\] {
    --tw-shadow: 0 0 6px var(--tw-shadow-color, rgba(0,255,0,0.3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_6px_rgba\\(0\\,255\\,255\\,0\\.3\\)\\] {
    --tw-shadow: 0 0 6px var(--tw-shadow-color, rgba(0,255,255,0.3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_6px_rgba\\(255\\,0\\,0\\,0\\.5\\)\\] {
    --tw-shadow: 0 0 6px var(--tw-shadow-color, rgba(255,0,0,0.5));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_6px_rgba\\(255\\,153\\,0\\,0\\.3\\)\\] {
    --tw-shadow: 0 0 6px var(--tw-shadow-color, rgba(255,153,0,0.3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_12px_rgba\\(255\\,153\\,0\\,0\\.2\\)\\] {
    --tw-shadow: 0 0 12px var(--tw-shadow-color, rgba(255,153,0,0.2));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_32px_rgba\\(255\\,153\\,0\\,0\\.08\\)\\] {
    --tw-shadow: 0 0 32px var(--tw-shadow-color, rgba(255,153,0,0.08));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-nerv-orange {
    --tw-ring-color: var(--color-nerv-orange);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur-2xl {
    --tw-blur: blur(var(--blur-2xl));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-\\[2px\\] {
    --tw-backdrop-blur: blur(2px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-75 {
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-500 {
    --tw-duration: 500ms;
    transition-duration: 500ms;
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .\\[background\\:repeating-linear-gradient\\(0deg\\,transparent_0_4px\\,rgba\\(255\\,255\\,255\\,0\\.05\\)_4px_8px\\)\\] {
    background: repeating-linear-gradient(0deg,transparent 0 4px,rgba(255,255,255,0.05) 4px 8px);
  }
  .\\[background\\:repeating-linear-gradient\\(0deg\\,transparent_0_4px\\,rgba\\(255\\,255\\,255\\,0\\.06\\)_4px_8px\\)\\] {
    background: repeating-linear-gradient(0deg,transparent 0 4px,rgba(255,255,255,0.06) 4px 8px);
  }
  @media (hover: hover) {
    .group-hover\\:text-nerv-black:is(:where(.group):hover *) {
      color: var(--color-nerv-black);
    }
    .group-hover\\:text-nerv-cyan:is(:where(.group):hover *) {
      color: var(--color-nerv-cyan);
    }
    .group-hover\\:text-nerv-orange:is(:where(.group):hover *) {
      color: var(--color-nerv-orange);
    }
    .group-hover\\:text-nerv-white:is(:where(.group):hover *) {
      color: var(--color-nerv-white);
    }
    .group-hover\\:text-nerv-white\\/80:is(:where(.group):hover *) {
      color: color-mix(in srgb, #e3ddd4 80%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .group-hover\\:text-nerv-white\\/80:is(:where(.group):hover *) {
        color: color-mix(in oklab, var(--color-nerv-white) 80%, transparent);
      }
    }
  }
  .placeholder\\:text-nerv-mid-gray::placeholder {
    color: var(--color-nerv-mid-gray);
  }
  .placeholder\\:text-nerv-white\\/24::placeholder {
    color: color-mix(in srgb, #e3ddd4 24%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-nerv-white) 24%, transparent);
    }
  }
  .last\\:border-r-0:last-child {
    border-right-style: var(--tw-border-style);
    border-right-width: 0px;
  }
  .last\\:border-b-0:last-child {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  @media (hover: hover) {
    .hover\\:scale-x-\\[1\\.01\\]:hover {
      --tw-scale-x: 1.01;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
    .hover\\:border-current:hover {
      border-color: currentcolor;
    }
    .hover\\:border-nerv-cyan:hover {
      border-color: var(--color-nerv-cyan);
    }
    .hover\\:border-nerv-cyan\\/50:hover {
      border-color: color-mix(in srgb, #00f6ff 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-cyan\\/50:hover {
        border-color: color-mix(in oklab, var(--color-nerv-cyan) 50%, transparent);
      }
    }
    .hover\\:border-nerv-cyan\\/60:hover {
      border-color: color-mix(in srgb, #00f6ff 60%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-cyan\\/60:hover {
        border-color: color-mix(in oklab, var(--color-nerv-cyan) 60%, transparent);
      }
    }
    .hover\\:border-nerv-green:hover {
      border-color: var(--color-nerv-green);
    }
    .hover\\:border-nerv-green\\/50:hover {
      border-color: color-mix(in srgb, #00ff00 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-green\\/50:hover {
        border-color: color-mix(in oklab, var(--color-nerv-green) 50%, transparent);
      }
    }
    .hover\\:border-nerv-orange:hover {
      border-color: var(--color-nerv-orange);
    }
    .hover\\:border-nerv-orange\\/40:hover {
      border-color: color-mix(in srgb, #ff9900 40%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-orange\\/40:hover {
        border-color: color-mix(in oklab, var(--color-nerv-orange) 40%, transparent);
      }
    }
    .hover\\:border-nerv-orange\\/45:hover {
      border-color: color-mix(in srgb, #ff9900 45%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-orange\\/45:hover {
        border-color: color-mix(in oklab, var(--color-nerv-orange) 45%, transparent);
      }
    }
    .hover\\:border-nerv-orange\\/50:hover {
      border-color: color-mix(in srgb, #ff9900 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-orange\\/50:hover {
        border-color: color-mix(in oklab, var(--color-nerv-orange) 50%, transparent);
      }
    }
    .hover\\:border-nerv-orange\\/60:hover {
      border-color: color-mix(in srgb, #ff9900 60%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-orange\\/60:hover {
        border-color: color-mix(in oklab, var(--color-nerv-orange) 60%, transparent);
      }
    }
    .hover\\:border-nerv-red:hover {
      border-color: var(--color-nerv-red);
    }
    .hover\\:border-nerv-white:hover {
      border-color: var(--color-nerv-white);
    }
    .hover\\:border-nerv-white\\/20:hover {
      border-color: color-mix(in srgb, #e3ddd4 20%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-white\\/20:hover {
        border-color: color-mix(in oklab, var(--color-nerv-white) 20%, transparent);
      }
    }
    .hover\\:border-nerv-white\\/30:hover {
      border-color: color-mix(in srgb, #e3ddd4 30%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:border-nerv-white\\/30:hover {
        border-color: color-mix(in oklab, var(--color-nerv-white) 30%, transparent);
      }
    }
    .hover\\:bg-nerv-cyan:hover {
      background-color: var(--color-nerv-cyan);
    }
    .hover\\:bg-nerv-cyan\\/10:hover {
      background-color: color-mix(in srgb, #00f6ff 10%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-cyan\\/10:hover {
        background-color: color-mix(in oklab, var(--color-nerv-cyan) 10%, transparent);
      }
    }
    .hover\\:bg-nerv-dark-gray:hover {
      background-color: var(--color-nerv-dark-gray);
    }
    .hover\\:bg-nerv-dark-gray\\/50:hover {
      background-color: color-mix(in srgb, #121212 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-dark-gray\\/50:hover {
        background-color: color-mix(in oklab, var(--color-nerv-dark-gray) 50%, transparent);
      }
    }
    .hover\\:bg-nerv-green:hover {
      background-color: var(--color-nerv-green);
    }
    .hover\\:bg-nerv-green\\/10:hover {
      background-color: color-mix(in srgb, #00ff00 10%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-green\\/10:hover {
        background-color: color-mix(in oklab, var(--color-nerv-green) 10%, transparent);
      }
    }
    .hover\\:bg-nerv-orange:hover {
      background-color: var(--color-nerv-orange);
    }
    .hover\\:bg-nerv-orange\\/5:hover {
      background-color: color-mix(in srgb, #ff9900 5%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-orange\\/5:hover {
        background-color: color-mix(in oklab, var(--color-nerv-orange) 5%, transparent);
      }
    }
    .hover\\:bg-nerv-orange\\/8:hover {
      background-color: color-mix(in srgb, #ff9900 8%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-orange\\/8:hover {
        background-color: color-mix(in oklab, var(--color-nerv-orange) 8%, transparent);
      }
    }
    .hover\\:bg-nerv-orange\\/10:hover {
      background-color: color-mix(in srgb, #ff9900 10%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-orange\\/10:hover {
        background-color: color-mix(in oklab, var(--color-nerv-orange) 10%, transparent);
      }
    }
    .hover\\:bg-nerv-red:hover {
      background-color: var(--color-nerv-red);
    }
    .hover\\:bg-nerv-red\\/10:hover {
      background-color: color-mix(in srgb, #ff2b1d 10%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-red\\/10:hover {
        background-color: color-mix(in oklab, var(--color-nerv-red) 10%, transparent);
      }
    }
    .hover\\:bg-nerv-white:hover {
      background-color: var(--color-nerv-white);
    }
    .hover\\:bg-nerv-white\\/5:hover {
      background-color: color-mix(in srgb, #e3ddd4 5%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-white\\/5:hover {
        background-color: color-mix(in oklab, var(--color-nerv-white) 5%, transparent);
      }
    }
    .hover\\:bg-nerv-white\\/\\[0\\.02\\]:hover {
      background-color: color-mix(in srgb, #e3ddd4 2%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-white\\/\\[0\\.02\\]:hover {
        background-color: color-mix(in oklab, var(--color-nerv-white) 2%, transparent);
      }
    }
    .hover\\:bg-nerv-white\\/\\[0\\.03\\]:hover {
      background-color: color-mix(in srgb, #e3ddd4 3%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-white\\/\\[0\\.03\\]:hover {
        background-color: color-mix(in oklab, var(--color-nerv-white) 3%, transparent);
      }
    }
    .hover\\:bg-nerv-white\\/\\[0\\.04\\]:hover {
      background-color: color-mix(in srgb, #e3ddd4 4%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-nerv-white\\/\\[0\\.04\\]:hover {
        background-color: color-mix(in oklab, var(--color-nerv-white) 4%, transparent);
      }
    }
    .hover\\:bg-white\\/\\[0\\.03\\]:hover {
      background-color: color-mix(in srgb, #fff 3%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-white\\/\\[0\\.03\\]:hover {
        background-color: color-mix(in oklab, var(--color-white) 3%, transparent);
      }
    }
    .hover\\:bg-white\\/\\[0\\.04\\]:hover {
      background-color: color-mix(in srgb, #fff 4%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-white\\/\\[0\\.04\\]:hover {
        background-color: color-mix(in oklab, var(--color-white) 4%, transparent);
      }
    }
    .hover\\:text-black:hover {
      color: var(--color-black);
    }
    .hover\\:text-nerv-black:hover {
      color: var(--color-nerv-black);
    }
    .hover\\:text-nerv-cyan:hover {
      color: var(--color-nerv-cyan);
    }
    .hover\\:text-nerv-green:hover {
      color: var(--color-nerv-green);
    }
    .hover\\:text-nerv-orange:hover {
      color: var(--color-nerv-orange);
    }
    .hover\\:text-nerv-orange\\/85:hover {
      color: color-mix(in srgb, #ff9900 85%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:text-nerv-orange\\/85:hover {
        color: color-mix(in oklab, var(--color-nerv-orange) 85%, transparent);
      }
    }
    .hover\\:text-nerv-red:hover {
      color: var(--color-nerv-red);
    }
    .hover\\:text-nerv-white:hover {
      color: var(--color-nerv-white);
    }
    .hover\\:underline:hover {
      text-decoration-line: underline;
    }
    .hover\\:opacity-80:hover {
      opacity: 80%;
    }
    .hover\\:opacity-100:hover {
      opacity: 100%;
    }
    .hover\\:ring-1:hover {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
    .hover\\:ring-nerv-white\\/20:hover {
      --tw-ring-color: color-mix(in srgb, #e3ddd4 20%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:ring-nerv-white\\/20:hover {
        --tw-ring-color: color-mix(in oklab, var(--color-nerv-white) 20%, transparent);
      }
    }
  }
  .focus\\:border-current:focus {
    border-color: currentcolor;
  }
  .focus\\:border-nerv-cyan:focus {
    border-color: var(--color-nerv-cyan);
  }
  .focus\\:border-nerv-green:focus {
    border-color: var(--color-nerv-green);
  }
  .focus\\:border-nerv-orange:focus {
    border-color: var(--color-nerv-orange);
  }
  .active\\:border-nerv-amber:active {
    border-color: var(--color-nerv-amber);
  }
  .active\\:border-nerv-green:active {
    border-color: var(--color-nerv-green);
  }
  .active\\:border-nerv-orange\\/60:active {
    border-color: color-mix(in srgb, #ff9900 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-nerv-orange) 60%, transparent);
    }
  }
  .active\\:border-nerv-red:active {
    border-color: var(--color-nerv-red);
  }
  .active\\:text-nerv-amber:active {
    color: var(--color-nerv-amber);
  }
  .active\\:text-nerv-white:active {
    color: var(--color-nerv-white);
  }
  .disabled\\:pointer-events-none:disabled {
    pointer-events: none;
  }
  .disabled\\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\\:opacity-30:disabled {
    opacity: 30%;
  }
  .disabled\\:opacity-60:disabled {
    opacity: 60%;
  }
  @media (width >= 40rem) {
    .sm\\:top-4 {
      top: calc(var(--spacing) * 4);
    }
    .sm\\:right-4 {
      right: calc(var(--spacing) * 4);
    }
    .sm\\:bottom-4 {
      bottom: calc(var(--spacing) * 4);
    }
    .sm\\:left-4 {
      left: calc(var(--spacing) * 4);
    }
    .sm\\:col-span-3 {
      grid-column: span 3 / span 3;
    }
    .sm\\:col-span-4 {
      grid-column: span 4 / span 4;
    }
    .sm\\:col-span-5 {
      grid-column: span 5 / span 5;
    }
    .sm\\:mr-4 {
      margin-right: calc(var(--spacing) * 4);
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:\\!h-\\[360px\\] {
      height: 360px !important;
    }
    .sm\\:h-64 {
      height: calc(var(--spacing) * 64);
    }
    .sm\\:h-\\[200px\\] {
      height: 200px;
    }
    .sm\\:min-h-\\[124px\\] {
      min-height: 124px;
    }
    .sm\\:w-8 {
      width: calc(var(--spacing) * 8);
    }
    .sm\\:w-auto {
      width: auto;
    }
    .sm\\:max-w-\\[68\\%\\] {
      max-width: 68%;
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    .sm\\:grid-cols-\\[1\\.3fr_0\\.7fr\\] {
      grid-template-columns: 1.3fr 0.7fr;
    }
    .sm\\:grid-cols-\\[minmax\\(0\\,1fr\\)_10rem\\] {
      grid-template-columns: minmax(0,1fr) 10rem;
    }
    .sm\\:grid-cols-\\[minmax\\(0\\,1fr\\)_11rem\\] {
      grid-template-columns: minmax(0,1fr) 11rem;
    }
    .sm\\:grid-cols-\\[minmax\\(0\\,1fr\\)_auto\\] {
      grid-template-columns: minmax(0,1fr) auto;
    }
    .sm\\:grid-cols-\\[repeat\\(auto-fit\\,minmax\\(0\\,1fr\\)\\)\\] {
      grid-template-columns: repeat(auto-fit,minmax(0,1fr));
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:items-center {
      align-items: center;
    }
    .sm\\:items-end {
      align-items: flex-end;
    }
    .sm\\:justify-between {
      justify-content: space-between;
    }
    .sm\\:p-4 {
      padding: calc(var(--spacing) * 4);
    }
    .sm\\:p-5 {
      padding: calc(var(--spacing) * 5);
    }
    .sm\\:p-6 {
      padding: calc(var(--spacing) * 6);
    }
    .sm\\:p-8 {
      padding: calc(var(--spacing) * 8);
    }
    .sm\\:px-3 {
      padding-inline: calc(var(--spacing) * 3);
    }
    .sm\\:px-4 {
      padding-inline: calc(var(--spacing) * 4);
    }
    .sm\\:px-5 {
      padding-inline: calc(var(--spacing) * 5);
    }
    .sm\\:px-6 {
      padding-inline: calc(var(--spacing) * 6);
    }
    .sm\\:px-8 {
      padding-inline: calc(var(--spacing) * 8);
    }
    .sm\\:py-5 {
      padding-block: calc(var(--spacing) * 5);
    }
    .sm\\:py-6 {
      padding-block: calc(var(--spacing) * 6);
    }
    .sm\\:py-8 {
      padding-block: calc(var(--spacing) * 8);
    }
    .sm\\:py-12 {
      padding-block: calc(var(--spacing) * 12);
    }
    .sm\\:py-14 {
      padding-block: calc(var(--spacing) * 14);
    }
    .sm\\:\\!pb-48 {
      padding-bottom: calc(var(--spacing) * 48) !important;
    }
    .sm\\:text-2xl {
      font-size: var(--text-2xl);
      line-height: var(--tw-leading, var(--text-2xl--line-height));
    }
    .sm\\:text-3xl {
      font-size: var(--text-3xl);
      line-height: var(--tw-leading, var(--text-3xl--line-height));
    }
    .sm\\:text-4xl {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
    .sm\\:text-5xl {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
    .sm\\:text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
    .sm\\:text-base {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
    .sm\\:text-xl {
      font-size: var(--text-xl);
      line-height: var(--tw-leading, var(--text-xl--line-height));
    }
    .sm\\:text-xs {
      font-size: var(--text-xs);
      line-height: var(--tw-leading, var(--text-xs--line-height));
    }
    .sm\\:text-\\[1\\.6rem\\] {
      font-size: 1.6rem;
    }
    .sm\\:text-\\[3rem\\] {
      font-size: 3rem;
    }
    .sm\\:text-\\[10px\\] {
      font-size: 10px;
    }
    .sm\\:text-\\[13px\\] {
      font-size: 13px;
    }
    .sm\\:text-\\[15px\\] {
      font-size: 15px;
    }
  }
  @media (width >= 48rem) {
    .md\\:right-0 {
      right: 0px;
    }
    .md\\:left-0 {
      left: 0px;
    }
    .md\\:col-span-3 {
      grid-column: span 3 / span 3;
    }
    .md\\:col-span-4 {
      grid-column: span 4 / span 4;
    }
    .md\\:col-span-5 {
      grid-column: span 5 / span 5;
    }
    .md\\:col-span-6 {
      grid-column: span 6 / span 6;
    }
    .md\\:col-span-7 {
      grid-column: span 7 / span 7;
    }
    .md\\:col-span-8 {
      grid-column: span 8 / span 8;
    }
    .md\\:mt-3 {
      margin-top: calc(var(--spacing) * 3);
    }
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:h-7 {
      height: calc(var(--spacing) * 7);
    }
    .md\\:max-h-\\[700px\\] {
      max-height: 700px;
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    .md\\:grid-cols-\\[minmax\\(0\\,1fr\\)_14rem\\] {
      grid-template-columns: minmax(0,1fr) 14rem;
    }
    .md\\:border-r {
      border-right-style: var(--tw-border-style);
      border-right-width: 1px;
    }
    .md\\:border-b-0 {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 0px;
    }
    .md\\:px-8 {
      padding-inline: calc(var(--spacing) * 8);
    }
    .md\\:pt-5 {
      padding-top: calc(var(--spacing) * 5);
    }
    .md\\:pt-10 {
      padding-top: calc(var(--spacing) * 10);
    }
    .md\\:pb-6 {
      padding-bottom: calc(var(--spacing) * 6);
    }
    .md\\:text-4xl {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
    .md\\:text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
    .md\\:leading-\\[1\\.42\\] {
      --tw-leading: 1.42;
      line-height: 1.42;
    }
  }
  @media (width >= 64rem) {
    .lg\\:col-span-3 {
      grid-column: span 3 / span 3;
    }
    .lg\\:col-span-4 {
      grid-column: span 4 / span 4;
    }
    .lg\\:col-span-5 {
      grid-column: span 5 / span 5;
    }
    .lg\\:col-span-6 {
      grid-column: span 6 / span 6;
    }
    .lg\\:col-span-7 {
      grid-column: span 7 / span 7;
    }
    .lg\\:col-span-8 {
      grid-column: span 8 / span 8;
    }
    .lg\\:col-span-9 {
      grid-column: span 9 / span 9;
    }
    .lg\\:col-span-12 {
      grid-column: span 12 / span 12;
    }
    .lg\\:block {
      display: block;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:min-h-\\[280px\\] {
      min-height: 280px;
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    .lg\\:grid-cols-\\[1fr_18rem\\] {
      grid-template-columns: 1fr 18rem;
    }
    .lg\\:grid-cols-\\[18rem_minmax\\(0\\,1fr\\)\\] {
      grid-template-columns: 18rem minmax(0,1fr);
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.2fr\\)_20rem\\] {
      grid-template-columns: minmax(0,1.2fr) 20rem;
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.3fr\\)_20rem\\] {
      grid-template-columns: minmax(0,1.3fr) 20rem;
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.3fr\\)_minmax\\(20rem\\,0\\.7fr\\)\\] {
      grid-template-columns: minmax(0,1.3fr) minmax(20rem,0.7fr);
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.4fr\\)_minmax\\(18rem\\,0\\.8fr\\)\\] {
      grid-template-columns: minmax(0,1.4fr) minmax(18rem,0.8fr);
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.45fr\\)_20rem\\] {
      grid-template-columns: minmax(0,1.45fr) 20rem;
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1\\.45fr\\)_22rem\\] {
      grid-template-columns: minmax(0,1.45fr) 22rem;
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1fr\\)_18rem\\] {
      grid-template-columns: minmax(0,1fr) 18rem;
    }
    .lg\\:grid-cols-\\[minmax\\(0\\,1fr\\)_22rem\\] {
      grid-template-columns: minmax(0,1fr) 22rem;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:items-end {
      align-items: flex-end;
    }
    .lg\\:justify-between {
      justify-content: space-between;
    }
    .lg\\:justify-end {
      justify-content: flex-end;
    }
    .lg\\:border-r {
      border-right-style: var(--tw-border-style);
      border-right-width: 1px;
    }
    .lg\\:border-b-0 {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 0px;
    }
    .lg\\:border-l {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
    .lg\\:px-8 {
      padding-inline: calc(var(--spacing) * 8);
    }
    .lg\\:px-10 {
      padding-inline: calc(var(--spacing) * 10);
    }
    .lg\\:py-8 {
      padding-block: calc(var(--spacing) * 8);
    }
    .lg\\:pt-0 {
      padding-top: 0px;
    }
    .lg\\:text-left {
      text-align: left;
    }
    .lg\\:text-5xl {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
    .lg\\:text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
    .lg\\:text-\\[3\\.7rem\\] {
      font-size: 3.7rem;
    }
  }
  @media (width >= 80rem) {
    .xl\\:min-w-\\[12rem\\] {
      min-width: 12rem;
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-\\[auto_1fr_auto\\] {
      grid-template-columns: auto 1fr auto;
    }
    .xl\\:grid-cols-\\[minmax\\(0\\,1\\.1fr\\)_minmax\\(0\\,0\\.9fr\\)\\] {
      grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr);
    }
    .xl\\:grid-cols-\\[minmax\\(0\\,1\\.05fr\\)_minmax\\(19rem\\,0\\.95fr\\)\\] {
      grid-template-columns: minmax(0,1.05fr) minmax(19rem,0.95fr);
    }
    .xl\\:grid-cols-\\[minmax\\(0\\,1\\.15fr\\)_minmax\\(0\\,0\\.95fr\\)_20rem\\] {
      grid-template-columns: minmax(0,1.15fr) minmax(0,0.95fr) 20rem;
    }
    .xl\\:grid-cols-\\[minmax\\(0\\,1fr\\)_18rem\\] {
      grid-template-columns: minmax(0,1fr) 18rem;
    }
    .xl\\:grid-cols-\\[minmax\\(0\\,1fr\\)_20rem\\] {
      grid-template-columns: minmax(0,1fr) 20rem;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:items-center {
      align-items: center;
    }
    .xl\\:items-end {
      align-items: flex-end;
    }
    .xl\\:justify-between {
      justify-content: space-between;
    }
  }
}
@layer base {
  *,
  *::before,
  *::after {
    border-radius: 0;
  }
  html {
    background: #000000;
    color: #ff9900;
    font-family: var(--font-nerv-body);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  body {
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--color-nerv-white);
    background: radial-gradient(
        circle at top center,
        rgba(255, 153, 0, 0.06),
        transparent 32%
      ),
      linear-gradient(180deg, #050505 0%, #000000 24%, #000000 100%);
    letter-spacing: 0.02em;
  }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.18;
    background-image: linear-gradient(rgba(255, 153, 0, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 153, 0, 0.04) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.04) 2px,
      rgba(0, 0, 0, 0.04) 4px
    );
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  textarea,
  select {
    font: inherit;
  }
  ::selection {
    background: #ff9900;
    color: #000000;
  }
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
  border-left: 1px solid rgba(255, 153, 0, 0.08);
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 153, 0, 0.7);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 43, 29, 0.88);
}
.hazard-stripes {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    #ff2b1d 10px,
    #ff2b1d 20px
  );
  background-size: 28px 28px;
  animation: hazard-scroll 0.65s linear infinite;
}
.hazard-stripes-black {
  background-image: repeating-linear-gradient(
    -45deg,
    #000000,
    #000000 10px,
    #ff2b1d 10px,
    #ff2b1d 20px
  );
  background-size: 28px 28px;
  animation: hazard-scroll 0.65s linear infinite;
}
.nerv-text-shadow-orange {
  text-shadow: 0 0 4px rgba(255, 153, 0, 0.4);
}
.nerv-text-shadow-red {
  text-shadow: 0 0 4px rgba(255, 43, 29, 0.45);
}
.nerv-text-shadow-green {
  text-shadow: 0 0 4px rgba(0, 255, 0, 0.38);
}
.nerv-text-shadow-cyan {
  text-shadow: 0 0 4px rgba(0, 246, 255, 0.42);
}
.nerv-border-glow-orange {
  box-shadow: 0 0 0 1px rgba(255, 153, 0, 0.16),
    inset 0 0 0 1px rgba(255, 153, 0, 0.06);
}
.nerv-border-glow-red {
  box-shadow: 0 0 0 1px rgba(255, 43, 29, 0.18),
    inset 0 0 0 1px rgba(255, 43, 29, 0.06);
}
@layer components {
  .camera-overlay-plate {
    position: relative;
    display: inline-flex;
    max-width: 100%;
    padding: 2px;
    border: 1px solid var(--overlay-main, #ff9900);
    border-radius: var(--overlay-radius, 0.6rem);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(8, 8, 8, 0.82)),
      var(--overlay-surface, rgba(255, 153, 0, 0.08));
    box-shadow: 0 0 0 1px var(--overlay-glow, rgba(255, 153, 0, 0.16)),
      0 0 14px var(--overlay-glow, rgba(255, 153, 0, 0.16));
  }
  .camera-overlay-plate::before {
    content: "";
    position: absolute;
    inset: 2px;
    border: 1px solid var(--overlay-main-soft, rgba(255, 153, 0, 0.55));
    border-radius: calc(var(--overlay-radius, 0.6rem) - 2px);
    opacity: 0.96;
    pointer-events: none;
  }
  .camera-overlay-plate__body {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding: 0.34rem 0.56rem 0.42rem;
  }
  .camera-overlay-meta {
    font-family: var(--font-nerv-display);
    font-size: 0.64rem;
    line-height: 1;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--overlay-main, #ff9900);
    opacity: 0.92;
  }
  .camera-overlay-title {
    font-family: var(--font-nerv-display);
    font-size: clamp(1rem, 1.4vw, 1.6rem);
    line-height: 0.9;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--overlay-main, #ff9900);
    text-shadow: 0 0 12px var(--overlay-glow, rgba(255, 153, 0, 0.16));
  }
  .camera-overlay-detail {
    font-family: var(--font-nerv-mono);
    font-size: 0.62rem;
    line-height: 1.2;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--overlay-main, #ff9900);
    opacity: 0.8;
  }
  .camera-overlay-live {
    display: inline-flex;
    align-items: center;
    gap: 0.28rem;
    font-family: var(--font-nerv-display);
    font-size: 0.88rem;
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--overlay-main, #ff9900);
    text-shadow: 0 0 8px var(--overlay-glow, rgba(255, 153, 0, 0.16));
  }
  .camera-overlay-live::before {
    content: "";
    width: 0.42rem;
    height: 0.42rem;
    border-radius: 999px;
    background: var(--overlay-main, #ff9900);
    box-shadow: 0 0 8px var(--overlay-glow, rgba(255, 153, 0, 0.16));
  }
  .camera-overlay-cross {
    position: absolute;
    width: 1rem;
    height: 1rem;
    opacity: 0.6;
  }
  .camera-overlay-cross::before,
  .camera-overlay-cross::after {
    content: "";
    position: absolute;
    inset: 0;
    top: 50%;
    height: 1px;
    background: var(--overlay-main, #ff9900);
    transform-origin: center;
  }
  .camera-overlay-cross::before {
    transform: translateY(-50%) rotate(45deg);
  }
  .camera-overlay-cross::after {
    transform: translateY(-50%) rotate(-45deg);
  }
}
.nerv-page-shell {
  position: relative;
  isolation: isolate;
}
.nerv-page-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0.3;
  background: linear-gradient(
      90deg,
      transparent 0,
      transparent calc(100% - 1px),
      rgba(255, 153, 0, 0.04) calc(100% - 1px)
    ),
    linear-gradient(
      180deg,
      transparent 0,
      transparent calc(100% - 1px),
      rgba(255, 153, 0, 0.04) calc(100% - 1px)
    );
  background-size: 96px 96px;
}
.nerv-page-frame {
  width: min(100%, 1520px);
  margin-inline: auto;
  padding-inline: clamp(0.875rem, 1.6vw, 1.5rem);
}
.nerv-topbar {
  position: sticky;
  top: 0;
  z-index: 60;
  border-bottom: 1px solid var(--line-strong);
  background: linear-gradient(180deg, rgba(15, 15, 15, 0.96), rgba(6, 6, 6, 0.94)),
    rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(8px);
}
.nerv-panel {
  position: relative;
  border: 1px solid rgba(255, 153, 0, 0.14);
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.9), rgba(4, 4, 4, 0.92)),
    rgba(10, 10, 10, 0.9);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.015),
    0 0 0 1px rgba(255, 153, 0, 0.03);
}
.nerv-panel::before,
.nerv-panel::after {
  content: "";
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 153, 0, 0.18),
    transparent
  );
}
.nerv-panel::before {
  top: 0;
}
.nerv-panel::after {
  bottom: 0;
}
.nerv-section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.5rem;
  border-left: 1px solid rgba(255, 153, 0, 0.4);
  border-right: 1px solid rgba(255, 153, 0, 0.18);
  background: rgba(0, 0, 0, 0.92);
  color: var(--color-nerv-orange);
  font-family: var(--font-nerv-display);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.nerv-section-label::before {
  content: "";
  width: 0.42rem;
  height: 0.42rem;
  background: currentColor;
}
.nerv-caption {
  color: rgba(227, 221, 212, 0.44);
  font-family: var(--font-nerv-mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.nerv-microcopy {
  color: rgba(227, 221, 212, 0.72);
  font-family: var(--font-nerv-mono);
  font-size: 0.72rem;
  line-height: 1.6;
}
.nerv-data-label {
  color: rgba(227, 221, 212, 0.38);
  font-family: var(--font-nerv-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}
.docs-main {
  padding-top: 3.25rem;
}
.docs-content {
  width: min(100%, 78rem);
  margin-inline: auto;
  padding: 1.5rem 1rem 3rem;
}
.docs-mdx > h1 {
  margin-bottom: 0.75rem;
  color: var(--color-nerv-orange);
  font-family: var(--font-nerv-display);
  font-size: clamp(2.8rem, 4.2vw, 4.25rem);
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}
.docs-mdx > h2 {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-nerv-orange);
  font-family: var(--font-nerv-display);
  font-size: clamp(1.75rem, 2.4vw, 2.45rem);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.docs-mdx > h3 {
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-nerv-green);
  font-family: var(--font-nerv-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.docs-mdx > p,
.docs-mdx > ul,
.docs-mdx > table {
  max-width: 88ch;
}
.docs-mdx > p {
  color: rgba(227, 221, 212, 0.78);
  font-size: 0.8125rem;
  line-height: 1.75rem;
}
.docs-mdx p code,
.docs-mdx li code,
.docs-mdx table code {
  color: var(--color-nerv-cyan);
  font-family: var(--font-nerv-mono);
}
.docs-mdx > ul {
  margin-block: 1rem;
  padding-left: 1.25rem;
}
.docs-mdx > ul > li {
  color: rgba(227, 221, 212, 0.74);
  font-size: 0.8125rem;
}
.docs-mdx > ul > li + li {
  margin-top: 0.5rem;
}
.docs-mdx > table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.docs-mdx > table th {
  border: 1px solid rgba(78, 78, 78, 0.7);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.375rem 0.5rem;
  color: var(--color-nerv-orange);
  font-family: var(--font-nerv-display);
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-align: left;
  text-transform: uppercase;
}
.docs-mdx > table td {
  border: 1px solid rgba(78, 78, 78, 0.6);
  padding: 0.375rem 0.5rem;
  vertical-align: top;
  color: rgba(227, 221, 212, 0.76);
  font-size: 0.6875rem;
}
.docs-component-preview :where(h1, h2, h3, p, ul, li, table, th, td, code) {
  max-width: none;
}
@keyframes hazard-scroll {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 28px 0;
  }
}
@keyframes nerv-banner-stripe-forward {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 36px 0;
  }
}
@keyframes nerv-banner-stripe-reverse {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -36px 0;
  }
}
.nerv-banner-stripe {
  background-size: 36px 36px;
  will-change: background-position;
}
.nerv-banner-stripe-forward {
  animation: nerv-banner-stripe-forward 1.08s linear infinite;
}
.nerv-banner-stripe-reverse {
  animation: nerv-banner-stripe-reverse 1.08s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .nerv-banner-stripe-forward,
  .nerv-banner-stripe-reverse {
    animation: none;
  }
}
@keyframes nerv-flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.88;
  }
  52% {
    opacity: 0.45;
  }
  54% {
    opacity: 0.94;
  }
  58% {
    opacity: 1;
  }
}
@keyframes nerv-blink-hard {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
@keyframes nerv-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
@keyframes nerv-glow {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.18);
  }
}
@keyframes cursor-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
@keyframes typewriter-cursor {
  0%,
  50% {
    border-color: currentColor;
  }
  51%,
  100% {
    border-color: transparent;
  }
}
@keyframes data-scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
@media (min-width: 1024px) {
  .docs-main {
    padding-left: calc(var(--docs-sidebar-width, 19rem) + 1px);
    padding-top: 0;
  }
  .docs-sidebar-shell {
    width: var(--docs-sidebar-width, 19rem);
  }
  .docs-content {
    padding: 2rem 2rem 4rem;
  }
  .docs-mdx > table {
    table-layout: auto;
  }
  .docs-mdx > table td {
    font-size: 0.75rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  body::after {
    display: none;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
    }
  }
}
`;var V2=`:host{display:block;--color-nerv-black:#0e1523;--color-nerv-panel:#151e2d;--color-nerv-dark-gray:#1b2736;--color-nerv-mid-gray:#3d4855;--color-nerv-cyan:#bbc9a4;--color-nerv-red:#ff7664;--color-nerv-orange:#e2bc78;--color-nerv-white:#ede8d8;--font-nerv-display:'Barlow Condensed',sans-serif;--font-nerv-body:Barlow,sans-serif;--font-nerv-mono:'IBM Plex Mono',monospace;color:#ede8d8;font:12px Barlow,Arial,sans-serif;line-height:1.4}
*{box-sizing:border-box}.telemetry{padding:12px}.identity .kicker{font:9px var(--font-nerv-mono);color:#a2acae}.identity h2{font:600 26px/1.1 var(--font-nerv-display);letter-spacing:.6px;margin:5px 0 7px}.identity>span:last-child{font-size:8px!important;letter-spacing:.5px}.mech-frame{height:105px;padding:5px!important;margin:10px 0;background:#202d3c;border:1px solid #3d4855;box-shadow:inset 4px 0 #bbc9a4}.mech{display:grid;place-items:center;height:94px}.mech img,.mech svg{width:94px;height:94px;object-fit:contain;color:#bbc9a4;filter:none}.mech-frame>div.absolute.right-3{display:none}
.meter{--bar:#bbc9a4;margin:10px 0}.meter.amber{--bar:#e2bc78}.meter.critical,.hostile .meter{--bar:#ff7664}.meter>div{display:flex;align-items:baseline;justify-content:space-between;font:9px var(--font-nerv-mono);gap:6px;color:#b3bcb8}.meter b{font-size:15px;font-weight:500;color:var(--bar)}.meter small{font-size:9px;font-weight:400;color:#a2acae}.meter meter{display:block;width:100%;height:5px;border:none;border-radius:0;appearance:none;background:#090f1a;margin-top:6px}.meter meter::-webkit-meter-bar{background:#090f1a;border:0;border-radius:0;height:5px}.meter meter::-webkit-meter-optimum-value{background:var(--bar)}.meter meter::-moz-meter-bar{background:var(--bar)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);margin:12px 0;padding:10px 0;border-block:1px solid #3d4855}.stats>div{padding:0 7px;border-right:1px solid #3d4855}.stats>div:first-child{padding-left:0}.stats>div:last-child{border:0}.stats dt{font:8px var(--font-nerv-mono);color:#b3bcb8}.stats dd{font:24px var(--font-nerv-display);margin:3px 0 0}.stats dd small{font:9px var(--font-nerv-mono)}
.pilot{font-size:11px;color:#b3bcb8;margin:10px 0 2px}.pilot-meters{display:grid;grid-template-columns:1fr 1fr;gap:12px}.pilot-meters .meter{margin:5px 0 10px}.pilot-meters .meter b{font-size:14px}.pilot-meters .meter small{display:none}.traits{display:flex;flex-wrap:wrap;gap:5px;margin:5px 0}.traits span{padding:3px 6px;border:1px solid #65705c;color:#d2ddbd;font-size:9px}.traits:empty{display:none}
.powers{margin-top:12px;padding-top:10px;border-top:1px solid #3d4855}.powers h3{margin:0 0 7px;font:9px var(--font-nerv-mono);color:#b3bcb8;letter-spacing:1px}.powers>div{display:flex;justify-content:space-between;font-size:11px;line-height:1.5;padding:3px 0;color:#b5c9c3}.powers b{font:10px var(--font-nerv-mono);color:#e2bc78}.powers .spent{opacity:.4}.automaton{margin-top:12px;border-top:1px solid #3d4855;padding-top:10px}.automaton strong{font-size:12px;color:#e2bc78}.automaton p{font-size:11px;margin:6px 0}.automaton small{font-size:10px;color:#a2acae}
.journal{max-height:60dvh;overflow:auto;padding:0 5px;scrollbar-width:thin}.journal p{margin:0;padding:9px 0;border-bottom:1px solid #3d4855;font:11px/1.6 var(--font-nerv-mono);color:#c1c8c5}.journal p span{display:block;color:#a2acae;font-size:9px}.journal p.enemy{color:#ff9986}.journal p.ally{color:#c6d4b2}
@media(max-height:700px){.mech-frame{height:78px;margin:8px 0}.mech{height:67px}.mech img,.mech svg{width:67px;height:67px}.telemetry{padding:10px}.identity h2{font-size:23px}.stats{margin:8px 0;padding:7px 0}.stats dd{font-size:21px}.powers{margin-top:8px;padding-top:7px}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}.mech-frame{opacity:1!important}}

.power-reserve{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:10px;padding-top:10px;border-top:1px solid #3d4855;font:8px var(--font-nerv-mono);color:#b3bcb8}.power-reserve b{font-size:11px;font-weight:500;color:#e2bc78}

/* Match the outer command panels inside the isolated telemetry component. */
.identity h2{font-weight:700;letter-spacing:1.2px;color:#ede8d8}.hostile .mech-frame{box-shadow:inset 4px 0 #ff7664}.mech-frame{height:145px}.mech{height:133px}.mech img,.mech svg{width:133px;height:133px}.traits span{background:#27352f}.journal p span{letter-spacing:1px}.power-reserve{border-color:#3d4855}
@media(max-height:700px){.mech-frame{height:96px}.mech,.mech img,.mech svg{height:84px;width:100%}}
/* NERV brackets use inline neon colors; adapt only those decorative strokes. */
.mech-frame{--frame-color:#bbc9a4;border-color:#3d4855!important;box-shadow:inset 3px 0 var(--frame-color)!important}
.hostile .mech-frame{--frame-color:#ff7664}
.mech-frame>.pointer-events-none{border-color:var(--frame-color)!important}
.mech-frame>.h-px{background:var(--frame-color)!important;opacity:.15}
`;var ba={slash:{id:"slash",name:"Taille franche",weapon:"\xC9p\xE9e de r\xE9cup\xE9ration",kind:"melee",minRange:1,range:1,damage:10,accuracy:15,focus:0,tension:0,effects:[]},wrist:{id:"wrist",name:"Rafale de poignet",weapon:"Arme automatique de poignet",minRange:1,range:4,damage:6,accuracy:5,focus:0,tension:0,effects:[]},cleave:{id:"cleave",name:"Frappe d\xE9cisive",weapon:"\xC9p\xE9e de r\xE9cup\xE9ration",kind:"melee",minRange:1,range:1,damage:15,accuracy:5,focus:55,tension:40,effects:[]},snap:{id:"snap",name:"Tir r\xE9flexe",weapon:"Canon automatique 30 mm",minRange:1,range:5,damage:6,accuracy:10,focus:0,tension:0,effects:[]},burst:{id:"burst",name:"Rafale soutenue",weapon:"Canon automatique 30 mm",minRange:1,range:5,damage:9,accuracy:-10,focus:0,tension:35,effects:["Suppression"]},lance:{id:"lance",name:"Lance cin\xE9tique",weapon:"Acc\xE9l\xE9rateur dorsal",minRange:2,range:7,damage:13,accuracy:0,focus:70,tension:55,effects:["Rupture d\u2019armure"]},scatter:{id:"scatter",name:"Vol\xE9e de proximit\xE9",weapon:"Fusil lourd \xE0 dispersion",minRange:1,range:3,damage:8,accuracy:5,focus:0,tension:0,effects:[]},cannon:{id:"cannon",name:"Obus de rupture",weapon:"Canon de si\xE8ge 90 mm",terrainMultiplier:2,minRange:2,range:6,damage:10,accuracy:-10,focus:0,tension:0,effects:["D\xE9g\xE2ts \xD72 au terrain"]},siege:{id:"siege",name:"Salve de si\xE8ge",weapon:"Canon de si\xE8ge 90 mm",minRange:2,range:7,damage:16,accuracy:-15,focus:0,tension:70,effects:["Fracture"]},rifle:{id:"rifle",name:"Tir ajust\xE9",weapon:"Fusil \xE9lectromagn\xE9tique",minRange:2,range:9,damage:8,accuracy:10,focus:0,tension:0,effects:[]},needle:{id:"needle",name:"Tir de pr\xE9cision",weapon:"Fusil \xE9lectromagn\xE9tique",minRange:2,range:9,damage:11,accuracy:20,focus:65,tension:0,effects:["Marquage"]},horizon:{id:"horizon",name:"Ligne d\u2019horizon",weapon:"Fusil \xE9lectromagn\xE9tique",minRange:3,range:10,damage:15,accuracy:-5,focus:80,tension:50,effects:["Perforation"]},carbine:{id:"carbine",name:"Tir de couverture",weapon:"Carabine 20 mm",minRange:1,range:5,damage:5,accuracy:15,focus:0,tension:0,effects:[]},double:{id:"double",name:"Double impact",weapon:"Carabine 20 mm",minRange:1,range:5,damage:7,accuracy:-5,focus:55,tension:0,effects:[]},overload:{id:"overload",name:"D\xE9charge concentr\xE9e",weapon:"Projecteur \xE0 impulsion",minRange:2,range:6,damage:11,accuracy:0,focus:0,tension:60,effects:["Brouillage"]}};ba.smoke={id:"smoke",name:"Grenade de fum\xE9e",weapon:"Lance-grenades fumig\xE8nes",kind:"smoke",minRange:1,range:5,damage:0,accuracy:0,focus:0,tension:0,effects:["5 cases g\xEAnantes en croix \xB7 2 tours"]};var QT={skirmisher:{hp:23,armor:1,evasion:20,mobility:5,attacks:["slash","wrist","cleave"],special:"overdrive"},assault:{hp:26,armor:2,evasion:10,mobility:4,attacks:["snap","burst","lance"],special:"overdrive"},bastion:{hp:38,armor:5,evasion:3,mobility:3,attacks:["scatter","cannon","siege"],special:"shield"},sniper:{hp:22,armor:1,evasion:16,mobility:4,attacks:["rifle","needle","horizon"],special:"composure"},support:{hp:25,armor:2,evasion:12,mobility:4,attacks:["carbine","double","overload"],special:"repair"}};Object.assign(ba,{pike:{id:"pike",name:"Coup de pique",weapon:"Pique m\xE9canique",kind:"melee",minRange:1,range:1,damage:5,accuracy:5,focus:0,tension:0,effects:[]},musket:{id:"musket",name:"Tir de mousquet",weapon:"Mousquet \xE0 vapeur",minRange:1,range:5,damage:4,accuracy:-5,focus:0,tension:0,effects:[]},grenade:{id:"grenade",name:"Tir de grenade",weapon:"Lance-grenades",minRange:2,range:4,damage:6,accuracy:-10,focus:0,tension:0,effects:[]}});Object.assign(QT,{pikeman:{hp:10,armor:1,evasion:3,mobility:4,attacks:["pike"],automaton:!0},musketeer:{hp:8,armor:0,evasion:5,mobility:3,attacks:["musket"],automaton:!0},grenadier:{hp:11,armor:1,evasion:2,mobility:3,attacks:["grenade"],automaton:!0}});var $=G(er(),1),O2=new Map;function _2(e,t){let r=O2.get(e);if(!r){let n=document.getElementById(e),a=n.attachShadow({mode:"open"}),o=document.createElement("style"),i=document.createElement("div");o.textContent=R2+`
`+V2,a.append(o,i),r=(0,z2.createRoot)(i),O2.set(e,r)}r.render((0,$.jsx)(Gp,{reducedMotion:"user",children:t}))}function o0({label:e,value:t,max:r=100,tone:n=""}){return(0,$.jsxs)("div",{className:`meter ${n}`,children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{children:e}),(0,$.jsxs)("b",{children:[t,(0,$.jsxs)("small",{children:[" / ",r]})]})]}),(0,$.jsx)("meter",{"aria-label":e,min:0,max:r,value:t})]})}function cF({u:e,portrait:t,position:r,covered:n}){let a=e.team==="enemy",o=e.hp<=0?"HORS COMBAT":a?"HOSTILE":e.done?"ACTIV\xC9":e.moved?"EN POSITION":"DISPONIBLE";_2("inspector",(0,$.jsxs)("section",{className:`telemetry ${a?"hostile":""}`,"aria-label":`T\xE9l\xE9m\xE9trie de ${e.name}`,children:[(0,$.jsxs)("div",{className:"identity",children:[(0,$.jsxs)("span",{className:"kicker",children:[e.role," \xB7 ",r]}),(0,$.jsx)("h2",{children:e.name}),(0,$.jsx)(C2,{label:o,variant:a?"danger":e.done?"warning":"info",size:"sm"})]}),(0,$.jsx)(A2,{color:a?"red":"cyan",showCrosshairs:!1,bracketSize:10,className:"mech-frame",children:(0,$.jsx)("div",{className:"mech",dangerouslySetInnerHTML:{__html:t}})}),(0,$.jsx)(o0,{label:"INT\xC9GRIT\xC9",value:e.hp,max:e.maxHp,tone:e.hp/e.maxHp<=.3?"critical":""}),(0,$.jsxs)("dl",{className:"stats",children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("dt",{children:"MOBILIT\xC9"}),(0,$.jsx)("dd",{children:e.mobility})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("dt",{children:"ARMURE"}),(0,$.jsx)("dd",{children:e.armor})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("dt",{children:"\xC9VASION"}),(0,$.jsxs)("dd",{children:[e.evasion,(0,$.jsx)("small",{children:" %"})]})]})]}),!e.automaton&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("p",{className:"pilot",children:e.pilot.name}),(0,$.jsxs)("div",{className:"pilot-meters",children:[(0,$.jsx)(o0,{label:"FOCUS",value:e.pilot.focus}),(0,$.jsx)(o0,{label:"TENSION",value:e.pilot.tension,tone:"amber"})]})]}),(0,$.jsxs)("div",{className:"traits",children:[e.passives?.includes("grapple")&&(0,$.jsx)("span",{children:"Grappin"}),e.passives?.includes("stealth")&&(0,$.jsx)("span",{children:"Furtivit\xE9"}),n&&(0,$.jsx)("span",{children:"Terrain g\xEAnant"}),e.shield&&(0,$.jsx)("span",{children:"Forteresse"}),e.curvedShot&&(0,$.jsx)("span",{children:"Tir courb\xE9 pr\xEAt"})]}),e.automaton?(0,$.jsxs)("div",{className:"automaton",children:[(0,$.jsx)("strong",{children:ba[e.attacks[0]].name}),(0,$.jsxs)("p",{children:["Port\xE9e ",ba[e.attacks[0]].minRange,"\u2013",ba[e.attacks[0]].range," \xB7 d\xE9g\xE2ts ",ba[e.attacks[0]].damage]}),(0,$.jsx)("small",{children:"Aucun pouvoir"})]}):(0,$.jsxs)("div",{className:"power-reserve",children:[(0,$.jsx)("span",{children:"CHARGES DE POUVOIR"}),(0,$.jsxs)("b",{children:[e.pilot.powers.reduce((i,l)=>i+l.charges,0)," / ",e.pilot.powers.reduce((i,l)=>i+l.maxCharges,0)]})]})]}))}function uF(e){_2("logs",(0,$.jsx)("section",{className:"journal","aria-label":"Transmissions du combat",children:e.slice().reverse().map((t,r)=>(0,$.jsxs)("p",{className:t.kind,children:[(0,$.jsx)("span",{children:t.kind==="enemy"?"HOSTILE":t.kind==="ally"?"RAVEN":"QG"}),t.text]},r))}))}export{uF as renderJournal,cF as renderTelemetry};
/*! For license information please see hud.js.LEGAL.txt */
