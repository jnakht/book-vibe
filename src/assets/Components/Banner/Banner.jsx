
// import image from '../../../assets/banner.png'
import './Banner.css'
const Banner = () => {
    return (
            <div className="bg-[url('./banner.png')] h-[600px] w-full rounded-3xl bg-cover bg-[85%_center]  bg-no-repeat banner pr[100%] p-[120px] bg-[#1313130D] mt-[52px] mb-[100px]">
                <h1 className='text-[#131313] playfair-display text-[56px] font-bold max-w-[50%] mb-[48px]'>Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] rounded-[8px]  text-white px-7 py-5">View The List</button>
                {/* <img src={image} alt="" /> */}
            </div>
           
    );
};

export default Banner;