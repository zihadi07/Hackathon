import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import About from "../pages/Home/About/About";
import Courses from "../pages/Courses/Courses";
import Output from "../testComponents/Output/Output.jsx";
import EvaluationForm from "../testComponents/EvaluationForm/EvaluationForm.jsx";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {   path: "/",
                element: <Output />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/about",
                element: <EvaluationForm />
            }
        ]
    }
]);