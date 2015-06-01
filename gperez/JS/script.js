var User = null;
var Computer = null;
var paper = '<img src = "Pictures/paper.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" >';
var rock ='<img src = "Pictures/rock.png"  class="col-lg-4 col-md-4 col-sm-4 col-xs-4">';
var scissors = '<img src="Pictures/scissors.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4"  >';

function UserPaper(){
	User = 'paper';
	document.getElementById("fight_area").innerHTML = paper;
	ComputerChoice(); //calls on the function ComputerChoice
	Evaluate(); //calls the function Evaluate
	console.log("User selects paper");
};

function UserRock(){
	User= 'rock';
	document.getElementById("fight_area").innerHTML = rock;
	ComputerChoice();
	Evaluate();
	console.log("User selects rock");
};

function UserScissors(){
	User= "scissors";
	document.getElementById("fight_area").innerHTML = scissors;
	ComputerChoice();
	Evaluate();
	console.log("User selects scissors");
};

function ComputerChoice(){//this function gereates a random number to simulate the computer choosing a result, it then assigns the computer a choice based on the value of the number
	Computer = Math.floor(Math.random()*100)//Generates a random number and rounds it down to the nearest integer
	if (Computer <= 33){
		Computer = 'rock';
		document.getElementById("fight_area").innerHTML = rock;
		console.log("computer selects rock");
	}
	else if(Computer <=66){
		Computer ='paper';
		document.getElementById("fight_area").innerHTML = paper;
		console.log("computer selects paper");
	}
	else if(Computer <= 100){
		Computer = 'scissors';
		document.getElementById("fight_area").innerHTML = scissors;
		console.log("computer selects scissors");
	}
};

function Evaluate(){//This function compares evalutes computer choice versus player choice
	if(User == "paper" && Computer == "paper"){
		document.getElementById("result_bar").innerHTML = "<h1>TIE!</h1>";
		document.getElementById("fight_area").innerHTML = paper + '<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + paper;
		console.log("Tie");
	}
	else if(User == "rock" && Computer == "rock"){
		document.getElementById("result_bar").innerHTML = "<h1>TIE!</h1>";
		document.getElementById("fight_area").innerHTML = rock + '<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + rock;
		console.log("Tie");
	}
	else if(User =="scissors" && Computer == "scissors"){
		document.getElementById("result_bar").innerHTML = "<h1>TIE!</h1>";
		document.getElementById("fight_area").innerHTML = scissors + '<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + scissors;
		console.log("Tie");
	}
	else if(User == "paper" && Computer == "rock"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU WIN!</h1>";
		document.getElementById("fight_area").innerHTML = paper +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + rock;
		console.log("you win");
	}
	else if(User == "paper" && Computer == "scissors"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU LOSE!</h1>";
		document.getElementById("fight_area").innerHTML = paper +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + scissors;
		console.log("You lose");
	}
	else if(User == "rock" && Computer == "paper"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU LOSE!</h1>";
		document.getElementById("fight_area").innerHTML = rock +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + paper;
		console.log("You lose");
	}
	else if(User == "rock" && Computer == "scissors"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU WIN!</h1>";
		document.getElementById("fight_area").innerHTML = rock +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + scissors;
		console.log("you win");
	}
	else if(User == "scissors" && Computer == "paper"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU WIN!</h1>";
		document.getElementById("fight_area").innerHTML = scissors +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + paper;
		console.log("you win");
	}
	else if(User == "scissors" && Computer == "rock"){
		document.getElementById("result_bar").innerHTML = "<h1>YOU LOSE!</h1>";
		document.getElementById("fight_area").innerHTML = scissors +'<img src="Pictures/vs.png" class="col-lg-4 col-md-4 col-sm-4 col-xs-4">' + rock;
		console.log("You lose");
	}
};

function Bio_Eval(){// This function either displays or deletes the bio based on radio status
	var bio_state_var = document.getElementsByName("bio_state");
	if (bio_state_var[0].checked){
		document.getElementById("bio").innerHTML = "Aut augue in, orci massa ut, egestas ligula, vel suscipit. Nulla quam diam rutrum volutpat hendrerit, at blandit ridiculus ultricies repudiandae, nulla elit. Ut velit, in sit magna tortor tristique pede, eget sit adipiscing ut, morbi urna proin sed erat, lacus velit eu. Venenatis vehicula non ipsum vestibulum hendrerit pede, proin nulla rutrum quisque elementum imperdiet dolor, lobortis turpis ac viverra purus nascetur, iste auctor diam, sapien fusce enim dolor consequat at ac. Dapibus neque risus. Sociis cursus proin et, magna eu et leo, praesent sed. Turpis elit mauris lobortis elementum magna iaculis, et nunc aliquet lacinia amet tortor quisque, suspendisse non, nostra urna et sed tellus morbi. Fusce dui amet posuere, in donec pellentesque mauris fermentum non sed, pellentesque aliquam, ab congue nulla metus est est ipsum. Donec in habitant aspernatur imperdiet mauris non, a magna pariatur nec. Dapibus sed ullamcorper in et, sodales quam, magna cras pulvinar vel ante, imperdiet ullamcorper nulla neque quam ac augue, gravida tellus. Nullam ut, purus in pretium erat adipiscing vitae sit, lacinia nibh eget litora sapien ut, quisque molestiae mauris adipiscing, sit nunc mauris tortor vestibulum mattis. Dolor nulla ultrices amet, veritatis ornare nunc, elit morbi elementum magna, ultricies iaculis viverra eget et nunc.";
	}
	else {
		document.getElementById("bio").innerHTML = "";
	}
};