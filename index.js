var readlineSync = require("readline-sync")
const chalk = require('chalk')
var points = 0

var questions = [ 
  QuestionOne = { 
    question: "What is Thomas's fullname? ",
    answer: "Thomas Alex"},
  QuestionTwo = {
    question: "Where is he from? ",
    answer: "Kerala"},
  QuestionThree = {
    question: "Where did he study for college? ",
    answer: "Manipal Institute of Technology"},
  QuestionFour = {
    question: "Where did he live most of his life? ",
    answer: "Dubai"},
  QuestionFive = {
    question: "Did he colour his hair blue at one point? ",
    answer: "Yes"},
  ]

function playQuiz (question, answer) {
  var userAnswer = readlineSync.question(chalk.red(question))

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log ("Correct Answer! :)\n")
    points++
  } else {
    console.log("Wrong Answer :(\n")
  }
}

var userName = readlineSync.question(chalk.yellow("What is your name? "))
console.log(chalk.green("\nWelcome " + userName))
console.log(chalk.green("This is quiz about Thomas Alex \nAll the best! \n"))

var size = questions.length
for (var i = 0; i < size; i++) {
  playQuiz(questions[i].question, questions[i].answer)
}

if (points >= 2) {
  console.log(chalk.cyan("Congratulations " + userName +"!"))
} else {
  console.log(chalk.cyan("Better luck next time!"))
}
console.log (chalk.cyan("Your final score is: ", points))