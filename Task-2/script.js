let seconds = 0;
let tens = 0;
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");
let Interval;

btnStart.addEventListener("click", () => {
  Interval = setInterval(startTimer, 10);
});
btnStop.addEventListener("click", () => {
  clearInterval(Interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  getSeconds.innerHTML = seconds;
  getTens.innerHTML = tens;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    getSeconds.innerHTML = "0" + seconds;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds;
  }
}
