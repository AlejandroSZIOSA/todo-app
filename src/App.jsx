import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

let nextIndex = 0;
var title;

function App() {
  /* const [titleInput, setTextInput] = useState(""); */

  const [todoList, setTodoList] = useState([]);

  const [isDoneBtn, setIsDoneBtn] = useState(false);

  function handlerTextInput(event) {
    /* setTextInput(event.target.value); */
    title = event.target.value;
  }

  function addTodoItem() {
    setTodoList([...todoList, { id: nextIndex++, title: title, done: false }]);
  }

  function handleDoneUndoneData(id, done) {
    /*   const value = event.target.value; */
    console.log(id, done);
    const toDoItems = [...todoList];
    const modifyItem = toDoItems.find((i) => i.id === id);
    modifyItem.done = true;
    setTodoList(toDoItems);
  }

  function toggleDoneUndoneBtn(done) {}

  function removeTodoItem() {
    console.log("hola");
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
        <h2> TODO-APP</h2>
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
                <TodoItem
                  itemObj={item}
                  onClickSwitchFn={handleDoneUndoneData}
                  /* onClickFn={removeTodoItem} */
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
