import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

var nextIndex = 0;
var title;

function App() {
  /* const [titleInput, setTextInput] = useState(""); */

  const [todoList, setTodoList] = useState([]);

  /* const [isDoneBtn, setIsDoneBtn] = useState(false); */

  function handlerTextInput(event) {
    /* setTextInput(event.target.value); */
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
    } else {
      modifyItem.done = true;
    }
    setTodoList(toDoItems);
  }

  function handleRemoveTodoItem(id) {
    //This modify the actual todo list by excluding the given "id" then set the new "array object"
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
        <button onClick={addTodoItem}> ADD</button>

        {/* <div>
          <button onClick={showList}> Show </button>
        </div> */}

        <div>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <TodoItem
                  itemObj={item} /* Passing object as prop :)*/
                  onClickDoneUndoneFn={
                    handleDoneUndoneData
                  } /* Callback Functions with params */
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
