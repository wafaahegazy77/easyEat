import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

const CounterSlice = createSlice({
    name: 'counterDevTool' ,
    initialState,
    reducers: {
        increment : (state) => {
            state.counter++;
        },
        decrement : (state) => {
            state.counter--;
        },

    }
});

export const counterReducer = CounterSlice.reducer ;
export const {increment , decrement } = CounterSlice.actions;


