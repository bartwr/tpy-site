(window.webpackJsonp=window.webpackJsonp||[]).push([[14,21,30,78,88,89,98],{X9ur:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),s=n("foSv"),c=n("MX0m"),l=n.n(c),u=n("a6RD"),d=n.n(u),f=n("q1tI"),p=n.n(f),b=n("EVdn"),m=n.n(b),h=n("jxcm"),v=n.n(h),y=p.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var w=d()((function(){return n.e(39).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["./title.js"]}}),x=d()((function(){return Promise.all([n.e(0),n.e(3),n.e(7),n.e(17)]).then(n.bind(null,"a3/r"))}),{loadableGenerated:{webpack:function(){return["a3/r"]},modules:["./button.js"]}}),O=function(e){Object(o.a)(n,e);var t=g(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){v()()}},{key:"initTransition",value:function(){var e=this;m()(window).scroll((function(t){var n=e.percentageSeen(),r=Math.min(100,Math.floor((100-n)/100*255)),a=100-r;m()(".FooterBanner").css("background-color","rgba(255, 240, 0, ".concat(r/100,")")),m()(".TextAndImage, .StoryOverview").css("opacity","".concat((a+0)/100))}))}},{key:"percentageSeen",value:function(){var e=m()(window),t=m()(".FooterBanner"),n=e.height(),r=e.scrollTop(),a=t.offset().top,o=(t.height(),Math.min(100,Math.round(100*(a-r)/n)));return o>=0?Math.abs(1.8*o):Math.abs(2.2*o)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return y("div",{className:"jsx-304158624 FooterBanner"},y("div",{style:{width:"711px"},className:"jsx-304158624 max-width text-center"},y(w,{size:"large","data-sal":"slide-up","data-sal-duration":"300","data-sal-delay":"300","data-sal-easing":"ease-in-out",style:{textAlign:"center"}},this.props.title),y("div",{"data-sal-duration":"300","data-sal":"fade","data-sal-delay":"300","data-sal-easing":"ease-in-out",className:"jsx-304158624"},y(x,{href:this.props.buttonLink||"/contact",target:this.props.target,style:{display:"inline-block",marginRight:"auto",marginTop:"40px",marginLeft:"auto",minwidth:"148px",whiteSpace:"nowrap"}},this.props.buttonText))),y(l.a,{id:"304158624"},[".FooterBanner.jsx-304158624{position:relative;background:url('/static/components/footer-banner/tpy-banner-background-mobile.png') center top no-repeat;background-size:cover;min-height:624px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:74px;}","@media(min-width:480px){.FooterBanner.jsx-304158624{padding-top:82px;background-image:url('/static/components/footer-banner/tpy-banner-background.png');}}",".max-width.jsx-304158624{margin:0 auto;width:36rem;max-width:100%;padding:0 1rem;}"]))}}]),n}(f.Component);t.default=O},jxcm:function(e,t,n){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>O});var o="Sal was not initialised! Probably it is used in SSR.",i="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},c=[],l=null,u=function(e){e&&e!==s&&(s=r(r({},s),e))},d=function(e){e.classList.remove(s.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},p=function(){document.body.classList.add(s.disabledClassName)},b=function(){l.disconnect(),l=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},h=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,a=void 0!==n.dataset.salOnce,o=r||!(a||s.once);e.intersectionRatio>=s.threshold?(function(e){e.target.classList.add(s.animateClassName),f(s.enterEventName,e)}(e),o||t.unobserve(n)):o&&function(e){d(e.target),f(s.exitEventName,e)}(e)}))},v=function(){var e=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}));return e.forEach((function(e){return l.observe(e)})),e},y=function(){p(),b()},g=function(){document.body.classList.remove(s.disabledClassName),l=new IntersectionObserver(h,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),c=v()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(),Array.from(document.querySelectorAll(s.selector)).forEach(d),u(e),g()},x=function(){var e=v();c.push(e)};const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(u(e),"undefined"==typeof window)return console.warn(o),{elements:c,disable:y,enable:g,reset:w,update:x};if(!window.IntersectionObserver)throw p(),Error(i);return m()?p():g(),{elements:c,disable:y,enable:g,reset:w,update:x}};return t.default})()}}]);