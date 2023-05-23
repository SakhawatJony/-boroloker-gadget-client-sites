import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscriber from './Subscriber/Subscriber';
import Collection from '../Collection/Collection';
import Brand from '../Brand/Brand';
import Products from '../Product/Products/Products';
<<<<<<< HEAD
import SpecialOffers from '../SpecialOffers/SpecialOffers';
=======
import Contact from '../Contact/Contact';
import Services from '../../Services/Services';
>>>>>>> c3fd7c941614689f5e8c2ef3b656566e4aff48f6

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Collection></Collection>
            <Products></Products>
<<<<<<< HEAD
            <SpecialOffers></SpecialOffers>
            <Subscriber></Subscriber>
            <Brand></Brand>

=======
             <Subscriber></Subscriber>
             <Services></Services>
             <Brand></Brand>
             <Contact></Contact>
             
>>>>>>> c3fd7c941614689f5e8c2ef3b656566e4aff48f6

        </div>
    );
};

export default Home;