import axios from "axios";

export function api() {
    return axios.create({
        baseURL: "http://localhost:3002",
    })
} 

//  api().get('/post')
//  api().post('/post')
// axios.get(`http://localhost:3002/posts`)
// axios.post(`http://localhost:3002/posts`)