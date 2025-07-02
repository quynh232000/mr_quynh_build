import { useEffect, useState } from "react"
import { Offcanvas } from "../../components/commons"
import { getBlogDetailService } from "../../config/services/appService"
import { useParams } from "react-router-dom";

function BlogDetailPage() {
   const [data,setData] = useState(null)
    const { slug } = useParams();
       useEffect(()=>{
        if(slug){

        
          getBlogDetailService(slug).then(res=>{
              if(res.status){
                  setData(res.data)
              }
          })}
       },[slug])
       if(!data) return <div className="text-center mt-5 text-red-500">No data Found!</div>
  return (
    <>
      <Offcanvas></Offcanvas>
        <section className="py-8 max-lg:px-4 max-md:px-8 max-sm:px-0 max-md:py-4 max-w-4xl mx-auto">
           <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
              <h1 className=" py-3 mt-5 text-3xl font-bold dark:text-white">
                {data.title}
              </h1>
              <div className="text-gray-500">{data.creator.full_name??'_'} - {new Date(data.created_at??'12-06-2024').toLocaleDateString("en-US", {
                                            timeZone: "UTC", 
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}</div>
            </div>
          <div className="mt-5">
            <div className="w-full h-full">
              <img  className="w-full h-full rounded-xl" src={data.image} alt="" />
            </div>
              <div className="my-5" dangerouslySetInnerHTML={{__html:data.description}}>

              </div>

          </div>
        </section>
    </>
  )
}

export default BlogDetailPage