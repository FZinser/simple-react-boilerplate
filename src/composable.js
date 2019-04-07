import {useState, useEffect} from 'react'

export const compose = (...args) => {
    return ( Component ) => (props) => {
        const fn = pipe.apply( null, args )
        const [cp, ps] = fn([ Component, props ])
        return cp(ps)
    }
}

export const withState = ( name, namefn, value ) => ([ Component, props ]) => {
    const [variable, method] = useState( value ) 
    return [Component, { ...props,  [name] :variable, [namefn]:method }] 
}

export const withHandlers = ( actions ) => ([ Component, props ]) => {
    for( let name in actions )
        props[ name ] = (e) => actions[ name ]( props )( e )
    return [Component, props]
}

export const withEffect = ( fn, option ) => ([ Component, props ]) => {
    const options = (option || []).map( name => props[name] )
    useEffect(() => fn(props), option ? options : null)
    return [Component, props]
}

export const withTap = (fn) => ([Component, props]) => {
    fn(props)
    return [Component, props]
}

export const withMount = (fn) => ([Component, props]) => {
    useEffect(() => { fn(props) }, [])
    return [Component, props]
}

export const withWillUnmount = (fn) => ([Component, props]) => {
    useEffect(() => () => fn(props), [])
    return [Component, props]
}

const pipe = (fn, ...fns) => (...args) => {
    return fns.reduce((acc, fn) => fn(acc), fn(...args))
}