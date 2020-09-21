import axios from 'axios' ;

const axiosInstance = axios.create({
    baseURL: "https://json-sever-mrb.herokuapp.com"
})

const getAll = async () => {
    const response = await axiosInstance.get("/equipment") ;
    return response.data ;
}

export default { getAll: getAll } ;