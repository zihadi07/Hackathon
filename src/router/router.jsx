import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import About from "../pages/Home/About/About";
import Courses from "../pages/Courses/Courses";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {   path: "/",
                element: <Home />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);