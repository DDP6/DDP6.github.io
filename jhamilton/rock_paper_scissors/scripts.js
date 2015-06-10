var userChoice;
var math;
var computerChoice;

//these functions are the player's choices, and they print to the console
function rock() {

	userChoice = 1;
	randomNumber();
	console.log(userChoice);
}

function paper() {

	userChoice = 2;
	randomNumber();
	console.log(userChoice);
}

function scissor() {

	userChoice = 3;
	randomNumber();
	console.log(userChoice);
}
//this function generates the computer's choice
function randomNumber() {
	computerChoice = Math.ceil(Math.random()*3);
	outCome();
	console.log(userChoice);
}

// this code is what determines the outcome of both choices
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


// this group of functions (win, lose and tie) make the visuals happen depending on the outcome.
function win() {
	document.getElementById("resultPic").src = "http://img1.wikia.nocookie.net/__cb20061216202527/wikiality/images/3/31/Happy_kity.jpg"

	document.getElementById("result").innerHTML ='<p id="border" class="text-center">You Won! Good job!.</p>'

}


function lose() {
	document.getElementById("resultPic").src = "http://fc09.deviantart.net/fs71/f/2014/025/8/b/sad_kitten_by_andyhulk-d73p1i0.jpg"

	document.getElementById("result").innerHTML ='<p id="border" class="text-center">You Lost. :C</p>'
}


function tie() {
	document.getElementById("resultPic").src = "http://www.thatcutesite.com/uploads/2010/06/cat_with_tie_02-600x450.jpg"

	document.getElementById("result").innerHTML ='<p id="border" class="text-center">You tied.</p>'
}



