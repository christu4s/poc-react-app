import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Authendication from "./components/pages/Authendication/Authendication";
import Database from "./components/pages/Database/Database";
import Hosting from "./components/pages/Hosting/Hosting";
import Storage from "./components/pages/Storage/Storage";
import ErrorPage from "./components/pages/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./DashboardTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/authendication",
        element: <Authendication />,
      },
      {
        path: "/storage",
        element: <Storage />,
      },
      {
        path: "/hosting",
        element: <Hosting />,
      },
      {
        path: "/database",
        element: <Database />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
