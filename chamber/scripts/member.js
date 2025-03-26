const url = 'data/members.json';
const cards = document.querySelector('#member-cards');
const list = document.querySelector('#member-list');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayMembers(data.members);
    displayMembersList(data.members); 
  }

getMemberData();

const displayMembers = (members) => {
  members.forEach((member) => {
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h3');
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
      phone.setAttribute("class", "phone");
      phone.textContent = `${member.phoneNumber}`;
      website.setAttribute('href', member.websiteURL);
      website.textContent = `Website`;
     

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

      cards.appendChild(card);
  });
}

const displayMembersList = (members) => {
  members.forEach((member) => {
      let listing = document.createElement('section');
      let name = document.createElement('h3');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a');

      listing.setAttribute("class", "listing");
      name.textContent = `${member.name}`;
      address.textContent = `${member.address}`;
      phone.setAttribute("class", "phone");
      phone.textContent = `${member.phoneNumber}`;
      website.setAttribute('href', member.websiteURL);
      website.textContent = `Website`;
           
      listing.appendChild(name);
      listing.appendChild(address);
      listing.appendChild(phone);
      listing.appendChild(website);

      list.appendChild(listing);
  });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
//already have #member-cards, it's called cards, can't make it display
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

function showGrid() {
  list.style.display = 'none';
  cards.style.display = 'grid';
  gridbutton.style.display = 'none';
  listbutton.style.display = 'block';
}

function showList() {
  list.style.display = 'flex';
  cards.style.display = 'none';
  gridbutton.style.display = 'block';
  listbutton.style.display = 'none';
}

