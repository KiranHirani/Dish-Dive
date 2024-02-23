import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import AboutUs from "./About";
import "font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./Contact";
import Error from "./Error";
import Details from "./Details";
import RandomRecipe from "./RandomRecipe";
import RandomFoodJoke from "./RandomJoke";

const h1 = React.createElement("h1", {}, "This is Heading");

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/random-food-joke",
    element: <RandomFoodJoke />,
  },
  {
    path: "details/:category/:id",
    element: <Details />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
