import axios from 'axios' ;

const axiosInstance = axios.create({
    baseURL: 'https://json-sever-mrb.herokuapp.com/'
}) ;

const getDuration = async (id, date) => {
    const response = await axiosInstance.get(`room/${id}?date=${date}`) ;
    return response.data ;
}

export default getDuration