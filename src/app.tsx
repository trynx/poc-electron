import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ElectronAPI } from "./types/electron.type";

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
