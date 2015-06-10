
var form = document.forms.formOne;

form.addEventListener("submit",info,false);
function info(event) {
		event.preventDefault();
		var kittenInfo = {
			likeKitten: form.likeKittens.value,
			kittenDonate: form.donateAmount.value,
	};
	var text = "<p>You said " + kittenInfo.likeKitten + " and that you will donate " + kittenInfo.kittenDonate + "$" + "</p>";
	document.getElementById("result").innerHTML = text;

};