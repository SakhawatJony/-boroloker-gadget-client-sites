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
import About from "../../Home/About/About";
<<<<<<< HEAD
import ProductDetails from "../../Home/Product/ProductDetails/ProductDetails";


=======
import Blog from "../../Home/Blog/Blog";
>>>>>>> 31c87c18df27e49e6698920c5583d59ea2f37c61

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
<<<<<<< HEAD
                path:'register',
                element:<Register></Register>
=======
                path: 'register',
                element: <Register></Register>
>>>>>>> 31c87c18df27e49e6698920c5583d59ea2f37c61
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
<<<<<<< HEAD
                path:'products',
                element:<Products></Products>

                

            },
    
            {
                path:'/product/:serviceId',
                element:  <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>

                
=======
                path: 'products',
                element: <Products></Products>
>>>>>>> 31c87c18df27e49e6698920c5583d59ea2f37c61

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
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }





])
export default router;