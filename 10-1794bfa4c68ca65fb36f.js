(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(153),a=r(158);function i(t){return function e(r,i){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(r)?e:Object(n.a)(function(e){return t(r,e)});default:return Object(a.a)(r)&&Object(a.a)(i)?e:Object(a.a)(r)?Object(n.a)(function(e){return t(e,i)}):Object(a.a)(i)?Object(n.a)(function(e){return t(r,e)}):t(r,i)}}}},153:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(158);function a(t){return function e(r){return 0===arguments.length||Object(n.a)(r)?e:t.apply(this,arguments)}}},157:function(t,e,r){"use strict";function n(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,r){return e.apply(this,arguments)};case 3:return function(t,r,n){return e.apply(this,arguments)};case 4:return function(t,r,n,a){return e.apply(this,arguments)};case 5:return function(t,r,n,a,i){return e.apply(this,arguments)};case 6:return function(t,r,n,a,i,u){return e.apply(this,arguments)};case 7:return function(t,r,n,a,i,u,s){return e.apply(this,arguments)};case 8:return function(t,r,n,a,i,u,s,c){return e.apply(this,arguments)};case 9:return function(t,r,n,a,i,u,s,c,o){return e.apply(this,arguments)};case 10:return function(t,r,n,a,i,u,s,c,o,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}r.d(e,"a",function(){return n})},158:function(t,e,r){"use strict";function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}r.d(e,"a",function(){return n})},159:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(e,t)}r.d(e,"a",function(){return n})},163:function(t,e,r){"use strict";var n=r(8);e.__esModule=!0,e.default=void 0;var a,i=n(r(7)),u=n(r(52)),s=n(r(156)),c=n(r(160)),o=n(r(0)),l=n(r(4)),f=function(t){var e=(0,c.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d={},p=function(t){var e=f(t),r=e.fluid?e.fluid.src:e.fixed.src;return d[r]||!1},h=[];var b=function(t,e){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),a).observe(t),h.push([t,e])},y=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+r+"/>":"",a=t.srcSet?'<source srcSet="'+t.srcSet+'" '+r+"/>":"",i=t.title?'title="'+t.title+'" ':"",u=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",c=t.height?'height="'+t.height+'" ':"",o=t.opacity?t.opacity:"1";return"<picture>"+n+a+"<img "+s+c+e+u+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=o.default.forwardRef(function(t,e){var r=t.style,n=t.onLoad,a=t.onError,i=(0,s.default)(t,["style","onLoad","onError"]);return o.default.createElement("img",(0,c.default)({},i,{onLoad:n,onError:a,ref:e,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});g.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var j=function(t){function e(e){var r;r=t.call(this,e)||this;var n=!0,a=!1,i=e.fadeIn,s=p(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!0),"undefined"==typeof window&&(n=!1),e.critical&&(n=!0,a=!1);var c=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:!1,IOSupported:a,fadeIn:i,hasNoScript:c,seenBefore:s},r.imageRef=o.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,u.default)((0,u.default)(r))),r.handleRef=r.handleRef.bind((0,u.default)((0,u.default)(r))),r}(0,i.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.handleRef=function(t){var e=this;this.state.IOSupported&&t&&b(t,function(){var t=p(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0,imgLoaded:t})})},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=e.fluid?e.fluid.src:e.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,n=t.className,a=t.style,i=void 0===a?{}:a,u=t.imgStyle,s=void 0===u?{}:u,l=t.placeholderStyle,d=void 0===l?{}:l,p=t.placeholderClassName,h=t.fluid,b=t.fixed,j=t.backgroundColor,O=t.Tag,m=t.itemProp,v="boolean"==typeof j?"lightgray":j,w=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),S=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),E={title:e,alt:this.state.isVisible?"":r,style:w,className:p};if(h){var L=h;return o.default.createElement(O,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},o.default.createElement(O,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&o.default.createElement(g,(0,c.default)({src:L.base64},E)),L.tracedSVG&&o.default.createElement(g,(0,c.default)({src:L.tracedSVG},E)),v&&o.default.createElement(O,{title:e,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,L.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),o.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),o.default.createElement(g,{alt:r,title:e,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,c.default)({alt:r,title:e},L))}}))}if(b){var I=b,R=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete R.display,o.default.createElement(O,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&o.default.createElement(g,(0,c.default)({src:I.base64},E)),I.tracedSVG&&o.default.createElement(g,(0,c.default)({src:I.tracedSVG},E)),v&&o.default.createElement(O,{title:e,style:{backgroundColor:v,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&o.default.createElement("picture",null,I.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),o.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),o.default.createElement(g,{alt:r,title:e,width:I.width,height:I.height,src:I.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,c.default)({alt:r,title:e,width:I.width,height:I.height},I))}}))}return null},e}(o.default.Component);j.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var O=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),m=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});j.propTypes={resolutions:O,sizes:m,fixed:O,fluid:m,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var v=j;e.default=v},165:function(t,e,r){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},166:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(165);function a(t,e){return function(){var r=arguments.length;if(0===r)return e();var a=arguments[r-1];return Object(n.a)(a)||"function"!=typeof a[t]?e.apply(this,arguments):a[t].apply(a,Array.prototype.slice.call(arguments,0,r-1))}}},167:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(157),a=r(158);function i(t,e,r){return function(){for(var u=[],s=0,c=t,o=0;o<e.length||s<arguments.length;){var l;o<e.length&&(!Object(a.a)(e[o])||s>=arguments.length)?l=e[o]:(l=arguments[s],s+=1),u[o]=l,Object(a.a)(l)||(c-=1),o+=1}return c<=0?r.apply(this,u):Object(n.a)(c,i(t,u,r))}}},168:function(t,e,r){"use strict";var n=r(153),a=r(165);var i=Object(n.a)(function(t){return!!Object(a.a)(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),u=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var s=r(157),c=r(150),o=Object(c.a)(function(t,e){return Object(s.a)(t.length,function(){return t.apply(e,arguments)})});function l(t,e,r){for(var n=r.next();!n.done;){if((e=t["@@transducer/step"](e,n.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n=r.next()}return t["@@transducer/result"](e)}function f(t,e,r,n){return t["@@transducer/result"](r[n](o(t["@@transducer/step"],t),e))}r.d(e,"a",function(){return p});var d="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function p(t,e,r){if("function"==typeof t&&(t=function(t){return new u(t)}(t)),i(r))return function(t,e,r){for(var n=0,a=r.length;n<a;){if((e=t["@@transducer/step"](e,r[n]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}n+=1}return t["@@transducer/result"](e)}(t,e,r);if("function"==typeof r["fantasy-land/reduce"])return f(t,e,r,"fantasy-land/reduce");if(null!=r[d])return l(t,e,r[d]());if("function"==typeof r.next)return l(t,e,r);if("function"==typeof r.reduce)return f(t,e,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}},171:function(t,e,r){"use strict";e.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},172:function(t,e,r){"use strict";var n=r(165);function a(t,e,r){return function(){if(0===arguments.length)return r();var a=Array.prototype.slice.call(arguments,0),i=a.pop();if(!Object(n.a)(i)){for(var u=0;u<t.length;){if("function"==typeof i[t[u]])return i[t[u]].apply(i,a);u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(i))return e.apply(null,a)(i)}return r.apply(this,arguments)}}r.d(e,"a",function(){return a})},189:function(t,e,r){"use strict";var n=r(150),a=Object(n.a)(function(t,e){for(var r=e,n=0;n<t.length;){if(null==r)return;r=r[t[n]],n+=1}return r});e.a=a},191:function(t,e,r){"use strict";var n=r(153),a=r(159),i=Object.prototype.toString,u=function(){return"[object Arguments]"===i.call(arguments)?function(t){return"[object Arguments]"===i.call(t)}:function(t){return Object(a.a)("callee",t)}}(),s=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),l=function(t,e){for(var r=0;r<t.length;){if(t[r]===e)return!0;r+=1}return!1},f="function"!=typeof Object.keys||o?Object(n.a)(function(t){if(Object(t)!==t)return[];var e,r,n=[],i=o&&u(t);for(e in t)!Object(a.a)(e,t)||i&&"length"===e||(n[n.length]=e);if(s)for(r=c.length-1;r>=0;)e=c[r],Object(a.a)(e,t)&&!l(n,e)&&(n[n.length]=e),r-=1;return n}):Object(n.a)(function(t){return Object(t)!==t?[]:Object.keys(t)});e.a=f},192:function(t,e,r){"use strict";var n=r(150),a=r(189),i=Object(n.a)(function(t,e){return Object(a.a)([t],e)});e.a=i},193:function(t,e,r){"use strict";var n=r(157);function a(t,e){return function(){return e.call(this,t.apply(this,arguments))}}var i=r(153),u=r(150),s=r(158);function c(t){return function e(r,n,a){switch(arguments.length){case 0:return e;case 1:return Object(s.a)(r)?e:Object(u.a)(function(e,n){return t(r,e,n)});case 2:return Object(s.a)(r)&&Object(s.a)(n)?e:Object(s.a)(r)?Object(u.a)(function(e,r){return t(e,n,r)}):Object(s.a)(n)?Object(u.a)(function(e,n){return t(r,e,n)}):Object(i.a)(function(e){return t(r,n,e)});default:return Object(s.a)(r)&&Object(s.a)(n)&&Object(s.a)(a)?e:Object(s.a)(r)&&Object(s.a)(n)?Object(u.a)(function(e,r){return t(e,r,a)}):Object(s.a)(r)&&Object(s.a)(a)?Object(u.a)(function(e,r){return t(e,n,r)}):Object(s.a)(n)&&Object(s.a)(a)?Object(u.a)(function(e,n){return t(r,e,n)}):Object(s.a)(r)?Object(i.a)(function(e){return t(e,n,a)}):Object(s.a)(n)?Object(i.a)(function(e){return t(r,e,a)}):Object(s.a)(a)?Object(i.a)(function(e){return t(r,n,e)}):t(r,n,a)}}}var o=c(r(168).a),l=r(166),f=c(Object(l.a)("slice",function(t,e,r){return Array.prototype.slice.call(r,t,e)})),d=Object(i.a)(Object(l.a)("tail",f(1,1/0)));function p(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(n.a)(arguments[0].length,o(a,arguments[0],d(arguments)))}r.d(e,"a",function(){return p})},194:function(t,e,r){"use strict";var n=r(150),a=r(172);var i=r(168),u=r(171),s=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),c=Object(n.a)(function(t,e){return new s(t,e)}),o=r(157),l=r(153),f=r(167),d=Object(n.a)(function(t,e){return 1===t?Object(l.a)(e):Object(o.a)(t,Object(f.a)(t,[],e))}),p=r(191),h=Object(n.a)(Object(a.a)(["fantasy-land/map","map"],c,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return d(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return Object(i.a)(function(r,n){return r[n]=t(e[n]),r},{},Object(p.a)(e));default:return function(t,e){for(var r=0,n=e.length,a=Array(n);r<n;)a[r]=t(e[r]),r+=1;return a}(t,e)}}));e.a=h},195:function(t,e,r){"use strict";var n=r(166),a=r(150),i=r(167),u=r(172),s=r(159),c=r(168),o=r(171),l=function(){function t(t,e,r,n){this.valueFn=t,this.valueAcc=e,this.keyFn=r,this.xf=n,this.inputs={}}return t.prototype["@@transducer/init"]=o.a.init,t.prototype["@@transducer/result"]=function(t){var e;for(e in this.inputs)if(Object(s.a)(e,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[e]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){var r=this.keyFn(e);return this.inputs[r]=this.inputs[r]||[r,this.valueAcc],this.inputs[r][1]=this.valueFn(this.inputs[r][1],e),t},t}(),f=Object(i.a)(4,[],function(t,e,r,n){return new l(t,e,r,n)}),d=Object(i.a)(4,[],Object(u.a)([],f,function(t,e,r,n){return Object(c.a)(function(n,a){var i=r(a);return n[i]=t(Object(s.a)(i,n)?n[i]:e,a),n},{},n)})),p=Object(a.a)(Object(n.a)("groupBy",d(function(t,e){return null==t&&(t=[]),t.push(e),t},null)));e.a=p}}]);
//# sourceMappingURL=10-1794bfa4c68ca65fb36f.js.map