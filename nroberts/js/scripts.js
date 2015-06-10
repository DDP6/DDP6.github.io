var userChoice;
var compChoice;
var randomNum;

function playerrock() {
	userChoice=1;
	randomNumber();
}
function playerpaper() {
	userChoice=2;
	randomNumber();
}
function playerscissors() {
	userChoice=3;
	randomNumber();
}
function randomNumber() {
	randomNum= Math.floor(Math.random()*100);
	computerChoice();
}
function computerChoice(){
	if(randomNum <=33) {
		compChoice=1;
	}else if (randomNum<=66){
		compChoice=2;
	}else if (randomNum<=100){
		compChoice=3;
	}
	compare();
}

function compare(){
	if (userChoice===compChoice) {
		alert("It is a tie!");
	} else if (userChoice ===1 && compChoice ===2){
		alert("Computer chooses paper and wins!");
	} else if (userChoice ===1 && compChoice===3){
		alert("Rock beats Scissors! You win...for now... ");
	} else if (userChoice ===2 && compChoice===1) {
		alert("Paper beats Rock! You win...for now... ");
	} else if (userChoice ===2 && compChoice===3) {
		alert("Computer chooses Scissors and wins!")
	} else if (userChoice ===3 && compChoice===1) {
		alert("Computer chooses Rock and wins!");
	} else if (userChoice ===3 && compChoice===2) {
		alert("Scissors beats Paper! You win...for now...")	;	
	}
}

var form = document.forms.example;

form.addEventListener("submit",gameDisplay,false);

function gameDisplay(event) {

	event.preventDefault();

	var favGame = {

		game : form.allTime.value,
		Why : form.reason.value,
		genre: form.genre.value,

	}

	var text = "<p> Your favorite game of all time is  " + favGame.game  + " and its your favorite because "+ favGame.Why + ". It falls into the " + favGame.genre + " genre of games" + ".</p>";
	document.getElementById("result").innerHTML= text;

}


