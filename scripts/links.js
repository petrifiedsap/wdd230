const baseURL = "https://petrifiedsap.github.io/wdd230/";
const linksURL = "https://petrifiedsap.github.io/wdd230/data/links.json";
const lessonList = document.querySelector('#datadisplay');


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data);
    displayLinks(data.lessons);
}

getLinks();


function displayLinks(lessons){
    lessons.forEach(lesson => {
        const lessonItem = document.createElement('li');
        lessonItem.textContent = `${lesson.lesson}:  `;

        lesson.links.forEach(link => {
            const linkItem = document.createElement('a');
            linkItem.href = link.url;
            linkItem.textContent = `${link.title} `;
            lessonItem.appendChild(linkItem);
        });

        lessonList.appendChild(lessonItem);
    });
}