const urlV = 'data/vehicles.json';
const table = document.querySelector('#tablebody');

async function getVehicles() {
    try {
        const response = await fetch(urlV);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayVehicles(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getVehicles();

function displayVehicles(data){
    data.rentals.forEach(vehicle => {
        const row = document.createElement('tr');

        const pic = document.createElement('td');
        const image = document.createElement('img');
        const name = document.createElement('td');
        const max = document.createElement('td');
        const halfR = document.createElement('td');
        const fullR = document.createElement('td');
        const halfW = document.createElement('td');
        const fullW = document.createElement('td');

        image.setAttribute('src', vehicle.Image);
        name.textContent = vehicle.vehicle;
        max.textContent = vehicle.MaxPersons;
        halfR.textContent = vehicle.HalfDayRes;
        fullR.textContent = vehicle.FullDayRes;
        halfW.textContent = vehicle.HalfDayWalkIn;
        fullW.textContent = vehicle.FullDayWalkIn;
        
        pic.appendChild(image);

        row.appendChild(pic);
        row.appendChild(name);
        row.appendChild(max);
        row.appendChild(halfR);
        row.appendChild(fullR);
        row.appendChild(halfW);
        row.appendChild(fullW);

        table.appendChild(row);

    });
}

