import React, { useEffect } from "react";
import Greeting from "./Greeting";
import InputButton from "./InputButton";

const App = () => {
  useEffect(() => {
    const pong = async () => {
      // IPC communication with the main process
      const res = await window.electron.ping();
      console.log(res);
    };

    pong();
  }, []);

  return (
    <div>
      <Greeting />
      <InputButton />
    </div>
  );
};

export default App;
