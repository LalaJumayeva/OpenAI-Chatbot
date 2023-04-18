import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Chat from "./Pages/Chat"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
        path: "chatting",
        element: <Chat/>
      },
  ]);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<RouterProvider router={router}/>);