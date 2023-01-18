import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//* React-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//* Routes
import { Home } from "./routes/Home/Home";
import { Repos } from "./routes/Repos/Repos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:username",
        element: <Repos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
