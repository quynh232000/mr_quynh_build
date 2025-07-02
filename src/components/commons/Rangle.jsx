import PropTypes from "prop-types";
const Rangle = ({ title ,content}) => {
  return (
    <div className="">
      <div className=" dark:text-white text-gray-500 mt-2 rounded-full mb-3   w-full">
        <span className="border-b border-dashed pb-1 border-gray-200 text-sm font-semibold">{content}</span>
        </div>
      <div className="flex text-sm dark:text-white justify-between">
        <div className="flex flex-wrap gap-2">
          {title.split('|')?.map(item=>{
          return <span key={item+Math.random()}
           className=" inline-block px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border shadow-sm bg-gray-50 hover:scale-105 transition-all hover:-translate-y-[1px] cursor-pointer text-gray-500"
           >{item}</span>
        })}
        </div>
      </div>
      
    </div>
  );
};
Rangle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
export default Rangle;
