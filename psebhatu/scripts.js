
var form = document.forms.form;
form.addEventListener("submit", displayAnswers, false);
function displayAnswers(event) {
	event.preventDefault();
	var name = {
		name: form.username.value
	};
	var school = {
		name: form.school.value
	};
	var artist = {
		name: form.artist.value
	};
	var brand = {
		name: form.radio1.value
	};
	var shoe = {
		name: form.radio2.value
	};
	var name2 = "<p> Your name is " + name.name + ".</p>";
	var schoolname = "<p>Your school is " + school.name + ".</p>";
	var artistname = "<p>Your favorite artist is " + artist.name + ".</p>";
	var brandname = "<p>You like " + brand.name + ".</p>";
	var shoename = "<p> You like " + shoe.name + ".</p>";
	document.getElementById("displaytext").innerHTML = name2;
	document.getElementById("displaytext2").innerHTML = schoolname;
	document.getElementById("displaytext3").innerHTML = artistname;
	document.getElementById("displaytext4").innerHTML = brandname;
	document.getElementById("displaytext5").innerHTML = shoename;

}