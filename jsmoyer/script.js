var randomize ;
var computerChoice ;
var playerChoice ;
var playerPaperCount = -1 ; 
var playerRockCount = -1; 
var playerScissorsCount = -1 ; 
//console.log(randomize);
function playerRock() {
	playerPaperCount = -1;
	playerScissorsCount = -1;
	playerRockCount++;
	console.log("Player Rock Function count is: " + playerRockCount);
	document.getElementById("image").innerHTML = '<img width="100px" height="100px"src="blank1.png">'
	if(playerRockCount == 2){
		computerWin();
	} else { 
		playerChoice = 1;
		computerMove();
		compare();
	}

}
function playerPaper() {
	playerRockCount = -1;
	playerScissorsCount = -1;
	playerPaperCount++;
	console.log("Player Paper Function count is: " + playerPaperCount);
	document.getElementById("image").innerHTML = '<img width="100px" height="100px" src="blank2.png">'
	if(playerPaperCount == 2){
		computerWin();
	} else { 
		playerChoice = 2;
		computerMove();
		compare();
	}
}
function playerScissors() {
	playerPaperCount = -1;
	playerRockCount = -1;
	playerScissorsCount++;
	console.log("Player Scissors Function count is: " + playerScissorsCount);
	document.getElementById("image").innerHTML = '<img width="100px" height="100px" src="blank3.png">'
	if(playerScissorsCount == 2){
		computerWin();
	} else { 
		playerChoice = 3;
		computerMove();
		
	}
}
function computerMove(){
	randomize = Math.ceil(3*Math.random())
	
	if(playerPaperCount == 2 || playerRockCount == 2 || playerScissorsCount == 2){
		computerWin();
		
		} else {
		if(randomize == 1){
		computerChoice = 1;
		document.getElementById("computer").innerHTML = '<img width="100px" height="100px"src="blank1.png">';
		compare();
		}
		else if(randomize == 2) {
		computerChoice = 2;
		document.getElementById("computer").innerHTML = '<img width="100px" height="100px" src="blank2.png">';
		compare();

		}
		else if(randomize == 3){
		computerChoice = 3;
		document.getElementById("computer").innerHTML = '<img width="100px" height="100px" src="blank3.png">';
		compare();
		}
	}
	compare();

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
function computerWin() {                                         //if player picks same option twice in a row computer automatically wins
	console.log("Computer Auto Wins!");
	console.log("Player Paper Count: " + playerPaperCount);
	console.log("Player Rock Count: " + playerRockCount);
	console.log("Player Scissors Count: " + playerScissorsCount);
	
	if (playerPaperCount == 2){
	computerChoice = 3;
	document.getElementById("computer").innerHTML = '<img width="100px" height="100px" src="blank3.png">';
	compare();
	}
	else if(playerRockCount == 2) {
	computerChoice = 2;
	document.getElementById("computer").innerHTML = '<img width="100px" height="100px" src="blank2.png">';
	compare();
	}
	else if(playerScissorsCount == 2) {
	computerChoice = 1;
	document.getElementById("computer").innerHTML = '<img width="100px" height="100px" src="blank1.png">';
	compare();
	}
	
	playerPaperCount = -1;
	playerRockCount = -1;
	playerScissorsCount = -1;
	}