(window.webpackJsonp=window.webpackJsonp||[]).push([[63,11,12,17,25,26,33,34,72,73,74,75,80,81,82,83,84],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n("q1tI")),l=n("8L3h"),c=n("jwwS"),f=[],p=[],h=!1;function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=d(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return s.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function y(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var i=n.webpack();p.push((function(e){var t,n=a(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(e,t){o();var a=s.default.useContext(c.LoadableContext),i=l.useSubscription(r);return s.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.loading||i.error?s.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null};return u.preload=function(){return o()},u.displayName="LoadableComponent",s.default.forwardRef(u)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return y(d,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(m,e)},g.preloadAll=function(){return new Promise((function(e,t){w(f).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};w(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady,t.default=g},"4JlD":function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,u){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?a(i(e),(function(i){var u=encodeURIComponent(r(i))+n;return o(e[i])?a(e[i],(function(e){return u+encodeURIComponent(r(e))})).join(t):u+encodeURIComponent(r(e[i]))})).join(t):u?encodeURIComponent(r(u))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},QmWs:function(e,t,n){var r,o=(r=n("s4NR"))&&"object"==typeof r&&"default"in r?r.default:r,a=/https?|ftp|gopher|file/;function i(e){"string"==typeof e&&(e=v(e));var t=function(e,t,n){var r=e.auth,o=e.hostname,a=e.protocol||"",i=e.pathname||"",u=e.hash||"",s=e.query||"",l=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?l=r+e.host:o&&(l=r+(~o.indexOf(":")?"["+o+"]":o),e.port&&(l+=":"+e.port)),s&&"object"==typeof s&&(s=t.encode(s));var c=e.search||s&&"?"+s||"";return a&&":"!==a.substr(-1)&&(a+=":"),e.slashes||(!a||n.test(a))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),{protocol:a,host:l,pathname:i=i.replace(/[?#]/g,encodeURIComponent),search:c=c.replace("#","%23"),hash:u}}(e,o,a);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var u="http://",s="w.w",l=u+s,c=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,p=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,h=/^([a-z0-9.+-]*:)?\/\/\/*/i,d=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function m(e){try{return decodeURI(e)}catch(o){return e}}function v(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=(e=e.trim()).match(f);e=r?m(r[1]).replace(/\\/g,"/")+r[2]:m(e).replace(/\\/g,"/"),d.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(p),u=h.test(e),v="";a&&(c.test(a[1])||(v=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(u=!1,c.test(a[1])?(v=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(v=a[1],e="/"+a[3]));var y,b=e.match(/(:[0-9]+)/),g="";b&&b[1]&&3===b[1].length&&(e=e.replace(g=b[1],g+"00"));var w={},_="",O="";try{y=new URL(e)}catch(o){_=o,v||n||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(O="/",e=e.substr(1));try{y=new URL(e,l)}catch(e){return w.protocol=v,w.href=v,w}}w.slashes=u&&!O,w.host=y.host===s?"":y.host,w.hostname=y.hostname===s?"":y.hostname.replace(/(\[|\])/g,""),w.protocol=_?v||null:y.protocol,w.search=y.search.replace(/\\/g,"%5C"),w.hash=y.hash.replace(/\\/g,"%5C");var j=e.split("#");!w.search&&~j[0].indexOf("?")&&(w.search="?"),w.hash||""!==j[1]||(w.hash="#"),w.query=t?o.decode(y.search.substr(1)):w.search.substr(1),w.pathname=O+m(y.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),_&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),v&&!c.test(v)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[y.username,y.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=y.port,g&&(w.host=w.host.replace(g+"00",g),w.port=w.port.slice(0,-2)),w.href=O?""+w.pathname+w.search+w.hash:i(w);var k=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach((function(e){~k.indexOf(e)||(w[e]=w[e]||null)})),w}var y=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,b=/https?|ftp|gopher|file/;function g(e,t){var n="string"==typeof e?v(e):e;e="object"==typeof e?i(e):e;var r=v(t),o="";n.protocol&&!n.slashes&&(o=n.protocol,e=e.replace(n.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&r.protocol&&(o="",r.slashes||(o=r.protocol,t=t.replace(r.protocol,"")));var a=e.match(y);a&&!r.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(t)&&(o=o.slice(0,-1)));var s=new URL(e,l+"/"),c=new URL(t,s).toString().replace(l,""),f=r.protocol||n.protocol;return f+=n.slashes||r.slashes?"//":"",!o&&f?c=c.replace(u,f):o&&(c=c.replace(u,"")),b.test(c)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==c.slice(-1)||(c=c.slice(0,-1)),o&&(c=o+("/"===c[0]?c.substr(1):c)),c}t.parse=v,t.format=i,t.resolve=g,t.resolveObject=function(e,t){return v(g(e,t))}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},YFqc:function(e,t,n){e.exports=n("cTJO")},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),i=!1;function u(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var l=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var f,p=c(n("q1tI")),h=n("QmWs"),d=n("g/15"),m=l(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,g={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){a(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,u=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),u=u?(0,h.resolve)(s,u):i,e.preventDefault();var l=o.props.scroll;null==l&&(l=u.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](i,u,{shallow:o.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=_},"g/15":function(e,t,n){"use strict";var r=n("o0o1");Object.defineProperty(t,"__esModule",{value:!0});var o=n("QmWs");function a(){var e=window.location,t=e.protocol,n=e.hostname,r=e.port;return"".concat(t,"//").concat(n).concat(r?":"+r:"")}function i(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}t.execOnce=function(e){var t=this,n=!1,r=null;return function(){if(!n){n=!0;for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];r=e.apply(t,a)}return r}},t.getLocationOrigin=a,t.getURL=function(){var e=window.location.href,t=a();return e.substring(t.length)},t.getDisplayName=i,t.isResSent=u,t.loadGetInitialProps=function e(t,n){var o,a,s;return r.async((function(l){for(;;)switch(l.prev=l.next){case 0:l.next=4;break;case 4:if(o=n.res||n.ctx&&n.ctx.res,t.getInitialProps){l.next=12;break}if(!n.ctx||!n.Component){l.next=11;break}return l.next=9,r.awrap(e(n.Component,n.ctx));case 9:return l.t0=l.sent,l.abrupt("return",{pageProps:l.t0});case 11:return l.abrupt("return",{});case 12:return l.next=14,r.awrap(t.getInitialProps(n));case 14:if(a=l.sent,!o||!u(o)){l.next=17;break}return l.abrupt("return",a);case 17:if(a){l.next=20;break}throw s='"'.concat(i(t),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(s);case 20:return l.abrupt("return",a);case 22:case"end":return l.stop()}}),null,null,null,Promise)},t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],t.formatWithValidation=function(e,t){return o.format(e,t)},t.SP="undefined"!==typeof performance,t.ST=t.SP&&"function"===typeof performance.mark&&"function"===typeof performance.measure},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},kd2E:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,a){t=t||"&",n=n||"=";var i={};if("string"!==typeof e||0===e.length)return i;var u=/\+/g;e=e.split(t);var s=1e3;a&&"number"===typeof a.maxKeys&&(s=a.maxKeys);var l=e.length;s>0&&l>s&&(l=s);for(var c=0;c<l;++c){var f,p,h,d,m=e[c].replace(u,"%20"),v=m.indexOf(n);v>=0?(f=m.substr(0,v),p=m.substr(v+1)):(f=m,p=""),h=decodeURIComponent(f),d=decodeURIComponent(p),r(i,h)?o(i[h])?i[h].push(d):i[h]=[i[h],d]:i[h]=d}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},t3SP:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("a6RD"),i=n.n(a),u=n("8Kt/"),s=n.n(u),l=(n("YFqc"),o.a.createElement),c=i()((function(){return Promise.all([n.e(2),n.e(0),n.e(4)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),f=i()((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),p=(i()((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),i()((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),i()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"nBAC"))}),{loadableGenerated:{webpack:function(){return["nBAC"]},modules:["../components/pricing.jsx"]}})),h=i()((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}}),d=i()((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}});t.default=function(){return l("div",{className:"root"},l(s.a,null,l("title",null,"Pricing | Technology Park Ypenburg")),l(c,null),l(f,{smallCapsTitle:"Become a member",smallCapsTitleColor:"white",title:"Become a member of Technology Park Ypenburg",image:"https://i.imgur.com/bB8UO0W.png",style:{backgroundPosition:"center top"}}),l("div",null,l(p,null)),l("div",null,l(h,null)),l(d,null))}},uSn5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return n("t3SP")}])}},[["uSn5",6,5,0,3]]]);