import {  Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Main from "../layouts/Main";
import NotFound from "../Shared/NotFound";
import ErrorElement from "../../../b7a9-career-hub-riasat97/src/Components/Layout/ErrorElement/ErrorElement";
import PrivateRoute from "./PrivateRoutes";
import Blogs from "../pages/Blogs/Blogs";
import Create from "../pages/Toys/Create";
import Toys from "../pages/Toys/Toys";
import MyToys from "../pages/Toys/MyToys";
import SingleToy from "../pages/Toys/SingleToy";
import Legos from "../pages/Home/Legos";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorElement></ErrorElement>, 
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate> 
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'home',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '',
                element: <Legos></Legos>,
            },
            {
                path: 'toys/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute> ,
                loader: ({params}) => fetch(`https://lego-shop-jade.vercel.app/toys/${params.id}`)
            },
        ]
    },
    {
        path: 'toys',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '',
                element: <Toys></Toys>,
                loader: () => fetch('https://lego-shop-jade.vercel.app/toys')
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute> ,
            },
            {
                path: 'create',
                element: <PrivateRoute><Create></Create></PrivateRoute> ,
                loader: ()=> fetch('https://lego-shop-3gaoo8h6r-riasat97.vercel.app/categories')
            },

        ]
    },
    {
        path:'blogs',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children:[
            {
                path:'',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
      }
])

export default router;