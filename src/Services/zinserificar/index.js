import {http} from 'Services/http'

export const getZinserificado = ( text ) => {
    return http.get(`https://wt-2946b7557b51080b2e586c6ae0abdf76-0.sandbox.auth0-extend.com/zinserificador?text=${text}`)
        .then(({ data }) => data)
}