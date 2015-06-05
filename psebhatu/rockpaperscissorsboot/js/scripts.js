var userChoice;
var compChoice;
var randomNum;



function playerRock() {
	
	userChoice = 1;  //  rock means 1 in this case

	document.getElementById('playerImage').innerHTML = "<img src='rock.png'>";
	console.log("Player chooses Rock");
	randomNumber();
}


function playerPaper() {
	
	userChoice = 2;  //  paper mean 2 in this case 

	document.getElementById('playerImage').innerHTML = "<img src='paper.png'>";
	console.log("Player chooses Paper");
	randomNumber();
}

function playerScissors()  {

	userChoice = 3;  //  Scissors is 3
	document.getElementById('playerImage').innerHTML = "<img src='scissors.png'>";

	console.log("Player chooses Scissors");
	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {

		compChoice =1;  //Computer chooses Rock

		console.log("Computer chooses Rock");

		document.getElementById("computerImage").innerHTML = "<img src='rock.png' class='img-responsive'>";
	} else if (randomNum <= 66){
		compChoice = 2; //  Computer chooses Paper

		console.log("Computer chooses Paper");

		document.getElementById("computerImage").innerHTML = "<img src='paper.png' class='img-responsive'>";

		
	} else if (randomNum <= 100){

		compChoice = 3;  //Computer chooses Scissors

		document.getElementById("computerImage").innerHTML = "<img src='scissors.png' class='img-responsive'>";

		console.log("Computer chooses Scissors");
	};	
	
	compare(); 
}





function compare() {

	if (userChoice === compChoice) {
		document.getElementById('result').innerHTML = "It's a tie!";

	} else if (userChoice === 1 && compChoice === 2) {
		document.getElementById('result').innerHTML = "Computer chooses paper and wins";

	} else if (userChoice === 1 && compChoice === 3) {

		document.getElementById('result').innerHTML = "Rock beats scissors!!! You win!";

	} else if (userChoice === 2 && compChoice === 1) {
		document.getElementById('result').innerHTML = "You win!";

	} else if (userChoice === 2 && compChoice === 3) {

		document.getElementById('result').innerHTML = "You lose!";

	} else if (userChoice === 3 && compChoice === 1) {
		document.getElementById('result').innerHTML = "You Lose!";

	} else if (userChoice === 3 && compChoice === 2) {
		document.getElementById('result').innerHTML = "You Win!";
		
	}	
}

