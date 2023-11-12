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
           <div className="flex pb-6  justify-center">
           <button className="border-b-2 hover:bg-black hover:text-white uppercase border-black px-5 py-2 rounded-lg">View Full Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;