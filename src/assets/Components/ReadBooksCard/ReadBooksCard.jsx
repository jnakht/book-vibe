import { FaLocationDot } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../../App.css'
const ReadBooksCard = ({book}) => {
    const {bookId, bookName, author, image, category, publisher, rating, tags, review, totalPages, yearOfPublishing} = book;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border border-solid border-[#13131326] h-[280px] p-6">
                <figure className="w-[30%] h-[230px]  flex justify-center items-center rounded-lg">
                    <img
                        className="h-[200px] w-[90%] "
                        src={image} />
                </figure>
                <div className=" ml-6 flex flex-col gap-2 ">
                    <h2 className="text-[#131313] playfair-display  text-2xl font-bold">{bookName}</h2>
                    <p className="text-[#131313CC] work-sans text-base font-medium">By: {author}</p>
                    <div className="flex gap-8 items-center">
                        <div className="flex gap-4 items-center">
                            <span className="text-[#131313]  work-sans text-base font-bold">Tags</span>
                            {
                                tags.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                            }
                        </div>
                        <div className="flex text-[#131313CC] work-sans text-base font-normal items-center gap-2">
                             <FaLocationDot />
                             <p>Year Of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex work-sans text-base font-normal text-[#13131399] items-center gap-8">
                        <div className="flex items-center gap-2">
                            <IoPeopleOutline />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegFileAlt />
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                    <hr className="text-[#13131399] mt-4 mb-4" />
                    <div className="flex gap-3 items-center">
                        <button className="bg-[#328EFF26] rounded-4xl text-[#328EFF] work-sans text-base font-normal px-5 py-2">Category: {category}</button>
                        <button className="bg-[#FFAC331F] rounded-4xl text-[#FFAC33] work-sans text-base font-normal px-5 py-2">Rating: {rating}</button>
                        <Link><button className="bg-[#23BE0A] rounded-4xl text-[#FFF] work-sans text-base font-normal px-5 py-2">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksCard;