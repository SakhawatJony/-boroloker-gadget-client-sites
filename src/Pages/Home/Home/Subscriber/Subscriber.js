import React from "react";
import subscriberImageBanner from "../../../../Images/background-8.png";


const Subscriber = () => {
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={subscriberImageBanner}
            className="max-w-sm"
          />
          <div className='mx-24'>
            <h1 className="text-1xl font-medium">
              <span className="text-lime-500">SPECIAL OFFERS</span> FOR
              SUBSCRIBERS
            </h1>
            <h1 className="text-5xl font-bold">
              NEW OFFERS EVERY WEEK <span className="text-lime-500">+</span>
              <br /> DISCOUNT SYSTEM <span className="text-lime-500">+</span>
              BEST PRICES
            </h1>

            <p className="py-6 text-base-400">
              Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis
              lorem. Donec quis arcu elit. In vehicula purus sem, eu mattis est
              lacinia sit amet.
            </p>
          
             <div className="flex">
             <input
                type="text"
                placeholder="Type here"
                className="input input-bordered  w-full max-w-xs hover:border-lime-500"
                
              />
              <button className="btn bg-lime-500  border-none rounded-full me-20">Submit</button>
             </div>
          </div>
        </div>
      </div>
  );
};

export default Subscriber;
