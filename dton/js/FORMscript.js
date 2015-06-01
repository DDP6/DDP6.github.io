function formvalidation()
{ 

var uname = document.registration.username;  
var lname = document.registration.lastname;
var uemail = document.registration.email;
var ucountry = document.registration.country;
{

if(allLetter)(uname))
{
if(allAlphabet)(lname))
{
if(ValidateEmail)(uemail))
{
if()(countryselect))
{
}
}
}
}
}
}
return false;





 function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
document.getElementById("result").innerHTML = text;
}
}

function allAlphabet(lname)
{
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('Lastname must have alphabet characters only');
lname.focus();
return false;
document.getElementById("result2").innerHTML = text;
}
}

function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
document.getElementById("result3").innerHTML = text;
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}


else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;
}



















