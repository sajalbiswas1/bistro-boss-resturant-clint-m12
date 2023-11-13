import HeadingTitle from "../../../component/HeadingTitle/HeadingTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const categoryMenu = menu.filter(item => item.category == "popular")
    return (
        <section>
            <HeadingTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></HeadingTitle>
            <div className="grid md:grid-cols-2 gap-5 py-12">
                {
                    categoryMenu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex pb-6  justify-center">
                <button className="border-b-2 hover:bg-black hover:text-white uppercase border-black px-5 py-2 rounded-lg">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;