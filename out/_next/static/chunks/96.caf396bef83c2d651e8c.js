(window.webpackJsonp=window.webpackJsonp||[]).push([[96,13,25],{clih:function(e,t,a){"use strict";a.r(t);var i=a("1OyB"),n=a("vuIU"),r=a("Ji7U"),s=a("md7G"),o=a("foSv"),p=a("MX0m"),l=a.n(p),d=a("a6RD"),c=a.n(d),u=a("q1tI"),x=a.n(u),m=(a("EVdn"),x.a.createElement);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Object(s.a)(this,a)}}var h=c()((function(){return a.e(6).then(a.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["./title.js"]}}),w=c()((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"a3/r"))}),{loadableGenerated:{webpack:function(){return["a3/r"]},modules:["./button.js"]}}),g=c()((function(){return a.e(1).then(a.bind(null,"IEaQ"))}),{loadableGenerated:{webpack:function(){return["IEaQ"]},modules:["./small-caps-title.js"]}}),b=function(e){Object(r.a)(a,e);var t=f(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={onMobile:!0},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){window.innerWidth>=480&&this.setState({onMobile:!1})}},{key:"render",value:function(){return m("div",{id:this.props.anchorName,"data-title":this.props.title,className:"jsx-4155595913 TextAndImage"},m("div",{style:{backgroundImage:'url("'.concat(this.props.image,'")'),order:"right"==this.props.imagePosition?1:0},"data-sal":this.state.onMobile?"fade":"slide-".concat("right"==this.props.imagePosition?"left":"right"),"data-sal-duration":"300","data-sal-delay":"300","data-sal-easing":"ease-in-out",className:"jsx-4155595913 image-wrapper"},m("img",{src:this.props.image,className:"jsx-4155595913 image"})),m("div",{"data-sal":this.state.onMobile?"fade":"slide-".concat("right"==this.props.imagePosition?"right":"left"),"data-sal-duration":"300","data-sal-delay":"300","data-sal-easing":"ease-in-out",className:"jsx-4155595913 text-wrapper"},m("div",{style:{marginBottom:"6px"},className:"jsx-4155595913"},m(g,null,this.props.category)),m(h,{size:"medium"},this.props.title),this.props.text&&m("div",{dangerouslySetInnerHTML:{__html:this.props.text},className:"jsx-4155595913 text"}),this.props.children&&m("div",{className:"jsx-4155595913 text"},this.props.children),this.props.buttonLink&&m(w,{href:this.props.buttonLink,hidden:!this.props.buttonText},this.props.buttonText||"learn more")),m(l.a,{id:"4155595913"},['.TextAndImage.jsx-4155595913{color:#0F2247;font-family:"Montserrat",sans-serif;font-size:1.2rem;font-weight:500;line-height:2rem;text-align:left;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:1327px;max-width:100%;margin:0 auto;}',".text-wrapper.jsx-4155595913{width:100%;}","@media (max-width:960px){.image-wrapper.jsx-4155595913{-webkit-order:0 !important;-ms-flex-order:0 !important;order:0 !important;}}",".image.jsx-4155595913{display:block;}",".text-wrapper.jsx-4155595913{padding:2rem 16px 6rem;}",".text.jsx-4155595913{margin:8px 0 24px 0;font-size:16px;line-height:24px;}","@media (min-width:960px){.TextAndImage.jsx-4155595913{min-height:480px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 24px;margin:128px auto;}.image-wrapper.jsx-4155595913,.text-wrapper.jsx-4155595913{-webkit-flex:1;-ms-flex:1;flex:1;width:50%;}.image-wrapper.jsx-4155595913{background-image:none;background-size:cover;background-repeat:no-repeat;background-position:center center;}.image.jsx-4155595913{display:none;}.text-wrapper.jsx-4155595913{padding:0 114px;}.text.jsx-4155595913{margin:16px 0 56px 0;font-size:19px;line-height:32px;}}"]))}}]),a}(u.Component);t.default=b}}]);