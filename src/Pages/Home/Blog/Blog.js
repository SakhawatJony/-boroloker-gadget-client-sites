import React from 'react';
import img1 from '../../../Images/blogImg/blog-img-1.jpg';
import img2 from '../../../Images/blogImg/blog-img-2.jpg';
import img3 from '../../../Images/blogImg/blog-img-3.jpg';
import img4 from '../../../Images/blogImg/blog-img-4.jpg';
import img5 from '../../../Images/blogImg/blog-img-5.jpg';
import img6 from '../../../Images/blogImg/blog-img-6.jpg';
import DiscountCoupon from '../DiscountCoupon/DiscountCoupon';


const Blog = () => {
    const blogDatas = [

        {
            id: 1,
            comment: "6 Comments",
            title: "Reprehenderit Non Esse Anim Laboris Reprehenderit Officia",
            des: "irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo...",
            more: 'View More',
            img: img1

        },
        {
            id: 2,
            comment: "8 Comments",
            title: "Aliquip Duis Nostrud Ex Cillum Laborum Adipisicing",
            des: "adipisicing dolor esse voluptate occaecat laborum fugiat adipisicing laboris id cupidatat deserunt exercitation et velit consectetur eiusmod...",
            more: 'View More',
            img: img2

        },
        {
            id: 3,
            comment: "14 Comments",
            title: "Consequat Qui Non Irure Mollit Laboris Id",
            des: "incididunt nisi minim elit occaecat nostrud do non commodo commodo magna est et ex consequat amet fugiat aute magna reprehenderit...",
            more: 'View More',
            img: img3

        },
        {
            id: 4,
            comment: "2 Comments",
            title: "Esse Est In Mollit Nostrud Adipisicing Duis",
            des: "veniam mollit cillum aliquip quis proident cupidatat aute do cupidatat magna non ea laborum pariatur dolor sit anim et duis duis ut cupidatat...",
            more: 'View More',
            img: img4

        },
        {
            id: 5,
            comment: "20 Comments",
            title: "Eiusmod Elit Deserunt Eiusmod Ea Velit Quis",
            des: "nisi anim culpa nisi ullamco est laborum reprehenderit proident ex anim quis adipisicing tempor officia nulla deserunt ex duis consequat laboris...",
            more: 'View More',
            img: img5

        },
        {
            id: 6,
            comment: "10 Comments",
            title: "Lorem Culpa Qui Proident Est Mollit Officia",
            des: "ut sit velit esse laborum ad dolor voluptate nostrud dolore labore ipsum voluptate labore mollit exercitation veniam pariatur ipsum eiusmod irure",
            more: 'View More',
            img: img6

        }
    ]
    return (
        <>
            <section className='mx-20'>
                <div className='text-2xl justify-center mt-12 text-center font-bold'>
                    <h1>Our Blogs</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-5 mt-10'>
                    {blogDatas.map((blogdata) => (
                        <div
                            key={blogdata.id}
                            blogdata={blogdata}>

                            <div className="card border">
                                <img className="rounded-t-xl" src={blogdata.img} alt="car!" />
                                <div className='flex gap-9 ml-5 mt-6'>
                                    <p>By Admin </p>
                                    <p>{blogdata.comment}</p>
                                </div>
                                <div className='ml-5'>
                                    <h2 className="card-title hover:text-blue-600 mt-3">{blogdata.title}</h2>
                                    <p className='my-5'>{blogdata.des}</p>
                                    <p className='text-xl mb-4 cursor-pointer'>View More  --{'>'}</p>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
            <DiscountCoupon></DiscountCoupon>

        </>

    );
};



export default Blog;