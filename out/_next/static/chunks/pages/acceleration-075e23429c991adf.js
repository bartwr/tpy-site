(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7434],{6077:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acceleration",function(){return n(7958)}])},7645:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](o):o instanceof u)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=r({},a,e));var o,u;var l=a=r({},a,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)};o(n(7294));var i=o(n(4588));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext(null);t.LoadableContext=r},4588:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},u=n(7161),l=n(3644);var c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,r;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var a=this;this._delay=setTimeout((function(){a._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var r=this;this._timeout=setTimeout((function(){r._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&a(t.prototype,n),r&&a(t,r),e}();function m(e){return function(e,t){var n=function(){if(!r){var t=new h(e,a);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=s.default.lazy(a.loader));var r=null;if(!f&&!a.suspense){var o=a.webpack?a.webpack():a.modules;o&&d.push((function(e){var t=!0,a=!1,r=void 0;try{for(var i,s=o[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return n()}}catch(l){a=!0,r=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw r}}}))}var c=a.suspense?function(e,t){return s.default.createElement(a.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=s.default.useContext(l.LoadableContext),o=u.useSubscription(r);return s.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(a.modules)&&a.modules.forEach((function(e){i(e)})),s.default.useMemo((function(){return o.loading||o.error?s.default.createElement(a.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!a.suspense&&n()},c.displayName="LoadableComponent",s.default.forwardRef(c)}(p,e)}function b(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};b(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var y=m;t.default=y},7958:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=n(5988),i=n.n(r),o=n(5152),s=n(9008),u=(0,o.default)((function(){return Promise.all([n.e(571),n.e(2273)]).then(n.bind(n,2273))}),{loadableGenerated:{webpack:function(){return[2273]}}}),l=((0,o.default)((function(){return n.e(7278).then(n.bind(n,7278))}),{loadableGenerated:{webpack:function(){return[7278]}}}),(0,o.default)((function(){return n.e(5388).then(n.bind(n,5388))}),{loadableGenerated:{webpack:function(){return[5388]}}})),c=(0,o.default)((function(){return n.e(5185).then(n.bind(n,5185))}),{loadableGenerated:{webpack:function(){return[5185]}}}),d=(0,o.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),f=(0,o.default)((function(){return Promise.all([n.e(571),n.e(8653)]).then(n.bind(n,8653))}),{loadableGenerated:{webpack:function(){return[8653]}}}),p=((0,o.default)((function(){return n.e(7443).then(n.bind(n,7443))}),{loadableGenerated:{webpack:function(){return[7443]}}}),(0,o.default)((function(){return Promise.all([n.e(571),n.e(7647)]).then(n.bind(n,7647))}),{loadableGenerated:{webpack:function(){return[7647]}}})),h=(0,o.default)((function(){return n.e(6675).then(n.bind(n,6675))}),{loadableGenerated:{webpack:function(){return[6675]}}}),m=(0,o.default)((function(){return n.e(4901).then(n.bind(n,4901))}),{loadableGenerated:{webpack:function(){return[4901]}}});(0,o.default)((function(){return n.e(2225).then(n.bind(n,2225))}),{loadableGenerated:{webpack:function(){return[2225]}}});t.default=function(){return(0,a.jsxs)("div",{className:"jsx-faf2281e72a28157 root",children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{className:"jsx-faf2281e72a28157",children:"Acceleration | Technology Park Ypenburg"},"title"),(0,a.jsx)("meta",{property:"og:title",content:"Acceleration | Technology Park Ypenburg",className:"jsx-faf2281e72a28157"},"og:title"),(0,a.jsx)("meta",{property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-faf2281e72a28157"},"og:description"),(0,a.jsx)("meta",{name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-faf2281e72a28157"},"description")]}),(0,a.jsx)(u,{}),(0,a.jsx)(l,{smallCapsTitle:"Acceleration",smallCapsTitleColor:"white",title:"TPY Acceleration & Incubation",imageBk:"/static/pages/community/community.jpg",image:"/static/pages/acceleration/tpy-acceleration-and-incubation-header-image.jpg",style:{backgroundPosition:"10% 50%"}}),(0,a.jsxs)(c,{children:[(0,a.jsx)("p",{className:"jsx-faf2281e72a28157",children:"With our ideal location, close to TU Delft, TNO, The Hague University of Applied Sciences and NLR amongst other industrial capabilities, TPY is an attractive environment for startup and mature companies to expand/grow their business and capabilities from. We facilitate cooperation between companies, academic institutions and the government."}),(0,a.jsx)("p",{className:"jsx-faf2281e72a28157",children:"Students can easily access TPY, as our campus is conveniently located between The Hague and Delft. Come visit TPY by bike or take the bus or tram (tram stop Laan van Ypenburg)!"}),(0,a.jsxs)("p",{className:"jsx-faf2281e72a28157",children:["Interested in becoming a part of the TPY Community? We got you covered! If you\u2019re a   student you receive a 50% discount on your membership. This means you can become  a member of the TPY community for 28.50 p/m excl. 21% VAT! More information can   be found on our ",(0,a.jsx)("a",{href:"https://www.technologyparkypenburg.nl/pricing",target:"_blank",className:"jsx-faf2281e72a28157",children:"Pricing"})," page."]})]}),(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:(0,a.jsx)(f,{category:"",image:"/static/misc/shared_space_with_woman_working_and_women_chessing__07042021_TPY SPACES_Hani_HPM-06895.jpg",imagePosition:"right",title:"Surrounded by knowledge",text:"<p>By surrounding ourselves with facilities such as TU Delft Aerospace Structures & Materials Lab, InHolland Composites Lab, SAM | XL Automation & Digitization Center and DFC Digital Factory Composites Ypenburg, we encourage the companies of our hub to accelerate their businesses.</p>"})}),(0,a.jsxs)("div",{className:"jsx-faf2281e72a28157",children:[(0,a.jsx)("div",{className:"jsx-faf2281e72a28157 max-width",children:(0,a.jsx)(d,{size:"large",children:"Testimonals from projects in de Scale up & Innovation Center"})}),(0,a.jsxs)(f,{image:"/static/pages/acceleration/sander-althuis-tu-delft.jpg",category:"",title:"Sander Althuis",children:[(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:"Finance & Supply Chain Manager DUT21"}),(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:"Formula Student Team Delft"}),(0,a.jsxs)("div",{className:"jsx-faf2281e72a28157",children:[(0,a.jsx)("p",{className:"jsx-faf2281e72a28157",children:'"As the Formula Student Team Delft we have built our carbon fibre monocoque in the Scale Up & Innovation Center. It was great to be surrounded by other teams and companies doing similar production, so we could exchange knowledge and help each other. After our monocoque was finished we assembled our electric racecar, in order to participate in the international Formula Student competitions in the summer of 2021. We have so far won the Engineering Design and Cost & Manufacturing event at Formula Student Netherlands, and are ready to race for more prizes at the Red Bull Ring and the Hockenheimring!'}),(0,a.jsx)("p",{className:"jsx-faf2281e72a28157",children:'We are looking forward to build our next autonomous racecar at the facilities that TPY has to offer."'})]})]}),(0,a.jsxs)(f,{image:"/static/pages/acceleration/arnold-koetje-inholland.jpg",imagePosition:"right",category:"",title:"Arnold Koetje",children:[(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:"Manager Applied Sciences Labs Aeronautical- and Precision Engineering"}),(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:"Inholland Delft University of Applied Sciences"}),(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:(0,a.jsx)("p",{className:"jsx-faf2281e72a28157",children:'"We chose TPY as an integration location because of the access to manufacturing possibilities and composites expertise. Given the proximity of the Campus in Delft, it is an extremely suitable location for Inholland to further develop innovation projects in a safe and applied environment."'})})]})]}),(0,a.jsx)("div",{className:"jsx-faf2281e72a28157",children:(0,a.jsx)(p,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact"})}),(0,a.jsx)(m,{}),(0,a.jsx)(h,{}),(0,a.jsx)(i(),{id:"faf2281e72a28157",children:".max-width.jsx-faf2281e72a28157{padding:140px 12px;width:800px;max-width:100%;margin:0 auto}"})]})}},5152:function(e,t,n){e.exports=n(7645)},8217:function(e,t,n){"use strict";var a=n(6086),r=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=r.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),o({getCurrentValue:t,subscribe:n,value:i})),r.useDebugValue(i),r.useEffect((function(){function e(){if(!r){var e=t();o((function(r){return r.getCurrentValue!==t||r.subscribe!==n||r.value===e?r:a({},r,{value:e})}))}}var r=!1,i=n(e);return e(),function(){r=!0,i()}}),[t,n]),i}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=6077,e(e.s=t);var t}));var t=e.O();_N_E=t}]);