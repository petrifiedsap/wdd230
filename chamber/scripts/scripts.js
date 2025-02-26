// for hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.getElementById('lastmodified').innerHTML = document.lastModified;

//for dark mode toggle
function darkMode() {

	const checkBox = document.querySelector("#myCheck");
	const main = document.querySelector("main");
	const logoArea = document.querySelector("#logos");
	const eventCard = document.querySelector(".event-card");
	const weatherText = document.querySelector("#weather");

	const darkest = window.getComputedStyle(document.body).getPropertyValue('--darkest');
	const accent = window.getComputedStyle(document.body).getPropertyValue('--accent-color');

	if (checkBox.checked == true) {
		main.style.background = darkest;
		main.style.color = "#fff";
		logoArea.style.background = darkest;
		eventCard.style.color = darkest;
		weatherText.style.color = darkest;
	} else {
		main.style.background = "#ffffff";
		main.style.color = "#000";
		logoArea.style.background = accent;
	}
};

// math to find difference in dates
document.addEventListener('DOMContentLoaded', function() {
	// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
	const msToDays = 86400000;

	// declare const for display
	const firstLine = document.querySelector(".label_first");
	const secondLine = document.querySelector(".label_second");

	let lastVisit = JSON.parse(localStorage.getItem("lastTime")) || 0;
	localStorage.setItem("lastTime", JSON.stringify(Date.now()));
	
	if (lastVisit != '') {
		const today = Date.now();
		let timeLapse = (Date.now() - lastVisit) / msToDays; 
		if (timeLapse < 1) {
			firstLine.innerHTML = 'You have been here before!';
			secondLine.innerHTML = 'Back so soon! Awesome!';
		} else {
			firstLine.innerHTML = 'We missed you!'
			secondLine.innerHTML = 'You last visited' + Math.trunc(timeLapse) + 'days ago.';
		}
	} else {
		firstLine.innerHTML = 'First time here?';
		secondLine.innerHTML = 'Welcome! Let us know if you have any questions.';

	}
});

