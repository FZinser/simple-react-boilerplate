import { http } from 'Services/http'

const api = 'https://wt-2946b7557b51080b2e586c6ae0abdf76-0.sandbox.auth0-extend.com'

const extractData = ({ data }) => data

export const getZinserLambda = (endpoint, text) => {
    return http.get(`${api}${endpoint}?text=${text}`)
        .then(extractData)
}