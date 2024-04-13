
const modal = document.getElementById('modal');
const btn = document.querySelector('.btn-add__card');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Обробник подій для форми
document.getElementById('categoryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    fetch('http://127.0.0.1:8000/event-categories/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, description: description }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        modal.style.display = 'none';
        // Тут можна додати код для оновлення UI, наприклад, додавання нової категорії до списку
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


