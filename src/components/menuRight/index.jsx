
import { Link } from "react-scroll";
import { dataSectionsHome } from "../../pages/Home";
const MenuRight = () => {
  const listMenu = dataSectionsHome
  return (
    <div
      className="bg-white dark:bg-[#1e2329] lg:h-screen w-screen h-[70px]  fixed bottom-0 right-0 left-0 lg:left-auto lg:top-0 lg:w-[100px] lg:mr-10"
      data-aos="fade-left"
    >
      {/* Menu */}
      <div className="lg:mt-10 mt-3 pb-3 lg:pb-0 flex justify-center absolute overflow-y-auto top-0 left-0 right-0 bottom-0 items-center">
        <ul className="flex  lg:flex-col flex-row justify-center items-center gap-7 overflow-y-auto ">
          {listMenu.map(item=>{
            return  <li key={item.name??''} className="">
                <Link
                  spy={true}
                  activeClass="!bg-yellow-500 !text-white"
                  to={item.name}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer text-black flex justify-center items-center  w-10 h-10 bg-gray-200 rounded-full `}
                >
                 {item.icon}
                </Link>
            </li>
           
          })}
         
        
          
        </ul>
      </div>
    </div>
  );
};

export default MenuRight;
