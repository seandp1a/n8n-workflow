import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (msg: string): Promise<string> =>
    await ipcRenderer.invoke("node-version", msg),
  fetchFromAPI: async (url: string, options: RequestInit) =>
    await ipcRenderer.invoke("api-request", { url, options }),
};

contextBridge.exposeInMainWorld("backend", backend);