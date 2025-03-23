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
console.log(dayNumber);
let dd = (function() {
    if (dayNumber > 4) {
		return (dayNumber - 5)
	} else {
		return dayNumber + 2;
	}
})();  
console.log(dd);
let day = days[dd];
third.textContent = `${day}'s Weather`;

let ddd = (function() {
    if (dayNumber > 4) {
		return (dayNumber - 4);
	} else {
		return dayNumber + 3;
	}
})();  
console.log(ddd);
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

const url = 'data/members.json';
const logoOne = document.querySelector('#logo1');
const logoTwo = document.querySelector('#logo2');
const logoThree = document.querySelector('#logo3');
const logoFour = document.querySelector('#logo4');
const logoFive = document.querySelector('#logo5');
const logoSix = document.querySelector('#logo6');
const logoSeven = document.querySelector('#logo7');
const logoEight = document.querySelector('#logo8');
const logoNine = document.querySelector('#logo9');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    showMembers(data.members); 
	spotlightMember(data.members);
}

getMemberData();

function showMembers(members) {
	logoOne.setAttribute('src', members[0].logoFile);
	logoOne.setAttribute('alt', members[0].name);

	logoTwo.setAttribute('src', members[1].logoFile);
	logoTwo.setAttribute('alt', members[1].name);

	logoThree.setAttribute('src', members[2].logoFile);
	logoThree.setAttribute('alt', members[2].name);

	logoFour.setAttribute('src', members[3].logoFile);
	logoFour.setAttribute('alt', members[3].name);

	logoFive.setAttribute('src', members[4].logoFile);
	logoFive.setAttribute('alt', members[4].name);

	logoSix.setAttribute('src', members[5].logoFile);
	logoSix.setAttribute('alt', members[5].name);

	logoSeven.setAttribute('src', members[6].logoFile);
	logoSeven.setAttribute('alt', members[6].name);

	logoEight.setAttribute('src', members[7].logoFile);
	logoEight.setAttribute('alt', members[7].name);

	logoNine.setAttribute('src', members[8].logoFile);
	logoNine.setAttribute('alt', members[8].name);
}

const pic = document.getElementById('spotlight-image');
const bus = document.getElementById('spotlight-name');
const info = document.getElementById('spotlight-info');

function spotlightMember(members) {
	let num = Math.random();
	if (num > .7) {
		pic.setAttribute('src', members[7].logoFile);
		bus.textContent = `Meet ${members[7].name}!`;
		info.textContent = `${members[7].otherInfo}`;
	} else if (num > .35) {
			pic.setAttribute('src', members[1].logoFile);
			bus.textContent = `Meet ${members[1].name}!`;
			info.textContent = `${members[1].otherInfo}`;
	} else {

		pic.setAttribute('src', members[0].logoFile);
		bus.textContent = `Meet ${members[0].name}!`;
		info.textContent = `${members[0].otherInfo}`;
	}
}

