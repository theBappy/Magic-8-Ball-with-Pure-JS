$(document).ready(function(){
   let magic8Ball = {};
   magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
   $('#answer').hide();
   magic8Ball.askQuestion = function(question){
    $('#8ball').effect('shake');
    $('#8ball').attr('src', 'magic8ballAnswer.png')
    $('#answer').fadeIn(3000)
    let randomNumber = Math.random()
    let randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    let randomIndex = Math.floor(randomNumberForListOfAnswers)
    let answer = this.listOfAnswers[randomIndex]
    $('#answer').text(answer)
    console.log(question)
    console.log(answer)
   }
   let onClick = function(){
       $('#answer').hide()
       $('#8ball').attr('src','magic8ballQuestion.png')
       setTimeout(function(){
           let question= prompt('ASK A YES/NO QUESTION')
           magic8Ball.askQuestion(question)
       }, 500)
       
   }
   $('#questionButton').click(onClick)
})