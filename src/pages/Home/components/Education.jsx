import { useSelector } from "react-redux";

const Education = () => {
   const dataDB = useSelector((state) => state.get_data.data);
 if(!(dataDB?.data_info?.educations && dataDB?.data_info?.educations.length >0)) return null;
  return (
    <div className=" lg:mt-10">
      <div className="flex justify-center dark:text-white mb-10 items-center">
        <div className="xl:w-1/2 ">
          <h2 id="education" className="text-center text-3xl font-semibold mb-2" data-aos="fade-up" data-aos-delay="100"  >Education</h2>
          <p className="text-gray-500 text-center text-sm" data-aos="fade-up" data-aos-delay="400" >
           Where I built core knowledge and cultivated a lifelong passion for learning.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white dark:bg-[#1e2329]" data-aos="fade-up" data-aos-delay="600">
          {dataDB?.data_info?.educations?.map(item=>{
            return <div key={item?.time??''}>
            <ul className="rounded-md shadow-md dark:bg-[#1e2329]  mt-3 p-3">
            <li className="text-xs uppercase text-gray-400 border-b border-gray border-solid py-2 px-5 mb-2">
              {item.time}
            </li>
            <li className="lg:grid lg:grid-cols-10 gap-4 justify-center items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2a2e34] duration-150 transition-all">
              <div className="flex justify-center items-center">
                <img
                  className="!w-20 flex-shrink-0 h-20 rounded-full object-cover"
                  src={item.logo}
                  alt=""
                />
              </div>
              <div className="lg:col-start-2  lg:col-end-11 lg:pl-8 lg:border-l-2 border-solid border-gray">
                <h3 className="text-gray-900 dark:text-white text-center lg:text-start mt-5 lg:mt-0 font-medium text-md">
                  {item.name}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 text-center lg:text-start mt-1 font-regular ">
                  {item.content}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-start mt-1 text-sm font-regular ">
                  {item.address}
                </p>
              </div>
            </li>
            
          </ul>
            </div>
          })}
          

         

          
        </div>
      </div>
    </div>
  );
};

export default Education;
