
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Subscriber from './Subscriber/Subscriber';
import Collection from '../Collection/Collection';
import Brand from '../Brand/Brand';
import Products from '../Product/Products/Products';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import Contact from '../Contact/Contact';
import Services from '../../Services/Services';

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Collection></Collection>
      <Products></Products>
      <SpecialOffers></SpecialOffers>
      <Subscriber></Subscriber>
      <Brand></Brand>
      <Services></Services>
      <Brand></Brand>
      <Contact></Contact>



    </div>
  )
};
// import React from "react";
// import HomeBanner from "../HomeBanner/HomeBanner";
// import Subscriber from "./Subscriber/Subscriber";
// import Collection from "../Collection/Collection";
// import Brand from "../Brand/Brand";
// import Products from "../Product/Products/Products";
// import SpecialOffers from "../SpecialOffers/SpecialOffers";
// import Contact from "../Contact/Contact";
// import Services from "../../Services/Services";

// const Home = () => {
//   return (
//     <div>
//       <HomeBanner></HomeBanner>
//       <Collection></Collection>
//       <Products></Products>
//       <SpecialOffers></SpecialOffers>
//       <Subscriber></Subscriber>
//       <Brand></Brand>
//       <Subscriber></Subscriber>
//       <Services></Services>
//       <Brand></Brand>
//       <Contact></Contact>
//     </div>
//   );
// };

export default Home;
