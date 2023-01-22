var timerEl = document.querySelector(".timer-count");
var timer;
var timerCount;
var score;
var questions;

var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");

var startButton = document.querySelector(".start-button");


var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

function startGame() {
    timerCount = 75;
    questions = 0;
    startTimer();

    askQuestion();
}

function endScreen() {
    //creates the last screen to save stuff
}

//Sets the Timer to Countdown Every Second
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

function correctAnswer() {
    score = score + 1;
    questions++;
    
    if (questions === 1) {
        questionTwo();
    } else if (questions === 2) {
        questionThree();
    } else if (questions === 3) {
        questionFour();
    } else {
        questionFive();
    }
}

function wrongAnswer() {
    var display = document.createElement("p");
    display.textContent = "Wrong!"
    answersEl.append(display);
    timerCount = timerCount - 10;
}

function askQuestion() {
    startButton.remove();
    questionEl.textContent = "Commonly used data types DO NOT include: ";
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. strings";
    answersEl.append(button2);
    button2.textContent = "2. booleans";
    answersEl.append(button3);
    button3.textContent = "3. alerts";
    answersEl.append(button4);
    button4.textContent = "4. numbers";




    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionTwo() {

    questionEl.textContent = "The condition in an if / else statement is enclosed within ______.";
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. quotes";
    answersEl.append(button2);
    button2.textContent = "2. curly brackets";
    answersEl.append(button3);
    button3.textContent = "3. parentheses";
    answersEl.append(button4);
    button4.textContent = "4. square brackets";

    var display = document.createElement("p");
    display.textContent = "Correct!"
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionThree() {

    questionEl.textContent = "Arrays in JavaScript can be used to store ______.";
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. numbers and strings";
    answersEl.append(button2);
    button2.textContent = "2. other arrays";
    answersEl.append(button3);
    button3.textContent = "3. booleans";
    answersEl.append(button4);
    button4.textContent = "4. all of the above";

    var display = document.createElement("p");
    display.textContent = "Correct!"
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);

}

function questionFour() {

    questionEl.textContent = "String values must be enclosed within ______ when being assigned to variables.";
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. commas";
    answersEl.append(button2);
    button2.textContent = "2. curly brackets";
    answersEl.append(button3);
    button3.textContent = "3. quotes";
    answersEl.append(button4);
    button4.textContent = "4. parentheses";

    var display = document.createElement("p");
    display.textContent = "Correct!"
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionFive() {

    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is: ";
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. JavaScript";
    answersEl.append(button2);
    button2.textContent = "2. terminal/bash";
    answersEl.append(button3);
    button3.textContent = "3. for loops";
    answersEl.append(button4);
    button4.textContent = "4. console log";

    var display = document.createElement("p");
    display.textContent = "Correct!"
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);

}

//Adds an Event Listener to the Start Game button so it will start the game when clicked
startButton.addEventListener("click", startGame);
