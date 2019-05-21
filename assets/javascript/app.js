$(document).ready(function() {
// button click to start game
    $("button").on("click", gameStart);

    // hides button when clicked so user can not click it again
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

var questions = [
    {
        question: "Whos is the strongest on this list?",
        answers: ["Goku ", "Hit ", "Beerus ", "Whis "],
        correct: "Whis "
    },

    {
        question: "What is Goku's go to move?",
        answers: ["Spirit Bomb ", "Kamehameha ", "Instant Transmission ", "Solar Flare "],
        correct: "Kamehameha "
    },

    {
        question: "Who is Goku's best friend?",
        answers: ["Vegeta ", "Piccolo ", "Krillin ", "Tien "],
        correct: "Krillin "
    },

    {
        question: "What is the name of earth's dragon?",
        answers: ["Porunga ", "Shenron ", "Zamasu ", "Champa "],
        correct: "Shenron "
    },

    {
        question: "Which color is the first super saiyan form?",
        answers: ["Blue ", "Red ", "Green ", "Yellow "],
        correct: "Yellow "
    },
]

// On click event when start button is pressed questions are populated
$("#start").on("click", function() {

    // Loops through 5 questions
    for (var i=0; i < questions.length; i++) {
        $("#quiz-box").append("<h2>" + questions[i].question + "</h2>");
        
        // Loops through answers for radio buttons
        for (var j=0; j < questions[i].answers.length; j++) {

            // Takes answer array and appends to a radio button
            $("#quiz-box").append("<input type='radio' name='question" + i +
            "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
    }

    // adding a finish button
    var newButton = $("<button type='button class='btn btn=primary btn-lg id='stop'>Finish</button>");
    $("#quiz-box").append(newButton);
});


// function to check through loop for correct answers from the questions array

// function to keep score of how many correct and incorrect answers

// Once timer runs out, a page will show the results of the quiz and append it to the id=results html

  

  


