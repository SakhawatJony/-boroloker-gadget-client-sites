import React from 'react';
import Banner from '../../../Images/banner.png'

const HomeBanner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Banner} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-1xl font-bold">BEST PRICE <span className='text-lime-400'>$1999.0</span> </h1>
          <h1 className="text-6xl font-bold uppercase">smartphone x  transform</h1>
          <p className="py-6">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin <br /> pharetra elit at feugiat commodo vel placerat tincidunt sapien nec.</p>
         <div className=''>
         <button className="btn btn-dark mx-2 rounded-full">Learn More</button>
          <button className="btn bg-lime-500 border-none rounded-full">Add to Cart</button>
         </div>
        </div>
      </div>
    </div>
    );
};

export default HomeBanner;