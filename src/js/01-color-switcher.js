const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const docBody = document.querySelector('body');
stopBtn.classList.add('disable');
let timerId = 0;

startBtn.addEventListener("click", () => {
    startBtn.classList.add('disable');
    stopBtn.classList.remove('disable');
    timerId = setInterval(() => {
    docBody.style.backgroundColor = getRandomHexColor();
    }, 1000);
  console.log(timerId);
});



stopBtn.addEventListener("click", () => {
    stopBtn.classList.add('disable');
  startBtn.classList.remove('disable');
  console.log(timerId);
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}










// .disable{
//    cursor: not-allowed;
//    pointer-events: none;
// }

// startBtn.style.cursor = "not-allowed";
// startBtn.style.pointer-events = "none";

// startBtn.setAttribute("style", "cursor: not-allowed;
// pointer - events: none; background-color: grey");

// startBtn.removeAttribute("style", "cursor: not-allowed;
// pointer - events: none; background-color: grey");