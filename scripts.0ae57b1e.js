!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=function(t){return{ok:!0,result:t}},n=function(t){return{ok:!1,error:t}},r=function(t){return!0===t.ok?Promise.resolve(t.result):Promise.reject(t.error)},o=function(t,e){return!0===e.ok?e.result:t},u=function(t){if(!0===t.ok)return t.result;throw t.error},i=function(t,n){return!0===n.ok?e(t(n.result)):n},a=function(t,n,r){return!1===n.ok?n:!1===r.ok?r:e(t(n.result,r.result))},c=function(t,e){return!0===e.ok?e:n(t(e.error))},s=function(t,e){return!0===e.ok?t(e.result):e},f=(Object.freeze({ok:e,isOk:function(t){return!0===t.ok},err:n,isErr:function(t){return!1===t.ok},asPromise:r,withDefault:o,withException:u,successes:function(t){return t.reduce((function(t,e){return!0===e.ok?t.concat(e.result):t}),[])},map:i,map2:a,mapError:c,andThen:s}),function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)});var l=function(){var e={exports:this},n="[object Arguments]",r="[object Map]",o="[object Object]",u="[object Set]",i=/^\[object .+?Constructor\]$/,a=/^(?:0|[1-9]\d*)$/,c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c[n]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c[r]=c["[object Number]"]=c[o]=c["[object RegExp]"]=c[u]=c["[object String]"]=c["[object WeakMap]"]=!1;var s="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),h="object"==typeof this&&this&&!this.nodeType&&this,p=h&&"object"==typeof e&&e&&!e.nodeType&&e,d=p&&p.exports===h,v=d&&s.process,y=function(){try{return v&&v.binding&&v.binding("util")}catch(t){}}(),b=y&&y.isTypedArray;function g(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function _(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function m(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var w,j,O,x=Array.prototype,k=Function.prototype,A=Object.prototype,E=l["__core-js_shared__"],z=k.toString,T=A.hasOwnProperty,S=(w=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",P=A.toString,L=RegExp("^"+z.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=d?l.Buffer:void 0,D=l.Symbol,N=l.Uint8Array,J=A.propertyIsEnumerable,F=x.splice,H=D?D.toStringTag:void 0,B=Object.getOwnPropertySymbols,$=M?M.isBuffer:void 0,I=(j=Object.keys,O=Object,function(t){return j(O(t))}),R=yt(l,"DataView"),U=yt(l,"Map"),W=yt(l,"Promise"),V=yt(l,"Set"),C=yt(l,"WeakMap"),q=yt(Object,"create"),G=mt(R),K=mt(U),Q=mt(W),X=mt(V),Y=mt(C),Z=D?D.prototype:void 0,tt=Z?Z.valueOf:void 0;function et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new rt;++e<n;)this.add(t[e])}function ut(t){var e=this.__data__=new nt(t);this.size=e.size}function it(t,e){var n=Ot(t),r=!n&&jt(t),o=!n&&!r&&xt(t),u=!n&&!r&&!o&&Tt(t),i=n||r||o||u,a=i?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=a.length;for(var s in t)!e&&!T.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||u&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||_t(s,c))||a.push(s);return a}function at(t,e){for(var n=t.length;n--;)if(wt(t[n][0],e))return n;return-1}function ct(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":H&&H in Object(t)?function(t){var e=T.call(t,H),n=t[H];try{t[H]=void 0;var r=!0}catch(t){}var o=P.call(t);r&&(e?t[H]=n:delete t[H]);return o}(t):function(t){return P.call(t)}(t)}function st(t){return zt(t)&&ct(t)==n}function ft(t,e,i,a,c){return t===e||(null==t||null==e||!zt(t)&&!zt(e)?t!=t&&e!=e:function(t,e,i,a,c,s){var f=Ot(t),l=Ot(e),h=f?"[object Array]":gt(t),p=l?"[object Array]":gt(e),d=(h=h==n?o:h)==o,v=(p=p==n?o:p)==o,y=h==p;if(y&&xt(t)){if(!xt(e))return!1;f=!0,d=!1}if(y&&!d)return s||(s=new ut),f||Tt(t)?pt(t,e,i,a,c,s):function(t,e,n,o,i,a,c){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new N(t),new N(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case r:var s=_;case u:var f=1&o;if(s||(s=m),t.size!=e.size&&!f)return!1;var l=c.get(t);if(l)return l==e;o|=2,c.set(t,e);var h=pt(s(t),s(e),o,i,a,c);return c.delete(t),h;case"[object Symbol]":if(tt)return tt.call(t)==tt.call(e)}return!1}(t,e,h,i,a,c,s);if(!(1&i)){var b=d&&T.call(t,"__wrapped__"),g=v&&T.call(e,"__wrapped__");if(b||g){var w=b?t.value():t,j=g?e.value():e;return s||(s=new ut),c(w,j,i,a,s)}}if(!y)return!1;return s||(s=new ut),function(t,e,n,r,o,u){var i=1&n,a=dt(t),c=a.length,s=dt(e).length;if(c!=s&&!i)return!1;var f=c;for(;f--;){var l=a[f];if(!(i?l in e:T.call(e,l)))return!1}var h=u.get(t);if(h&&u.get(e))return h==e;var p=!0;u.set(t,e),u.set(e,t);var d=i;for(;++f<c;){l=a[f];var v=t[l],y=e[l];if(r)var b=i?r(y,v,l,e,t,u):r(v,y,l,t,e,u);if(!(void 0===b?v===y||o(v,y,n,r,u):b)){p=!1;break}d||(d="constructor"==l)}if(p&&!d){var g=t.constructor,_=e.constructor;g==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(p=!1)}return u.delete(t),u.delete(e),p}(t,e,i,a,c,s)}(t,e,i,a,ft,c))}function lt(t){return!(!Et(t)||function(t){return!!S&&S in t}(t))&&(kt(t)?L:i).test(mt(t))}function ht(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||A,e!==r)return I(t);var e,n,r,o=[];for(var u in Object(t))T.call(t,u)&&"constructor"!=u&&o.push(u);return o}function pt(t,e,n,r,o,u){var i=1&n,a=t.length,c=e.length;if(a!=c&&!(i&&c>a))return!1;var s=u.get(t);if(s&&u.get(e))return s==e;var f=-1,l=!0,h=2&n?new ot:void 0;for(u.set(t,e),u.set(e,t);++f<a;){var p=t[f],d=e[f];if(r)var v=i?r(d,p,f,e,t,u):r(p,d,f,t,e,u);if(void 0!==v){if(v)continue;l=!1;break}if(h){if(!g(e,(function(t,e){if(i=e,!h.has(i)&&(p===t||o(p,t,n,r,u)))return h.push(e);var i}))){l=!1;break}}else if(p!==d&&!o(p,d,n,r,u)){l=!1;break}}return u.delete(t),u.delete(e),l}function dt(t){return function(t,e,n){var r=e(t);return Ot(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,St,bt)}function vt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function yt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(n)?n:void 0}et.prototype.clear=function(){this.__data__=q?q(null):{},this.size=0},et.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},et.prototype.get=function(t){var e=this.__data__;if(q){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return T.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:T.call(e,t)},et.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=q&&void 0===e?"__lodash_hash_undefined__":e,this},nt.prototype.clear=function(){this.__data__=[],this.size=0},nt.prototype.delete=function(t){var e=this.__data__,n=at(e,t);return!(n<0)&&(n==e.length-1?e.pop():F.call(e,n,1),--this.size,!0)},nt.prototype.get=function(t){var e=this.__data__,n=at(e,t);return n<0?void 0:e[n][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var n=this.__data__,r=at(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},rt.prototype.clear=function(){this.size=0,this.__data__={hash:new et,map:new(U||nt),string:new et}},rt.prototype.delete=function(t){var e=vt(this,t).delete(t);return this.size-=e?1:0,e},rt.prototype.get=function(t){return vt(this,t).get(t)},rt.prototype.has=function(t){return vt(this,t).has(t)},rt.prototype.set=function(t,e){var n=vt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ot.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.clear=function(){this.__data__=new nt,this.size=0},ut.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var n=this.__data__;if(n instanceof nt){var r=n.__data__;if(!U||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new rt(r)}return n.set(t,e),this.size=n.size,this};var bt=B?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,u=[];++n<r;){var i=t[n];e(i,n,t)&&(u[o++]=i)}return u}(B(t),(function(e){return J.call(t,e)})))}:function(){return[]},gt=ct;function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||a.test(t))&&t>-1&&t%1==0&&t<e}function mt(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(R&&"[object DataView]"!=gt(new R(new ArrayBuffer(1)))||U&&gt(new U)!=r||W&&"[object Promise]"!=gt(W.resolve())||V&&gt(new V)!=u||C&&"[object WeakMap]"!=gt(new C))&&(gt=function(t){var e=ct(t),n=e==o?t.constructor:void 0,i=n?mt(n):"";if(i)switch(i){case G:return"[object DataView]";case K:return r;case Q:return"[object Promise]";case X:return u;case Y:return"[object WeakMap]"}return e});var jt=st(function(){return arguments}())?st:function(t){return zt(t)&&T.call(t,"callee")&&!J.call(t,"callee")},Ot=Array.isArray;var xt=$||function(){return!1};function kt(t){if(!Et(t))return!1;var e=ct(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function At(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Et(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function zt(t){return null!=t&&"object"==typeof t}var Tt=b?function(t){return function(e){return t(e)}}(b):function(t){return zt(t)&&At(t.length)&&!!c[ct(t)]};function St(t){return null!=(e=t)&&At(e.length)&&!kt(e)?it(t):ht(t);var e}return e.exports=function(t,e){return ft(t,e)},e.exports}.call({}),h=function(t){return Array.isArray(t)},p=function(t){return"object"==typeof t&&null!==t&&!h(t)},d=function(t,e){return"expected "+t+", got "+function(t){switch(typeof t){case"string":return"a string";case"number":return"a number";case"boolean":return"a boolean";case"undefined":return"undefined";case"object":return t instanceof Array?"an array":null===t?"null":"an object";default:return JSON.stringify(t)}}(e)},v=function(t){return t.map((function(t){return"string"==typeof t?"."+t:"["+t+"]"})).join("")},y=function(t,e){var n=e.at,r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n}(e,["at"]);return f({at:t+(n||"")},r)},b=function(){function t(e){var n=this;this.decode=e,this.run=function(t){return c((function(e){return{kind:"DecoderError",input:t,at:"input"+(e.at||""),message:e.message||""}}),n.decode(t))},this.runPromise=function(t){return r(n.run(t))},this.runWithException=function(t){return u(n.run(t))},this.map=function(e){return new t((function(t){return i(e,n.decode(t))}))},this.andThen=function(e){return new t((function(t){return s((function(n){return e(n).decode(t)}),n.decode(t))}))},this.where=function(e,r){return n.andThen((function(n){return e(n)?t.succeed(n):t.fail(r)}))}}return t.string=function(){return new t((function(t){return"string"==typeof t?e(t):n({message:d("a string",t)})}))},t.number=function(){return new t((function(t){return"number"==typeof t?e(t):n({message:d("a number",t)})}))},t.boolean=function(){return new t((function(t){return"boolean"==typeof t?e(t):n({message:d("a boolean",t)})}))},t.constant=function(r){return new t((function(t){return l(t,r)?e(r):n({message:"expected "+JSON.stringify(r)+", got "+JSON.stringify(t)})}))},t.object=function(r){return new t((function(t){if(p(t)&&r){var o={};for(var u in r)if(r.hasOwnProperty(u)){var i=r[u].decode(t[u]);if(!0!==i.ok)return void 0===t[u]?n({message:"the key '"+u+"' is required but was not present"}):n(y("."+u,i.error));void 0!==i.result&&(o[u]=i.result)}return e(o)}return p(t)?e(t):n({message:d("an object",t)})}))},t.array=function(r){return new t((function(t){if(h(t)&&r){return t.reduce((function(t,e,n){return a((function(t,e){return t.concat([e])}),t,function(t,e){return c((function(t){return y("["+e+"]",t)}),r.decode(t))}(e,n))}),e([]))}return h(t)?e(t):n({message:d("an array",t)})}))},t.tuple=function(r){return new t((function(t){if(h(t)){if(t.length!==r.length)return n({message:"expected a tuple of length "+r.length+", got one of length "+t.length});for(var o=[],u=0;u<r.length;u++){var i=r[u].decode(t[u]);if(!i.ok)return n(y("["+u+"]",i.error));o[u]=i.result}return e(o)}return n({message:d("a tuple of length "+r.length,t)})}))},t.union=function(e,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return t.oneOf.apply(t,[e,n].concat(r))},t.intersection=function(n,r){for(var o=[],u=2;u<arguments.length;u++)o[u-2]=arguments[u];return new t((function(t){return[n,r].concat(o).reduce((function(e,n){return a(Object.assign,e,n.decode(t))}),e({}))}))},t.anyJson=function(){return new t((function(t){return e(t)}))},t.unknownJson=function(){return new t((function(t){return e(t)}))},t.dict=function(r){return new t((function(t){if(p(t)){var o={};for(var u in t)if(t.hasOwnProperty(u)){var i=r.decode(t[u]);if(!0!==i.ok)return n(y("."+u,i.error));o[u]=i.result}return e(o)}return n({message:d("an object",t)})}))},t.optional=function(n){return new t((function(t){return void 0===t?e(void 0):n.decode(t)}))},t.oneOf=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new t((function(t){for(var r=[],o=0;o<e.length;o++){var u=e[o].decode(t);if(!0===u.ok)return u;r[o]=u.error}var i=r.map((function(t){return"at error"+(t.at||"")+": "+t.message})).join('", "');return n({message:'expected a value matching one of the decoders, got the errors ["'+i+'"]'})}))},t.withDefault=function(n,r){return new t((function(t){return e(o(n,r.decode(t)))}))},t.valueAt=function(e,r){return new t((function(t){for(var o=t,u=0;u<e.length;u++){if(void 0===o)return n({at:v(e.slice(0,u+1)),message:"path does not exist"});if("string"==typeof e[u]&&!p(o))return n({at:v(e.slice(0,u+1)),message:d("an object",o)});if("number"==typeof e[u]&&!h(o))return n({at:v(e.slice(0,u+1)),message:d("an array",o)});o=o[e[u]]}return c((function(t){return void 0===o?{at:v(e),message:"path does not exist"}:y(v(e),t)}),r.decode(o))}))},t.succeed=function(n){return new t((function(t){return e(n)}))},t.fail=function(e){return new t((function(t){return n({message:e})}))},t.lazy=function(e){return new t((function(t){return e().decode(t)}))},t}(),g=b.string,_=b.number,m=b.boolean,w=(b.anyJson,b.unknownJson,b.constant),j=b.object,O=b.array,x=b.tuple,k=b.dict,A=b.optional,E=(b.oneOf,b.union),z=b.intersection,T=(b.withDefault,b.valueAt,b.succeed,b.fail),S=b.lazy;function P(t,e){var n=document.querySelector(t);if(null==n)throw new Error('Element "'.concat(t,'" is not found'));if(!(n instanceof e))throw new TypeError('Element "'.concat(t,'" is not ').concat(e.name));return n}function L(t,e){return A(e).map((function(e){return e||t}))}function M(t,e,n){return O(n).where((function(e){return e.length<=t}),"expected an array of length ".concat(t)).map((function(n){for(var r=0;r<t;r++)n[r]||(n[r]=e);return n}))}function D(t,e){return E(e.map((function(t){return[t,t,t]})),M(3,t,e))}var N,J,F=E(w("+"),w("-"),w("*"),w("/"),w("^"),w("%")),H=g().where((function(t){return/^#\w+/.test(t)}),"expected a valid reference"),B=g().where((function(t){return(0==(e=function(t,e){var n=["minecraft",t],r=t.indexOf(e);return r>=0&&(n[1]=t.substring(r+1,t.length),r>=1&&(n[0]=t.substring(0,r))),n}(t,":"))[0].length?"minecraft":e[0]).split("").map((function(t){return t.charCodeAt(0)})).every((function(t){return 95==t||45==t||t>=97&&t<=122||t>=48&&t<=57||46==t}))&&e[1].split("").map((function(t){return t.charCodeAt(0)})).every((function(t){return 95==t||45==t||t>=97&&t<=122||t>=48&&t<=57||47==t||46==t}));var e}),"expected a valid identifier"),$=_().where((function(t){return(0|t)==t}),"expected integer"),I=E(H,_()),R=S((function(){return E(I,x([R,F,R]))})),U=k(R),W=E(M(4,0,$),j({u:L(0,$),v:L(0,$),w:L(0,$),h:L(0,$)})),V=function(t,e){return z(j({type:e?A(B).map((function(t){return t||e})):B}),j(t))},C=function(t){return function(e){return E(H,j({type:A(B)}).andThen((function(n){var r=n.type||e;return r in t?t[r]():T('expected a known component type, got "'.concat(r,'"'))})))}},q=C({"mson:compound":function(){return K},"mson:planar":function(){return Y},"mson:slot":function(){return Z}}),G=C({"mson:box":function(){return tt},"mson:plane":function(){return nt},"mson:cone":function(){return rt},"mson:quads":function(){return it}}),K=V({center:L([0,0,0],D(0,I)),offset:L([0,0,0],D(0,I)),rotate:L([0,0,0],D(0,I)),mirror:L([!1,!1,!1],D(!1,m())),visible:L(!0,m()),texture:A(W),name:A(g()),cubes:L([],O(G("mson:box"))),children:L([],O(q("mson:compound")))},"mson:compound"),Q=E(x([_(),_(),_(),$,$]),x([_(),_(),_(),$,$,I,I])),X=E(O(Q),Q),Y=z(K,j({stretch:L([0,0,0],D(0,_())),up:A(X),down:A(X),west:A(X),east:A(X),north:A(X),south:A(X)})),Z=V({implementation:g(),content:E(B,S((function(){return at}))),name:g(),texture:L([0,0,0,0],W),locals:L({},U)}),tt=V({from:L([0,0,0],D(0,I)),size:L([0,0,0],D(0,I)),texture:A(W),stretch:A(D(0,_())),mirror:A(m())},"mson:box"),et=E(w("none"),w("up"),w("down"),w("west"),w("east"),w("north"),w("south")),nt=V({position:L([0,0,0],D(0,I)),size:L([0,0],(N=0,J=I,E(J.map((function(t){return[t,t]})),M(2,N,J)))),texture:A(W),mirror:A(D(!1,m())),stretch:A(D(0,_())),face:et}),rt=z(tt,j({taper:L(0,_())})),ot=E(x([_(),_(),_(),$,$]),j({x:L(0,_()),y:L(0,_()),z:L(0,_()),u:L(0,$),v:L(0,$)})),ut=j({x:L(0,$),y:L(0,$),w:L(0,$),h:L(0,$),vertices:O($)}),it=V({u:$,v:$,vertices:O(ot),faces:O(ut)}),at=j().andThen((function(t){var e={};for(var n in t)switch(n){case"parent":case"scale":case"texture":case"locals":break;default:e[n]=t[n],delete t[n]}return t.components=e,j({parent:A(B),scale:L(0,_()),texture:L([0,0,0,0],W),locals:L({},U),components:k(q("mson:compound"))})})),ct=P("#json-input-file",HTMLInputElement),st=P("#json-input-text",HTMLTextAreaElement),ft=P("#json-parse-error",HTMLPreElement),lt=P("#json-parse-output",HTMLPreElement);function ht(t){try{var e=JSON.parse(t),n=at.runWithException(e),r=JSON.stringify(n,null,4);return lt.innerText=r,ft.innerHTML="",!0}catch(t){if(t instanceof Error)ft.innerHTML=t.message;else if("DecoderError"===(a=t).kind&&"string"==typeof a.at&&"string"==typeof a.message){var o=t.kind,u=t.at,i=t.message;console.error(t),ft.innerHTML="".concat(o," at ").concat(u,": ").concat(i)}else"string"==typeof t&&(ft.innerHTML=t)}var a;return!1}ct.addEventListener("change",(function(){if(!ct.files)throw new Error("No files property");var t=ct.files[0];if(!t)throw new Error("No file");var e=new FileReader;e.onload=function(){var t=e.result;if("string"!=typeof t)throw new TypeError("Loaded file is not string");ht(t)},e.readAsText(t)})),st.addEventListener("input",(function(){if(ht(this.value)){var t=this.selectionStart,e=this.selectionEnd,n=this.value.length;this.value=JSON.stringify(JSON.parse(this.value),null,4);var r=this.value.length-n;this.setSelectionRange(t+r,e+r)}}))}();
//# sourceMappingURL=scripts.0ae57b1e.js.map