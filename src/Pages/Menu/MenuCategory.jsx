import { Link } from "react-router-dom";
import Button from "../../component/Button/Button";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, btnName,title, image }) => {
    return (
        <div>
            {
                title && <Cover img={image} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-5 py-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><Button btnName={btnName}></Button></Link>
        </div>
    );
};

export default MenuCategory;