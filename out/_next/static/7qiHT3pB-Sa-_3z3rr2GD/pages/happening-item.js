(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n("q1tI")),l=n("8L3h"),c=n("jwwS"),p=[],f=[],d=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=h(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return s.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function b(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d&&"function"===typeof n.webpack){var u=n.webpack();f.push((function(e){var t,n=a(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=s.default.useContext(c.LoadableContext),u=l.useSubscription(r);return s.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),u.loading||u.error?s.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?n.render(u.loaded,e):null};return i.preload=function(){return o()},i.displayName="LoadableComponent",s.default.forwardRef(i)}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return b(h,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return b(m,e)},v.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};w(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady,t.default=v},"4JlD":function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?a(u(e),(function(u){var i=encodeURIComponent(r(u))+n;return o(e[u])?a(e[u],(function(e){return i+encodeURIComponent(r(e))})).join(t):i+encodeURIComponent(r(e[u]))})).join(t):i?encodeURIComponent(r(i))+n+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var u=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"7MHf":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/happening-item",function(){return n("ArKd")}])},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},ArKd:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("1OyB"),u=n("vuIU"),i=n("Ji7U"),s=n("md7G"),l=n("foSv"),c=n("q1tI"),p=n.n(c),f=n("oY9k"),d=n.n(f),h=n("8Bbg"),m=n("8Kt/"),y=n.n(m),b=n("a6RD"),g=n.n(b),v=p.a.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var _=g()((function(){return Promise.all([n.e(2),n.e(0),n.e(4),n.e(82)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),j=g()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),k=g()((function(){return Promise.all([n.e(2),n.e(0),n.e(30)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),O=g()((function(){return Promise.all([n.e(0),n.e(4),n.e(83)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}),P=g()((function(){return Promise.all([n.e(0),n.e(7),n.e(23),n.e(31)]).then(n.bind(null,"y32O"))}),{loadableGenerated:{webpack:function(){return["y32O"]},modules:["../components/happening-item.js"]}}),x=function(e){Object(i.a)(n,e);var t=w(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return v(h.Container,null,v(y.a,null,v("title",{key:"title"},this.props.title," | Happening at Technology Park Ypenburg"),v("meta",{key:"og:url",property:"og:url",content:this.props.url}),v("meta",{key:"og:title",property:"og:title",content:this.props.title}),v("meta",{key:"og:image",property:"og:image",content:this.props.imageUrl}),v("meta",{key:"og:url",property:"og:url",content:this.props.url}),v("meta",{key:"og:description",property:"og:description",content:this.props.introText}),v("meta",{key:"description",name:"description",content:this.props.introText})),v("div",{className:"HappeningItemPage"},v(_,null),v("div",{style:{height:"132px"}}),v("div",null,v(P,{slug:this.props.slug})),v("div",null,v(j,null)),v("div",null,v(k,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact",target:"_top"})),v(O,null)))}}],[{key:"getInitialProps",value:function(e){var t,n,r,a,u;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.query,n="","undefined"!==typeof t.slug&&(n=t.slug),i.next=5,o.a.awrap(d()("http://localhost:3000/api/news/".concat(n)));case 5:return r=i.sent,i.next=8,o.a.awrap(r.json());case 8:return a=i.sent,(u=a.fields).slug=n,u.baseUrl="http://localhost:3000",u.url="".concat(u.baseUrl,"/happening/").concat(u.slug),u.imageUrl="https://www.technologyparkypenburg.nl/static/og-image.jpg",u.smallImage&&u.smallImage.fields&&u.smallImage.fields.file&&u.smallImage.fields.file.url&&(u.imageUrl="https:"+u.smallImage.fields.file.url),i.abrupt("return",{props:u});case 16:case"end":return i.stop()}}),null,null,null,Promise)}}]),n}(c.Component);t.default=x},B5Ud:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),u=n("a1gu"),i=n("Nsbk"),s=n("o0o1");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var c=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=c(n("q1tI")),f=n("g/15");function d(e){var t,n,r;return s.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,s.awrap((0,f.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=f.AppInitialProps;var h=function(e){a(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||a?{}:{url:m(t)}))}}]),n}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d},QmWs:function(e,t,n){var r,o=(r=n("s4NR"))&&"object"==typeof r&&"default"in r?r.default:r,a=/https?|ftp|gopher|file/;function u(e){"string"==typeof e&&(e=y(e));var t=function(e,t,n){var r=e.auth,o=e.hostname,a=e.protocol||"",u=e.pathname||"",i=e.hash||"",s=e.query||"",l=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?l=r+e.host:o&&(l=r+(~o.indexOf(":")?"["+o+"]":o),e.port&&(l+=":"+e.port)),s&&"object"==typeof s&&(s=t.encode(s));var c=e.search||s&&"?"+s||"";return a&&":"!==a.substr(-1)&&(a+=":"),e.slashes||(!a||n.test(a))&&!1!==l?(l="//"+(l||""),u&&"/"!==u[0]&&(u="/"+u)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),{protocol:a,host:l,pathname:u=u.replace(/[?#]/g,encodeURIComponent),search:c=c.replace("#","%23"),hash:i}}(e,o,a);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var i="http://",s="w.w",l=i+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,d=/^([a-z0-9.+-]*:)?\/\/\/*/i,h=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function m(e){try{return decodeURI(e)}catch(o){return e}}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=(e=e.trim()).match(p);e=r?m(r[1]).replace(/\\/g,"/")+r[2]:m(e).replace(/\\/g,"/"),h.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(f),i=d.test(e),y="";a&&(c.test(a[1])||(y=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(i=!1,c.test(a[1])?(y=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(y=a[1],e="/"+a[3]));var b,g=e.match(/(:[0-9]+)/),v="";g&&g[1]&&3===g[1].length&&(e=e.replace(v=g[1],v+"00"));var w={},_="",j="";try{b=new URL(e)}catch(o){_=o,y||n||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(j="/",e=e.substr(1));try{b=new URL(e,l)}catch(e){return w.protocol=y,w.href=y,w}}w.slashes=i&&!j,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=_?y||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var k=e.split("#");!w.search&&~k[0].indexOf("?")&&(w.search="?"),w.hash||""!==k[1]||(w.hash="#"),w.query=t?o.decode(b.search.substr(1)):w.search.substr(1),w.pathname=j+m(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),_&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),y&&!c.test(y)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,v&&(w.host=w.host.replace(v+"00",v),w.port=w.port.slice(0,-2)),w.href=j?""+w.pathname+w.search+w.hash:u(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach((function(e){~O.indexOf(e)||(w[e]=w[e]||null)})),w}var b=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,g=/https?|ftp|gopher|file/;function v(e,t){var n="string"==typeof e?y(e):e;e="object"==typeof e?u(e):e;var r=y(t),o="";n.protocol&&!n.slashes&&(o=n.protocol,e=e.replace(n.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&r.protocol&&(o="",r.slashes||(o=r.protocol,t=t.replace(r.protocol,"")));var a=e.match(b);a&&!r.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(t)&&(o=o.slice(0,-1)));var s=new URL(e,l+"/"),c=new URL(t,s).toString().replace(l,""),p=r.protocol||n.protocol;return p+=n.slashes||r.slashes?"//":"",!o&&p?c=c.replace(i,p):o&&(c=c.replace(i,"")),g.test(c)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==c.slice(-1)||(c=c.slice(0,-1)),o&&(c=o+("/"===c[0]?c.substr(1):c)),c}t.parse=y,t.format=u,t.resolve=v,t.resolveObject=function(e,t){return y(v(e,t))}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),u=!1;function i(e,t){if(delete t.webpack,delete t.modules,!u)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=i,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)}},"g/15":function(e,t,n){"use strict";var r=n("o0o1");Object.defineProperty(t,"__esModule",{value:!0});var o=n("QmWs");function a(){var e=window.location,t=e.protocol,n=e.hostname,r=e.port;return"".concat(t,"//").concat(n).concat(r?":"+r:"")}function u(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function i(e){return e.finished||e.headersSent}t.execOnce=function(e){var t=this,n=!1,r=null;return function(){if(!n){n=!0;for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];r=e.apply(t,a)}return r}},t.getLocationOrigin=a,t.getURL=function(){var e=window.location.href,t=a();return e.substring(t.length)},t.getDisplayName=u,t.isResSent=i,t.loadGetInitialProps=function e(t,n){var o,a,s;return r.async((function(l){for(;;)switch(l.prev=l.next){case 0:l.next=4;break;case 4:if(o=n.res||n.ctx&&n.ctx.res,t.getInitialProps){l.next=12;break}if(!n.ctx||!n.Component){l.next=11;break}return l.next=9,r.awrap(e(n.Component,n.ctx));case 9:return l.t0=l.sent,l.abrupt("return",{pageProps:l.t0});case 11:return l.abrupt("return",{});case 12:return l.next=14,r.awrap(t.getInitialProps(n));case 14:if(a=l.sent,!o||!i(o)){l.next=17;break}return l.abrupt("return",a);case 17:if(a){l.next=20;break}throw s='"'.concat(u(t),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(s);case 20:return l.abrupt("return",a);case 22:case"end":return l.stop()}}),null,null,null,Promise)},t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],t.formatWithValidation=function(e,t){return o.format(e,t)},t.SP="undefined"!==typeof performance,t.ST=t.SP&&"function"===typeof performance.mark&&"function"===typeof performance.measure},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},kd2E:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,a){t=t||"&",n=n||"=";var u={};if("string"!==typeof e||0===e.length)return u;var i=/\+/g;e=e.split(t);var s=1e3;a&&"number"===typeof a.maxKeys&&(s=a.maxKeys);var l=e.length;s>0&&l>s&&(l=s);for(var c=0;c<l;++c){var p,f,d,h,m=e[c].replace(i,"%20"),y=m.indexOf(n);y>=0?(p=m.substr(0,y),f=m.substr(y+1)):(p=m,f=""),d=decodeURIComponent(p),h=decodeURIComponent(f),r(u,d)?o(u[d])?u[d].push(h):u[d]=[u[d],h]:u[d]=h}return u};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},oY9k:function(e,t,n){"use strict";var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")}},[["7MHf",6,5,0,3]]]);