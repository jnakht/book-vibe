import ListedBooksTitle from "../ListedBooksTitle/ListedBooksTitle";
import { FaAngleDown } from "react-icons/fa";
import '../../../App.css'
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const ListedBooks = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [sortBy, setSortBy] = useState('default');
    useEffect(() => {
        localStorage.setItem('sortBy', JSON.stringify(sortBy));
    }, [sortBy])
    return (
        <div className="w-10/12 mx-auto">
            <ListedBooksTitle></ListedBooksTitle>
            {/* select menu start */}
            <div className=" mt-8 mb-[56px] border-2 border-red-500  flex  justify-center items-center">
            <select defaultValue="Sort By" className="select  outline-none border-2 border-green-500  bg-[#23BE0A] text-white work-sans text-lg font-semibold">
               <div className="">
               <option className=" bg-white"><button>Sort By<FaAngleDown /></button></option>
                <option className="bg-[#1313130D]"><button onClick={() => setSortBy('rating')}>Rating</button></option>
                <option className="bg-[#1313130D]"><button onClick={() => setSortBy('noOfPages')}>Number Of Pages</button></option>
                <option className="bg-[#1313130D]"><button onClick={() => setSortBy('publisherYear')}>Publisher Year</button></option>
               </div>
            </select>
            </div>
            {/* select menu end */}
            {/* dropdown menu start*/}
            <div className=" mt-8 mb-[56px]">
                <div className="dropdown dropdown-bottom dropdown-center  flex justify-center">
                    <div tabIndex={0} role="button" className="btn m-1 w-[190px] bg-[#23BE0A] text-white work-sans text-lg font-semibold">Sort By<FaAngleDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-[#1313130D] rounded-box z-1 w-[190px] p-2 shadow-sm work-sans text-base font-normal">
                        <li><button onClick={() => setSortBy('rating')}>Rating</button></li>
                        <li><button onClick={() => setSortBy('noOfPages')}>Number Of Pages</button></li>
                        <li><button onClick={() => setSortBy('publisherYear')}>Publisher Year</button></li>
                    </ul>
                </div>
            </div>
            {/* dropdown menu end */}

            {/* card start */}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:bg-gray-100 dark:text-gray-800 ">
                <Link onClick={() => setActiveCard(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 0 ? 'border border-b-0 rounded-t-lg ' : 'border-b'}`}>

                    <span>Read Books</span>
                </Link>
                <Link to='/listedBooks/wishlist' onClick={() => setActiveCard(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-600 ${activeCard === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}`}>

                    <span>Wishlist</span>
                </Link>

            </div>
            {/* card end */}
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;