import React from "react";
import ServiceBanner from "../../Images/background-22.jpg";
import ServiceBannerMidle from "../../Images/background-23.jpg";
import "./Service.css";
import FinshedBanner from "../../Images/background-102.png";
import CarosoleBackground1 from '../../Images/background-55005.png'
import CarosoleBackground2 from '../../Images/background52545.png'

const Services = () => {
  const SubService = [
    {
      id: 1,
      title: "DISCOUNT",
      name: "LOYALITY SYSTEM",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
    {
      id: 2,
      title: "24/7",
      name: "CUSTOMER SUPPORT",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
    {
      id: 3,
      title: "DELIVERY SYSTEM",
      name: "WHOLE WORLD",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
    {
      id: 4,
      title: "SMART SUPPORT",
      name: "FOR EVERY PROBLEM",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
    {
      id: 5,
      title: "QUALITY",
      name: "BEST MATERIALS",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
    {
      id: 6,
      title: "PROFESSIONAL STAF",
      name: "OVER 5,000 EMPLOYERS",
      des: "Mollis nec consequat at In feugiat molestie tortor a malesuada etiam a venenatis",
    },
  ];
  const MainServices = [
    {
      id: 1,
      name: "PHASELLUS RHONCUS IN NUNC",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-22.png",
    },
    {
      id: 2,
      name: "AMET MATTIS MOLESTIE NEC TORTOR",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-23.png",
    },
    {
      id: 3,
      name: "MOLESTIE NEC TORTOR QUIS",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-24.png",
    },
    {
      id: 4,
      name: "RHONCUS IN NUNC SIT",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-25.png",
    },
    {
      id: 5,
      name: "MOLESTIE NEC TORTOR QUIS",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-26.png",
    },
    {
      id: 6,
      name: "LOREM MOLESTIE NEC TORTOR QUIS",
      des: "Etiam mollis tristique mi ac ultrices. Morbi vel neque eget lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper ante vehicula",
      img: "http://unionagency.one/exzo/img/icon-27.png",
    },
  ];
  return (
    <main>
      {/* service top section  */}
      <section
        style={{
          background: `url(${ServiceBanner})`,
          bacgroundSize: "cover",
          height: "500px",
        }}
      >
        <div
          style={{ paddingTop: "200px" }}
          className="text-center text-white items-center justify-center"
        >
          <h1 className="text-5xl font-bold">OUR SERVICES</h1>
          <p className="pt-3">
            In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum.{" "}
            <br /> Proin pharetra elit at feugiat commodo vel placerat tincidunt
            sapien nec
          </p>
        </div>
      </section>
      {/* service midle section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center">
          <div id="midle-service">
            <div className="text-white text-center">
              <span className="text-center">WE OFFER</span>
              <h1 className="text-3xl font-bold pt-3">CHOOSE THE BEST</h1>
              <p className="pt-5">
                Praesent nec finibus massa. Phasellus id auctor lacus, <br /> at
                iaculis lorem. Donec quis arcu elit. In vehicula purus sem
              </p>{" "}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-5 mx-5 mt-10">
              {SubService.map((service) => (
                <div key={service.id} service={service}>
                  <div className="p-5">
                    <span style={{ color: "#b8cd06" }}>{service.title}</span>
                    <h1 className="font-bold text-xl">{service.name}</h1>
                    <p style={{ color: "#888" }}>{service.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* our main service  */}
      <section className="mt-10">
        <div className="text-center p-5">
          <span style={{ color: "#888" }}>OUR SERVICES</span>
          <h1 className="text-5xl font-bold">WHAT WE DO</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12">
          {MainServices.map((main) => (
            <div key={main.id} main={main} className="card  bg-base-100">
              <figure className="px-10 pt-10">
                <img src={main.img} alt="" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="font-bold">{main.name}</h2>
                <p style={{ color: "#888" }}>{main.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* midle section end  */}

      {/* into section start */}

      <section>
        <div style={{height:'870px'}} className="carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="http://unionagency.one/exzo/img/background-18.jpg"
              alt="carosole"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3">
              <a href="#slide1" style={{marginTop:'500px'}} className="btn btn-circle">
                ❮
              </a>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center mx-8 w-full mb-20">
                <div className="mb-20 text-white ">
                <h1 className="text-white font-bold text-7xl uppercase"> choice of the professionals</h1>
                <p className="pt-7">
                  In feugiat molestie tortor a malesuada. Etiam a venenatis
                  ipsum. Proin pharetra elit at feugiat commodo vel placerat
                  tincidunt sapien nec
                </p>
                </div>
                <div>
                  <img style={{marginBottom:'312px'}} src={CarosoleBackground1} width={'100%'} height={'100%'} alt="" />
                </div>
              </div>
              <a href="#slide2" style={{marginTop:'500px'}}  className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="http://unionagency.one/exzo/img/background-18.jpg"
              alt="carosole"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3">
            <a href="#slide1" style={{marginTop:'500px'}} className="btn btn-circle">
                ❮
              </a>

             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center mx-8 w-full mb-20">
             <div>
                  <img style={{marginBottom:'312px'}} src={CarosoleBackground2} width={'100%'} height={'100%'} alt="" />
                </div>
                <div className="mb-20 text-white ">
                <h1 className="text-white font-bold text-7xl uppercase"> choice of the professionals</h1>
                <p className="pt-7">
                  In feugiat molestie tortor a malesuada. Etiam a venenatis
                  ipsum. Proin pharetra elit at feugiat commodo vel placerat
                  tincidunt sapien nec
                </p>
                </div>
                
              </div>

              
              <a href="#slide1" style={{marginTop:'500px'}} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* into section Ends */}
      {/* finshed section start  */}
      <section className="mt-10 mx-12">
        <div className="text-center">
          <h1 className="font-medium">OUR AWARD</h1>
          <h2 style={{ color: "#343434" }} className="text-5xl font-bold">
            BEST CUSTOMERS SUPPORT
          </h2>
          <span style={{ height: "50px", width: "50px" }} className="mt-10">
            <hr
              className="mt-5"
              style={{
                height: "2px",
                width: "100px",
                background: "#b8cd06",
                marginLeft: "570px",
              }}
            />
          </span>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center mt-12">
          <div>
            <img src={FinshedBanner} alt="" />
          </div>
          <div>
            <h1 style={{ color: "#343434" }} className="font-bold text-xl">
              QUISQUE SCELERISQUE LEO NISL
            </h1>
            <p className="pt-10" style={{ color: "#888" }}>
              Aenean facilisis, purus ut tristique pulvinar, odio neque commodo
              ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet
              tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque
              ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor.
              Quisque commodo elit nulla, eu semper quam feugiat et. Integer
              quam velit, suscipit eget consectetur ac, molestie eu diam.
            </p>
            <p style={{ color: "#888" }} className="pt-5">
              Fusce semper rhoncus dignissim. Curabitur dapibus convallis
              varius. Suspendisse sem urna, ullamcorper eget porttitor ut,
              sagittis in justo. Vestibulum egestas nulla nec purus porttitor
              fermentum. Integer mauris mi, viverra eget nibh at, efficitur
              consectetur erat. Curabitur et imperdiet enim.
            </p>
          </div>
        </div>
      </section>

      {/* finshed section Eands  */}
    </main>
  );
};

export default Services;
