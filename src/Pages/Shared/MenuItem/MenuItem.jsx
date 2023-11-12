
const MenuItem = ({item}) => {
    const {name , image , price ,recipe} =item
    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
            <div className="">
                <h4 className="text-xl">{name} ----------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600"> ${price}</p>
        </div>
    );
};

export default MenuItem;