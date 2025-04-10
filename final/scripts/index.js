// buttton for temp banner
const tempButton = document.querySelector('#hibanner');
const tempBanner = document.querySelector('.tempbanner');

tempButton.addEventListener('click', () => {
	tempBanner.classList.toggle('closed');
});

const hi = document.querySelector('#today-hi')

const urlHi = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(urlHi);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayHi(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayHi(data) {
    //console.log(data.main.temp_max)
    hi.textContent = `Today's hi will be ${Math.round(data.main.temp_max)}°F`;
    }


