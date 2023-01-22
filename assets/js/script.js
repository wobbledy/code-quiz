var timerEl = document.querySelector(".timer-count");
var timer;
var timerCount;

function startGame() {
    timerCount = 75;
    startTimer();
}

function endScreen() {
    //creates the last screen to save stuff
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = "Time: " + timerCount;
        
        if (timerCount === 0) {
            clearInterval(timer)
            endScreen();
        }

    },1000);
}

startGame();
