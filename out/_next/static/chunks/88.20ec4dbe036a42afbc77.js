(window.webpackJsonp=window.webpackJsonp||[]).push([[88,89,90],{X9ur:function(t,e,n){"use strict";n.r(e);var a=n("1OyB"),o=n("vuIU"),r=n("Ji7U"),i=n("md7G"),c=n("foSv"),s=n("MX0m"),l=n.n(s),u=n("a6RD"),d=n.n(u),p=n("q1tI"),f=n.n(p),m=n("EVdn"),b=n.n(m),h=n("jxcm"),x=n.n(h),g=f.a.createElement;function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var w=d()((function(){return n.e(41).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["./title.js"]}}),k=d()((function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"a3/r"))}),{loadableGenerated:{webpack:function(){return["a3/r"]},modules:["./button.js"]}}),v=function(t){Object(r.a)(n,t);var e=y(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){x()()}},{key:"initTransition",value:function(){var t=this;b()(window).scroll((function(e){var n=t.percentageSeen(),a=Math.min(100,Math.floor((100-n)/100*255)),o=100-a;b()(".FooterBanner").css("background-color","rgba(255, 240, 0, ".concat(a/100,")")),b()(".TextAndImage, .StoryOverview").css("opacity","".concat((o+0)/100))}))}},{key:"percentageSeen",value:function(){var t=b()(window),e=b()(".FooterBanner"),n=t.height(),a=t.scrollTop(),o=e.offset().top,r=(e.height(),Math.min(100,Math.round(100*(o-a)/n)));return r>=0?Math.abs(1.8*r):Math.abs(2.2*r)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return g("div",{className:"jsx-304158624 FooterBanner"},g("div",{style:{width:"711px"},className:"jsx-304158624 max-width text-center"},g(w,{size:"large","data-sal":"slide-up","data-sal-duration":"300","data-sal-delay":"300","data-sal-easing":"ease-in-out",style:{textAlign:"center"}},this.props.title),g("div",{"data-sal-duration":"300","data-sal":"fade","data-sal-delay":"300","data-sal-easing":"ease-in-out",className:"jsx-304158624"},g(k,{href:this.props.buttonLink||"/contact",target:this.props.target,style:{display:"inline-block",marginRight:"auto",marginTop:"40px",marginLeft:"auto",minwidth:"148px",whiteSpace:"nowrap"}},this.props.buttonText))),g(l.a,{id:"304158624"},[".FooterBanner.jsx-304158624{position:relative;background:url('/static/components/footer-banner/tpy-banner-background-mobile.png') center top no-repeat;background-size:cover;min-height:624px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:74px;}","@media(min-width:480px){.FooterBanner.jsx-304158624{padding-top:82px;background-image:url('/static/components/footer-banner/tpy-banner-background.png');}}",".max-width.jsx-304158624{margin:0 auto;width:36rem;max-width:100%;padding:0 1rem;}"]))}}]),n}(p.Component);e.default=v}}]);