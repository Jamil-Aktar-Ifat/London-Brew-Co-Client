import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import Root from "./Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import SignUp from "./SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5005/coffee"),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5005/coffee/${params.id}`),
      },
      {
        path: "/AddCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
