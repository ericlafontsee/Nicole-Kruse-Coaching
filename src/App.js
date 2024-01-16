import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/*", element: <PageNotFound /> }
]);

const App = () => {
  return <RouterProvider router={router} basename="ericlafontsee/Nicole-Kruse-Coaching"/>;
};

export default App;
