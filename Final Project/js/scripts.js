// Determines variable form.
var form = document.forms.formInput;
// Detects submitted forms and runs the displayContent function.
form.addEventListener("submit",displayContent,false);
// determines function displayContent.
function displayContent(event) {
		// Cancels default action of submit.
		event.preventDefault();
		// Determines variables name, console and limbs.
		var name = {typeName: form.names.value};

		var console = {typeConsole: form.console.value};

		var limbs = "";
		
		// Changes the variables to match user input.
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
		// Combines all the variables into one HTML compatible variable.
		var text = "<p>Your name is " + name.typeName + ", and your favorite gaming device is " + console.typeConsole 
		+ ". You have " + limbs + ". Your deepest darkest secret is " + secret.typePassword + ".</p>";
		// Prints the variable test into the paragraph.
		document.getElementById("result").innerHTML = text;
};





