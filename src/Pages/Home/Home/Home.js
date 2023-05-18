import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscriber from './Subscriber/Subscriber';
import Collection from '../Collection/Collection';
import Brand from '../Brand/Brand';

const Home = () => {
    return (
        <div>
             <HomeBanner></HomeBanner>
             <Collection></Collection>
             <Subscriber></Subscriber>
             <Brand></Brand>

            
        </div>
    );
};

export default Home;