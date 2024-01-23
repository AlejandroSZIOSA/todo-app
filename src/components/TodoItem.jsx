import React from "react";

export default function TodoItem({ title, onClickFn }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>{title}</h3>
      <button onClick={onClickFn}> Done</button>
    </div>
  );
}
