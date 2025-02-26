{
const temp = document.querySelector('#temp');
const tempValue = temp.innerHTML;
const wind = document.querySelector('#wind');
const windValue = wind.innerHTML;
const chill = document.querySelector('#windchill');

function windChill(){
if (tempValue <= 50 && windValue > 3.0) {
    let windchill;
    windchill = 35.74 + 0.6215 * tempValue - 35.75 * Math.pow(windValue, 0.16) + 0.4275 * tempValue * Math.pow(windValue, 0.16);

    chill.innerHTML = windchill.toFixed(0);
}
else {
    chill.innerHTML = 'N/A';
}
}
window.addEventListener('load', windChill);
}