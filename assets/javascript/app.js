
// make a selection of var's for the game

var wins = 0;
var loss = 0;
var unanswered = 0;
var totalQues = 2;
var time = 9;
var intervalId;
var answers = ["300", "Turkey"];

// make function to calulate the scores when they press the finished button.
function submitAnswers() {

    //listing the questions
    var q1 = document.forms["trivia"]["q1"].value;
    var q2 = document.forms["trivia"]["q2"].value;

    //for loop to check for unanswered questions

    for (i = 1; i <= totalQues; i++) {
        if (eval("q" + i) == null || eval("q" + i) == "") {
            unanswered++;
            document.getElementById("unansweredId").innerHTML =
                ("Unanswered: " + unanswered)
        } else if (eval("q" + i) !== answers[i - 1] || null || "") {
            loss++;
            document.getElementById("incorrectId").innerHTML = ("Incorrect: " + loss);
        } else if (eval("q" + i) == answers[i - 1]) {
            wins++;
            document.getElementById("correctId").innerHTML = ("Correct: " + wins);
    }
    }
}

//hide all questions and timer until the "start" button is clicked
$(".timerClass, .hidden, .secondHidden").hide();

//when start is pressed, showing the time remaining, hide the start button, and show questions
$("#startId").click(function () {
    run()
    $(".hidden, .timerClass").show();
    $("#startId").hide();

});

//hide questions, show timer at stopped time, correct, incorrect and unanswered scores
$("#doneId").click(function () {
    stopTimer()
    $(".secondHidden").show();
    $(".hidden").hide();
    $(".timerClass").show();
    document.getElementById("correctId").innerHTML = ("Correct: " + wins);
    document.getElementById("incorrectId").innerHTML = ("Incorrect: " + wins)
    document.getElementById("unansweredId").innerHTML = ("Unanswered: " + unanswered)
    return submitAnswers();
});

//timer that starts counting down on a new page once the "start" button was clicked

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

//stoping the timer 
function stopTimer() {
    clearInterval(intervalId);
}

//when the timer runs out, hide questions, show time, and show correct, unanswered questions and incorrect answeres.
function decrement() {
    $(".timerClass").text("Time Remaining: " + time + " Seconds");
    time--;
    if (time === -1) {
        stopTimer();
        $(".secondHidden").show();
        $(".hidden").hide();
        document.getElementById("correctId").innerHTML = ("Correct: " + wins);
        document.getElementById("incorrectId").innerHTML = ("Incorrect: " + loss)
        document.getElementById("unansweredId").innerHTML = ("Unanswered: " + unanswered)
        return submitAnswers();
    }
}

//function needed to reset the game.

