import { compose, withEffect, withMount } from 'composable'
import { connect } from 'storable'

/** 
 * @Enhancer
 * This Enhancer saves in the store when state changes,
 * and loads from localStorage on Component Mount.
 */

const KEY = 'app'

export default compose(

    connect(),

    withMount(({ dispatch }) => {
        const state = localStorage.getItem(KEY)
        if (state) {
            const payload = JSON.parse(state)
            dispatch({ type: 'SET', payload })
        }
    }),

    withEffect((props) => {
        localStorage.setItem(KEY, JSON.stringify(props.state))
    }, ['state'])
)   