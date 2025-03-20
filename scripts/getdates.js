// current year
const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.getElementById('current-year').innerHTML = ('&copy') + year;


// last modified date
   document.getElementById('lastmodified').innerHTML = document.lastModified;

// for hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// counter to show number of visits
document.addEventListener('DOMContentLoaded', function() {
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = 'Welcome';
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

});


// for password check on forms page
{
const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");

if (pw2 !== null) {	
	const message = document.querySelector("#formmessage");
// add function to check if pw2 exists, if null return
pw2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pw1.value !== pw2.value) {
	
		message.textContent = "❌ Passwords do not match!";
		message.style.visibility = "visible";
		//put other styles here
		pw1.value = "";
		pw2.value = "";
		pw1.focus(); 
	} else {
		message.style.visibility = "hidden";
	}
}
}
}
//for email check on forms page
{
const email = document.querySelector("#email");
const emailPattern = /[@]byui\.edu/;
const message = document.querySelector("#formmessage");

if (email !== null) { 
email.addEventListener("focusout", checkMail);

function checkMail() {
	if (!emailPattern.test(email.value)) {
		message.textContent = "❌ Please enter a valid byui.edu email address";
		message.style.visibility = "visible";
		email.value = "";
		email.focus();
	} else {
		message.style.visibility = "hidden";
	}
}
}
}

{
	const rtng = document.getElementById("ratingvalue");
	const range = document.getElementById("rating");
	if (range != null) {
	range.addEventListener('change', displayRatingValue);
	range.addEventListener('input', displayRatingValue);

	function displayRatingValue() {
		rtng.innerHTML = range.value; 
	}
}
}

