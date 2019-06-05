import { FETCH_TODOS, NEW_TODO } from "../actions/types";

export const fetchTodos = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      })
    );
};

export const newTodo = todoData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(todoData)
  })
    .then(res => res.json())
    .then(todo =>
      dispatch({
        type: NEW_TODO,
        payload: todo
      })
    );
};
