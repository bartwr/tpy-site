(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6007],{235:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coworking",function(){return n(8252)}])},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,l;var s=r=o({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},l=n(7161),s=n(3644);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function h(e){return function(e,t){var n=function(){if(!o){var t=new b(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,u=i[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var l=a.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=u.default.useContext(s.LoadableContext),i=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;t.default=y},8252:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(5152),a=n(9008),i=(0,o.default)((function(){return Promise.all([n.e(571),n.e(2273)]).then(n.bind(n,2273))}),{loadableGenerated:{webpack:function(){return[2273]}}}),u=((0,o.default)((function(){return n.e(7278).then(n.bind(n,7278))}),{loadableGenerated:{webpack:function(){return[7278]}}}),(0,o.default)((function(){return n.e(5388).then(n.bind(n,5388))}),{loadableGenerated:{webpack:function(){return[5388]}}})),l=(0,o.default)((function(){return n.e(5185).then(n.bind(n,5185))}),{loadableGenerated:{webpack:function(){return[5185]}}}),s=((0,o.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),(0,o.default)((function(){return Promise.all([n.e(571),n.e(8653)]).then(n.bind(n,8653))}),{loadableGenerated:{webpack:function(){return[8653]}}})),c=((0,o.default)((function(){return n.e(7443).then(n.bind(n,7443))}),{loadableGenerated:{webpack:function(){return[7443]}}}),(0,o.default)((function(){return Promise.all([n.e(571),n.e(7647)]).then(n.bind(n,7647))}),{loadableGenerated:{webpack:function(){return[7647]}}}),(0,o.default)((function(){return n.e(6675).then(n.bind(n,6675))}),{loadableGenerated:{webpack:function(){return[6675]}}})),f=(0,o.default)((function(){return n.e(4901).then(n.bind(n,4901))}),{loadableGenerated:{webpack:function(){return[4901]}}});t.default=function(){return(0,r.jsxs)("div",{className:"root",children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Co-Working Space | Technology Park Ypenburg"})}),(0,r.jsx)(i,{}),(0,r.jsx)(u,{smallCapsTitle:"Co-Working",title:"The perfect working environment to follow your passion",image:"/static/pages/coworking/coworking.jpg"}),(0,r.jsx)(l,{children:(0,r.jsx)("p",{children:"The Hague Tech offers the premier co-working environment in The Hague, with fixed or flexible options that perfectly match what you and your business needs. From 1 day a week to 24/7 we have flex desks in our open office space as well as closed offices available for rent. Great standing desks? Got it! Amazing coffee? Got it! A fun and vibrant environment? Got it! Our next great addition? you!"})}),(0,r.jsx)(s,{image:"",imagePosition:"right",category:"",title:"Your Home in The Hague",text:"<p>Are you an entrepreneur with an appetite for innovation? Do you need more than a top notch office with just an espresso machine? And do you want to be part of the fastest growing tech-community in The Hague? Join The Hague Tech community and see how impactful the right environment can be for your business. Located in an easy to access location, with an open floor plan and spacious offices, your desk is waiting for you. </p><p>Visit <a href='/pricing' target='_blank'>pricing</a> to see all of our available packages and find what suits you. </p>"}),(0,r.jsx)(s,{image:"",imagePosition:"left",category:"",title:"Enjoy some friendly competition",text:"<p>No, not business competition. Ping pong, foosball, pool, FIFA, arcades, and more! We encourage our members to work together, to share knowledge, and to grow as a community. But that doesn\u2019t mean we don\u2019t like to break out the competitive spirit and have some fun. Try out your skills in table soccer or just relax in our gaming corner equipped with a historic library of consoles and games.</p>"}),(0,r.jsx)(f,{}),(0,r.jsx)(c,{})]})}},5152:function(e,t,n){e.exports=n(7645)},8217:function(e,t,n){"use strict";var r=n(6086),o=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),i({getCurrentValue:t,subscribe:n,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,a=n(e);return e(),function(){o=!0,a()}}),[t,n]),a}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);