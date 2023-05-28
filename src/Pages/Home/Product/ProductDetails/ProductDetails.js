import React from 'react';
import img1 from '../../../../Images/pdetails/product-preview-10.png';
const ProductDetails = () => {
<<<<<<< HEAD
  const { serviceId } = useParams();
  const [products, setProducts] = useState([])


  useEffect(() => {
    const url = `http://localhost:5000/products/${serviceId}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));

  }, [])
=======
>>>>>>> 981f985e8e647a10445d6f9fb06d7de58227e1ee
  return (
    <section className='grid md:grid-cols-2 grid-cols-1 mt-7 mb-5'>
      <div>
        <img src={img1} alt="" />
      </div>
      <div className='mt-12 mx-3'>
        <p className='text-sm'>SMART WATCHES</p>
        <h1 className='text-3xl'>WATCH 42MM  SMARTWATCH</h1>
        <div className='mt-4 md:flex gap-32'>
          <p>PRICE: <span className='text-green-300 font-bold'> $225.00</span></p>
          <p> 128 Reviews</p>
        </div>
        <div className='mt-5 md:flex gap-32 '>
          <p>ITEM NO: <span className='font-bold'>127-#5238</span></p>
          <p>AVAILABLE: <span className='font-bold'>YES</span> </p>
        </div>
        <p className='mt-5'>Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet <br /> mattis. Integer in ipsum vestibulum, molestie arcu ac, <br /> efficitur tellus. Phasellus id vulputate erat.</p>
        <div className='mt-5 md:flex gap-10'>
          <p className='text-xl font-bold'>SIZE:</p>
          <div className="flex-none input input-bordered w-full text-end max-w-xs">

            <ul type="text" className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <a>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-base-200">
                  <li><a>Volvo</a></li>
                  <li><a>Saab</a></li>
                  <li><a>Mercedes</a></li>
                  <li><a>Audi</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-5 md:flex gap-10'>
          <h1 className='text-xl font-bold'>COLOR:</h1>
          <div className=' size-1 flex gap-1'>
            <div className='entry cursor-pointer bg-red-600 h-5 w-5'></div>
            <div className='entry cursor-pointer bg-green-600 h-5 w-5'></div>
            <div className='entry cursor-pointer bg-yellow-600 h-5 w-5'></div>
            <div className='entry cursor-pointer bg-emerald-500 h-5 w-5'></div>
            <div className='entr  cursor-pointer bg-slate-200 h-5 w-5'></div>
            <div className='entry cursor-pointer bg-indigo-800 h-5 w-5'></div>
            <div className='entry bg-yellow-800 h-5 w-5'></div>

          </div>
        </div>
        <div className='mt-5 md:flex gap-10'>
          <h1 className='text-xl font-bold'>QUNTITY:</h1>
          <div className='border w-60 rounded-full ml-3 '>
            <div className='ml-12 flex gap-5'>
              <span className='border-r-2 border-gray-500 text-3xl fot-bold pr-4 cursor-pointer'>-</span>
              <span className='px-2 border-gray-500 text-center text-2xl font-bold'>1</span>
              <span className='border-l-2 border-gray-500 pl-4 text-2xl font-bold cursor-pointer'>+</span>
            </div>
          </div>
        </div>
        <div className='gap-4  mt-8'>
          <button className='btn w-full md:w-72 md:mr-2'>Add to Cart</button>
          <button className='btn w-full md:w-72 mt-3'>ADD TO FAVOURITES</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;