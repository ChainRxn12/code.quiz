//assign variables
var startButton = document.querySelector(".startBtn");
var timerElement = document.querySelector(".timer");
var answerElement= document.querySelector("#answers");
var questionEl = document.querySelector('#question');
var correctAnswer = true;
var points= 0;
var secondsLeft = 120;
var highScore;
var index = 0;


/*
var playerName= localStorage.getItem("playerName");
var highScore= localStorage.getItem("highScore");


playerName.textContent = "player-name";*/

var questions = [
    {
    question: "WHAT DOES <P></P> INDICATE?",
    answers: ['Parent Tag','Push Value', 'The Color Purple', 'Paragraph Tag'],
    correctAnswer: 'Paragraph Tag'
},{
    question: "WHAT DOES 'CSS' STAND FOR?",
    answers: ['Cascading Style Sheet', 'Cosmic Start Ship', 'Colorado Six Shooters', 'Cascade Starting Sheet'],
    correctAnswer: 'Cascading Style Sheet'
},{
    question: "WHICH OF THE FOLLOW IS NOT A PROGRAMMING LANGUAGE?",
    answers: ['Python', 'Java', 'LatteScript', 'JavaScript'],
    correctAnswer: 'LatteScript'
},{
    question: "WHAT BEST DESCRIBES THE TERM 'BUG' WHILE CODING?",
    answers: ['A Mistake or Error in the Code', 'A Command', 'Something Icky', 'A Forever Loop'],
    correctAnswer: 'A Mistake or Error in the Code'
}];


//listener when clicking "play"
startButton.addEventListener("click", function() {
    /*var playerName = prompt("Please Enter Player Name", " ");
    if (playerName != null) {
        document.setItem("player-name", playerName);
    }*/
    secondsLeft--;
    getQuestion();
    setTime();
    startGame();
});

//question functions
// var testButton = document.getElementById('thisid');
// testButton.addEventListener("click", function() {
//     console.log(testButton.textContent);
//  }); 


function getQuestion(){
    questionEl.textContent = questions[index].question

    for( var i = 0; i < questions[index].answers.length; i++) {
        //Each time the loop is run, the below codes are being executed
        //Create a list & a button element 
        var answerBtn = document.createElement('button');
        answerBtn.textContent = questions[index].answers[i];
        answerBtn.classList.add('btn');
        answerBtn.setAttribute('id', 'btn');
        answerBtn.setAttribute('value', questions[index].answers[i]);
        answerBtn.onclick = checkAnswer;
        answerElement.appendChild(answerBtn);   
         
            
        }      
}; //check if user clicks wrong answer
function checkAnswer(){
    if (this.textContent != questions[index].correctAnswer){
        secondsLeft = secondsLeft - 30; //lose 30 seconds
        console.log("incorrect answer minus 30 seconds");
        points = points - 10; //lose 10 points
        console.log("incorrect answer minus 10 points");
    } else {
        // if choose correct answer 
        secondsLeft = secondsLeft + 30; //gain 30 seconds 
        console.log("correct answer plus 30 seconds");
        points = points + 10; // gain 10 points
        console.log("correct answer plus 10 points");
    }
        
    
}

//move to next question index++; getQuestion++
//check if run out of quesitons 
/*if (index === questions.length){
    endQuiz // store name and score
} else {
    getQuestions();
}
}*/

//timer function is working
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = "Timer: " + secondsLeft;
        if(secondsLeft=== 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }
    }, 1000);
} 

//startGame function is called when the start button is clicked
function startGame(){
    secondsLeft = 120;
    startButton.disabled = true; //prevents start button from being pressed while playing
}

//what is initialized upon page load
/*function init() {
    getNameHigh();
    getScoreHigh();
}

//calls init() so that game initializes upon opening
init();*/

//reset button plus reset function
/*var resetButton = document.querySelector(".resetBtn");
var nameHigh = localStorage.getItem("");

function resetGame(){
    nameHigh = '';
    scoreHigh= 0;
    //renders win and loss counts and sets them into client storage
    setNameHigh()
    setScoreHigh()
}

//listener for reset button
resetButton.addEventListener("click", resetGame);*/
