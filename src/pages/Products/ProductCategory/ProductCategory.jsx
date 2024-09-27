import Covered from "../../Shared/Covered/Covered";
import MenuProduct from "../../Shared/MenuProduct/MenuProduct";

const ProductCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title && <Covered img={img} title={title}></Covered>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item =><MenuProduct key={item._id} item={item}></MenuProduct>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;