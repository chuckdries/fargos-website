(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n(157),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(c.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=l;var u="1097489062"},150:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(33),c=n.n(s);n.d(e,"a",function(){return c.a});n(152);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},154:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(55),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},155:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(150),c=n(151).a.header.withConfig({displayName:"layout__Header",componentId:"sc-1fon3zb-0"})(["margin-left:120px;display:flex;flex-direction:column;h1{font-size:1em;font-weight:normal;margin:16px 0;}h2{font-size:1em;font-weight:normal;margin:16px 0;}"]),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return console.log("location",n),t=i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,i.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",overflow:"auto"},to:"/fargos-website/"},"/fargos-website/"!==n.pathname&&i.a.createElement("span",{style:{position:"absolute",marginLeft:"-15px",color:"grey"}},"◀"),a)),i.a.createElement("h2",null,"Writer and performance artist")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"800px",lineHeight:"1.6",paddingTop:"2em"}},i.a.createElement(c,null,t),i.a.createElement("main",null,r))},e}(i.a.Component);e.a=l},157:function(t,e,n){"use strict";var a=n(158),r=n(0),o=n.n(r),i=n(4),s=n.n(i),c=n(166),l=n.n(c),u=n(150);function p(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,s=t.title;return o.a.createElement(u.b,{query:d,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=p;var d="1025518380"},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Fargo Tbakhi",description:"Writer and performance artist",author:"Fargo Tbakhi"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-3e640101fe3a74b17f8c.js.map