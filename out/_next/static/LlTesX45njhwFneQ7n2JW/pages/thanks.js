(window.webpackJsonp=window.webpackJsonp||[]).push([[59,10,11,19,20,25,26,63,64,72,73],{"4JlD":function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,c){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(i(t),(function(i){var c=encodeURIComponent(n(i))+r;return o(t[i])?a(t[i],(function(t){return c+encodeURIComponent(n(t))})).join(e):c+encodeURIComponent(n(t[i]))})).join(e):c?encodeURIComponent(n(c))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},QmWs:function(t,e,r){var n,o=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function i(t){"string"==typeof t&&(t=y(t));var e=function(t,e,r){var n=t.auth,o=t.hostname,a=t.protocol||"",i=t.pathname||"",c=t.hash||"",s=t.query||"",u=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",t.host?u=n+t.host:o&&(u=n+(~o.indexOf(":")?"["+o+"]":o),t.port&&(u+=":"+t.port)),s&&"object"==typeof s&&(s=e.encode(s));var l=t.search||s&&"?"+s||"";return a&&":"!==a.substr(-1)&&(a+=":"),t.slashes||(!a||r.test(a))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:a,host:u,pathname:i=i.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(t,o,a);return""+e.protocol+e.host+e.pathname+e.search+e.hash}var c="http://",s="w.w",u=c+s,l=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,p=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,h=/^([a-z0-9.+-]*:)?\/\/\/*/i,d=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function v(t){try{return decodeURI(t)}catch(o){return t}}function y(t,e,r){void 0===e&&(e=!1),void 0===r&&(r=!1);var n=(t=t.trim()).match(f);t=n?v(n[1]).replace(/\\/g,"/")+n[2]:v(t).replace(/\\/g,"/"),d.test(t)&&"/"!==t.slice(-1)&&(t+="/");var a=!/(^javascript)/.test(t)&&t.match(p),c=h.test(t),y="";a&&(l.test(a[1])||(y=a[1].toLowerCase(),t=""+a[2]+a[3]),a[2]||(c=!1,l.test(a[1])?(y=a[1],t=""+a[3]):t="//"+a[3]),3!==a[2].length&&1!==a[2].length||(y=a[1],t="/"+a[3]));var m,g=t.match(/(:[0-9]+)/),w="";g&&g[1]&&3===g[1].length&&(t=t.replace(w=g[1],w+"00"));var b={},x="",j="";try{m=new URL(t)}catch(o){x=o,y||r||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{m=new URL(t,u)}catch(t){return b.protocol=y,b.href=y,b}}b.slashes=c&&!j,b.host=m.host===s?"":m.host,b.hostname=m.hostname===s?"":m.hostname.replace(/(\[|\])/g,""),b.protocol=x?y||null:m.protocol,b.search=m.search.replace(/\\/g,"%5C"),b.hash=m.hash.replace(/\\/g,"%5C");var k=t.split("#");!b.search&&~k[0].indexOf("?")&&(b.search="?"),b.hash||""!==k[1]||(b.hash="#"),b.query=e?o.decode(m.search.substr(1)):b.search.substr(1),b.pathname=j+v(m.pathname).replace(/"/g,"%22"),"about:"===b.protocol&&"blank"===b.pathname&&(b.protocol="",b.pathname=""),x&&"/"!==t[0]&&(b.pathname=b.pathname.substr(1)),y&&!l.test(y)&&"/"!==t.slice(-1)&&"/"===b.pathname&&(b.pathname=""),b.path=b.pathname+b.search,b.auth=[m.username,m.password].map(decodeURIComponent).filter(Boolean).join(":"),b.port=m.port,w&&(b.host=b.host.replace(w+"00",w),b.port=b.port.slice(0,-2)),b.href=j?""+b.pathname+b.search+b.hash:i(b);var L=/^(file)/.test(b.href)?["host","hostname"]:[];return Object.keys(b).forEach((function(t){~L.indexOf(t)||(b[t]=b[t]||null)})),b}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,g=/https?|ftp|gopher|file/;function w(t,e){var r="string"==typeof t?y(t):t;t="object"==typeof t?i(t):t;var n=y(e),o="";r.protocol&&!r.slashes&&(o=r.protocol,t=t.replace(r.protocol,""),o+="/"===e[0]||"/"===t[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,e=e.replace(n.protocol,"")));var a=t.match(m);a&&!n.protocol&&(t=t.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(e)&&(o=o.slice(0,-1)));var s=new URL(t,u+"/"),l=new URL(e,s).toString().replace(u,""),f=n.protocol||r.protocol;return f+=r.slashes||n.slashes?"//":"",!o&&f?l=l.replace(c,f):o&&(l=l.replace(c,"")),g.test(l)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),o&&(l=o+("/"===l[0]?l.substr(1):l)),l}e.parse=y,e.format=i,e.resolve=w,e.resolveObject=function(t,e){return y(w(t,e))}},Valg:function(t,e,r){"use strict";r.r(e);var n=r("MX0m"),o=r.n(n),a=r("q1tI"),i=r.n(a),c=r("a6RD"),s=r.n(c),u=r("8Kt/"),l=r.n(u),f=(r("YFqc"),i.a.createElement),p=s()((function(){return Promise.all([r.e(3),r.e(0),r.e(1)]).then(r.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),h=(s()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),s()((function(){return Promise.all([r.e(0),r.e(1),r.e(9)]).then(r.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),d=s()((function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}});e.default=function(){return f("div",{className:"jsx-2105762413 root"},f(l.a,null,f("title",{className:"jsx-2105762413"},"Thanks - Technology Park Ypenburg")),f(p,null),f("div",{className:"jsx-2105762413 content-wrapper"},f(h,{size:"large"},"Thank you!")),f(d,null),f(o.a,{id:"2105762413"},[".content-wrapper{padding:140px 12px;width:800px;max-width:100%;margin:0 auto;}"]))}},YFqc:function(t,e,r){t.exports=r("cTJO")},cTJO:function(t,e,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),c=r("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var u=r("TqRt"),l=r("284h");e.__esModule=!0,e.default=void 0;var f,p=l(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=u(r("nOHt"));function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var m=new Map,g=window.IntersectionObserver,w={};function b(){return f||(g?f=new g((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){a(r,t);var e=s(r);function r(t){var o;return n(this,r),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,r=null,n=null;return function(o,a){if(n&&o===e&&a===r)return n;var i=t(o,a);return e=o,r=a,n=i,i}}((function(t,e){return{href:y(t),as:e?y(e):e}})),o.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,n=e.target;if("A"!==r||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,c=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),c=c?(0,h.resolve)(s,c):i,t.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),r=e.href,n=e.as,o=(0,h.resolve)(t,r);return[o,n?(0,h.resolve)(t,n):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var r=b();return r?(r.observe(t),m.set(t,e),function(){try{r.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),p.default.cloneElement(a,i)}}]),r}(p.Component);e.default=x},"g/15":function(t,e,r){"use strict";var n=r("o0o1");Object.defineProperty(e,"__esModule",{value:!0});var o=r("QmWs");function a(){var t=window.location,e=t.protocol,r=t.hostname,n=t.port;return"".concat(e,"//").concat(r).concat(n?":"+n:"")}function i(t){return"string"===typeof t?t:t.displayName||t.name||"Unknown"}function c(t){return t.finished||t.headersSent}e.execOnce=function(t){var e=this,r=!1,n=null;return function(){if(!r){r=!0;for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n=t.apply(e,a)}return n}},e.getLocationOrigin=a,e.getURL=function(){var t=window.location.href,e=a();return t.substring(e.length)},e.getDisplayName=i,e.isResSent=c,e.loadGetInitialProps=function t(e,r){var o,a,s;return n.async((function(u){for(;;)switch(u.prev=u.next){case 0:u.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,e.getInitialProps){u.next=12;break}if(!r.ctx||!r.Component){u.next=11;break}return u.next=9,n.awrap(t(r.Component,r.ctx));case 9:return u.t0=u.sent,u.abrupt("return",{pageProps:u.t0});case 11:return u.abrupt("return",{});case 12:return u.next=14,n.awrap(e.getInitialProps(r));case 14:if(a=u.sent,!o||!c(o)){u.next=17;break}return u.abrupt("return",a);case 17:if(a){u.next=20;break}throw s='"'.concat(i(e),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(s);case 20:return u.abrupt("return",a);case 22:case"end":return u.stop()}}),null,null,null,Promise)},e.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],e.formatWithValidation=function(t,e){return o.format(t,e)},e.SP="undefined"!==typeof performance,e.ST=e.SP&&"function"===typeof performance.mark&&"function"===typeof performance.measure},kd2E:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var i={};if("string"!==typeof t||0===t.length)return i;var c=/\+/g;t=t.split(e);var s=1e3;a&&"number"===typeof a.maxKeys&&(s=a.maxKeys);var u=t.length;s>0&&u>s&&(u=s);for(var l=0;l<u;++l){var f,p,h,d,v=t[l].replace(c,"%20"),y=v.indexOf(r);y>=0?(f=v.substr(0,y),p=v.substr(y+1)):(f=v,p=""),h=decodeURIComponent(f),d=decodeURIComponent(p),n(i,h)?o(i[h])?i[h].push(d):i[h]=[i[h],d]:i[h]=d}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(U([])));x&&x!==r&&n.call(x,a)&&(w=x);var j=g.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function U(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return m.prototype=g,s(j,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},k(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(j),s(j,c,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=U,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:U(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},s4NR:function(t,e,r){"use strict";e.decode=e.parse=r("kd2E"),e.encode=e.stringify=r("4JlD")},yAj6:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thanks",function(){return r("Valg")}])}},[["yAj6",6,5,0,7]]]);