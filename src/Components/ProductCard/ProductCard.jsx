
const ProductCard = ({item}) => {

    const {image, price, description, brand }=item;

    const handleAddToCart = food =>{
        console.log(food);
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