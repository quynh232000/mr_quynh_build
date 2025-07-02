import { Link, useParams } from "react-router-dom";
import { Content, Images } from "./components/";
import { GrLinkPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ProjectDetailPage = () => {
  const { slug } = useParams();
  const dataDB = useSelector((state) => state.get_data.data);
  const [data, setData] = useState({});
  useEffect(() => {
    const data = dataDB?.projects?.find((item) => item.slug === slug);
    setData(data);
  }, [slug,dataDB]);
  return (
    <section className="relative pt-12 bg-blueGray-50 mb-20">
      <Link
        to={"/work"}
        className="fixed flex items-center justify-center hover:bg-blue-400 hover:text-yellow-400 transition-all duration-200 cursor-pointer top-3 z-30 left-3 rounded-full w-10 h-10 bg-gray-300"
      >
        <GrLinkPrevious></GrLinkPrevious>
      </Link>
      <div className="items-center flex flex-wrap">
        <Images data={data}/>
        <Content data={data}/>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
