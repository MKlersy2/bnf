(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{5810:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/waitPage",function(){return n(8448)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),c=n(880),l=n(9246);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=u.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),p=a.href,d=a.as,v=u.default.useRef(p),y=u.default.useRef(d),h=e.children,b=e.replace,m=e.shallow,_=e.scroll,g=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var j=(t=u.default.Children.only(h))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),3),x=w[0],O=w[1],E=w[2],k=u.default.useCallback((function(e){y.current===d&&v.current===p||(E(),y.current=d,v.current=p),x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[d,j,p,E,x]);u.default.useEffect((function(){var e=O&&n&&i.isLocalURL(p),t="undefined"!==typeof g?g:r&&r.locale,o=f[p+"%"+d+(t?"%"+t:"")];e&&!o&&s(r,p,d,{locale:t})}),[d,p,O,g,n,r]);var C={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,r,p,d,b,m,_,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(p)&&s(r,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof g?g:r&&r.locale,R=r&&r.isLocaleDomain&&i.getDomainLocale(d,I,r&&r.locales,r&&r.domainLocales);C.href=R||i.addBasePath(i.addLocale(d,I,r&&r.defaultLocale))}return u.default.cloneElement(t,C)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],v=o(a.useState(t?t.current:null),2),y=v[0],h=v[1],b=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||p||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:n}))}),[r,y,n,p]),m=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!i&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[b,p,m]};var a=n(7294),u=n(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(7294);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function c(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,i=s(c);function c(){return a(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){var e=20,t=setInterval((function(){e<=0&&(window.location.href="/",clearInterval(t)),e-=1}),1e3);this.timerCount=t}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerCount)}},{key:"render",value:function(){return(0,r.jsx)("div",{children:this.props.children})}}])&&u(t.prototype,n),o&&u(t,o),c}(o.Component)},8448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(9008),a=(n(1664),n(1163)),u=n(7160),i=n.n(u),c=n(5113),l=n.n(c),f=n(5945),s=n.n(f),p=n(1378);function d(){var e=(0,a.useRouter)();return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Page d'inactivit\xe9"}),(0,r.jsx)("meta",{name:"description",content:"Page d'attente en cas d'inactivit\xe9"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("video",{className:l().vynil,autoPlay:!0,loop:!0,muted:!0,children:(0,r.jsx)("source",{src:"/video/vynil.mp4"})}),(0,r.jsx)("main",{className:"".concat(i().main," index"),onClick:function(){return e.back()},children:(0,r.jsxs)("div",{className:s().global,children:[(0,r.jsx)("div",{className:s().barre}),(0,r.jsx)("div",{className:s().texte,children:"Touchez l'\xe9cran ou votre consultation va s'arr\xeater"}),(0,r.jsx)("div",{className:s().barre})]})}),(0,r.jsx)(p.default,{})]})}},7160:function(e){e.exports={displayFlex:"Home_displayFlex__z8bj9",container:"Home_container__bCOhY",main:"Home_main__nLjiQ",button:"Home_button__Zs7A2",buttonScale:"Home_buttonScale__oI68V"}},5113:function(e){e.exports={vynil:"homepage_vynil__jhmVy",global:"homepage_global__TVsAw",title:"homepage_title___G3_m",rowTitle:"homepage_rowTitle__M_Tnp",col:"homepage_col__75zPn",subText:"homepage_subText__hk8Gc",subtitle:"homepage_subtitle__0u1cY",button:"homepage_button__HxR9O"}},5945:function(e){e.exports={global:"waiting_global__m0qI0",barre:"waiting_barre__AmNcv",texte:"waiting_texte__QvNND"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],(function(){return t=5810,e(e.s=t);var t}));var t=e.O();_N_E=t}]);