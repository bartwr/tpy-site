(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7647,9337],{7647:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(5988),a=n.n(o),i=n(5152),c=n(7294),s=n(9755),l=n.n(s),u=n(3153),f=n.n(u);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var g=(0,i.default)((function(){return n.e(392).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),w=(0,i.default)((function(){return n.e(5068).then(n.bind(n,5068))}),{loadableGenerated:{webpack:function(){return[5068]}}}),x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,o,i=v(c);function c(){return d(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){f()()}},{key:"initTransition",value:function(){var e=this;l()(window).scroll((function(t){var n=e.percentageSeen(),r=Math.min(100,Math.floor((100-n)/100*255)),o=100-r;l()(".FooterBanner").css("background-color","rgba(255, 240, 0, ".concat(r/100,")")),l()(".TextAndImage, .StoryOverview").css("opacity","".concat((o+0)/100))}))}},{key:"percentageSeen",value:function(){var e=l()(window),t=l()(".FooterBanner"),n=e.height(),r=e.scrollTop(),o=t.offset().top,a=(t.height(),Math.min(100,Math.round(100*(o-r)/n)));return a>=0?Math.abs(1.8*a):Math.abs(2.2*a)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return(0,r.jsxs)("div",{className:"jsx-c5925f4cdee63a49 FooterBanner",children:[(0,r.jsxs)("div",{style:{width:"711px"},className:"jsx-c5925f4cdee63a49 max-width text-center",children:[(0,r.jsx)(g,{size:"large","data-sal":"slide-up","data-sal-duration":"300","data-sal-delay":"300","data-sal-easing":"ease-in-out",style:{textAlign:"center"},children:this.props.title}),(0,r.jsx)("div",{"data-sal-duration":"300","data-sal":"fade","data-sal-delay":"300","data-sal-easing":"ease-in-out",className:"jsx-c5925f4cdee63a49",children:(0,r.jsx)(w,{href:this.props.buttonLink||"/contact",target:this.props.target,style:{display:"inline-block",marginRight:"auto",marginTop:"40px",marginLeft:"auto",minwidth:"148px",whiteSpace:"nowrap"},children:this.props.buttonText})})]}),(0,r.jsx)(a(),{id:"c5925f4cdee63a49",children:'.FooterBanner.jsx-c5925f4cdee63a49{position:relative;background:url("/static/components/footer-banner/tpy-banner-background-mobile.png")center top no-repeat;-webkit-background-size:cover;-o-background-size:cover;background-size:cover;min-height:624px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:74px}@media(min-width:480px){.FooterBanner.jsx-c5925f4cdee63a49{padding-top:82px;background-image:url("/static/components/footer-banner/tpy-banner-background.png")}}.max-width.jsx-c5925f4cdee63a49{margin:0 auto;width:36rem;max-width:100%;padding:0 1rem}'})]})}}])&&p(t.prototype,n),o&&p(t,o),c}(c.Component);t.default=x},3153:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>O});var a="Sal was not initialised! Probably it is used in SSR.",i="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",c={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},s=[],l=null,u=function(e){e&&e!==c&&(c=r(r({},c),e))},f=function(e){e.classList.remove(c.animateClassName)},d=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},p=function(){document.body.classList.add(c.disabledClassName)},b=function(){l.disconnect(),l=null},h=function(){return c.disabled||"function"==typeof c.disabled&&c.disabled()},m=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,a=r||!(o||c.once);e.intersectionRatio>=c.threshold?(function(e){e.target.classList.add(c.animateClassName),d(c.enterEventName,e)}(e),a||t.unobserve(n)):a&&function(e){f(e.target),d(c.exitEventName,e)}(e)}))},y=function(){var e=[].filter.call(document.querySelectorAll(c.selector),(function(e){return!function(e){return e.classList.contains(c.animateClassName)}(e,c.animateClassName)}));return e.forEach((function(e){return l.observe(e)})),e},v=function(){p(),b()},g=function(){document.body.classList.remove(c.disabledClassName),l=new IntersectionObserver(m,{root:c.root,rootMargin:c.rootMargin,threshold:c.threshold}),s=y()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(),Array.from(document.querySelectorAll(c.selector)).forEach(f),u(e),g()},x=function(){var e=y();s.push(e)};const O=function(){if(u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:c),"undefined"==typeof window)return console.warn(a),{elements:s,disable:v,enable:g,reset:w,update:x};if(!window.IntersectionObserver)throw p(),Error(i);return h()?p():g(),{elements:s,disable:v,enable:g,reset:w,update:x}};return t.default})()}}]);