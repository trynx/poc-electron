import { useEffect } from "react";
import Greeting from "./Greeting";
import InputButton from "./InputButton";
import FileOpener from "./FileOpener";
import Counter from "./Counter";

const App = () => {
  useEffect(() => {
    const pong = async () => {
      // IPC communication with the main process
      const res = await window.electronAPI.ping();
      console.log(res);
    };

    pong();
  }, []);

  return (
    <div>
      <Greeting />
      <InputButton />
      <FileOpener />
      <Counter />
    </div>
  );
};

export default App;
