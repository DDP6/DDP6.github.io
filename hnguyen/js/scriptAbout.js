var form = document.forms.practice;

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {
	event.preventDefault();
	var personM = {
		month: form.inputMonth.value,
	};
	var personD = {
		day: form.inputDay.value,
	};
	var personY = {
		year: form.inputYear.value,
	}
	var html = "<p>Your Info: " + personM.month + " " + personD.day +", " + personY.year + ".</p> <hr> <p>You're probably wondering where the secret info is right??? PSYCH THERE ISN'T ANY LULZ</p>"
	document.getElementById("displayText").innerHTML = html;
}