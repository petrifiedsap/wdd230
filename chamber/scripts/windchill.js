{
const temp = document.querySelector('#temp').innerHTML;
console.log(temp);
const wind = document.querySelector('#wind').innerHTML;
console.log(wind);
const chill = document.querySelector('#windchill');
console.log(chill);

function windChill(){
if (temp <= 50 && wind > 3.0) {
    let windchill;
    windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
    console.log(windchill);

    chill.innerHTML = windchill.toFixed(0);
}
else {
    chill.innerHTML = 'N/A';
}
}
window.addEventListener('load', windChill);
}