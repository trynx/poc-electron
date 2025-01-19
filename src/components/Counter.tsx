import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleUpdateCounter = (value: number) => {
      const newValue = count + value;
      window.electronAPI.counterValue(newValue);
      setCount(newValue);
    };

    window.electronAPI.onUpdateCounter(handleUpdateCounter);

    return () => {
      // Cleanup if necessary
    };
  }, [count]);

  return <p>Counter: {count}</p>;
};

export default Counter;
