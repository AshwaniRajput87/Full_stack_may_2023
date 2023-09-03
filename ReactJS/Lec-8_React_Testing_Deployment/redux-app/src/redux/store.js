import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import counterWithInputReducer from './slices/counterWithInputSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        counterWithInput: counterWithInputReducer,
    }
});