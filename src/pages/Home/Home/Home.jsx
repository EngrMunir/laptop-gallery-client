import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularProducts from '../PopularProducts/PopularProducts';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularProducts></PopularProducts>
            <Featured></Featured>
        </div>
    );
};

export default Home;