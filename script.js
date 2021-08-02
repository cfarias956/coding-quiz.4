var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var timecounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var nextQuestions 
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var btnScore = document.getElementById("btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =document.getElementById("alert");
var info = document.getElementById("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));

var questions = [
    {
        title: "Inside which HTML element do we put JavaScript?",
        choices: ["<script>","<head>","<meta>", "<style>"],
        answer : "<script>"    
    },
    {
        title: "Which of the following is not JavaScript Data Types?",
        choices: ["Undefined","Number","Boolean", "Float"],
        answer : "Float"    
    },
    {
        title: "What are the types of pop up boxes available in Javascript?",
        choices: ["Alert","Prompt","Confirm", "All of the above"],
        answer : "All of the above"    
    },
    {
        title: "Which of the following is the correct statement for commenting in JavaScript?",
        choices: ["/*this is a comment*/","$This is a comment$","//This is a comment","\\This is a comment"],
        answer : "//This is a comment"    
    },
    {
        title: "The “function” and ” var” are known as:",
        choices: ["Keywords","Declaration statements","Values", "Prototypes"],
        answer : "Declaration statements"    
    },
]
btnStart.addEventListener("click", startQuiz);
function startQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}

btnScore.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);
}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function displayQuestion(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}


function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
    }
}

function correction(response){
    
    if(response){
        alert.innerText= "Correct!"
        console.log("Correct!")
    }else {
        alert.innerText="Wrong!"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong!")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}

 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }
