(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{I032:function(e,t,s){"use strict";s.r(t);var n=s("o0o1"),a=s.n(n),i=s("1OyB"),r=s("vuIU"),c=s("Ji7U"),l=s("md7G"),o=s("foSv"),u=s("MX0m"),f=s.n(u),p=s("q1tI"),x=s.n(p),m=s("a6RD"),h=s.n(m),w=s("sNsB"),d=s("aTUd"),v=s("KMkw"),b=s("wd/R"),k=s.n(b),y=s("kuH4"),j=x.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=Object(o.a)(e);if(t){var a=Object(o.a)(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return Object(l.a)(this,s)}}var O=h()((function(){return Promise.all([s.e(0),s.e(82)]).then(s.bind(null,"t7j1"))}),{loadableGenerated:{webpack:function(){return["t7j1"]},modules:["./news-block.jsx"]}}),I=h()((function(){return Promise.all([s.e(0),s.e(77)]).then(s.bind(null,"3maQ"))}),{loadableGenerated:{webpack:function(){return["3maQ"]},modules:["./event-block.jsx"]}}),N=function(e){Object(c.a)(s,e);var t=g(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={items:null,activeView:e.defaultView||"news"},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("news"!=this.state.activeView){t.next=6;break}return t.next=3,a.a.awrap(this.fetchNews());case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,a.a.awrap(this.fetchEvents());case 8:t.t0=t.sent;case 9:e=t.t0,this.setState({items:e});case 11:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"fetchNews",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(Object(y.b)());case 2:return e=t.sent,e=this.formatItems(e),e=this.filterItems(e),e=this.sortItems(e),t.abrupt("return",e);case 7:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"fetchEvents",value:function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(Object(y.a)());case 2:return e=t.sent,e=this.formatItems(e),e=this.getFutureItemsOnly(e),e=this.filterItems(e),e=this.sortItems(e),t.abrupt("return",e);case 8:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"formatItems",value:function(e){return w.a((function(e){return Object.assign({},e.fields,{datetime:e.sys.createdAt})}),e)}},{key:"filterItems",value:function(e){return e=d.a(0,this.props.limit||20,e)}},{key:"sortItems",value:function(e){return e}},{key:"getFutureItemsOnly",value:function(e){return v.a((function(e){return k()(e.publishDate).diff(k()(),"days")>=0}),e)}},{key:"clickFilter",value:function(e){var t;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(this.setState({activeView:e}),"news"!=e){s.next=5;break}return s.next=4,a.a.awrap(this.fetchNews());case 4:t=s.sent;case 5:if("events"!=e){s.next=9;break}return s.next=8,a.a.awrap(this.fetchEvents());case 8:t=s.sent;case 9:this.setState({items:t});case 10:case"end":return s.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this,t=this,s=v.a((function(e){return"/happening"==e.slug||document.location.pathname.indexOf(e.slug)<=-1}),this.state.items||{});return this.state.items?j("div",{className:"jsx-950568162 HappeningOverview flex flex-wrap flex-start"},j("nav",{className:"jsx-950568162 filters show-on-desktop-only"},j("ul",{className:"jsx-950568162"},j("li",{className:"jsx-950568162 "+(("news"==this.state.activeView?"is-active":"")||"")},j("a",{onClick:this.clickFilter.bind(this,"news"),className:"jsx-950568162"},"News from TPY")),j("li",{className:"jsx-950568162 "+(("events"==this.state.activeView?"is-active":"")||"")},j("a",{onClick:this.clickFilter.bind(this,"events"),className:"jsx-950568162"},"Programmes & Events")))),j("div",{className:"jsx-950568162 items"},w.a((function(s){var n=e.state.items[s];return"events"==t.state.activeView?j(I,{key:s,event:n}):j(O,{key:s,event:n})}),Object.keys(s))),j(f.a,{id:"950568162"},[".HappeningOverview.jsx-950568162{width:1000px;max-width:100%;margin:0 auto 48px;}",".items.jsx-950568162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex:1;-ms-flex:1;flex:1;}",".filters.jsx-950568162{width:300px;max-width:100%;margin-top:20px;padding:0 18px;}",".filters.jsx-950568162 ul.jsx-950568162,.filters.jsx-950568162 li.jsx-950568162{list-style:none;margin:0;padding:0;}",".filters.jsx-950568162 li.jsx-950568162{margin:10px 0;}",".filters.jsx-950568162 a.jsx-950568162{cursor:pointer;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:24px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;-webkit-text-decoration:none;text-decoration:none;color:rgba(20,67,114,0.5);border-bottom:solid transparent 8px;}",".filters.jsx-950568162 li.is-active.jsx-950568162 a.jsx-950568162{color:#144372;cursor:cursor;display:inline-block;padding-bottom:6px;border-bottom:solid #FF8850 8px;}"])):j("div",{style:{minHeight:"800px"}})}}]),s}(p.Component);t.default=N}}]);