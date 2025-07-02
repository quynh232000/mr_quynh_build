import { useState } from "react";
import { postReviews } from "../../../firebase/fetchReviews";
import { FaAddressCard, FaVoicemail } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { PhoneCall } from "lucide-react";
import { sendContactService } from "../../../config/services/appService";
import { useSelector } from "react-redux";
const Review = () => {
  const [data, setData] = useState({
    name: "",
    email_contact: "",
    content: "",
  });
  const dataDB = useSelector((state) => state.get_data.data);
  const handleChangeName = (e) => setData({ ...data, name: e.target.value });
  const [mess,setMess] = useState({
    status:true,
    message:''
  })
  const handleChangeEmail = (e) => setData({ ...data, email_contact: e.target.value });
  const [loading,setLoading] = useState(false)
  const handleChangeContent = (e) =>
    setData({ ...data, content: e.target.value });
  const handleSubmit = async (e) => {
    setMess({
        status:true,
        message:''
      })
    e.preventDefault();
    if(!data.name || !data.email_contact || !data.content) {
      setMess({
        status:false,
        message:'Plase enter all field!'
      })
      return;}
    const isPost = await postReviews(data);
    if (isPost) {
      setLoading(true)
     sendContactService(data).then(res=>{
      setLoading(false)
      if(res.status){
        setData({ name: "", email_contact: "", content: "" });
      }
      setMess({...res})
     })
    } else {
      alert("Something went wrong, please try again!");
    }
  };
  return (
    <div>
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Leave a Contact
              </h1>
              <p className="text-gray-400 dark:text-gray-400">
               Let’s get in touch—I’d love to hear from you!
              </p>
            </div>
      <div className="flex items-center min-h-screen "  data-aos="zoom-in">
        <div className="container flex justify-between gap-2 w-full ">
          <div className=" flex-1 bg-white dark:bg-[#1e2329] shadow-lg p-5 rounded-md ">
            <div className="m-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChangeName}
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email_contact"
                    name="email_contact"
                    id="email_contact"
                    value={data.email_contact}
                    onChange={handleChangeEmail}
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    onChange={handleChangeContent}
                    value={data.content}
                  >
                  </textarea>
                </div>
                <div className={"mb-5 "+(mess.status ? 'text-green-500':' text-red-500')}>
                  {mess.message ?? mess.message}
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="bg-white dark:bg-[#1e2329] shadow-lg px-5 py-3 rounded-md flex flex-col border border-transparent hover:border-blue-500 items-center gap-3">
              <div className="w-12 h-12 border rounded-full border-blue-500 flex justify-center items-center text-2xl text-blue-500 shadow-lg bg-blue-50"><MdAlternateEmail className=" animate-pulse-scale transition-all" /></div>
              <div className="text-xl font-bold text-yellow-500">Email Me</div>
              <div>
                Drop me a line, and I will get back to you within 24 hours.
              </div>
              <div className="text-yellow-500">
               {dataDB?.data_info?.email_contact ?? '_'}
              </div>
            </div>
            <div className="bg-white dark:bg-[#1e2329] shadow-lg px-5 py-3 rounded-md flex flex-col border border-transparent hover:border-blue-500 items-center gap-3">
              <div className="w-12 h-12 border rounded-full border-blue-500 flex justify-center items-center text-2xl text-blue-500 shadow-lg bg-blue-50"><PhoneCall className=" animate-pulse-scale transition-all"/></div>
              <div className="text-xl font-bold text-yellow-500">Call Me</div>
              <div>
                Drop me a line, and I will get back to you within 24 hours.
              </div>
              <div className="text-yellow-500">
                 {dataDB?.data_info?.phone ?? '_'}
              </div>
            </div>
            <div className="bg-white dark:bg-[#1e2329] shadow-lg px-5 py-3 rounded-md flex flex-col border border-transparent hover:border-blue-500 items-center gap-3">
              <div className="w-12 h-12 border rounded-full border-blue-500 flex justify-center items-center text-2xl text-blue-500 shadow-lg bg-blue-50"><FaAddressCard className=" animate-pulse-scale transition-all"/></div>
              <div className="text-xl font-bold text-yellow-500">Visit  Me</div>
              <div>
                Drop me a line, and I will get back to you within 24 hours.
              </div>
              <div className="text-yellow-500">
                {dataDB?.data_info?.location ?? '_'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
