import {http} from 'Services/http'

// Sample - Characters
export const getCharacters = ( params = {} ) => {
    return http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
        .then(({ data }) => data)
}

