import axios from "axios";
import { CONSTANT } from "../constant";

export const getDataService = async () => {
    try {
        const res = await axios.post(CONSTANT.API_ENDPOINT+CONSTANT.API_PATH.GET_DATA, {
            email: CONSTANT.EMAIL,
            
        });
       return res.data;
    } catch (error) {
        console.error('Lỗi khi gửi POST:', error);
    }
}
export const sendContactService = async (data) => {
    try {
        const res = await axios.post(CONSTANT.API_ENDPOINT+CONSTANT.API_PATH.CONTACT, {
           ...data,
           email:CONSTANT.EMAIL
        });
       return res.data;
    } catch (error) {
        console.error('Lỗi khi gửi POST:', error);
    }
}
export const getBlogsService = async () => {
    try {
        const res = await axios.post(CONSTANT.API_ENDPOINT+CONSTANT.API_PATH.BLOGS, {
           email:CONSTANT.EMAIL
        });
       return res.data;
    } catch (error) {
        console.error('Lỗi khi gửi POST:', error);
    }
}
export const getBlogDetailService = async (slug) => {
    try {
        const res = await axios.post(CONSTANT.API_ENDPOINT+CONSTANT.API_PATH.BLOG_DETAIL+'/'+slug, {
           email:CONSTANT.EMAIL
        });
       return res.data;
    } catch (error) {
        console.error('Lỗi khi gửi POST:', error);
    }
}