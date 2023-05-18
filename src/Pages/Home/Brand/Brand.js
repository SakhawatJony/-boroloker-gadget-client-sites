import React from "react";
import Brand1 from '../../../Images/barnd/client-logo-1.jpg'
import Brand2 from '../../../Images/barnd/client-logo-2.jpg'
import Brand3 from '../../../Images/barnd/client-logo-3.jpg'
import Brand4 from '../../../Images/barnd/client-logo-4.jpg'
import Brand5 from '../../../Images/barnd/client-logo-5.jpg'
import Brand6 from '../../../Images/barnd/client-logo-6.jpg'
import Brand7 from '../../../Images/barnd/client-logo-7.jpg'
import Brand8 from '../../../Images/barnd/client-logo-8.jpg'
import Brand9 from '../../../Images/barnd/client-logo-9.jpg'
import Brand10 from '../../../Images/barnd/client-logo-10.jpg'

const Brand = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-medium pt-5 ">OUR BRANDS</h1>
      <h1 style={{ color: "grey" }} className="text-center text-4xl font-bold pt-3">
        BEST OF THE BEST
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {/* brand 1  */}
        <div  className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src={Brand1}
              alt="logo1"
              style={{border:"1px solid lime"}}
           
            />
          </figure>
        </div>
        {/* brand 2  */}
        <div className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img style={{border:"1px solid lime"}} 
              src={Brand2}
              alt="logo2"
             
            />
          </figure>
        </div>
        {/* brand 3  */}
        <div className="card w-70 bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={Brand3}
              alt="logo3"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 4 */}
        <div className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src={Brand4}
              alt="logo4"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 5  */}
        <div className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src={Brand5}
              alt="logo5"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 6  */}
        <div className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src={Brand6}
              alt="logo6"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 7  */}
        <div className="card w-70 bg-base-100 ">
          <figure className="px-10 pt-10">
            <img
              src={Brand7}
              alt="logo7"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 8  */}
        <div className="card w-70 bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={Brand8}
              alt="Shoes"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 9  */}
        <div className="card w-70 bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={Brand9}
              alt="logo9"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>
        {/* brand 8  */}
        <div className="card w-70 bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={Brand10}
              alt="logo10"
              style={{border:"1px solid lime"}} 
            />
          </figure>
        </div>

      </div>
    </div>
  );
};

export default Brand;
