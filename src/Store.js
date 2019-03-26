import { useState, useContext } from 'react'

const AppContext = React.createContext('app')

export const Store = ({ children }) => {

    const [state, setState] = useState({})

    return (
        <AppContext.Provider value={{ state, setState }} >
            {children}
        </AppContext.Provider>
    )
}

export const connect = () => ([Component, props]) => {
    const value = useContext(AppContext)
    const newprops = { ...props, ...value }
    return [Component, newprops]
}
