import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Pages/Login/Login";
import SignIn from "../Pages/SignIn/SignIn";
import Secret from "../Pages/Secret/Secret";
import PrivetRout from "../PrivetRout/PrivetRout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorElement></ErrorElement> ,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'menu',
          element: <Menu></Menu>
        },
       {
        path: "login",
        element: <Login></Login>
       },
       {
        path: "signUp",
        element: <SignIn></SignIn>
       },
       {
        path: "secret",
        element: <PrivetRout><Secret></Secret></PrivetRout>
       },
       {
        path: "order/:category",
        element: <Order></Order>
       },

      ]
    },
  ]);