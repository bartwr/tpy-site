(window.webpackJsonp=window.webpackJsonp||[]).push([[66,11,12,17,25,26,33,34,72,73,74,75,80,81,82,83,84],{"2qu3":function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ");function a(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(r("q1tI")),c=r("8L3h"),l=r("jwwS"),f=[],p=[],h=!1;function d(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function m(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=d(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return u.default.createElement((r=e)&&r.__esModule?r.default:r,t);var r}function y(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new b(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof r.webpack){var i=r.webpack();p.push((function(e){var t,r=a(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(s){r.e(s)}finally{r.f()}}))}var s=function(e,t){o();var a=u.default.useContext(l.LoadableContext),i=c.useSubscription(n);return u.default.useImperativeHandle(t,(function(){return{retry:n.retry}})),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null};return s.preload=function(){return o()},s.displayName="LoadableComponent",u.default.forwardRef(s)}var b=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return y(d,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(m,e)},g.preloadAll=function(){return new Promise((function(e,t){w(f).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};w(p,e).then(r,r)}))},window.__NEXT_PRELOADREADY=g.preloadReady,t.default=g},"4JlD":function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,s){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?a(i(e),(function(i){var s=encodeURIComponent(n(i))+r;return o(e[i])?a(e[i],(function(e){return s+encodeURIComponent(n(e))})).join(t):s+encodeURIComponent(n(e[i]))})).join(t):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},QmWs:function(e,t,r){var n,o=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function i(e){"string"==typeof e&&(e=v(e));var t=function(e,t,r){var n=e.auth,o=e.hostname,a=e.protocol||"",i=e.pathname||"",s=e.hash||"",u=e.query||"",c=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",e.host?c=n+e.host:o&&(c=n+(~o.indexOf(":")?"["+o+"]":o),e.port&&(c+=":"+e.port)),u&&"object"==typeof u&&(u=t.encode(u));var l=e.search||u&&"?"+u||"";return a&&":"!==a.substr(-1)&&(a+=":"),e.slashes||(!a||r.test(a))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),l&&"?"!==l[0]&&(l="?"+l),{protocol:a,host:c,pathname:i=i.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:s}}(e,o,a);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var s="http://",u="w.w",c=s+u,l=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,p=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,h=/^([a-z0-9.+-]*:)?\/\/\/*/i,d=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function m(e){try{return decodeURI(e)}catch(o){return e}}function v(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=(e=e.trim()).match(f);e=n?m(n[1]).replace(/\\/g,"/")+n[2]:m(e).replace(/\\/g,"/"),d.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(p),s=h.test(e),v="";a&&(l.test(a[1])||(v=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(s=!1,l.test(a[1])?(v=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(v=a[1],e="/"+a[3]));var y,b=e.match(/(:[0-9]+)/),g="";b&&b[1]&&3===b[1].length&&(e=e.replace(g=b[1],g+"00"));var w={},_="",j="";try{y=new URL(e)}catch(o){_=o,v||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(j="/",e=e.substr(1));try{y=new URL(e,c)}catch(e){return w.protocol=v,w.href=v,w}}w.slashes=s&&!j,w.host=y.host===u?"":y.host,w.hostname=y.hostname===u?"":y.hostname.replace(/(\[|\])/g,""),w.protocol=_?v||null:y.protocol,w.search=y.search.replace(/\\/g,"%5C"),w.hash=y.hash.replace(/\\/g,"%5C");var O=e.split("#");!w.search&&~O[0].indexOf("?")&&(w.search="?"),w.hash||""!==O[1]||(w.hash="#"),w.query=t?o.decode(y.search.substr(1)):w.search.substr(1),w.pathname=j+m(y.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),_&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),v&&!l.test(v)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[y.username,y.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=y.port,g&&(w.host=w.host.replace(g+"00",g),w.port=w.port.slice(0,-2)),w.href=j?""+w.pathname+w.search+w.hash:i(w);var k=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach((function(e){~k.indexOf(e)||(w[e]=w[e]||null)})),w}var y=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,b=/https?|ftp|gopher|file/;function g(e,t){var r="string"==typeof e?v(e):e;e="object"==typeof e?i(e):e;var n=v(t),o="";r.protocol&&!r.slashes&&(o=r.protocol,e=e.replace(r.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,t=t.replace(n.protocol,"")));var a=e.match(y);a&&!n.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(t)&&(o=o.slice(0,-1)));var u=new URL(e,c+"/"),l=new URL(t,u).toString().replace(c,""),f=n.protocol||r.protocol;return f+=r.slashes||n.slashes?"//":"",!o&&f?l=l.replace(s,f):o&&(l=l.replace(s,"")),b.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),o&&(l=o+("/"===l[0]?l.substr(1):l)),l}t.parse=v,t.format=i,t.resolve=g,t.resolveObject=function(e,t){return v(g(e,t))}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},Valg:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),o=r.n(n),a=r("q1tI"),i=r.n(a),s=r("a6RD"),u=r.n(s),c=r("8Kt/"),l=r.n(c),f=(r("YFqc"),i.a.createElement),p=u()((function(){return Promise.all([r.e(2),r.e(0),r.e(4)]).then(r.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),h=(u()((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),u()((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),d=u()((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}});t.default=function(){return f("div",{className:"jsx-2105762413 root"},f(l.a,null,f("title",{className:"jsx-2105762413"},"Thanks - Technology Park Ypenburg")),f(p,null),f("div",{className:"jsx-2105762413 content-wrapper"},f(h,{size:"large"},"Thank you!")),f(d,null),f(o.a,{id:"2105762413"},[".content-wrapper{padding:140px 12px;width:800px;max-width:100%;margin:0 auto;}"]))}},YFqc:function(e,t,r){e.exports=r("cTJO")},a6RD:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),a=n(r("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var r=t.loading;return function(){return o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=Object.assign(Object.assign({},n),e)),n=Object.assign(Object.assign({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)}},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),s=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var c=r("TqRt"),l=r("284h");t.__esModule=!0,t.default=void 0;var f,p=l(r("q1tI")),h=r("QmWs"),d=r("g/15"),m=c(r("nOHt"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,g={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){a(r,e);var t=u(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),s=s?(0,h.resolve)(u,s):i,e.preventDefault();var c=o.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,h.resolve)(e,r);return[o,n?(0,h.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),p.default.cloneElement(a,i)}}]),r}(p.Component);t.default=_},"g/15":function(e,t,r){"use strict";var n=r("o0o1");Object.defineProperty(t,"__esModule",{value:!0});var o=r("QmWs");function a(){var e=window.location,t=e.protocol,r=e.hostname,n=e.port;return"".concat(t,"//").concat(r).concat(n?":"+n:"")}function i(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}t.execOnce=function(e){var t=this,r=!1,n=null;return function(){if(!r){r=!0;for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n=e.apply(t,a)}return n}},t.getLocationOrigin=a,t.getURL=function(){var e=window.location.href,t=a();return e.substring(t.length)},t.getDisplayName=i,t.isResSent=s,t.loadGetInitialProps=function e(t,r){var o,a,u;return n.async((function(c){for(;;)switch(c.prev=c.next){case 0:c.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,t.getInitialProps){c.next=12;break}if(!r.ctx||!r.Component){c.next=11;break}return c.next=9,n.awrap(e(r.Component,r.ctx));case 9:return c.t0=c.sent,c.abrupt("return",{pageProps:c.t0});case 11:return c.abrupt("return",{});case 12:return c.next=14,n.awrap(t.getInitialProps(r));case 14:if(a=c.sent,!o||!s(o)){c.next=17;break}return c.abrupt("return",a);case 17:if(a){c.next=20;break}throw u='"'.concat(i(t),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(u);case 20:return c.abrupt("return",a);case 22:case"end":return c.stop()}}),null,null,null,Promise)},t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],t.formatWithValidation=function(e,t){return o.format(e,t)},t.SP="undefined"!==typeof performance,t.ST=t.SP&&"function"===typeof performance.mark&&"function"===typeof performance.measure},jwwS:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.LoadableContext=o.createContext(null)},kd2E:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,a){t=t||"&",r=r||"=";var i={};if("string"!==typeof e||0===e.length)return i;var s=/\+/g;e=e.split(t);var u=1e3;a&&"number"===typeof a.maxKeys&&(u=a.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var f,p,h,d,m=e[l].replace(s,"%20"),v=m.indexOf(r);v>=0?(f=m.substr(0,v),p=m.substr(v+1)):(f=m,p=""),h=decodeURIComponent(f),d=decodeURIComponent(p),n(i,h)?o(i[h])?i[h].push(d):i[h]=[i[h],d]:i[h]=d}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,r){"use strict";t.decode=t.parse=r("kd2E"),t.encode=t.stringify=r("4JlD")},yAj6:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thanks",function(){return r("Valg")}])}},[["yAj6",6,5,0,3]]]);