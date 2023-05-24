import React from 'react';
import img1 from '../../../../Images/about/thumbnail-40.jpg';
import img2 from '../../../../Images/about/thumbnail-41.jpg';
import img3 from '../../../../Images/about/thumbnail-42.jpg';
import img4 from '../../../../Images/about/thumbnail-43.jpg';

const OurTem = () => {

    const oursTemDatas = [{
        id: 1,
        title: 'CO_FOUNDER',
        name: 'MONICA RAJAN',
        des: 'Mallis nec consequat at in feugiat molestie tortor a malesuada',
        img: img1,
    },
    {
        id: 2,
        title: 'MARKETING DIRECTOR',
        name: 'ELLA FIDGER',
        des: 'Mallis nec consequat at in feugiat molestie tortor a malesuada',
        img: img2,
    },
    {
        id: 3,
        title: 'TECH DIRECTOR',
        name: 'CHRIS SOMER',
        des: 'Mallis nec consequat at in feugiat molestie tortor a malesuada',
        img: img3,
    },
    {
        id: 4,
        title: 'CO_FOUNDER',
        name: 'MONICA RAJAN',
        des: 'Mallis nec consequat at in feugiat molestie tortor a malesuada',
        img: img4,
    },


    ]
    return (
        <section className='mt-40'>
            <div className='text-center'>
                <p>OUR TEAM</p>
                <h1 className='text-5xl font-bold'>MEET WITH PROFESSIONALS</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 mt-20 mx-10'>
                {oursTemDatas.map((oursItem) => (
                    <div key={oursItem.id}
                        oursItem={oursItem}>
                        <div>
                            <div className="card w-96">
                                <figure><img src={oursItem.img} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{oursItem.title}</h2>
                                    <p>{oursItem.name}</p>
                                    <p>{oursItem.des}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </section>
    );
};

export default OurTem;