// @Store

export const initialState = {
    name : 'Zinser',
    loading: false,
    things: []
}

export const actions = {
    
    FETCH_STORIES :( state, payload, dispatch ) => {
        fetch().then(({data}) => dispatch('READY', { data }))
        return {
            loading :true
        }
    },

    READY :( state, payload ) => ({
        loading :false 
    }),

    ADD_THING: (state, payload) =>({
        things: [...state.things, payload]
    })
}