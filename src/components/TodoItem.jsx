import React from "react";

export default function TodoItem(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>{props.title}</h3>
      <button> Done</button>
    </div>
  );
}
