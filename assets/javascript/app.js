
// make a selection of var's for the game

var wins = 0;
var loss = 0;
var unanswered = 0;
var time = 50;
var intervalId;
var questions = [
    {
        question: "1. In bowling, what score is refered to as a 'Perfect Score'?",
        options: ["A. 250", "B. 300", "C. 400", "D. 350"],
        answer: "B. 300"
    },
    {
        question: "2. When you get 3 strikes in a row, what is it called?",
        options: ["A. Triple", "B. Turkey", "C. Horse", "D. Eagle"],
        answer: "B. Turkey"
    },
    {
        question: "3. Where were the first indoor bowling lanes built?",
        options: ["A. Baltimore", "B. Chicago", "C. Detroit", "D. New York"],
        answer: "D. New York"
    },
    {
        question: "4. Where is the largest bowling center in the world?",
        options: ["A. Japan", "B. China", "C. London", "D. Denmark"],
        answer: "A. Japan"
    },
    {
        question: "5. Where is the largest US bowling center?",
        options: ["A. Las Vegas", "B. Mall of America", "C. San Diego", "D. Miami"],
        answer: "A. Las Vegas"
    },
    {
        question: "6. When you get 9 strikes in a row, what is it called?",
        options: ["A. 9th Strike", "B. Golden Turkey", "C. Fire Lane", "D. Golden Horse"],
        answer: "B. Golden Turkey"
    },
    {
        question: "7. What is the minimum weight required for a bowling ball?",
        options: ["A. 2 Pounds", "B. 4 Pounds", "C. 3 Pounds", "D. No minimum weight requirement"],
        answer: "D. No minimum weight requirement"
    },
    {
        question: "8. _________ is the home to a Bowling Stadium!",
        options: ["A. Reno, NV", "B. New York, NY", "C. Chicago, IL", "D. Portland, OR"],
        answer: "A. Reno, NV"
    },
    {
        question: "9. A bowling ball is allowed to weigh up to how many pounds?",
        options: ["A. 20 lbs", "B. 18 lbs", "C. 16 lbs", "D.22 lbs"],
        answer: "C. 16 lbs"
    },
    {
        question: "10. A bowling pin is required to be how many inches in height?",
        options: ["A. 20 inches", "B. 25 inches", "C. 12 inches", "D. 15 inches"],
        answer: "D. 15 inches"
    },
];

//hide all questions and timer until the "start" button is clicked
$(".display-4, .hidden, .display-2, .secondHidden").hide();

// reseting the game  after player completes one round
$("#restartId").click(function () {
    clearInterval();
    time = 50;
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
    $(".display-4").text("Time Remaining: " + time + " Seconds");
    $(".display-3, .display-2, #startId, #test ").hide();

    //Looping through questions to make sure they are all listed on the page         
    for (var j = 0; j < questions.length; j++) {
        $(".questionsClass").append("<br>", "<br>", "<h2>" + questions[j].question + "</h2>");
        for (var i = 0; i < questions[j].options.length; i++) {
            $(".questionsClass").append("<input type='radio' name='" + j + "' id='question" + j + "' value='" + questions[j].options[i] + "'>", " ", "<label>" + questions[j].options[i] + "</label>", "<br>");
        }
    }
});

function submitAnswers() {

    //for loop to check for unanswered questions
    for (var x = 0; x < questions.length; x++) {
        if (!$("input[id='question" + x + "']").is(":checked")) {
            unanswered++;
            $("#unansweredId").text("Unanswered: " + unanswered);
        }
        else if ($("input[id='question" + x + "']:checked").val() === questions[x].answer) {
            wins++;
            $("#correctId").text("Correct: " + wins);
        }
        else {
            loss++;
            $("#incorrectId").text("Incorrect: " + loss);
        }
    }
};

//hide questions, show timer at stopped time, correct, incorrect and unanswered scores
$("#doneId").click(function () {
    stopTimer()
    $(".secondHidden").show();
    $(".hidden").hide();
    $(".display-4, .display-2").show();
    $("#correctId").text("Correct: " + wins);
    $("#incorrectId").text("Incorrect: " + wins)
    $("#unansweredId").text("Unanswered: " + unanswered)
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
        $("#correctId").text("Correct: " + wins);
        $("#incorrectId").text("Incorrect: " + loss);
        $("#unansweredId").text("Unanswered: " + unanswered);
        return submitAnswers();
    }
}

//end

