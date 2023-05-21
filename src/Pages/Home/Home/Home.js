import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscriber from './Subscriber/Subscriber';
import Collection from '../Collection/Collection';
import Brand from '../Brand/Brand';
import Products from '../Product/Products/Products';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
             <HomeBanner></HomeBanner>
             <Collection></Collection>
            <Products></Products>
             <Subscriber></Subscriber>
             <Brand></Brand>
             <Contact></Contact>

            
        </div>
    );
};

export default Home;