let todoList = [];

function Submit() {
  let inputValue = document.querySelector('.todo-name');
  let dateValue = document.querySelector('.todo-date');

  let todoName = inputValue.value;
  let todoDate = dateValue.value;

  //console.log(todoName);
  //console.log(todoDate);

  // todoList.name = todoName;
  // todoList.date = todoDate;

  // console.log(todoList);
  todoList.push({name:todoName,date:todoDate});

  // console.log(todoList);

  inputValue.value = '';
  dateValue.value = '';
  renderTodoList();
}

function renderTodoList () {

  let todoListInnerHTML = '';

  for (let i=0; i<todoList.length; i++) {
    const todo = todoList[i];
    const name = todo.name;
    const date = todo.date;
    const html = `<div class="todo-name">${name}</div> <div class="todo-date">${date}</div> <button class="delete-btn" onclick="todoList.splice(${i},1); renderTodoList();">Delete</button>`;
    todoListInnerHTML = todoListInnerHTML + html;
  }
  
  //console.log(todoListInnerHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListInnerHTML;
}

