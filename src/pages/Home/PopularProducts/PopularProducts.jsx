import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuProduct from '../../Shared/MenuProduct/MenuProduct';
import useProducts from '../../../hooks/useProducts';

const PopularProducts = () => {
    const [products] =useProducts()
    const popularComputer = products.filter(item => item.category === 'popular');
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="Popular Products"
                subHeading="Popular Products"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularComputer.map(item =><MenuProduct key={item.id} item={item}></MenuProduct>)
                }
            </div>
        </section>
    );
};

export default PopularProducts;