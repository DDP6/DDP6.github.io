var userChoice;

var compChoice;

var randomNum;


	function playerRock () {
	
	userChoice = 1; //Rock means 1 in this case

	document.getElementById("playerImage").innerHTML = "<img src='rock.png' class='img-responsive'>";

	randomNumber();
	}

	function playerPaper() {

	userChoice = 2; // Paper means 2

	document.getElementById("playerImage").innerHTML = "<img src='paper.png' class='img-responsive'>";

	randomNumber();
	}

function playerScissors() {

	userChoice = 3; //Scissors is 3

	document.getElementById("playerImage").innerHTML = "<img src='scissors.png' class='img-responsive'>";

	randomNumber();
	}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
	}

function computerChoice() {

	if (randomNum <= 33) {
		
		compChoice = 1; //Computer will choose Rock 
		
		document.getElementById("computerImage").innerHTML = "<img src='rock.png' class='img-responsive'>";

	} else if (randomNum <= 66) {

		compChoice = 2; //Computer will choose paper
		
		document.getElementById("computerImage").innerHTML = "<img src='paper.png' class='img-responsive'>";	
	
	} else if (randomNum <= 100) {

		compChoice = 3; // Computer will choose scissors
	
		document.getElementById("computerImage").innerHTML = "<img src='scissors.png' class='img-responsive'>";	
	}

	compare();
}

function compare () {
	if (userChoice === compChoice) {
		document.getElementById('winnerLoser').innerHTML = "Tie!";
	

	//PLayer choose rock and computer choose paper
	} else if (userChoice === 1 && compChoice === 2) {
		document.getElementById('winnerLoser').innerHTML = "Com Win"; 
	//Player choose rock and computer choose scissors	
	} else if (userChoice === 1 && compChoice === 3) {
		document.getElementById('winnerLoser').innerHTML = "You win!";	
	//Player choose paper and computer choose rock	
	} else if (userChoice === 2 && compChoice === 1) {
		document.getElementById('winnerLoser').innerHTML = "Nice";
	//PLayer choose paper and computer choose scissors
	} else if (userChoice === 2 && compChoice === 3) {
		document.getElementById('winnerLoser').innerHTML = "You lost";
	}  else if (userChoice === 3 && compChoice === 2) {
		document.getElementById('winnerLoser').innerHTML = "Win!"	
	//Player choose scissors and computer choose rock	
	} else if (userChoice === 3 && compChoice ===1) {
		document.getElementById('winnerLoser').innerHTML = "Lost!";

	}
	
}


  // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
	
	    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });