// @Store
export const initialState = {
    name : 'Zinser',
    loading: false,
    things: []
}

export const actions = {

    READY :( state, payload ) => ({
        loading :false 
    }),

    ADD_THING: (state, payload) =>({
        things: [...state.things, payload]
    })
}