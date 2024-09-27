import { Helmet } from 'react-helmet-async'
import useProducts from '../../../hooks/useProducts';
import Covered from '../../Shared/Covered/Covered';
import img from '../../../assets/menu/menu-bg.png'
import appleImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ProductCategory from '../ProductCategory/ProductCategory';


const Products = () => {
    const [products]= useProducts();
    // console.log(products)
    const hp = products.filter(item => item.brand === 'HP');
    const apple = products.filter(item => item.brand === 'Apple');
    const dell = products.filter(item => item.brand === 'Dell');
    const lenovo = products.filter(item => item.brand === 'Lenovo');
    const asus = products.filter(item => item.brand === 'Asus');
    return (
        <div className='mb-5'>
            <Helmet>
                <title>Digital | Products</title>
            </Helmet>
            <Covered img={img} title="our products"></Covered>
            {/* hp products */}
            <SectionTitle subHeading="Don't miss" heading="HP Products"></SectionTitle>
            <ProductCategory items={hp}></ProductCategory>
            {/*  */}
            <ProductCategory title="Dell" items={dell} img={appleImg}></ProductCategory>
            <ProductCategory title="Lenovo" items={lenovo} img={appleImg}></ProductCategory>
            <ProductCategory title="Asus" items={asus} img={appleImg}></ProductCategory>
            <ProductCategory title="Apple" items={apple} img={appleImg}></ProductCategory>
        </div>
    );
};

export default Products;