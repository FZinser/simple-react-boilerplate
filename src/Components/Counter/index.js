import enhancer from './enhancer'

const {Fragment} = React
const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const Counter = ({ count, increment, decrement }) => {
    return (
        <Fragment>
            { count > 5 ? <AsyncTitle /> : null }
            <h2>Counter: {count}</h2>
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>MINUS</button>
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