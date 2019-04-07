import axios from 'axios'

// Use Http as a wrapper for axios
export const http = {
    
    get( url, params ){
        return axios.get(url, params)
            .then(({data}) => data)
    }
}