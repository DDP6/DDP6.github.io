function playerNames(){
var playerNames = [];

var text = "";


for(i=0 ; i<4 ; i++){
	playerNames.push(prompt("Type one basketball player you know"));//asks for a basketball player 4 times. 
	text += "<li>" + playerNames[i] + "</li>" ;
	document.getElementById('playerNames').innerHTML = text;
	}

}



function teamNames(){
var teamNames = [];

var text2 = "";
var i = 0;
 while(i < 4){
	teamNames.push(prompt("Type one of your favorite sport teams."))//asks for a favorite sports team 4 times
	text2 += "<li>" + teamNames[i] + "</li>";
	document.getElementById('teamNames').innerHTML = text2;
	i++;
	}


}


function birthday(){
	var month = prompt("What number month is your birthday?");
	var day = prompt("What number day is your birthday?");
	var dayNum = parseInt(day);
	var monthNum = parseInt(month)-1;
	today=new Date()

	var birthday=new Date(today.getFullYear(), monthNum, dayNum) //Month is 0-11 in JavaScript
	if (today.getMonth()>=monthNum &&  today.getDate()>dayNum)  //if birthday has passed already
	birthday.setFullYear(birthday.getFullYear()+1) //calculate next year's birthday
	
//Set 1 day in milliseconds
	var one_day=1000*60*60*24;
	var endResult = Math.ceil((birthday.getTime()-today.getTime())/(one_day));
	console.log(endResult)

	if(endResult === 1){
		document.getElementById('days').innerHTML = endResult+//tests calculated days until birthday to see if it is one day or many days 
" day left until your birthday!";
	} else {
		document.getElementById('days').innerHTML = endResult+
" days left until your birthday!";
	}

//Calculate difference btw the two dates, and convert to days
//document.getElementById('days').innerHTML = Math.ceil((birthday.getTime()-today.getTime())/(one_day))+
//" days left until your birthday!";
document.getElementById('imgcake').style.visibility = "visible";
}