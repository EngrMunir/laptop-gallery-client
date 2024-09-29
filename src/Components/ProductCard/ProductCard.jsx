
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ProductCard = ({item}) => {

    const {image, price, description, brand, _id }=item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handleAddToCart = food =>{
        if(user && user.email){
            const cartItem={
                productId:_id,
                email: user.email,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This laptop has been added to cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                }
              });
        }
    }

    return (
        <div className="card bg-base-100 mt-5 shadow-xl">
            <figure> <img src={image} alt="laptop" /> </figure>
            <p className=" absolute right-0 mr-3 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button 
                onClick={()=>handleAddToCart(item)}
                className="btn btn-outline  bg-slate-100 border-0 border-orange-400 border-b-4 mt-4"
                >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;