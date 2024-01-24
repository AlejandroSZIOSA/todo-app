import React from "react";
var btnName;
export default function TodoItem(props) {
  const title = props.itemObj.title;
  const id = props.itemObj.id;
  const done = props.itemObj.done;
  /* const [isBtnDoneActive, setIsBtnActive] = useState(false);

  if (isBtnDoneActive) {
    btnName = "UnDone";
  } else {
    btnName = "Done";
  } */

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <h3>
        {title} {"/ ID= "}
        {id}
      </h3>
      <button onClick={() => props.onClickSwitchFn(id)}>Done</button>
    </div>
  );
}
