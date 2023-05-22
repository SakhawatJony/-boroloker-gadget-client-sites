/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import icons_1 from "../../../Images/icons/icons1.png";
import icons_2 from "../../../Images/icons/icons2.png";
import icons_3 from "../../../Images/icons/icons3.png";
import icons_4 from "../../../Images/icons/icons4.png";
import Banner from "../../../Images/background-26.jpg";
import './Contact.css'

const Contact = () => {



  return (
    
    <>
      <main className="mt-6">
        {/* contact us header section  */}
      <section style={{
            background: `url(${Banner})`,
            bacgroundSize:"cover"
        }}>
      <div 
          id=""
          style={{ height: "500px",  color: "white",}}
          className="text-white pt-40 items-center"
        >
          <h1 className="text-6xl font-bold text-center">CONTACT US</h1>
          <p className="text-center text-1xl mt-4">
            In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum.{" "}
            <br /> Proin pharetra elit at feugiat commodo vel placerat tincidunt
            sapien nec
          </p>
        </div>
      </section>

        <section className="">
          <div className="text-center mt-6">
            <h1 style={{color:'#555'}} className="text-center font-medium mt-2">OUR CONTACTS</h1>
            <p style={{color:'#343434'}} className="text-4xl font-bold mt-3  ">WE READY FOR YOUR QUESTIONS</p>
          </div>

          <div style={{color:'#343434',marginTop:'50px'}}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-10">
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_1} alt="address" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-bold">ADDRESS</h2>
                <p>1st, new york, usa</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_2} alt="Phone" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-bold">Phone</h2>
                <p>+3 (523) 555 123 8745</p>
                <p>+3 (523) 555 758 5238</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_3} alt="Email" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-bold">Email</h2>
                <p>office@borolokerGadget.com</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_4} alt="Follow" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-bold">FOLLOW US</h2>
                <p className="">
                  <i class="fab fa-facebook ps-1"></i>
                  <i class="fab fa-twitter ps-2"></i>
                  <i class="fab fa-linkedin-in ps-2"></i>
                  <i class="fab fa-google-plus-g ps-2"></i>
                </p>
              </div>
            </div>
          </div>
          {/* maps sections  */}
          <section className="mx-14 mb-2 m-auto">
            <span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8660014717!2d90.25446582657518!3d23.780863189968727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1684691472759!5m2!1sen!2sbd"
                style={{ width: "100%", height: "450px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </section>
          <section id="main-input">
            <h1 style={{color:"#343434"}} className="text-center font-bold text-xl mt-5">HAVE A QUESTIONS?</h1>
            <div id="up-input" style={{marginLeft:"220px"}} className=" mt-5">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-md w-96 rounded-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-md w-96 block mx-5 rounded-full"
                />
              </div>
              <div className="flex mt-5">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered input-md w-96 block rounded-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered input-md w-96  mx-5 rounded-full"
                />
              </div>
           
              <textarea 
              id="area"
              style={{width:"785px"}}
                placeholder="Your Message"
                className="textarea textarea-bordered textarea-lg w-full mt-3 mb-2 "
              ></textarea>  
            </div>
            <div className="text-center mb-3">
            <button  style={{background:'#b8cd06'}} className="btn  border-none rounded-full">Send Meassage </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Contact;
