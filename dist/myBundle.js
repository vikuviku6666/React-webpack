!function(t){var e={};function r(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!("string"==typeof t||t instanceof String)){var e;throw e=null===t?"null":"object"===(e=n(t))&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e),new TypeError("Expected string but received ".concat(e,"."))}},t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)void 0===t[r]&&(t[r]=e[r]);return t},t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if((0,n.default)(t),(e=(0,u.default)(e,s)).require_display_name||e.allow_display_name){var r=t.match(c);if(r){var f,v=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,u=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!e||r.length!==e);n=!0);}catch(t){u=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(u)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r,3);if(f=v[1],t=v[2],f.endsWith(" ")&&(f=f.substr(0,f.length-1)),!function(t){var e=t.match(/^"(.+)"$/i),r=e?e[1]:t;if(!r.trim())return!1;if(/[\.";<>]/.test(r)){if(!e)return!1;if(!(r.split('"').length===r.split('\\"').length))return!1}return!0}(f))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>254)return!1;var b=t.split("@"),m=b.pop(),g=b.join("@"),h=m.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===h||"googlemail.com"===h)){var F=(g=g.toLowerCase()).split("+")[0];if(!(0,o.default)(F.replace(".",""),{min:6,max:30}))return!1;for(var S=F.split("."),w=0;w<S.length;w++)if(!p.test(S[w]))return!1}if(!(0,o.default)(g,{max:64})||!(0,o.default)(m,{max:254}))return!1;if(!(0,l.default)(m,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!(0,i.default)(m)){if(!m.startsWith("[")||!m.endsWith("]"))return!1;var j=m.substr(1,m.length-2);if(0===j.length||!(0,i.default)(j))return!1}}if('"'===g[0])return g=g.slice(1,g.length-1),e.allow_utf8_local_part?_.test(g):y.test(g);for(var O=e.allow_utf8_local_part?x:d,M=g.split("."),$=0;$<M.length;$++)if(!O.test(M[$]))return!1;return!0};var n=f(r(0)),u=f(r(1)),o=f(r(3)),l=f(r(4)),i=f(r(5));function f(t){return t&&t.__esModule?t:{default:t}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},c=/^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i,d=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,p=/^[a-z\d]+$/,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,x=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var r,n;(0,u.default)(t),"object"===o(e)?(r=e.min||0,n=e.max):(r=arguments[1],n=arguments[2]);var l=encodeURI(t).split(/%..|./).length-1;return l>=r&&(void 0===n||l<=n)};var n,u=(n=r(0))&&n.__esModule?n:{default:n};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){(0,n.default)(t),(e=(0,u.default)(e,l)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));for(var r=t.split("."),o=0;o<r.length;o++)if(r[o].length>63)return!1;if(e.require_tld){var i=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(i))return!1}for(var f,a=0;a<r.length;a++){if(f=r[a],e.allow_underscores&&(f=f.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(f))return!1;if(/[\uff01-\uff5e]/.test(f))return!1;if("-"===f[0]||"-"===f[f.length-1])return!1}return!0};var n=o(r(0)),u=o(r(1));function o(t){return t&&t.__esModule?t:{default:t}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,u.default)(e),!(r=String(r)))return t(e,4)||t(e,6);if("4"===r){if(!o.test(e))return!1;var n=e.split(".").sort((function(t,e){return t-e}));return n[3]<=255}if("6"===r){var i=[e];if(e.includes("%")){if(2!==(i=e.split("%")).length)return!1;if(!i[0].includes(":"))return!1;if(""===i[1])return!1}var f=i[0].split(":"),a=!1,s=t(f[f.length-1],4),c=s?7:8;if(f.length>c)return!1;if("::"===e)return!0;"::"===e.substr(0,2)?(f.shift(),f.shift(),a=!0):"::"===e.substr(e.length-2)&&(f.pop(),f.pop(),a=!0);for(var d=0;d<f.length;++d)if(""===f[d]&&d>0&&d<f.length-1){if(a)return!1;a=!0}else if(s&&d===f.length-1);else if(!l.test(f[d]))return!1;return a?f.length>=1:f.length===c}return!1};var n,u=(n=r(0))&&n.__esModule?n:{default:n};var o=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,l=/^[0-9A-F]{1,4}$/i;t.exports=e.default,t.exports.default=e.default},function(t,e,r){"use strict";r.r(e);var n=r(2),u=r.n(n);var o=function(t){return 3*t};console.log(u()("vk@text.com")),console.log(o(900)),document.querySelector("h1").textContent="hi to my new  app"}]);