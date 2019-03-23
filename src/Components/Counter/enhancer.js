import { compose, withHandlers, withState, withEffect } from 'rvcompose'

export default compose(

    withState('count', 'updateCount', 0),
    
    withEffect((props) => {
        console.log('[Counter] => withEffect', props)
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