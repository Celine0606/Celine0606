 var response = prompt("What's your name?");
  alert("Hello "+ response +", welcome to this puzzle game!");

function inputAnswer(){
  var answer = prompt("Enter your answer here: ");
  if(answer==="4"){
     alert("Well done, your answer is correct!");
   }
  else{
     alert("Sorry, "+ answer +" is not the answer, let's try again!");
  }
}

function getAnswer(){
  alert("The answer is 4.")
}

function inputFeedback(){
  var feedback = prompt("We're glad to receive your suggestions:");
  alert("Thanks for trying! ");
}

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontsize = "5px";
  x.style.color = "red";
}
