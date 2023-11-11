import Banner from "../Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/Popularmenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;