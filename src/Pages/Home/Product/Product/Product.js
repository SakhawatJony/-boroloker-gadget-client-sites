/* eslint-disable react/jsx-no-comment-textnodes */

import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, description, img, price } = product;

  // const navigate = useNavigate();


  // const navigateToServiceDetails = id => {
  //   navigate(`/product/${id}`);
  // }


  return (
    <>
      <div
        style={{ border: "1px solid lime",height:'400px' }}
        className="card w-96 bg-base-100 shadow-xl mt-6"
      >
        <figure>
          <img  className="" style={{height:'100%',width:'80%'}}  src={img} alt="SmartPhone" />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            <span className="text-lime-500">Product Name:</span>{title}
          </h2>
          <p className="font-bold">
            <span className="text-lime-500"> Price:</span> {price}
          </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <Link to={`/product/${id}`}>  <button className="btn bg-lime-500 border-none">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
