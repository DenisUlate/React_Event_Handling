import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Welcome");
  const [buttonColor, setButtonColor] = useState("white");

  function handleClick() {
    setHeadingText("Registered");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={() => setButtonColor("black")}
        onMouseLeave={() => setButtonColor("white")}
        style={{ backgroundColor: buttonColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
