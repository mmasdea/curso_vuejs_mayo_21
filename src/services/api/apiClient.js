import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_TEMPERATURA
})

/* http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`; */
//http.defaults.headers.common['x-rapidapi-key'] = '7d34db1266msh809a1296083103ap1da6e0jsn64928547107c';
//http.defaults.headers.common['x-rapidapi-host'] = 'climacell-microweather-v1.p.rapidapi.com';




export default http