import axios from "axios";

export function api() {
    return axios.create({
        baseURL: "https://harmini-genclik-backend.herokuapp.com",
    })
} 

//  api().get('/post')
//  api().post('/post')
// axios.get(`https://harmini-genclik-backend.herokuapp.com`)
// axios.post(`https://harmini-genclik-backend.herokuapp.com`)