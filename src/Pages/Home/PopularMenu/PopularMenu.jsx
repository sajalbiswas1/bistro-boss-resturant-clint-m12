import { useEffect, useState } from "react";
import HeadingTitle from "../../../component/HeadingTitle/HeadingTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .   then(data =>{
            const fiterItem = data.filter(item => item.category == "popular")
            setMenu(fiterItem)
        } )
    },[])
    console.log(menu)
    return (
        <section>
            <HeadingTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
            ></HeadingTitle>
            <div className="grid md:grid-cols-2 gap-5 py-12">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;