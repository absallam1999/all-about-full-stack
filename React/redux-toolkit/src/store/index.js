import {configureStore, createSlice} from '@reduxjs/toolkit'



const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            state.counter  += 1
        }, 
        decrement: (state, action) => {
            state.counter -=  1
        },
        addByVal: (state, action) => {
            state.counter += action.payload
        }
    }
})

export const {increment, decrement, addByVal} = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store 