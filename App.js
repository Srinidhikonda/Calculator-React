import React, { useState } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  
  const handleButtonClick = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleEqual = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClear()} className="clear">C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleEqual()} className="equals">=</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick(".")}>.</button>

        <button onClick={() => handleButtonClick("0")} className="zero">0</button>
      </div>
    </div>
  );
}

export default App;

