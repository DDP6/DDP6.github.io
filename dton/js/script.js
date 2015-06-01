var userchoice;
var compchoice;
var randomNum;


function Crock(){
	userchoice = 1;
	compchoice = 1;
	Rnumber();
}


function Cpaper(){
	userchoice = 2;
	compchoice = 2;
	Rnumber();
}

function Cscissor(){
	userchoice = 3;
	compchoice = 3;
	
	Rnumber();
}


function Rnumber() {
	randomNum = Math.floor(Math.random()*100);
	compChoice();
	userChoice();
}

function compChoice(){
	if (randomNum <= 33) {
		compchoice = 1;
	document.getElementById("computer").innerHTML = "<img class='compPic' src='http://www.rhynonetworks.com/wp-content/uploads/2014/06/Rock.png'>";

	} else if (randomNum <= 66) {
		compchoice = 2;
	document.getElementById("computer").innerHTML = "<img class='compPic' src='https://frevvoblog.files.wordpress.com/2014/10/paperstack01.gif'>";
	
	} else if (randomNum <= 100){
		compchoice = 3;
	document.getElementById("computer").innerHTML = "<img class='compPic' src='http://2.bp.blogspot.com/--rum8cEtfD8/Uc8Q_1a1hRI/AAAAAAAAAW8/bHYwuP3_Rsk/s300/scissors.gif'>";
	};
	compare();
}

function userChoice(){
	if (randomNum <= 33) {
	userchoice = 1;
	document.getElementById("You").innerHTML = "<img class='userPic' src='http://www.rhynonetworks.com/wp-content/uploads/2014/06/Rock.png'>";
	
	} else if (randomNum <= 66) {
		userchoice = 2;
	document.getElementById("You").innerHTML = "<img class='userPic' src='https://frevvoblog.files.wordpress.com/2014/10/paperstack01.gif'>";
	compare();

	} else if (randomNum <= 100){
		userchoice = 3;
	document.getElementById("You").innerHTML = "<img class='userPic' src='http://2.bp.blogspot.com/--rum8cEtfD8/Uc8Q_1a1hRI/AAAAAAAAAW8/bHYwuP3_Rsk/s300/scissors.gif'>";
	};
	compare();
}





function compare() {
	if (userchoice === compchoice) {

		
	
	} else if (userchoice === 1 && compchoice === 2) {
		document.getElementById("result").innerHTML = "You Lose!"

	} else if (userchoice === 2 && compchoice === 2) {
		document.getElementById("result").innerHTML = "TIE!"

	} else if (userchoice === 2 && compchoice === 3) {
		document.getElementById("result").innerHTML = "You Lose!"
	
	} else if (userchoice === 1 && compchoice === 3) {
		document.getElementById("result").innerHTML = "You Lose!"
	
	} else if (userchoice === 3 && compchoice === 1) {
		document.getElementById("result").innerHTML = "You Win!"

	} else if (userchoice === 3 && compchoice === 3) {
		document.getElementById("result").innerHTML = "TIE!"

	} else if (userchoice === 3 && compchoice === 2) {
		document.getElementById("result").innerHTML = "You Win!"

	} else if (userchoice === 2 && compchoice === 1) {
		document.getElementById("result").innerHTML = "You Win!"

	} else if (userchoice === 1 && compchoice === 1) {
		document.getElementById("result").innerHTML = "TIE!"

	
	}
}




	























