/* eslint-disable react/jsx-no-comment-textnodes */

const Product = ({ product }) => {
  const { id, title, description, img, price } = product;


  return (
    <>
      <div
        style={{ border: "1px solid lime" }}
        className="card w-96 bg-base-100 shadow-xl mt-6"
      >
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            <span className="text-lime-500">Product Name:</span>
            {title}
          </h2>
          <p className="font-bold">
            <span className="text-lime-500"> Price:</span> {price}
          </p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-lime-500 border-none">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
