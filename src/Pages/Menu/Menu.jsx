import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import bannerImg from '../../assets/menu/banner3.jpg';
import coverDessert from '../../assets/menu/dessert-bg.jpeg';
import coverPizza from '../../assets/menu/pizza-bg.jpg';
import coverSalad from '../../assets/menu/salad-bg.jpg';
import coverSoup from '../../assets/menu/soup-bg.jpg';
import HeadingTitle from "../../component/HeadingTitle/HeadingTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == "offered")
    const dessert = menu.filter(item => item.category == "dessert")
    const pizza = menu.filter(item => item.category == "pizza")
    const salads = menu.filter(item => item.category == "salad")
    const soups = menu.filter(item => item.category == "soup")


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={bannerImg} title="Our Menu"></Cover>
            <HeadingTitle heading="TODAY'S OFFER" subHeading="Don't miss"></HeadingTitle>
            <MenuCategory items={offered} btnName="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="dessert" image={coverDessert} items={dessert} btnName="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="pizza" image={coverPizza} items={pizza} btnName="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="salads" image={coverSalad} items={salads} btnName="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            <MenuCategory title="soups" image={coverSoup} items={soups} btnName="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
        </div>
    );
};
export default Menu;