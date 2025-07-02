// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
const data = sessionStorage.getItem('DATA') ?? null
const initialState = {
    data: data ? JSON.parse(data) : null,
};

const appSlice = createSlice({
    name: 'get_data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            // sessionStorage.setItem('DATA', JSON.stringify(action.payload))
        },


    },
});

export const { setData } = appSlice.actions;

export default appSlice.reducer;
