import http from './api/apiClient';

const getTemperature = async() =>{
    return await http.get().then((response) =>{
        return response;
    }).catch((err)=>{
        return err;
    })
    
}
const exported = {
    getTemperature,
}

export default exported;