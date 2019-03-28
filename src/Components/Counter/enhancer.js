import { compose, withHandlers, withState, withMount, withWillUnmount, withEffect } from 'composable'
import { connect } from 'storable'

export default compose(

    connect(),

    withState('count', 'updateCount', 0),

    withMount((props) => {
        console.log('[Counter] - Mount',)
    }),

    withEffect((props) => {
        console.log(props)
    }),

    withWillUnmount(() => {
        console.log('[Counter] - UnMount')
    }),

    withHandlers({
        
        increment: ({ count, updateCount }) => (e) => {
            updateCount(count + 1)
        },

        decrement: ({ count, updateCount }) => (e) => {
            updateCount(count - 1)
        },

        updateName: ({ dispatch }) => (e) => {
            dispatch('CHANGE', { key:'name', value:null })
        }
    })

)   