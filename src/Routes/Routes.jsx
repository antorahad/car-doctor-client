import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Layout from "../layout/Layout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ],
    },
  ]);

export default router;