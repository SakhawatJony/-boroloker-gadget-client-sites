import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { serviceId } = useParams();
  const [products, setProducts] = useState([])


  useEffect(() => {
    const url = `http://localhost:5000/products/${serviceId}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));

  }, [])
  return (

   <>
    {
        matchingProducts?.title?(<div
        style={{ border: "1px solid lime", height: "400px" }}
        className="card w-96 bg-base-100 shadow-xl mt-6"
      >
        <figure>
          <img
            className=""
            style={{ height: "100%", width: "80%" }}
            src={matchingProducts.img}
            alt="SmartPhone"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            <span className="text-lime-500">Product Name:</span>
            {matchingProducts.title}
          </h2>
          <p className="font-bold">
            <span className="text-lime-500"> Price:</span> {products.price}
          </p>
          <p>{matchingProducts.description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-lime-500 border-none">Buy Now</button>
          </div>
        </div>
      </div>

        ) :(
            <div className="my-5 py-1">
            <h1 className="my-5 p-5 text-center">NO Course Found</h1>
          </div>

        )
       
    }
   
   </>
    
  );
};

export default ProductDetails;
