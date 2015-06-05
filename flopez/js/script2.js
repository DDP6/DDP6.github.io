///// Interactions.html below /////
function courseFunction () {
	
	var text = "";

	var course_array = [];

	for (i = 0; i < 3; i++) {
		course_array.push(prompt("what course do you want to take?"));
		text += "<li>" + course_array[i] + "</li>"; 
		document.getElementById('courses').innerHTML = text;
	}

}


function careerFunction () {
	var writing = "";

	var class_array = [];
	var i = 0;

	while (i < 3 ) {
		class_array.push(prompt("what career do you think you'd like"));
		writing += "<li>" + class_array[i] + "</li>"
		document.getElementById('classes').innerHTML = writing;
		console.log(i);
		i++;

	}
}

/// Navigation bar code below /////

$(document).ready(function(){
  $('nav li').click(function(){
    $('nav li.active').removeClass('active');
    $(this).addClass('active');
  });
});