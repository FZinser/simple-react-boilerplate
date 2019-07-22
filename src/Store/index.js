import { combineReducers } from 'storable'

import { 
    name,
    todo
} from './reducers'

// @Initial State
export const initialState = {
    name : 'Zinser',
    todo : []
}

// @Reducers
export const reducer = combineReducers({
    name,
    todo
})
