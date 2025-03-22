
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

import Wishlist from "../Components/Wishlist/Wishlist";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import RecentlyViewed from "../Components/RecentlyViewed/RecentlyViewed";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('books.json')
            },
            {
                path: 'listedBooks',
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>
                    },
                    {
                        path: '/listedBooks/wishlist',
                        element: <Wishlist></Wishlist>
                    }
                ]
            },
            {
                path: 'pagesToRead',
                element: <PagesToRead></PagesToRead>
            },
            {
                path: 'recentlyViewed',
                element: <RecentlyViewed></RecentlyViewed>
            },
            {
                path: 'aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'book/:id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('books.json')
            },
           
        ]
    }
])