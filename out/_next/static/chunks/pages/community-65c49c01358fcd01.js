(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{9117:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community",function(){return n(6067)}])},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=u.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](i):i instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,s;var l=r=a({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)};i(n(7294));var u=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},s=n(7161),l=n(3644);var c=[],d=[],f=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function h(e){return function(e,t){var n=function(){if(!a){var t=new m(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var u,o=i[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var s=u.value;if(-1!==e.indexOf(s))return n()}}catch(l){r=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return o.default.createElement(r.lazy,u({},e,{ref:t}))}:function(e,t){n();var u=o.default.useContext(l.LoadableContext),i=s.useSubscription(a);return o.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),u&&Array.isArray(r.modules)&&r.modules.forEach((function(e){u(e)})),o.default.useMemo((function(){return i.loading||i.error?o.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",o.default.forwardRef(c)}(b,e)}function p(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return p(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){p(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};p(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;t.default=y},6067:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(5988),u=n.n(a),i=n(5152),o=n(9008),s=(n(5588),(0,i.default)((function(){return Promise.all([n.e(571),n.e(2273)]).then(n.bind(n,2273))}),{loadableGenerated:{webpack:function(){return[2273]}}})),l=((0,i.default)((function(){return n.e(7278).then(n.bind(n,7278))}),{loadableGenerated:{webpack:function(){return[7278]}}}),(0,i.default)((function(){return n.e(5388).then(n.bind(n,5388))}),{loadableGenerated:{webpack:function(){return[5388]}}})),c=(0,i.default)((function(){return n.e(5185).then(n.bind(n,5185))}),{loadableGenerated:{webpack:function(){return[5185]}}}),d=((0,i.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),(0,i.default)((function(){return Promise.all([n.e(571),n.e(8653)]).then(n.bind(n,8653))}),{loadableGenerated:{webpack:function(){return[8653]}}}),(0,i.default)((function(){return n.e(7443).then(n.bind(n,7443))}),{loadableGenerated:{webpack:function(){return[7443]}}}),(0,i.default)((function(){return Promise.all([n.e(571),n.e(7647)]).then(n.bind(n,7647))}),{loadableGenerated:{webpack:function(){return[7647]}}})),f=(0,i.default)((function(){return n.e(6675).then(n.bind(n,6675))}),{loadableGenerated:{webpack:function(){return[6675]}}}),b=(0,i.default)((function(){return n.e(4901).then(n.bind(n,4901))}),{loadableGenerated:{webpack:function(){return[4901]}}}),m=((0,i.default)((function(){return n.e(2225).then(n.bind(n,2225))}),{loadableGenerated:{webpack:function(){return[2225]}}}),(0,i.default)((function(){return n.e(3553).then(n.bind(n,3553))}),{loadableGenerated:{webpack:function(){return[3553]}}}));t.default=function(){return(0,r.jsxs)("div",{className:"jsx-d1a8f9d62fae6849 root",children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{className:"jsx-d1a8f9d62fae6849",children:"Community | Technology Park Ypenburg"},"title"),(0,r.jsx)("meta",{property:"og:title",content:"Community | Technology Park Ypenburg",className:"jsx-d1a8f9d62fae6849"},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-d1a8f9d62fae6849"},"og:description"),(0,r.jsx)("meta",{name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-d1a8f9d62fae6849"},"description")]}),(0,r.jsx)(s,{}),(0,r.jsx)(l,{smallCapsTitle:"Community",smallCapsTitleColor:"white",title:"Join our community",imageBk:"/static/pages/community/community.jpg",image:"/static/pages/community/tpy-community-header-image.jpg",style:{backgroundPosition:"35% 50%"}}),(0,r.jsxs)(c,{children:[(0,r.jsx)("p",{className:"jsx-d1a8f9d62fae6849",children:"Our members have access to meeting spaces, an automation & digitalisation lab, a large autoclaves & CNC milling machines and various testing equipment among many other easily reachable high tech manufacturing capabilities at TPY."}),(0,r.jsx)("p",{className:"jsx-d1a8f9d62fae6849",children:"Situated in the heart of the greater Rotterdam \u2013 The Hague area, TPY offers a unique place with innovative & collaborative high-tech companies."}),(0,r.jsxs)("p",{className:"jsx-d1a8f9d62fae6849",children:["Our open community thrives to connect with the best of the best. Our community members focus on developing innovative solutions in the field of high-tech manufacturing through collaboration. Through collaboration and co-creation, innovative solutions have been developed in our community. Interested in what has been co-created so far by our members? Please visit our ",(0,r.jsx)("a",{href:"/happening",className:"jsx-d1a8f9d62fae6849",children:"testimonial page"}),"."]}),(0,r.jsxs)("p",{className:"jsx-d1a8f9d62fae6849",children:["Whether you're a start-up, scale up, a mature business or an international company we have a place to work, meet, learn & grow ready for you. Come visit our vibrant campus by ",(0,r.jsx)("a",{href:"/contact",className:"jsx-d1a8f9d62fae6849",children:"booking a (virtual) tour"})," and see it for yourself!"]})]}),(0,r.jsx)(m,{}),(0,r.jsx)("div",{className:"jsx-d1a8f9d62fae6849",children:(0,r.jsx)(d,{title:"Interested?",buttonText:"send us a message",buttonLink:"/contact"})}),(0,r.jsx)(b,{}),(0,r.jsx)(f,{}),(0,r.jsx)(u(),{id:"d1a8f9d62fae6849",children:""})]})}},5152:function(e,t,n){e.exports=n(7645)},8217:function(e,t,n){"use strict";var r=n(6086),a=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,u=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=u[0];var i=u[1];return u=e.value,e.getCurrentValue===t&&e.subscribe===n||(u=t(),i({getCurrentValue:t,subscribe:n,value:u})),a.useDebugValue(u),a.useEffect((function(){function e(){if(!a){var e=t();i((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,u=n(e);return e(),function(){a=!0,u()}}),[t,n]),u}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=9117,e(e.s=t);var t}));var t=e.O();_N_E=t}]);