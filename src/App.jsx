import { useState } from "react";
import "./App.css";

let nextIndex = 0;

function App() {
  const [titleInput, setTextInput] = useState("");

  const [todoList, setTodoList] = useState([]);

  function handlerTextInput(event) {
    setTextInput(event.target.value);
  }

  function addTodoItem() {
    setTodoList([
      ...todoList,
      { id: nextIndex++, title: titleInput, done: true },
    ]);
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
          <input
            type="text"
            value={titleInput}
            onChange={handlerTextInput}
          ></input>
        </div>
        <button onClick={addTodoItem}> ADD</button>

        <div>
          <button onClick={showList}> Show </button>
        </div>
      </div>
    </>
  );
}

export default App;
