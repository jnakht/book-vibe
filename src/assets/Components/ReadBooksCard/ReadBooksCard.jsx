import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../../App.css'
const ReadBooksCard = ({book}) => {
    const {bookId, bookName, author, image, category, publisher, rating, tags, review, totalPages, yearOfPublishing} = book;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className="w-[30%] h-[230px] border-2 border-red-500">
                    <img
                        className="h-[200px] w-[30%]"
                        src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="text-[#131313] playfair-display  text-2xl font-bold">{bookName}</h2>
                    <p className="text-[#131313CC] work-sans text-base font-medium">By: {author}</p>
                    <div>
                        <div>
                            <span className="text-[#131313]  work-sans text-base font-bold">Tags</span>
                            {
                                tags.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                            }
                        </div>
                        <div className="flex text-[#131313CC] work-sans text-base font-normal">
                             <FaLocationDot />
                             <p>Year Of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex work-sans text-base font-normal text-[#13131399]">
                        <div className="flex">
                            <IoPeopleOutline />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex">
                            <FaRegFileAlt />
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                    <div>
                        <button>Category: {category}</button>
                        <button>Rating: {rating}</button>
                        <Link><button>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksCard;