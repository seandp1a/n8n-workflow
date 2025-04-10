import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layouts/dashboard.tsx";
import Home from "./pages/Home.tsx";
import WorkflowPage from "./pages/Workflow.tsx";

import { Provider } from "react-redux";
import TestPage from "./pages/Test.tsx";
import { store } from "./state/store.ts";

// 如果不用 hashRouter，build出來的應用會被告知"Error: No route matches URL "...../n8n-workflow/out/react-ts-win32-x64/resources/app.asar/dist/index.html"
const router = createHashRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          {
            path: "",
            Component: Home,
          },
          {
            path: "workflow",
            Component: WorkflowPage,
          },
          {
            path: "test",
            Component: TestPage,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
