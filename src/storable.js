import { useState, useContext } from 'react'

const AppContext = React.createContext('app')

export const Store = ({ children, state, actions }) => {

    const [ store, setStore ] = useState( state || {})
    
    //Default Actions
    actions.CHANGE = (state, payload) => ({ [payload.key]: payload.value })
    actions.RESET = (state, payload) => ({ [payload.key]: null })

    const dispatch = ( action, payload ) => {
        const newstate = actions[action](store, payload, dispatch)
        setStore({ ...store, ...newstate })
    }

    return (
        <AppContext.Provider value={{ store, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}

export const connect = () => ([Component, props]) => {
    const value = useContext(AppContext)
    const newprops = { ...props, ...value }
    return [Component, newprops]
}