const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.68&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description; 
    const capsDesc = desc.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "icon of weather");
    captionDesc.textContent = `${capsDesc}`;
}

