import React from 'react';
import img1 from "../../../../Images/about/thumbnail-35.jpg"
import img2 from "../../../../Images/about/thumbnail-36.jpg"
import img3 from "../../../../Images/about/thumbnail-37.jpg"
const AboutUs = () => {
    const AboutusData = [
        {
            id: 1,
            name: "PHASELLUS RHONCUS IN NUNC SIT",
            des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
            img: img1,
        },
        {
            id: 2,
            name: "AMET MATTIS MOLESTIE NEC TORTOR QUIS",
            des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
            img: img2,
        },
        {
            id: 3,
            name: "MOLESTIE NEC TORTOR QUIS",
            des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
            img: img3,
        }
    ];

    return (
        <>
            <section>
                <div className='grid md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 mt-32 my-9 mx-20'>
                    <div className=''>
                        <p>About Us</p>
                        <h1 className='text-4xl my-5 font-bold'>WE LOVE MUSIC</h1>

                        <p>Praesent nec finibus massa. Phasellus id auctor lacus, <br />     at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</p>

                    </div>
                    <div>
                        <p>Aenean facilisis, purus ut tristique pulvinar, odio neque commodo ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor. Quisque commodo elit nulla, eu semper quam feugiat et. Integer quam velit, suscipit eget consectetur ac, molestie eu diam.</p><br />
                        <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, sagittis in justo. Vestibulum egestas nulla nec purus porttitor fermentum. Integer mauris mi, viverra eget nibh at, efficitur consectetur erat. Curabitur et imperdiet enim.</p>

                    </div>
                </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 mt-10 mx-10'>
                {AboutusData.map((abouts) => (
                    <div key={abouts.id} abouts={abouts}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={abouts.img} alt="aboutImg" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{abouts.name}</h2>
                                <p>{abouts.des}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default AboutUs;