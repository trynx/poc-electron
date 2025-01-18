import { useEffect } from "react";
import Greeting from "./Greeting";
import InputButton from "./InputButton";
import FileOpener from "./FileOpener";

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
    </div>
  );
};

export default App;
