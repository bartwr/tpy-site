(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"1MQV":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),i=n("1OyB"),s=n("vuIU"),c=n("Ji7U"),o=n("md7G"),l=n("foSv"),u=n("MX0m"),f=n.n(u),p=n("q1tI"),b=n.n(p),d=n("a6RD"),x=n.n(d),h=n("YFqc"),j=n.n(h),v=n("sNsB"),m=n("L8iz"),O=Object(m.a)((function(t,e){for(var n=e,r=0;r<t.length;){if(null==n)return;n=n[t[r]],r+=1}return n})),g=Object(m.a)((function(t,e){return O([t],e)})),w=n("aTUd"),y=n("KMkw"),k=n("wd/R"),E=n.n(k),N=n("DlQD"),z=n.n(N),R=n("kuH4"),M=b.a.createElement;function B(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}x()((function(){return n.e(1).then(n.bind(null,"IEaQ"))}),{loadableGenerated:{webpack:function(){return["IEaQ"]},modules:["./small-caps-title.js"]}});var I=x()((function(){return n.e(9).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["./title.js"]}}),S=x()((function(){return n.e(27).then(n.bind(null,"ay7q"))}),{loadableGenerated:{webpack:function(){return["ay7q"]},modules:["./date-circle.js"]}}),T=function(t){Object(c.a)(n,t);var e=B(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={event:null},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(Object(R.a)());case 2:t=e.sent,t=this.formatEvents(t),t=this.filterEvents(t),t=this.sortEvents(t),this.setState({event:t[0]});case 7:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"formatEvents",value:function(t){return v.a(g("fields"),t)}},{key:"filterEvents",value:function(t){t=w.a(0,this.props.limit||20,t);return t=y.a((function(t){var e=E()();return E()(t.datetime).diff(e,"days")>=0}),t)}},{key:"sortEvents",value:function(t){return t.reverse()}},{key:"render",value:function(){if(!this.state.event)return M("div",null);var t=this.state.event.datetime.split("T")[0]+"/"+this.state.event.slug,e=this.state.event.introText.length<=10?z()(this.state.event.detailedText).replace(/<\/?[^>]+(>|$)/g,"").substring(0,200):this.state.event.introText;return M(j.a,{href:"/event?slug=".concat(t),as:"/events/".concat(t)},M("div",{className:"jsx-67922568 NextEvent"},M("h1",{className:"jsx-67922568"},"What is happening?"),M("div",{className:"jsx-67922568 EventBlock"},M("header",{style:{backgroundImage:"url( ".concat(this.state.event.smallImage.fields.file.url," )")},className:"jsx-67922568"}),M("div",{className:"jsx-67922568 date-circle-wrapper"},M(S,{date:this.state.event.datetime})),M("div",{className:"jsx-67922568 info"},M(I,{size:"small",style:{fontSize:"30px",fontWeight:"700",lineHeight:"32px"}},this.state.event.title),M("p",{className:"jsx-67922568"},e),M("div",{className:"jsx-67922568 gradient"}))),M(f.a,{id:"67922568"},[".NextEvent.jsx-67922568{margin-top:18px;margin-left:39px;height:269px;border-left:1px solid #979797;padding:0 32px;display:none;}","@media(min-width:1300px){.NextEvent.jsx-67922568{display:block;}}",'h1.jsx-67922568{width:242px;height:31px;color:#0f2247;font-family:"Noe Display",sans-serif;font-size:27px;font-weight:700;margin:0;margin-bottom:0.5rem;}',".EventBlock.jsx-67922568{width:566px;height:232px;background:#fff;box-shadow:0 2px 13px rgba(0,0,0,0.2);margin:0;overflow:hidden;position:relative;cursor:pointer;-webkit-transition:all 0.2s;transition:all 0.2s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".EventBlock.jsx-67922568:hover{box-shadow:0 4px 15px rgba(0,0,0,0.2);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;-webkit-transition:all 0.4s cubic-bezier(.08,.82,.17,1);transition:all 0.4s cubic-bezier(.08,.82,.17,1);-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}","header.jsx-67922568{background:center center / cover no-repeat;min-width:194px;max-width:194px;width:194px;height:232px;}",'header.jsx-67922568::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.05);width:194px;height:232px;}',".date-circle-wrapper.jsx-67922568{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:-29px;}",".info.jsx-67922568{padding:21px 17px;position:relative;}",'.info.jsx-67922568 p.jsx-67922568{font-family:"Montserrat",sans-serif;font-size:14px;font-weight:300;line-height:24px;}',".gradient.jsx-67922568{position:absolute;bottom:0;left:0;width:100%;height:60px;z-index:1;background-image:linear-gradient(rgba(255,255,255,0.3),#fff);}"])))}}]),n}(p.Component);e.default=T},KMkw:function(t,e,n){"use strict";var r=n("L8iz"),a=n("gSdd");var i=n("OEMQ"),s=n("ZMgP"),c=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=s.a.init,t.prototype["@@transducer/result"]=s.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),o=Object(r.a)((function(t,e){return new c(t,e)})),l=n("ZuG0"),u=Object(r.a)(Object(a.a)(["filter"],o,(function(t,e){return n=e,"[object Object]"===Object.prototype.toString.call(n)?Object(i.a)((function(n,r){return t(e[r])&&(n[r]=e[r]),n}),{},Object(l.a)(e)):function(t,e){for(var n=0,r=e.length,a=[];n<r;)t(e[n])&&(a[a.length]=e[n]),n+=1;return a}(t,e);var n})));e.a=u},aTUd:function(t,e,n){"use strict";var r=n("/PtW");function a(t,e){return function(){var n=arguments.length;if(0===n)return e();var a=arguments[n-1];return Object(r.a)(a)||"function"!==typeof a[t]?e.apply(this,arguments):a[t].apply(a,Array.prototype.slice.call(arguments,0,n-1))}}var i=n("SqIO"),s=n("L8iz"),c=n("nr3+");function o(t){return function e(n,r,a){switch(arguments.length){case 0:return e;case 1:return Object(c.a)(n)?e:Object(s.a)((function(e,r){return t(n,e,r)}));case 2:return Object(c.a)(n)&&Object(c.a)(r)?e:Object(c.a)(n)?Object(s.a)((function(e,n){return t(e,r,n)})):Object(c.a)(r)?Object(s.a)((function(e,r){return t(n,e,r)})):Object(i.a)((function(e){return t(n,r,e)}));default:return Object(c.a)(n)&&Object(c.a)(r)&&Object(c.a)(a)?e:Object(c.a)(n)&&Object(c.a)(r)?Object(s.a)((function(e,n){return t(e,n,a)})):Object(c.a)(n)&&Object(c.a)(a)?Object(s.a)((function(e,n){return t(e,r,n)})):Object(c.a)(r)&&Object(c.a)(a)?Object(s.a)((function(e,r){return t(n,e,r)})):Object(c.a)(n)?Object(i.a)((function(e){return t(e,r,a)})):Object(c.a)(r)?Object(i.a)((function(e){return t(n,e,a)})):Object(c.a)(a)?Object(i.a)((function(e){return t(n,r,e)})):t(n,r,a)}}}var l=o(a("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})));e.a=l}}]);