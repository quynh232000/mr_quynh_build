


import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { NextArrow, PrevArrow } from "../../../components/slick";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function AwardsSection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
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
   const dataDB = useSelector((state) => state.get_data.data);
   if(!(dataDB?.data_info?.awards && dataDB?.data_info?.awards.length >0)) return null;
  return (
    <section
      id="awards"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        {/* <MotionWrapper> */}
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Awards
          </h2>
        {/* </MotionWrapper> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dataDB?.data_info?.awards?.map((award, index) => (
              <div key={award.name + award.date+index} className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full border shadow-lg rounded-lg cursor-pointer hover:-translate-y-1 ">
                <div className="flex items-center mb-2">
                  <div
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-medium">{award.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  🏢 {award.location}
                </p>
                <div className="flex flex-col space-y-2 mt-auto">
                  
                  <motion.span
                    className="text-xs text-muted-foreground/80 bg-background/50 px-2 py-1 rounded-md w-fit line-clamp-2 h-[46px]"
                    whileHover={{ scale: 1.05 }}
                  >
                   
                    🌎{award.content}
                  </motion.span>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
                      📅 {award.date}
                    </span>
                    <motion.span
                      className="text-xs px-2 py-1 bg-purple-500/10 group rounded-full relative"
                      whileHover={{ scale: 1.05 }}
                    >
                     See
                     <a className=" absolute z-50  right-0 top-[100%] w-[260px] h-[160px] hidden group-hover:block border rounded-lg bg-white shadow-lg">
                       <Slider {...settings}>
                        {award?.images?.split('|')?.map(img=>{
                          return <div key={img} className="w-[260px] h-[160px]  p-2 rounded-lg bg-white shadow-lg ">
                                  <img src= {img} alt="" className="w-full h-full object-cover rounded-lg hover:scale-110 hover:rounded-lg transition-all" />
                                </div>
                        })}
                       
                       </Slider>
                     </a>
                    </motion.span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
