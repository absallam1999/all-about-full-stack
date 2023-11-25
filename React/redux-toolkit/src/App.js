import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, addByVal} from './store'

export default function App() {
    const countState = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const handleIncrement = () => {
    dispatch(increment())
    }
    const handleDecrement = () => {
    dispatch(decrement())
    }
    const addBy = (value) => {
        dispatch(addByVal(value))
    }

    return(
        <div>
            <h1>Counter Application</h1>
            <p>{countState}</p>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={() => addBy(5)}>ADD 5</button>
        </div>
    )
}