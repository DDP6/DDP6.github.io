
var form = document.forms.example;

form.addEventListener("submit",cakeDisplay,false);

function cakeDisplay(event) {

		event.preventDefault();

		var meal = {
			breakfast: form.pancake.value,
}

		var text = "<p>You said: " + meal.breakfast + ".</p>";

		document.getElementById("result").innerHTML = text;
}





var form = document.forms.example2;

form.addEventListener("submit",cakeDisplay2,false);

function cakeDisplay(event) {

		event.preventDefault();

		var meal = {
			breakfast: form.pancake.value,
}

		var text = "<p>You said: " + meal.breakfast + ".</p>";

		document.getElementById("result").innerHTML = text;
}
