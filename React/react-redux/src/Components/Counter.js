import {incrementAction, decrementAction} from '../Redux/actions/counterActions'
import {useSelector, useDispatch} from 'react-redux'

export default function Counter() {

    const counterState = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        incrementAction(dispatch)
    }

    const handleDecrement = () => {
        decrementAction(dispatch)
    }

    return(
        <div>
            <h1>{counterState}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    )    
}