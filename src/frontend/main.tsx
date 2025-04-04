import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layouts/dashboard.tsx";
import Home from "./pages/Home.tsx";
import Page2 from "./pages/Page2.tsx";
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
            path: "user",
            Component: Page2,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
