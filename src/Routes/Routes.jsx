import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

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
                path:"order/:category",
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path:'products',
                element:<Products></Products>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // normal user routes
            {
                path:'cart',
                element:<Cart></Cart>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            // admin routes
            {
                path:'addProducts',
                element:<AdminRoute><AddProducts></AddProducts></AdminRoute>
            },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'updateProduct/:id',
                element:<AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'manageProducts',
                element:<AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            }
        ]
    }
])