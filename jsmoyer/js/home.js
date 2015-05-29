


//var form = document.forms.practiceForm;



//form.addEventListener("submit", displayPerson, false);


//function displayPerson(event) {
//	console.log("test");
	//event.preventDefault();
//	
	//var Person = {
//		name: form.username.value,
	//};
	
	
//	var html = "<p>Your favorite team is the " + Person.name + ".</p>";
	
//	document.getElementById("displayText").innerHTML = html;
//}//
///////////////////////////////////////////////////////
var form2 = document.forms.practiceForm;

form2.addEventListener("submit", displayAnswers, false);

function displayAnswers(event) {
	event.preventDefault();
	
	var Person = {
		name: form2.username.value,
	};
	
	var Name = {
	name: form2.name.value,
	
	};
	var Food = {
	name: form2.food.value,
	};
	var fruit = {
	name: form2.mySelect.value,
	};
	var education = {
	name: form2.education.value,
	};
	var html = "<p>Your name is " + Name.name + ".</p>";
	var teamName = "<p>Your Favorite Team is the " + Person.name + ".</p>";
	var foodName = "<p>Your Favorite Food is " + Food.name + ".</p>";
	var fruitName = "<p>Your Favorite Fruit is " + fruit.name + ".</p>";
	var educationName = "<p>You've been in " + education.name + ".<p>";
	document.getElementById("displayText").innerHTML = html;
	document.getElementById("display2").innerHTML = teamName;
	document.getElementById("display3").innerHTML = foodName;
	document.getElementById("display4").innerHTML = fruitName;
	document.getElementById("display5").innerHTML = educationName;
	
	
}