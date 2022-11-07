const todosContainer = $(".todos-container");
const newTodoForm = $(".new-todo-form");
const newTodoInput = $(".new-todo");
const submitNewTodoInputBtn = $(".submit-new-todo-btn");
const newTodoBtn = $(".new-todo-btn");
const url = "https://63436bb43f83935a78536bd6.mockapi.io/todos";

const renderTodos = () => {
  todosContainer.empty();
  $.get(url, (todos) => {
    console.log(todos);
    todos.forEach((todo) => {
      todosContainer.prepend(`
        <div class='row mt-2 p-2 border justify-content-between' id=${todo.id}>
            <label class='col-3' for='todo-checkbox' >
                <input id='todo-checkbox' type="checkbox" />
                ${todo.todo}
            </label>
            <button 
                class='col-2 btn delete-todo-btn btn-outline-danger btn-sm' 
                onClick='deleteTodo(${todo.id})'
            >
                Delete
            </button>

        </div>`
      );
    });
  });
};

renderTodos();

newTodoBtn.on("click", () => {
  newTodoForm.toggleClass("invisible");
});

submitNewTodoInputBtn.on("click", () => {
  $.post(
    url,
    {
      id: 4,
      todo: newTodoInput.val(),
    },
    () => {
      renderTodos();
      newTodoInput.val("");
    }
  );
});

const getAllTodos = () => {
  return $.get(url);
};

const getTodo = (id) => {
  return $.get(url + `/${id}`);
};

const updateTodo = (todo) => {
  return $.ajax({
    url: url + `/${todo.id}`,
    dataType: "json",
    data: JSON.stringify(todo),
    contentType: "application/json",
    type: "PUT",
  });
};

const deleteTodo = (id) => {
  $.ajax({
    url: url + `/${id}`,
    type: "DELETE",
    success: () => {
      renderTodos();
    },
  });
};


