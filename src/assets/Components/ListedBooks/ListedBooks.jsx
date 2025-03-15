import ListedBooksTitle from "../ListedBooksTitle/ListedBooksTitle";
import { FaAngleDown } from "react-icons/fa";
import '../../../App.css'
const ListedBooks = () => {
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
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Architecto</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Corrupti</span>
                </a>
               
            </div>
        </div>
    );
};

export default ListedBooks;