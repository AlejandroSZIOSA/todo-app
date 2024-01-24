import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

var nextIndex = 0;
var title;

function App() {
  const [todoList, setTodoList] = useState([]);

  const [btnDoneColor, setBtnDoneColor] = useState("red");

  function handlerTextInput(event) {
    title = event.target.value;
  }

  function addTodoItem() {
    setTodoList([...todoList, { id: nextIndex++, title: title, done: false }]);
  }

  function handleDoneUndoneData(id, done) {
    console.log(id, done);
    const toDoItems = [...todoList];
    const modifyItem = toDoItems.find((i) => i.id === id);
    if (done) {
      modifyItem.done = false;
      setBtnDoneColor("orange");
    } else {
      modifyItem.done = true;
      setBtnDoneColor("green");
    }
    setTodoList(toDoItems);
  }

  function handleRemoveTodoItem(id) {
    /* This modify the actual todo list by excluding the given 
    "id", then set the new "array object" state */
    setTodoList(todoList.filter((a) => a.id !== id));
  }

  return (
    <>
      <div>
        <h2> TODO-APP</h2>
        <div>
          <h2>Title:</h2>
          <input type="text" onChange={handlerTextInput}></input>
        </div>
        <button onClick={addTodoItem}>ADD</button>
        <div>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <TodoItem
                  bgColor={btnDoneColor}
                  itemObj={item} /* Passing object as prop :)*/
                  onClickDoneUndoneFn={
                    handleDoneUndoneData
                  } /* Callback event Functions with params */
                  onClickRemoveItemFn={handleRemoveTodoItem}
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
