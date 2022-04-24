var qCard = document.getElementById('data-quiz-item')
var qCardChoices = document.getElementById('mChoice')
function getApi() {
  
  var requestUrl = 'https://opentdb.com/api.php?amount=12&category=19&difficulty=medium&type=multiple';
  
  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // TODO: Loop through the response
    for (var i = 0; i < 12; i++){
      console.log(data.results[i].question);
      
      var answerChoices = [];
      var question = document.createElement('h4');
      question.innerHTML = data.results[i].question;

        qCard.append(question);

        answerChoices.push(data.results[i].correct_answer, data.results[i].incorrect_answers);
        console.log(answerChoices)

        


      }
    });
}
// document.getElementById('startButton').onclick = function() {
//   location.href = "page2.html"
// };

getApi();

