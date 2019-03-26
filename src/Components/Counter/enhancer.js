import { compose, withHandlers, withState, withMount, withWillUnmount } from 'rvcompose'
import { connect } from '../../Stores'

export default compose(

    connect(),

    withState('count', 'updateCount', 0),

    withMount(() => {
        console.log('[Counter] - Mount')
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
        }
    })

)   