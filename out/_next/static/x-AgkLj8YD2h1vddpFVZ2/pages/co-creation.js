(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"2qu3":function(e,n,t){"use strict";var r=t("lwsE"),o=t("W8MJ");function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var l=u(t("q1tI")),s=t("8L3h"),c=t("jwwS"),d=[],f=[],m=!1;function p(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}function h(e){var n={loading:!1,loaded:{},error:null},t=[];try{Object.keys(e).forEach((function(r){var o=p(e[r]);o.loading?n.loading=!0:(n.loaded[r]=o.loaded,n.error=o.error),t.push(o.promise),o.promise.then((function(e){n.loaded[r]=e})).catch((function(e){n.error=e}))}))}catch(r){n.error=r}return n.promise=Promise.all(t).then((function(e){return n.loading=!1,e})).catch((function(e){throw n.loading=!1,e})),n}function b(e,n){return l.default.createElement((t=e)&&t.__esModule?t.default:t,n);var t}function y(e,n){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},n),r=null;function o(){if(!r){var n=new g(e,t);r={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return r.promise()}if(!m&&"function"===typeof t.webpack){var i=t.webpack();f.push((function(e){var n,t=a(i);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(-1!==e.indexOf(r))return o()}}catch(u){t.e(u)}finally{t.f()}}))}var u=function(e,n){o();var a=l.default.useContext(c.LoadableContext),i=s.useSubscription(r);return l.default.useImperativeHandle(n,(function(){return{retry:r.retry}})),a&&Array.isArray(t.modules)&&t.modules.forEach((function(e){a(e)})),i.loading||i.error?l.default.createElement(t.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?t.render(i.loaded,e):null};return u.preload=function(){return o()},u.displayName="LoadableComponent",l.default.forwardRef(u)}var g=function(){function e(n,t){r(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;n.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(n){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}]),e}();function v(e){return y(p,e)}function _(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return _(e,n)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(h,e)},v.preloadAll=function(){return new Promise((function(e,n){_(d).then(e,n)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return m=!0,n()};_(f,e).then(t,t)}))},window.__NEXT_PRELOADREADY=v.preloadReady,n.default=v},DaHb:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("a6RD"),i=t.n(a),u=t("8Kt/"),l=t.n(u),s=o.a.createElement,c=i()((function(){return Promise.all([t.e(4),t.e(0),t.e(3),t.e(1),t.e(23)]).then(t.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),d=(i()((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),i()((function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}})),f=i()((function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),m=(i()((function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),i()((function(){return Promise.all([t.e(4),t.e(0),t.e(26)]).then(t.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}}),i()((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),i()((function(){return Promise.all([t.e(4),t.e(0),t.e(20)]).then(t.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}})),p=i()((function(){return Promise.all([t.e(0),t.e(3),t.e(1),t.e(24)]).then(t.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}),h=i()((function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}}),b=(i()((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"1z8h"))}),{loadableGenerated:{webpack:function(){return["1z8h"]},modules:["../components/full-width-image.js"]}}),i()((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"H72e"))}),{loadableGenerated:{webpack:function(){return["H72e"]},modules:["../components/members-overview.js"]}}));n.default=function(){return s("div",{className:"root"},s(l.a,null,s("title",{key:"title"},"Cocreation | Technology Park Ypenburg"),s("meta",{key:"og:title",property:"og:title",content:"Cocreation | Technology Park Ypenburg"}),s("meta",{key:"og:description",property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community."}),s("meta",{key:"description",name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community."})),s(c,null),s(d,{smallCapsTitle:"Co-creation",smallCapsTitleColor:"white",title:"TPY Co-creation",imageBk:"/static/pages/community/community.jpg",image:"/static/pages/co-creation/tpy-co-creation-header-image.jpg",style:{backgroundPosition:"68% 50%"}}),s(f,null,s("p",null,"In life together you are stronger and that is the same for business. Co-creation is a big pillar within our EcoSystem. We facilitate in various dimensions, to make sure our members have everything they need to improve and achieve common goals."),s("p",null,"We drive events which are educational in content or challenging through events like \u201cHackathons\u201d and \u201cMakethons\u201d. In addition, we set up innovation projects for products and processes and help find the appropriate local, regional, national and european funding initiatives to help accelerate your development."),s("p",null,"Our open community thrives to connect with the best of the best. Our community members focus on developing innovative solutions in the field of high-tech manufacturing through collaboration. Through collaboration and co-creation, innovative solutions have been developed in our community. Interested in what has been co-created so far by our members? Please visit our [/acceleration](testimonial page).")),s(b,null),s("div",null,s(m,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact"})),s(h,null),s(p,null))}},NodG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/co-creation",function(){return t("DaHb")}])},a6RD:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI")),a=r(t("2qu3")),i=!1;function u(e,n){if(delete n.webpack,delete n.modules,!i)return e(n);var t=n.loading;return function(){return o.default.createElement(t,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}n.noSSR=u,n.default=function(e,n){var t=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),n),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(n,t){return e.render(t,n)}),e.modules)){t=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var n=i[e];"function"!==typeof n.then?o[e]=n:o[e]=function(){return n.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(t,r);delete r.ssr}return t(r)}},jwwS:function(e,n,t){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI"));n.LoadableContext=o.createContext(null)}},[["NodG",6,5,0]]]);