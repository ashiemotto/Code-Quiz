var timerEl = document.querySelector('.navbar-text');
var start = document.querySelector("#startGame");
var button1 = document.querySelector("#c1");
var button2 = document.querySelector("#c2");
var button3 = document.querySelector("#c3");
var button4 = document.querySelector("#c4");
var question = document.querySelector("#page-one")


// set question arrays and and answers 
// set answers array

var questions =["For loops are often used for?","A variable can be declared","objects can store?","the key word this refers to ","this symbol % returns?"]
var choices1 = ["iterate over arrays" , "multiplies numbers", "performs a fuction once" , "not used at all"];
var answers1 = "iterate over arrays";
var choices2 = ["locally" , "globally" , "both" , "independently"];
var answer2 = "locally";
var choices3 = ["strings" , "booleans" ,"numbers" , "all of this and more."];
var answer3 = "strings";
var choices4 = ["the global object" , "the parent object" , "doesn't do anything" , "can only be used inside an object "];
var answer4 = "the global object"
var choices5 = ["true and false" , "the total sum of an equation" , "the remainder between two numbers" , "compaires equality"];
var answer5 = "the total sum of an equation"


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
    start.disabled = true;
});

function game (){
   
    button1.push(choices1[0]);

}
game()