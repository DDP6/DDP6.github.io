var User;
var randomizer;
document.getElementById("center").innerHTML = '<img src="http://alpinionusa.com/wp-content/uploads/2013/05/blank-background-for-wp.jpg" />';



function pickRock() {
	User = 1;
	document.getElementById("Userc").innerHTML = '<img src="http://hydra-media.cursecdn.com/minecraft.gamepedia.com/6/67/Cobblestone.png?version=8bb693b335831156fe740007a654fb53" />';
	randomize();
}

function pickPaper() {
	User = 2;
	document.getElementById("Userc").innerHTML = '<img src="http://hydra-media.cursecdn.com/minecraft.gamepedia.com/b/b2/Paper.png?version=8530c42d16bad38050611a74ad34cabd" />';
	randomize();
}

function pickScissors() {
	User = 3;
	document.getElementById("Userc").innerHTML = '<img src="http://hydra-media.cursecdn.com/minecraft.gamepedia.com/d/d1/Shears.png?version=c2e4e810f9dadc8c49cdd979f854ff25" />';
	randomize();
}

function randomize() {
	randomizer = Math.random() * 3;
	randomizer = Math.ceil(randomizer);
	if (randomizer == 1)
		document.getElementById("Computer").innerHTML = '<img src="https://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg" />';
	else if (randomizer == 2)
		document.getElementById("Computer").innerHTML = '<img src="http://www.backgroundsy.com/file/large/crumpled-paper.jpg" />';
	else if (randomizer == 3)
		document.getElementById("Computer").innerHTML = '<img src="http://www.tlbox.com/wp-content/uploads/2013/08/Scotch-Precision-Scissor-8-Inches.jpg" />';
	else {document.getElementById("Computer").innerHTML = '<img src="http://www.blog.turmair.de/wp-content/uploads/2010/05/stop0x0000007f_kvm_windows_bsod.gif" />';
	}
	process();
}

function process() {
	if (User == randomizer)
		document.getElementById("results").style.backgroundImage = "url(http://blog.cdn.famigo.com/blog/wp-content/uploads/2013/08/LnhpJI5.gif)";
	else if (User == 1 && randomizer == 2){
		document.getElementById("results").style.backgroundImage = "url(http://rack.1.mshcdn.com/media/ZgkyMDEzLzA3LzE4L2EwL2NyeWluZ3dhdGVyLjQ2NzZiLmdpZgpwCXRodW1iCTEyMDB4OTYwMD4/9fead436/c15/crying-waterfalls.gif)";}
	else if (User == 1 && randomizer == 3){
		document.getElementById("results").style.backgroundImage = "url(http://files.gamebanana.com/img/ico/sprays/yourewinner.png)";}
	else if (User == 2 && randomizer == 1){
		document.getElementById("results").style.backgroundImage = "url(http://files.gamebanana.com/img/ico/sprays/yourewinner.png)";}
	else if (User == 2 && randomizer == 3){
		document.getElementById("results").style.backgroundImage = "url(http://rack.1.mshcdn.com/media/ZgkyMDEzLzA3LzE4L2EwL2NyeWluZ3dhdGVyLjQ2NzZiLmdpZgpwCXRodW1iCTEyMDB4OTYwMD4/9fead436/c15/crying-waterfalls.gif)";}
	else if (User == 3 && randomizer == 1){
		document.getElementById("results").style.backgroundImage = "url(http://rack.1.mshcdn.com/media/ZgkyMDEzLzA3LzE4L2EwL2NyeWluZ3dhdGVyLjQ2NzZiLmdpZgpwCXRodW1iCTEyMDB4OTYwMD4/9fead436/c15/crying-waterfalls.gif)";}
	else if (User == 3 && randomizer == 2){
		document.getElementById("results").style.backgroundImage = "url(http://files.gamebanana.com/img/ico/sprays/yourewinner.png)";}
	else {
		document.getElementById("results").innerHTML = "Error 420.";}
}