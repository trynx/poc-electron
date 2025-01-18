import React, { useState } from "react";

const InputButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.log(inputValue);
    window.electron.setTitle(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default InputButton;
