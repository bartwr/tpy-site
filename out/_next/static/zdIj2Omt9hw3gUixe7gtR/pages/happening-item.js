(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=u(n("q1tI")),s=n("8L3h"),d=n("jwwS"),c=[],f=[],p=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=h(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function b(e,t){return l.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new y(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!p&&"function"===typeof n.webpack){var i=n.webpack();f.push((function(e){var t,n=a(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(e,t){o();var a=l.default.useContext(d.LoadableContext),i=s.useSubscription(r);return l.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.loading||i.error?l.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null};return u.preload=function(){return o()},u.displayName="LoadableComponent",l.default.forwardRef(u)}var y=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return g(h,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(m,e)},_.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};v(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady,t.default=_},R0l6:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y})),n.d(t,"getInitialProps",(function(){return _}));var r=n("o0o1"),o=n.n(r),a=n("q1tI"),i=n.n(a),u=n("a6RD"),l=n.n(u),s=n("8Bbg"),d=n("8Kt/"),c=n.n(d),f=(n("lsaM"),i.a.createElement),p=l()((function(){return Promise.all([n.e(4),n.e(0),n.e(3),n.e(1),n.e(34)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),h=(l()((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}})),m=l()((function(){return Promise.all([n.e(4),n.e(0),n.e(20)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),b=(l()((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(3),n.e(1),n.e(35)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}})),g=l()((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"y32O"))}),{loadableGenerated:{webpack:function(){return["y32O"]},modules:["../components/happening-item.js"]}});var y=!0;function _(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.abrupt("return",{slug:t.slug});case 2:case"end":return n.stop()}}),null,null,null,Promise)}t.default=function(e){var t=e.data,n="".concat(t.baseUrl,"/happening/").concat(t.slug),r="https://www.technologyparkypenburg.nl/static/og-image.jpg";return t.smallImage&&t.smallImage.fields&&t.smallImage.fields.file&&t.smallImage.fields.file.url&&(r="https:"+t.smallImage.fields.file.url),f(s.Container,null,f(c.a,null,f("title",{key:"title"},t.title," | Happening at Technology Park Ypenburg"),f("meta",{key:"og:url",property:"og:url",content:n}),f("meta",{key:"og:title",property:"og:title",content:t.title}),f("meta",{key:"og:image",property:"og:image",content:r}),f("meta",{key:"og:url",property:"og:url",content:n}),f("meta",{key:"og:description",property:"og:description",content:t.introText}),f("meta",{key:"description",name:"description",content:t.introText})),f("div",{className:"HappeningItemPage"},f(p,null),f("div",{style:{height:"132px"}}),f("div",null,f(g,{slug:t.slug})),f("div",null,f(h,null)),f("div",null,f(m,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact",target:"_top"})),f(b,null)))}},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),i=!1;function u(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},lsaM:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n;void 0===t&&(t="localhost:3000");var r=((null===(n=e)||void 0===n?void 0:n.headers)?e.headers.host:window.location.host)||t,o=/^localhost(:\d+)?$/.test(r)?"http:":"https:";return e&&e.headers["x-forwarded-host"]&&"string"===typeof e.headers["x-forwarded-host"]&&(r=e.headers["x-forwarded-host"]),e&&e.headers["x-forwarded-proto"]&&"string"===typeof e.headers["x-forwarded-proto"]&&(o=e.headers["x-forwarded-proto"]+":"),{protocol:o,host:r,origin:o+"//"+r}}},oztg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/happening-item",function(){return n("R0l6")}])}},[["oztg",6,5,0,27]]]);