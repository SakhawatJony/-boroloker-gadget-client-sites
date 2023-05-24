import React from 'react';
import bgimg from '../../../../Images/about/background-24.jpg'
const Banner = () => {
    return (
        <section id='bg-banner' style={{
            background: `url(${bgimg})`,
            bacgroundSize: "cover",
            backgroundImage: "fiext",

        }}>
            <div
                style={{ height: "600px", color: "white", }}
                className="text-white pt-52 items-center"
            >
                <h1 className="text-6xl font-bold text-center">WE ARE BROLOKER GADGET</h1>
                <p className="text-center text-1xl mt-4">
                    In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. <br /> Proin pharetra elit at feugiat commodo vel placerat <br /> tincidunt sapien nec
                </p>
            </div>
        </section>
    );
};

export default Banner;