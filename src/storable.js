import { useState, useContext } from 'react'

const AppContext = React.createContext('app')

export const Store = ({ children, state, actions }) => {

    const [ store, setStore ] = useState( state || {})

    return (
        <AppContext.Provider value={{ store, setStore, actions }} >
            {children}
        </AppContext.Provider>
    )
}

export const connect = (keys = []) => ([Component, props]) => {
    
    const value = useContext( AppContext )
    const {setStore, actions, store} = value

    const dispatch = ( action, payload ) => {
        const newstate = actions[action](store, payload, dispatch)
        setStore({ ...store, ...newstate })
    }

    //Default Actions
    actions.CHANGE = (state, payload) => ({ [payload.key]: payload.value })
    actions.RESET = (state, payload) => ({ [payload.key]: null })

    const onlySelectedKeys = keys.reduce(
        (acc, key) => ({ ...acc, [key]: store[key] })
    ,{ dispatch })

    const newprops = { ...props, ...onlySelectedKeys }
    
    return [Component, newprops]
}