// @Store
export const initialState = {
    name : 'Zinser',
    things: []
}

export const actions = {

    ADD_THING: (state, payload) =>({
        things: [...state.things, payload]
    })
}