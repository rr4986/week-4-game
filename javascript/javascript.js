

  var targetNumber = Math.floor(Math.random()*(120-19)+1);

  $("#value-box").append("<br>"+targetNumber);
  
  var currentScore = 0;
  var wins=0;
  var losses=0;
  var crystalOne=$("#crystal1");
  var crystalTwo=$("#crystal2");
  var crystalThree=$("#crystal3");
  var crystalFour=$("#crystal4");

 function randomValue(){
 	var num = Math.floor(Math.random()*(12-1)+1);
 	return num;
  }

  $("#wins-text").html("Wins: "+wins+"<br>");
  $("#losses-text").html("Losses: "+losses);
  
  crystalOne.attr("rnumber",randomValue());
  crystalTwo.attr("rnumber",randomValue());
  crystalThree.attr("rnumber",randomValue());
  crystalFour.attr("rnumber",randomValue());

  $(".crystal-pic").on("click", function() {
 
    var crystalScore = ($(this).attr("rnumber"));
    
    crystalScore = parseInt(crystalScore);
    
    currentScore += crystalScore;

    $("#current-score-box").html("Current Score: "+currentScore);

    if (currentScore === targetNumber) {
      wins++;
      $("#wins-text").html("Wins: "+wins);
    }
    else if (counter >= targetNumber) {
      alert("you overshot. You Lose");
      losses++;
      $("#losses-text").html("Losses: "+losses);
    }


  });