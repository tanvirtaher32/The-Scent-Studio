import React from 'react';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';
import Accordion from '../components/Home/Accordion';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Accordion></Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Home;