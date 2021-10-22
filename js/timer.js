import { goToScorePage } from "./calculateScore.js";

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  let tempInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
    //   timer = '00:00';
      clearInterval(tempInterval);
      console.log(document.querySelector("#time").innerText);
      goToScorePage();
    }
  }, 1000);
}

function countdownTimer() {
  console.log("gg");
  var fiveMinutes = 60 * 60,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
}

export { countdownTimer };
