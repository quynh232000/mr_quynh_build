import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/slick";
import { images } from "../../../assets/data11/images";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = useSelector((state) => state.get_data.data);
  return (
    <div className="lg:mt-20 pt-10">
      <div className="flex justify-center dark:text-white mb-10 items-center">
        <div className="xl:w-1/2 ">
          <h2
            id="education"
            className="text-center text-3xl font-semibold mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Social Life
          </h2>
          <p
            className="text-gray-500 text-center text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
          Beyond work—this is where I build relationships, share passions, and stay inspired.
          </p>
        </div>
      </div>
      {images.length > 0 && (
        <Slider {...settings}>
          {data?.images?.map((item, index) => (
            <div key={index} data-aos="fade-up" className="p-5">
              <figure className="rounded-2xl bg-white dark:bg-[#1e2329] dark:text-white overflow-hidden p-6 shadow-lg ring-1 ring-gray-900/5">
                {item.type == "image" ? (
                  <img
                    className="h-[315px] w-full object-cover rounded-lg hover:scale-105 transition-all hover:shadow-xl shadow-purple-500"
                    src={item.image}
                    alt="image"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="315"
                    src={item.image}
                    className="rounded-lg hover:scale-105 transition-all hover:shadow-xl shadow-purple-500"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                )}
              </figure>
              {/* More testimonials... */}
            </div>
          ))}
        </Slider>
      )}
      <div className="flex justify-center mt-10">
        <Link to="/album" className="mt-5 rounded-md bg-yellow-500 p-2 px-5  text-white">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
