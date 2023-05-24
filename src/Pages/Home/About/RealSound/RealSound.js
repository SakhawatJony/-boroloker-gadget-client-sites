import React from 'react';
import img1 from '../../../../Images/about/background-25.jpg';
import img2 from '../../../../Images/about/thumbnail-38.jpg';
import img3 from '../../../../Images/about/thumbnail-39.jpg';


const RealSound = () => {
    return (
        <section className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20'>
            <div>
                <img src={img1} alt="img1" />
            </div>
            <div className='mt-20'>
                <p>REAL SOUND</p>
                <h1 className='text-5xl mt-4 font-bold'>FEEL PERFECT BEAT</h1>
                <p className='my-10'>In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</p>

                <div className="card card-side bg-base-100 shadow-xl">
                    <img className='rounded-md' src={img2} alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title">PHASELLUS RHONCUS IN NUNC SIT</h2>
                        <p>Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-6">
                    <img className='rounded-md' src={img3} alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title">PHASELLUS RHONCUS IN NUNC SIT</h2>
                        <p>Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default RealSound;