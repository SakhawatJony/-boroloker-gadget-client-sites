import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Services from "../../Services/Services";
import Contact from "../../Home/Contact/Contact";
import Products from "../../Home/Product/Products/Products";
import Register from "../../Login/Login/Register/Register";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {

        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'products',
                element:<Products></Products>
            },
            {
                path:'service',
                element:<Services></Services>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    }





])
export default router;