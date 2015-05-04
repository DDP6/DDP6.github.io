var userChoice;
var math;
var computerChoice;

function rock() {

	userChoice = 1;

	randomNumber();
}

function paper() {

	userChoice = 2;

	randomNumber();
}

function scissor() {

	userChoice = 3;

	randomNumber();
}

function randomNumber() {
	computerChoice = Math.ceil(Math.random()*3);

	outCome();
}

//rock is 1
//paper is 2
//scissor is 3
function outCome() {
	if (userChoice === 1) {

		if (computerChoice === 1) {
			tie();
		}

		if (computerChoice === 2) {
			lose()
		};

		if (computerChoice === 3) {
			win()
		};

	} 

	if (userChoice === 2) {

		if (computerChoice === 1) {
			win()
		}

		if (computerChoice === 2) {
			tie()
		};

		if (computerChoice === 3) {
			lose()
		};
	}

	if (userChoice === 3) {

		if (computerChoice === 1) {
			tie()
		};

		if (computerChoice === 2) {
			lose()
		};

		if (computerChoice === 3) {
			lose()
		};
	} 
}

function win() {
	document.getElementById("resultPic").src = "http://img1.wikia.nocookie.net/__cb20061216202527/wikiality/images/3/31/Happy_kity.jpg"

	document.getElementById("result").innerHTML = "You won! Good job!"
}


function lose() {
	document.getElementById("resultPic").src = "http://fc09.deviantart.net/fs71/f/2014/025/8/b/sad_kitten_by_andyhulk-d73p1i0.jpg"

	document.getElementById("result").innerHTML = "You lost! Try again!"
}


function tie() {
	document.getElementById("resultPic").src = "http://www.thatcutesite.com/uploads/2010/06/cat_with_tie_02-600x450.jpg"

	document.getElementById("result").innerHTML = "You tied."
}
