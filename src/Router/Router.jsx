import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import Profile from "../page/profile";
import Details from "../page/Details";
import Privaterouter from "../provider/Privaterouter";
import Error from "../component/Error";
import ForgotPassword from "../page/ForgotPassword";
import Cart from "../page/Cart";
export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        path: "",
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/profile",
        element:(
          <Privaterouter>
            <Profile></Profile>
          </Privaterouter>
        )
      },
      {
        path: "/cart",
        element:(
          <Privaterouter>
            <Cart></Cart>
          </Privaterouter>
        )
      },
      {
        path: "/Details/:id",
        element: (
          <Privaterouter>
            <Details></Details>
          </Privaterouter>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
  {
    path:"/*",
    Component:Error,
  }
]);
