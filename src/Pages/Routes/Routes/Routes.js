import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Services from "../../Services/Services";
import Contact from "../../Home/Contact/Contact";
import Products from "../../Home/Product/Products/Products";

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