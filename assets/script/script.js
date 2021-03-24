var timerEl = document.querySelector('.navbar-text');
var start = document.getElementById("startGame");
var page = document.getElementById("page-one")
var b1 = document.getElementById("c1")
var b2 = document.getElementById("c2")
var b3 = document.getElementById("c3")
var b4 = document.getElementById("c4")
var newQuest = document.getElementById('message')
var gameQuest = document.getElementById('gameQuestion')
var message = document.getElementById('correctWrong')

var i = 0;
var time = 50;
var score = 0;
var highscore = [];

// set question arrays and and answers 

var questions =[
  {
    q1:"For loops are often used for?",
    choices : ["iterate over arrays" , "multiplies numbers", "performs a fuction once" , "not used at all"],
    answers : "iterate over arrays"
  },
{
    q1:"A variable can be declared",
    choices : ["locally" , "globally" , "both" , "independently"],
    answer : "locally"
  },
{
    q1:"objects can store?",
    choices : ["strings" , "booleans" ,"numbers" , "all of this and more."],
    answer : "strings"
  },
{
    q1:"the key word this refers to ",
    choices : ["the global object" , "the parent object" , "doesn't do anything" , "can only be used inside an object "],
    answer : "the global object"
  },
{
    q1:"this symbol % returns?",
    choices : ["true and false" , "the total sum of an equation" , "the remainder between two numbers" , "compaires equality"],
    answer : "the total sum of an equation"}
  ];


// create timer

function countdown() {
    var timeLeft = 51;
  
var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " Seconds ";
    if (timeLeft=== 0){
      clearInterval(timeInterval);
      timerEl.textContent = "Times Up"
      endGame()
    
    }
    else if (i === questions.length){
      clearInterval(timeInterval);
    } 
    
   },1000);
   console.log(timeLeft);
 }

 start.addEventListener("click", function(){
    countdown ();
    game()
    start.disabled = true;
    
});

// start game
function game (){
b1.hidden = false;
b2.hidden = false;
b3.hidden = false;
b4.hidden = false;


start .hidden = true;
newQuest.hidden = true;

if (i === questions.length){
  endGame()
}
  else {
   gameQuest.textContent = questions[i]["q1"];
    b1.textContent = questions[i]["choices"][0];
    b2.textContent = questions[i]["choices"][1];
    b3.textContent = questions[i]["choices"][2];
    b4.textContent = questions[i]["choices"][3];
  }
}

function endGame (){
  gameQuest.textContent = "Thanks for taking quiz"
  b1.remove();
  b2.remove();
  b3.remove();
  b4.remove();
  message.textContent = 'your score '+ score;
  localStorage.setItem("score",score);
  var finished = document.createElement("button")
  finished.innerHTML = 'Finished'
  document.body.appendChild(finished);

  finished.addEventListener('click', function(){
  window.location.href = 'higscore.html'
  })


}

// game 

b1.addEventListener('click',function(){
if (questions[i]["choices"][0] === questions[i]['answer']){
  message.textContent = "correct";
  score++
}
else{
  message.textContent = "wrong";
  time -=10
}
i++
game();
})
b2.addEventListener('click',function(){
  if (questions[i]["choices"][1] === questions[i]['answer']){
    message.textContent = "correct";
    score++
  }
  else{
    message.textContent = "wrong";
    time-=10
  }
  i++
game();
})
  b3.addEventListener('click',function(){
    if (questions[i]["choices"][2] === questions[i]['answer']){
      message.textContent = "correct";
      score++
    }
    else{
      message.textContent = "wrong";
      time-=10
    }
    i++
game();
})
    b4.addEventListener('click',function(){
      if (questions[i]["choices"][3] === questions[i]['answer']){
        message.textContent = "correct";
        score++
      }
      else{
        message.textContent = "wrong";
        time-=10
      }
      i++
game();
})
console.log(score)






