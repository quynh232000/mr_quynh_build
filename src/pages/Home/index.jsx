import Footer from "../../components/footer";
import { About, Education, Quotes, Review, Testimonial, Work } from "./components";
import { Element } from "react-scroll";
import AwardsSection from "./components/AwardSection";
import { FiHome, FiMessageCircle } from "react-icons/fi";
import { FaAward,  FaRegFileCode } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdRateReview, MdWorkOutline } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import Experience from "./components/Experience";



export const dataSectionsHome = [
    {
      name:'home',
      className:'bg-white   shadow-lg dark:bg-[#1e2329] rounded-b-lg px-10 pt-10 relative',
      element: <About />,
      icon:<FiHome color="parent"></FiHome>
    },
     {
      name:'experience',
      className:'pb-0 pt-10',
      element: <Experience />,
       icon:<MdWorkOutline  color="parent"></MdWorkOutline>
    },
     {
      name:'work',
      className:'pb-0 pt-10',
      element: <Work />,
       icon:<FaRegFileCode color="parent"></FaRegFileCode>
    },
     {
      name:'testimonials',
      className:'',
      element: <Testimonial />,
       icon:<FaChalkboardUser color="parent"></FaChalkboardUser>

       
    },
     {
      name:'education',
      className:'py-10',
      element: <Education />,
      icon: <PiStudentBold color="parent"></PiStudentBold>
    },
       {
      name:'awards',
      className:'py-10',
      element: <AwardsSection />,
      icon: <FaAward color="parent"></FaAward>
    },
     {
      name:'quotes',
      className:'',
      element: <Quotes />,
      icon: <FiMessageCircle color="parent"></FiMessageCircle>
    },
      {
      name:'reviews',
      className:'py-10',
      element: <Review />,
      icon: <MdRateReview color="parent"></MdRateReview>
      
    },
  ]
const HomePage = () => {

  
  // const dispatch = useDispatch();
  
  return (
    <div>
      {dataSectionsHome.map(item=>{
        return <div key={item.name ?? ''}>
        <Element
            key={item.name}
            name={item.name}
            id={item.name}
            className={item.className}
          >
            {item.element}
          </Element>
        </div>
      })}
     

      <Footer/>/
    </div>
  );
};

export default HomePage;
