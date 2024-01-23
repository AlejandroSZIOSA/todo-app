import { useState } from "react";
import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");

  function handleTextInput(event) {
    setTextInput(event.target.value);
  }

  return (
    <>
      <div>
        <h1> TODO-APP</h1>

        <div>
          <h2>Title:</h2>
          <input
            type="text"
            value={textInput}
            onChange={handleTextInput}
          ></input>

          {textInput}
        </div>
        <button> ADD</button>
      </div>
    </>
  );
}

export default App;
