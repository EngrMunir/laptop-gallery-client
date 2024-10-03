import { useState } from 'react';
import orderCover from '../../../assets/menu/cover2.png'
import Covered from '../../Shared/Covered/Covered';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../../hooks/useProducts';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['HP','Dell','Lenovo','Asus','Apple'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [products] = useProducts();
    
    const HP = products.filter(item => item.brand === 'HP');
    const Apple = products.filter(item => item.brand === 'Apple');
    const Dell = products.filter(item => item.brand === 'Dell');
    const Lenovo = products.filter(item => item.brand === 'Lenovo');
    const Asus = products.filter(item => item.brand === 'Asus');

    return (
        <div className='mb-5'>
            <Helmet>
                <title>Digital | Order Products</title>
            </Helmet>
            <Covered img={orderCover} title="Order Products"></Covered>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>HP</Tab>
                    <Tab>Dell</Tab>
                    <Tab>Lenovo</Tab>
                    <Tab>Asus</Tab>
                    <Tab>Apple</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={HP}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Dell}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Lenovo}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Asus}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Apple}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;