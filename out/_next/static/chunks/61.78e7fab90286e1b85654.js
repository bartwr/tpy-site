(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"/PtW":function(t,n,e){"use strict";n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},JVDt:function(t,n,e){"use strict";function r(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,u){return n.apply(this,arguments)};case 5:return function(t,e,r,u,i){return n.apply(this,arguments)};case 6:return function(t,e,r,u,i,a){return n.apply(this,arguments)};case 7:return function(t,e,r,u,i,a,c){return n.apply(this,arguments)};case 8:return function(t,e,r,u,i,a,c,o){return n.apply(this,arguments)};case 9:return function(t,e,r,u,i,a,c,o,s){return n.apply(this,arguments)};case 10:return function(t,e,r,u,i,a,c,o,s,l){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}e.d(n,"a",(function(){return r}))},L8iz:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("SqIO"),u=e("nr3+");function i(t){return function n(e,i){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(e)?n:Object(r.a)((function(n){return t(e,n)}));default:return Object(u.a)(e)&&Object(u.a)(i)?n:Object(u.a)(e)?Object(r.a)((function(n){return t(n,i)})):Object(u.a)(i)?Object(r.a)((function(n){return t(e,n)})):t(e,i)}}}},OEMQ:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e("SqIO"),u=e("/PtW");var i=Object(r.a)((function(t){return!!Object(u.a)(t)||!!t&&("object"===typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),a=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var c=e("JVDt"),o=e("L8iz"),s=Object(o.a)((function(t,n){return Object(c.a)(t.length,(function(){return t.apply(n,arguments)}))}));function l(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function f(t,n,e,r){return t["@@transducer/result"](e[r](s(t["@@transducer/step"],t),n))}var p="undefined"!==typeof Symbol?Symbol.iterator:"@@iterator";function d(t,n,e){if("function"===typeof t&&(t=function(t){return new a(t)}(t)),i(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"===typeof e["fantasy-land/reduce"])return f(t,n,e,"fantasy-land/reduce");if(null!=e[p])return l(t,n,e[p]());if("function"===typeof e.next)return l(t,n,e);if("function"===typeof e.reduce)return f(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}},SqIO:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e("nr3+");function u(t){return function n(e){return 0===arguments.length||Object(r.a)(e)?n:t.apply(this,arguments)}}},Xyqi:function(t,n,e){"use strict";function r(t,n){var e;n=n||[];var r=(t=t||[]).length,u=n.length,i=[];for(e=0;e<r;)i[i.length]=t[e],e+=1;for(e=0;e<u;)i[i.length]=n[e],e+=1;return i}var u=e("SqIO"),i=e("YR7Z"),a=Object(u.a)((function(t){return Object(i.a)(t.length,(function(){var n=0,e=arguments[0],u=arguments[arguments.length-1],i=Array.prototype.slice.call(arguments,0);return i[0]=function(){var t=e.apply(this,r(arguments,[n,u]));return n+=1,t},t.apply(this,i)}))}));n.a=a},YR7Z:function(t,n,e){"use strict";var r=e("JVDt"),u=e("SqIO"),i=e("L8iz"),a=e("nr3+");var c=Object(i.a)((function(t,n){return 1===t?Object(u.a)(n):Object(r.a)(t,function t(n,e,u){return function(){for(var i=[],c=0,o=n,s=0;s<e.length||c<arguments.length;){var l;s<e.length&&(!Object(a.a)(e[s])||c>=arguments.length)?l=e[s]:(l=arguments[c],c+=1),i[s]=l,Object(a.a)(l)||(o-=1),s+=1}return o<=0?u.apply(this,i):Object(r.a)(o,t(n,i,u))}}(t,[],n))}));n.a=c},ZMgP:function(t,n,e){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},ZuG0:function(t,n,e){"use strict";var r=e("SqIO");function u(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var i=Object.prototype.toString,a=function(){return"[object Arguments]"===i.call(arguments)?function(t){return"[object Arguments]"===i.call(t)}:function(t){return u("callee",t)}}(),c=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),l=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},f="function"!==typeof Object.keys||s?Object(r.a)((function(t){if(Object(t)!==t)return[];var n,e,r=[],i=s&&a(t);for(n in t)!u(n,t)||i&&"length"===n||(r[r.length]=n);if(c)for(e=o.length-1;e>=0;)u(n=o[e],t)&&!l(r,n)&&(r[r.length]=n),e-=1;return r})):Object(r.a)((function(t){return Object(t)!==t?[]:Object.keys(t)}));n.a=f},as2i:function(t,n,e){"use strict";e.r(n);var r=e("1OyB"),u=e("vuIU"),i=e("Ji7U"),a=e("md7G"),c=e("foSv"),o=e("MX0m"),s=e.n(o),l=e("a6RD"),f=e.n(l),p=e("q1tI"),d=e.n(p),h=e("Xyqi"),y=e("sNsB"),b=d.a.createElement;function j(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(c.a)(t);if(n){var u=Object(c.a)(this).constructor;e=Reflect.construct(r,arguments,u)}else e=r.apply(this,arguments);return Object(a.a)(this,e)}}var O=f()((function(){return Promise.all([e.e(5),e.e(68)]).then(e.t.bind(null,"Fmna",7))}),{loadableGenerated:{webpack:function(){return["Fmna"]},modules:["react-swipe"]}}),v=f()((function(){return Promise.all([e.e(3),e.e(0),e.e(2)]).then(e.bind(null,"I5jC"))}),{loadableGenerated:{webpack:function(){return["I5jC"]},modules:["./slide.js"]}}),g=f()((function(){return e.e(2).then(e.bind(null,"RsG8"))}),{loadableGenerated:{webpack:function(){return["RsG8"]},modules:["./nav-item.js"]}}),m=function(t){Object(i.a)(e,t);var n=j(e);function e(t){var u;return Object(r.a)(this,e),(u=n.call(this,t)).state={currentSlide:0},u}return Object(u.a)(e,[{key:"componentDidMount",value:function(){window.innerWidth<940&&this.toSlide(0)}},{key:"toSlide",value:function(t){this.setState({activeSlide:t})}},{key:"slideCallback",value:function(t,n){this.setState({activeSlide:t})}},{key:"render",value:function(){var t=this,n=h.a(y.a);return b("div",{className:"jsx-1958081641 Carousel mobile"},b(O,{className:"ReactSwipe",swipeOptions:{continuous:!0,startSlide:this.state.activeSlide,auto:1e3,speed:1e3,transitionEnd:this.slideCallback.bind(this)},ref:function(t){return t}},n((function(t,n){return b("div",{key:"slide-"+n,className:"jsx-1958081641"},b(v,{key:t.title,data:t}))}),this.props.slides)),b("div",{className:"jsx-1958081641 Carousel-nav"},n((function(n,e){return b(g,{key:"navitem"+e,index:e,isActive:t.state.activeSlide==e,toSlide:t.toSlide.bind(t)})}),this.props.slides)),b(s.a,{id:"1958081641"},['.Carousel.jsx-1958081641{margin:2rem 0 4rem 0;color:#0F2247;font-family:"Montserrat",sans-serif;font-size:1.2rem;font-weight:500;line-height:2rem;text-align:center;padding:0 24px;}',"@media(min-width:480px){.Carousel.jsx-1958081641{margin:89px auto;}}",".Carousel-nav.jsx-1958081641{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]))}}]),e}(p.Component);n.default=m},gSdd:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("/PtW");function u(t){return null!=t&&"function"===typeof t["@@transducer/step"]}function i(t,n,e){return function(){if(0===arguments.length)return e();var i=Array.prototype.slice.call(arguments,0),a=i.pop();if(!Object(r.a)(a)){for(var c=0;c<t.length;){if("function"===typeof a[t[c]])return a[t[c]].apply(a,i);c+=1}if(u(a)){var o=n.apply(null,i);return o(a)}}return e.apply(this,arguments)}}},"nr3+":function(t,n,e){"use strict";function r(t){return null!=t&&"object"===typeof t&&!0===t["@@functional/placeholder"]}e.d(n,"a",(function(){return r}))},sNsB:function(t,n,e){"use strict";var r=e("L8iz"),u=e("gSdd");var i=e("OEMQ"),a=e("ZMgP"),c=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),o=Object(r.a)((function(t,n){return new c(t,n)})),s=e("YR7Z"),l=e("ZuG0"),f=Object(r.a)(Object(u.a)(["fantasy-land/map","map"],o,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(s.a)(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return Object(i.a)((function(e,r){return e[r]=t(n[r]),e}),{},Object(l.a)(n));default:return function(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}(t,n)}})));n.a=f}}]);