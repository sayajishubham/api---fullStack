import axios from 'axios';
import { toast } from 'react-toastify';

export const Signup = async (Userdata) => {
    try {
        const res = await axios.post("http://localhost:8001/api/user/signup", Userdata, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
};


export const Singin = async (Userdata) => {
    try {
        const res = await axios.post("http://localhost:8001/api/user/signin", Userdata, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
    }
}
