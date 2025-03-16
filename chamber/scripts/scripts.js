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

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const third = document.getElementById('thirdday');
const fourth = document.getElementById('fourthday');

const d = new Date();
const dayNumber = d.getDay();
let dd = (function() {
    if (dayNumber > 4) {
		return (dayNumber - 5)
	} else {
		return dayNumber;
	}
})();  

let day = days[dd];
third.textContent = `${day}'s Weather`;

let ddd = (function() {
    if (dayNumber > 4) {
		return (dayNumber - 4);
	} else {
		return dayNumber;
	}
})();  

let dayNext = days[ddd];
fourth.textContent = `${dayNext}'s Weather`;

const closeBanner = document.getElementById('closebanner');
const eventBanner = document.getElementById('eventbanner');
closeBanner.addEventListener('click', () => {
	eventBanner.classList.toggle('close');
 });

 window.addEventListener('load', bannerDisplay);

function bannerDisplay() {
 if (dayNumber == 0 || dayNumber > 3) {
	eventBanner.classList.toggle('close');
 }
}

