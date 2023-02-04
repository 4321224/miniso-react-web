import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../layout/layout";
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const auth = localStorage.getItem("access_token");
      if (auth) return redirect("/");
    },
  },
  {
    element: <Layout />,
    loader: () => {
      const auth = localStorage.getItem("access_token");
      if (!auth) return redirect("/login");
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
    ],
  },
]);

export default router;
