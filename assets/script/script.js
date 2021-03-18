var timerEl = document.querySelector('.navbar-text');
var start = document.querySelector("#startGame");
var page = document.querySelector("#page-one")
var b1 = document.querySelector("#c1")
var b2 = document.querySelector("#c2")
var b3 = document.querySelector("#c3")
var b4 = document.querySelector("#c4")
var question = 0;
var score = 0;

// set question arrays and and answers 

var questions =[
  {
    q1:"For loops are often used for?",
    choices1 : ["iterate over arrays" , "multiplies numbers", "performs a fuction once" , "not used at all"],
    answers1 : "iterate over arrays"
  },
{
    q2:"A variable can be declared",
    choices2 : ["locally" , "globally" , "both" , "independently"],
    answer2 : "locally"
  },
{
    q3:"objects can store?",
    choices3 : ["strings" , "booleans" ,"numbers" , "all of this and more."],
    answer3 : "strings"
  },
{
    q4:"the key word this refers to ",
    choices4 : ["the global object" , "the parent object" , "doesn't do anything" , "can only be used inside an object "],
    answer4 : "the global object"
  },
{
    q5:"this symbol % returns?",
    choices5 : ["true and false" , "the total sum of an equation" , "the remainder between two numbers" , "compaires equality"],
    answer5 : "the total sum of an equation"}];


// create timer

function countdown() {
    var timeLeft = 51;
  
var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds ";
    if (timeLeft=== 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Times Up"
      displayMessage();
    }
   },1000);
   console.log(timeLeft);
 }

 start.addEventListener("click", function(){
    countdown ();
    game()
    start.disabled = true;
    page.textContent = ""
});

function game (){
b1.hidden = false
b2.hidden = false
b3.hidden = false
b4.hidden = false

start .hidden = true
if (question === questions.length){
  endGame()
}
  else {
    page.textContent= questions[question][q1]
    b1.textContent = questions[question]["choices1"][0];
    b2.textContent = questions[question]["choices1"][1]
    b3.textContent = questions[question]["choices1"][2]
    b4.textContent = questions[question]["choices1"][3]
  }
}

function endGame (){
  var finished = document.createElement("button")
  finished.addEventListener("click", )
}