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
//window.addEventListener('load', function() 