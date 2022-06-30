"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1054],{9022:function(e,t,n){n.r(t);var a=n(4051),r=n.n(a),s=n(5893),i=n(5988),o=n.n(i),c=n(5152),u=n(7294),l=n(9008),p=(n(5588),n(7084)),f=n.n(p),x=n(381),d=n.n(x),m=n(902);n(1819);function h(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function i(e){h(s,a,r,i,o,"next",e)}function o(e){h(s,a,r,i,o,"throw",e)}i(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function N(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return N(this,n)}}var S=(0,c.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),I=((0,c.default)((function(){return n.e(9588).then(n.bind(n,9588))}),{loadableGenerated:{webpack:function(){return[9588]}}}),(0,c.default)((function(){return n.e(2253).then(n.bind(n,2253))}),{loadableGenerated:{webpack:function(){return[2253]}}})),O=(0,c.default)((function(){return n.e(5068).then(n.bind(n,5068))}),{loadableGenerated:{webpack:function(){return[5068]}}}),P=(0,c.default)((function(){return n.e(4810).then(n.bind(n,4810))}),{loadableGenerated:{webpack:function(){return[4810]}}}),U=(u.Component,function(e){b(n,e);var t=T(n);function n(e){var a;return g(this,n),(a=t.call(this,e)).state={event:null},a}return w(n,[{key:"componentDidMount",value:function(){var e=this;return v(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchNewsItem(e.props.slug);case 2:n=t.sent,e.setState({event:e.formatNewsItem(n)});case 4:case"end":return t.stop()}}),t)})))()}},{key:"componentWillReceiveProps",value:function(e){var t=this;return v(r().mark((function n(){var a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.fetchNewsItem(e.slug);case 2:a=n.sent,t.setState({event:t.formatNewsItem(a)});case 4:case"end":return n.stop()}}),n)})))()}},{key:"fetchNewsItem",value:function(e){return v(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m.Z.apiUrl,"/news/").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}},{key:"formatNewsItem",value:function(e){return e.fields}},{key:"render",value:function(){return this.state.event?(0,s.jsxs)("div",{className:"jsx-72aaea5a56885e42 HappeningItem",children:[(0,s.jsxs)(l.default,{children:[(0,s.jsx)("title",{className:"jsx-72aaea5a56885e42",children:this.state.event.title},"title"),(0,s.jsx)("meta",{property:"og:title",content:this.state.event.title,className:"jsx-72aaea5a56885e42"},"og:title"),(0,s.jsx)("meta",{property:"og:image",content:this.state.event.smallImage.fields.file.url,className:"jsx-72aaea5a56885e42"},"og:image"),(0,s.jsx)("meta",{property:"og:description",content:this.state.event.longText.split("\n")[0],className:"jsx-72aaea5a56885e42"},"og:description"),(0,s.jsx)("meta",{name:"description",content:this.state.event.longText.split("\n")[0],className:"jsx-72aaea5a56885e42"},"description")]}),(0,s.jsxs)("div",{className:"jsx-72aaea5a56885e42 flex",children:[(0,s.jsxs)("div",{className:"jsx-72aaea5a56885e42 flex-1 extra-padding",children:[(0,s.jsx)("div",{style:{width:"57px",margin:"24px 0"},className:"jsx-72aaea5a56885e42",children:this.state.event.publishDate?(0,s.jsx)(I,{date:this.state.event.publishDate}):""}),(0,s.jsx)("div",{style:{marginTop:"12px",marginBottom:"12px"},className:"jsx-72aaea5a56885e42",children:(0,s.jsx)(S,{size:"large",style:{color:"#071124"},children:this.state.event.title})})]}),(0,s.jsx)("div",{className:"jsx-72aaea5a56885e42 flex-1"})]}),(0,s.jsxs)("div",{className:"jsx-72aaea5a56885e42 flex",children:[(0,s.jsx)("div",{className:"jsx-72aaea5a56885e42 flex-1 image-wrapper",children:(0,s.jsx)("img",{src:this.state.event.smallImage.fields.file.url,alt:"",className:"jsx-72aaea5a56885e42 image"})}),(0,s.jsx)("div",{className:"jsx-72aaea5a56885e42 flex-1 introTextWrapper",children:(0,s.jsxs)("div",{className:"jsx-72aaea5a56885e42 extra-padding",children:[(0,s.jsx)("div",{className:"jsx-72aaea5a56885e42 introText",children:this.state.event.introText}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:f()(this.state.event.longText)},className:"jsx-72aaea5a56885e42 detailedText"})]})})]}),(0,s.jsx)(S,{size:"small",align:"center",style:{marginTop:"calc(212px - 50px)"},children:"More articles"}),(0,s.jsx)(P,{limit:"3"}),(0,s.jsx)(o(),{id:"72aaea5a56885e42",children:'.HappeningItem.jsx-72aaea5a56885e42{width:1245px;max-width:100%;padding:0 18px;margin:0 auto}.introText.jsx-72aaea5a56885e42{color:#0f2247;font-family:"Montserrat",sans-serif;font-weight:500;font-size:16px;line-height:24px}@media(min-width:480px){.introText.jsx-72aaea5a56885e42{font-size:22px;line-height:33px}}.detailedText.jsx-72aaea5a56885e42{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:32px;overflow-x:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;max-width:100%}.detailedText.jsx-72aaea5a56885e42 a.jsx-72aaea5a56885e42{color:#ff3e6c}.introTextWrapper.jsx-72aaea5a56885e42{max-width:100%}.image-wrapper.jsx-72aaea5a56885e42{margin-top:18px}@media(max-width:760px){.HappeningItem.jsx-72aaea5a56885e42>.flex.jsx-72aaea5a56885e42{display:block}}@media(min-width:760px){.HappeningItem.jsx-72aaea5a56885e42{padding-top:64px}.introTextWrapper.jsx-72aaea5a56885e42{max-width:50%}.image-wrapper.jsx-72aaea5a56885e42{margin-top:0;-webkit-order:2;-ms-flex-order:2;order:2}.image.jsx-72aaea5a56885e42{min-width:200px;margin:18px 32px;margin-bottom:50px;width:calc(100% - 32px - 32px);position:-webkit-sticky;position:sticky;top:104px}.extra-padding.jsx-72aaea5a56885e42{padding:0 30px}}'})]}):(0,s.jsx)("div",{style:{minHeight:"800px"}})}}]),n}(u.Component));t.default=U},902:function(e,t){t.Z={apiUrl:"https://tpy-site.herokuapp.com/api"}},1819:function(e,t,n){n.d(t,{vw:function(){return p},dD:function(){return l},Bb:function(){return f}});var a=n(4051),r=n.n(a),s=n(902);function i(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function o(e){i(s,a,r,o,c,"next",e)}function c(e){i(s,a,r,o,c,"throw",e)}o(void 0)}))}}var c=new Date,u="".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()),l=function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(localStorage.getItem("TPY__news"))||{lastUpdate:""},e.next=4,fetch("".concat(s.Z.apiUrl,"/news"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__news",JSON.stringify({lastUpDate:u,news:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(localStorage.getItem("TPY__events"))||{lastUpdate:""},e.next=4,fetch("".concat(s.Z.apiUrl,"/events"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__events",JSON.stringify({lastUpDate:u,events:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=(function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((JSON.parse(localStorage.getItem("TPY__stories"))||{lastUpdate:""}).lastUpDate===u){e.next=10;break}return e.next=4,fetch("".concat(s.Z.apiUrl,"/stories"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__stories",JSON.stringify({lastUpDate:u,stories:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))}(),function(){var e=o(r().mark((function e(){var t,n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=JSON.parse(localStorage.getItem("TPY__machines"))||{lastUpdate:""}).lastUpDate===u){e.next=10;break}return e.next=4,fetch("".concat(s.Z.apiUrl,"/machines"));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,localStorage.setItem("TPY__machines",JSON.stringify({lastUpDate:u,machines:a})),e.abrupt("return",a);case 10:return e.abrupt("return",t.machines);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())}}]);