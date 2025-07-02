import { Briefcase } from "lucide-react"
import { workExperience } from "../../../assets/data"
import { useSelector } from "react-redux";


function Experience() {
  const dataDB = useSelector((state) => state.get_data.data);
  if(!(dataDB?.data_info?.work_experience && dataDB?.data_info?.work_experience.length >0)) return null;
  const work_experience = dataDB?.data_info?.work_experience
  return (
   <div className=" lg:mt-10 ">
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-muted/20 to-background "
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <div className="flex dark:text-white  justify-center items-center mb-12">
          <div className="xl:w-1/2">
            <h2
              id="work"
              data-aos="fade-up"
              className="text-center text-3xl font-semibold mb-2"
            >
              💼 Work Experience
            </h2>
            <p
                className="text-gray-500 text-center text-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
              Where I turned knowledge into results and contributed to real-world success.
              </p>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-5">
          {work_experience.map((job, index) => (
                  <div
                  key={index}
                      className="relative flex gap-6 w-full"
                   
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className="flex h-[18px] w-[18px] rounded-full border border-purple-500/50 bg-background dark:bg-muted z-10"
                         
                        />
                        {!(index === workExperience.length - 1) && (
                          <div
                            className="w-px grow bg-gradient-to-b from-purple-500/50 to-pink-500/30 dark:from-purple-500/30 dark:to-pink-500/10"
                           
                          />
                        )}
                      </div>
                      <div className={'pb-8 w-full  ' + ((index === workExperience.length - 1) ? "pb-0" : "")}>
                        <div
                          className="flex flex-col gap-0.5"
                         
                        >
                          <h3 className="font-medium">{`👨‍💻 ${job.position} | ${job.company}`}</h3>
                          <p className="text-sm text-muted-foreground">{`🌍 ${job.location}`}</p>
                          <p className="text-xs text-muted-foreground/70 mb-2">{`📅 ${job.period}`}</p>
                        </div>
                        <div
                        >
                          <div
                            className="mt-3 w-full  p-4 bg-white dark:bg-[#1e2329] backdrop-blur-sm backdrop-filter  rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                          
                          >
                            <div className="flex items-center mb-3">
                              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                                <Briefcase className="h-4 w-4 text-purple-500" />
                              </div>
                              <h4 className="text-sm font-medium">Key Achievements</h4>
                            </div>
                            <ul className="list-none ml-4 space-y-2 text-sm">
                              {job?.achievements?.split('|')?.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground text-gray-500 relative pl-6"
                                
                                >
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                  </div>
               
          ))}
        </div>
      </div>
    </section>




      </div>
  )
}

export default Experience