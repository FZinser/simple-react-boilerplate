import enhancer from './enhancer'
import { Link } from 'react-router-dom'
import { Fragment, memo } from 'react'
import Input from 'Components/InputField'



const TodoList = ({addThing, things, setInput, todo, ...props}) => {
    return (
        <div className='todo-holder'>
            <Input onChange={setInput} value={todo}/>
            <button onClick={addThing}>Adicionar</button>
            <ul>
                {
                    things.map( (item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )   
}

export default enhancer(TodoList)