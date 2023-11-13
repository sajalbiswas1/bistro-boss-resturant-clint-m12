import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Cover from "../../Shared/Cover/Cover";
import bannerImg from "../../../assets/shop/banner2.jpg"
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categoryArray = ["salads","pizza","soups","dessert","drinks",]
    const {category} = useParams(0);
    console.log(category)
    const categoryIndex = categoryArray.indexOf(category)
    const [tabIndex, setTabIndex] = useState(categoryIndex);
    const [menu] = useMenu();
    
    console.log(categoryIndex)
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups = menu.filter(item => item.category === "soup")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={bannerImg} title="our shop"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab categoryItems={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab categoryItems={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab categoryItems={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab categoryItems={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab categoryItems={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;