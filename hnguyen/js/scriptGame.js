var playerChoice = "";
var compNumber = "";
var ranNum = "";

function compChoice() {
	compNumber = Math.floor(Math.random() * 100);
	randomNum();
	//Runs after any of the individual buttons are pressed and generates a random number
};
function askRock() { 
	playerChoice = 1;
	document.getElementById('you').innerHTML = '<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0Rzl4GdC8-09tkNa3l0xass4M31OlICOsCaPyPcwUhelTD659">';
	compChoice();
};
function askPaper() {
	playerChoice = 2;
	document.getElementById('you').innerHTML = '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiFPEkGySL99VP4v03vQ3nC5aK8E7jeym7XpMtD1f3Mcp1RLV4">';
	compChoice();
};
function askScissors() {
	playerChoice = 3;
	document.getElementById('you').innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qn70uvkqzM6-Sj7SFhvCssjmEjV33_NLQ-sh_xq89Gk6QXZb">';
	compChoice();
	//Chooses a number depending on player choice
};


function randomNum() {
	console.log(playerChoice)
	if (compNumber <=33) {
		ranNum = 1;
		document.getElementById("compChoice").innerHTML = '<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0Rzl4GdC8-09tkNa3l0xass4M31OlICOsCaPyPcwUhelTD659">';
		runGame();
	}
	else if (compNumber <=66) {
		ranNum = 2;
		document.getElementById("compChoice").innerHTML = '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiFPEkGySL99VP4v03vQ3nC5aK8E7jeym7XpMtD1f3Mcp1RLV4">';
		runGame();
	}
	else if (compNumber <=100) {
		ranNum = 3;
		document.getElementById("compChoice").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qn70uvkqzM6-Sj7SFhvCssjmEjV33_NLQ-sh_xq89Gk6QXZb">';
		runGame();
	}
};

function runGame(){
	console.log(ranNum)
	if(playerChoice == ranNum){
		document.getElementById("text").innerHTML = "TIE";
	}
	else if((playerChoice == 1 && ranNum == 2) || (playerChoice == 2 && ranNum == 3) || (playerChoice == 3 && ranNum == 1)){
		document.getElementById("text").innerHTML = "LOSS";
	}
	else if((playerChoice == 1 && ranNum == 3) || (playerChoice == 2 && ranNum == 1) || (playerChoice == 3 && ranNum == 2)){
		document.getElementById("text").innerHTML = "WIN";
	}
	// The "||" is considered an "OR" option when contained within a if/else sentence
};


	

