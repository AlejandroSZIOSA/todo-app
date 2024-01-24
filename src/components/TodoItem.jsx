import React from "react";
export default function TodoItem(props) {
  //Destructuring object
  const title = props.itemObj.title;
  const id = props.itemObj.id;
  const done = props.itemObj.done;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>{title}</h3>
      <div>
        <button
          onClick={() => props.onClickDoneUndoneFn(id, done)}
          style={{ backgroundColor: props.bgColor }}
        >
          {done ? "Done" : "unDone"}
        </button>
      </div>
      <div>
        <button onClick={() => props.onClickRemoveItemFn(id)}> Remove</button>
      </div>
    </div>
  );
}
