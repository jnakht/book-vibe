import ListedBooksTitle from "../ListedBooksTitle/ListedBooksTitle";
import { FaAngleDown } from "react-icons/fa";
import '../../../App.css'
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const ListedBooks = () => {
    const [activeCard, setActiveCard] = useState(0);
    return (  
        <div className="w-10/12 mx-auto">
            <ListedBooksTitle></ListedBooksTitle>
            {/* dropdown menu start*/}
            <div className=" border-2 border-yellow-600 mt-8 mb-[56px]">
                <div className="dropdown dropdown-bottom dropdown-center border-2 border-green-600 flex justify-center">
                    <div tabIndex={0} role="button" className="btn m-1 w-[190px] bg-[#23BE0A] text-white work-sans text-lg font-semibold">Sort By<FaAngleDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-[#1313130D] rounded-box z-1 w-[190px] p-2 shadow-sm work-sans text-base font-normal">
                        <li><a>Rating</a></li>
                        <li><a>Number Of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            {/* dropdown menu end */}

            {/* card start */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
                <Link  onClick={() => setActiveCard(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 0 ? 'border border-b-0 rounded-t-lg ' : 'border-b'}`}>
                   
                    <span>Read Books</span>
                </Link>
                <Link to='/listedBooks/wishlist' onClick={() => setActiveCard(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}`}>
            
                    <span>Wishlist</span>
                </Link>
               
            </div>
            {/* card end */}
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;