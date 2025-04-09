import { ipcMain, IpcMainInvokeEvent } from "electron";
ipcMain.handle(
  "node-version",
  (event: IpcMainInvokeEvent, msg: string): string => {
    console.log(event);
    console.log(msg);

    return process.versions.node;
  }
);

// 代理請求
ipcMain.handle("api-request", async (event, { url, options }) => {
  const response = await fetch(`http://localhost:5173${url}`, options);
  return await response.json();
});
