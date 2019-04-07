import {http} from 'Services/http'

const api = 'https://wt-2946b7557b51080b2e586c6ae0abdf76-0.sandbox.auth0-extend.com'
const extractData = ({ data }) => data

export const getAragnificador = ( text ) => {
    return http.get(`${api}/aragnificador?text=${text}`)
        .then(extractData)
}

export const getNayarificador = (text) => {
    return http.get(`${api}/nayarificador?text=${text}`)
        .then(extractData)
}

export const getZinserificador = (text) => {
    return http.get(`${api}/zinserificador?text=${text}`)
        .then(extractData)
}