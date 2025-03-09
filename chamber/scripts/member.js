const url = 'data/members.json';
const cards = document.querySelector('#member-cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data.members); 
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        logo.setAttribute('src', member.logoFile);
        logo.setAttribute('alt', `logo for ${member.name}`);
        logo.setAttribute('loading', "lazy");
        logo.setAttribute('width', "150");
        logo.setAttribute('height', "auto");
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = 'member.phoneNumber';
        website.setAttribute('href', member.websiteURL);
             
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });


}