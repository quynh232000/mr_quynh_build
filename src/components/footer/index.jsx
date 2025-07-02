
// import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { dataSocailIcons } from "../menuLeft";
import { Link } from "react-router-dom";
const Footer = () => {
  const dataDB = useSelector((state) => state.get_data.data);
  const extractIframeSrc = (htmlString) => {
  const match = htmlString.match(/src="([^"]+)"/);
          return match ? match[1] : null;
        };

  return (
    <footer>
      <div className="mt-20" data-aos="zoom-in-down">
        
        <iframe
          src={extractIframeSrc(dataDB?.data_info?.map_address ?? '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14351.495813306548!2d106.59290939569469!3d10.764360898092011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c5418e29ea1%3A0x5d0d5c26049741ea!2zQuG7h25oIHZp4buHbiBRdeG6rW4gQsOsbmggVMOibg!5e1!3m2!1svi!2s!4v1750600411328!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')}
          width={"100%"}
          height={250}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="container flex dark:text-white flex-col mx-auto">
        <div className="flex flex-col items-center w-full mt-20">
          <span className="mb-8 font-bold text-3xl" data-aos="fade-down">
            {dataDB?.data_info.name ?? '_'}
          </span>
          <div
            className="flex flex-col items-center gap-6 mb-8"
            data-aos="fade-down"
          >
            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
             
              <Link
                to={"home"}
                className="text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                to={"work"}
                className="text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Work
              </Link>
              <Link
                to={"education"}
                className="text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white"
              >
                Education
              </Link>
              <Link to={"/blogs"} className="text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white">
                Blog
              </Link>
              <Link to={"/album"} className="text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white">
                Album
              </Link>
            </div>
            <div className="flex items-center gap-8">
               {
                  dataDB?.data_info?.socials.map(item =>{
                    return  <li key={item.link+ Math.random()} className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                          <Link to={item.link}>
                            {dataSocailIcons[item.type]}
                          </Link>
                        </li>
                        
                  })
                }
            </div>
          </div>
          <div className="flex items-center" data-aos="fade-down">
            <p className="text-base font-normal leading-7 text-center text-grey-700">
              2025 © Created by{" "}
              <span className="text-yellow-500"> {dataDB?.data_info.name ?? '_'}</span>
            </p>
          </div>
          {/* <div
            className="flex items-center"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <p className="text-base font-normal flex gap-2 items-center leading-7 text-center text-grey-700">
              <FiFigma className="" color="red"></FiFigma>
              Design by
              <a
                className="text-blue-500"
                href="https://www.figma.com/community/file/966954657029620690"
              >
                Shakil Khan and Zelal Hossain
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
