(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{GFaZ:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),s=a("vuIU"),r=a("JX7q"),o=a("Ji7U"),i=a("md7G"),l=a("foSv"),c=a("MX0m"),f=a.n(c),x=a("a6RD"),p=a.n(x),h=a("q1tI"),m=a.n(h).a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var s=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var u=p()((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"a3/r"))}),{loadableGenerated:{webpack:function(){return["a3/r"]},modules:["./button.js"]}}),j=(p()((function(){return Promise.all([a.e(4),a.e(30)]).then(a.bind(null,"VOfC"))}),{loadableGenerated:{webpack:function(){return["VOfC"]},modules:["./map.js"]}}),function(e){Object(o.a)(a,e);var t=d(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={},s.handleChange=s.handleChange.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.state[e.target.name]=e.target.value,this.forceUpdate()}},{key:"submitForm",value:function(e){var t=this;return e&&e.preventDefault(),fetch("/api/newsletter/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.state.EMAIL,fname:this.state.FNAME,lname:this.state.LNAME,cname:this.state.CNAME})}).then((function(e){alert("Done! See you soon at Technology Park Ypenburg."),t.refs.form.reset()})).catch((function(e){console.log("Something went wrong while subscribing.")})),!1}},{key:"render",value:function(){var e=this,t=["EMAIL","FNAME","LNAME","CNAME"];return m("div",{className:"jsx-2523756537 ContactForm flex"},m("div",{className:"jsx-2523756537 flex-1 form"},m("p",{className:"jsx-2523756537 intro-text"},this.props.introText),m("form",{onSubmit:function(t){return e.submitForm(t)},ref:"form",className:"jsx-2523756537"},t.indexOf("EMAIL")>=0&&m("input",{required:!0,type:"email",name:"EMAIL",placeholder:"Email",onChange:this.handleChange,className:"jsx-2523756537"}),t.indexOf("FNAME")>=0&&m("input",{required:!0,type:"text",name:"FNAME",placeholder:"First name",onChange:this.handleChange,className:"jsx-2523756537"}),t.indexOf("LNAME")>=0&&m("input",{type:"text",name:"LNAME",placeholder:"Surname",onChange:this.handleChange,className:"jsx-2523756537"}),t.indexOf("CNAME")>=0&&m("input",{type:"text",name:"CNAME",placeholder:"Company",onChange:this.handleChange,className:"jsx-2523756537"}),m("div",{align:"right",className:"jsx-2523756537"},m(u,{type:"submit"},"subscribe")))),m("div",{className:"jsx-2523756537 flex-1 address"},m("p",{hidden:!0,className:"jsx-2523756537"},m("img",{src:"/static/pages/newsletter/page-header.jpg",alt:"2019: THT OPENING EN HACKATON - \xa9 sacha grootjans",className:"jsx-2523756537"})),m("p",{className:"jsx-2523756537 paragraph"},"Technology Park Ypenburg",m("br",{className:"jsx-2523756537"}),m("a",{href:"https://www.openstreetmap.org/node/2599747462",target:"_blank",rel:"external noopener",className:"jsx-2523756537"},"Laan van Ypenburg 108"),m("br",{className:"jsx-2523756537"}),"2497 GC The Hague",m("br",{className:"jsx-2523756537"}),"The Netherlands")),m(f.a,{id:"2523756537"},['.ContactForm.jsx-2523756537 p.jsx-2523756537{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:24px;font-weight:500;line-height:32px;}',"img.jsx-2523756537{display:block;max-width:100%;}",'.intro-text.jsx-2523756537{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:24px;font-weight:500;line-height:32px;}',".flex.jsx-2523756537{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".flex-1.jsx-2523756537{-webkit-flex:1;-ms-flex:1;flex:1;}",".form.jsx-2523756537,.address.jsx-2523756537{width:48%;}","@media (max-width:600px){.flex.jsx-2523756537{display:block;}.form.jsx-2523756537,.address.jsx-2523756537{width:unset;}}",".form.jsx-2523756537{margin-bottom:26px;}",'.form.jsx-2523756537 label.jsx-2523756537{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:32px;}','.ContactForm.jsx-2523756537 input[type="text"].jsx-2523756537,.ContactForm.jsx-2523756537 input[type="email"].jsx-2523756537,.ContactForm.jsx-2523756537 input[type="date"].jsx-2523756537,.ContactForm.jsx-2523756537 input[type="tel"].jsx-2523756537,.ContactForm.jsx-2523756537 select.jsx-2523756537,.ContactForm.jsx-2523756537 textarea.jsx-2523756537{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:40px;height:40px;background-color:#f8f8f8;border:none;display:block;margin:24px 0;width:100%;padding:0 8px;}',".ContactForm.jsx-2523756537 textarea.jsx-2523756537{padding:6px 8px;height:200px;}",'.address.jsx-2523756537 .paragraph.jsx-2523756537{color:#0f2247;font-family:"Montserrat",sans-serif;font-size:19px;font-weight:300;line-height:32px;}',"@media(min-width:480px){.address.jsx-2523756537{margin:0 0 0 34px;}}",".address.jsx-2523756537 a.jsx-2523756537{color:#0f2247;}"]))}}]),a}(h.Component));t.default=j}}]);