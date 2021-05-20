//assign variables
var startGame = document.querySelector(".btn");
var timerElement = document.querySelector(".timer");
var secondsLeft = 120;
var questions = ["1?", "2?", "3?", "4?"];
var answers = 

/*Question 1: What does the <p> indicate?
Answer: Paragraph Tag
Wrong Answers: Parent Tag, Push Value, The Color Purple*/

/*Question 2: What does CSS stand for?
Answer: Cascading Style Sheet
Wrong Answers: Cosmic Star Ship, Colorado Six Shooters, Cascade Starting Sheet*/

/*Question 3: Which of the following is NOT a programming language?
Answer: LatteScipt
Wrong Answers: JavaScript, Java, Python

/*Question 4: What best describes the term "bug" while coding?
Answer: A mistake
Wrong Answers: A Command, Something Icky, A Loop*/


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
