(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2793],{7137:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/machines",function(){return n(3424)}])},902:function(e,t){"use strict";t.Z={apiUrl:"https://tpy-site.herokuapp.com/api"}},1819:function(e,t,n){"use strict";n.d(t,{vw:function(){return f},dD:function(){return l},Bb:function(){return d}});var a=n(4051),r=n.n(a),i=n(902);function s(e,t,n,a,r,i,s){try{var o=e[i](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,c,"next",e)}function c(e){s(i,a,r,o,c,"throw",e)}o(void 0)}))}}var c=new Date,u="".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()),l=function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(localStorage.getItem("TPY__news"))||{lastUpdate:""},e.next=4,fetch("".concat(i.Z.apiUrl,"/news"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__news",JSON.stringify({lastUpDate:u,news:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(localStorage.getItem("TPY__events"))||{lastUpdate:""},e.next=4,fetch("".concat(i.Z.apiUrl,"/events"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__events",JSON.stringify({lastUpDate:u,events:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=(function(){var e=o(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((JSON.parse(localStorage.getItem("TPY__stories"))||{lastUpdate:""}).lastUpDate===u){e.next=10;break}return e.next=4,fetch("".concat(i.Z.apiUrl,"/stories"));case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,localStorage.setItem("TPY__stories",JSON.stringify({lastUpDate:u,stories:n})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))}(),function(){var e=o(r().mark((function e(){var t,n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=JSON.parse(localStorage.getItem("TPY__machines"))||{lastUpdate:""}).lastUpDate===u){e.next=10;break}return e.next=4,fetch("".concat(i.Z.apiUrl,"/machines"));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,localStorage.setItem("TPY__machines",JSON.stringify({lastUpDate:u,machines:a})),e.abrupt("return",a);case 10:return e.abrupt("return",t.machines);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())},3976:function(e,t,n){"use strict";n.d(t,{W:function(){return o},f:function(){return c}});var a=n(4051),r=n.n(a),i=n(1819);function s(e,t,n,a,r,i,s){try{var o=e[i](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}var o=function(){var e,t=(e=r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Bb)();case 2:return t=e.sent,n=t.map((function(e){return{id:e.sys.id,category:e.fields.category,company:{id:e.fields.company.sys.id,contactEmail:e.fields.company.fields.contactEmail,contactPhone:e.fields.company.fields.contactPhone,name:e.fields.company.fields.name,website:e.fields.company.fields.website},description:e.fields.description,dimensions:e.fields.dimensions,materials:e.fields.materials,specstandard:e.fields.specstandard,name:e.fields.name,type:e.fields.type,image:e.fields.picture?e.fields.picture.fields.file.url:"https://i.imgur.com/83Ovq2V.jpeg"}})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,c,"next",e)}function c(e){s(i,a,r,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),c=function(e){var t=[];return e.forEach((function(e){t.indexOf(e.category)>-1||t.push(e.category)})),t}},3424:function(e,t,n){"use strict";n.r(t);var a=n(4051),r=n.n(a),i=n(5893),s=n(7294),o=n(5152),c=n(9008),u=(n(1664),n(3976));function l(e,t,n,a,r,i,s){try{var o=e[i](s),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(a,r)}var f=(0,o.default)((function(){return Promise.all([n.e(571),n.e(650)]).then(n.bind(n,2273))}),{loadableGenerated:{webpack:function(){return[2273]}}}),d=(0,o.default)((function(){return n.e(5388).then(n.bind(n,5388))}),{loadableGenerated:{webpack:function(){return[5388]}}}),p=(0,o.default)((function(){return n.e(5185).then(n.bind(n,5185))}),{loadableGenerated:{webpack:function(){return[5185]}}}),h=((0,o.default)((function(){return n.e(7010).then(n.bind(n,7010))}),{loadableGenerated:{webpack:function(){return[7010]}}}),(0,o.default)((function(){return n.e(2311).then(n.bind(n,2311))}),{loadableGenerated:{webpack:function(){return[2311]}}}),(0,o.default)((function(){return n.e(4901).then(n.bind(n,4901))}),{loadableGenerated:{webpack:function(){return[4901]}}})),m=(0,o.default)((function(){return n.e(2417).then(n.bind(n,6675))}),{loadableGenerated:{webpack:function(){return[6675]}}}),v=(0,o.default)((function(){return Promise.all([n.e(664),n.e(8367)]).then(n.bind(n,8367))}),{loadableGenerated:{webpack:function(){return[8367]}}}),b=(0,o.default)((function(){return n.e(8463).then(n.bind(n,5752))}),{loadableGenerated:{webpack:function(){return[5752]}}}),g=(0,o.default)((function(){return n.e(6870).then(n.bind(n,6870))}),{loadableGenerated:{webpack:function(){return[6870]}}}),w=(0,o.default)((function(){return Promise.all([n.e(571),n.e(7647)]).then(n.bind(n,7647))}),{loadableGenerated:{webpack:function(){return[7647]}}});t.default=function(){var e=localStorage.getItem("TPY__machines_machine_type"),t=localStorage.getItem("TPY__machines_search_query"),n=(0,s.useState)(t),a=n[0],o=n[1],x=(0,s.useState)(e),y=x[0],_=x[1],k=(0,s.useState)([]),P=k[0],j=k[1],T=function(){var e,t=(e=r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.W)();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){l(i,a,r,s,o,"next",e)}function o(e){l(i,a,r,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){T()}),[]),(0,i.jsxs)("div",{className:"root",children:[(0,i.jsx)(c.default,{children:(0,i.jsx)("title",{children:"Machine Portal | Technology Park Ypenburg"})}),(0,i.jsx)(f,{}),(0,i.jsx)(d,{smallCapsTitle:"Machine Portal",smallCapsTitleColor:"white",title:"Rent a machine",image:"/static/pages/machines/hero-image.png",style:{backgroundPosition:"center top"}}),(0,i.jsxs)("div",{className:"flex flex-wrap sm:mx-4 max-width sm:mx-auto",children:[(0,i.jsx)("div",{className:"sm:w-1/4"}),(0,i.jsx)("div",{className:"w-full w-5/6 sm:w-3/4",children:(0,i.jsxs)(p,{style:{marginLeft:"1rem",marginRight:"1rem",paddingLeft:0,paddingRight:0},children:[(0,i.jsx)("p",{children:"Technology Park Ypenburg and its members offer a wide range of machinery and facilities to help you build your prototypes, products or testing. The overview below shows you all the machines at TPY that are available to third parties, which are in need of these facilities. These machines can be rented and booked through this machine portal. Cost includes use of the machine, operators and/or programming staff, and if applicable materials. After filling out an inquiry, you will receive a fitting quotation."}),(0,i.jsx)("p",{children:"Most of the machines and facilities are focussed on composites and high-tech manufacturing and include an automation & digitalisation lab, large autoclaves, CNC milling machines and various testing equipment. All facilities are easily reachable and available for high tech manufacturing at TPY."}),(0,i.jsx)("p",{children:"Please feel free to inquire about the possibilities and a quotation through this machine portal."})]})})]}),(0,i.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap sm:mx-4 mb-16 max-width sm:mx-auto px-4",children:[(0,i.jsx)("div",{className:" w-full md:w-1/4 ",children:(0,i.jsx)(b,{machines:P,machineType:y,onUpdate:_})}),(0,i.jsxs)("div",{className:" w-full md:w-3/4 ",children:[(0,i.jsx)(g,{onUpdate:o}),(0,i.jsx)(v,{machines:P,searchQuery:a,machineType:y})]})]}),(0,i.jsx)(w,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/",target:"_blank"}),(0,i.jsx)("div",{children:(0,i.jsx)(h,{})}),(0,i.jsx)(m,{})]})}}},function(e){e.O(0,[7142,9774,2888,179],(function(){return t=7137,e(e.s=t);var t}));var t=e.O();_N_E=t}]);