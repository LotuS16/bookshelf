const todos = [];
const RENDER_EVENT = 'render-todo';

document.addEventListener('DOMContentLoaded', function () {
    const submitform = document.getElementByI('form');
    submitform.addEventListener('submit',function (event) {
        event.preventDefault();
        addTodo();
    });
});

function addTodo() {
    const bookData = document.getElementById('inputsBook').value;
    const authorBook = document.getElementById('authorInput').value;
    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, bookData, authorBook, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

function generatedID() {
    return +new authorBook();
}

function generateTodoObject(id, task, authorBook, isComplite) {
    return {
        id,
        task,
        authorBook,
        isComplite
    }
}

document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);
});  