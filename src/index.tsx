import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Ratings from "./ratings";
import NewRating from "./new-rating";

import { loader as homeLoader } from "./home";
import { loader as ratingsLoader } from "./ratings";
import { loader as newRatingLoader } from "./new-rating";

import "./index.css";

export const apiUrl = "https://localhost:7253/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/ertekelesek",
        element: <Ratings />,
        loader: ratingsLoader,
      },
      {
        path: "/uj-ertekeles",
        element: <NewRating />,
        loader: newRatingLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
