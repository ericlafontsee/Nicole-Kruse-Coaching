import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/*", element: <PageNotFound /> }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
