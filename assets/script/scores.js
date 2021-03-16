//high score variables
var clearbtn = document.querySelector("#clear-score");
var submitbtn = document.querySelector("#submit-score");

submitbtn.addEventListener("click",function(event){
    event.preventDefault();

    var name1 = document.querySelector("#name").value;

    
    localStorage.setItem("name1",name1);
     

});
// clear local storage

clearbtn.addEventListener("click", function(event){
event.preventDefault();
 localStorage.clear();

});