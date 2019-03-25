import enhancer from './enhancer'
import { AppContext } from '../../App'

const {Fragment} = React
const Title = React.lazy(() => import(/* webpackChunkName:"LazyTitle" */ 'Components/Title'))

const Counter = (oldprops) => {
    return (
        <AppContext.Consumer>
            { (context) => <Comp {...context} {...oldprops} /> }
        </AppContext.Consumer>
    )
}


const Comp = enhancer(({count, increment, decrement, setState, ...props}) => !console.log(props) && (
    <Fragment>
        { count > 5 ? <AsyncTitle /> : null }
        <h2>Counter: {count}</h2>
        <button onClick={increment}>ADD</button>
        <button onClick={() => setState('aragao')}>SetState</button>
        <button onClick={decrement}>MINUS</button>
    </Fragment>
))
const AsyncTitle = () => {
    return (
        <React.Suspense fallback={null}>
            <Title name={'zinser'} />
        </React.Suspense>
    )
}

export default Counter