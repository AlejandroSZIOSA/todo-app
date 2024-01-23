import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

let nextIndex = 0;
var title;

function App() {
  /* const [titleInput, setTextInput] = useState(""); */

  const [todoList, setTodoList] = useState([]);

  function handlerTextInput(event) {
    /* setTextInput(event.target.value); */
    title = event.target.value;
  }

  function addTodoItem() {
    setTodoList([...todoList, { id: nextIndex++, title: title, done: true }]);
  }

  function showList() {
    console.log(todoList);
  }

  /* const list = todoList.map((id) => {
    console.log(id);
  });
 */
  return (
    <>
      <div>
        <h1> TODO-APP</h1>
        <div>
          <h2>Title:</h2>
          <input type="text" onChange={handlerTextInput}></input>
        </div>
        <button onClick={addTodoItem}> ADD</button>

        {/* <div>
          <button onClick={showList}> Show </button>
        </div> */}

        <div>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <TodoItem title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
