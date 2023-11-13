import FoodCard from "../../../component/FoodCard/FoodCard";

const OrderTab = ({ categoryItems }) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                categoryItems.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;