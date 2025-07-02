import Card from "../../../components/commons/Card";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../../components/slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Work = () => {
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
    <div className="px-5 lg:mt-10 ">
      <div className="flex dark:text-white  justify-center items-center">
        <div className="xl:w-1/2">
          <h2
            id="work"
            data-aos="fade-up"
            className="text-center text-3xl font-semibold mb-2"
          >
            Projects
          </h2>
          <p
            className="text-gray-500 text-center text-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
           Each project is a story of learning, problem-solving, and growth.
          </p>
        </div>
      </div>
      <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
        {data?.projects?.length > 0 && (
          <Slider {...settings}>
            {data?.projects?.map((item, index) => {
              return <Card key={index} data={item}></Card>;
            })}
          </Slider>
        )}
        {/* <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2"></div> */}
        <div className="flex justify-center mt-10">
          <Link to="/work" className="mt-5 rounded-md bg-yellow-500 p-2 px-5  text-white">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
