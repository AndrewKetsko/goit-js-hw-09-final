startBtn=document.querySelector(".js-start"),stopBtn=document.querySelector(".js-stop"),docBody=document.querySelector("body"),stopBtn.classList.add("disable"),startBtn.addEventListener("click",(function(){startBtn.classList.add("disable"),stopBtn.classList.remove("disable"),timerId=setInterval((function(){docBody.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),stopBtn.addEventListener("click",(function(){stopBtn.classList.add("disable"),startBtn.classList.remove("disable"),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.99b3f1ab.js.map
