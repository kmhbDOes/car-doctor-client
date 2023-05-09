import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div
      className="carousel w-full h-full 
    "
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-0 md:space-y-7 pl-12 w-80 md:w-1/2">
            <h2 className="text-xl md:text-6xl text-center md:text-left font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-center md:text-left">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="">
              <button className="btn btn-primary mr-5 w-24 md:w-44">
                Discover More
              </button>
              <button className="btn  w-24 md:w-44 border-2 border-white btn-secondary bg-orange-500 hover:bg-orange-700 text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center md:justify-end transform translate-y-14 md:-translate-y-1/2 left-5 right-5 bottom-0 md:bottom-14">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        <div className="absolute flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-lg flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-14">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-14">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        <div className="absolute rounded-lg flex items-center h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-14">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
