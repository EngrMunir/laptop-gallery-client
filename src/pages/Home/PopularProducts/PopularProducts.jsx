import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuProduct from '../../Shared/MenuProduct/MenuProduct';

const PopularProducts = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularComputer = data.filter(item => item.category === 'popular');
            // console.log(popularComputer)
            setProducts(popularComputer)
        })
    })
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From our collections"
                subHeading="Popular Products"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    products.map(item =><MenuProduct key={item._id} item={item}></MenuProduct>)
                }
            </div>
        </section>
    );
};

export default PopularProducts;