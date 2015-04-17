var randomize = Math.ceil(3*Math.random());
var computerChoice ;
var playerChoice ;

function playerRock() {
	playerChoice == 1;
	computerMove();
	compare();
}
function computerMove(){
	if(randomize == 1){
	computerChoice = 1;
	document.getElementById("computer").innerHTML = "Rock";
	}
	else if(randomize == 2) {
	computerChoice = 2;
	document.getElementById("computer").innerHTML = "Paper";

	}
	else if(randomize == 3){
	computerChoice = 3;
	document.getElementById("computer").innerHTML = "Scissors";
	}
}

//console.log(randomize);
//function playerRock() {
//	playerChoice = 1;
//	computerMove();
//	compare();
//}
//function playerPaper() {
//	playerChoice = 2
//	computerMove();
//	compare();
}
//function playerScissors() {
//	playerChoice = 3
//	computerMove();
//	compare();
}
function compare(){
	if (playerChoice == computerChoice){
		document.getElementById("decision").innerHTML = "Tie"
	}
	if (playerChoice == 1 && computerChoice == 2){
		document.getElementById("decision").innerHTML = "Computer Wins"
	}
	if (playerChoice == 1 && computerChoice == 3){
		document.getElementById("decision").innerHTML = "You Win!"
	}
	if (playerChoice == 2 && computerChoice == 1){
		document.getElementById("decision").innerHTML = "You win!"
	}
	if (playerChoice == 2 && computerChoice == 3){
		document.getElementById("decision").innerHTML = "Computer Wins"
	}
	if (playerChoice == 3 && computerChoice == 2){
		document.getElementById("decision").innerHTML = "You Win!"
	}
	if(playerChoice == 3 && computerChoice == 1){
		document.getElementById("decision").innerHTML = "Computer Wins"
	}
}
