var form = document.forms.formInput;

form.addEventListener("submit",displayContent,false);

function displayContent(event) {

		event.preventDefault();

		var name = {typeName: form.names.value};

		var console = {typeConsole: form.console.value};

		var limbs = "";
		

		if(document.getElementById("1").checked) {
			limbs += "a head";
		}
		if(document.getElementById("2").checked) {
			limbs += ", arms";
		}

		if(document.getElementById("3").checked) {
			limbs += ", legs";
		}

		if(document.getElementById("4").checked) {
			limbs += ", hands";
		}

		if(document.getElementById("5").checked) {
			limbs += "and feet";
		}


		var secret = {typePassword: form.secret.value};

		var text = "<p>Your name is " + name.typeName + ", and your favorite gaming device is " + console.typeConsole 
		+ ". You have " + limbs + ". Your deepest darkest secret is " + secret.typePassword + ".</p>";

		document.getElementById("result").innerHTML = text;
};





