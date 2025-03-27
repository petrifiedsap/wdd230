// for hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const todayTemp = document.querySelector('#temp');
const humid = document.querySelector('#humidity');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';

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
    todayTemp.textContent = `${Math.round(data.main.temp)}°F`;
    humid.textContent = `${data.main.humidity}% Humidity`;

    data.weather.forEach(weather => { 
        const iconsrc = `https://openweathermap.org/img/w/${weather.icon}.png`;
        const title = document.createElement('p');
        const desc = document.createElement('p');
        const icon = document.createElement('img');

        title.textContent = weather.main;
        desc.textContent = weather.description;
        icon.setAttribute('src', iconsrc);

        humid.appendChild(title);
        humid.appendChild(desc);
        humid.appendChild(icon);
  
    });
}

const tomTemp = document.querySelector('#tomorrow-temp');
const urlDos = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';

async function apiFetchDos() {
    try {
        const response = await fetch(urlDos);
        if (response.ok) {
            const dataDos = await response.json();
            console.log(dataDos);
            tomorrow(dataDos);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchDos();

function tomorrow(data) {
    tomTemp.textContent = ` ${Math.round(data.list[5].main.temp)}°F`;
}