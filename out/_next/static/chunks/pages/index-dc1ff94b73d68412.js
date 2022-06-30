(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405,6087],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](i):i instanceof u)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var i,u;var c=r=o({},r,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};i(n(7294));var a=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},u=n(7161),c=n(3644);var l=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function m(e){return function(e,t){var n=function(){if(!o){var t=new h(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=s.default.lazy(r.loader));var o=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,s=i[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return n()}}catch(c){r=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(r)throw o}}}))}var l=r.suspense?function(e,t){return s.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=s.default.useContext(c.LoadableContext),i=u.useSubscription(o);return s.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),s.default.useMemo((function(){return i.loading||i.error?s.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return l.preload=function(){return!r.suspense&&n()},l.displayName="LoadableComponent",s.default.forwardRef(l)}(p,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){b(l).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};b(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var y=m;t.default=y},4369:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),a=n(5152),i=n(9008),s=n(3153),u=n.n(s);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var b=(0,a.default)((function(){return Promise.all([n.e(571),n.e(2273)]).then(n.bind(n,2273))}),{loadableGenerated:{webpack:function(){return[2273]}}}),y=(0,a.default)((function(){return n.e(527).then(n.bind(n,527))}),{loadableGenerated:{webpack:function(){return[527]}}}),g=(0,a.default)((function(){return n.e(616).then(n.bind(n,5185))}),{loadableGenerated:{webpack:function(){return[5185]}}}),v=(0,a.default)((function(){return n.e(392).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),_=(0,a.default)((function(){return n.e(3210).then(n.bind(n,3210))}),{loadableGenerated:{webpack:function(){return[3210]}}}),w=(0,a.default)((function(){return Promise.all([n.e(571),n.e(8653)]).then(n.bind(n,8653))}),{loadableGenerated:{webpack:function(){return[8653]}}}),j=(0,a.default)((function(){return n.e(7443).then(n.bind(n,7443))}),{loadableGenerated:{webpack:function(){return[7443]}}}),k=(0,a.default)((function(){return Promise.all([n.e(571),n.e(9337)]).then(n.bind(n,7647))}),{loadableGenerated:{webpack:function(){return[7647]}}}),P=(0,a.default)((function(){return n.e(6675).then(n.bind(n,6675))}),{loadableGenerated:{webpack:function(){return[6675]}}}),O=(0,a.default)((function(){return n.e(4901).then(n.bind(n,4901))}),{loadableGenerated:{webpack:function(){return[4901]}}}),x=[{title:"community",href:"#community",image:"/static/components/carousel/tpy-icon-community.svg",imageHeight:106},{title:"campus",href:"#campus",image:"/static/components/carousel/tpy-icon-campus.svg",imageHeight:104},{title:"academy",href:"#academy",image:"/static/components/carousel/tpy-icon-academy.svg",imageHeight:106},{title:"acceleration & incubation",href:"#acceleration",image:"/static/components/carousel/tpy-icon-acceleration.svg",imageHeight:120},{title:"softlanding",href:"#softlanding",image:"/static/components/carousel/tpy-icon-softlanding.svg",imageHeight:110},{title:"co-creation",href:"#co-creation",image:"/static/components/carousel/tpy-icon-co-creation.svg",imageHeight:118}],T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,o,a=m(s);function s(){return c(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){u()()}},{key:"render",value:function(){return(0,r.jsxs)("div",{className:"root",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Technology Park Ypenburg"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"},"viewport"),(0,r.jsx)("link",{href:"/static/favicon.ico",rel:"icon",type:"image/x-icon"})]}),(0,r.jsx)(b,{}),(0,r.jsx)(y,{title:"Join the best in our high-tech industry",subTitle:"Team up and share your knowledge with like-minded technology peers",showOverlay:!0,showButton:!0}),(0,r.jsxs)(g,{"data-sal-duration":"300","data-sal":"slide-down","data-sal-delay":"300","data-sal-easing":"ease-in-out",children:[(0,r.jsx)("p",{style:{fontWeight:"500"},children:"Within our sustainable environment our open community thrives to connect with the best of the best. Together we focus on developing innovative solutions in the field of high-tech manufacturing."}),(0,r.jsx)("p",{children:"By sharing know-how, network and capital equipment we help each other flourish. We provide this through work space, events, networks and access to testing and inspection tooling. Whether you are a start up, scale up or a mature business, we can\u2019t wait for you to join our growing community."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(v,{align:"center",style:{padding:"0 30px"},"data-sal-duration":"400","data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease-in-out",children:"What we can offer you"})}),(0,r.jsx)("div",{children:(0,r.jsx)(_,{slides:x})}),(0,r.jsx)(w,{image:"/static/misc/two_women_talking_in_kitchen__07042021_TPY SPACES_Hani_HPM-06942.jpg",category:"community",title:"Community",text:"The tight network of TPY consists of startups, scale-ups, schools, entrepreneurs, developers, universities and institutes, all cooperating. We\u2019re always seeking to evolve, remain valued and innovate for today\u2019s technology. Grow your business while working with awesome collaborators.",buttonText:"read more",buttonLink:"/community",anchorName:"community"}),(0,r.jsx)(w,{image:"/static/misc/making_space_bird_eye_view__07042021_TPY SPACES_Hani_HPM-07170.jpg",imagePosition:"right",category:"campus",title:"Campus",text:"The goal of our TPY Campus is to offer facilities and events to support all your needs, whether you\u2019re a start up, scale up, a mature business or an international company. Our hub is located at a strong central position, in the middle of the \u2018Manufacturing Industry\u2019 in The Hague. Come visit our vibrant campus and see it for yourself. ",buttonText:"read more",buttonLink:"/campus",anchorName:"campus"}),(0,r.jsx)(w,{image:"/static/misc/shared_space_with_woman_working_and_women_chessing__07042021_TPY SPACES_Hani_HPM-06895.jpg",imagePosition:"left",category:"academy",title:"Academy",text:"Our virtual TPY Academy functions as a bridge between tech experts and learners. TPY partnered up with the local schools and universities, such as Delft University of Technology and University of Applied Sciences InHolland Composites, located less than 10 km away from our Campus.",buttonText:"read more",buttonLink:"/academy",anchorName:"academy"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(j,{})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:(0,r.jsx)(w,{image:"/static/misc/office_space_i_have_a_dream_peter__07042021_TPY SPACES_Hani_HPM-06945.jpg",imagePosition:"right",category:"Acceleration & incubation",title:"Acceleration",text:"Grow by Start-up or Scale-up working closely together and by cooperating with universities, knowledge institutes and government. TPY is the international hotspot for the development and manufacturing of products based on high-tech materials: composite and hybrid components in The Hague.",buttonText:"read more",buttonLink:"/acceleration",anchorName:"acceleration"})}),(0,r.jsx)("div",{children:(0,r.jsx)(w,{image:"/static/misc/man_working_in_office__07042021_TPY SPACES_Hani_HPM-07103.jpg",category:"softlanding",title:"Softlanding",text:"Considering establishing your business in the heart of high tech? TPY offers a solution to help you set up your business in the Netherlands and our softlanding programme to access the Netherlands and European markets. We\u2019ll introduce you to key stakeholders and connect you with experts in setting up legal entities. ",buttonText:"read more",buttonLink:"/softlanding",anchorName:"softlanding"})}),(0,r.jsx)("div",{children:(0,r.jsx)(w,{image:"/static/misc/couch_with_two_men_meeting__07042021_TPY SPACES_Hani_HPM-06992.jpg",imagePosition:"right",category:"co-creation",title:"Co-creation",text:"At TPY we work together on challenges, innovations and support to establish funding initiatives. We facilitate the processes of companies to connect to work together on common challenges, student hackathons/makeathons, set up innovation projects for products and processes and help find the appropriate local, regional, national and european funding initiatives to help accelerate your development.",buttonText:"read more",buttonLink:"/co-creation",anchorName:"co-creation"})}),(0,r.jsx)("div",{children:(0,r.jsx)(k,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact",target:"_top"})}),(0,r.jsx)("div",{children:(0,r.jsx)(O,{})}),(0,r.jsx)("div",{children:(0,r.jsx)(P,{})})]})}}])&&l(t.prototype,n),o&&l(t,o),s}(o.Component);t.default=T},5152:function(e,t,n){e.exports=n(7645)},3153:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>j});var a="Sal was not initialised! Probably it is used in SSR.",i="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},u=[],c=null,l=function(e){e&&e!==s&&(s=r(r({},s),e))},d=function(e){e.classList.remove(s.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},p=function(){document.body.classList.add(s.disabledClassName)},h=function(){c.disconnect(),c=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},b=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,a=r||!(o||s.once);e.intersectionRatio>=s.threshold?(function(e){e.target.classList.add(s.animateClassName),f(s.enterEventName,e)}(e),a||t.unobserve(n)):a&&function(e){d(e.target),f(s.exitEventName,e)}(e)}))},y=function(){var e=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}));return e.forEach((function(e){return c.observe(e)})),e},g=function(){p(),h()},v=function(){document.body.classList.remove(s.disabledClassName),c=new IntersectionObserver(b,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),u=y()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(),Array.from(document.querySelectorAll(s.selector)).forEach(d),l(e),v()},w=function(){var e=y();u.push(e)};const j=function(){if(l(arguments.length>0&&void 0!==arguments[0]?arguments[0]:s),"undefined"==typeof window)return console.warn(a),{elements:u,disable:g,enable:v,reset:_,update:w};if(!window.IntersectionObserver)throw p(),Error(i);return m()?p():v(),{elements:u,disable:g,enable:v,reset:_,update:w}};return t.default})()},8217:function(e,t,n){"use strict";var r=n(6086),o=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=a[0];var i=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===n||(a=t(),i({getCurrentValue:t,subscribe:n,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();i((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,a=n(e);return e(),function(){o=!0,a()}}),[t,n]),a}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);