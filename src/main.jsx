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
import SignUp from "./components/SignUp/SignUp.jsx";
import Users from "./components/Users/Users.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://london-brew-co-server.vercel.app/coffee"),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://london-brew-co-server.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/AddCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://london-brew-co-server.vercel.app/users"),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
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
