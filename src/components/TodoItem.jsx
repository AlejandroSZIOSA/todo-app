import React from "react";
export default function TodoItem(props) {
  //Destructuring object
  const title = props.itemObj.title;
  const id = props.itemObj.id;
  const done = props.itemObj.done;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>
        {title} {"/ ID= "}
        {id}
      </h3>
      <button onClick={() => props.onClickDoneUndoneFn(id, done)}>
        {done ? "Done" : "unDone"}
      </button>

      <button onClick={() => props.onClickRemoveItemFn(id)}> Remove</button>
    </div>
  );
}
