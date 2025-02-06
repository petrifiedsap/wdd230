const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function faveScripture() {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = '';
    } else {
        input.focus();
    }
};


button.addEventListener('click', faveScripture);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        faveScripture();
    }
});
