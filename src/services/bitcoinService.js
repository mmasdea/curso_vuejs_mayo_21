import http from './api/apiBitcoinClient';

const getPrecioBitcoin = async() =>{
    return await http.get().then((response) =>{
        return response;
    }).catch((err)=>{
        return err;
    })
    
}
const exported = {
    getPrecioBitcoin,
}

export default exported;