
import icon1 from "../../assets/Icons.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaDownload,
  FaTiktok,
  FaBehance,
} from "react-icons/fa";
import Rangle from "../commons/Rangle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Darkmod } from "../commons";
import { useTime } from "../../hook";
export const dataSocailIcons = {
   facebook:  <FaFacebookF />,
   instagram:<FaInstagram />,
   youtube: <FaYoutube />,
   github: <FaGithub />,
   tiktok:<FaTiktok/>,
   behance:<FaBehance/>
   }
const MenuLeft = () => {
 const dataDB = useSelector((state) => state.get_data.data);
  const { hours, minutes, seconds } = useTime();
  return (
    <div
      data-aos="fade-right"
      className="bg-white dark:bg-[#1e2329] shadow-lg lg:w-[270px] overflow-y-auto px-3 mb-20 lg:mb-0 lg:h-screen lg:fixed relative"
    >

      <div className="flex justify-between absolute px-5 pt-2 left-0 right-0 top-[-40px]">
         
          <div className="mt-10 hidden font-bold  dark:text-white  lg:flex items-center justify-center">
            <div>
              {hours} : {minutes <= 9 ? "0" + minutes : minutes} :{" "}
              {seconds <= 9 ? "0" + seconds : seconds}
            </div>
          </div>
          <div className="mt-10 hidden  lg:flex items-center justify-center">
            <Darkmod></Darkmod>
          </div>
      </div>
      {/* avatar */}
      <div className="flex justify-center mt-12">
        <img className="w-24 h-24 shadow-lg rounded-full object-cover" src={dataDB?.data_info?.avatar} alt="" />
      </div>
      {/* name and link profile */}
      <div className="flex justify-center my-5">
        <div>
          <h2 className="text-center text-xl capitalize  dark:text-white font-semibold ">
            {dataDB?.data_info.name}
          </h2>
          <p className="text-[#767676] text-center mt-2 text-[14px] font-normal">
            {dataDB?.data_info.major} {dataDB?.data_info.position}
          </p>
          <div className="mt-5">
            <ul className="flex justify-between gap-5 items-center">
              {
                dataDB?.data_info?.socials.map(item =>{
                  return  <li key={item.link+ Math.random()} className="rounded-full flex justify-center items-center w-7 h-7 bg-yellow-500 text-white">
                        <Link to={item.link}>
                          {dataSocailIcons[item.type]}
                        </Link>
                      </li>
                      
                })
              }
             
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* my infomation  */}
      <div className=" my-5">
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Birthday: </p>
          <p className="">{dataDB?.data_info.birthday}</p>
        </div>
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Phone: </p>
          <p className=" text-sm">{dataDB?.data_info.phone}</p>
        </div>
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Freelance: </p>
          <p className=" text-green-500 text-sm"> {dataDB?.data_info?.freelance ?? 'Avaliable'}</p>
        </div>
        <div className="flex dark:text-white mb-3 justify-between items-center">
          <p className="w-max rounded-sm text-sm  px-2">Address: </p>
          <p className=" text-sm">{dataDB?.data_info.location} </p>
        </div>
      </div>
      {/* My Languages */}
      <hr />
      <div className="my-5">
        <h2 className="font-semibold dark:text-white">Languages</h2>
        {dataDB?.data_info.languages.map((item, index) => (
          <Rangle key={index} title={item.name} content={item.content}></Rangle>
        ))}
      </div>
      <hr />
      {/* Skills */}
      <div className="my-5 dark:text-white">
        <h2 className="font-semibold mb-5">Skills</h2>
       <div className="flex flex-col gap-5">
         {
          dataDB?.data_info.skills.map((item, index) => (
            <Rangle key={index} title={item.name} content={item.content}></Rangle>
          ))
        }
       </div>
      </div>
      <hr />
      {/* Extra Skills */}
      <div className="my-5">
        <h2 className="font-semibold dark:text-white">Extra Skills</h2>
        {dataDB?.data_info?.extra_skills?.map(item => {
          return (
            <div key={item??''} className="flex my-3   items-center gap-2">
          <img src={icon1} alt="" />
          <div className="text-sm text-gray-500">
            <p>{item}</p>
          </div>
        </div>
          )
        })}
        
        
        
      </div>
      {/* Download cv */}
      <hr />
      <div className="my-5 flex justify-center">
        <a
          target="blank"
         href={dataDB?.data_info?.cv?? ''} download={dataDB?.data_info?.cv?? ''}
          className="flex items-center gap-2 text-white bg-yellow-500 px-5 py-2 rounded-md hover:shadow-2xl hover:bg-yellow-400"
        >
          Download CV <FaDownload></FaDownload>
        </a>
      </div>
    </div>
  );
};

export default MenuLeft;
