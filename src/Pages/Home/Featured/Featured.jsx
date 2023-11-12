import HeadingTitle from "../../../component/HeadingTitle/HeadingTitle";
import img from '../../../assets/home/featured.jpg';
import Button from "../../../component/Button/Button";
const Featured = () => {
    return (
        <section>
            <HeadingTitle
                heading="FROM OUR MENU"
                subHeading="Check it out"
            ></HeadingTitle>
            <div className="flex gap-5 px-10 py-30">
                <div className="">
                <img className="max-w-lg m-auto" src={img} alt="" />
                </div>
                <div>
                <h5>March 20, 2023</h5>
                <h5>WHERE CAN I GET SOME?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <Button name="Read More"></Button>
                </div>
            </div>
        </section>
    );
};

export default Featured;