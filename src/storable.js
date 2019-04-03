import { useState, useContext, useEffect } from 'react'

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
        <AppContext.Provider value={{ ...store, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}

export const connect = (keys = []) => ([Component, props]) => {
    const value = useContext(AppContext)
    const onlySelectedKeys = keys.reduce(
        (acc, key) => {
            return {...acc, [key]: value[key]}
        }, {dispatch: value.dispatch}
    )
    const newprops = { ...props, ...onlySelectedKeys }
    return [Component, newprops]
}