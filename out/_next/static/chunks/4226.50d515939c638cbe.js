(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4226],{4226:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(5988),a=n.n(o),i=n(5152),c=n(7294),l=n(1664),u=n(7084),s=n.n(u);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function b(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}(0,i.default)((function(){return n.e(9588).then(n.bind(n,9588))}),{loadableGenerated:{webpack:function(){return[9588]}}});var g=(0,i.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),m=(0,i.default)((function(){return n.e(2253).then(n.bind(n,2253))}),{loadableGenerated:{webpack:function(){return[2253]}}}),x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,n,o,i=y(c);function c(){return f(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props.event.slug,t=this.props.event.introText.length<=10?s()(this.props.event.detailedText).replace(/<\/?[^>]+(>|$)/g,"").substring(0,200):this.props.event.introText;return(0,r.jsx)(l.default,{href:"/events-item?slug=".concat(e),as:"/event/".concat(e),children:(0,r.jsxs)("div",{className:"jsx-a70d2c15fcdbdd00 EventBlock",children:[(0,r.jsx)("header",{style:{backgroundImage:"url( ".concat(this.props.event.smallImage.fields.file.url," )")},className:"jsx-a70d2c15fcdbdd00"}),(0,r.jsx)(m,{date:this.props.event.publishDate||this.props.event.datetime}),(0,r.jsxs)("div",{className:"jsx-a70d2c15fcdbdd00 info",children:[(0,r.jsx)(g,{size:"small",style:{},children:this.props.event.title}),(0,r.jsx)("p",{style:{color:"#0F2247"},className:"jsx-a70d2c15fcdbdd00",children:t})]}),(0,r.jsx)("div",{className:"jsx-a70d2c15fcdbdd00 gradient"}),(0,r.jsx)(a(),{id:"a70d2c15fcdbdd00",children:'.EventBlock.jsx-a70d2c15fcdbdd00{height:524px;background:#fff;-webkit-box-shadow:0 2px 13px rgba(0,0,0,.2);-moz-box-shadow:0 2px 13px rgba(0,0,0,.2);box-shadow:0 2px 13px rgba(0,0,0,.2);margin:20px 18px;overflow:hidden;position:relative;cursor:pointer;-webkit-transition:all.2s;transition:all.2s}@media(min-width:480px){.EventBlock.jsx-a70d2c15fcdbdd00{width:306px}}.EventBlock.jsx-a70d2c15fcdbdd00:hover{-webkit-box-shadow:0 4px 15px rgba(0,0,0,.2);-moz-box-shadow:0 4px 15px rgba(0,0,0,.2);box-shadow:0 4px 15px rgba(0,0,0,.2);-webkit-transition:box-shadow.2s;transition:box-shadow.2s;-webkit-transition:all.4s cubic-bezier(.08,.82,.17,1);transition:all.4s cubic-bezier(.08,.82,.17,1);-webkit-transform:scale(1.02);-moz-transform:scale(1.02);-ms-transform:scale(1.02);-o-transform:scale(1.02);transform:scale(1.02)}.EventBlock.jsx-a70d2c15fcdbdd00 p.jsx-a70d2c15fcdbdd00{font-size:16px;line-height:24px}header.jsx-a70d2c15fcdbdd00{background:center center/cover no-repeat;height:192px}header.jsx-a70d2c15fcdbdd00::after{content:"";position:absolute;top:0;right:0;left:0;background:rgba(0,0,0,.05);height:192px}.info.jsx-a70d2c15fcdbdd00{padding:40px 28px;font-size:14px;font-weight:300;line-height:24px;font-family:"Montserrat",sans-serif}.gradient.jsx-a70d2c15fcdbdd00{position:absolute;bottom:0;left:0;width:100%;height:60px;z-index:1;background-image:linear-gradient(rgba(255,255,255,.3),#fff)}'})]})})}}])&&d(t.prototype,n),o&&d(t,o),c}(c.Component);t.default=x},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1003),l=n(880),u=n(9246);var s={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,b=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var m=(t=i.default.Children.only(b))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],k=i.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);i.default.useEffect((function(){var e=j&&n&&c.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,j,g,n,r]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,h,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof g?g:r&&r.locale,_=r&&r.isLocaleDomain&&c.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);E.href=_||c.addBasePath(c.addLocale(p,O,r&&r.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],b=o(a.useState(t?t.current:null),2),h=b[0],v=b[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),u.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d]};var a=n(7294),i=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},1664:function(e,t,n){e.exports=n(1551)}}]);