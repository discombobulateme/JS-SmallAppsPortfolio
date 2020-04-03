var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//or || is needed when localStorage is clean and needs an empty array
var todos = JSON.parse(localStorage.getItem('toDoList')) || [];

function renderTodos() {
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode(' Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  //cleans previous HTML list to update it
  listElement.innerHTML = '';

  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  listElement.innerHTML = '';
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('toDoList', JSON.stringify(todos));
}
