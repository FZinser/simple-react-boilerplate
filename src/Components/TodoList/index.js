import enhancer from './enhancer'
import Input from 'Components/InputField'

const TodoList = ({addThing, state, setInput, todo }) => {
    return (
        <div className='todo-holder'>
            <Input onChange={setInput} value={todo}/>
            <button onClick={addThing}>Adicionar</button>
            <Items list={state.todo} />
        </div>
    )   
}

const Items = ({ list }) => {
    return (
        <ul>
            { list.map((item, index) => ( <li key={index}>{item}</li>) ) }
        </ul>
    )
}

export default enhancer( TodoList )