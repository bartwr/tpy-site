(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7,8,12,19,33,40,80,85,86,92],{HOhW:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),s=n("foSv"),c=n("MX0m"),l=n.n(c),u=n("q1tI"),d=n.n(u),f=n("jxcm"),p=n.n(f),b=d.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var h=function(e){Object(o.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){p()()}},{key:"render",value:function(){return b("div",{"data-sal":this.props["data-sal"],"data-sal-duration":this.props["data-sal-duration"],"data-sal-delay":this.props["data-sal-delay"],"data-sal-easing":this.props["data-sal-easing"],className:"jsx-1893438329 IntroText"},this.props.children,b(l.a,{id:"1893438329"},[".IntroText.jsx-1893438329{margin:3rem auto 4rem auto;width:32rem;max-width:100%;color:#0F2247;text-align:left;padding:0 24px;font-family:Montserrat,sans-serif;font-style:normal;font-size:16px;line-height:24px;font-weight:400;}","@media(min-width:480px){.IntroText.jsx-1893438329{width:649px;margin-top:123px;margin-bottom:148px;font-size:22px;line-height:32px;}}"]))}}]),n}(u.Component);t.default=h},jxcm:function(e,t,n){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>j});var o="Sal was not initialised! Probably it is used in SSR.",i="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},c=[],l=null,u=function(e){e&&e!==s&&(s=r(r({},s),e))},d=function(e){e.classList.remove(s.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},p=function(){document.body.classList.add(s.disabledClassName)},b=function(){l.disconnect(),l=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},h=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,a=void 0!==n.dataset.salOnce,o=r||!(a||s.once);e.intersectionRatio>=s.threshold?(function(e){e.target.classList.add(s.animateClassName),f(s.enterEventName,e)}(e),o||t.unobserve(n)):o&&function(e){d(e.target),f(s.exitEventName,e)}(e)}))},v=function(){var e=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}));return e.forEach((function(e){return l.observe(e)})),e},y=function(){p(),b()},O=function(){document.body.classList.remove(s.disabledClassName),l=new IntersectionObserver(h,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),c=v()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(),Array.from(document.querySelectorAll(s.selector)).forEach(d),u(e),O()},g=function(){var e=v();c.push(e)};const j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(u(e),"undefined"==typeof window)return console.warn(o),{elements:c,disable:y,enable:O,reset:w,update:g};if(!window.IntersectionObserver)throw p(),Error(i);return m()?p():O(),{elements:c,disable:y,enable:O,reset:w,update:g}};return t.default})()}}]);