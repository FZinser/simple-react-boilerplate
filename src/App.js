import Counter from 'Components/Counter'
import {useState} from 'react'

export const AppContext = React.createContext('app')

export const App = () => {

	let [state, setState] = useState({})

	return (
		<AppContext.Provider value={{state, setState}} >
			<Counter />
		</AppContext.Provider>	
	)
}