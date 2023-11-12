import HeadingTitle from "../../../component/HeadingTitle/HeadingTitle";
import img from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {

    return (
        <section className="bg-image bg-fixed my-10 pt-10 md:pb-20">
            <div className="content">
            <div className="text-white">
            <HeadingTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></HeadingTitle>
            </div>
            <div className="md:flex md:gap-10 lg:px-36 md:px-28 pt-5 px-10">
                <div className="">
                    <img className="lg:max-w-md md:max-w-xs  m-auto" src={img} alt="" />
                </div>
                <div className="text-white">
                    <h5 className="text-xl">March 20, 2023</h5>
                    <h5 className="text-xl">WHERE CAN I GET SOME?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <div className=" py-6">
                        <button className="border-b-2  hover:bg-black text-white  hover:text-white uppercase border-black px-5 py-2 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Featured;