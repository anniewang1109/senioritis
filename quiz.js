function q1result(){
    var question1 = document.quiz.question1.value;
    var Q1_results = 0

    if (question1 == "1") {
        return 1;
    }
    if (question1  == "2") {
        return 2;
    }
    if (question1  == "3") {
        return 3;
    }
    if (question1  == "4") {
        return 4;
    }
    if (question1  == "5") {
        return 5;
    }

}
function q2result(){
    var question2 = document.quiz.question2.value;
    var Q2_results = 0

    if (question2 == "1") {
        return 1;
    }
    if (question2 == "2") {
        return 2;
    }
    if (question2 == "3") {
        return 3;
    }
    if (question2 == "4") {
        return 4;
    }
    if (question2 == "5") {
        return 5;
    }

}
function q3result(){
    var question3 = document.quiz.question3.value;
    var Q3_results = 0

    if (question3 == "1") {
        return 1;
    }
    if (question3 == "2") {
        return 2;
    }
    if (question3 == "3") {
        return 3;
    }
    if (question3 == "4") {
        return 4;
    }
    if (question3 == "5") {
        return 5;
    }
}
function q4result(){
    var question4 = document.quiz.question4.value;
    var Q4_results = 0

    if (question4 == "1") {
        return 1;
    }
    if (question4 == "2") {
        return 2;
    }
    if (question4 == "3") {
        return 3;
    }
    if (question4 == "4") {
        return 4;
    }
    if (question4 == "5") {
        return 5;
    }
}
function q5result(){
    var question5 = document.quiz.question5.value;
    var Q5_results = 0

    if (question5 == "1") {
        return 1;
    }
    if (question5 == "2") {
        return 2;
    }
    if (question5 == "3") {
        return 3;
    }
    if (question5 == "4") {
        return 4;
    }
    if (question5 == "5") {
        return 5;
    }
}

function results(){


var final_score = Number(q1result()) + Number(q2result()) + Number(q3result()) + Number(q4result()) + Number(q5result());

console.log (final_score);
var messages = ["你没有高四病", "你需要小心", "你有高四病"];

var range;

    if (final_score > 4 && final_score <11) {
        range = 0;
        console.log(range);
    }
    if (final_score > 11 && final_score <20) {
        range = 1;
        console.log(range);
    }
    if (final_score > 20) {
        range = 2;
        console.log(range);
    }

document.getElementById("after_submit").style.visbility = "visible";
document.getElementById("message").innerHTML = messages[range];

}
