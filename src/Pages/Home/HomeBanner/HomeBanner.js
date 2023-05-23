import React from 'react';
import Banner from '../../../Images/banner.png'
import Banner1 from '../../../Images/banner2.png'
import Banner2 from '../../../Images/banner3.png'
import Banner3 from '../../../Images/banner4.png'
import Banner4 from '../../../Images/banner5.png'
import Banner5 from '../../../Images/banner6.png'

const HomeBanner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src={Banner} className="max-w-sm rounded-lg" alt='' /> */}
        <div style={{height:'400px',width:'390px'}} className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Banner3} style={{height:'350px'}} className="max-w-sm rounded-lg" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide4" style={{background:'#b8cd06'}} className="btn border-none btn-circle text-white ps-2">❮</a> 
      <a href="#slide2" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={Banner5} style={{height:'350px'}} className="max-w-sm rounded-lg" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide1" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❮</a> 
      <a href="#slide3" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Banner4} style={{height:'350px'}} className="max-w-sm rounded-lg" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide2" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❮</a> 
      <a href="#slide4" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={Banner3} style={{height:'350px'}} className="max-w-sm rounded-lg" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide3" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❮</a> 
      <a href="#slide1" style={{background:'#b8cd06'}} className="btn  border-none btn-circle">❯</a>
    </div>
  </div>
</div>
        

        <div className='m-auto'> 
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