export const todo = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO': 
            return state.concat(action.payload)
    }

    return state
}

export const name = (state = '', action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return action.payload
    }

    return state 
}