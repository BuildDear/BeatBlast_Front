
function deleteCategory(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://127.0.0.1:8000/event-categories/' + id, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Видалення елемента з DOM
            var elementToDelete = document.querySelector('[data-id="' + id + '"]').parentNode.parentNode;
            elementToDelete.parentNode.removeChild(elementToDelete);
        }
    };
    xhr.send();
}
