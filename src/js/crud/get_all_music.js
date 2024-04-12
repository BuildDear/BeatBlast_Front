

document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
});

function loadCategories() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/event-categories/', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                displayCategories(data);
            } catch(e) {
                console.error('Could not parse JSON!', e);
            }
        }
    };
    xhr.send();
}

function displayCategories(data) {
    var container = document.querySelector('.container__cards');
    container.innerHTML = ''; // Clear existing items
    data.forEach(function(item) {
        var cardItem = document.createElement('div');
        cardItem.className = 'container__cards__item';
        cardItem.innerHTML = `
            <h2 class="container__cards__item__title">${item.name}</h2>
            <p class="container__cards__item__caption">${item.description}</p>
            <span class="container__cards__item__buttons">
                <a class="container__cards__item__buttons__edit" data-id="${item.id}">
                    <img src="./src/image/edit-3-svgrepo-com.svg" alt="">
                    Edit
                </a>
                <a class="container__cards__item__buttons__delete" data-id="${item.id}">
                    <img src="./src/image/bin-svgrepo-com.svg" alt="">
                    Delete
                </a>
            </span>`;
        container.appendChild(cardItem);

        // Додавання обробника подій для кнопки "Delete"
        var deleteButton = cardItem.querySelector('.container__cards__item__buttons__delete');
        deleteButton.addEventListener('click', function() {
            deleteCategory(item.id);
        });
    });
}
