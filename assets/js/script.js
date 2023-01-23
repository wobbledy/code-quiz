var timerEl = document.querySelector(".timer-count");
var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount;
var score;
var questions;
var questionAsked = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed within ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "];


var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

function startGame() {
    timerCount = 75;
    questions = 0;
    score = 0;

    startTimer();
    questionOne();
}

function endGame() {
    questionEl.textContent = "All Done!";
    answersEl.textContent = "Your final score is " + score;
    var display = document.createElement("p");
    display.textContent = "";
    answersEl.append(display);
    clearInterval(timer);
}

//Sets the Timer to Countdown Every Second
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = "Time: " + timerCount;
        
        if (timerCount === 0) {
            clearInterval(timer);
            endGame();
        }

    },1000);
}

function correctAnswer() {
    score = score + 10;
    questions++;
    
    if (questions === 1) {
        questionTwo();
    } else if (questions === 2) {
        questionThree();
    } else if (questions === 3) {
        questionFour();
    } else if (questions === 4){
        questionFive();
    } else {
        endGame();
    }


}

function wrongAnswer() {
    var display = document.createElement("p");
    display.style.fontSize = "20px";
    display.textContent = "Wrong!";
    answersEl.append(display);
    timerCount = timerCount - 10;
    score = score - 10;
}

function questionOne() {
    startButton.remove();
    questionEl.textContent = questionAsked[0];
    answersEl.textContent = "";
    answersEl.append(button1);
    button1.textContent = "1. strings";
    button1.style.backgroundColor = "blueviolet";
    button1.style.borderRadius = "8px";
    button1.style.fontSize = "20px";
    answersEl.append(button2);
    button2.textContent = "2. booleans";
    button2.style.backgroundColor = "blueviolet";
    button2.style.borderRadius = "8px";
    button2.style.fontSize = "20px";
    answersEl.append(button3);
    button3.style.backgroundColor = "blueviolet";
    button3.style.borderRadius = "8px";
    button3.style.fontSize = "20px";
    button3.textContent = "3. alerts";
    answersEl.append(button4);
    button4.style.backgroundColor = "blueviolet";
    button4.style.borderRadius = "8px";
    button4.style.fontSize = "20px";
    button4.textContent = "4. numbers";




    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionTwo() {

    questionEl.textContent = questionAsked[1];
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
    display.style.fontSize = "20px";
    display.textContent = "Correct!";
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionThree() {

    questionEl.textContent = questionAsked[2];
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
    display.style.fontSize = "20px";
    display.textContent = "Correct!";
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);

}

function questionFour() {

    questionEl.textContent = questionAsked[3];
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
    display.style.fontSize = "20px";
    display.textContent = "Correct!";
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", correctAnswer);
    button4.addEventListener("click", wrongAnswer);

}

function questionFive() {

    questionEl.textContent = questionAsked[4];
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
    display.style.fontSize = "20px";
    display.textContent = "Correct!";
    answersEl.append(display);


    button1.addEventListener("click", wrongAnswer);
    button2.addEventListener("click", wrongAnswer);
    button3.addEventListener("click", wrongAnswer);
    button4.addEventListener("click", correctAnswer);

}

//Adds an Event Listener to the Start Game button so it will start the game when clicked
startButton.addEventListener("click", startGame);
