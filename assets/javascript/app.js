
// make a selection of var's for the game

var wins = 0;
var loss = 0;
var unanswered = 0;
var totalQues = 10;
var time = 60;
var intervalId;
var answers = ["300", "Turkey", "New York", "Japan", "Las Vegas", "Golden", "None", "Reno", "16", "15"];

// make function to calulate the scores when they press the finished button.
function submitAnswers() {

    //listing the questions
    var q1 = document.forms["trivia"]["q1"].value;
    var q2 = document.forms["trivia"]["q2"].value;
    var q3 = document.forms["trivia"]["q3"].value;
    var q4 = document.forms["trivia"]["q4"].value;
    var q5 = document.forms["trivia"]["q5"].value;
    var q6 = document.forms["trivia"]["q6"].value;
    var q7 = document.forms["trivia"]["q7"].value;
    var q8 = document.forms["trivia"]["q8"].value;
    var q9 = document.forms["trivia"]["q9"].value;
    var q10 = document.forms["trivia"]["q10"].value;

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
$(".display-4, .hidden, .display-2, .secondHidden").hide();

// reseting the game  after player completes one round
$("#restartId").click(function () {
    clearInterval();
    time = 60;
    run();
    unanswered = 0;
    wins = 0;
    loss = 0;
    $("#correctId").text("Correct: " + wins);
    $("#incorrectId").text("Incorrect: " + loss);
    $("#unansweredId").text("Unanswered: " + unanswered);
    $("input").prop('checked', false);
    $(".hidden,  .display-4").show();
    $(".display-3, .display-2, .secondHidden").hide();
});

//when start is pressed, showing the time remaining, hide the start button, and show questions
$("#startId").click(function () {
    run()
    $(".hidden, .display-4").show();
    $(".display-3, .display-2, #startId, #test ").hide();
});

//hide questions, show timer at stopped time, correct, incorrect and unanswered scores
$("#doneId").click(function () {
    stopTimer()
    $(".secondHidden").show();
    $(".hidden").hide();
    $(".display-4, .display-2").show();
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
    $(".display-4").text("Time Remaining: " + time + " Seconds");
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

//end

