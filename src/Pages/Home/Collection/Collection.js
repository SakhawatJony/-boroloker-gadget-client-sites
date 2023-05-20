import React from "react";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
      <div className="bg-green-400" id="banner-top">
        <h6 className="text-lime-400 text-1xl font-medium">RELAX COLLECTION</h6>
        <h2 className="text-3xl font-bold text-white pt-1">
          YOUR PERFECT SOUND
        </h2>
        <p className="text-white text-xl pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentir
          pulvinar ante et nisl scelerisque.
        </p>
        <button style={{color:"grey"}} className="btn bg-white   border-none rounded-full me-20 mt-5">
          learn more
        </button>
      </div>

      <div className="bg-yellow-200"  id="banner-up">
        <h6 className="text-lime-400 text-1xl font-medium">RELAX COLLECTION</h6>
        <h2 className="text-3xl font-bold text-white pt-1">
          YOUR PERFECT SOUND
        </h2>
        <p className="text-white text-xl pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentir
          pulvinar ante et nisl scelerisque.
        </p>
        <button style={{color:"grey"}} className="btn bg-white  border-none rounded-full me-20 mt-5">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Collection;
