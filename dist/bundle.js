!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){let r=document.querySelectorAll("#font-selector-area select");const n=document.querySelectorAll("#text-align-area div"),l=document.querySelectorAll(".styles-area div");document.querySelector(".print-area button");const o=document.querySelector("#doc-text-area textarea");let c=document.querySelector("#doc-text-area textarea"),i=document.querySelector(".letter-counter-area p span");c.style.fontFamily="Arial",c.style.fontSize="11pt";for(let e=0;e<r[0].length;e+=1)r[0][e].style.fontFamily=r[0][e].value;r[0].addEventListener("click",()=>{c.style.fontFamily=r[0].value},!1);r[1].addEventListener("click",()=>{c.style.fontSize=r[1].value},!1);n[0].addEventListener("click",()=>{o.style.textAlign="left"},!1),n[1].addEventListener("click",()=>{o.style.textAlign="center"},!1),n[2].addEventListener("click",()=>{o.style.textAlign="right"},!1);l[0].addEventListener("click",()=>{o.style.lineHeight="normal",l[0].style.backgroundColor="#e6e6e6",l[1].style.backgroundColor="white",l[2].style.backgroundColor="white"},!1),l[1].addEventListener("click",()=>{o.style.lineHeight="1.0",l[0].style.backgroundColor="white",l[1].style.backgroundColor="#e6e6e6",l[2].style.backgroundColor="white"},!1),l[2].addEventListener("click",()=>{o.style.lineHeight="2.0",l[0].style.backgroundColor="white",l[1].style.backgroundColor="white",l[2].style.backgroundColor="#e6e6e6"},!1);setInterval(()=>{console.log("--UPDATING LETTER COUNT--"),i.textContent=c.value.length},500)}]);