//high score variables
var clearbtn = document.querySelector("#clear-score");
var submitbtn = document.querySelector("#submit-score");
var scores = document.querySelector("#score-sheet");
var list = document.querySelector("#list");

// add scores to local storage
submitbtn.addEventListener("click",function(){
    
     var name1 = document.querySelector("#name").value;
    if (name1 === null){
        alert ("name not entered");
    }
    else {
     localStorage.setItem("name1",name1);}
     
});
// clear local storage

clearbtn.addEventListener("click", function(){

 localStorage.clear();

});