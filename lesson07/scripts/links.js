const baseURL = "https://petrifiedsap.github.io/wdd230/";
const linksURL = "https://petrifiedsap.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = wait response.json();
    console.log(data);
}

getLinks();