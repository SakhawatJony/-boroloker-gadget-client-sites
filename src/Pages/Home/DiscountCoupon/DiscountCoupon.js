import React from 'react';
import dbg from '../../../Images/blogImg/discount-banner-1.jpg';

const DiscountCoupon = () => {
    return (
        <section style={{
            background: `url(${dbg})`,
            bacgroundSize: "cover"
        }}>
            <div
                style={{ height: "300px", }}
                className=" pt-20 mt-24 items-center"
            >
                <div className='text-center items-center justify-center'>
                    <h1 className="font-bold lg:text-4xl  text-black text-3xl">Get<span className='text-yellow-400'> 20% </span> Off Discount Coupon</h1>
                    <p className='text-black text-xl mt-3'>by Subscribe our Newsletter</p>
                    <div className="form-control my-10">
                        <label className="input-group text-center justify-center">
                            <input type="text" name='email' placeholder="@ EMAIL ADDRESS" className="input text-black bg-slate-100 lg:w-96 w-72" />
                            <button className='btn bg-yellow-300 hover:bg-yellow-400 text-black'>Get the Coupon</button>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountCoupon;