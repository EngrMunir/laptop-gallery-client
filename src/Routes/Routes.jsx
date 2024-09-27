import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";
import Order from "../pages/Order/Order/Order";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'products',
                element:<Products></Products>
            },
            {
                path:"order",
                element:<Order></Order>
            }
        ]
    }
])