import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Content from "../components/content";
import ContentId from "../components/ContentId";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Products",
        element: <Content />,
      },
      {
        path: "/Products/:id",
        element: <ContentId />,
      },
    ],
  },
]);

export default router;
