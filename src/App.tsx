import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("input value:", inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="input text"
      />

      <button type="button" onClick={handleButtonClick}>
        click
      </button>
    </div>
  );
};

export default App;
