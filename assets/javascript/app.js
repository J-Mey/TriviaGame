$(document).ready(function() {
    $("button").on("click", gameStart);
    $("#start").click(function (){
        $(this).hide();
    })
});


// Timer settings
var time = 20;
var intervalId

function gameStart() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop () {
    clearInterval(intervalId);
}

function decrement() {
    time--;
    $("#timer").html(time);
    if(time === 0) {
        stop();
        alert("Times Up!")
    }
}

// Question List
var quizList = $("#quiz-box");

var questions = [
    {
        question: "Whos is the strongest on this list?",
        answers: ["Goku ", "Hit ", "Beerus ", "Whis "],
        correct: "3"
    },

    {
        question: "What is Goku's go to move?",
        answers: ["Spirit Bomb ", "Kamehameha ", "Instant Transmission ", "Solar Flare "],
        correct: "1"
    },

    {
        question: "Who is Goku's best friend?",
        answers: ["Vegeta ", "Piccolo ", "Krillin ", "Tien "],
        correct: "2"
    },

    {
        question: "What is the name of earth's dragon?",
        answers: ["Porunga ", "Shenron ", "Zamasu ", "Champa "],
        correct: "1"
    },

    {
        question: "Which color is the first super saiyan form?",
        answers: ["Blue ", "Red ", "Green ", "Yellow "],
        correct: "3"
    },
]

// On click event when start button is pressed questions are populated
$("#start").on("click", function() {

    // Loops through 5 questions
    for (var i=0; i < questions.length; i++) {
        $(quizList).append("<h2>" + questions[i].question + "</h2>");
        //$("<h4>" + questions[i].question + "</h4>").appendTo(quizList);
        //quizList.append("<h3>" + questions[i].question + "</h3>");
    
        // Loops through answers for radio buttons
        for (var j=0; j < questions[i].answers.length; j++) {
            $(quizList).append("<input type='radio' name='question" + i +
            "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    }

    //var newButton = $("<button id='stop-button' type='button' class='btn btn-default'>DONE</button>");
    //$("#quiz-box").append(newButton);
});

/*var correctAnswer = 0;
var incorrectAnswer = 0;

$(document).on("click", resultsCheck)

function resultsCheck () {
    var userAnswer = $('input:check').val()
    console.log(userAnswer);

    if(userAnswer === questions[i].correct){
        correctAnswer ++;
        console.log(correctAnswer);
        console.log(correct)
    }
} 
 for (var i=0; i < questions.length; i++) {
      if ($(quizList).val() === questions[i].correct) {
        correctAnswer++;  
        console.log ("good" + correctAnswer);
          

      } else {
          incorrectAnswer++;
          console.log ("wrong");
          console.log(quizList);
          console.log(incorrectAnswer);
      }


      }*/
  

  


