import {INCREMENT, DECREMENT} from '../actions/types'

const counterReducer = (state = {count: 0}, actions) => {
    switch(actions.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

export default counterReducer