
import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'userDetails',
    // initial state
    initialState: {
        data: null,
        error: null,
        isLoading: false,
    },

    reducers: {
        fetchDataStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        fetchDataSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },

        fetchDataFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }   
    }
});

export default userSlice.reducer;

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure} = userSlice.actions;

