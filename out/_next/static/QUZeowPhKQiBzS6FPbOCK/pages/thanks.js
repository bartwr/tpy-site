(window.webpackJsonp=window.webpackJsonp||[]).push([[65,10,23,78],{"2qu3":function(t,e,r){"use strict";var n=r("lwsE"),o=r("W8MJ");function i(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=u(r("q1tI")),c=r("8L3h"),s=r("jwwS"),f=[],d=[],h=!1;function p(t){var e=t(),r={loading:!0,loaded:null,error:null};return r.promise=e.then((function(t){return r.loading=!1,r.loaded=t,t})).catch((function(t){throw r.loading=!1,r.error=t,t})),r}function y(t){var e={loading:!1,loaded:{},error:null},r=[];try{Object.keys(t).forEach((function(n){var o=p(t[n]);o.loading?e.loading=!0:(e.loaded[n]=o.loaded,e.error=o.error),r.push(o.promise),o.promise.then((function(t){e.loaded[n]=t})).catch((function(t){e.error=t}))}))}catch(n){e.error=n}return e.promise=Promise.all(r).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function m(t,e){return l.default.createElement((r=t)&&r.__esModule?r.default:r,e);var r}function v(t,e){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},e),n=null;function o(){if(!n){var e=new g(t,r);n={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return n.promise()}if(!h&&"function"===typeof r.webpack){var a=r.webpack();d.push((function(t){var e,r=i(a);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(-1!==t.indexOf(n))return o()}}catch(u){r.e(u)}finally{r.f()}}))}var u=function(t,e){o();var i=l.default.useContext(s.LoadableContext),a=c.useSubscription(n);return l.default.useImperativeHandle(e,(function(){return{retry:n.retry}})),i&&Array.isArray(r.modules)&&r.modules.forEach((function(t){i(t)})),a.loading||a.error?l.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?r.render(a.loaded,t):null};return u.preload=function(){return o()},u.displayName="LoadableComponent",l.default.forwardRef(u)}var g=function(){function t(e,r){n(this,t),this._loadFn=e,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,r=this._opts;e.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){t._update(),t._clearTimeouts()})).catch((function(e){t._update(),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=Object.assign(Object.assign({},this._state),t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function b(t){return v(p,t)}function w(t,e){for(var r=[];t.length;){var n=t.pop();r.push(n(e))}return Promise.all(r).then((function(){if(t.length)return w(t,e)}))}b.Map=function(t){if("function"!==typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(y,t)},b.preloadAll=function(){return new Promise((function(t,e){w(f).then(t,e)}))},b.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var r=function(){return h=!0,e()};w(d,t).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady,e.default=b},Valg:function(t,e,r){"use strict";r.r(e);var n=r("MX0m"),o=r.n(n),i=r("q1tI"),a=r.n(i),u=r("a6RD"),l=r.n(u),c=r("8Kt/"),s=r.n(c),f=(r("YFqc"),a.a.createElement),d=l()((function(){return Promise.all([r.e(2),r.e(0),r.e(3),r.e(32)]).then(r.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),h=(l()((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),l()((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),p=l()((function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}});e.default=function(){return f("div",{className:"jsx-2105762413 root"},f(s.a,null,f("title",{className:"jsx-2105762413"},"Thanks - Technology Park Ypenburg")),f(d,null),f("div",{className:"jsx-2105762413 content-wrapper"},f(h,{size:"large"},"Thank you!")),f(p,null),f(o.a,{id:"2105762413"},[".content-wrapper{padding:140px 12px;width:800px;max-width:100%;margin:0 auto;}"]))}},a6RD:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI")),i=n(r("2qu3")),a=!1;function u(t,e){if(delete e.webpack,delete e.modules,!a)return t(e);var r=e.loading;return function(){return o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}e.noSSR=u,e.default=function(t,e){var r=i.default,n={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};if(t instanceof Promise?n.loader=function(){return t}:"function"===typeof t?n.loader=t:"object"===typeof t&&(n=Object.assign(Object.assign({},n),t)),n=Object.assign(Object.assign({},n),e),"object"===typeof t&&!(t instanceof Promise)&&(t.render&&(n.render=function(e,r){return t.render(r,e)}),t.modules)){r=i.default.Map;var o={},a=t.modules();Object.keys(a).forEach((function(t){var e=a[t];"function"!==typeof e.then?o[t]=e:o[t]=function(){return e.then((function(t){return t.default||t}))}})),n.loader=o}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)}},jwwS:function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("q1tI"));e.LoadableContext=o.createContext(null)},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:d,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",y={};function m(){}function v(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(T([])));_&&_!==r&&n.call(_,i)&&(b=_);var j=g.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,u){var l=s(t[o],t,i);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=g,l(j,"constructor",g),l(g,"constructor",v),v.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},x(O.prototype),l(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(j),l(j,u,"Generator"),l(j,i,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},yAj6:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thanks",function(){return r("Valg")}])}},[["yAj6",5,4,0]]]);