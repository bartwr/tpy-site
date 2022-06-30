"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8673],{8673:function(e,a,t){t.r(a);var s=t(5893),n=t(5988),r=t.n(n),o=t(5152),i=t(7294),l=t(5588),f=t(902);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function h(e,a){return!a||"object"!==b(a)&&"function"!==typeof a?c(e):a}function p(e,a){return p=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},p(e,a)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=x(e);if(a){var n=x(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return h(this,t)}}var u=(0,o.default)((function(){return t.e(5068).then(t.bind(t,5068))}),{loadableGenerated:{webpack:function(){return[5068]}}}),j=(0,o.default)((function(){return Promise.all([t.e(6725),t.e(8014)]).then(t.bind(t,8014))}),{loadableGenerated:{webpack:function(){return[8014]}}}),y=function(e){!function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&p(e,a)}(i,e);var a,t,n,o=m(i);function i(e){var a;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i),(a=o.call(this,e)).state={},a.handleChange=a.handleChange.bind(c(a)),a}return a=i,(t=[{key:"handleChange",value:function(e){this.state[e.target.name]=e.target.value,this.forceUpdate()}},{key:"submitForm",value:function(e){var a=this;return e&&e.preventDefault(),fetch("".concat(f.Z.apiUrl,"/mail/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,company:this.state.company,email:this.state.email,tel:this.state.tel,website:this.state.website,type:this.state.type,eventDate:this.state.eventDate,eventExpectedRsvps:this.state.eventExpectedRsvps,message:this.state.message})}).then((function(){alert("Thank you for your email!"),a.refs.form.reset()})),!1}},{key:"render",value:function(){var e,a=this,t={showMap:!0,showAddress:!0};switch(this.props.type){case"join-community":e=["name","company","email","tel","website","type","message"],t.showMap=!1,t.showAdress=!1;break;case"host-event":e=["name","company","email","tel","eventDate","eventExpectedRsvps","message"];break;default:e=["name","email","tel","message"]}return(0,s.jsxs)("div",{className:"jsx-8f4eeb04e6ad5492 ContactForm flex",children:[(0,s.jsxs)("div",{className:"jsx-8f4eeb04e6ad5492 flex-1 form",children:[(0,s.jsx)("p",{className:"jsx-8f4eeb04e6ad5492 intro-text",children:this.props.introText}),(0,s.jsxs)("form",{onSubmit:function(e){return a.submitForm(e)},ref:"form",className:"jsx-8f4eeb04e6ad5492",children:[e.indexOf("type")>=0&&(0,s.jsxs)("div",{className:"jsx-8f4eeb04e6ad5492",children:[(0,s.jsx)("label",{className:"jsx-8f4eeb04e6ad5492",children:"I'm interested in joining the community by "}),(0,s.jsx)("select",{name:"type",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492",children:l.UID((function(e){return(0,s.jsx)("option",{value:e,className:"jsx-8f4eeb04e6ad5492",children:e},e)}),["","becoming a member","using a workspace","hosting an event","working on a co-create project","other"])})]}),e.indexOf("name")>=0&&(0,s.jsx)("input",{required:!0,type:"text",name:"name",placeholder:"Name",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("company")>=0&&(0,s.jsx)("input",{type:"text",name:"company",placeholder:"Company",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("email")>=0&&(0,s.jsx)("input",{required:!0,type:"email",name:"email",placeholder:"Email",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("tel")>=0&&(0,s.jsx)("input",{type:"tel",name:"tel",placeholder:"Phone number",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("website")>=0&&(0,s.jsx)("input",{type:"text",name:"website",placeholder:"Your website",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("eventDate")>=0&&(0,s.jsx)("input",{type:"date",name:"eventDate",placeholder:"Date of event",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),e.indexOf("eventExpectedRsvps")>=0&&(0,s.jsx)("select",{className:"jsx-8f4eeb04e6ad5492",children:l.UID((function(e){return(0,s.jsx)("option",{value:e,className:"jsx-8f4eeb04e6ad5492",children:e},e)}),["10-50","50-100","100-200","200-500","other"])}),e.indexOf("message")>=0&&(0,s.jsx)("textarea",{name:"message",placeholder:"Message",onChange:this.handleChange,className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("div",{align:"right",className:"jsx-8f4eeb04e6ad5492",children:(0,s.jsx)(u,{type:"submit",children:"send message"})})]})]}),(0,s.jsxs)("div",{className:"jsx-8f4eeb04e6ad5492 flex-1 address",children:[t.showMap&&(0,s.jsx)("div",{style:{margin:"24px 0"},className:"jsx-8f4eeb04e6ad5492",children:(0,s.jsx)(j,{})}),t.showMap&&(0,s.jsxs)("div",{className:"jsx-8f4eeb04e6ad5492",children:[(0,s.jsxs)("p",{className:"jsx-8f4eeb04e6ad5492 paragraph",children:["Technology Park Ypenburg",(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("a",{href:"https://www.google.com/maps/place/Technology+Park+Ypenburg/@52.042522,4.3526007,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5b7f39f75f887:0xc779b2518cc28f12!8m2!3d52.042522!4d4.3547894?hl=en",target:"_blank",rel:"external noopener",className:"jsx-8f4eeb04e6ad5492",children:"Laan van Ypenburg 108"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),"2497 GC The Hague",(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),"The Netherlands"]}),(0,s.jsxs)("p",{className:"jsx-8f4eeb04e6ad5492 paragraph",children:["TPY is conveniently located between The Hague and Delft, right next to the A4 and close to the ",(0,s.jsx)("a",{href:"https://www.htm.nl/halte/laan-van-ypenburg",target:"_blank",rel:"external",className:"jsx-8f4eeb04e6ad5492",children:"Laan van Ypenburg"})," tram- and bus stop (tram 15 & bus 30). We also have plenty of free parking facilities at our park!"]})]}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"}),(0,s.jsx)("br",{className:"jsx-8f4eeb04e6ad5492"})]}),(0,s.jsx)(r(),{id:"8f4eeb04e6ad5492",children:'.ContactForm.jsx-8f4eeb04e6ad5492{}.ContactForm.jsx-8f4eeb04e6ad5492 p.jsx-8f4eeb04e6ad5492{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:24px;font-weight:500;line-height:32px}.intro-text.jsx-8f4eeb04e6ad5492{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:24px;font-weight:500;line-height:32px}.flex.jsx-8f4eeb04e6ad5492{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flex-1.jsx-8f4eeb04e6ad5492{-webkit-flex:1;-ms-flex:1;flex:1}.form.jsx-8f4eeb04e6ad5492,.address.jsx-8f4eeb04e6ad5492{width:48%}@media(max-width:600px){.flex.jsx-8f4eeb04e6ad5492{display:block}.form.jsx-8f4eeb04e6ad5492,.address.jsx-8f4eeb04e6ad5492{width:unset}}.form.jsx-8f4eeb04e6ad5492{margin-bottom:26px}.form.jsx-8f4eeb04e6ad5492 label.jsx-8f4eeb04e6ad5492{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:32px}.ContactForm.jsx-8f4eeb04e6ad5492 input[type="text"].jsx-8f4eeb04e6ad5492,.ContactForm.jsx-8f4eeb04e6ad5492 input[type="email"].jsx-8f4eeb04e6ad5492,.ContactForm.jsx-8f4eeb04e6ad5492 input[type="date"].jsx-8f4eeb04e6ad5492,.ContactForm.jsx-8f4eeb04e6ad5492 input[type="tel"].jsx-8f4eeb04e6ad5492,.ContactForm.jsx-8f4eeb04e6ad5492 select.jsx-8f4eeb04e6ad5492,.ContactForm.jsx-8f4eeb04e6ad5492 textarea.jsx-8f4eeb04e6ad5492{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:40px;height:40px;background-color:#f8f8f8;border:none;display:block;margin:24px 0;width:100%;padding:0 8px}.ContactForm.jsx-8f4eeb04e6ad5492 textarea.jsx-8f4eeb04e6ad5492{padding:6px 8px;height:200px}.address.jsx-8f4eeb04e6ad5492 .paragraph.jsx-8f4eeb04e6ad5492{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:32px}@media(min-width:600px){.address.jsx-8f4eeb04e6ad5492{margin:0 0 0 34px}}.address.jsx-8f4eeb04e6ad5492 a.jsx-8f4eeb04e6ad5492{color:#0f2247}'})]})}}])&&d(a.prototype,t),n&&d(a,n),i}(i.Component);a.default=y},902:function(e,a){a.Z={apiUrl:"https://tpy-site.herokuapp.com/api"}}}]);