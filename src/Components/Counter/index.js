import enhancer from './enhancer'

const {Fragment} = React
const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const Counter = ({name, count, increment, decrement, setState, ...props}) => {

    return (
        <Fragment>
            {count > 5 ? <AsyncTitle /> : <Fragment>
                <h2> {name} Counter: {count}</h2>
                <button onClick={increment}>ADD</button>
                <button onClick={() => setState('aragao')}>SetState</button>
                <button onClick={decrement}>MINUS</button>
            </Fragment>
            }
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