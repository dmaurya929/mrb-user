import axios from 'axios' ;

const axiosInstance = axios.create({
    baseURL: 'https://json-sever-mrb.herokuapp.com/'
}) ;

async function getAll(){
    const response = await axiosInstance.get('/rooms') ;
    
    return response.data ;
}

export default { getAll: getAll} ;