import axios from 'axios';

interface httpClientParams {
    url:string
}

export class HttpClient {
    async get({url}:httpClientParams){
        const {data, status} = await axios.get(url);
        return {data,status};
        
    }
}