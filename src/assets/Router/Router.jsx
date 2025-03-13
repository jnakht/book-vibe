
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])