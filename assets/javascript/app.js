$(document).ready(function() {
    $("button").on("click", gameStart);

})

var time = 10;
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


