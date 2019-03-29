import enhancer from './enhancer'
import {Link} from 'react-router-dom'

const {Fragment} = React
const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const Counter = ({name, count, increment, decrement, updateName, ...props}) => {

    return (
        <Fragment>
            <Link to='/zinserificador'>Zinserificador</Link>
            <Link to='/nayarificador'>Nayarificador</Link>
            <Link to='/aragnificador'>Aragnificador</Link>
            {count > 5 ? <AsyncTitle /> : <Fragment>
                <h2> {name} Counter: {count}</h2>
                <button onClick={increment}>ADD</button>
                <button onClick={updateName}>SetState</button>
                <button onClick={decrement}>MINUS</button>
            </Fragment>}
        </Fragment>
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