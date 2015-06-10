var form = document.forms.cars;

form.addEventListener("submit",carsDisplay,false);


console.log('working');

function carsDisplay(event) {

	event.preventDefault();

	var brand = {
		words: form.emailform2.value,
		letters: form.emailform.value,
		

	}
	var text = "<p> You said: " + brand.words + brand.letters + ".</p>";

	console.log(text);

	document.getElementById("result").innerHTML = text;
}