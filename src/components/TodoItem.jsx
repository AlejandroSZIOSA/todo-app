import React from "react";
export default function TodoItem(props) {
  const title = props.itemObj.title;
  const id = props.itemObj.id;
  const done = props.itemObj.done;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>
        {title} {"/ ID= "}
        {id}
      </h3>
      <button onClick={() => props.onClickSwitchFn(id, done)}>
        {done ? "Done" : "unDone"}
      </button>
    </div>
  );
}
