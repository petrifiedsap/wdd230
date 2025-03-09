
document.addEventListener('DOMContentLoaded', function() {
	// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
	const msToDays = 86400000;

	// declare const for display
	const firstLine = document.querySelector(".label_first");
	const secondLine = document.querySelector(".label_second");

	let lastVisit = JSON.parse(localStorage.getItem("lastTime")) || 0;
	localStorage.setItem("lastTime", JSON.stringify(Date.now()));
	
	if (lastVisit !== 0) {
		const today = Date.now();
		let timeLapse = (today - lastVisit) / msToDays; 
		if (timeLapse < 1) {
			firstLine.innerHTML = 'You have been here before!';
			secondLine.innerHTML = 'Back so soon! Awesome!';
		} else {
			firstLine.innerHTML = 'We missed you!'
			secondLine.innerHTML = 'You last visited ' + Math.trunc(timeLapse) + 'days ago.';
		}
	} else {
		firstLine.innerHTML = 'First time here?';
		secondLine.innerHTML = 'Welcome! Let us know if you have any questions.';

	}
});
