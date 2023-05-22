import React from 'react';
import HeadPhone from '../../../Images/product-preview-12.png';
import "./SpecialOffer.css"

const SpecialOffers = () => {
    return (
        <div>
            <div className="text-center mt-20">
                <p className='text-1' >SPECIAL OFFERS</p>
                <h1 className='font-bold text-2xl'>CHOOSE THE BEST</h1>
            </div>
            <div className='carousel'>
                <div className='grid md:grid-cols-2 mt-9 carousel-item' id='item1'>
                    <div>
                        <div id="bg-offer-img"  >
                            <img className='headphone' src={HeadPhone} alt="headphone" />
                        </div>
                    </div>
                    <div className='px-20'>
                        <div className='text-3xl font-bold'>
                            HEADPHONES KLM
                            <span className="text-green-500">
                                +</span><br />
                            LEATHER CASE
                            <span className="text-green-500">+</span>
                            FREE <br /> DELIVERY

                            <p className='text-xl mt-3'>BEST PRICES: <span className='text-green-400'> $195.00</span></p>
                        </div>

                        <div className='flex gap-7 mt-8'>
                            <p className='text-center ring-1 w-16 h-20 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Day</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Hours</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Minutes</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Seconds</p>

                        </div>
                        <div className='mt-8'>
                            <p>Present nec finibus massa. Phasellus id auctor
                                <br /> blacus, at iaculis lorem. Donec quis arcu elit.
                                <br /> In vehicula purus sem, eu mattis est lacinia sit amet.</p>
                        </div>
                        <div className='flex gap-8 mt-8'>
                            <button class="btn bg-lime-700 rounded-full w-52">LEARNE MORE</button>
                            <button class="btn btn-slate-800 rounded-full  w-52">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 mt-9 carousel-item' id='item2'>
                    <div>
                        <div id="bg-offer-img"  >
                            <img className='headphone' src={HeadPhone} alt="headphone" />
                        </div>
                    </div>
                    <div className='px-20'>
                        <div className='text-3xl font-bold'>
                            HEADPHONES KLM
                            <span className="text-green-500">
                                +</span><br />
                            LEATHER CASE
                            <span className="text-green-500">+</span>
                            FREE <br /> DELIVERY

                            <p className='text-xl mt-3'>BEST PRICES: <span className='text-green-400'> $195.00</span></p>
                        </div>

                        <div className='flex gap-7 mt-8'>
                            <p className='text-center ring-1 w-16 h-20 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Day</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Hours</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Minutes</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Seconds</p>

                        </div>
                        <div className='mt-8'>
                            <p>Present nec finibus massa. Phasellus id auctor
                                <br /> blacus, at iaculis lorem. Donec quis arcu elit.
                                <br /> In vehicula purus sem, eu mattis est lacinia sit amet.</p>
                        </div>
                        <div className='flex gap-8 mt-8'>
                            <button class="btn bg-lime-700 rounded-full w-52">LEARNE MORE</button>
                            <button class="btn btn-slate-700 rounded-full w-52">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 mt-9 carousel-item' id='item3'>
                    <div>
                        <div id="bg-offer-img"  >
                            <img className='headphone' src={HeadPhone} alt="headphone" />
                        </div>
                    </div>
                    <div className='px-20'>
                        <div className='text-3xl font-bold'>
                            HEADPHONES KLM
                            <span className="text-green-500">
                                +</span><br />
                            LEATHER CASE
                            <span className="text-green-500">+</span>
                            FREE <br /> DELIVERY

                            <p className='text-xl mt-3'>BEST PRICES: <span className='text-green-400'> $195.00</span></p>
                        </div>

                        <div className='flex gap-7 mt-8'>
                            <p className='text-center ring-1 w-16 h-20 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Day</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Hours</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Minutes</p>
                            <p className='text-center ring-1 w-16 ring-slate-300 rounded-full'><span className='text-2xl'>0</span><br /> Seconds</p>

                        </div>
                        <div className='mt-8'>
                            <p>Present nec finibus massa. Phasellus id auctor
                                <br /> blacus, at iaculis lorem. Donec quis arcu elit.
                                <br /> In vehicula purus sem, eu mattis est lacinia sit amet.</p>
                        </div>
                        <div className='flex gap-8 mt-8'>
                            <button class="btn bg-lime-700 rounded-full w-52 border-none">LEARNE MORE</button>
                            <button class="btn btn-slate-800 rounded-full w-52">ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn radio btn-xs"></a>
                <a href="#item2" className="btn radio btn-xs"></a>
                <a href="#item3" className="btn  radio btn-xs"></a>
            </div>
        </div>

    );
};

export default SpecialOffers;