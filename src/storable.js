import { useReducer, useContext } from 'react'

const Context = React.createContext()

export const Store = ({ children, initialState, reducer }) => {
    const [state, dispatch] = useReducer( reducer, initialState )
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export const connect = () => ([ Component, props ]) => {
    const context = useContext( Context )
    return [ Component, { ...props, ...context } ]
}

// https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch
export const combineReducers = ( reducers ) => (state = {}, action) => {
    // A particular case for acessing entire state from Store
    if( action.type == 'SET' )
        return action.payload
    
    return Object.keys( reducers ).reduce((nextState, key) => {
        nextState[key] = reducers[key]( state[key], action )
        return nextState
    }, {})
}
