console.log("Script Loaded");

var form = document.forms.form1; 


function EvalInput(){
	event.preventDefault();
	var Person = {
		name: form.fname.value,
		sex: form.sex.value,
	};

	if(Person.name == ""){
		Error();
		return;
	}
	if(Person.sex == ""){
		Error();
		return;
	}

	var html = "<p>"+Person.name+" is a good name for a "+Person.sex+".</p>";
	document.getElementById("displayText").innerHTML = html;

	console.log("Submitted");
}

function Error(){
	document.getElementById("displayText").innerHTML = "Fill out the entire fourm before submitting.";
}