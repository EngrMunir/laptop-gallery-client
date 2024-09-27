import ProductCard from "../../../Components/ProductCard/ProductCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                items.map(item => <ProductCard key={item.id} item={item}></ProductCard>)
            }
        </div>
    );
};

export default OrderTab;