var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var l=n("iQIUW");const r=document.querySelector("form"),s=document.querySelector("button");function a(e,t){const i=Math.random()>.3;return new Promise(((o,n)=>{setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}r.addEventListener("submit",(function(e){e.preventDefault(),s.classList.add("disable");const{elements:{delay:t,step:o,amount:n}}=e.currentTarget;let r=+t.value;const u=[];for(i=0;i<n.value;i+=1){r=+t.value+o.value*i;let e=a(i+1,r).then((({position:e,delay:t})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${t} ms`)}));u.push(e)}Promise.all(u).finally((()=>setTimeout((()=>{s.classList.remove("disable")}),1e3)))}));
//# sourceMappingURL=03-promises.dc186948.js.map
