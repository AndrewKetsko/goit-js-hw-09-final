!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");e.classList.add("disable"),t.addEventListener("click",(function(){t.classList.add("disable"),e.classList.remove("disable"),timerId=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){e.classList.add("disable"),t.classList.remove("disable"),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.d332e214.js.map
