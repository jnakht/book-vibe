
// import image from '../../../assets/banner.png'
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
            <div className="bg-[url('./banner.png')] h-[200px] md:h-[600px] w-full rounded-3xl bg-cover bg-[85%_center]  bg-no-repeat banner pl-5 pt-[10%] pb-[10%] md:pb-0 md:p-[120px] bg-[#1313130D] mt-[30px] md:mt-[52px] mb-[30px]  md:mb-[100px]">
                <h1 className='text-[#131313] playfair-display text-2xl md:text-[56px] font-bold max-w-[65%] md:max-w-[50%] mb-4  md:mb-[48px]'>Books to freshen up your bookshelf</h1>
                <Link to='listedBooks'><button className="btn bg-[#23BE0A] rounded-[8px]  text-white px-7 py-5">View The List</button></Link>
                {/* <img src={image} alt="" /> */}
            </div>
           
    );
};

export default Banner;