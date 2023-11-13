import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ErrorElement from "../ErrorElement/ErrorElement";


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
      //  {
      //   path: "order",
      //   element: <Order></Order>
      //  },
       {
        path: "order/:category",
        element: <Order></Order>
       }
      ]
    },
  ]);