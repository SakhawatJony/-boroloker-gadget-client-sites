import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Services from "../../Services/Services";
import Contact from "../../Home/Contact/Contact";
import Products from "../../Home/Product/Products/Products";
<<<<<<< HEAD
import Register from "../../Login/Login/Register/Register";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
=======
import About from "../../Home/About/About";
>>>>>>> 89788651cfbb466e7e8c94bb7028a925d79a8282

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
                path: 'login',
                element: <Login></Login>
            },
            {
<<<<<<< HEAD
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
=======
                path: 'products',
                element: <Products></Products>
>>>>>>> 89788651cfbb466e7e8c94bb7028a925d79a8282
            },
            {
                path: 'service',
                element: <Services></Services>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }





])
export default router;