//assign variables
var startButton = document.querySelector(".startBtn");
var timerElement = document.querySelector(".timer");
var answerElement= document.querySelector("#answers");
var questionEl = document.querySelector('#question');

var secondsLeft = 120;
var nameHigh;
var scoreHigh;
var index = 0;


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


//listeners
startButton.addEventListener("click", function() {
    secondsLeft--;
    getRandomQuestion();
    setTime();
    startGame();
});

//random question function not working*****
function getRandomQuestion(){
   /* i = Math.floor(Math.random() * questions.length);
    ranQuestion = questions[i];
    console.log(ranQuestion);
    const log = document.getElementById('log');*/

        questionEl.textContent = questions[index].question

        for( var i = 0; i < questions[index].answers.length; i++) {
            //Each time the loop is run, the below codes are being executed

            //Create a list & a button element 
            var li = document.createElement('li');
            var answerBtn = document.createElement('button')

            //display the answer content onto the button
            answerBtn.textContent = questions[index].answers[i];
            //add class to the answer button
            answerBtn.classList.add('btn')
            //append the answer button with the contect and class which we added above into the list element
            li.appendChild(answerBtn);
            //append the list element to the answer ul created on the html
            answerElement.appendChild(li)   
        }
    
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

//startGame function is called when the start button is clicked
function startGame(){
    isWin = false;
    secondsLeft = 120;
    startButton.disabled = true; //prevents start button from being pressed while playing
    
}

//attach event listener to startGame button to function on click
startButton.addEventListener("click", startGame);

//what is initialized upon page load
/*function init() {
    getNameHigh();
    getScoreHigh();
}

//calls init() so that game initializes upon opening
init();*/

//reset button plus reset function
var resetButton = document.querySelector(".resetBtn");

function resetGame(){
    nameHigh = '';
    scoreHigh= 0;
    //renders win and loss counts and sets them into client storage
    setNameHigh()
    setScoreHigh()
}

//listener for reset button
resetButton.addEventListener("click", resetGame);
