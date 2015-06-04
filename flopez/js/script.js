
////// R.P.S.html code below /////

var userChoice;
var comChoice;
var randomNum;


function playeRock() {

	userChoice = 1; // rock means 1 in this case

	randomNumer();

}

function playerPaper() {

	userChoice = 2; // paper means 2 in this case

		console.log("paper for player");

		randomNumer();
}

function playerScissors() {

	userChoice = 3; // Scissors is 3

	randomNumer();

}

function randomNumer() {
	randomNum = Math.floor(Math.random()*100)

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		comChoice = 1; // Computer chooses Rock
	
	} else if (randomNum <= 66){

		comChoice = 2; // Computer choose Paper
	} else if (randomNum <= 100) {

		comChoice = 3; // Computer chooses Scissors
	};

	compare();
}


function compare() {

	if (userChoice === comChoice) {
		alert("it is a tie!");
		alert("Refresh to start again!");

	} else if (userChoice === 1 && comChoice === 2) {
		alert("computer chooses paper and wins!");

	} else if (userChoice === 1 && comChoice === 3) {
		alert("Rock,beats scissors!!! You win!");
	
	} else if (userChoice === 2 && comChoice === 3) {
		alert("You win!");
	
	} else if (userChoice === 3 && comChoice === 1) {
		alert("You lose!");
	
	} else if (userChoice === 3 && comChoice === 2) {
		alert("You win")
	} 


}

$(document).ready(function(){
  $('nav li').click(function(){
    $('nav li.active').removeClass('active');
    $(this).addClass('active');
  });
});



                    














