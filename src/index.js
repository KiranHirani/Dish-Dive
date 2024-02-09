import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import AboutUs from "./About";
import "font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const h1 = React.createElement("h1", {}, "This is Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
