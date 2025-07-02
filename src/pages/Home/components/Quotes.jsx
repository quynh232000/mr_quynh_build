

import { useSelector } from "react-redux";
import { NextArrow, PrevArrow } from "../../../components/slick";
import Slider from "react-slick";

const Quotes = () => {

const data = useSelector((state) => state.get_data.data);
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
  return (
    <div>
     
      <div className="flex justify-center dark:text-white mb-10 items-center">
        <div className="xl:w-1/2 ">
          <h2 id="education" className="text-center text-3xl font-semibold mb-2" data-aos="fade-up" data-aos-delay="100"  >What people say about me</h2>
          <p className="text-gray-500 text-center text-sm" data-aos="fade-up" data-aos-delay="400" >
           Real feedback from those I've had the pleasure of working with.
          </p>
        </div>
      </div>
      <div className="mb-5 mt-20 w-full" >

        <Slider {...settings}>
          {data?.data_info?.reviews.map(item=>{
            return (
              <div key={item.username ?? ''}  className="py-12 w-full   p-5"> 
                <div
                  className=" rounded-lg dark:bg-[#1e2329] bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
                  style={{ maxWidth: 500 }}
                  data-aos="fade-up"
                >
                  <div className="w-full pt-1 pb-5">
                    <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                      <img
                        className=" rounded-full bg-gray-50"
                        src={item.avatar}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full mb-10 min-h-[90px] flex flex-col justify-center">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3 ">
                      “
                    </div>
                      <p className="text-sm text-gray-600 dark:text-white text-center px-5">
                        {item.content}
                      </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                      ”
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 text-center">@{item.username}</p>
                  </div>
                </div>
              </div>
            )
          })}

        </Slider>
      
      
      </div>
    </div>
  );
};

export default Quotes;
