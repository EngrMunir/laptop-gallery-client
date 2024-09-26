import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularProducts from '../PopularProducts/PopularProducts';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;