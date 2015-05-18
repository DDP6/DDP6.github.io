var playerChoice= 0;
var computerChoice= 0;
var randomNum=0;


 
function playerRock() {
	 playerChoice= 1;
	 console.log("player chooses rock");

	 document.getElementById("userChoice").innerHTML = "<img src='http://vignette3.wikia.nocookie.net/clubpenguin/images/3/37/Pet_Rock.jpg/revision/latest?cb=20131027211654'>";

	 randomNumber();

}

 function playerPaper() {
 	playerChoice= 2;
 	document.getElementById("userChoice").innerHTML = "<img src='http://www.clker.com/cliparts/b/8/e/e/1206556249326967385nexxuz_Loose_Leaf_Paper.svg'>";

 	randomNumber();

 }


function playerScissors() {
	playerChoice= 3;
	document.getElementById("userChoice").innerHTML = "<img src='http://images.clipartpanda.com/scissors-clipart-nicubunu_Scissors.png'>";

	randomNumber();

}

function randomNumber(){


	randomNum = Math.floor(Math.random()*100);

	 

	if (randomNum <= 33) {
			computerChoice = 1; //computer chooses rock//
			console.log("computer chooses rock");

	} else if (randomNum <= 66) {

			computerChoice = 2; // computer chooses paper//
			console.log("computer chooses paper");

	}else if (randomNum <= 100) {

			computerChoice = 3; //computer chooses scissors//
			console.log("computer chooses scissors");

	};

	compare();
	}

function compare() {

	console.log("result");


	console.log(playerChoice);

	console.log(computerChoice);


	if (playerChoice === computerChoice) {
		
		alert("It's a tie!");
		console.log("it's a tie");

	}	else if (playerChoice === 1 && computerChoice === 2) {
		document.getElementById("computChoice").innerHTML = "<img src='http://www.clker.com/cliparts/b/8/e/e/1206556249326967385nexxuz_Loose_Leaf_Paper.svg'>";

		alert("computer chooses paper and wins!");
		console.log("result");

	} 	else if (playerChoice === 1 && computerChoice === 3) {
		document.getElementById("computChoice").innerHTML = "<img src='http://images.clipartpanda.com/scissors-clipart-nicubunu_Scissors.png'>"

			alert("Rock beats scissors!! You win");
			console.log("result");

	} 	else if (playerChoice === 2 && computerChoice === 1) {
		document.getElementById("computChoice").innerHTML = "<img src='http://vignette3.wikia.nocookie.net/clubpenguin/images/3/37/Pet_Rock.jpg/revision/latest?cb=20131027211654'>";

		alert("You win");
		console.log("result");


	} 	else if (playerChoice === 2 && computerChoice === 3) {
		document.getElementById("computChoice").innerHTML = "<img src='http://images.clipartpanda.com/scissors-clipart-nicubunu_Scissors.png'>";

		alert("You lose");
		console.log("result");


	} 	else if (playerChoice === 3 && computerChoice === 1) {
		document.getElementById("computChoice").innerHTML = "<img src='http://vignette3.wikia.nocookie.net/clubpenguin/images/3/37/Pet_Rock.jpg/revision/latest?cb=20131027211654'>";

		alert("You lose!");
		console.log("result");
 	
	}	else  if (playerChoice === 3 && computerChoice === 2){
		document.getElementById("computChoice").innerHTML = "<img src='http://www.clker.com/cliparts/b/8/e/e/1206556249326967385nexxuz_Loose_Leaf_Paper.svg'>";

		alert("You Win!!!!!!!!!!!!");
		console.log("result");	
		}
	
};





