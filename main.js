!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);!function(){const t=document.createElement("section1");t.classList.add("section-content"),console.log("section tabs"),t.innerHTML="\n\t\t<nav class = 'header'>\n\t\t\t<ul>\n\t\t\t\t<li><a href = '#home'>Home</a></li>\n\t\t\t\t<li><a href = '#menu'>Menu</a></li>\n\t\t\t\t<li><a href = '#contacts'>Contacts</a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t\t";const e=document.createElement("section2");e.classList.add("section-content"),e.innerHTML="\n\t\t<h1 class='header'>Thai Fusion</h1>\n\t";let n=document.createElement("style");n.innerHTML='\n\t\tbody{\n\t\t\tbackground-image: url("images/Thaifusion.jpg");\n\t\t\tbackground-repeat: no-repeat;\n\t\t\tbackground-attachment: fixed;\n\t\t\tbackground-size: cover;\n\t\t}',document.head.appendChild(n),document.body.append(t),document.body.append(e)}();section1.addEventListener("click",(function(){console.log("menu")}))}]);