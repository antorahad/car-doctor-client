import {
    createBrowserRouter,
  } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
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
      ],
    },
  ]);

export default router;