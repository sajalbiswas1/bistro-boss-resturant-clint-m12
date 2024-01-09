import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosApi = useAxios()
    const {name, recipe, image, price,_id} = item
    const handleCard =(item)=>{
        if(user && user.email){
            //todo: send card item in database
            const cardItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosApi.post('/cart', cardItem)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add to card",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
        }
        else{
            Swal.fire({
                title: "Plase login to add to the card?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              });
        }
        console.log(item)
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 font-semibold px-4 py-2 mr-4 mt-3 ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleCard(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;