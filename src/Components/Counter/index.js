import enhancer from './enhancer'
import {Link} from 'react-router-dom'
import { Fragment } from 'react'

const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const Counter = ({name, count, increment, decrement, updateName, ...props}) => {

    return (
        <div className='counter-holder'>
            <Link className='link' to='/zinserificador'>Zinserificador</Link>
            <Link className='link' to='/nayarificador'>Nayarificador</Link>
            <Link className='link' to='/aragnificador'>Aragnificador</Link>
            {count > 5 ? <AsyncTitle /> : <Fragment>
                <h2> {name} Counter: {count}</h2>
                <button onClick={increment}>ADD</button>
                <button onClick={updateName}>SetState</button>
                <button onClick={decrement}>MINUS</button>
            </Fragment>}
        </div>
    )   
}

const AsyncTitle = () => {
    return (
        <React.Suspense fallback={null}>
            <Title name={'zinser'} />
        </React.Suspense>
    )
}

export default enhancer(Counter)