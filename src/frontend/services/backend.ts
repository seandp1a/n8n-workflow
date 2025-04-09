import { ipcRenderer } from "electron";

export const fetchFromAPI = async (url: string, options: RequestInit) => {
  return await ipcRenderer.invoke("api-request", { url, options });
};
