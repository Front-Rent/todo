import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText, clearText } from "./store/slices/textSlice";
import { addTodo, deleteTodo } from "./store/slices/todoSlice";

const App = () => {
  const text = useSelector((state) => state.text.text);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handelChnageInput = (e) => {
    dispatch(changeText(e.target.value));
  };
  
  const handelDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (text.trim() !== "") {
      let newTodo = { id: Date.now(), text };
      dispatch(addTodo(newTodo));
      dispatch(clearText());
    }
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handelChnageInput} value={text} />
        <button>add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handelDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
