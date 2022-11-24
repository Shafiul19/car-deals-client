import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoutes from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                children: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                children: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/allsellers',
                children: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
        ]
    }
])

export default router;