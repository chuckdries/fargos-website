(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});n(73),n(182);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=(n(147),n(151)),u=n(170),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges.filter(function(t){return t.node.fields.slug.startsWith(e.props.pageContext.slug)}).map(function(e){return e.node});return console.log(t),i.a.createElement(s.a,{location:this.props.location,title:this.props.data.site.siteMetadata.title},i.a.createElement(u.a,{posts:t,title:this.props.pageContext.slug.split("/")[1]}))},t}(i.a.Component);t.default=l;var c="1623555389"},146:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(152)),o=a(n(154)),i=a(n(7)),s=a(n(52)),u=a(n(54)),l=a(n(4)),c=a(n(0)),p=n(23),d=n(147);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/fargos-website/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=f(n);return c.default.createElement(p.Link,(0,o.default)({to:g,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),m(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var g=c.default.forwardRef(function(e,t){return c.default.createElement(v,(0,o.default)({innerRef:t},e))});t.default=g;var m=function(e,t){window.___navigate(f(e),t)};t.navigate=m;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(146),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(148),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(53),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(147),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/fargos-website/"===n.pathname?i.a.createElement("h1",{style:{marginTop:0}},i.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.a.Component);t.a=u},152:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},154:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},170:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(147),i=function(e){var t=e.post;return r.a.createElement("li",null,r.a.createElement(o.Link,{to:t.fields.slug},t.frontmatter.title),r.a.createElement("p",null,t.excerpt))};t.a=function(e){var t=e.posts,n=e.title;return r.a.createElement("div",null,r.a.createElement("h3",null,n),t.map(function(e){return r.a.createElement(i,{post:e})}))}},182:function(e,t,n){"use strict";var a=n(11),r=n(14),o=n(74),i="".startsWith;a(a.P+a.F*n(75)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);
//# sourceMappingURL=component---src-templates-section-js-9ba89d97a409d609db37.js.map