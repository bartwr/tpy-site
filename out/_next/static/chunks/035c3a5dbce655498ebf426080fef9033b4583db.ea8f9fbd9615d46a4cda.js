(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+TcS":function(t,e,i){"use strict";i.r(e);var a=i("1OyB"),n=i("vuIU"),s=i("Ji7U"),o=i("md7G"),c=i("foSv"),r=i("MX0m"),l=i.n(r),x=i("q1tI"),p=i.n(x),d=i("nOHt"),m=i.n(d),u=i("a6RD"),f=i.n(u),h=i("YFqc"),v=i.n(h),j=i("sNsB"),b=i("EVdn"),g=i.n(b),y=p.a.createElement;function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return Object(o.a)(this,i)}}var w=f()((function(){return i.e(36).then(i.bind(null,"aG/3"))}),{loadableGenerated:{webpack:function(){return["aG/3"]},modules:["../components/logo.js"]}}),N=(f()((function(){return i.e(67).then(i.bind(null,"1MQV"))}),{loadableGenerated:{webpack:function(){return["1MQV"]},modules:["../components/next-event.js"]}}),function(t){Object(s.a)(i,t);var e=k(i);function i(t){var n;Object(a.a)(this,i),n=e.call(this,t);var s="undefined"!==typeof document;return n.state={showNav:!1,path:s&&m.a.pathname},n.TO_interval,m.a.events.on("routeChangeComplete",(function(t){g()("body").css("overflow-y","unset")})),n}return Object(n.a)(i,[{key:"componentDidMount",value:function(){this.autoHideNav(),this.setState({activePrimaryNav:window.innerWidth<780?"How":null})}},{key:"componentUnMount",value:function(){clearTimeout(this.TO_interval)}},{key:"autoHideNav",value:function(){var t=this;g()((function(){var e,i=0,a=g()(".Navigation").outerHeight();g()(window).scroll((function(i){e=!0,t.setState({activePrimaryNav:null,showNav:!1})})),t.TO_interval=setInterval((function(){e&&(!function(){var t=g()(window).scrollTop();if(g()(".Navigation").hasClass("is-active"))return!1;t>i&&t>a?g()(".Navigation").removeClass("nav-down").addClass("nav-up"):g()(".Navigation").removeClass("nav-up").addClass("nav-down");i=t}(),e=!1)}),250)}))}},{key:"clickToggleButton",value:function(){window.innerWidth<780&&g()("body").css("overflow-y",this.state.showNav?"unset":"hidden"),this.setState({activePrimaryNav:this.state.showNav?null:"How",showNav:!this.state.showNav})}},{key:"clickPrimaryNavLink",value:function(t){this.state.activePrimaryNav==t?this.setState({activePrimaryNav:null,showNav:!1}):this.setState({activePrimaryNav:t,showNav:!0})}},{key:"hoverPrimaryNavLink",value:function(t){window.innerWidth<780||this.setState({activePrimaryNav:t,showNav:!0})}},{key:"render",value:function(){var t=this;return y("header",{className:"jsx-3319463404 "+("Navigation"+(this.state.showNav?" is-active":"")||!1)},y("div",{className:"jsx-3319463404 max-width"},y(v.a,{href:"/"},y("div",{style:{cursor:"pointer",display:"inline-block"},title:"Back to home",className:"jsx-3319463404"},y(w,{style:{zIndex:1}}))),y("div",{className:"jsx-3319463404 white-background main only-on-desktop"}),y("div",{className:"jsx-3319463404 white-background sub only-on-desktop"}),y("div",{onClick:function(){return t.setState({showNav:!1,activePrimaryNav:null})},className:"jsx-3319463404 black-background only-on-desktop"}),y("nav",{className:"jsx-3319463404 main-nav"},y("ul",{className:"jsx-3319463404"},j.a((function(e){return y("li",{key:e.title,className:"jsx-3319463404 "+("primary-nav-item"+(t.state.activePrimaryNav==e.title?" is-active":"")||!1)},e.href?y(v.a,{href:e.href},y("a",{onClick:function(){return t.setState({showNav:!1,activePrimaryNav:e.title})},className:"jsx-3319463404 "+("primary-nav-link"+(t.state.path==e.href?" is-active":"")||!1)},e.title)):y("a",{onClick:function(){return t.clickPrimaryNavLink(e.title)},onMouseOver:function(){return t.hoverPrimaryNavLink(e.title)},className:"jsx-3319463404 primary-nav-link"},e.title),y("nav",{className:"jsx-3319463404 "+("secundary-nav"+(e.items?" has-subnav":"")||!1)},y("ul",{className:"jsx-3319463404"},e.items&&j.a((function(e){return y("li",{key:e.title,className:"jsx-3319463404 secundary-nav-item"},y(v.a,{href:e.href},y("div",{style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"auto ".concat(e.imageHeight)},className:"jsx-3319463404 icon"})),y("div",{style:{flex:1,alignSelf:"center"},className:"jsx-3319463404"},y(v.a,{href:e.href},y("a",{className:"jsx-3319463404 "+("secundary-nav-link"+(t.state.path==e.href?" is-active":"")||!1)},e.title))))}),e.items))))}),[{title:"Home",href:"/"},{title:"What we offer",items:[{title:"Community",href:"/community",image:"/static/components/carousel/tpy-icon-community.svg"},{title:"Campus",href:"/campus",image:"/static/components/carousel/tpy-icon-campus.svg"},{title:"Academy",href:"/academy",image:"/static/components/carousel/tpy-icon-academy.svg"},{title:"Acceleration & Incubation",href:"/acceleration",image:"/static/components/carousel/tpy-icon-acceleration.svg"},{title:"Softlanding",href:"/softlanding",image:"/static/components/carousel/tpy-icon-softlanding.svg"},{title:"Co-creation",href:"/co-creation",image:"/static/components/carousel/tpy-icon-co-creation.svg"},{title:"Win a Voucher!",href:"/win",image:"/static/components/carousel/tpy-icon-academy.svg"}]},{title:"What is happening?",href:"/happening"},{title:"Pricing",href:"/pricing"},{title:"About",items:[{title:"Contact details",href:"/contact",image:"/static/components/carousel/tpy-icon-community.svg"},{title:"About us",href:"/about",image:"/static/components/carousel/tpy-icon-campus.svg"},{title:"History of TPY",href:"/history-of-tpy",image:"/static/components/carousel/tpy-icon-academy.svg"}]}]))),y("div",{onClick:function(){return t.clickToggleButton()},className:"jsx-3319463404 toggle-nav flex justify-center flex-col h-full"},y("span",{className:"jsx-3319463404 "+("icon-"+(this.state.showNav?"close":"hamburger")||!1)}))),y(l.a,{id:"3319463404"},[".Navigation.jsx-3319463404{position:fixed;top:0;left:0;width:100%;padding:1rem 18px;z-index:10;background:#fff;}",".Navigation.is-active.jsx-3319463404{bottom:0;}","@media(min-width:480px){.Navigation.is-active.jsx-3319463404{bottom:none;}}","@media(max-width:1100px){.Navigation.jsx-3319463404{background:rgba(255,255,255,0.95);}}",".Navigation.jsx-3319463404,.Navigation.jsx-3319463404 .toggle-nav.jsx-3319463404{-webkit-transition:top 0.2s ease-in-out;transition:top 0.2s ease-in-out;}",".Navigation.nav-up.jsx-3319463404,.Navigation.nav-up.jsx-3319463404 .toggle-nav.jsx-3319463404{-webkit-transition:top 0.4s ease-in-out;transition:top 0.4s ease-in-out;top:-107px;}",".Navigation.is-active.jsx-3319463404,.Navigation.is-active.jsx-3319463404 .toggle-nav.jsx-3319463404{-webkit-transition:top 0s;transition:top 0s;}","li.secundary-nav-item.jsx-3319463404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;}",".Navigation.jsx-3319463404 .secundary-nav-item.jsx-3319463404 .icon.jsx-3319463404{background:no-repeat url('https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview');background-size:auto 42px;height:42px;width:42px;min-width:42px;margin-right:5px;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;background-position:center center;}","@media (min-width:1100px){.Navigation.jsx-3319463404 .secundary-nav-item.jsx-3319463404 .icon.jsx-3319463404{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.Navigation.jsx-3319463404{padding:0;}.max-width.jsx-3319463404{width:1327px;max-width:100%;margin:0 auto;padding:40px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}",".main-nav.jsx-3319463404{display:none;padding-top:3rem;margin-top:22px;margin-left:-32px;position:relative;z-index:2;}",".secundary-nav.jsx-3319463404{position:static;z-index:1;}",".secundary-nav.jsx-3319463404 li.jsx-3319463404{min-height:42px;}",".main-nav.jsx-3319463404>ul.jsx-3319463404{position:relative;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}","@media(min-width:1100px){.main-nav.jsx-3319463404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:0;margin-left:164px;padding-top:0;}}","header.is-active.jsx-3319463404 .main-nav.jsx-3319463404{display:block;}","ul.jsx-3319463404,li.jsx-3319463404{list-style:none;padding:0;margin:0;}","ul.jsx-3319463404{min-height:16rem;width:100%;}","@media(min-width:1100px){ul.jsx-3319463404{height:auto;min-height:auto;}}","li.jsx-3319463404{display:block;}","ul.jsx-3319463404 ul.jsx-3319463404{border-left:solid #0F2247 1px;padding-left:1rem;width:auto;height:auto;}",".primary-nav-item.jsx-3319463404{z-index:1;}",'nav.jsx-3319463404 a.jsx-3319463404{-webkit-text-decoration:none;text-decoration:none;line-height:44px;color:#0F2247;font-family:"Montserrat",sans-serif;font-size:17px;line-height:22px;font-weight:300;display:inline-block;position:relative;margin-left:12px;padding:10px 17px;margin-bottom:24px;min-width:84px;cursor:pointer;}',".primary-nav-item.jsx-3319463404{max-width:140px;}",".primary-nav-link.jsx-3319463404{min-width:96px;white-space:nowrap;max-width:128px;max-height:175px;white-space:normal;}",".secundary-nav-link.jsx-3319463404{margin-right:0;}","@media(min-width:1100px){nav.jsx-3319463404 a.jsx-3319463404{padding:10px 8px;}.secundary-nav-link.jsx-3319463404{margin-right:0;min-height:10px;height:30px;}.primary-nav-item.jsx-3319463404{max-width:9999px;}nav.jsx-3319463404 a.primary-nav-link.jsx-3319463404{padding:10px 0;min-width:unset;white-space:nowrap;border-bottom:solid transparent 9px;max-width:9999px;max-height:9999px;}.secundary-nav-link.jsx-3319463404{margin-right:10px;}}","nav.jsx-3319463404 nav.jsx-3319463404 a.jsx-3319463404{padding:10px 17px;margin-left:10px;margin-right:10px;display:block;}","@media(min-width:1100px){nav.jsx-3319463404 a.jsx-3319463404{margin-bottom:0;text-align:center;}nav.jsx-3319463404 nav.jsx-3319463404 a.jsx-3319463404{padding:4px 8px;}}",".primary-nav-item.jsx-3319463404{left:-1rem;}","@media(min-width:1100px){.primary-nav-item.jsx-3319463404{left:0;}}","@media(min-width:1100px){.primary-nav-item.jsx-3319463404{position:static;left:0;width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:10px;margin:0 1rem;}.secundary-nav.jsx-3319463404>ul.jsx-3319463404{min-width:204px;}}","@media(min-width:1400px){.secundary-nav.jsx-3319463404>ul.jsx-3319463404{min-width:302px;}}","nav.jsx-3319463404 a.jsx-3319463404:hover,nav.jsx-3319463404 a.jsx-3319463404:focus,nav.jsx-3319463404 a.jsx-3319463404:active,.primary-nav-item.is-active.jsx-3319463404>a.jsx-3319463404,.secundary-nav-link.is-active.jsx-3319463404{background:#FF8850;}","@media(min-width:1100px){nav.jsx-3319463404 .primary-nav-link.jsx-3319463404:hover,nav.jsx-3319463404 .primary-nav-link.jsx-3319463404:focus,nav.jsx-3319463404 .primary-nav-link.jsx-3319463404:active,nav.jsx-3319463404 .primary-nav-item.is-active.jsx-3319463404>a.jsx-3319463404{background:transparent;border-bottom:solid #FF8850 9px;}}","nav.jsx-3319463404{width:calc(100vw - 20px);}","nav.jsx-3319463404 nav.jsx-3319463404{display:none;width:calc(100vw - 2px);position:absolute;top:0;left:0;padding-left:140px;z-index:0;}",".primary-nav-item.is-active.jsx-3319463404>nav.has-subnav.jsx-3319463404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",'.toggle-nav.jsx-3319463404{cursor:pointer;font-family:"Montserrat",sans-serif;font-size:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:fixed;top:1rem;right:0;height:32px;z-index:1;padding:0 18px;}',"@media(min-width:480px){.toggle-nav.jsx-3319463404{height:50px;}}",".icon-close.jsx-3319463404,.icon-hamburger.jsx-3319463404{width:24px;height:24px;display:block;background:center center no-repeat;background-size:contain;}",".icon-close.jsx-3319463404{background-size:18px;background-image:url(/static/components/navigation/close.svg);}",".icon-hamburger.jsx-3319463404{height:100%;background-size:24px;background-image:url(/static/components/navigation/hamburger.svg);}","@media(min-width:1100px){.toggle-nav.jsx-3319463404{display:none;}nav.jsx-3319463404{position:relative;}ul.jsx-3319463404{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}ul.jsx-3319463404 ul.jsx-3319463404{border-left:none;display:block;}nav.jsx-3319463404 nav.jsx-3319463404{width:unset;position:absolute;left:0;top:7rem;margin-left:34px;padding-left:8px;padding-left:0;}header.jsx-3319463404 .white-background.main.jsx-3319463404{background:rgba(255,255,255,0.95);width:100%;height:122px;position:absolute;width:100%;left:0;top:0;}header.jsx-3319463404 .white-background.sub.jsx-3319463404{-webkit-transition:background .44s .2s cubic-bezier(0.52,0.16,0.24,1),max-height .56s cubic-bezier(0.52,0.16,0.24,1);transition:background .44s .2s cubic-bezier(0.52,0.16,0.24,1),max-height .56s cubic-bezier(0.52,0.16,0.24,1);max-height:0;}header.is-active.jsx-3319463404 .white-background.sub.jsx-3319463404{-webkit-transition:background .36s cubic-bezier(0.32,0.08,0.24,1),max-height .56s cubic-bezier(0.52,0.16,0.24,1);transition:background .36s cubic-bezier(0.32,0.08,0.24,1),max-height .56s cubic-bezier(0.52,0.16,0.24,1);position:absolute;height:28rem;max-height:505px;background:#fff;width:100%;left:0;top:122px;}@-webkit-keyframes fadein-jsx-3319463404{from{opacity:0;}to{opacity:1;}}@keyframes fadein-jsx-3319463404{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeout-jsx-3319463404{from{opacity:1;}to{opacity:0;}}@keyframes fadeout-jsx-3319463404{from{opacity:1;}to{opacity:0;}}header.jsx-3319463404 .black-background.jsx-3319463404{-webkit-animation:fadeout-jsx-3319463404 0.4s;animation:fadeout-jsx-3319463404 0.4s;}header.is-active.jsx-3319463404 .black-background.jsx-3319463404{-webkit-animation:fadein-jsx-3319463404 0.4s;animation:fadein-jsx-3319463404 0.4s;opacity:1;background:rgba(0,0,0,0.8);height:100%;width:100%;position:fixed;top:0;left:0;z-index:-1;}.secundary-nav.jsx-3319463404{-webkit-transition:opacity 1s 0s;transition:opacity 1s 0s;opacity:0;}header.is-active.jsx-3319463404 .secundary-nav.jsx-3319463404{-webkit-transition:opacity .36s .56s;transition:opacity .36s .56s;opacity:1;}nav.jsx-3319463404 nav.jsx-3319463404 li.jsx-3319463404{margin:8px 0;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header.is-active.jsx-3319463404 nav.jsx-3319463404 nav.jsx-3319463404 a.jsx-3319463404{white-space:nowrap;text-align:left;display:inline-block;}}","@media(min-width:480px){.Navigation.jsx-3319463404 .icon.jsx-3319463404:first-child{background-size:34px;background-position:15px 50%;}.Navigation.jsx-3319463404 .icon.jsx-3319463404{background-size:42px;background-position:12px 50%;}}","@media(min-width:1100px){.secundary-nav-link.jsx-3319463404{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}}"]))}}]),i}(x.Component));e.default=N},aIN1:function(t,e,i){"use strict";i.r(e);var a=i("1OyB"),n=i("vuIU"),s=i("Ji7U"),o=i("md7G"),c=i("foSv"),r=i("MX0m"),l=i.n(r),x=i("q1tI"),p=i.n(x),d=(i("a6RD"),i("YFqc")),m=i.n(d),u=p.a.createElement;function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;i=Reflect.construct(a,arguments,n)}else i=a.apply(this,arguments);return Object(o.a)(this,i)}}var h=function(t){Object(s.a)(i,t);var e=f(i);function i(){return Object(a.a)(this,i),e.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return u("div",{className:"jsx-738079784 Footer"},u("div",{className:"jsx-738079784 max-width flex"},u("div",{className:"jsx-738079784"},u("nav",{className:"jsx-738079784 social-icons"},u("a",{href:"https://www.facebook.com/TPYthehague/",target:"_blank",title:"",className:"jsx-738079784"},u("img",{src:"/static/components/footer/facebook-icon.svg",alt:"Facebook",className:"jsx-738079784"})),u("a",{href:"https://www.linkedin.com/company/tpythehague/",target:"_blank",className:"jsx-738079784"},u("img",{src:"/static/components/footer/linkedin-icon.svg",alt:"LinkedIn",className:"jsx-738079784"})),u("a",{href:"https://technologyparkypenburg.medium.com/",target:"_blank",className:"jsx-738079784 font-bold"},"M"),u("a",{href:"https://www.instagram.com/technology_park_ypenburg/",target:"_blank",className:"jsx-738079784"},u("img",{src:"/static/components/footer/instagram-icon.png",alt:"Instagram",className:"jsx-738079784"})))),u("nav",{className:"jsx-738079784 footer-nav"},u(m.a,{href:"/contact"},u("a",{className:"jsx-738079784 nav-link"},"Contact")),u(m.a,{href:"/privacy-policy"},u("a",{className:"jsx-738079784 nav-link"},"Privacy Policy")))),u(l.a,{id:"738079784"},[".Footer.jsx-738079784{padding:3rem 1rem;background-color:#0E2F50;color:#fff;font-size:17px;line-height:48px;}",".flex.jsx-738079784{display:block;}",".social-icons.jsx-738079784{max-width:12rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".social-icons.jsx-738079784 img.jsx-738079784{width:18px;height:18px;}","@media(min-width:1024px){.Footer.jsx-738079784{background-color:#0E2F50;padding:1rem 1rem;}.flex.jsx-738079784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.flex.jsx-738079784>*.jsx-738079784{-webkit-flex:1;-ms-flex:1;flex:1;}.flex.jsx-738079784>*.jsx-738079784:last-child{width:130px;-webkit-flex:none;-ms-flex:none;flex:none;}}",".social-icons.jsx-738079784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".social-icons.jsx-738079784 a.jsx-738079784{padding:0 12px;}",".social-icons.jsx-738079784 a.jsx-738079784:hover{opacity:0.8;}",'nav.jsx-738079784 a.jsx-738079784{font-family:"Montserrat",sans-serif;display:block;-webkit-text-decoration:none;text-decoration:none;color:#fff;margin:0.5rem 0;}',".footer-nav.jsx-738079784{width:464px;max-width:100%;padding:0 12px;}","@media(min-width:1024px){.footer-nav.jsx-738079784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:0 0;margin:0 auto;width:100% !important;max-width:464px;}.footer-nav.jsx-738079784 .nav-link.jsx-738079784{margin-right:10px;margin-left:10px;}.social-icons.jsx-738079784{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.max-width.jsx-738079784{margin:0 auto;width:1032px;max-width:100%;}}"]))}}]),i}(x.Component);e.default=h}}]);