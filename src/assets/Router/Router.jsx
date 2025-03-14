
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import PagesToRead from "../Components/PagesToRead/PagesToRead";
import Blogs from "../Components/Blogs/Blogs";
import AboutUs from "../Components/AboutUs/AboutUs";
import BookDetails from "../Components/BookDetails/BookDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('books.json')
            },
            {
                path: 'listedBooks',
                element: <ListedBooks></ListedBooks>
            },
            {
                path: 'pagesToRead',
                element: <PagesToRead></PagesToRead>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'book/:id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('books.json')
            }
        ]
    }
])