function addTodoItem(event) {
    if (event.key === 'Enter') {
        newTodoItem = $('#new-todo-item').val()
        $('#new-todo-item').val('')
        newTodoEle = document.createElement('li')
        newTodoEle.className = ('tabs-title')
        newTodoEle.innerHTML = '<a>' + newTodoItem + '</a>'
        newTodoEle.addEventListener('click', clickItem)
        $('#todo-list').append(newTodoEle)
        nItems++
        nTodoItems++
        refreshItemCounts()
    }
}

function clickItem(event) {
    classList = event.target.parentNode.classList
    if (classList.contains('complete-item')) {
        classList.remove('complete-item')
        nTodoItems++
    }
    else {
        classList.add('complete-item')
        nTodoItems--
    }
    refreshItemCounts()
}

function refreshItemCounts() {
    $('#n-items').text(nItems)
    $('#n-todo-items').text(nTodoItems)
}

function clearCompletedItems() {
    $('#todo-list li').each(function(index) {
        if ($(this).classList().contains('complete-item')) {
            $(this).remove()
            nItems--
        }
    })
    refreshItemCounts()
}

$.fn.classList = function() {
    return this[0].classList;
};

var nItems = 0
var nTodoItems = 0