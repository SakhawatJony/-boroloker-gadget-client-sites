/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import icons_1 from "../../../Images/icons/icons1.png";
import icons_2 from "../../../Images/icons/icons2.png";
import icons_3 from "../../../Images/icons/icons3.png";
import icons_4 from "../../../Images/icons/icons4.png";

const Contact = () => {
  return (
    <>
      <main className="mt-6">
        {/* contact us header section  */}
        <div
          id=""
          style={{ height: "500px", backgroundColor: "black", color: "white" }}
          className="text-white pt-40 items-center"
        >
          <h1 className="text-5xl font-bold text-center">CONTACT US</h1>
          <p className="text-center text-1xl">
            In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum.{" "}
            <br /> Proin pharetra elit at feugiat commodo vel placerat tincidunt
            sapien nec
          </p>
        </div>

        <section>
          <div className="text-center font-medium">
            <h1 className="">OUR CONTACTS</h1>
            <p>WE READY FOR YOUR QUESTIONS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">ADDRESS</h2>
                <p>1st, new york, usa</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Phone</h2>
                <p>+3 (523) 555 123 8745</p>
                <p>+3 (523) 555 758 5238</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Email</h2>
                <p>office@borolokerGadget.com</p>
              </div>
            </div>
            <div className="card w-96 bg-base-100">
              <figure className="">
                <img src={icons_4} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">FOLLOW US</h2>
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
          <section className="mx-14 mb-2">
            <span>
              // eslint-disable-next-line jsx-a11y/iframe-has-title,
              jsx-a11y/iframe-has-title
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8660014717!2d90.25446582657518!3d23.780863189968727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1684691472759!5m2!1sen!2sbd"
                style={{ width: "100%", height: "450px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </span>
          </section>
          <section className="mx-14 items-center">
            <h1 className="text-center font-bold text-xl">HAVE A QUESTIONS?</h1>
            <div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-96 mx-5"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-96 block "
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-96 block"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-md w-96  mx-5"
                />
              </div>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Contact;
