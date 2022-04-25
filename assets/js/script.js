

var tenQuestions = [
  // Question 1
  {
    question: "Javascript is an ________ language?",
    answers: {
      a: "Object-oriented",
      b: "Object-based",
      c: "Procedural",
      d: "None of the above"
    },
    correctAnswer: "a" 
  },
  // Question 2
  {
    question: "Which of the following methods is used to access HTML in Javascript?",
    answers: {
      a: "getElementById()",
      b: "getElementsByClassNmae()",
      c: "Both A & B",
      d: "None of the above"
    },
    correctAnswer: "c" 
  },
  // Question 3
  {
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: {
      a: "Throws an error",
      b: "Ignores the statements",
      c: "Gives a warning",
      d: "None of the above"
    },
    correctAnswer: "b" 
  },
  // Question 4
  {
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: {
      a: "document.write()",
      b: "console.log()",
      c: "window.alert()",
      d: "All of the above"
    },
    correctAnswer: "d" 
  },
  // Question 5
  {
    question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
    answers: {
      a: "Boolean",
      b: "Undefined",
      c: "Object",
      d: "Integer"
    },
    correctAnswer: "c" 
  },
  // Question 6
  {
    question: "What does the Javascript 'debugger' statement do?",
    answers: {
      a: "It will debug all the errors in the program at runtime.",
      b: "It acts as a breakpoint in a program.",
      c: "It will debug error in the current statement if any.",
      d: "All of the above."
    },
    correctAnswer: "b" 
  },
  // Question 7
  {
    question: "What does the 'toLocateString()' method do in JS?",
    answers: {
      a: "Returns a localised object representation",
      b: "Returns a parsed string",
      c: "Returns a localized string representation of an object.",
      d: "None of the above."
    },
    correctAnswer: "c"
  },
  // Question 8
  {
    question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage, is called?",
    answers: {
      a: "Object Serialization",
      b: "Object Encapsulation",
      c: "Object Inheritance",
      d: "None of the above"
    },
    correctAnswer: "a" 
  },
  // Question 9
  {
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: {
      a: "stringify()",
      b: "parse()",
      c: "convert()",
      d: "None of the above"
    },
    correctAnswer: "a" 
  },
  // Question 10
  {
    question: "Which keyword is used to declare an asynchronous function in Javascript?",
    answers: {
      a: "await",
      b: "async",
      c: "setTimeout",
      d: "None of the above"
    },
    correctAnswer: "b" 
  }
]

var quizContainer = document.getElementById('quiz'); 
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var buildQuiz = function(tenQuestions, quizContainer, resultsContainer, submitButton) {
  
  var showQuestions = function(tenQuestions, quizContainer){
    
    var output = [];
    var answers;
  
    for(var i = 0; i < tenQuestions.length; i++){
  
      answers = [];
      
      // add radio button to answers
      for(letter in tenQuestions[i].answers) {
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + tenQuestions[i].answers[letter]
          + '</label>'
        );
      }
     
      output.push(
        '<div class="question">' + tenQuestions[i].question + '</div>' + '<div class ="answers">' + answers.join('</br>') + '</div>'
      );
    }
  
    quizContainer.innerHTML = output.join('');
  }
  
  var showResults = function(tenQuestions, quizContainer, resultsContainer) {
    // gather answer containers from quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    console.log(answerContainers);

    // keeping track of answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // find selected answer for questions
    for ( i = 0; i < tenQuestions.length; i++) {
      
      // give us selected answer OR if there isn't one, give an empty object
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      console.log(userAnswer);
      // if answer is correct
      if(userAnswer === tenQuestions[i].correctAnswer){
        // add to correct score
        numCorrect++;
      
        // color answers green
        answerContainers[i].style.color = 'lightgreen';
      } else {
        // color answer red
        answerContainers[i].style.color = 'red';
    }
    
  } 
  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of '  + tenQuestions.length;  
  }

  // show questions
  showQuestions(tenQuestions, quizContainer);

  // on submit, show results
  submitButton.onclick = function() {
    showResults(tenQuestions, quizContainer, resultsContainer);
  }
}

buildQuiz(tenQuestions, quizContainer, resultsContainer, submitButton);
//  var showSlide = function(n) {
//    // hide current slide by removing active-slide class
//    slides[currentSlide].classList.remove('active-slide');
//    slides[n].classList.add('active-slide');
//    //update current slide number
//    currentSlide = n;
//    //on first slide hide back button ELSE show back button
//    if(currentSlide === 0){
//      previousButton.style.display = 'none';
//    } else {
//      previousButton.style.display = 'inline-block';
//    }
//    // on last slide hide NEXT button show SUBMIT button, else vice versa
//    if(currentSlide === slides.length - 1){
//      nextButton.style.display = 'none';
//      submitButton.style.display = 'inline-block';
//    } else {
//      nextButton.style.display = 'inline-block';
//      submitButton.style.display = "none";
//    }
//  }

// buildQuiz(tenQuestions, quizContainer);

// // paginations
// var backButton = document.getElementById("back");
// var nextButton = document.getElementById("next");
// var slides = document.querySelectorAll(".slide")

// //show the first slide
// showSlide(currentSlide);


//document.getElementById('startButton').onclick(buildQuiz);
