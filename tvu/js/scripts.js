var form = document.forms.example;


form.addEventListener("submit",answerDisplay,false);

function answerDisplay(event){

	event.preventDefault();

	var Person = {
		name: form.username.value,
		secretData: form.password.value,
		bio: form.bio.value,
		gender: form.gender.value,
		sport: form.sport.value

	};

		
	var l = [];

	//Iterate through all the limbs

	for(i = 0; i < form.foods.length; i++) {

		//If it is checked, push the value into the array. Note my syntax.

		if(form.foods[i].checked) {
			l.push(form.foods[i].value);
		}

	}


	Person.foods = l;

	var text = 
		"<p>Your name is " + Person.name + ".</p>"+
		"<p>Your password is " + Person.secretData + ".</p>"+
		"<p>Your bio " + Person.bio + ".</p>"+
		"<p>Your gender " + Person.gender + ".</p>"+
		"<p>Your favorite food is " + Person.foods + ".</p>"+
		"<p>Your favorite sport is " + Person.sport + ".</p>";


		document.getElementById('result').innerHTML = text;


}

