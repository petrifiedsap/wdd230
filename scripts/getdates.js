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
const message = document.querySelector("#form-message");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pw1.value !== pw2.value) {
		message.textContent = "❌ Passwords do not match!";
		message.style.visibility = "show";
		//put other styles here
		pw1.value = "";
		pw2.value = "";
		pw1.focus(); 
	} else {
		message.style.display = "none";
	}
}
}

//for email check on forms page
{
const email = document.querySelector("#email");
const emailPattern = /[@]byui\.edu/;
const message = document.querySelector("#form-message");

email.addEventListener("focusout", checkMail);

function checkMail() {
	if (emailPattern.test(email.value) = '') {
		message.textContent = "❌ Please enter a valid byui.edu email address";
		message.style.visibility = "show";
		email.value = "";
		email.focus();
	} else {
		message.style.display = "none";
	}
}
}