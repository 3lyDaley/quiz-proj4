var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
document.getElementById('startButton').onclick = function() {
  location.href = "page2.html"
};

var buildQuiz = function(){

}

var showResults = function() {

}


// on submit, show results
submitButton.addEventListener("click", showResults);