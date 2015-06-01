var userChoice;
var compChoice;
var randomNum;

function playerRock() {

	userChoice = 1;

	document.getElementById("player").src = "img/rock.PNG"; 

	randomNumber();

}


function playerPaper() {

	userChoice = 2;

	document.getElementById("player").src = "img/paper.PNG"; 

	randomNumber();

}

function playerScissors() {

	userChoice = 3;

	document.getElementById("player").src = "img/scissors.PNG"; 

	randomNumber();

}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	console.log(randomNum);
	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1;
		document.getElementById("pc").src = "img/rock.PNG"; 
		console.log("Comp chooses Rock");

	} else if (randomNum <= 66) {
		compChoice = 2;
		document.getElementById("pc").src = "img/paper.PNG";
		console.log("Comp chooses Paper");

	} else if (randomNum <= 100) {
		compChoice = 3;
		document.getElementById("pc").src = "img/scissors.PNG";
		console.log("Comp chooses Scissors");
		
	};
}

win = 0
tie = 0
lose = 0

function evaluateCvP () {
	if (userChoice == 1) {
		if (compChoice == 1) {
			tie++
		}
		else if (compChoice == 2) {
			lose++
		}
		else if (compChoice == 3) {
			win++
		}
	}
	else if (userChoice == 2) {
		if (compChoice == 1) {
			win++
		}
		else if (compChoice == 2) {
			tie++
		}
		else if (compChoice == 3) {
			lose++
		}
	}
	else if (userChoice == 3) {
		if (compChoice == 1) {
			lose++
		}
		else if (compChoice == 2) {
			win++
		}
		else if (compChoice == 3) {
			tie++
		}
	}		
document.getElementById('win').innerHTML = win;
document.getElementById('tie').innerHTML = tie;
document.getElementById('loss').innerHTML = lose;
}