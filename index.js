var readlineSync = require("readline-sync")
var points = 0

var questions = [ 
  QuestionOne = { 
    question: "What is my name? ",
    answer: "Thomas Alex"},
  QuestionTwo = {
    question: "Where is he from? ",
    answer: "Kerala"},
  QuestionThree = {
    question: "Where did he study for college? ",
    answer: "Manipal Institute of Technology"},
  ]

function playQuiz (question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log ("Correct Answer! :)")
    points++
  } else {
    console.log("Wrong Answer :(")
  }
}

var userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName)
console.log("This is quiz about Thomas Alex")

for (var i = 0; i < 3; i++) {
  playQuiz(questions[i].question, questions[i].answer)
}
console.log ("Your final score is: ", points)