
const temp = document.querySelector('#temp');
const tempValue = parseFloat(temp.innerHTML);
const wind = document.querySelector('#wind');
const windValue = parseFloat(wind.innerHTML);
const chill = document.querySelector('#windchill');

function windChill(){
if (tempValue <= 50 && windValue > 3.0) {
    let windchill;
    windchill = 35.74 + 0.6215 * tempValue - 35.75 * Math.pow(windValue, 0.16) + 0.4275 * tempValue * Math.pow(windValue, 0.16);

    chill.innerHTML = `${windchill.toFixed(0)}&deg;F`;
}
else {
    chill.innerHTML = `Not cold enough to worry about!`;
}
}
window.addEventListener('load', windChill);


//const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-type');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.68&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';

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
    temp.innerHTML = `It is ${Math.round(data.main.temp)}&deg;F with`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description; 
    const capsDesc = desc.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "icon of weather");
    captionDesc.textContent = `${capsDesc}`;
    wind.innerHTML = `${Math.round(data.wind.speed)} mph`;
}

//const urlDos = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=32.66&lon=-95.49&cnt=3&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';
    const urlDos = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.66&lon=-95.49&appid=9a3623d99a7e974b0da966d7fba6576e&units=imperial';

async function apiFetchDos() {
    try {
        const response = await fetch(urlDos);
        if (response.ok) {
            const dataDos = await response.json();
            console.log(dataDos);
            findMax(dataDos);
            findLow(dataDos);
            //displayResults(dataDos);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchDos();

// 0-7 for tomorrow, 8-15 for next, 16-23 for nextnext

function findMax(dataDos) {
    const tomHi = document.getElementById('tomorrowhi');
    const thirdHi = document.getElementById('nexthi');
    const fourthHi = document.getElementById('nextnexthi');

    let max = dataDos.list[0].main.temp;
    for (let i = 1; i <= 7; i++) {
        if (dataDos.list[i].main.temp > max) {
            max = dataDos.list[i].main.temp;
        }
    }
    tomHi.innerText = `Hi ${max.toFixed(0)}°F`;

    let maxThird = dataDos.list[8].main.temp;
    for (let i = 9; i <= 15; i++) {
        if (dataDos.list[i].main.temp > maxThird) {
            maxThird = dataDos.list[i].main.temp;
        }
    }
    thirdHi.innerText = `Hi ${maxThird.toFixed(0)}°F`;

    let maxFourth = dataDos.list[16].main.temp;
    for (let i = 17; i <= 23; i++) {
        if (dataDos.list[i].main.temp > maxFourth) {
            maxFourth = dataDos.list[i].main.temp;
        }
    }
    fourthHi.innerText = `Hi ${maxFourth.toFixed(0)}°F`;
}

// 0-7 for tomorrow, 8-15 for next, 16-23 for nextnext
function findLow(dataDos) {
    const tomLow = document.getElementById('tomorrowlow');
    const thirdLow = document.getElementById('nextlow');
    const fourthLow = document.getElementById('nextnextlow');

    let low = dataDos.list[0].main.temp_min;
    for (let i = 1; i <= 7; i++) {
        if (dataDos.list[i].main.temp_min < low) {
            low = dataDos.list[i].main.temp_min;
        }
    }
    tomLow.innerText = `Low ${low.toFixed(0)}°F`;

    let lowThird = dataDos.list[8].main.temp_min;
    for (let i = 9; i <= 15; i++) {
        if (dataDos.list[i].main.temp_min < lowThird) {
            lowThird = dataDos.list[i].main.temp_min;
        }
    }
    thirdLow.innerText = `Low ${lowThird.toFixed(0)}°F`;

    let lowFourth = dataDos.list[16].main.temp_min;
    for (let i = 17; i <= 23; i++) {
        if (dataDos.list[i].main.temp_min < lowFourth) {
            lowFourth = dataDos.list[i].main.temp_min;
        }
    }
    fourthLow.innerText = `Low ${lowFourth.toFixed(0)}°F`;

}

