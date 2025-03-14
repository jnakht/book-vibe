import { useContext } from "react";
import { BookContext } from "../Books/Books";
import '../../../App.css'
import { FaRegStar } from "react-icons/fa";
const Book = ({book}) => {
    const {bookName, author, image, category, publisher, rating, tags} = book;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        className="rounded-xl h-[182px] w-[303px]" />
                </figure>
                <div className="card-body  ">
                    <div className="flex flex-wrap gap-2">
                        {
                            tags.map(tag => <button className="bg-[#23BE0A0D] px-4 py-2 rounded-[30px] text-[#23BE0A] work-sans text-base font-medium ">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <hr />
                    <div className="card-actions">
                        <p>{category}</p>
                        <div className="flex gap-1 justify-center items-center">
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;