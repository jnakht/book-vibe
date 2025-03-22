import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import TitleSection from "../TitleSection/TitleSection";


const Home = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Helmet>
                <title>BookVibe - Home</title>
            </Helmet>
            <Banner></Banner>
            <TitleSection></TitleSection>
            <Books></Books>
        </div>
    );
};

export default Home;