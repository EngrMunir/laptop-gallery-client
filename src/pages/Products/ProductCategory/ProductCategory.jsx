import { Link } from "react-router-dom";
import Covered from "../../Shared/Covered/Covered";
import MenuProduct from "../../Shared/MenuProduct/MenuProduct";

const ProductCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title && <Covered img={img} title={title}></Covered>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item =><MenuProduct key={item.id} item={item}></MenuProduct>)
                }
            </div>
           <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

export default ProductCategory;