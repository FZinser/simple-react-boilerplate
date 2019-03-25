import {useState, useEffect} from 'react'

export const compose = (...args) => {
    return Component => (props) => {
        const fn = pipe.apply(null, args)
        return Component( fn(props) )
    }
}

export const withState = ( name, namefn, value ) => ( props ) => {
    const [variable, method] = useState( value ) 
    return {
        ...props, 
        [name] :variable,
        [namefn]:method
    } 
}

export const withHandlers = ( actions ) => ( props ) => {
    for( let name in actions )
        props[ name ] = (e) => actions[ name ]( props )( e )
    return props
}

export const withEffect = ( fn, option ) => ( props ) => {
    useEffect(() => fn(props), option)
    return props
}

const pipe = (fn, ...fns) => (...args) => {
    return fns.reduce((acc, fn) => fn(acc), fn(...args))
}