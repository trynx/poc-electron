// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// This is also the context bridge example from the Electron documentation:
// https://www.electronjs.org/docs/latest/tutorial/context-isolation#context-bridge

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ping: () => ipcRenderer.invoke("ping"),
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
});
