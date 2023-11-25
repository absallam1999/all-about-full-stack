import {INCREMENT, DECREMENT} from './types'

export const incrementAction = (dispatch) => {
    return dispatch({type: INCREMENT})
}

export const decrementAction = (dispatch) => {
    return dispatch({type: DECREMENT})
}