
import { useEffect, useState } from "react"
import { Offcanvas } from "../../components/commons"
import { FaRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { getBlogsService } from "../../config/services/appService"


function BlogPage() {
    const [data,setData] = useState([])
     useEffect(()=>{
        getBlogsService().then(res=>{
            if(res.status){
                setData(res.data)
            }
        })
     },[])
  return (
    <>
     <Offcanvas></Offcanvas>
     <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
        <h1 className="text-center py-3 mt-5 text-3xl font-bold dark:text-white">
        Blogs
        </h1>
        <div>
           {data && data.length > 0 ? data.map(item=>{
            return  <section key={item.id} className="py-8 max-lg:px-4 max-md:px-8 max-sm:px-0 max-md:py-4 max-w-4xl mx-auto">
                  
                  <div className="flex flex-col gap-8 w-full mx-auto">
                   
                     <article className="bg-white dark:bg-zinc-900/25 dark:border dark:border-zinc-800 dark:hover:border-mint-300 hover:backdrop-blur-none backdrop-blur-lg shadow-sm overflow-auto hover:shadow-[5px_5px_rgba(0,98,90,0.4),10px_10px_rgba(0,98,90,0.3),15px_15px_rgba(0,98,90,0.2),20px_20px_rgba(0,98,90,0.1),25px_25px_rgba(0,98,90,0.05)] p-8 max-md:p-6 w-full flex justify-between items-center bg-linear-to-r hover:from-teal-200 hover:to-emerald-200 dark:hover:from-riptide-500 dark:hover:to-mint-500 transition-all hover:scale-105 duration-200 ease-in-out gap-8 max-md:gap-4 rounded-3xl max-md:flex-col-reverse">
                            <div className="flex flex-col">
                                <Link  to={"/blog/"+item?.slug} className="flex flex-col gap-4 w-full">
                                
                                <span
                                    className={`flex flex-row center text-sm font-semibold items-center gap-3 text-blacktext dark:text-riptide-50`}
                                >
                                    {new Date(item.created_at??'12-06-2024').toLocaleDateString("en-US", {
                                            timeZone: "UTC", 
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                <h2 className="dark:text-mint-50 text-blacktext text-3xl font-bold text-pretty">
                               {item?.title}
                                </h2>
                            <div
                                    className={`flex justify-start items-center gap-2 text-blacktext dark:text-mint-50 `}
                                    >
                                    <span className="font-medium tracking-wider">Read more </span>
                                    <FaRightLong/>
                                    </div>
                                </Link>

                                <div className="flex gap-2 flex-wrap mt-3">
                                    {item?.tags?.map(tag=>{
                                        return <span key={tag} className="bg-gray-50 shadow-lg text-gray-500 py-1 px-4 border rounded-lg inline-block">
                                        {tag}
                                    </span>
                                    })}
                                    
                                  
                                    
                                </div>
                            </div>

                        <Link to={"/blog/"+item?.slug}
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="shrink-0 rounded-2xl bg-center bg-cover aspect-video max-md:aspect-video w-2/6 max-md:w-full"
                        />
                   
                    </article>


                  </div>
            </section>
           }):<div className="text-center text-red-500 mt-5">No Data Found!</div>}
            
           

        </div>
    </div>
    </>
  )
}

export default BlogPage