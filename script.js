//assign variables
var startGame = document.querySelector(".btn");
var timerElement = document.querySelector(".timer");
var secondsLeft = 120;
var questions = ["1?", "2?", "3?", "4?"];
var answers;


//listeners
startGame.addEventListener("click", function() {
    secondsLeft--;
    getRandomQuestion();
    setTime();
    logKey(); 
});
//random question function not working*****
function getRandomQuestion(){
    i = Math.floor(Math.random() * questions.length);
    ranQuestion = questions[i];
    console.log(ranQuestion);
    const log = document.getElementById('log');
}    


//timer function is working
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = "Timer: " + secondsLeft;
        if(secondsLeft=== 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
