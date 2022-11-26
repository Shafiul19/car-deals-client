import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategorizedProduct from "../../Pages/CategorizedProduct/CategorizedProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoutes from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoutes from "../SellerRoute/SellerRoute";


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
                path: '/category/:id',
                element: <PrivateRoute><CategorizedProduct></CategorizedProduct></PrivateRoute>
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
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoutes><ReportedItems></ReportedItems></AdminRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
        ]
    }
])

export default router;