(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"0KW+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acceleration",function(){return n("k/zO")}])},"2qu3":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ");function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n("q1tI")),u=n("8L3h"),c=n("jwwS"),d=[],f=[],m=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function h(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(a){var r=p(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function b(e,t){return l.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),a=null;function r(){if(!a){var t=new y(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!m&&"function"===typeof n.webpack){var i=n.webpack();f.push((function(e){var t,n=o(i);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(-1!==e.indexOf(a))return r()}}catch(s){n.e(s)}finally{n.f()}}))}var s=function(e,t){r();var o=l.default.useContext(c.LoadableContext),i=u.useSubscription(a);return l.default.useImperativeHandle(t,(function(){return{retry:a.retry}})),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),i.loading||i.error?l.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?n.render(i.loaded,e):null};return s.preload=function(){return r()},s.displayName="LoadableComponent",l.default.forwardRef(s)}var y=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return g(p,e)}function w(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(h,e)},v.preloadAll=function(){return new Promise((function(e,t){w(d).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};w(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady,t.default=v},a6RD:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),o=a(n("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return r.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=Object.assign(Object.assign({},a),e)),a=Object.assign(Object.assign({},a),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var r={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),a.loader=r}if(a.loadableGenerated&&delete(a=Object.assign(Object.assign({},a),a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)}},jwwS:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.LoadableContext=r.createContext(null)},"k/zO":function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),r=n.n(a),o=n("q1tI"),i=n.n(o),s=n("a6RD"),l=n.n(s),u=n("8Kt/"),c=n.n(u),d=i.a.createElement,f=l()((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(9)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),m=(l()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}})),p=l()((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),h=l()((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),b=l()((function(){return Promise.all([n.e(2),n.e(0),n.e(13)]).then(n.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}}),g=(l()((function(){return n.e(1).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),l()((function(){return Promise.all([n.e(2),n.e(0),n.e(15)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}})),y=l()((function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}),v=l()((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}});l()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"1z8h"))}),{loadableGenerated:{webpack:function(){return["1z8h"]},modules:["../components/full-width-image.js"]}});t.default=function(){return d("div",{className:"jsx-8557801 root"},d(c.a,null,d("title",{key:"title",className:"jsx-8557801"},"Acceleration | Technology Park Ypenburg"),d("meta",{key:"og:title",property:"og:title",content:"Acceleration | Technology Park Ypenburg",className:"jsx-8557801"}),d("meta",{key:"og:description",property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-8557801"}),d("meta",{key:"description",name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-8557801"})),d(f,null),d(m,{smallCapsTitle:"Acceleration",smallCapsTitleColor:"white",title:"TPY Acceleration & Incubation",imageBk:"/static/pages/community/community.jpg",image:"/static/pages/acceleration/tpy-acceleration-and-incubation-header-image.jpg",style:{backgroundPosition:"10% 50%"}}),d(p,null,d("p",{className:"jsx-8557801"},"With our ideal location, close to TU Delft, TNO, The Hague University of Applied Sciences and NLR amongst other industrial capabilities, TPY is an attractive environment for startup and mature companies to expand/grow their business and capabilities from. We facilitate cooperation between companies, academic institutions and the government."),d("p",{className:"jsx-8557801"},"Students can easily access TPY, as our campus is conveniently located between The Hague and Delft. Come visit TPY by bike or take the bus or tram (tram stop Laan van Ypenburg)!"),d("p",{className:"jsx-8557801"},"Interested in becoming a part of the TPY Community? We got you covered! If you\u2019re a   student you receive a 50% discount on your membership. This means you can become  a member of the TPY community for 28.50 p/m excl. 21% VAT! More information can   be found on our ",d("a",{href:"https://www.technologyparkypenburg.nl/pricing",target:"_blank",className:"jsx-8557801"},"Pricing")," page.")),d("div",{className:"jsx-8557801"},d(b,{category:"",image:"/static/misc/shared_space_with_woman_working_and_women_chessing__07042021_TPY SPACES_Hani_HPM-06895.jpg",imagePosition:"right",title:"Surrounded by knowledge",text:"<p>By surrounding ourselves with facilities such as TU Delft Aerospace Structures & Materials Lab, InHolland Composites Lab, SAM | XL Automation & Digitization Center and DFC Digital Factory Composites Ypenburg, we encourage the companies of our hub to accelerate their businesses.</p>"})),d("div",{className:"jsx-8557801"},d("div",{className:"jsx-8557801 max-width"},d(h,{size:"large"},"Testimonals from projects in de Scale up & Innovation Center")),d(b,{image:"/static/pages/acceleration/sander-althuis-tu-delft.jpg",category:"",title:"Sander Althuis"},d("div",{className:"jsx-8557801"},"Finance & Supply Chain Manager DUT21"),d("div",{className:"jsx-8557801"},"Formula Student Team Delft"),d("div",{className:"jsx-8557801"},d("p",{className:"jsx-8557801"},'"As the Formula Student Team Delft we have built our carbon fibre monocoque in the Scale Up & Innovation Center. It was great to be surrounded by other teams and companies doing similar production, so we could exchange knowledge and help each other. After our monocoque was finished we assembled our electric racecar, in order to participate in the international Formula Student competitions in the summer of 2021. We have so far won the Engineering Design and Cost & Manufacturing event at Formula Student Netherlands, and are ready to race for more prizes at the Red Bull Ring and the Hockenheimring!'),d("p",{className:"jsx-8557801"},'We are looking forward to build our next autonomous racecar at the facilities that TPY has to offer."'))),d(b,{image:"/static/pages/acceleration/arnold-koetje-inholland.jpg",imagePosition:"right",category:"",title:"Arnold Koetje"},d("div",{className:"jsx-8557801"},"Manager Applied Sciences Labs Aeronautical- and Precision Engineering"),d("div",{className:"jsx-8557801"},"Inholland Delft University of Applied Sciences"),d("div",{className:"jsx-8557801"},d("p",{className:"jsx-8557801"},'"We chose TPY as an integration location because of the access to manufacturing possibilities and composites expertise. Given the proximity of the Campus in Delft, it is an extremely suitable location for Inholland to further develop innovation projects in a safe and applied environment."')))),d("div",{className:"jsx-8557801"},d(g,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact"})),d(v,null),d(y,null),d(r.a,{id:"8557801"},[".max-width.jsx-8557801{padding:140px 12px;width:800px;max-width:100%;margin:0 auto;}"]))}}},[["0KW+",5,4,0]]]);