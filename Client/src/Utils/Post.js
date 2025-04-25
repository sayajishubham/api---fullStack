import axios from 'axios';
import { toast } from 'react-toastify';

export const FetchData = async () => {
    try {
        let res = await axios.get("http://localhost:8001/api/user", {
            withCredentials: true
        })
        return res.data.data
    } catch (error) {
        toast.error(error.response.data.message);
    }
}


export const getUserIndividual = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8001/api/user/${id}`, {
            withCredentials: true
        })
        return res.data.user
    } catch (error) {
        console.log(error);
    }
}

export const deletebyadmin = async (id) => {
    try {
        let res = await axios.delete(`http://localhost:8001/api/user/delete/${id}`, {
            withCredentials: true
        })
        return res.data

    } catch (error) {
        toast.error()
    }
}

export const Editbyadmin = async (id, UpdateUsername, UpdateEmail,  UpdateLocation, UpdateDOB) => {
    try {
        let res = await axios.patch(`http://localhost:8001/api/user/update/${id}`, {
            Username: UpdateUsername,
            Email: UpdateEmail,
            Location: UpdateLocation,
            DOB: UpdateDOB
        }, {
            withCredentials: true
        })

        return res.data
    } catch (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
    }

}