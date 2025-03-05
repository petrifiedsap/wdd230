const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// called when button pressed or enter key
function faveScripture() {
    //check if the input is empty, if not, then
    if (input.value != '') {
        //call displayList
        displayList(input.value);
        // push the new chapter into the array
        chaptersArray.push(input.value);
        //call setChapterList
        setChapterList();
        //reset input value and focus
        input.focus();
        input.value = '';
    } else {
        //if it is empty reset focus
        input.focus();
    }
}

function displayList(item) {
    //make new list element and button
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    // make the list element say the item
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    //add the button to the li and the li to the list
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList () {
    localStorage.setItem('chaptersBeLit', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chaptersBeLit'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}








button.addEventListener('click', faveScripture);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        faveScripture();
    }
});


