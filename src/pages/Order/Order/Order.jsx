import orderCover from '../../../assets/shop/banner2.jpg'
import Covered from '../../Shared/Covered/Covered';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    return (
        <div>
            <Covered img={orderCover} title="Order Products"></Covered>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>HP</Tab>
                    <Tab>Dell</Tab>
                    <Tab>Lenovo</Tab>
                    <Tab>Asus</Tab>
                    <Tab>Apple</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;